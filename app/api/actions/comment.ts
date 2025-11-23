'use server';

import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

// Validation schema
const commentSchema = z.object({
  articleSlug: z.string().min(1),
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email').optional().or(z.literal('')),
  content: z.string().min(10, 'Comment must be at least 10 characters').max(2000, 'Comment must be less than 2000 characters'),
  parentId: z.string().optional(),
});

export type CommentFormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    content?: string[];
  };
};

/**
 * Create a new comment
 * Comments are auto-approved for now (can add moderation later)
 */
export async function createComment(
  prevState: CommentFormState,
  formData: FormData
): Promise<CommentFormState> {
  try {
    const rawData = {
      articleSlug: formData.get('articleSlug') as string,
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      content: formData.get('content') as string,
      parentId: formData.get('parentId') as string | undefined,
    };

    // Validate
    const validatedData = commentSchema.safeParse(rawData);
    
    if (!validatedData.success) {
      return {
        success: false,
        message: 'Please fix the errors below',
        errors: validatedData.error.flatten().fieldErrors,
      };
    }

    // Create comment
    await prisma.comment.create({
      data: {
        articleSlug: validatedData.data.articleSlug,
        name: validatedData.data.name,
        email: validatedData.data.email || null,
        content: validatedData.data.content,
        parentId: validatedData.data.parentId || null,
        approved: true, // Auto-approve (change to false for moderation)
      },
    });

    // Revalidate the article page
    revalidatePath(`/updates/${validatedData.data.articleSlug}`);

    return {
      success: true,
      message: 'Comment posted successfully!',
    };
  } catch (error) {
    console.error('Error creating comment:', error);
    return {
      success: false,
      message: 'Failed to post comment. Please try again.',
    };
  }
}

/**
 * Get all approved comments for an article with replies
 */
export async function getComments(articleSlug: string) {
  try {
    const comments = await prisma.comment.findMany({
      where: {
        articleSlug,
        approved: true,
        parentId: null, // Only get top-level comments
      },
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        name: true,
        content: true,
        createdAt: true,
        replies: {
          where: {
            approved: true,
          },
          orderBy: {
            createdAt: 'asc',
          },
          select: {
            id: true,
            name: true,
            content: true,
            createdAt: true,
          },
        },
      },
    });

    return comments;
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
}

/**
 * Get comment count for an article
 */
export async function getCommentCount(articleSlug: string): Promise<number> {
  try {
    const count = await prisma.comment.count({
      where: {
        articleSlug,
        approved: true,
      },
    });

    return count;
  } catch (error) {
    console.error('Error fetching comment count:', error);
    return 0;
  }
}


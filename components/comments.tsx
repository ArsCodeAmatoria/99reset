'use client';

import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { createComment, type CommentFormState } from '@/app/api/actions/comment';
import { MessageCircle, Send } from 'lucide-react';

interface Reply {
  id: string;
  name: string;
  content: string;
  createdAt: Date;
}

interface Comment {
  id: string;
  name: string;
  content: string;
  createdAt: Date;
  replies?: Reply[];
}

interface CommentsProps {
  articleSlug: string;
  initialComments: Comment[];
  commentCount: number;
}

const initialState: CommentFormState = {
  success: false,
  message: '',
};

export function Comments({ articleSlug, initialComments, commentCount }: CommentsProps) {
  const [state, formAction] = useFormState(createComment, initialState);
  const formRef = React.useRef<HTMLFormElement>(null);
  const [isPending, setIsPending] = React.useState(false);
  const [replyingTo, setReplyingTo] = React.useState<string | null>(null);

  // Reset form on success
  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      setIsPending(false);
      setReplyingTo(null);
    } else if (state.message && !state.success) {
      setIsPending(false);
    }
  }, [state.success, state.message]);

  const handleSubmit = async (formData: FormData) => {
    setIsPending(true);
    formAction(formData);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16 border-t-2 border-gray-200 dark:border-gray-800">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-gray-200 dark:border-gray-800">
          <MessageCircle className="h-6 w-6 text-red-600" />
          <h2 className="text-2xl font-serif font-bold text-black dark:text-white">
            Comments {commentCount > 0 && `(${commentCount})`}
          </h2>
        </div>

        {/* Comment Form */}
        <form ref={formRef} action={handleSubmit} className="space-y-4">
          <input type="hidden" name="articleSlug" value={articleSlug} />
          <input type="hidden" name="parentId" value={replyingTo || ''} />
          
          {replyingTo && (
            <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-950/20 border-l-4 border-red-600">
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Replying to a comment
              </span>
              <button
                type="button"
                onClick={() => setReplyingTo(null)}
                className="text-sm text-red-600 hover:text-red-700 font-bold"
              >
                Cancel
              </button>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-black dark:text-white mb-2">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white focus:border-red-600 dark:focus:border-red-600 focus:outline-none transition-colors"
                placeholder="Your name"
                disabled={isPending}
              />
              {state.errors?.name && (
                <p className="mt-1 text-sm text-red-600">{state.errors.name[0]}</p>
              )}
            </div>

            {/* Email (Optional) */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-black dark:text-white mb-2">
                Email <span className="text-gray-400 text-xs">(optional)</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white focus:border-red-600 dark:focus:border-red-600 focus:outline-none transition-colors"
                placeholder="your@email.com"
                disabled={isPending}
              />
              {state.errors?.email && (
                <p className="mt-1 text-sm text-red-600">{state.errors.email[0]}</p>
              )}
            </div>
          </div>

          {/* Comment */}
          <div>
            <label htmlFor="content" className="block text-sm font-bold text-black dark:text-white mb-2">
              Comment <span className="text-red-600">*</span>
            </label>
            <textarea
              id="content"
              name="content"
              required
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white focus:border-red-600 dark:focus:border-red-600 focus:outline-none transition-colors resize-none"
              placeholder="Share your thoughts..."
              disabled={isPending}
            />
            {state.errors?.content && (
              <p className="mt-1 text-sm text-red-600">{state.errors.content[0]}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Be respectful and constructive
            </p>
            <button
              type="submit"
              disabled={isPending}
              className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-bold hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isPending ? (
                <>Processing...</>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Post Comment</span>
                </>
              )}
            </button>
          </div>

          {/* Status Messages */}
          {state.message && (
            <div
              className={`p-4 border-l-4 ${
                state.success
                  ? 'bg-green-50 dark:bg-green-950/20 border-green-600 text-green-800 dark:text-green-200'
                  : 'bg-red-50 dark:bg-red-950/20 border-red-600 text-red-800 dark:text-red-200'
              }`}
            >
              {state.message}
            </div>
          )}
        </form>

        {/* Comments List */}
        {initialComments.length > 0 ? (
          <div className="space-y-6 mt-12">
            <h3 className="text-lg font-serif font-bold text-black dark:text-white">
              Recent Comments
            </h3>
            {initialComments.map((comment) => (
              <div key={comment.id} className="space-y-4">
                {/* Main Comment */}
                <div className="p-6 bg-gray-50 dark:bg-gray-900 border-l-4 border-gray-300 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-black dark:text-white">{comment.name}</span>
                    <time className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(comment.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-wrap mb-4">
                    {comment.content}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setReplyingTo(comment.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-sm text-red-600 hover:text-red-700 font-bold"
                  >
                    Reply
                  </button>
                </div>

                {/* Replies */}
                {comment.replies && comment.replies.length > 0 && (
                  <div className="ml-8 space-y-4">
                    {comment.replies.map((reply) => (
                      <div
                        key={reply.id}
                        className="p-4 bg-white dark:bg-black border-l-4 border-red-600"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-sm text-black dark:text-white">
                            {reply.name}
                          </span>
                          <time className="text-xs text-gray-500 dark:text-gray-400">
                            {new Date(reply.createdAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </time>
                        </div>
                        <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-wrap">
                          {reply.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <MessageCircle className="h-12 w-12 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">
              No comments yet. Be the first to share your thoughts!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}


'use client';

import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { createComment, type CommentFormState } from '@/app/api/actions/comment';
import { MessageCircle, Send, Heart, Repeat2, BarChart3, Share } from 'lucide-react';

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

// Generate avatar color from name
const getAvatarColor = (name: string): string => {
  const colors = [
    'bg-blue-500',
    'bg-red-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-orange-500',
    'bg-pink-500',
    'bg-cyan-500',
    'bg-indigo-500',
  ];
  const index = name.length % colors.length;
  return colors[index];
};

// Get initials from name
const getInitials = (name: string): string => {
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

// Format time like X (e.g., "2h", "3d", "Nov 15")
const formatTime = (date: Date): string => {
  const now = new Date();
  const diff = now.getTime() - new Date(date).getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return `${seconds}s`;
  if (minutes < 60) return `${minutes}m`;
  if (hours < 24) return `${hours}h`;
  if (days < 7) return `${days}d`;
  
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
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
    <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200 dark:border-gray-800">
      <div className="space-y-1">
        {/* Header */}
        <div className="flex items-center gap-3 pb-4 mb-4">
          <MessageCircle className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          <h2 className="text-xl font-bold text-black dark:text-white">
            {commentCount} {commentCount === 1 ? 'Comment' : 'Comments'}
          </h2>
        </div>

        {/* Comment Form - X Style */}
        <form ref={formRef} action={handleSubmit} className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-800">
          <input type="hidden" name="articleSlug" value={articleSlug} />
          <input type="hidden" name="parentId" value={replyingTo || ''} />
          
          {replyingTo && (
            <div className="flex items-center justify-between p-2 mb-2 bg-blue-50 dark:bg-blue-950/20 rounded-full">
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                Replying to a comment
              </span>
              <button
                type="button"
                onClick={() => setReplyingTo(null)}
                className="text-sm text-blue-600 hover:text-blue-700 font-bold mr-2"
              >
                ✕
              </button>
            </div>
          )}
          
          <div className="flex gap-3">
            {/* Avatar Placeholder */}
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-bold">?</span>
            </div>
            
            <div className="flex-1 space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  name="name"
                  required
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-full bg-white dark:bg-black text-black dark:text-white focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Your name"
                  disabled={isPending}
                />
                <input
                  type="email"
                  name="email"
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-full bg-white dark:bg-black text-black dark:text-white focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Email (optional)"
                  disabled={isPending}
                />
              </div>
              
              <textarea
                name="content"
                required
                rows={3}
                className="w-full px-3 py-2 text-sm border-0 bg-transparent text-black dark:text-white focus:outline-none resize-none placeholder-gray-500"
                placeholder="Post your reply"
                disabled={isPending}
              />
              
              {state.errors && (
                <div className="text-sm text-red-600">
                  {state.errors.name?.[0] || state.errors.email?.[0] || state.errors.content?.[0]}
                </div>
              )}
              
              <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-800">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {state.success && '✓ Posted!'}
                  {!state.success && state.message && state.message}
                </div>
                <button
                  type="submit"
                  disabled={isPending}
                  className="px-4 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isPending ? 'Posting...' : 'Reply'}
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Comments List - X Style */}
        {initialComments.length > 0 ? (
          <div className="space-y-0">
            {initialComments.map((comment) => (
              <div key={comment.id}>
                {/* Main Comment */}
                <div className="flex gap-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors border-b border-gray-200 dark:border-gray-800">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full ${getAvatarColor(comment.name)} flex items-center justify-center text-white font-bold text-sm`}>
                      {getInitials(comment.name)}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-black dark:text-white hover:underline cursor-pointer text-sm">
                        {comment.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        · {formatTime(comment.createdAt)}
                      </span>
                    </div>
                    
                    {/* Comment Text */}
                    <p className="text-black dark:text-white text-sm leading-normal whitespace-pre-wrap mb-3">
                      {comment.content}
                    </p>
                    
                    {/* Actions */}
                    <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400">
                      <button
                        type="button"
                        onClick={() => {
                          setReplyingTo(comment.id);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="flex items-center gap-1 hover:text-blue-500 transition-colors group"
                      >
                        <div className="p-1.5 rounded-full group-hover:bg-blue-500/10">
                          <MessageCircle className="h-4 w-4" />
                        </div>
                        <span className="text-xs">{comment.replies?.length || 0}</span>
                      </button>
                      
                      <button className="flex items-center gap-1 hover:text-green-500 transition-colors group">
                        <div className="p-1.5 rounded-full group-hover:bg-green-500/10">
                          <Repeat2 className="h-4 w-4" />
                        </div>
                      </button>
                      
                      <button className="flex items-center gap-1 hover:text-red-500 transition-colors group">
                        <div className="p-1.5 rounded-full group-hover:bg-red-500/10">
                          <Heart className="h-4 w-4" />
                        </div>
                      </button>
                      
                      <button className="flex items-center gap-1 hover:text-blue-500 transition-colors group">
                        <div className="p-1.5 rounded-full group-hover:bg-blue-500/10">
                          <Share className="h-4 w-4" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Replies */}
                {comment.replies && comment.replies.length > 0 && (
                  <div className="border-l-2 border-gray-200 dark:border-gray-800 ml-8">
                    {comment.replies.map((reply) => (
                      <div
                        key={reply.id}
                        className="flex gap-3 p-4 pl-6 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors border-b border-gray-200 dark:border-gray-800"
                      >
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                          <div className={`w-8 h-8 rounded-full ${getAvatarColor(reply.name)} flex items-center justify-center text-white font-bold text-xs`}>
                            {getInitials(reply.name)}
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          {/* Header */}
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-black dark:text-white hover:underline cursor-pointer text-sm">
                              {reply.name}
                            </span>
                            <span className="text-gray-500 dark:text-gray-400 text-xs">
                              · {formatTime(reply.createdAt)}
                            </span>
                          </div>
                          
                          {/* Reply Text */}
                          <p className="text-black dark:text-white text-sm leading-normal whitespace-pre-wrap">
                            {reply.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border-t border-gray-200 dark:border-gray-800">
            <MessageCircle className="h-12 w-12 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Be the first to share your thoughts
            </p>
          </div>
        )}
      </div>
    </section>
  );
}


/**
 * useReadingHistory
 * Tracks the last 3 articles the user read and the last 3 comments they posted.
 * Data is stored in localStorage and synced to the user's session.
 */
import { useCallback } from "react";

export interface HistoryArticle {
  slug: string;
  title: string;
  category: string;
  readAt: string; // ISO string
}

export interface HistoryComment {
  postId: string;
  postTitle: string;
  text: string;       // first 100 chars of the comment
  commentedAt: string;
}

const ARTICLES_KEY = "viciocode_read_history_v1";
const COMMENTS_KEY = "viciocode_comment_history_v1";
const MAX = 3;

export function trackArticleRead(slug: string, title: string, category: string) {
  try {
    const raw  = localStorage.getItem(ARTICLES_KEY);
    const list: HistoryArticle[] = raw ? JSON.parse(raw) : [];
    // Remove duplicate then prepend
    const filtered = list.filter(a => a.slug !== slug);
    filtered.unshift({ slug, title, category, readAt: new Date().toISOString() });
    localStorage.setItem(ARTICLES_KEY, JSON.stringify(filtered.slice(0, MAX)));
  } catch { /* ignore */ }
}

export function trackCommentPosted(postId: string, postTitle: string, text: string) {
  try {
    const raw  = localStorage.getItem(COMMENTS_KEY);
    const list: HistoryComment[] = raw ? JSON.parse(raw) : [];
    list.unshift({ postId, postTitle, text: text.slice(0, 100), commentedAt: new Date().toISOString() });
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(list.slice(0, MAX)));
  } catch { /* ignore */ }
}

export function getReadHistory(): HistoryArticle[] {
  try {
    const raw = localStorage.getItem(ARTICLES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

export function getCommentHistory(): HistoryComment[] {
  try {
    const raw = localStorage.getItem(COMMENTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

export function useReadingHistory() {
  const trackRead = useCallback(trackArticleRead, []);
  const trackComment = useCallback(trackCommentPosted, []);
  return { trackRead, trackComment, getReadHistory, getCommentHistory };
}

import { useState, useEffect, useMemo } from "react";
import { trackCommentPosted } from "@/hooks/useReadingHistory";
import {
  MessageCircle,
  Send,
  Trash2,
  Shield,
  LogIn,
  Clock,
  Heart,
  Reply,
  ArrowDownUp,
  X as XIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { useAuthContext } from "@/contexts/AuthContext";
import { validateComment } from "@/utils/contentModeration";
import {
  enqueueComment,
  flushQueue,
  getPendingComments,
  type PendingComment,
} from "@/utils/offlineCommentQueue";

const API_BASE = "/api.php";
const SORT_KEY = "viciocode-comments-sort";

interface Comment {
  id: string;
  post_id: string;
  user_id: string;
  author_name: string;
  content: string;
  created_at: string;
  parent_id?: string | null;
  like_count?: number;
  liked_by_me?: boolean;
}

type SortMode = "recent" | "best";

interface CommentSectionProps {
  postId: string;
  postTitle?: string;
}

const CommentSection = ({ postId, postTitle = "Artigo" }: CommentSectionProps) => {
  const { user, profile } = useAuthContext();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [pending, setPending] = useState<PendingComment[]>([]);

  // Reply state
  const [replyTo, setReplyTo] = useState<Comment | null>(null);
  const [replyText, setReplyText] = useState("");
  const [isReplying, setIsReplying] = useState(false);
  const [replyError, setReplyError] = useState<string | null>(null);

  // Sort
  const [sortMode, setSortMode] = useState<SortMode>(() => {
    if (typeof window === "undefined") return "recent";
    const v = localStorage.getItem(SORT_KEY);
    return v === "best" ? "best" : "recent";
  });

  useEffect(() => {
    try {
      localStorage.setItem(SORT_KEY, sortMode);
    } catch {
      /* ignore */
    }
  }, [sortMode]);

  const displayName = profile?.nickname || profile?.name || user?.email?.split("@")[0] || "Usuário";

  const fetchComments = async () => {
    setIsLoading(true);
    try {
      const url = user
        ? `${API_BASE}?action=comments&post_id=${encodeURIComponent(postId)}&user_id=${encodeURIComponent(user.id)}`
        : `${API_BASE}?action=comments&post_id=${encodeURIComponent(postId)}`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setComments(data as Comment[]);
      }
    } catch {
      // offline or API unavailable
    }
    setIsLoading(false);
  };

  const refreshPending = async () => {
    const items = await getPendingComments(postId);
    setPending(items);
  };

  useEffect(() => {
    fetchComments();
    refreshPending();
    const onQueueUpdate = () => {
      refreshPending();
      if (navigator.onLine) fetchComments();
    };
    window.addEventListener("comment-queue-updated", onQueueUpdate);
    return () => window.removeEventListener("comment-queue-updated", onQueueUpdate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId, user?.id]);

  // Agrupa em árvore (1 nível): roots + children por parent_id
  const { roots, childrenByParent, totalCount } = useMemo(() => {
    const r: Comment[] = [];
    const c: Record<string, Comment[]> = {};
    for (const cm of comments) {
      if (cm.parent_id) {
        (c[cm.parent_id] ||= []).push(cm);
      } else {
        r.push(cm);
      }
    }
    // Ordena roots conforme sortMode
    if (sortMode === "best") {
      r.sort((a, b) => {
        const la = a.like_count ?? 0;
        const lb = b.like_count ?? 0;
        if (lb !== la) return lb - la;
        return a.created_at < b.created_at ? 1 : -1;
      });
    } else {
      r.sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
    }
    // Respostas sempre por mais antigas primeiro (ordem cronológica de conversa)
    for (const k of Object.keys(c)) {
      c[k].sort((a, b) => (a.created_at > b.created_at ? 1 : -1));
    }
    return { roots: r, childrenByParent: c, totalCount: comments.length };
  }, [comments, sortMode]);

  const submitComment = async (
    payload: { post_id: string; user_id: string; author_name: string; content: string; parent_id?: string | null },
    isReply: boolean,
  ) => {
    if (!navigator.onLine) {
      // Replies não vão pra fila offline (manteria UX confusa) — apenas comentários raiz
      if (isReply) {
        setReplyError("Sem conexão. Tente novamente quando estiver online.");
        return false;
      }
      try {
        await enqueueComment(payload);
        await refreshPending();
        return true;
      } catch {
        return false;
      }
    }

    try {
      const res = await fetch(`${API_BASE}?action=comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        if (!isReply) {
          await enqueueComment(payload);
          await refreshPending();
          setErrors(["Servidor indisponível. Comentário ficou em fila e será enviado automaticamente."]);
        } else {
          setReplyError("Servidor indisponível. Tente novamente em instantes.");
        }
        return !isReply;
      }
      await fetchComments();
      void flushQueue();
      return true;
    } catch {
      if (!isReply) {
        try {
          await enqueueComment(payload);
          await refreshPending();
          return true;
        } catch {
          return false;
        }
      }
      setReplyError("Erro de rede. Verifique sua conexão.");
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setErrors([]);
    const validationErrors: string[] = [];

    const v = validateComment(newComment);
    if (!v.isValid) validationErrors.push(...v.errors);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    const payload = {
      post_id: postId,
      user_id: user.id,
      author_name: displayName,
      content: newComment.trim(),
    };
    const ok = await submitComment(payload, false);
    if (ok) {
      trackCommentPosted(postId, postTitle, payload.content);
      setNewComment("");
    } else if (errors.length === 0) {
      setErrors(["Erro ao enviar comentário."]);
    }
    setIsSubmitting(false);
  };

  const handleReplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !replyTo) return;
    setReplyError(null);

    const v = validateComment(replyText);
    if (!v.isValid) {
      setReplyError(v.errors.join(" "));
      return;
    }

    setIsReplying(true);
    const payload = {
      post_id: postId,
      user_id: user.id,
      author_name: displayName,
      content: replyText.trim(),
      parent_id: replyTo.id,
    };
    const ok = await submitComment(payload, true);
    if (ok) {
      trackCommentPosted(postId, postTitle, payload.content);
      setReplyText("");
      setReplyTo(null);
    }
    setIsReplying(false);
  };

  const handleDelete = async (commentId: string, commentUserId: string) => {
    if (!user || user.id !== commentUserId) return;
    try {
      await fetch(`${API_BASE}?action=comments&id=${commentId}&user_id=${user.id}`, { method: "DELETE" });
      await fetchComments();
    } catch {
      /* ignore */
    }
  };

  const toggleLike = async (c: Comment) => {
    if (!user) return;
    const liked = !!c.liked_by_me;
    // Otimista
    setComments((prev) =>
      prev.map((x) =>
        x.id === c.id
          ? { ...x, liked_by_me: !liked, like_count: Math.max(0, (x.like_count ?? 0) + (liked ? -1 : 1)) }
          : x,
      ),
    );
    try {
      if (liked) {
        const res = await fetch(
          `${API_BASE}?action=comment-like&comment_id=${encodeURIComponent(c.id)}&user_id=${encodeURIComponent(user.id)}`,
          { method: "DELETE" },
        );
        if (!res.ok) throw new Error();
      } else {
        const res = await fetch(`${API_BASE}?action=comment-like`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ comment_id: c.id, user_id: user.id }),
        });
        if (!res.ok) throw new Error();
      }
    } catch {
      // Reverte em caso de falha
      setComments((prev) =>
        prev.map((x) =>
          x.id === c.id
            ? { ...x, liked_by_me: liked, like_count: Math.max(0, (x.like_count ?? 0) + (liked ? 1 : -1)) }
            : x,
        ),
      );
    }
  };

  const renderComment = (comment: Comment, isReplyRow = false) => {
    const replies = childrenByParent[comment.id] ?? [];
    return (
      <div key={comment.id} className={isReplyRow ? "" : "space-y-3"}>
        <div className="p-5 bg-card rounded-xl border border-border animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                {comment.author_name[0]?.toUpperCase() || "?"}
              </div>
              <div>
                <span className="font-semibold text-foreground">{comment.author_name}</span>
                <span className="block text-xs text-muted-foreground">
                  {new Date(comment.created_at).toLocaleDateString("pt-BR")}
                </span>
              </div>
            </div>
            {user?.id === comment.user_id && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDelete(comment.id, comment.user_id)}
                className="h-8 w-8 text-muted-foreground hover:text-destructive"
                title="Excluir comentário"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
          <p className="text-foreground/90 leading-relaxed whitespace-pre-line">{comment.content}</p>

          {/* Ações: curtir / responder */}
          <div className="mt-3 flex items-center gap-3 text-xs">
            <button
              onClick={() => toggleLike(comment)}
              disabled={!user}
              title={user ? (comment.liked_by_me ? "Remover curtida" : "Curtir") : "Faça login para curtir"}
              className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full transition-colors ${
                comment.liked_by_me
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              } ${!user ? "opacity-60 cursor-not-allowed" : ""}`}
              aria-pressed={!!comment.liked_by_me}
            >
              <Heart className={`h-3.5 w-3.5 ${comment.liked_by_me ? "fill-current" : ""}`} />
              <span className="font-semibold">{comment.like_count ?? 0}</span>
              <span className="hidden sm:inline">{comment.liked_by_me ? "Curtido" : "Curtir"}</span>
            </button>

            {!isReplyRow && user && (
              <button
                onClick={() => {
                  setReplyTo(replyTo?.id === comment.id ? null : comment);
                  setReplyText("");
                  setReplyError(null);
                }}
                className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <Reply className="h-3.5 w-3.5" />
                <span>Responder</span>
              </button>
            )}

            {replies.length > 0 && (
              <span className="text-muted-foreground">
                {replies.length} {replies.length === 1 ? "resposta" : "respostas"}
              </span>
            )}
          </div>

          {/* Form de resposta inline */}
          {!isReplyRow && replyTo?.id === comment.id && user && (
            <form onSubmit={handleReplySubmit} className="mt-4 p-3 bg-secondary/60 rounded-lg space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>
                  Respondendo a <strong className="text-foreground">{comment.author_name}</strong>
                </span>
                <button
                  type="button"
                  onClick={() => setReplyTo(null)}
                  className="p-1 rounded hover:bg-muted"
                  aria-label="Cancelar resposta"
                >
                  <XIcon className="h-3.5 w-3.5" />
                </button>
              </div>
              <Textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Escreva sua resposta..."
                rows={3}
                maxLength={1000}
                className="bg-background resize-none text-sm"
              />
              {replyError && (
                <p className="text-xs text-destructive">{replyError}</p>
              )}
              <div className="flex justify-end">
                <Button
                  type="submit"
                  size="sm"
                  disabled={isReplying || !replyText.trim()}
                  className="gap-1.5"
                >
                  <Send className="h-3.5 w-3.5" />
                  {isReplying ? "Enviando..." : "Responder"}
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Respostas (1 nível, indentadas) */}
        {!isReplyRow && replies.length > 0 && (
          <div className="ml-4 sm:ml-8 pl-4 border-l-2 border-primary/20 space-y-3">
            {replies.map((rep) => renderComment(rep, true))}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="mt-12 pt-8 border-t border-border">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <h3 className="font-display text-2xl font-bold flex items-center gap-2">
          <MessageCircle className="h-6 w-6 text-primary" />
          Comentários ({totalCount})
          {pending.length > 0 && (
            <span className="ml-2 text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/30 inline-flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {pending.length} pendente{pending.length > 1 ? "s" : ""}
            </span>
          )}
        </h3>

        {/* Ordenação */}
        {totalCount > 1 && (
          <div className="flex items-center gap-2 text-xs">
            <ArrowDownUp className="h-3.5 w-3.5 text-muted-foreground" />
            <Select value={sortMode} onValueChange={(v) => setSortMode(v as SortMode)}>
              <SelectTrigger className="h-8 w-[160px]" aria-label="Ordenar comentários">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Mais recentes</SelectItem>
                <SelectItem value="best">Melhores (mais curtidos)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      {/* Pending (offline) comments */}
      {pending.length > 0 && user && (
        <div className="mb-6 space-y-3">
          {pending.map((p) => (
            <div
              key={p.id}
              className="p-4 bg-primary/5 rounded-xl border border-primary/30 border-dashed animate-fade-in"
            >
              <div className="flex items-center gap-2 mb-2 text-xs text-primary font-semibold">
                <Clock className="h-3.5 w-3.5" />
                Aguardando envio (será publicado quando a conexão voltar)
              </div>
              <p className="text-foreground/90 leading-relaxed text-sm">{p.content}</p>
            </div>
          ))}
        </div>
      )}

      {/* Moderation notice */}
      <div className="mb-6 p-4 bg-secondary/50 rounded-lg border border-border flex items-start gap-3">
        <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
        <div className="text-sm text-muted-foreground">
          <span>Os comentários são moderados. Links, imagens e linguagem ofensiva são bloqueados. </span>
          <Link to="/politica-conteudo" className="text-primary hover:underline">
            Leia nossa Política de Conteúdo
          </Link>
        </div>
      </div>

      {/* Comment form */}
      {user ? (
        <form onSubmit={handleSubmit} className="mb-8 p-6 bg-secondary rounded-xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold overflow-hidden shrink-0">
              {profile?.avatar_url ? (
                <img src={profile.avatar_url} alt="" className="w-full h-full object-cover" />
              ) : (
                displayName[0].toUpperCase()
              )}
            </div>
            <div>
              <p className="font-semibold text-foreground">{displayName}</p>
              <p className="text-xs text-muted-foreground">Comentando como</p>
            </div>
          </div>

          {errors.length > 0 && (
            <div className="mb-4 p-3 bg-destructive/10 rounded-lg border border-destructive/30">
              <ul className="list-disc list-inside text-sm text-destructive/90 space-y-1">
                {errors.map((error, i) => <li key={i}>{error}</li>)}
              </ul>
            </div>
          )}

          <div className="mb-4">
            <Textarea
              placeholder="Deixe seu comentário..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              rows={4}
              className="bg-background resize-none"
              maxLength={1000}
            />
            <p className="text-xs text-muted-foreground mt-1">{newComment.length}/1000 caracteres</p>
          </div>

          <Button type="submit" className="gap-2" disabled={isSubmitting || !newComment.trim()}>
            <Send className="h-4 w-4" />
            {isSubmitting
              ? "Enviando..."
              : typeof navigator !== "undefined" && !navigator.onLine
              ? "Salvar para enviar depois"
              : "Comentar"}
          </Button>
        </form>
      ) : (
        <div className="mb-8 p-6 bg-secondary rounded-xl text-center space-y-3">
          <MessageCircle className="h-8 w-8 text-primary mx-auto opacity-60" />
          <p className="font-medium text-foreground">Quer participar da conversa?</p>
          <p className="text-sm text-muted-foreground">
            Faça login ou crie uma conta gratuitamente para comentar, curtir e responder.
          </p>
          <Button asChild className="gap-2">
            <Link to="/entrar">
              <LogIn className="h-4 w-4" />
              Entrar / Criar conta
            </Link>
          </Button>
        </div>
      )}

      {/* Comments list */}
      {isLoading ? (
        <div className="flex items-center justify-center py-8">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : roots.length === 0 ? (
        <p className="text-center text-muted-foreground py-8">
          {user ? "Seja o primeiro a comentar!" : "Nenhum comentário ainda. Faça login para ser o primeiro!"}
        </p>
      ) : (
        <div className="space-y-6">
          {roots.map((root) => renderComment(root))}
        </div>
      )}
    </section>
  );
};

export default CommentSection;

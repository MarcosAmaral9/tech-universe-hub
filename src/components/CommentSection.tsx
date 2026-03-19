import { useState, useEffect } from "react";
import { trackCommentPosted } from "@/hooks/useReadingHistory";
import { MessageCircle, Send, Trash2, Shield, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { useAuthContext } from "@/contexts/AuthContext";
import { validateComment } from "@/utils/contentModeration";

const API_BASE = "/api.php";

interface Comment {
  id: string;
  post_id: string;
  user_id: string;
  author_name: string;
  content: string;
  created_at: string;
}

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

  const displayName = profile?.nickname || profile?.name || user?.email?.split("@")[0] || "Usuário";

  const fetchComments = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE}?action=comments&post_id=${encodeURIComponent(postId)}`);
      if (res.ok) {
        const data = await res.json();
        setComments(data as Comment[]);
      }
    } catch {
      // offline or API unavailable
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setErrors([]);
    const validationErrors: string[] = [];

    const commentValidation = validateComment(newComment);
    if (!commentValidation.isValid) {
      validationErrors.push(...commentValidation.errors);
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}?action=comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          post_id: postId,
          user_id: user.id,
          author_name: displayName,
          content: newComment.trim(),
        }),
      });

      if (!res.ok) {
        setErrors(["Erro ao enviar comentário. Tente novamente."]);
      } else {
        trackCommentPosted(postId, postTitle, newComment.trim());
        setNewComment("");
        await fetchComments();
      }
    } catch {
      setErrors(["Erro ao enviar comentário. Verifique sua conexão."]);
    }

    setIsSubmitting(false);
  };

  const handleDelete = async (commentId: string, commentUserId: string) => {
    if (!user || user.id !== commentUserId) return;
    try {
      await fetch(`${API_BASE}?action=comments&id=${commentId}&user_id=${user.id}`, {
        method: "DELETE",
      });
      await fetchComments();
    } catch {
      // ignore
    }
  };

  return (
    <section className="mt-12 pt-8 border-t border-border">
      <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
        <MessageCircle className="h-6 w-6 text-primary" />
        Comentários ({comments.length})
      </h3>

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

      {/* Comment form — only for logged-in users */}
      {user ? (
        <form onSubmit={handleSubmit} className="mb-8 p-6 bg-secondary rounded-xl">
          {/* Author identity */}
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

          {/* Errors */}
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
            <p className="text-xs text-muted-foreground mt-1">
              {newComment.length}/1000 caracteres
            </p>
          </div>

          <Button
            type="submit"
            className="gap-2"
            disabled={isSubmitting || !newComment.trim()}
          >
            <Send className="h-4 w-4" />
            {isSubmitting ? "Enviando..." : "Comentar"}
          </Button>
        </form>
      ) : (
        /* CTA para login */
        <div className="mb-8 p-6 bg-secondary rounded-xl text-center space-y-3">
          <MessageCircle className="h-8 w-8 text-primary mx-auto opacity-60" />
          <p className="font-medium text-foreground">Quer participar da conversa?</p>
          <p className="text-sm text-muted-foreground">
            Faça login ou crie uma conta gratuitamente para deixar seu comentário.
          </p>
          <Button asChild className="gap-2">
            <Link to="/entrar">
              <LogIn className="h-4 w-4" />
              Entrar / Criar conta
            </Link>
          </Button>
        </div>
      )}

      {/* Comments list — visible to everyone */}
      {isLoading ? (
        <div className="flex items-center justify-center py-8">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : comments.length === 0 ? (
        <p className="text-center text-muted-foreground py-8">
          {user
            ? "Seja o primeiro a comentar!"
            : "Nenhum comentário ainda. Faça login para ser o primeiro!"}
        </p>
      ) : (
        <div className="space-y-6">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="p-5 bg-card rounded-xl border border-border animate-fade-in"
            >
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
              <p className="text-foreground/90 leading-relaxed">{comment.content}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CommentSection;

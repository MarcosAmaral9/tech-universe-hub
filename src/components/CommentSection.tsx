import { useState, useEffect, useCallback } from "react";
import { MessageCircle, Send, RefreshCw, AlertCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { 
  validateName, 
  validateComment, 
  generateCaptcha 
} from "@/utils/contentModeration";

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}

interface CommentSectionProps {
  postId: string;
}

// Initial comments for each post
const initialCommentsByPost: Record<string, Comment[]> = {
  "diferenca-mangas-manhuas-manhwas": [
    {
      id: "1",
      author: "OtakuMaster",
      content: "Excelente artigo! Finalmente entendi a diferença entre os três!",
      date: "2026-01-17",
    },
  ],
  "como-diferenciar-manhuas-manhwas": [
    {
      id: "1",
      author: "MangaFan2026",
      content: "Finalmente alguém explicando a diferença! Sempre confundi manhwa com manhua.",
      date: "2026-01-16",
    },
  ],
  "10-melhores-manhwas-sistema-2026": [
    {
      id: "1",
      author: "SoloLevelingFan",
      content: "Solo Leveling é incrível! Mas tem muitos outros manhwas que merecem destaque também.",
      date: "2026-01-15",
    },
    {
      id: "2",
      author: "WebtoonReader",
      content: "TBATE merecia estar em primeiro! A história é muito mais profunda.",
      date: "2026-01-15",
    },
  ],
  "ia-transformando-dublagem-animes": [
    {
      id: "1",
      author: "AnimeLover99",
      content: "Será que um dia vamos ver dublagens em tempo real? Isso seria incrível!",
      date: "2026-01-18",
    },
  ],
  "investir-em-tecnologia-2026": [
    {
      id: "1",
      author: "InvestidorTech",
      content: "Ótimo artigo para quem está começando a investir em tecnologia!",
      date: "2026-01-18",
    },
  ],
};

const CommentSection = ({ postId }: CommentSectionProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load comments for this specific post
  useEffect(() => {
    const storageKey = `viciocode-comments-${postId}`;
    const savedComments = localStorage.getItem(storageKey);
    
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    } else {
      // Use initial comments if no saved comments exist
      setComments(initialCommentsByPost[postId] || []);
    }
  }, [postId]);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    if (comments.length > 0) {
      const storageKey = `viciocode-comments-${postId}`;
      localStorage.setItem(storageKey, JSON.stringify(comments));
    }
  }, [comments, postId]);

  const refreshCaptcha = useCallback(() => {
    setCaptcha(generateCaptcha());
    setCaptchaAnswer("");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);
    setIsSubmitting(true);

    const validationErrors: string[] = [];

    // Validate name
    const nameValidation = validateName(authorName);
    if (!nameValidation.isValid) {
      validationErrors.push(...nameValidation.errors);
    }

    // Validate comment
    const commentValidation = validateComment(newComment);
    if (!commentValidation.isValid) {
      validationErrors.push(...commentValidation.errors);
    }

    // Validate captcha
    const userAnswer = parseInt(captchaAnswer, 10);
    if (isNaN(userAnswer) || userAnswer !== captcha.answer) {
      validationErrors.push("Resposta do captcha incorreta. Tente novamente.");
      refreshCaptcha();
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    const comment: Comment = {
      id: Date.now().toString(),
      author: authorName.trim(),
      content: newComment.trim(),
      date: new Date().toISOString().split("T")[0],
    };

    setComments([comment, ...comments]);
    setNewComment("");
    setCaptchaAnswer("");
    refreshCaptcha();
    setIsSubmitting(false);
  };

  return (
    <section className="mt-12 pt-8 border-t border-border">
      <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
        <MessageCircle className="h-6 w-6 text-primary" />
        Comentários ({comments.length})
      </h3>

      {/* Content Policy Notice */}
      <div className="mb-6 p-4 bg-secondary/50 rounded-lg border border-border flex items-start gap-3">
        <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
        <div className="text-sm text-muted-foreground">
          <span>Os comentários são moderados. Links, imagens e linguagem ofensiva são bloqueados. </span>
          <Link to="/politica-conteudo" className="text-primary hover:underline">
            Leia nossa Política de Conteúdo
          </Link>
        </div>
      </div>

      {/* Error Messages */}
      {errors.length > 0 && (
        <div className="mb-6 p-4 bg-destructive/10 rounded-lg border border-destructive/30">
          <div className="flex items-center gap-2 text-destructive mb-2">
            <AlertCircle className="h-5 w-5" />
            <span className="font-semibold">Erro ao enviar comentário</span>
          </div>
          <ul className="list-disc list-inside text-sm text-destructive/90 space-y-1">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8 p-6 bg-secondary rounded-xl">
        <div className="mb-4">
          <label htmlFor="author-name" className="block text-sm font-medium mb-2">
            Seu nome
          </label>
          <Input
            id="author-name"
            placeholder="Digite seu nome"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="bg-background"
            maxLength={50}
          />
          <p className="text-xs text-muted-foreground mt-1">
            {authorName.length}/50 caracteres
          </p>
        </div>
        
        <div className="mb-4">
          <label htmlFor="comment-content" className="block text-sm font-medium mb-2">
            Seu comentário
          </label>
          <Textarea
            id="comment-content"
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

        {/* Captcha */}
        <div className="mb-4 p-4 bg-background rounded-lg border border-border">
          <label className="block text-sm font-medium mb-3">
            Verificação Anti-Bot
          </label>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-lg font-mono bg-muted px-3 py-2 rounded">
                {captcha.question}
              </span>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={refreshCaptcha}
                className="h-8 w-8"
                title="Gerar nova pergunta"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
            <Input
              type="number"
              placeholder="Resposta"
              value={captchaAnswer}
              onChange={(e) => setCaptchaAnswer(e.target.value)}
              className="w-24 bg-background"
            />
          </div>
        </div>

        <Button type="submit" className="gap-2" disabled={isSubmitting}>
          <Send className="h-4 w-4" />
          {isSubmitting ? "Enviando..." : "Comentar"}
        </Button>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="p-5 bg-card rounded-xl border border-border animate-fade-in"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                {comment.author[0].toUpperCase()}
              </div>
              <div>
                <span className="font-semibold text-foreground">{comment.author}</span>
                <span className="block text-xs text-muted-foreground">
                  {new Date(comment.date).toLocaleDateString("pt-BR")}
                </span>
              </div>
            </div>
            <p className="text-foreground/90 leading-relaxed">{comment.content}</p>
          </div>
        ))}
      </div>

      {comments.length === 0 && (
        <p className="text-center text-muted-foreground py-8">
          Seja o primeiro a comentar!
        </p>
      )}
    </section>
  );
};

export default CommentSection;

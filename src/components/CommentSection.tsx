import { useState, useEffect } from "react";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !authorName.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: authorName,
      content: newComment,
      date: new Date().toISOString().split("T")[0],
    };

    setComments([comment, ...comments]);
    setNewComment("");
  };

  return (
    <section className="mt-12 pt-8 border-t border-border">
      <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
        <MessageCircle className="h-6 w-6 text-primary" />
        Comentários ({comments.length})
      </h3>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8 p-6 bg-secondary rounded-xl">
        <div className="mb-4">
          <Input
            placeholder="Seu nome"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="bg-background"
          />
        </div>
        <div className="mb-4">
          <Textarea
            placeholder="Deixe seu comentário..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows={4}
            className="bg-background resize-none"
          />
        </div>
        <Button type="submit" className="gap-2">
          <Send className="h-4 w-4" />
          Comentar
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
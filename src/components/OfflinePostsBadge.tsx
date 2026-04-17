/**
 * OfflinePostsBadge
 * Indicador visível no header mostrando quantos posts estão salvos
 * para leitura offline. Ao clicar, abre um popover com a lista de posts
 * cacheados (clicáveis), permitindo que o usuário navegue rapidamente
 * para conteúdo que ele já tem disponível localmente.
 */
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Download, WifiOff, Wifi } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useOfflinePosts } from "@/hooks/useOfflinePosts";
import { posts as allPosts } from "@/data/posts";
import { useState as useReactState, useEffect } from "react";

const useOnline = () => {
  const [online, setOnline] = useReactState(
    typeof navigator !== "undefined" ? navigator.onLine : true
  );
  useEffect(() => {
    const on = () => setOnline(true);
    const off = () => setOnline(false);
    window.addEventListener("online", on);
    window.addEventListener("offline", off);
    return () => {
      window.removeEventListener("online", on);
      window.removeEventListener("offline", off);
    };
  }, []);
  return online;
};

const OfflinePostsBadge = () => {
  const { cachedSlugs, count } = useOfflinePosts();
  const [open, setOpen] = useState(false);
  const online = useOnline();

  const cachedPosts = useMemo(() => {
    return allPosts.filter((p) => cachedSlugs.has(p.slug));
  }, [cachedSlugs]);

  // Não mostra nada quando não há posts cacheados (evita ruído visual no primeiro acesso)
  if (count === 0) return null;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-1.5 hover:bg-secondary text-emerald-500 hover:text-emerald-400"
          aria-label={`${count} posts disponíveis offline`}
          title={`${count} posts disponíveis offline`}
        >
          <Download className="h-4 w-4" />
          <span className="text-xs font-bold">{count}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 p-0">
        <div className="px-4 py-3 border-b border-border flex items-center gap-2">
          {online ? (
            <Wifi className="h-4 w-4 text-emerald-500 shrink-0" />
          ) : (
            <WifiOff className="h-4 w-4 text-amber-500 shrink-0" />
          )}
          <div className="flex-1 min-w-0">
            <div className="font-bold text-sm">
              {count} {count === 1 ? "post salvo" : "posts salvos"}
            </div>
            <div className="text-[11px] text-muted-foreground">
              {online ? "Disponíveis para leitura offline" : "Você está offline — leia abaixo"}
            </div>
          </div>
        </div>
        <div className="max-h-80 overflow-y-auto">
          {cachedPosts.length === 0 ? (
            <div className="px-4 py-6 text-center text-sm text-muted-foreground">
              Carregando lista...
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {cachedPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    to={`/post/${post.slug}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 hover:bg-secondary transition-colors"
                  >
                    <img
                      src={post.image}
                      alt=""
                      loading="lazy"
                      className="w-12 h-12 rounded object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium line-clamp-2 leading-snug">
                        {post.title}
                      </div>
                      <div className="text-[10px] text-muted-foreground mt-0.5">
                        {post.readTime}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default OfflinePostsBadge;

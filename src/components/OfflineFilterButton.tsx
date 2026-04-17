/**
 * OfflineFilterButton
 * Botão "Apenas offline" para as páginas de categoria. Só aparece quando
 * o site está rodando como PWA instalado (display-mode standalone) — no
 * navegador web fica oculto, pois o recurso offline é exclusivo do app.
 *
 * Mostra a contagem de posts já salvos no cache do Service Worker.
 */
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePWAStandalone } from "@/hooks/usePWAStandalone";
import { useOfflinePosts } from "@/hooks/useOfflinePosts";

interface OfflineFilterButtonProps {
  active: boolean;
  onToggle: () => void;
  /** Cor da categoria (classe tailwind, ex: "bg-ia") */
  activeClass?: string;
  /** Total de posts da categoria atualmente disponíveis offline */
  count: number;
}

const OfflineFilterButton = ({
  active,
  onToggle,
  activeClass = "bg-primary",
  count,
}: OfflineFilterButtonProps) => {
  const isStandalone = usePWAStandalone();
  const { count: globalCount } = useOfflinePosts();

  // Esconde no navegador web — recurso é exclusivo do app instalado
  if (!isStandalone) return null;
  // Sem nada cacheado → não faz sentido mostrar o filtro
  if (globalCount === 0) return null;

  return (
    <Button
      variant={active ? "default" : "outline"}
      size="sm"
      onClick={onToggle}
      className={`gap-1.5 ${active ? `${activeClass} hover:opacity-90 text-white` : ""}`}
      title="Mostrar apenas posts disponíveis para leitura offline"
    >
      <Download className="h-3.5 w-3.5" />
      Apenas offline ({count})
    </Button>
  );
};

export default OfflineFilterButton;

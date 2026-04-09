import { Star } from "lucide-react";
import { useAuthContext } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";

interface FavoriteButtonProps {
  assetKey: string;
  assetLabel: string;
  assetCategory: string;
  assetIcon: string;
  isFavorite: boolean;
  onToggle: (asset: { key: string; label: string; category: string; icon: string }) => void;
  className?: string;
}

const FavoriteButton = ({ assetKey, assetLabel, assetCategory, assetIcon, isFavorite, onToggle, className = "" }: FavoriteButtonProps) => {
  const { user } = useAuthContext();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user) {
      toast({ title: "Faça login", description: "Você precisa estar logado para favoritar ativos.", variant: "destructive" });
      return;
    }
    onToggle({ key: assetKey, label: assetLabel, category: assetCategory, icon: assetIcon });
  };

  return (
    <button
      onClick={handleClick}
      className={`p-1 rounded-full transition-all hover:scale-110 ${
        isFavorite ? "text-yellow-500" : "text-muted-foreground hover:text-yellow-500/70"
      } ${className}`}
      title={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
    >
      <Star className={`h-3.5 w-3.5 ${isFavorite ? "fill-yellow-500" : ""}`} />
    </button>
  );
};

export default FavoriteButton;

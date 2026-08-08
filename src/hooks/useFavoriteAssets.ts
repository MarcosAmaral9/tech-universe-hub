import { useState, useCallback, useEffect } from "react";

export interface FavoriteAsset {
  id: string;
  asset_key: string;
  asset_label: string;
  asset_category: string;
  asset_icon: string;
  created_at: string;
}

export function useFavoriteAssets(userId: string | null) {
  const [favorites, setFavorites] = useState<FavoriteAsset[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFavorites = useCallback(async () => {
    if (!userId) { setFavorites([]); return; }
    setLoading(true);
    try {
      // no-store: impede que o Service Worker devolva a lista antiga (stale-while-revalidate)
      const res = await fetch(
        `/api.php?action=favorite_assets&user_id=${encodeURIComponent(userId)}&_=${Date.now()}`,
        { cache: "no-store", headers: { "Cache-Control": "no-cache" } },
      );
      if (res.ok) {
        const data = await res.json();
        setFavorites(Array.isArray(data) ? data : []);
        setError(null);
      } else {
        setError("Não foi possível carregar seus favoritos.");
      }
    } catch {
      setError("Sem conexão com o servidor — favoritos indisponíveis.");
    }
    setLoading(false);
  }, [userId]);

  useEffect(() => { fetchFavorites(); }, [fetchFavorites]);

  const toggleFavorite = useCallback(async (asset: { key: string; label: string; category: string; icon: string }) => {
    if (!userId) {
      setError("Entre na sua conta para favoritar ativos.");
      return false;
    }
    const existing = favorites.find(f => f.asset_key === asset.key);
    try {
      if (existing) {
        const res = await fetch(`/api.php?action=favorite_assets`, {
          method: "DELETE",
          cache: "no-store",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user_id: userId, asset_key: asset.key }),
        });
        if (!res.ok) throw new Error("delete failed");
        setFavorites(prev => prev.filter(f => f.asset_key !== asset.key));
      } else {
        const res = await fetch(`/api.php?action=favorite_assets`, {
          method: "POST",
          cache: "no-store",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user_id: userId,
            asset_key: asset.key,
            asset_label: asset.label,
            asset_category: asset.category,
            asset_icon: asset.icon,
          }),
        });
        if (!res.ok) throw new Error("insert failed");
        const data = await res.json();
        setFavorites(prev => [...prev, data]);
      }
      setError(null);
      return true;
    } catch {
      setError("Não foi possível salvar o favorito. Tente novamente.");
      return false;
    }
  }, [userId, favorites]);

  const isFavorite = useCallback((assetKey: string) => {
    return favorites.some(f => f.asset_key === assetKey);
  }, [favorites]);

  return { favorites, loading, error, toggleFavorite, isFavorite, refetch: fetchFavorites };
}


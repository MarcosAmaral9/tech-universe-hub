import { useState, useCallback, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

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

  const fetchFavorites = useCallback(async () => {
    if (!userId) { setFavorites([]); return; }
    setLoading(true);
    try {
      const res = await fetch(`/api.php?action=favorite_assets&user_id=${encodeURIComponent(userId)}`);
      if (res.ok) {
        const data = await res.json();
        setFavorites(Array.isArray(data) ? data : []);
      }
    } catch { /* offline */ }
    setLoading(false);
  }, [userId]);

  useEffect(() => { fetchFavorites(); }, [fetchFavorites]);

  const toggleFavorite = useCallback(async (asset: { key: string; label: string; category: string; icon: string }) => {
    if (!userId) return;
    const existing = favorites.find(f => f.asset_key === asset.key);
    if (existing) {
      // Remove
      try {
        await fetch(`/api.php?action=favorite_assets`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user_id: userId, asset_key: asset.key }),
        });
        setFavorites(prev => prev.filter(f => f.asset_key !== asset.key));
      } catch { /* */ }
    } else {
      // Add
      try {
        const res = await fetch(`/api.php?action=favorite_assets`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user_id: userId,
            asset_key: asset.key,
            asset_label: asset.label,
            asset_category: asset.category,
            asset_icon: asset.icon,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          setFavorites(prev => [...prev, data]);
        }
      } catch { /* */ }
    }
  }, [userId, favorites]);

  const isFavorite = useCallback((assetKey: string) => {
    return favorites.some(f => f.asset_key === assetKey);
  }, [favorites]);

  return { favorites, loading, toggleFavorite, isFavorite, refetch: fetchFavorites };
}

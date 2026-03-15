import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User, Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import DynamicSEO from "@/components/DynamicSEO";

const API_BASE = "/api.php";

interface PublicProfile {
  id: string;
  name: string;
  nickname: string;
  avatar_url: string | null;
  created_at: string;
}

const PublicProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const [profile, setProfile] = useState<PublicProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!id) return;
    const fetchProfile = async () => {
      try {
        const res = await fetch(`${API_BASE}?action=profile&user_id=${encodeURIComponent(id)}`);
        const data = await res.json();
        if (!res.ok || !data || data.error) {
          setNotFound(true);
        } else {
          setProfile(data as PublicProfile);
        }
      } catch {
        setNotFound(true);
      }
      setLoading(false);
    };
    fetchProfile();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (notFound || !profile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <User className="w-16 h-16 text-muted-foreground" />
        <h1 className="text-2xl font-bold text-foreground">Usuário não encontrado</h1>
        <p className="text-muted-foreground">Este perfil não existe ou foi removido.</p>
        <Button asChild variant="outline">
          <Link to="/"><ArrowLeft className="w-4 h-4 mr-2" /> Voltar ao início</Link>
        </Button>
      </div>
    );
  }

  const displayName = profile.nickname || profile.name || "Usuário";
  const initials = displayName.slice(0, 2).toUpperCase();
  const memberSince = new Date(profile.created_at).toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <DynamicSEO />
      <div className="min-h-[60vh] flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md text-center space-y-6">
          <Avatar className="w-28 h-28 mx-auto ring-4 ring-primary/20">
            {profile.avatar_url ? (
              <AvatarImage src={profile.avatar_url} alt={displayName} />
            ) : null}
            <AvatarFallback className="text-3xl font-bold bg-primary/10 text-primary">
              {initials}
            </AvatarFallback>
          </Avatar>

          <div className="space-y-1">
            <h1 className="text-3xl font-bold font-orbitron text-foreground">{displayName}</h1>
            {profile.nickname && profile.name && (
              <p className="text-muted-foreground text-lg">{profile.name}</p>
            )}
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Membro desde {memberSince}</span>
          </div>

          <Button asChild variant="outline" size="sm">
            <Link to="/"><ArrowLeft className="w-4 h-4 mr-2" /> Voltar</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default PublicProfilePage;

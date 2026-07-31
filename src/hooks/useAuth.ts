import { useState, useEffect, useCallback } from "react";

const API_BASE = "/api.php";
const SESSION_KEY = "viciocode_session";

export interface Profile {
  id: string;
  name: string;
  nickname: string;
  avatar_url: string | null;
  notifications_site: boolean;
  notifications_app: boolean;
}

export interface LocalUser {
  id: string;
  email: string;
}

function loadSession(): { user: LocalUser; profile: Profile; token?: string } | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveSession(user: LocalUser, profile: Profile, token?: string) {
  const current = loadSession();
  localStorage.setItem(
    SESSION_KEY,
    JSON.stringify({ user, profile, token: token ?? current?.token })
  );
}

/** Token de sessão assinado emitido pelo api.php (MySQL da Hostinger). */
export function getAuthToken(): string | null {
  return loadSession()?.token ?? null;
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

export const useAuth = () => {
  const [user, setUser] = useState<LocalUser | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const session = loadSession();
    if (session) {
      setUser(session.user);
      setProfile(session.profile);
      setToken(session.token ?? null);
    }
    setLoading(false);
  }, []);

  // Verificação de administrador feita no servidor (api.php + MySQL).
  useEffect(() => {
    if (!token) { setIsAdmin(false); return; }
    let cancelled = false;
    fetch(`${API_BASE}?action=admin_check`, { headers: { "X-Auth-Token": token } })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (!cancelled) setIsAdmin(!!d?.admin); })
      .catch(() => { if (!cancelled) setIsAdmin(false); });
    return () => { cancelled = true; };
  }, [token]);

  const fetchProfile = useCallback(async (userId: string) => {
    try {
      const res = await fetch(`${API_BASE}?action=profile&user_id=${encodeURIComponent(userId)}`);
      if (res.ok) {
        const data = await res.json();
        if (data && data.id) {
          setProfile(data as Profile);
          const currentSession = loadSession();
          if (currentSession) {
            saveSession(currentSession.user, data as Profile);
          }
        }
      }
    } catch {
      // offline – keep cached profile
    }
  }, []);

  const signOut = async () => {
    clearSession();
    setUser(null);
    setProfile(null);
    setToken(null);
    setIsAdmin(false);
  };

  const updateProfile = async (
    updates: Partial<Pick<Profile, "name" | "nickname" | "notifications_site" | "notifications_app">>
  ) => {
    if (!user) return;
    try {
      const res = await fetch(`${API_BASE}?action=profile`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: user.id, ...updates }),
      });
      if (res.ok) {
        const updated = { ...profile!, ...updates };
        setProfile(updated);
        saveSession(user, updated);
      }
      return res.ok ? null : new Error("Falha ao atualizar perfil");
    } catch (e) {
      return e;
    }
  };

  // session is kept for API compatibility (components that use it)
  const session = user ? { user } : null;

  return { user, session, profile, loading, token, isAdmin, signOut, updateProfile, fetchProfile };
};

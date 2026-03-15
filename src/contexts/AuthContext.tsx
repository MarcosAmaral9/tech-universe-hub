import { createContext, useContext, type ReactNode } from "react";
import { useAuth, type LocalUser, type Profile } from "@/hooks/useAuth";

interface AuthContextType {
  user: LocalUser | null;
  session: { user: LocalUser } | null;
  profile: Profile | null;
  loading: boolean;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<Pick<Profile, "name" | "nickname" | "notifications_site" | "notifications_app">>) => Promise<any>;
  fetchProfile: (userId: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthContext must be used within AuthProvider");
  return ctx;
};

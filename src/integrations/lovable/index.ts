// Lovable integration removed — was dependent on Supabase auth.
// Kept as empty stub to avoid import errors if referenced elsewhere.
export const lovable = {
  auth: {
    signInWithOAuth: async (_provider: string, _opts?: any) => {
      return { error: new Error("OAuth não disponível nesta configuração.") };
    },
  },
};

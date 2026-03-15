// Supabase removido do projeto.
// Este stub evita erros de compilação em imports residuais.
export const supabase = {
  auth: {
    signInWithPassword: async () => ({ error: new Error("Supabase removido") }),
    signUp: async () => ({ error: new Error("Supabase removido") }),
    signOut: async () => {},
    getSession: async () => ({ data: { session: null } }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    resetPasswordForEmail: async () => ({ error: new Error("Supabase removido") }),
    updateUser: async () => ({ error: new Error("Supabase removido") }),
  },
  from: () => ({
    select: () => ({ eq: () => ({ single: async () => ({ data: null, error: new Error("Supabase removido") }) }) }),
    update: () => ({ eq: async () => ({ error: new Error("Supabase removido") }) }),
  }),
  storage: {
    from: () => ({
      upload: async () => ({ error: new Error("Supabase removido") }),
      getPublicUrl: () => ({ data: { publicUrl: "" } }),
    }),
  },
  functions: {
    invoke: async () => ({ data: null, error: new Error("Supabase removido") }),
  },
};

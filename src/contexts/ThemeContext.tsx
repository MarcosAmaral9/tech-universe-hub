import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "viciocode-theme";

const readStoredTheme = (): Theme => {
  if (typeof window === "undefined") return "dark";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "light" || saved === "dark" ? saved : "dark";
  } catch {
    return "dark";
  }
};

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(readStoredTheme);

  // Aplica + persiste sempre que muda
  useEffect(() => {
    applyTheme(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* storage indisponível */
    }
  }, [theme]);

  // Sincroniza entre abas: se outra aba mudar o tema, aplicamos aqui também
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && (e.newValue === "light" || e.newValue === "dark")) {
        setThemeState(e.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggleTheme = () => setThemeState((prev) => (prev === "light" ? "dark" : "light"));
  const setTheme = (t: Theme) => setThemeState(t);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

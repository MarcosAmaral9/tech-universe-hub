import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

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
  if (root.classList.contains(theme)) return;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
};

/**
 * Aplica o tema com transição suave breve, sem forçar re-render global.
 * Usa View Transitions API quando disponível para evitar flashes.
 */
const applyThemeSmooth = (theme: Theme) => {
  const root = document.documentElement;
  if (root.classList.contains(theme)) return;

  const run = () => {
    root.classList.add("theme-transition");
    applyTheme(theme);
    window.setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 320);
  };

  const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
  if (typeof doc.startViewTransition === "function") {
    doc.startViewTransition(run);
  } else {
    run();
  }
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Estado interno apenas para leitura por consumidores; visual é dirigido pelo DOM diretamente.
  const [theme, setThemeState] = useState<Theme>(readStoredTheme);
  const mountedRef = useRef(false);

  // Garante que o DOM reflete o estado inicial (caso o script anti-flash não tenha rodado)
  useEffect(() => {
    applyTheme(theme);
    mountedRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState((prev) => {
      if (prev === next) return prev;
      applyThemeSmooth(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* storage indisponível */
      }
      return next;
    });
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next: Theme = prev === "light" ? "dark" : "light";
      applyThemeSmooth(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* storage indisponível */
      }
      return next;
    });
  }, []);

  // Sincroniza entre abas sem disparar re-renders desnecessários
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && (e.newValue === "light" || e.newValue === "dark")) {
        setThemeState((prev) => {
          if (prev === e.newValue) return prev;
          applyThemeSmooth(e.newValue as Theme);
          return e.newValue as Theme;
        });
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const value = useMemo<ThemeContextType>(
    () => ({ theme, toggleTheme, setTheme }),
    [theme, toggleTheme, setTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

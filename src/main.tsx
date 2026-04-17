import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { AppErrorBoundary } from "./components/AppErrorBoundary.tsx";
import { initOfflineCommentSync } from "./utils/offlineCommentQueue.ts";
import "./index.css";

// Inicia o sistema de fila offline para comentários (background sync)
initOfflineCommentSync();

createRoot(document.getElementById("root")!).render(
  <AppErrorBoundary>
    <App />
  </AppErrorBoundary>
);

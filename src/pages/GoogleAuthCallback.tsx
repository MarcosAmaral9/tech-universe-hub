import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

const API_BASE = "/api.php";
const SESSION_KEY = "viciocode_session";
const REDIRECT_URI = "https://viciocode.com/auth/google";

const GoogleAuthCallback = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("Autenticando com Google...");
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const code  = searchParams.get("code");
    const state = searchParams.get("state");
    const error = searchParams.get("error");

    if (error || !code || !state) {
      window.location.href = "/entrar?google_error=cancelled";
      return;
    }

    // Troca o code pelo token via api.php (server-side, seguro)
    fetch(`${API_BASE}?action=google_exchange`, {
      signal: AbortSignal.timeout(30_000),
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, state, redirect_uri: REDIRECT_URI }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok || data.error) {
          throw new Error(data.code || (res.status === 503 ? "unavailable" : "exchange_failed"));
        }
        return data;
      })
      .then((data) => {
        try { localStorage.setItem(SESSION_KEY, JSON.stringify({
          user: data.user,
          profile: data.profile,
        })); } catch { /* a sessão permanece no cookie HttpOnly */ }
        setStatus("Login realizado! Redirecionando...");
        window.location.href = "/configuracoes";
      })
      .catch((err) => {
        const allowed = ["unavailable", "not_configured", "invalid_state", "token_failed", "userinfo_failed"];
        const reason = allowed.includes(err.message) ? err.message : "exchange_failed";
        window.location.href = `/entrar?google_error=${reason}`;
      });
  }, []);

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-muted-foreground">{status}</p>
      </div>
    </div>
  );
};

export default GoogleAuthCallback;

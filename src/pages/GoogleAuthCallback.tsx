import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const API_BASE = "/api.php";
const SESSION_KEY = "viciocode_session";
const REDIRECT_URI = "https://viciocode.com/auth/google";

const GoogleAuthCallback = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("Autenticando com Google...");

  useEffect(() => {
    const code  = searchParams.get("code");
    const error = searchParams.get("error");

    if (error || !code) {
      window.location.href = "/entrar?google_error=cancelled";
      return;
    }

    // Troca o code pelo token via api.php (server-side, seguro)
    fetch(`${API_BASE}?action=google_exchange`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, redirect_uri: REDIRECT_URI }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok || data.error) {
          throw new Error(data.error || "Falha na autenticação");
        }
        return data;
      })
      .then((data) => {
        localStorage.setItem(SESSION_KEY, JSON.stringify({
          user: data.user,
          profile: data.profile,
        }));
        setStatus("Login realizado! Redirecionando...");
        window.location.href = "/configuracoes";
      })
      .catch((err) => {
        const msg = encodeURIComponent(err.message || "Erro desconhecido");
        window.location.href = `/entrar?google_error=exchange_failed&msg=${msg}`;
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

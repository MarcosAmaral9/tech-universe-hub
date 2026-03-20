import { Component, type ReactNode, type ErrorInfo } from "react";

interface Props { children: ReactNode; }
interface State { error: Error | null; info: string; }

export class AppErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null, info: "" };
  }

  static getDerivedStateFromError(error: Error): State {
    return { error, info: "" };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ info: info.componentStack || "" });
    // Log to console for DevTools inspection
    console.error("[VicioCode] App crashed:", error);
    console.error("[VicioCode] Component stack:", info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{
          fontFamily: "monospace", padding: "2rem", background: "#0a0a0a",
          color: "#fff", minHeight: "100vh", whiteSpace: "pre-wrap"
        }}>
          <h1 style={{ color: "#ef4444", marginBottom: "1rem" }}>
            ⚠️ Erro ao carregar o site
          </h1>
          <p style={{ color: "#f97316", marginBottom: "0.5rem" }}>
            <strong>Mensagem:</strong> {this.state.error.message}
          </p>
          <p style={{ color: "#94a3b8", fontSize: "0.8rem", marginBottom: "1rem" }}>
            <strong>Stack:</strong>{"\n"}{this.state.error.stack}
          </p>
          {this.state.info && (
            <p style={{ color: "#94a3b8", fontSize: "0.75rem" }}>
              <strong>Componente:</strong>{"\n"}{this.state.info}
            </p>
          )}
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: "1rem", padding: "0.5rem 1rem",
              background: "#3b82f6", color: "#fff", border: "none",
              borderRadius: "4px", cursor: "pointer"
            }}
          >
            Recarregar página
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

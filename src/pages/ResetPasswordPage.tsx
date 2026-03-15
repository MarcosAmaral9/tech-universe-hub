import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, KeyRound } from "lucide-react";
import DynamicSEO from "@/components/DynamicSEO";
import { Link } from "react-router-dom";

// Password reset is now handled entirely via server-side email flow.
// This page just informs the user to contact support or use the login form.
const ResetPasswordPage = () => {
  return (
    <>
      <DynamicSEO />
      <div className="min-h-[60vh] flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
            <KeyRound className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold font-orbitron text-foreground">Redefinir Senha</h1>
          <p className="text-muted-foreground">
            Para redefinir sua senha, entre em contato pelo{" "}
            <Link to="/contato" className="text-primary hover:underline">formulário de contato</Link>{" "}
            informando seu email cadastrado.
          </p>
          <Button asChild variant="outline">
            <Link to="/entrar"><ArrowLeft className="w-4 h-4 mr-2" /> Voltar ao login</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;

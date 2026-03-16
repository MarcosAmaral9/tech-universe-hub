import { Link } from "react-router-dom";
import { ArrowLeft, Shield, AlertTriangle, Check, X, MessageSquare, Users, LogIn } from "lucide-react";
import DynamicSEO from "@/components/DynamicSEO";

const ContentPolicyPage = () => {
  return (
    <>
      <DynamicSEO />
      <div className="container py-8 max-w-4xl mx-auto">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para Home
      </Link>

      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="h-10 w-10 text-primary" />
          <h1 className="font-display text-3xl md:text-4xl font-bold">
            Política de Conteúdo
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Regras para manter nossa comunidade segura e respeitosa
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Última atualização: 09 de Março, 2026
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
        {/* Introduction */}
        <section className="p-6 bg-secondary/50 rounded-xl border border-border">
          <div className="flex items-start gap-3">
            <MessageSquare className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold mb-2 mt-0">Sobre Esta Política</h2>
              <p className="text-muted-foreground mb-0">
                O VICIO&lt;CODE&gt; é um espaço para compartilhar conhecimento e opiniões sobre tecnologia, 
                games, investimentos e cultura pop. Para manter um ambiente saudável, estabelecemos regras 
                claras sobre o que é permitido e proibido em nossa plataforma — tanto no site quanto no app.
              </p>
            </div>
          </div>
        </section>

        {/* Login required */}
        <section className="p-6 bg-primary/10 rounded-xl border border-primary/30">
          <div className="flex items-start gap-3">
            <LogIn className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold mb-2 mt-0">Autenticação Obrigatória</h2>
              <p className="text-muted-foreground mb-0">
                Para comentar em qualquer artigo, é necessário estar logado com uma conta válida. 
                Seu apelido (nickname) escolhido durante o cadastro será exibido automaticamente nos comentários. 
                Isso garante responsabilidade e transparência nas interações.
              </p>
            </div>
          </div>
        </section>

        {/* What's NOT allowed */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <X className="h-7 w-7 text-destructive" />
            <h2 className="text-2xl font-bold mt-0 mb-0">O Que NÃO É Permitido</h2>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/30">
              <h3 className="font-bold text-destructive flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5" />
                Linguagem Ofensiva
              </h3>
              <ul className="text-muted-foreground space-y-1 list-disc list-inside mb-0">
                <li>Palavrões, insultos e xingamentos de qualquer tipo</li>
                <li>Linguagem discriminatória (racismo, homofobia, xenofobia, etc.)</li>
                <li>Ataques pessoais ou assédio a outros usuários</li>
                <li>Conteúdo que incite ódio ou violência</li>
              </ul>
            </div>

            <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/30">
              <h3 className="font-bold text-destructive flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5" />
                Links e Mídia
              </h3>
              <ul className="text-muted-foreground space-y-1 list-disc list-inside mb-0">
                <li>Links externos de qualquer tipo (URLs, sites, redes sociais)</li>
                <li>Endereços de e-mail</li>
                <li>Imagens, vídeos ou arquivos de qualquer formato</li>
                <li>Código HTML ou tentativas de formatação</li>
              </ul>
            </div>

            <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/30">
              <h3 className="font-bold text-destructive flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5" />
                Spam e Comportamento Malicioso
              </h3>
              <ul className="text-muted-foreground space-y-1 list-disc list-inside mb-0">
                <li>Mensagens repetitivas ou spam</li>
                <li>Propaganda não autorizada</li>
                <li>Tentativas de golpe ou fraude</li>
                <li>Uso de bots ou automação</li>
                <li>Falsificação de identidade ou criação de contas falsas</li>
              </ul>
            </div>

            <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/30">
              <h3 className="font-bold text-destructive flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5" />
                Conteúdo Inapropriado
              </h3>
              <ul className="text-muted-foreground space-y-1 list-disc list-inside mb-0">
                <li>Conteúdo adulto ou sexual</li>
                <li>Spoilers sem aviso prévio</li>
                <li>Informações pessoais de terceiros</li>
                <li>Conteúdo que viole direitos autorais</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What's allowed */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Check className="h-7 w-7 text-green-500" />
            <h2 className="text-2xl font-bold mt-0 mb-0">O Que É Permitido</h2>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/30">
              <h3 className="font-bold text-green-500 flex items-center gap-2 mb-2">
                <Check className="h-5 w-5" />
                Comentários Construtivos
              </h3>
              <ul className="text-muted-foreground space-y-1 list-disc list-inside mb-0">
                <li>Opiniões respeitosas sobre os artigos</li>
                <li>Perguntas relevantes ao tema</li>
                <li>Sugestões de melhoria ou novos conteúdos</li>
                <li>Compartilhamento de experiências pessoais</li>
              </ul>
            </div>

            <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/30">
              <h3 className="font-bold text-green-500 flex items-center gap-2 mb-2">
                <Check className="h-5 w-5" />
                Discussões Saudáveis
              </h3>
              <ul className="text-muted-foreground space-y-1 list-disc list-inside mb-0">
                <li>Debates respeitosos sobre temas abordados</li>
                <li>Correções factuais educadas</li>
                <li>Diferentes pontos de vista apresentados com respeito</li>
                <li>Interações positivas com outros leitores</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Usernames */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-7 w-7 text-primary" />
            <h2 className="text-2xl font-bold mt-0 mb-0">Perfil e Nome de Exibição</h2>
          </div>
          
          <p className="text-muted-foreground">
            Ao criar sua conta, você escolhe um apelido (nickname) que será usado automaticamente em todos os seus comentários. 
            Seu apelido deve:
          </p>
          <ul className="text-muted-foreground list-disc list-inside">
            <li>Ter entre 2 e 50 caracteres</li>
            <li>Não conter palavrões ou termos ofensivos</li>
            <li>Não incluir links ou endereços de e-mail</li>
            <li>Usar apenas letras, números, espaços e caracteres básicos (. _ -)</li>
          </ul>
          <p className="text-muted-foreground mt-3">
            Você pode alterar seu apelido e avatar a qualquer momento nas <Link to="/configuracoes" className="text-primary hover:underline">configurações da conta</Link>.
          </p>
        </section>

        {/* Moderation */}
        <section className="p-6 bg-primary/10 rounded-xl border border-primary/30">
          <h2 className="text-xl font-bold mb-3 mt-0">Moderação Automática</h2>
          <p className="text-muted-foreground mb-0">
            Todos os comentários passam por um sistema de moderação automática que verifica 
            linguagem ofensiva, links, imagens e outros conteúdos proibidos antes da publicação. 
            Comentários que não cumpram as regras são bloqueados automaticamente.
          </p>
        </section>

        {/* Consequences */}
        <section>
          <h2 className="text-2xl font-bold">Consequências</h2>
          <p className="text-muted-foreground">
            Comentários que violem estas regras serão automaticamente bloqueados pelo nosso sistema 
            de moderação. Em casos graves ou repetidos, podemos tomar medidas adicionais, incluindo 
            a suspensão da conta, para proteger nossa comunidade.
          </p>
        </section>

        {/* Contact */}
        <section className="p-6 bg-secondary rounded-xl">
          <h2 className="text-xl font-bold mb-3 mt-0">Dúvidas ou Sugestões?</h2>
          <p className="text-muted-foreground mb-0">
            Se você encontrar conteúdo que viole estas regras ou tiver sugestões para melhorar 
            nossa política, entre em contato através da nossa <Link to="/contato" className="text-primary hover:underline">página de contato</Link> ou 
            das nossas redes sociais.
          </p>
        </section>

        {/* Related Links */}
        <section className="flex flex-wrap gap-4 pt-4">
          <Link 
            to="/privacidade" 
            className="text-primary hover:underline"
          >
            Política de Privacidade →
          </Link>
          <Link 
            to="/termos" 
            className="text-primary hover:underline"
          >
            Termos e Condições →
          </Link>
          <Link 
            to="/sobre" 
            className="text-primary hover:underline"
          >
            Sobre o Site →
          </Link>
        </section>
      </div>
    </div>
  </>  
  );
};

export default ContentPolicyPage;

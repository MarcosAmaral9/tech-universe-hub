import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Smartphone, Bot, Image, Mic, Star, DollarSign } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/dola-ai-app-assistente-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const DolaAI2026 = () => {
  useEffect(() => {
    trackArticleRead("dola-ai-app-assistente-2026", "Dola AI: O App de Assistente de IA que Virou Febre no Brasil em 2026", "ia");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="ia" />

      <header className="mb-8">
        <CategoryBadge category="ia" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Dola AI: O App de Assistente de IA que Virou Febre no Brasil em 2026
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />28 de Maio, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="ia" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchpriority="high"
          loading="eager"
          decoding="async"
          src={heroImg}
          alt="Dola AI app assistente de inteligência artificial — como usar, recursos e comparativo 2026"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O <strong>Dola AI</strong> entrou no radar brasileiro no início de 2026 e não saiu mais — hoje ocupa as primeiras posições na categoria de produtividade da Play Store e App Store no país. Mas o que exatamente ele faz de diferente dos outros assistentes de IA? Testamos o app por semanas para trazer um guia completo e honesto.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Bot className="h-7 w-7 text-ia" />
          O Que é o Dola AI?
        </h2>
        <p>
          O <strong>Dola AI</strong> é um assistente virtual baseado em grandes modelos de linguagem (LLMs) disponível para Android e iOS. Ele combina em um único app funções que, até pouco tempo, exigiam três ou quatro ferramentas diferentes: chat com IA, geração de imagens, geração de vídeos, tradução automática, análise de documentos e bots especializados por tema. Sua proposta é simples: <strong>uma interface de conversação que conecta o usuário a todo esse ecossistema sem precisar de conta em múltiplas plataformas</strong>.
        </p>
        <p>
          Segundo a Mobile Time, o Dola foi eleito "dica de app da semana" em março de 2026 pelo crescimento expressivo de usuários ativos no Brasil. O CanalTech e o TechTudo cobriram o lançamento e destacaram a proposta de ser uma <strong>alternativa gratuita robusta</strong> ao ChatGPT e Gemini para quem usa principalmente o celular.
        </p>

        <div className="not-prose my-6 grid md:grid-cols-3 gap-4">
          {[
            { icon: "📱", label: "Plataformas", val: "Android e iOS" },
            { icon: "🌍", label: "Idiomas", val: "+20, incluindo PT-BR" },
            { icon: "💰", label: "Modelo", val: "Freemium" },
          ].map(({ icon, label, val }) => (
            <div key={label} className="bg-card rounded-xl border border-ia/20 p-4 text-center">
              <div className="text-2xl mb-1">{icon}</div>
              <p className="font-bold text-sm">{label}</p>
              <p className="text-xs text-muted-foreground">{val}</p>
            </div>
          ))}
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Smartphone className="h-7 w-7 text-ia" />
          Os 8 Recursos Principais do Dola AI
        </h2>

        <div className="not-prose space-y-3 my-6">
          {[
            {
              n: "1", titulo: "Bots de IA Especializados",
              desc: "O Dola tem uma seção de bots temáticos — cada um treinado para uma função específica: tradutor de idiomas, detector de texto gerado por IA, assistente de criação de conteúdo, organizador de eventos, entre outros. É o recurso que mais diferencia o app dos concorrentes diretos.",
            },
            {
              n: "2", titulo: "Geração de Imagens",
              desc: "Você descreve o que quer ver e o Dola gera a imagem. Aceita referências em anexo, permite ajustar proporção, estilo (cyberpunk, anime, fotorealista, aquarela), profundidade de campo e enquadramento. O resultado é comparável ao Midjourney básico para usuários casuais.",
            },
            {
              n: "3", titulo: "Geração de Vídeos com IA",
              desc: "A partir de comandos de texto ou imagens de referência, o app cria vídeos curtos. Aceita escolha de proporção (16:9, 9:16, 1:1) — ideal para stories e Reels. Qualidade inferior ao Seedance 2.0 ou Runway, mas sem custo extra para uso básico.",
            },
            {
              n: "4", titulo: "Assistência em Estudos",
              desc: "O Dola lê documentos (PDF, imagens de enunciado) e explica passo a passo, resolve problemas matemáticos e resume conteúdos. Alunos de ensino médio e faculdade são o público mais vocal na Play Store.",
            },
            {
              n: "5", titulo: "Respostas a Dúvidas com Busca Web",
              desc: "Diferente de modelos estáticos, o Dola consulta a internet quando necessário para trazer informações atualizadas — similar ao Perplexity, mas dentro do mesmo app.",
            },
            {
              n: "6", titulo: "Assistente de Escrita",
              desc: "E-mails, posts para redes sociais, redações, currículos, roteiros de vídeo — com ajuste de tom (formal, casual, criativo, persuasivo) e tamanho.",
            },
            {
              n: "7", titulo: "Tradução com Detecção Automática",
              desc: "Cola qualquer texto e o app detecta o idioma e traduz automaticamente. Suporte a mais de 20 idiomas incluindo português, espanhol, inglês, japonês, mandarim e árabe.",
            },
            {
              n: "8", titulo: "Análise de Documentos e Páginas Web",
              desc: "Anexe um PDF ou cole uma URL e peça ao Dola para resumir, extrair pontos principais ou responder perguntas sobre o conteúdo. O contexto suportado não é tão amplo quanto o Claude (200k tokens), mas cobre a maioria dos documentos do dia a dia.",
            },
          ].map(({ n, titulo, desc }) => (
            <div key={n} className="flex gap-4 bg-card rounded-xl border border-border p-4">
              <span className="w-8 h-8 rounded-full bg-ia/20 text-ia font-bold flex items-center justify-center shrink-0 text-sm">{n}</span>
              <div>
                <h3 className="font-bold text-sm mb-1">{titulo}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-ia" />
          Dola AI vs ChatGPT vs Gemini: Comparativo Honesto
        </h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full text-sm border-collapse bg-card rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-secondary text-left">
                <th className="p-3">Critério</th>
                <th className="p-3">Dola AI</th>
                <th className="p-3">ChatGPT</th>
                <th className="p-3">Gemini</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Qualidade de texto", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐"],
                ["Geração de imagens", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐ (DALL-E 3)", "⭐⭐⭐⭐ (Imagen 3)"],
                ["Geração de vídeos", "⭐⭐⭐", "❌ (sem vídeo nativo)", "⭐⭐⭐ (Veo 3)"],
                ["Bots especializados", "⭐⭐⭐⭐⭐", "⭐⭐⭐ (GPTs)", "⭐⭐"],
                ["Uso no celular", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐"],
                ["Tier gratuito", "⭐⭐⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐"],
                ["Análise de PDF", "⭐⭐⭐", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"],
                ["Privacidade", "⚠️ Verificar política", "⭐⭐⭐⭐", "⭐⭐⭐"],
              ].map(([crit, dola, gpt, gem]) => (
                <tr key={crit} className="border-t border-border">
                  <td className="p-3 font-medium text-sm">{crit}</td>
                  <td className="p-3 text-sm">{dola}</td>
                  <td className="p-3 text-sm">{gpt}</td>
                  <td className="p-3 text-sm">{gem}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          O Dola não é melhor que o ChatGPT ou o Gemini em capacidade bruta de texto ou raciocínio — mas <strong>não é essa a proposta</strong>. Ele se destaca pela <strong>experiência mobile-first</strong>, pela combinação de funcionalidades em um só app e pelo plano gratuito generoso. Para quem usa IA principalmente no celular e quer uma ferramenta que "faça de tudo" sem custo inicial, o Dola é legitimamente competitivo.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-ia" />
          Planos e Preços do Dola AI em 2026
        </h2>
        <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-card rounded-xl border border-border p-5">
            <h3 className="font-bold mb-2 text-sm">🆓 Plano Gratuito</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Chat com IA sem limite de mensagens</li>
              <li>• Geração de imagens com créditos diários</li>
              <li>• Geração de vídeos básicos (com marca d'água)</li>
              <li>• Bots especializados (seleção)</li>
              <li>• Tradução e análise de documentos</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-ia/30 p-5">
            <h3 className="font-bold mb-2 text-sm text-ia">⭐ Plano Premium</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Todos os recursos sem limite</li>
              <li>• Vídeos sem marca d'água</li>
              <li>• Acesso a modelos avançados</li>
              <li>• Bots premium desbloqueados</li>
              <li>• Prioridade na fila de geração</li>
            </ul>
            <p className="text-xs text-ia mt-3 font-bold">Disponível via App Store / Play Store — cobrança em BRL via loja</p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Mic className="h-7 w-7 text-ia" />
          Como Usar o Dola AI: Primeiros Passos
        </h2>
        <div className="not-prose space-y-3 my-6">
          {[
            { p: "1", t: "Baixe o app", d: "Disponível na Play Store (Android) e App Store (iOS). Busque por \"Dola\" — o ícone é um assistente com design minimalista." },
            { p: "2", t: "Crie uma conta", d: "Login via Google, Apple ou e-mail. Não precisa de cartão de crédito para o plano gratuito." },
            { p: "3", t: "Explore a tela inicial", d: "Você verá a área de chat e, na aba inferior, acesso a Bots, Imagens, Vídeos e Ferramentas." },
            { p: "4", t: "Experimente os bots", d: "Vá em \"Bots\" e escolha um especializado na sua necessidade. O bot de tradução, por exemplo, já identifica o idioma automaticamente." },
            { p: "5", t: "Gere sua primeira imagem", d: "Digite uma descrição detalhada em português. Exemplo: \"uma cidade futurista no Brasil à noite, estilo cyberpunk, iluminação neon azul e roxo\". Quanto mais específico, melhor o resultado." },
          ].map(({ p, t, d }) => (
            <div key={p} className="flex gap-3 bg-card rounded-xl border border-ia/20 p-4">
              <span className="w-7 h-7 rounded-full bg-ia/20 text-ia font-bold flex items-center justify-center shrink-0 text-xs">{p}</span>
              <div>
                <h3 className="font-bold text-sm mb-0.5">{t}</h3>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Pontos Negativos do Dola AI que Você Precisa Saber</h2>
        <ul className="space-y-2 my-6">
          <li><strong>Política de privacidade:</strong> verifique se o app usa suas conversas para treino antes de compartilhar dados sensíveis. A empresa não é tão transparente quanto Anthropic ou OpenAI nesse ponto.</li>
          <li><strong>Vídeos com marca d'água no gratuito:</strong> se precisar de vídeos sem marca para uso comercial, o plano pago é necessário.</li>
          <li><strong>Qualidade de texto inferior:</strong> em tarefas complexas de raciocínio ou análise profunda, o ChatGPT Plus e o Claude Pro ainda entregam resultados superiores.</li>
          <li><strong>Contexto menor:</strong> documentos muito longos podem ser truncados. Para PDFs extensos, o Claude.ai (200k tokens) é mais adequado.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-6">Para Quem o Dola AI é Indicado?</h2>
        <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-card rounded-xl border border-invest/20 p-4">
            <h3 className="font-bold text-sm mb-2 text-invest">✅ Vale muito a pena para</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Estudantes e universitários</li>
              <li>• Criadores de conteúdo para redes sociais</li>
              <li>• Quem quer IA no celular sem custo</li>
              <li>• Usuários casuais que precisam de um app versátil</li>
              <li>• Quem precisa de tradução frequente</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-muted p-4">
            <h3 className="font-bold text-sm mb-2">⚠️ Considere alternativas se você</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Trabalha com documentos longos e sensíveis</li>
              <li>• Precisa de raciocínio avançado (código, análise)</li>
              <li>• Quer vídeos profissionais sem marca d'água</li>
              <li>• Precisa de garantias contratuais de privacidade (LGPD)</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">FAQ — Perguntas Frequentes sobre o Dola AI</h2>
        <div className="not-prose space-y-3 my-6">
          {[
            { q: "O Dola AI é gratuito?", a: "Sim, com limitações. O plano gratuito oferece chat ilimitado, geração de imagens com créditos diários e bots básicos. Para vídeos sem marca d'água e funcionalidades premium, há assinatura paga cobrável via App Store ou Play Store em BRL." },
            { q: "O Dola AI funciona em português?", a: "Sim. O app tem suporte nativo ao português brasileiro e detecta automaticamente o idioma para tradução. As respostas em PT-BR são fluentes." },
            { q: "O Dola AI é seguro?", a: "Para uso casual e não-sensível, sim. Evite compartilhar dados pessoais, bancários ou de clientes sem verificar a política de privacidade atualizada no site oficial. Para uso corporativo, priorize plataformas com DPA assinado." },
            { q: "Qual a diferença do Dola para o ChatGPT?", a: "O ChatGPT tem raciocínio e análise mais avançados, especialmente com o modelo o3. O Dola se destaca em experiência mobile-first, bots temáticos e combinação de recursos em um único app. Para uso no celular com variedade de funções, o Dola tem vantagem." },
          ].map(({ q, a }) => (
            <div key={q} className="bg-card rounded-xl border border-border p-4">
              <h4 className="font-bold text-sm mb-1">{q}</h4>
              <p className="text-sm text-muted-foreground">{a}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Você já testou o Dola AI?</h3>
          <p className="text-muted-foreground">Conta pra gente nos comentários o que achou! 👇</p>
        </div>
      </div>

      <EditorialTake category="ia" title="Análise do Marcos: Dola resolve o problema real de quem não quer 5 apps de IA no celular">
        <p>
          O grande acerto do Dola AI é entender que a maioria dos usuários brasileiros não quer gerenciar cinco apps de IA diferentes — um para texto, um para imagem, um para vídeo, um para tradução. O Dola empacota tudo em uma interface conversacional simples e em português, o que reduz drasticamente a barreira de entrada. O crescimento nas lojas em 2026 reflete isso.
        </p>
        <p>
          A ressalva importante é a <strong>privacidade</strong>: a empresa por trás do Dola ainda não tem a mesma transparência de Anthropic ou OpenAI em termos de política de retenção e uso de dados. Para uso pessoal e casual, o risco é baixo. Para qualquer coisa que envolva dados de cliente, empresa ou informação sensível, use plataformas com DPA documentado. No mais, o Dola é genuinamente uma boa pedida gratuita para quem está dando os primeiros passos com IA no celular.
        </p>
      </EditorialTake>

      <ArticleSources sources={[
        { title: "Mobile Time — Dola, assistente de IA generativa, é a dica de app da semana", url: "https://www.mobiletime.com.br/tapps/30/03/2026/dica-da-semana-dola/", publisher: "Mobile Time", accessedAt: "Maio 2026" },
        { title: "CanalTech — 8 coisas que a Dola AI consegue fazer no celular", url: "https://canaltech.com.br/apps/bots-e-geracao-de-imagens-8-coisas-que-a-dola-ai-consegue-fazer-no-celular/", publisher: "CanalTech", accessedAt: "Maio 2026" },
        { title: "TechTudo — Dola AI: como usar IA que ajuda a organizar a sua agenda", url: "https://www.techtudo.com.br/dicas-e-tutoriais/2024/09/dola-ai-como-usar-ia-que-ajuda-a-organizar-a-sua-agenda-edsoftwares.ghtml", publisher: "TechTudo", accessedAt: "Maio 2026" },
        { title: "App Store — Dola: assistente inteligente (IA)", url: "https://apps.apple.com/br/app/dola-assist-inteligente-ia/id6451431247", publisher: "Apple App Store", accessedAt: "Maio 2026" },
        { title: "Google Play — Dola: assistente inteligente (IA)", url: "https://play.google.com/store/apps/details?id=com.larus.wolf&gl=br&hl=pt", publisher: "Google Play Store", accessedAt: "Maio 2026" },
      ]} />

      <RelatedPosts currentSlug="dola-ai-app-assistente-2026" />
      <CommentSection postId="dola-ai-app-assistente-2026" postTitle="Dola AI: O App de Assistente de IA que Virou Febre no Brasil em 2026" />
    </article>
  );
};

export default DolaAI2026;

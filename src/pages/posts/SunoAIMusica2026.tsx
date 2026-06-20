import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import {
  Clock, User, Calendar, Music, Mic2, DollarSign,
  BarChart3, Shield, Star, AlertTriangle,
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/suno-ai-gerador-musica-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const SunoAIMusica2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "suno-ai-gerador-musica-2026",
      "Suno AI: O Guia Completo do Gerador de Músicas com IA em 2026",
      "ia"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="ia" />

      <header className="mb-8">
        <CategoryBadge category="ia" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Suno AI: O Guia Completo do Gerador de Músicas com IA em 2026
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />28 de Maio, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
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
          alt="Suno AI gerador de músicas com inteligência artificial — guia completo 2026 com preços, v5.5 e direitos autorais"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O <strong>Suno AI</strong> é o gerador de músicas com IA mais popular do mundo — com mais de <strong>100 milhões de usuários</strong> e 7 milhões de novas faixas criadas por dia. Em 2026, a plataforma lançou o modelo v5.5 com clonagem de voz, músicas de até 8 minutos em 44,1 kHz e acordos de licenciamento com as majors. Mas também enfrenta batalhas judiciais que podem mudar tudo para criadores. Guia completo aqui.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Music className="h-7 w-7 text-ia" />
          O Que é o Suno AI e Como Funciona
        </h2>
        <p>
          O <strong>Suno AI</strong> é uma plataforma de geração musical baseada em inteligência artificial desenvolvida pela <strong>Suno Inc.</strong>, fundada em Cambridge (EUA) em 2023. Você escreve um prompt de texto — gênero, humor, tema, letra ou estilo — e o modelo gera uma música completa com <strong>vocais, instrumentação, mixagem e masterização</strong> em segundos. Não é necessário saber música, tocar instrumento ou usar DAW.
        </p>
        <p>
          O modelo mais recente, o <strong>v5.5</strong> (lançado em março de 2026), introduziu três capacidades inéditas: <strong>clonagem de voz</strong> para personalizar o timbre do cantor gerado, <strong>modelos customizados</strong> treinados no catálogo do próprio usuário, e um motor de personalização chamado <strong>My Taste</strong> que aprende suas preferências ao longo do uso. A qualidade de áudio chegou a <strong>44,1 kHz</strong> — padrão de estúdio profissional.
        </p>

        <div className="not-prose my-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: "🎵", label: "Usuários", val: "+100M" },
            { icon: "🎶", label: "Faixas/dia", val: "7 milhões" },
            { icon: "🎸", label: "Gêneros", val: "+1.200" },
            { icon: "⏱️", label: "Duração máx.", val: "8 minutos" },
          ].map(({ icon, label, val }) => (
            <div key={label} className="bg-card rounded-xl border border-ia/20 p-4 text-center">
              <div className="text-2xl mb-1">{icon}</div>
              <p className="font-bold text-xs">{label}</p>
              <p className="text-sm text-ia font-bold">{val}</p>
            </div>
          ))}
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Mic2 className="h-7 w-7 text-ia" />
          Como Criar Sua Primeira Música no Suno AI — Passo a Passo
        </h2>

        <div className="not-prose space-y-3 my-6">
          {[
            {
              p: "1", t: "Acesse suno.com",
              d: "Faça login com Google, Microsoft ou Discord. O plano gratuito dá 10 créditos diários — suficientes para 5 músicas por dia sem cartão de crédito.",
            },
            {
              p: "2", t: "Escolha o modo: Simples ou Custom",
              d: "Modo Simples: você descreve a música em uma frase (\"funk brasileiro animado sobre segunda-feira\"). Modo Custom: você fornece letra completa, define estilo musical e título — mais controle, mais previsível.",
            },
            {
              p: "3", t: "Escreva um bom prompt",
              d: "Prompts eficazes combinam: gênero + mood + tema + instrumentação. Exemplo: \"pagode romântico, voz feminina suave, violão e cavaquinho, letra sobre saudade de São Paulo, estilo Ludmilla anos 2010\".",
            },
            {
              p: "4", t: "Gere duas versões",
              d: "O Suno sempre gera duas variações do mesmo prompt. Compare as duas antes de escolher — frequentemente uma é notavelmente melhor que a outra.",
            },
            {
              p: "5", t: "Use o modo 'Extend'",
              d: "Gostou de uma música mas ela é curta? Clique em Extend para continuar a composição a partir de qualquer ponto, mantendo coerência de estilo, tonalidade e voz.",
            },
            {
              p: "6", t: "Baixe e compartilhe",
              d: "Plano gratuito permite ouvir e compartilhar. Para baixar o MP3, você precisa do plano Pro (US$ 8/mês). Para uso comercial, o plano Pro ou Premier é obrigatório.",
            },
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

        <h2 className="text-2xl font-bold mt-10 mb-6">Exemplos de Prompts que Funcionam em Português</h2>
        <div className="not-prose space-y-2 my-6">
          {[
            { genero: "🎸 Rock", prompt: "\"Rock alternativo brasileiro dos anos 90, guitarra distorcida, voz masculina rasgada, letra sobre periferia de São Paulo, influência Charlie Brown Jr.\"" },
            { genero: "🎹 Lo-fi", prompt: "\"Lo-fi hip hop instrumental, piano melancólico, chuva de fundo, bateria suave, sem vocais, para estudar\"" },
            { genero: "🎺 Samba", prompt: "\"Samba-enredo animado, escola de samba, cuíca e surdo, voz masculina grave, letra sobre Copacabana nos anos 70\"" },
            { genero: "🎤 Pop", prompt: "\"Pop teen brasileiro 2024, prod trap suave, voz feminina jovem autotunada, letra sobre crush no celular\"" },
            { genero: "🎻 Trilha", prompt: "\"Trilha sonora épica orquestral para cena de batalha, cordas e metais, crescendo dramático, sem vocais, estilo Hans Zimmer\"" },
          ].map(({ genero, prompt }) => (
            <div key={genero} className="bg-card rounded-xl border border-border p-4">
              <p className="font-bold text-sm mb-1">{genero}</p>
              <p className="text-xs text-muted-foreground font-mono">{prompt}</p>
            </div>
          ))}
        </div>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-ia" />
          Planos e Preços do Suno AI em 2026
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full text-sm border-collapse bg-card rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-secondary text-left">
                <th className="p-3">Plano</th>
                <th className="p-3">Preço</th>
                <th className="p-3">Créditos/mês</th>
                <th className="p-3">Download MP3</th>
                <th className="p-3">Uso Comercial</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["🆓 Gratuito", "R$ 0", "50 créditos (~10 músicas)", "❌", "❌"],
                ["⭐ Pro", "US$ 8/mês (~R$ 44)", "2.500 créditos (~500 músicas)", "✅", "✅"],
                ["🏆 Premier", "US$ 24/mês (~R$ 132)", "10.000 créditos (~2.000 músicas)", "✅", "✅ Prioritário"],
              ].map(([plano, preco, cred, dl, com]) => (
                <tr key={plano} className="border-t border-border">
                  <td className="p-3 font-medium">{plano}</td>
                  <td className="p-3">{preco}</td>
                  <td className="p-3 text-muted-foreground text-xs">{cred}</td>
                  <td className="p-3">{dl}</td>
                  <td className="p-3">{com}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">Preços em USD; cobrança via cartão internacional com IOF 3,38%. Não há plano regional em BRL.</p>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-ia" />
          Suno AI v5.5 vs Udio: Comparativo Honesto
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full text-sm border-collapse bg-card rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-secondary text-left">
                <th className="p-3">Critério</th>
                <th className="p-3">Suno v5.5</th>
                <th className="p-3">Udio</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Qualidade vocal", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐"],
                ["Qualidade instrumental", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"],
                ["Diversidade de gêneros", "+1.200 gêneros ⭐⭐⭐⭐⭐", "+600 gêneros ⭐⭐⭐⭐"],
                ["Duração máxima", "8 minutos", "4 minutos"],
                ["Clonagem de voz", "✅ (v5.5)", "❌"],
                ["Custom models", "✅ (v5.5)", "❌"],
                ["Plano gratuito", "10 músicas/dia ⭐⭐⭐⭐", "5 músicas/dia ⭐⭐⭐"],
                ["Licenciamento major", "Warner (nov/2025) ⭐⭐⭐⭐", "Warner + UMG ⭐⭐⭐⭐⭐"],
                ["Situação jurídica", "Sony ainda em disputa ⚠️", "Sony ainda em disputa ⚠️"],
              ].map(([crit, suno, udio]) => (
                <tr key={crit} className="border-t border-border">
                  <td className="p-3 font-medium text-sm">{crit}</td>
                  <td className="p-3 text-sm">{suno}</td>
                  <td className="p-3 text-sm">{udio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          O Suno lidera em variedade de gêneros, qualidade vocal e recursos de personalização. O Udio tende a entregar instrumentação mais detalhada em estilos complexos como jazz e música orquestral. Para produção de músicas pop, funk, sertanejo e MPB em português, o <strong>Suno é a escolha mais acertada</strong>.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-destructive" />
          A Batalha Jurídica que Todo Usuário do Suno Precisa Conhecer
        </h2>
        <p>
          Em junho de 2024, a RIAA (Associação da Indústria Fonográfica dos EUA) processou a Suno Inc. e a Udio alegando <strong>violação massiva de direitos autorais</strong> ao treinar os modelos com gravações protegidas sem autorização. O processo corre no Tribunal Federal de Massachusetts. Em novembro de 2025, a <strong>Warner Music fechou acordo com o Suno</strong> — incluindo parceria de licenciamento e a aquisição do Songkick. A <strong>Universal Music fechou acordo com o Udio</strong> em outubro do mesmo ano.
        </p>
        <p>
          O ponto crítico: a <strong>Sony Music ainda não aceitou acordo</strong> com nenhuma das duas plataformas. A audiência de julgamento sumário está marcada para <strong>julho de 2026</strong>, com a juíza Denise Casper no Massachusetts. Se o tribunal decidir contra o argumento de fair use da Suno, o precedente afetará toda a indústria de IA musical — e possivelmente forçará mudanças nos modelos de negócio de plataformas concorrentes.
        </p>
        <div className="not-prose my-6 p-5 bg-destructive/10 rounded-xl border border-destructive/20">
          <p className="text-sm font-semibold text-destructive mb-2">⚠️ O que isso significa na prática para você</p>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Músicas geradas hoje no plano pago têm <strong>licença comercial da plataforma</strong> — mas isso não garante direito autoral do usuário sobre a obra.</li>
            <li>• O Copyright Office dos EUA ainda não reconhece obra 100% gerada por IA como protegida. Para proteger legalmente uma faixa, você precisa de <strong>contribuição criativa humana documentada</strong>.</li>
            <li>• Se a Sony vencer o processo de fair use, o Suno pode ser obrigado a reformular o modelo — o que pode afetar acesso a gêneros ou estilos específicos.</li>
            <li>• Para uso comercial seguro no Brasil, registre a faixa com prova de contribuição criativa (letra, arranjo, mix) antes de distribuir em plataformas.</li>
          </ul>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-ia" />
          Novidades do Suno v5.5 (Março de 2026)
        </h2>
        <ul className="space-y-2 my-6">
          <li><strong>Clonagem de voz (Voice Cloning):</strong> Upload de 30 segundos de áudio de referência para personalizar o timbre do vocalista gerado. Restrito a vozes próprias — a plataforma proíbe clonagem de artistas conhecidos.</li>
          <li><strong>Custom Models:</strong> Usuários Pro e Premier podem treinar um modelo personalizado a partir do seu próprio catálogo — ideal para produtores que querem consistência de estilo entre faixas.</li>
          <li><strong>My Taste Engine:</strong> Sistema de personalização que aprende suas preferências conforme você ouve, curtir e gera músicas, ajustando os resultados ao longo do tempo.</li>
          <li><strong>Áudio 44,1 kHz:</strong> Qualidade de estúdio, adequada para distribuição em Spotify, Apple Music e outras plataformas sem degradação perceptível.</li>
          <li><strong>Stems (extração de faixas):</strong> Plano Premier permite extrair vocal, bateria, baixo e melodia separadamente — facilitando remixes e pós-produção em DAW.</li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-ia" />
          Como Distribuir Músicas do Suno nas Plataformas
        </h2>
        <p>
          Distribuidoras que explicitamente aceitam conteúdo gerado por IA com revisão humana em 2026: <strong>DistroKid</strong> (com declaração de uso de IA), <strong>TuneCore</strong> (política atualizada em out/2025) e <strong>Amuse</strong>. O <strong>Spotify, Apple Music e YouTube Music</strong> aceitam faixas com IA desde que haja contribuição criativa humana e a origem seja declarada nos metadados.
        </p>
        <p>
          Plataformas que <strong>ainda não aceitam ou são ambíguas</strong>: SoundCloud (em revisão), Tidal (aguardando política oficial). Para o mercado brasileiro, a plataforma Loofah Music e a Tratore aceitam conteúdo com IA mediante declaração de autoria.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">Para Quem o Suno AI é Indicado?</h2>
        <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-card rounded-xl border border-invest/20 p-4">
            <h3 className="font-bold text-sm mb-2 text-invest">✅ Vale muito a pena para</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Criadores de conteúdo que precisam de trilhas originais</li>
              <li>• YouTubers e podcasters (sem royalties de terceiros)</li>
              <li>• Músicos iniciantes explorando estilos e composição</li>
              <li>• Agências que produzem jingles e trilhas para marcas</li>
              <li>• Produtores de games e apps buscando música ambiente</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-muted p-4">
            <h3 className="font-bold text-sm mb-2">⚠️ Avalie bem antes se você</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Quer lançar faixas como artista em gravadoras</li>
              <li>• Precisa de licença para sincronização em filmes/publicidade</li>
              <li>• Quer proteção total de direitos autorais</li>
              <li>• Usa estilos muito específicos de artistas Sony/UMG</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">FAQ — Perguntas Frequentes sobre o Suno AI</h2>
        <div className="not-prose space-y-3 my-6">
          {[
            {
              q: "O Suno AI é gratuito?",
              a: "Sim. O plano gratuito oferece 50 créditos por mês (cerca de 10 músicas completas) sem cartão de crédito. Para download de MP3 e uso comercial, o plano Pro (US$ 8/mês) é necessário.",
            },
            {
              q: "Posso usar músicas do Suno comercialmente?",
              a: "Sim, nos planos Pro e Premier — a plataforma concede licença comercial. Porém, a proteção de direito autoral da obra em si ainda é juridicamente incerta nos EUA. Para o Brasil, adicione contribuição criativa humana documentada (letra, mix, arranjo) antes de distribuir.",
            },
            {
              q: "O Suno funciona em português?",
              a: "Sim. O modelo entende prompts em português e gera músicas com vocais em PT-BR. A qualidade em português é muito boa, especialmente para gêneros brasileiros como pagode, sertanejo, funk e MPB.",
            },
            {
              q: "O Suno vai fechar por causa do processo judicial?",
              a: "Não há risco imediato. A plataforma tem mais de 100 milhões de usuários, fechou acordo com a Warner e está operacional. O processo com a Sony pode mudar regras de uso, mas o serviço continuará disponível independentemente do resultado.",
            },
            {
              q: "Qual a diferença entre Suno e Udio?",
              a: "O Suno tem mais gêneros, qualidade vocal superior, músicas mais longas (8 min) e clonagem de voz (v5.5). O Udio entrega instrumentação mais detalhada em gêneros complexos (jazz, orquestral) e fechou acordos com mais majors. Para música brasileira, o Suno ganha.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-card rounded-xl border border-border p-4">
              <h4 className="font-bold text-sm mb-1">{q}</h4>
              <p className="text-sm text-muted-foreground">{a}</p>
            </div>
          ))}
        </div>
</div>

      <EditorialTake category="ia" title="Análise do Marcos: Suno é uma das IAs mais democratizantes de 2026 — mas o jurídico é terra minada">
        <p>
          O Suno v5.5 é genuinamente impressionante. Gerar uma música de pagode em português com vocais convincentes, cavaquinho e bateria de samba a partir de um prompt de duas linhas é algo que teria parecido ficção científica em 2022. Para criadores de conteúdo, podcasters e marcas que precisam de trilhas originais sem pagar royalties, o Suno é uma das melhores ferramentas disponíveis hoje — e o plano gratuito é surpreendentemente generoso.
        </p>
        <p>
          A ressalva séria é a batalha com a Sony. Enquanto Warner e Universal já encontraram o caminho do acordo, a Sony está apostando num precedente judicial que, se obtido, pode reformular como todos os geradores de música operam. Para o usuário final, o risco prático no Brasil é baixo no curto prazo — mas quem quiser construir um catálogo musical com valor comercial real precisa documentar contribuição criativa humana em cada faixa. Gerar e publicar sem nenhum toque humano é juridicamente frágil, independentemente do que o contrato da plataforma diz.
        </p>
      </EditorialTake>

      <ArticleSources sources={[
        { title: "Music Business Worldwide — Suno sued by Poseidon Wave Media; v5.5 launch details", url: "https://www.musicbusinessworldwide.com/suno-sued-by-poseidon-wave-media-an-entity-behind-indie-duo-the-american-dollar-claiming-it-nearly-eliminated-their-licensing-revenue/", publisher: "Music Business Worldwide", accessedAt: "Maio 2026" },
        { title: "Chartlex — Music Industry AI Lawsuits Tracker 2026 (Warner-Suno settlement)", url: "https://www.chartlex.com/blog/business/music-industry-ai-lawsuits-tracker-2026", publisher: "Chartlex", accessedAt: "Maio 2026" },
        { title: "RIAA — Record Companies Bring Landmark Cases Against Suno and Udio", url: "https://www.riaa.com/record-companies-bring-landmark-cases-for-responsible-ai-againstsuno-and-udio-in-boston-and-new-york-federal-courts-respectively/", publisher: "RIAA", accessedAt: "Maio 2026" },
        { title: "AI Vortex — RIAA vs Suno e Udio: Attorney Guide 2026 (hearing julho/2026)", url: "https://www.aivortex.io/legal/ai-case-law/suno-udio-music-ai/", publisher: "AI Vortex", accessedAt: "Maio 2026" },
        { title: "NovaScientia — Suno AI: review completo, preços e alternativas (v4.5 / v5)", url: "https://novascientia.com.br/products/suno", publisher: "NovaScientia", accessedAt: "Maio 2026" },
        { title: "Medium — Suno Copyright and Legal Status in 2026: What AI Music Creators Actually Own", url: "https://medium.com/@J.S.Matkowski/suno-music-in-2026-what-creators-actually-own-what-they-only-license-and-why-the-lawsuits-still-7f7c3c455c0e", publisher: "Medium / J.S. Matkowski", accessedAt: "Maio 2026" },
      ]} />

      <RelatedPosts currentSlug="suno-ai-gerador-musica-2026" />
      <CommentSection category="ia"
        postId="suno-ai-gerador-musica-2026"
        postTitle="Suno AI: O Guia Completo do Gerador de Músicas com IA em 2026"
      />
    </article>
  );
};

export default SunoAIMusica2026;

import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Swords, BookOpen, Tv, BarChart3, Star, Zap, Shield } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/re-monster-anime-manga-guia-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const ReMonster2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "re-monster-anime-manga-guia-2026",
      "Re:Monster: Guia Completo do Anime e Mangá — Goblin que Virou Lenda",
      "otaku"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="otaku" size="lg" />
          <span className="px-3 py-1 bg-otaku/20 text-otaku rounded-full text-sm font-medium">
            Anime · Mangá · Isekai · Dark Fantasy
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Re:Monster: Guia Completo do Anime e Mangá — O Goblin que Absorve Poderes e Conquista Mundos
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />28 de Maio, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" publishedAt="28 de Maio, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          src={heroImg}
          alt="Re:Monster anime e mangá guia completo 2026 — Rou goblin isekai dark fantasy"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          <strong>Re:Monster</strong> é uma das histórias de isekai mais originais já criadas — e uma das mais controversas. Ao invés de reencarnação como herói ou nobre, o protagonista Tomokui Kanata (rebatizado Rou) renasce como um goblin, a criatura mais fraca da hierarquia de monstros. O que segue é uma narrativa de ascensão brutal, estratégica e implacável onde Rou usa sua habilidade única de absorver os poderes de tudo que consome para transformar um bando de goblins numa força que rivaliza com nações. Com anime pela Doga Kobo em 2024 e mangá ainda em andamento, este guia cobre tudo — da light novel original ao que esperar do futuro da franquia.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          De Onde Veio Re:Monster: A Light Novel que Começou Tudo
        </h2>
        <p>
          Re:Monster começou como uma <strong>light novel web</strong> (syosetu) escrita por <strong>Kanekiru Kogitsune</strong> entre 2012 e 2016, com serialização no popular site Shōsetsuka ni Narō — o mesmo berço de TenSura, Overlord e Shield Hero. A história acumulou dezenas de milhões de visualizações antes mesmo de ganhar adaptação para mangá e anime, estabelecendo um dos maiores fenômenos do portal.
        </p>
        <p>
          A premissa é deliberadamente subversiva: <strong>Tomokui Kanata</strong> era humano com uma habilidade única de memorizar e absorver qualquer coisa que comesse. Ao reencarnação como goblin — a criatura mais desprezada das masmorras — ele não apenas conserva suas memórias e inteligência superiores, mas descobre que sua habilidade continua funcionando. Comer inimigos absorve suas habilidades. Essa mecânica simples e poderosa é o motor de toda a narrativa.
        </p>
        <p>
          A adaptação em mangá ficou a cargo de <strong>Kogitsune Kanekiru</strong> (roteiro) e <strong>Haruyoshi Kobayakawa</strong> (arte), publicada na revista <em>Monthly Comic Alive</em> da Media Factory desde 2014. O mangá se destacou pela arte detalhada nos combates e pela forma como representou visualmente a progressão de poder dos goblins ao longo dos capítulos.
        </p>

        <div className="not-prose my-6 bg-card rounded-xl border border-otaku/20 p-5">
          <h3 className="font-bold text-otaku mb-3">📚 A Franquia Re:Monster</h3>
          <div className="space-y-2">
            {[
              { tipo: "📖 Light Novel (Web)", detalhe: "Kanekiru Kogitsune — syosetu.com — 2012 a 2016 — concluída", obs: "A origem. Mais detalhada e com mais arcos que o mangá" },
              { tipo: "📖 Light Novel (Física)", detalhe: "Media Factory — 13 volumes físicos publicados no Japão", obs: "Versão editada e expandida da web novel" },
              { tipo: "📕 Mangá", detalhe: "Monthly Comic Alive — Kobayakawa (arte) — desde 2014", obs: "Em andamento no Japão; sem edição BR confirmada" },
              { tipo: "📺 Anime", detalhe: "Doga Kobo — 12 episódios — Abril a Junho 2024", obs: "Disponível na Crunchyroll — cobre o início da web novel" },
            ].map(({ tipo, detalhe, obs }) => (
              <div key={tipo} className="border-b border-border pb-2 last:border-0 last:pb-0">
                <p className="font-bold text-xs text-otaku">{tipo}</p>
                <p className="text-xs text-muted-foreground">{detalhe}</p>
                <p className="text-xs italic text-muted-foreground">{obs}</p>
              </div>
            ))}
          </div>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Swords className="h-7 w-7 text-otaku" />
          Sinopse e Sistema de Poderes: Como a Absorção Funciona
        </h2>
        <p>
          O que torna Re:Monster único entre os isekais é o <strong>sistema de progressão por consumo</strong>. Rou não ganha pontos de experiência por matar — ele ganha habilidades literalmente comendo o que derrota. O sistema tem regras claras: habilidades mais fortes requerem consumir criaturas mais poderosas, e a absorção é proporcional à quantidade ingerida. Isso cria uma progressão orgânica onde cada batalha é também uma decisão estratégica: vale a pena consumir esta criatura? O que exatamente vou absorver?
        </p>
        <p>
          Na prática, essa mecânica resulta numa narrativa de crescimento acelerado — Rou começa como o goblin mais fraco de sua caverna e em poucos meses (internamente à história) lidera uma força de elite. O ritmo é deliberadamente veloz, quase como uma progressão de power fantasy, mas com um elemento de gestão de recursos (o que comer, quando comer) que adiciona profundidade estratégica.
        </p>

        <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
          {[
            {
              titulo: "⚔️ Habilidades por Absorção",
              desc: "Cada criatura consumida transfere uma fração de suas habilidades. Quanto mais incomum ou poderosa a criatura, maior o ganho. Consumir completamente (com ossos, sangue e órgãos) maximiza a absorção.",
              exemplos: ["Lobo → aumento de velocidade e olfato", "Goblin mago → resistência mágica básica", "Ogre → força física e resistência", "Criaturas divinas → habilidades únicas raras"]
            },
            {
              titulo: "🧠 Vantagem do Reencarnado",
              desc: "Rou mantém a memória e inteligência de Tomokui — décadas de experiência humana num corpo de goblin. Isso lhe dá vantagem estratégica brutal sobre criaturas que operam por instinto.",
              exemplos: ["Planejamento tático avançado", "Liderança e gestão de grupo", "Conhecimento de plantas medicinais e venenos", "Uso estratégico do terreno em combate"]
            },
          ].map(({ titulo, desc, exemplos }) => (
            <div key={titulo} className="bg-card rounded-xl border border-otaku/20 p-4">
              <h3 className="font-bold text-sm text-otaku mb-1">{titulo}</h3>
              <p className="text-xs text-muted-foreground mb-2">{desc}</p>
              <ul className="space-y-0.5">
                {exemplos.map((e) => <li key={e} className="text-xs text-muted-foreground">• {e}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          Personagens Principais
        </h2>

        <div className="not-prose my-6 space-y-3">
          {[
            {
              nome: "🟢 Rou (Tomokui Kanata)",
              papel: "Protagonista",
              desc: "Goblin reencarnado com memórias e habilidade de absorção de poder. Metodicamente transforma sua tribo numa força de elite. Frio e calculista na batalha, mas com genuíno senso de proteção aos aliados. Evolui de goblin → hobgoblin → uma série de formas cada vez mais poderosas.",
              habilidade: "Absorção total por consumo — acumula centenas de habilidades ao longo da história"
            },
            {
              nome: "🔴 Mi (Mi-chan)",
              papel: "Companheira e curandeira",
              desc: "Uma das primeiras goblins que Rou encontra. Tem afinidade natural com magia de cura e plantas. Representa o lado mais humano do grupo — sua compaixão contrasta com a frieza estratégica de Rou nos momentos de decisão difícil.",
              habilidade: "Magia de cura avançada, conhecimento de ervas medicinais"
            },
            {
              nome: "🔵 Gobu Gobu (Gobukichi)",
              papel: "Braço direito guerreiro",
              desc: "O guerreiro mais forte da tribo além de Rou. Leal, determinado e com potencial de evolução impressionante. Evolui de maneira diferente de Rou — focado em força bruta e resistência em vez de acumulação de habilidades.",
              habilidade: "Força física excepcional, resistência sobre-humana para sua espécie"
            },
            {
              nome: "🟡 Hoburou (evolução de Rou)",
              papel: "Forma evoluída — Hobgoblin",
              desc: "A primeira grande evolução de Rou — de goblin para hobgoblin — marca uma virada na série. Fisicamente superior em quase todos os aspectos a um goblin comum, e com acesso ampliado às habilidades absorvidas.",
              habilidade: "Todas as habilidades goblin + capacidade aumentada de absorção"
            },
          ].map(({ nome, papel, desc, habilidade }) => (
            <div key={nome} className="bg-card rounded-xl border border-otaku/20 p-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-sm text-otaku">{nome}</h3>
                <span className="text-xs bg-secondary px-2 py-0.5 rounded-full shrink-0 ml-2">{papel}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-1">{desc}</p>
              <p className="text-xs"><span className="font-bold text-otaku">Habilidade: </span><span className="text-muted-foreground">{habilidade}</span></p>
            </div>
          ))}
        </div>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-otaku" />
          O Anime de 2024: O que Funciona e O que Decepciona
        </h2>
        <p>
          A adaptação anime de Re:Monster pela <strong>Doga Kobo</strong> — estúdio conhecido por obras slice-of-life como Gekkan Shoujo Nozaki-kun — foi uma das apostas mais discutidas da temporada de primavera 2024. O resultado dividiu a comunidade de forma clara, com pontos positivos e negativos bem definidos.
        </p>

        <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
          {[
            {
              lado: "✅ O que o anime acerta",
              pontos: [
                "Design de personagens fiel ao mangá e expressivo",
                "Trilha sonora que captura o tom dark fantasy",
                "Ritmo ágil — cobre bastante material em 12 episódios",
                "Cenas de combate com boa coreografia nos momentos chave",
                "Adaptação fiel dos arcos iniciais da light novel",
                "Voice acting de Yuuichi Nakamura como Rou é sólido",
              ]
            },
            {
              lado: "⚠️ Pontos de atenção",
              pontos: [
                "Qualidade de animação irregular — picos e vales visíveis entre episódios",
                "Conteúdo adulto da web novel atenuado para o formato TV",
                "Compressão de arcos narrativos — alguns eventos importantes passam rápido",
                "Parte do público achou o ritmo rápido demais para se aprofundar",
                "Encerra em ponto que deixa a história em aberto sem confirmação de T2",
                "Nota 6.7/10 no MAL — abaixo do potencial do material original",
              ]
            }
          ].map(({ lado, pontos }) => (
            <div key={lado} className="bg-card rounded-xl border border-otaku/20 p-4">
              <h3 className="font-bold text-sm mb-2">{lado}</h3>
              <ul className="space-y-1">
                {pontos.map((p) => <li key={p} className="text-xs text-muted-foreground">• {p}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-otaku" />
          Onde Re:Monster se Encaixa no Universo Isekai
        </h2>
        <p>
          Re:Monster ocupa uma posição específica no espectro isekai: é <strong>dark fantasy com power fantasy moderado</strong>. Não é tão brutal e filosófico quanto Goblin Slayer (onde goblins são os vilões), mas também não é o isekai levinho de protagonista invencível. Rou enfrenta desafios reais, sofre derrotas parciais e tem que construir sua força ao longo do tempo com estratégia genuína.
        </p>
        <p>
          A comparação mais frequente é com <strong>Tensei Shitara Slime Datta Ken (TenSura)</strong> — ambos têm protagonistas reencarnados como criaturas "fracas" que absorvem poderes de inimigos e constroem uma comunidade do zero. A diferença de tom é substancial: TenSura é mais leve e diplomaticamente otimista; Re:Monster é mais cru, tático e não evita mostrar as consequências violentas de viver numa hierarquia de predadores.
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4">Obra</th>
                <th className="text-left py-3 px-4">Tom</th>
                <th className="text-left py-3 px-4">Sistema de Poder</th>
                <th className="text-left py-3 px-4">Nota MAL</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Re:Monster", "Dark fantasy / tático", "Absorção por consumo", "6.7 (anime) / 7.8 (mangá)"],
                ["TenSura", "Levemente otimista", "Absorção + nomeação", "8.1"],
                ["Goblin Slayer", "Sombrio / violento", "Tático sem sistema", "7.6"],
                ["Overlord", "Dark comedy / sinistro", "MMO com magias", "8.0"],
                ["Mushoku Tensei", "Drama maduro", "Estudo e prática", "8.4"],
              ].map(([obra, tom, sistema, nota]) => (
                <tr key={obra as string} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-otaku text-xs">{obra}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{tom}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{sistema}</td>
                  <td className="py-3 px-4 text-xs">{nota}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-otaku" />
          Guia de Entrada: Anime, Mangá ou Light Novel?
        </h2>
        <p>
          A escolha da mídia de entrada faz diferença em Re:Monster. Cada formato tem características próprias que afetam a experiência:
        </p>

        <div className="not-prose my-6 space-y-3">
          {[
            {
              opcao: "📺 Anime (Crunchyroll, 12 eps) — Recomendado para iniciantes",
              desc: "A entrada mais fácil. 12 episódios cobrem os primeiros arcos com ritmo ágil. Ideal para quem quer testar a premissa antes de se comprometer com o mangá ou a light novel. Disponível com legendas em português. Aviso: encerra em ponto de cliffhanger sem T2 confirmada.",
              veredicto: "✅ Melhor porta de entrada — rápido e acessível"
            },
            {
              opcao: "📕 Mangá — Recomendado para quem quer mais profundidade",
              desc: "O mangá vai além do anime em conteúdo e tem arte mais detalhada nos combates. Sem edição brasileira oficial confirmada — acesso via plataformas como MangaDex (scanlations em inglês ou português). Ainda em andamento no Japão.",
              veredicto: "✅ Melhor para quem quer continuar após o anime"
            },
            {
              opcao: "📖 Light Novel — Para os fãs mais dedicados",
              desc: "A obra mais completa — com detalhes de worldbuilding, pensamentos de Rou e arcos que o anime e o mangá comprimiram ou omitiram. Disponível em japonês e em inglês (J-Novel Club). Sem tradução oficial em português.",
              veredicto: "⚠️ Requer inglês — mas é a experiência mais rica"
            },
          ].map(({ opcao, desc, veredicto }) => (
            <div key={opcao} className="bg-card rounded-xl border border-otaku/20 p-4">
              <h3 className="font-bold text-sm text-otaku mb-1">{opcao}</h3>
              <p className="text-xs text-muted-foreground mb-2">{desc}</p>
              <p className="text-xs font-bold">{veredicto}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-otaku" />
          Temporada 2: Haverá Continuação?
        </h2>
        <p>
          A pergunta mais frequente da comunidade após o final do anime em junho de 2024: <strong>vai ter Temporada 2?</strong> A resposta honesta é que, até maio de 2026, nenhum anúncio foi feito. Os sinais são mistos: a nota no MyAnimeList ficou abaixo do esperado (6.7), mas as vendas de Blu-ray e o interesse na light novel física cresceram após o anime.
        </p>
        <p>
          O padrão do mercado sugere que animes com vendas de Blu-ray abaixo de 2.000 cópias por volume raramente ganham segunda temporada sem outro fator (como um grande salto nas vendas da light novel original). Re:Monster tem material vastíssimo para cobrir — os arcos posteriores são significativamente mais épicos em escala do que os primeiros 12 episódios. Se houver T2, os fãs da light novel prometem que o salto de qualidade narrativa será expressivo.
        </p>

        <div className="not-prose my-6 bg-card rounded-xl border border-otaku/30 p-5">
          <h3 className="font-bold text-otaku mb-3">📅 Status atual de Re:Monster (maio 2026)</h3>
          <div className="space-y-2">
            {[
              { item: "Anime T1", status: "✅ Concluída (2024, Crunchyroll)" },
              { item: "Anime T2", status: "⏳ Sem anúncio oficial" },
              { item: "Mangá", status: "📖 Em andamento (Monthly Comic Alive, Japão)" },
              { item: "Light Novel física", status: "📚 13 volumes — status de novos volumes a confirmar" },
              { item: "Edição BR (mangá/LN)", status: "❌ Sem licenciamento confirmado para o Brasil" },
            ].map(({ item, status }) => (
              <div key={item} className="flex justify-between items-center border-b border-border pb-1 last:border-0 last:pb-0">
                <span className="text-xs font-bold">{item}</span>
                <span className="text-xs text-muted-foreground">{status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você já assistiu Re:Monster? 🐉</h3>
          <p className="text-muted-foreground">Conta nos comentários o que achou do anime e se prefere o mangá ou a light novel! 👇</p>
        </div>

        <EditorialTake category="otaku" title="Análise do Marcos: Re:Monster é o isekai que o anime não fez jus — mas o mangá compensa">
          <p>
            Re:Monster estreou na temporada de primavera de 2024 pela Doga Kobo com nota de partida 6.7 no MyAnimeList — abaixo do potencial, mas não uma catástrofe. O problema central foi o ritmo: a web novel de Kanekiru Kogitsune tem detalhamento psicológico de Rou que o anime simplificou demais para caber em 12 episódios. O que no texto é uma progressão tática e introspectiva, na tela ficou como "goblin bate, goblin come, goblin fica mais forte" — correto, mas sem a camada que faz a light novel envolvente.
          </p>
          <p>
            Para quem assistiu o anime e ficou curioso: <strong>o mangá é a próxima parada certa</strong>. A arte de Kobayakawa dá peso visual às batalhas que o anime não conseguiu. Os arcos seguintes ao final do anime — especialmente a expansão do reino goblin e os primeiros confrontos com facções humanas organizadas — são o material mais forte da franquia. Sem T2 confirmada até maio de 2026, o mangá em inglês (scanlations) é a única forma de continuar a história. Vale muito.
          </p>
        </EditorialTake>
        
      </div>

      <ArticleSources category="otaku"
        sources={[
          {
            title: "Re:Monster — Syosetu (light novel web original)",
            url: "https://ncode.syosetu.com/n6GreMonster/",
            publisher: "Shōsetsuka ni Narō",
            accessedAt: "Maio 2026"
          },
          {
            title: "Re:Monster — MyAnimeList (anime e mangá)",
            url: "https://myanimelist.net/anime/25777/Re_Monster",
            publisher: "MyAnimeList",
            accessedAt: "Maio 2026"
          },
          {
            title: "Re:Monster Anime — Crunchyroll",
            url: "https://www.crunchyroll.com/series/G79H23VD4/remonster",
            publisher: "Crunchyroll",
            accessedAt: "Maio 2026"
          },
          {
            title: "Re:Monster — Manga (Monthly Comic Alive / Media Factory)",
            url: "https://alive.takeshobo.co.jp/manga/remonster_m/",
            publisher: "Media Factory / Monthly Comic Alive",
            accessedAt: "Maio 2026"
          },
          {
            title: "Re:Monster Light Novel (inglês) — J-Novel Club",
            url: "https://j-novel.club/series/re-monster",
            publisher: "J-Novel Club",
            accessedAt: "Maio 2026"
          },
          {
            title: "Anime News Network — Re:Monster review e cobertura",
            url: "https://www.animenewsnetwork.com/encyclopedia/anime.php?id=26157",
            publisher: "Anime News Network",
            accessedAt: "Maio 2026"
          },
        ]}
      />

      <RelatedPosts currentSlug="re-monster-anime-manga-guia-2026" />
      <CommentSection postId="re-monster-anime-manga-guia-2026" postTitle="Re:Monster: Guia Completo do Anime e Mangá — O Goblin que Absorve Poderes e Conquista Mundos" />
    </article>
  );
};

export default ReMonster2026;

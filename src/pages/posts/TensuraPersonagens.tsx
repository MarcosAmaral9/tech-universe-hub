import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Zap, Shield, Crown, Globe, Star, Users } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/tensura-personagens.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const TensuraPersonagens = () => {
  useEffect(() => {
    trackArticleRead(
      "tensura-personagens-rimuru-demon-lords",
      "TenSura: Personagens, os 10 Grandes Demon Lords e o Octagram",
      "otaku"
    );
  }, []);

  const mainChars = [
    {
      name: "Rimuru Tempest",
      role: "Protagonista / Demon Lord",
      color: "border-blue-500/30 bg-blue-500/5",
      va: "Miho Okasaki (JP) / Brittney Karbowski (EN)",
      desc: "Satoru Mikami, salaryman de 37 anos, reencarnado como gosma azul. Sua habilidade Predador (evoluída para Glutoneria) permite absorver e copiar qualquer ser. Funda a Federação Jura-Tempest com base em coexistência, e após os eventos da T2 evolui para True Demon Lord — com nome e poder reconhecidos pelo conselho. É o único Demon Lord que chegou ao poder por empatia, não por terror.",
    },
    {
      name: "Benimaru",
      role: "General em Chefe de Tempest",
      color: "border-red-500/30 bg-red-500/5",
      va: "Makoto Furukawa (JP)",
      desc: "Filho do chefe dos Ogres, evoluiu para Kijin após receber nome de Rimuru. É o guerreiro mais poderoso de Tempest depois do próprio Rimuru. Especializado em técnicas de fogo e espada — sua habilidade 'Black Flame' combina fogo e trevas. Calmo, leal e estratégico.",
    },
    {
      name: "Shion",
      role: "Secretária / Kijin",
      color: "border-purple-500/30 bg-purple-500/5",
      va: "Hina Yomiya (JP)",
      desc: "Ogre branca evoluída para Kijin. Lealdade absoluta a Rimuru. Culinária lendariamente perigosa (venenosa para qualquer um que não seja ela). Possui a habilidade de copiar qualquer técnica que observa. Sua morte e ressurreição na T2 é um dos marcos emocionais da série.",
    },
    {
      name: "Shuna",
      role: "Princesa / Sacerdotisa",
      color: "border-amber-500/30 bg-amber-500/5",
      va: "Rina Hidaka (JP)",
      desc: "Irmã de Benimaru. Especialista em análise e cópia de magias — decifrou runas de civilizações antigas. Responsável pela gestão têxtil e administrativa de Tempest. Perspicaz e discreta: frequentemente sabe mais do que deixa transparecer.",
    },
    {
      name: "Diablo",
      role: "Primordial Demon / Secretário",
      color: "border-gray-700/30 bg-gray-800/5",
      va: "Takahiro Sakurai (JP)",
      desc: "Um dos sete Primordial Demons — os demônios mais antigos e poderosos da criação. Convocado por Rimuru após sua evolução para Demon Lord. Extraordinariamente leal, eficiente e perturbadoramente obcecado com Rimuru. Atua como enviado diplomático, famoso por resolver missões de formas radicais.",
    },
    {
      name: "Veldora Tempest",
      role: "True Dragon / Irmão adotivo",
      color: "border-cyan-500/30 bg-cyan-500/5",
      va: "Toshiyuki Morikawa (JP)",
      desc: "True Dragon aprisionado por 300 anos pela heroína Chloe O'Bell. Absorvido por Rimuru na T1 para analisar o selo, é libertado na T2. Adota forma humana em Tempest e se torna cidadão comum — com fraqueza confessada por mangás. Apesar do comportamento leviano, é um dos seres mais poderosos do mundo. Tio de Milim Nava.",
    },
    {
      name: "Milim Nava",
      role: "Dragon Nova / 2ª do Octagram",
      color: "border-pink-500/30 bg-pink-500/5",
      va: "Rina Satō (JP)",
      desc: "Uma das Demon Lords mais antigas — filha de Veldanava, o True Dragon primordial e criador do mundo. Isso a torna uma Dragon Nova: herdeira direta do poder dos True Dragons. Aparentemente frívola e infantil, esconde poder devastador. Chama Rimuru de 'Best Friend' com toda seriedade.",
    },
    {
      name: "Ranga",
      role: "Dire Wolf / Companheiro",
      color: "border-slate-500/30 bg-slate-500/5",
      va: "Chikahiro Kobayashi (JP)",
      desc: "Filho do chefe dos Dire Wolves — um dos primeiros seres a receber nome de Rimuru. Pode se transformar em uma montaria colossal capaz de voar e gerar tempestades. É o guardião pessoal de Rimuru nas viagens e um símbolo da transformação de Tempest: de aldeia de goblins a nação poderosa.",
    },
  ];

  const octagramMembers = [
    {
      seat: "1º", name: "Guy Crimson", title: "Rouge — Primordial Escarlate",
      color: "border-red-500/40 bg-red-500/5",
      desc: "O Demon Lord mais antigo, fundador do conselho. Primordial Demon de vermelho — o primeiro dos sete primordiais a existir. Rege o Continente de Gelo. Possui poder absoluto de frio e fogo simultâneos. Foi ele quem criou o conselho há dois mil anos.",
    },
    {
      seat: "2º", name: "Milim Nava", title: "Tyrant of Destruction — A Destruidora",
      color: "border-pink-500/40 bg-pink-500/5",
      desc: "Dragon Nova, filha de Veldanava. Uma das membros originárias do conselho junto com Guy e Ramiris. Seu poder 'Megiddo' pode destruir exércitos inteiros. Chega ao Octagram na posição de 2ª após os eventos da T2.",
    },
    {
      seat: "3º", name: "Rimuru Tempest", title: "Chaos Creator — O Criador do Caos",
      color: "border-blue-500/40 bg-blue-500/5",
      desc: "O mais novo membro do Octagram, ingressando após derrotar Clayman na Walpurgis da T2. Único Demon Lord com origem humana. Seu título 'Rising Star' (Estrela Nascente) na versão original reflete sua ascensão meteórica. Recebe o território da Grande Floresta de Jura oficialmente.",
    },
    {
      seat: "4º", name: "Leon Cromwell", title: "Platinum Devil — O Diabo Platinado",
      color: "border-yellow-300/40 bg-yellow-300/5",
      desc: "Ex-humano como Rimuru — foi um herói convocado que não retornou ao seu mundo. Governa El Dorado, uma nação isolada no oceano. Motivações enigmáticas: suas ações ao longo da série sugerem que ele busca algo muito específico, mas sua agenda permanece secreta por muito tempo.",
    },
    {
      seat: "5º", name: "Luminous Valentine", title: "Lustrous Light — Primordial dos Vampiros",
      color: "border-white/40 bg-white/5",
      desc: "Progenitora Vampira e Demon Lord da Luz. Governa o Continente Ocidental a partir da Santa Igreja — disfarçada como figura religiosa. É a única Demon Lord que opera dentro de uma instituição humana. Sua verdadeira identidade é revelada dramaticamente na Walpurgis da T2.",
    },
    {
      seat: "6º", name: "Dagruel", title: "Giant of Steel — O Titã de Aço",
      color: "border-stone-500/40 bg-stone-500/5",
      desc: "Titã colossal, filho do True God Dino. Governa os grandes desertos do Continente Mágico com sua família. É um dos membros mais poderosos em termos de força bruta. Seus filhos também são figuras de poder no conselho.",
    },
    {
      seat: "7º", name: "Dino", title: "The Fallen — Anjo Caído",
      color: "border-violet-500/40 bg-violet-500/5",
      desc: "Anjo caído, ex-subordinado de Veldanava — o deus criador do mundo. É notoriamente preguiçoso: faz apenas o mínimo necessário para manter seu título. Apesar da aparência desleixada, possui poder extraordinário latente. Seus laços com o passado divino do mundo são centrais para a lore mais profunda da série.",
    },
    {
      seat: "8º", name: "Ramiris", title: "Ruler of Spirits — Rainha das Fadas",
      color: "border-green-400/40 bg-green-400/5",
      desc: "A menor Demon Lord fisicamente — tem aparência de uma fada de cerca de 10 centímetros. Uma das membros fundadoras originais do conselho, junto com Guy e Milim, há milênios. Apesar do tamanho, comanda o Labirinto de Tempest (dungeon gerenciada com Rimuru) e controla espíritos elementais de alto nível.",
    },
  ];

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" portalPath="/otaku/tensura" portalLabel="Painel TenSura" />
      <header className="mb-8">
        <CategoryBadge category="otaku" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          TenSura: Personagens, os 10 Grandes Demon Lords e o Nascimento do Octagram
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />21 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />11 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchpriority="high"
          src={heroImg}
          alt="Personagens de TenSura — Rimuru, Milim e aliados"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          <strong>Tensei Shitara Slime Datta Ken</strong> é uma série com um elenco gigantesco — e cada personagem carrega história própria. De goblins evoluídos a demônios primordiais com milênios de existência, o universo de Tempest é construído sobre relações, poder e política. Aqui você conhece os principais habitantes de Tempest, os Dez Grandes Demon Lords e a história de como essa organização se transformou no lendário <strong>Octagram</strong>.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Crown className="h-7 w-7 text-otaku" />
          Os Principais Habitantes de Tempest
        </h2>
        <p>
          A Federação Jura-Tempest começou como uma pequena aldeia de goblins na Grande Floresta de Jura. O que a transformou em uma nação reconhecida pelos maiores poderes do mundo foi a qualidade das pessoas que Rimuru atraiu e nomeou ao longo do caminho. Cada habitante de Tempest que recebe um nome de Rimuru passa por uma evolução — física, mágica e moral. O elenco abaixo representa os personagens centrais que aparecem nas três primeiras temporadas do anime e na light novel de Fuse.
        </p>

        <div className="not-prose grid gap-4 my-4">
          {mainChars.map((c) => (
            <div key={c.name} className={`rounded-xl border p-4 ${c.color}`}>
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <h3 className="font-display font-bold text-base">{c.name}</h3>
                <span className="text-xs bg-otaku/20 text-otaku px-2 py-0.5 rounded-full font-medium">{c.role}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">🎙️ {c.va}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-otaku" />
          O Sistema de Poderes: Nomes, Habilidades Únicas e Evolução
        </h2>
        <p>
          O worldbuilding de TenSura gira em torno de dois conceitos centrais: <strong>Nomeação</strong> e <strong>Habilidades Únicas</strong>. Quando um ser poderoso atribui seu nome a um subordinado, o nomeado absorve parte do poder do nomeante e evolui — Goblin vira Hobgoblin, Ogre vira Kijin. O processo drena energia do nomeante, o que explica por que Rimuru dorme dias inteiros após nomear dezenas de seres de uma vez.
        </p>
        <p>
          As <strong>Habilidades Únicas</strong> (Unique Skills) são dons raríssimos concedidos no nascimento ou adquiridos em condições especiais. Rimuru começa com <em>Predador</em> e <em>Grande Sábio</em>. Ao evoluir para Demon Lord, ambas crescem drasticamente:
        </p>
        <div className="not-prose overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-bold">Antes</th>
                <th className="text-left py-2 pr-4 font-bold">→ Evoluída</th>
                <th className="text-left py-2 text-muted-foreground font-normal text-xs">Momento</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Predator (Predador)", "Gluttony (Glutoneria)", "T1–T2, batalha do Orc Lord"],
                ["Great Sage (Grande Sábio)", "Raphael, Lord of Wisdom", "T2, evolução para Demon Lord"],
                ["Merciless (Implacável)", "Mercy of Demon Lord (Graça do Rei)", "T2, após ressurreição dos súditos"],
              ].map(([a, b, w]) => (
                <tr key={a} className="border-b border-border/50">
                  <td className="py-2 pr-4 text-otaku font-medium">{a}</td>
                  <td className="py-2 pr-4">{b}</td>
                  <td className="py-2 text-muted-foreground text-xs">{w}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          A progressão de Rimuru não é linear nem garantida. Cada evolução exige uma condição específica — a transição para True Demon Lord, por exemplo, só foi possível após Rimuru mobilizar energia espiritual suficiente através da morte e ressurreição de seus súditos. A série é cuidadosa em estabelecer que poder não é dado, mas conquistado com consequências reais. Esse sistema diferencia TenSura de isekais onde o protagonista simplesmente "já nasce forte" — Rimuru acumula poder gradualmente, e cada etapa tem peso narrativo.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-otaku" />
          Do Conselho Original aos 10 Grandes Demon Lords
        </h2>
        <p>
          A organização que chamamos de "Dez Grandes Demon Lords" tem uma história longa e acidentada. Ela foi <strong>fundada há aproximadamente dois mil anos</strong> por <strong>Guy Crimson</strong> — o Demon Lord mais antigo — como instrumento político para um propósito específico. Originalmente contava com apenas três membros: Guy, <strong>Milim Nava</strong> e <strong>Ramiris</strong>.
        </p>
        <p>
          Ao longo dos séculos, o conselho cresceu à medida que novos Demon Lords surgiam ou eram reconhecidos. A última grande mudança antes dos eventos do anime foi a <strong>última Grande Guerra de Tenma</strong>, cinco séculos antes do início da história. Após esse conflito devastador, o número de membros foi limitado a dez — e a humanidade começou a chamá-los informalmente de "Dez Grandes Demon Lords". O próprio conselho nunca havia se dado esse nome oficialmente.
        </p>
        <p>
          É importante entender que o conselho não era um governo unificado. Cada Demon Lord mantinha seu próprio território, suas próprias leis e sua própria agenda. O conselho servia como mecanismo de contenção — um fórum onde os seres mais poderosos do mundo podiam resolver disputas sem destruir continentes inteiros no processo. A Walpurgis, a grande assembleia periódica dos Demon Lords, era o único momento em que todos precisavam estar no mesmo lugar ao mesmo tempo.
        </p>
        <div className="not-prose bg-otaku/10 border border-otaku/30 rounded-xl p-4 my-4">
          <p className="font-bold text-otaku mb-2 text-sm">📜 Linha do Tempo do Conselho</p>
          <div className="space-y-2 text-sm">
            {[
              ["~2.000 anos atrás", "Guy Crimson funda o conselho (3 membros: Guy, Milim, Ramiris)"],
              ["~500 anos atrás", "Última Grande Guerra de Tenma — limite de 10 membros adotado"],
              ["~500 anos atrás", "Humanos passam a chamá-los 'Dez Grandes Demon Lords'"],
              ["Antes da T1", "Clayman, Carrion, Frey, Leon, Luminous e Dagruel compõem o conselho"],
              ["T2 — Walpurgis", "Clayman derrotado, Carrion e Frey renunciam, Rimuru ingressa"],
              ["T2 — Após Walpurgis", "Rimuru propõe novo nome: 'Octagram' (8 membros)"],
              ["T3 em diante", "Octagram é o nome oficial do conselho"],
            ].map(([d, e]) => (
              <div key={d} className="flex gap-3">
                <span className="text-otaku font-bold shrink-0 w-36 text-xs">{d}</span>
                <span className="text-muted-foreground text-xs">{e}</span>
              </div>
            ))}
          </div>
        </div>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          O Nascimento do Octagram — Como os 10 Viraram 8
        </h2>
        <p>
          Após os eventos da <strong>Walpurgis</strong> — a grande assembleia dos Demon Lords no final da Temporada 2 — o conselho passou por uma reformulação inédita. <strong>Clayman</strong> (o "Marionette Master") foi derrotado e eliminado por Rimuru. <strong>Carrion</strong> (o "Beast Master") e <strong>Frey</strong> (a "Sky Queen") voluntariamente renunciaram aos seus títulos ao reconhecer que eram fracos demais para permanecer no conselho — ambos passaram a trabalhar sob Milim. Com três assentos perdidos e um novo membro (Rimuru) ingressando, o número caiu de dez para oito.
        </p>
        <p>
          Rimuru observou em voz alta que, com essa mudança, eles não podiam mais se chamar "Dez Grandes". Isso causou desconforto geral — o conselho havia tentado decidir um nome próprio por meses sem sucesso em Walpurgis anteriores, pois o nome "Dez Grandes Demon Lords" era uma invenção humana, não deles mesmos. <strong>Veldora</strong> sugeriu que Rimuru, sendo o responsável pelas mudanças, escolhesse o nome. Rimuru relutou, mas Guy Crimson o intimidou a aceitar a responsabilidade.
        </p>
        <p>
          Olhando para o céu estrelado acima do local da reunião, Rimuru sugeriu: <strong>"Octagram"</strong> — os "Oito Reis Estrela" (八星魔王, <em>hassei maō</em>). O nome invoca a ideia de um símbolo mágico de oito pontas, semelhante ao famoso pentagram, mas representando os oito Demon Lords. A sugestão agradou a todos e foi ratificada ali mesmo. O conselho entrou em uma nova era.
        </p>
        <div className="not-prose bg-card border border-border rounded-xl p-4 my-4">
          <p className="font-bold mb-2 text-sm">💡 Por que "Octagram"?</p>
          <p className="text-sm text-muted-foreground">O prefixo <em>octa-</em> significa "oito" (como em outubro, que era o oitavo mês do calendário romano original). O sufixo <em>-gram</em> vem do grego <em>gramma</em>, que aparece em palavras como "pentagram" — símbolos mágicos de múltiplos pontos. Assim, "Octagram" é literalmente uma estrela mágica de oito pontas, invocando tanto o número de membros quanto a natureza oculta e poderosa dos Demon Lords.</p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-otaku" />
          Os 8 Membros do Octagram — Títulos e Territórios
        </h2>

        <div className="not-prose grid gap-3 my-4">
          {octagramMembers.map((m) => (
            <div key={m.name} className={`rounded-xl border p-4 ${m.color}`}>
              <div className="flex flex-wrap items-start gap-2 mb-2">
                <span className="text-xs font-bold bg-otaku/20 text-otaku px-2 py-0.5 rounded-full">{m.seat} Assento</span>
                <h3 className="font-display font-bold text-base">{m.name}</h3>
                <span className="text-xs text-muted-foreground italic">"{m.title}"</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="not-prose bg-otaku/10 border border-otaku/30 rounded-xl p-4 my-6">
          <p className="font-bold text-otaku mb-2 text-sm">⚠️ Nota sobre spoilers</p>
          <p className="text-sm text-muted-foreground">
            A composição exata do Octagram, os eventos completos da Walpurgis e as revelações sobre cada Demon Lord evoluem bastante ao longo das Temporadas 2 e 3. Esta seção apresenta apenas o que é estabelecido nos arcos já exibidos no anime — sem revelar os desenvolvimentos da T4 e light novel.
          </p>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-otaku" />
          Os True Dragons — Acima dos Demon Lords
        </h2>
        <p>
          Mesmo os membros mais poderosos do Octagram reconhecem que os <strong>True Dragons</strong> estão em uma categoria separada. São seres primordiais que existem como forças da natureza — cada um governa um aspecto fundamental do mundo.
        </p>
        <div className="not-prose grid sm:grid-cols-2 gap-3 my-4">
          {[
            ["Veldanava", "True Dragon da Criação — pai de Milim, criador do mundo, desaparecido misteriosamente"],
            ["Veldora Tempest", "Storm Dragon — aprisionado 300 anos, libertado na T2, agora cidadão de Tempest"],
            ["Velgrynd", "Scarlet Dragon — irmã de Veldora, ligada ao Imperador de Farmas por pacto antigo"],
            ["Velzard", "White Dragon — irmã de Veldora, parceira de longa data de Guy Crimson"],
          ].map(([n, d]) => (
            <div key={n} className="bg-card border border-border rounded-lg p-3 text-sm">
              <p className="font-bold text-foreground">{n}</p>
              <p className="text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <p>
          A série de True Dragons conecta diretamente com a lore mais profunda de TenSura: Veldanava criou o mundo e desapareceu — um mistério que a série só começa a revelar na T3 e nos volumes finais da light novel. O poder de Rimuru, por carregar Veldora dentro de si durante a maior parte da T1, sempre foi ampliado por esse vínculo — mesmo que de forma indireta.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-otaku" />
          Aliados Externos e Personagens Recorrentes
        </h2>
        <p>
          Além dos habitantes de Tempest e dos membros do Octagram, TenSura tem um elenco extenso de personagens externos que se tornam aliados, rivais ou figuras ambíguas ao longo das temporadas. Alguns dos mais relevantes para quem assiste o anime:
        </p>
        <p>
          <strong>Gazel Dwargo</strong> é o Rei Anão e um dos primeiros líderes humanos a reconhecer Tempest como nação legítima. Sua relação com Rimuru passa de desconfiança para respeito genuíno — ele é pragmático o suficiente para entender que uma nação de monstros pacífica é um aliado mais valioso do que um inimigo. Gazel representa a corrente reformista dentro da política humana que enxerga os monstros como pares, não como ameaças.
        </p>
        <p>
          <strong>Fuze</strong>, o líder da guilda de aventureiros na cidade de Brumund, é outro personagem que oscila entre a desconfiança institucional e a admiração pessoal por Rimuru. Sua posição na guilda o obriga a manter neutralidade oficial, mas suas ações repetidamente demonstram que ele favorece a coexistência. É através de Fuze que o espectador vê como a comunidade de aventureiros — habituada a matar monstros como atividade profissional — reage à existência de uma nação de monstros civilizada.
        </p>
        <p>
          <strong>Hinata Sakaguchi</strong> é a líder das Cruzadas do Ocidente e uma das antagonistas mais moralmente complexas da série. Ex-discípula da heroína Shizu (a humana que Rimuru absorveu na T1), Hinata não é simplesmente uma vilã — ela tem razões concretas para desconfiar de Demon Lords e para ter Rimuru em sua lista de alvos. O arco que a envolve na T2 é um dos mais tensos da série, exatamente porque ela não está errada em seus princípios, apenas em suas conclusões sobre Rimuru especificamente.
        </p>

        <div className="not-prose bg-card border border-otaku/20 rounded-xl p-5 my-6">
          <h3 className="font-bold text-otaku mb-3 text-sm">📺 Em qual temporada cada personagem aparece?</h3>
          <div className="space-y-1.5">
            {[
              ["Rimuru, Ranga, Gobta, Rigurd", "T1 (desde o episódio 1)"],
              ["Benimaru, Shion, Shuna, Hakurou", "T1 (arco dos Ogres, episódios 7–8)"],
              ["Milim Nava", "T1 (arco dos Dez Grandes, episódios 16–17)"],
              ["Diablo", "T2 Parte 1 (convocado por Rimuru após evolução)"],
              ["Veldora (forma humana)", "T2 Parte 1 (libertado do selo de Rimuru)"],
              ["Octagram completo", "T2 Parte 2 (Walpurgis — episódios finais da T2)"],
              ["Hinata Sakaguchi", "T2 Parte 1 (confronto principal)"],
              ["True Dragons Velgrynd e Velzard", "T3 em diante"],
            ].map(([chars, season]) => (
              <div key={chars} className="flex gap-3 text-xs">
                <span className="font-bold text-otaku shrink-0 w-52">{chars}</span>
                <span className="text-muted-foreground">{season}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#127775;</span>
          Os Personagens da T3 e T4: Expansão do Elenco
        </h2>
        <p>
          A Temporada 3 e a Temporada 4 (Spring 2026) introduzem personagens que aprofundam o lado político e diplomático de Tempest. <strong>Yuuki Kagurazaka</strong>, o antagonista central da T3, representa algo raro em isekais: um humano que conhece profundamente os reais pontos fracos de Rimuru e tem um plano que vai além do poder bruto. Sua relação com a Children's Coalition e sua ideologia sobre raças e poder criam um contraponto ideológico genuíno à abordagem de coexistência de Rimuru.
        </p>
        <p>
          <strong>Chloe O'Bell</strong> — a Heroína — é um dos personagens mais importantes da mitologia de TenSura e uma das figuras mais complexas em termos de timeline. Sua história cruza com Veldora (que ela aprisionou por 300 anos), com Rimuru e com eventos que ocorrem tanto no passado quanto no futuro da série. A T3 começa a revelar as camadas de sua história, e a T4 aprofunda sua conexão com os elementos mais cósmicos do worldbuilding de Fuse.
        </p>
        <p>
          Os <strong>Primordial Demons</strong> — os sete demônios primordiais identificados por cores — são introduzidos progressivamente a partir de Diablo na T2. Cada primordial representa um nível de poder que transcende os Demon Lords convencionais. A T4 deve apresentar mais primordiais além de Diablo e Guy Crimson, expandindo a hierarquia de poder da série para uma escala que o início de TenSura nunca insinuou existir.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#127381;</span>
          Ordem de Assistência para Novos Espectadores
        </h2>
        <p>
          Para quem está descobrindo TenSura em 2026 por causa da T4, a ordem completa de assistência é: <strong>T1</strong> (2018–2019, 24 eps) → <strong>T2 Parte 1</strong> (jan–mar 2021, 12 eps) → <strong>Tensura Nikki</strong> (abr–jun 2021 — opcional, spin-off de slice-of-life) → <strong>T2 Parte 2</strong> (jul–set 2021, 12 eps) → <strong>Filme Scarlet Bond</strong> (nov 2022 — recomendado mas não obrigatório para entender a T3) → <strong>T3</strong> (abr–set 2024, 24 eps) → <strong>T4</strong> (Spring 2026, em exibição).
        </p>
        <p>
          O total de episódios sem os opcionais é de aproximadamente 72 episódios — algo entre 24 e 30 horas de conteúdo. Com os opcionais (Nikki + filme), chega a cerca de 38 horas. Para quem quer ir direto ao essencial antes de acompanhar a T4 ao vivo: as T2 Partes 1 e 2 e a T3 são os arcos que constroem diretamente os conflitos e relações centrais da T4. A T1 é fundamental para entender Rimuru e os personagens de Tempest. O Nikki e o filme são camadas adicionais para quem quer a experiência completa.
        </p>

      <EditorialTake category="otaku" title="Análise do Marcos: o elenco de TenSura é seu maior ativo — e seu maior risco">
        <p>
          Acompanho TenSura desde a T1 e o que mais me impressiona na série de Fuse não é o protagonista — é a capacidade de dar personalidade real a personagens que poderiam facilmente ser decoração. Shion, que começa como 'secretária leal perigosamente má cozinheira', tem um dos arcos de morte e ressurreição mais emocionalmente honestos do anime recente. Diablo, que chegou como fanservice de poder, se tornou um dos personagens mais hiláriamente sinistros e ao mesmo tempo genuínos da série.
        </p>
        <p>
          O risco do elenco grande é que, com a expansão de Tempest em T3 e T4, alguns personagens ficam sem tempo de tela adequado. Benimaru e Shuna aparecem cada vez menos em cenas de destaque conforme novos aliados chegam. É um problema estrutural de séries de construção de reino: o worldbuilding cresce mais rápido do que o desenvolvimento de personagem consegue acompanhar. A light novel de Fuse resolve isso melhor do que o anime — com capítulos de perspectiva de personagens secundários que o anime simplesmente não tem tempo de incluir.
        </p>
      </EditorialTake>

      <ArticleSources
        sources={[
          {
            title: "Tensei Shitara Slime Datta Ken — Light Novel (Micro Magazine)",
            url: "https://www.micromagazine.co.jp/gc/slime/",
            publisher: "Micro Magazine",
            accessedAt: "Março 2026"
          },
          {
            title: "TenSura Anime — site oficial (T1–T3)",
            url: "https://www.ten-sura.com/",
            publisher: "Ten-Sura.com",
            accessedAt: "Março 2026"
          },
          {
            title: "Tensei Shitara Slime Datta Ken — MyAnimeList",
            url: "https://myanimelist.net/anime/37430/Tensei_shitara_Slime_Datta_Ken",
            publisher: "MyAnimeList",
            accessedAt: "Março 2026"
          },
          {
            title: "TenSura — Crunchyroll (todas as temporadas)",
            url: "https://www.crunchyroll.com/series/GR49G9VP6/that-time-i-got-reincarnated-as-a-slime",
            publisher: "Crunchyroll",
            accessedAt: "Março 2026"
          },
          {
            title: "Anime News Network — Tensei Shitara Slime Datta Ken encyclopedia",
            url: "https://www.animenewsnetwork.com/encyclopedia/anime.php?id=21664",
            publisher: "Anime News Network",
            accessedAt: "Março 2026"
          },
          {
            title: "Fuse (autor) — perfil Shōsetsuka ni Narō",
            url: "https://mypage.syosetu.com/186987/",
            publisher: "Shōsetsuka ni Narō",
            accessedAt: "Março 2026"
          },
        ]}
      />

      <RelatedPosts currentSlug="tensura-personagens-rimuru-demon-lords" />
      <CommentSection postId="tensura-personagens-rimuru-demon-lords" category="otaku" />
    </article>
  );
};

export default TensuraPersonagens;

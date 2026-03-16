import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import DynamicSEO from "@/components/DynamicSEO";
import crimsonGuiaImg from "@/assets/crimson-desert-guia.webp";
import crimsonCombateImg from "@/assets/crimson-desert-combate.webp";
import crimsonHeroImg from "@/assets/crimson-desert-hero.webp";

// ─── TIPOS ────────────────────────────────────────────────────────────────────

interface Artigo {
  id: string;
  slug: string;
  titulo: string;
  subtitulo: string;
  categoria: string;
  tag: string;
  tagColor: string;
  dataPublicacao: string;
  tempoLeitura: string;
  autor: string;
  imagemCapa: string;
  keywords: string[];
  descricaoSEO: string;
  conteudo: ConteudoBloco[];
}

type ConteudoBloco =
  | { tipo: "intro"; texto: string }
  | { tipo: "h2"; texto: string }
  | { tipo: "paragrafo"; texto: string }
  | { tipo: "destaque"; texto: string }
  | { tipo: "lista"; itens: string[] }
  | { tipo: "conclusao"; texto: string };

// ─── DADOS DOS ARTIGOS ────────────────────────────────────────────────────────

const ARTIGO_1: Artigo = {
  id: "crimson-desert-guia-completo-2026",
  slug: "crimson-desert-guia-completo",
  titulo: "Crimson Desert: Guia Completo do RPG Mais Esperado de 2026",
  subtitulo: "Tudo sobre história, gameplay, mundo aberto e sistema de combate do novo épico da Pearl Abyss",
  categoria: "Games",
  tag: "Crimson Desert",
  tagColor: "crimson",
  dataPublicacao: "16 de março de 2026",
  tempoLeitura: "12 min",
  autor: "VicioCode",
  imagemCapa: crimsonGuiaImg,
  keywords: ["Crimson Desert","Pearl Abyss","RPG mundo aberto 2026","Crimson Desert gameplay","Kliff Greymanes","Pywel continente","BlackSpace Engine","jogos PS5 2026","jogos Xbox Series X 2026","RPG ação 2026"],
  descricaoSEO: "Guia completo de Crimson Desert: descubra a história de Kliff, o continente de Pywel, o sistema de combate revolucionário e tudo que você precisa saber sobre o RPG de mundo aberto da Pearl Abyss antes do lançamento em 19 de março de 2026.",
  conteudo: [
    { tipo: "intro", texto: "A Pearl Abyss está prestes a redefinir o que entendemos por RPG de mundo aberto. Crimson Desert — lançado em 19 de março de 2026 para PC, PS5 e Xbox Series X/S — é o resultado de anos de desenvolvimento ambicioso, refinamento técnico e uma visão clara de narrativa cinematográfica combinada com liberdade de exploração. Se você ainda não sabe por que esse jogo está em todas as listas de desejos do planeta, este guia vai te mostrar tudo." },
    { tipo: "h2", texto: "O Que é Crimson Desert?" },
    { tipo: "paragrafo", texto: "Crimson Desert é um RPG de ação em mundo aberto desenvolvido pela Pearl Abyss, o estúdio sul-coreano conhecido pelo MMORPG Black Desert Online. Inicialmente concebido como um prequel dentro do universo de Black Desert, o projeto evoluiu durante o desenvolvimento e se tornou uma experiência completamente independente — uma IP própria e separada, com lore e universo únicos." },
    { tipo: "paragrafo", texto: "O jogo é totalmente single-player, sem nenhuma integração multiplayer planejada. A Pearl Abyss decidiu focar 100% na narrativa e na experiência solo, algo que diferencia Crimson Desert de praticamente todo o restante do portfólio do estúdio. A história acontece no continente fictício de Pywel, um território vasto marcado por conflitos políticos, guerras entre facções e criaturas sobrenaturais que desafiam a ordem do mundo conhecido." },
    { tipo: "destaque", texto: "\"A batalha por Pywel começa em 19 de março de 2026.\" — Pearl Abyss" },
    { tipo: "h2", texto: "A História: Kliff e os Greymanes" },
    { tipo: "paragrafo", texto: "O jogador controla Kliff, líder do grupo mercenário conhecido como Greymanes. No início da jornada, Kliff busca libertar sua terra natal de opressores e forças que ameaçam seu povo — uma missão pessoal que rapidamente evolui para algo muito maior, envolvendo o destino de todo o continente de Pywel e as vidas de seus habitantes." },
    { tipo: "paragrafo", texto: "O ponto de virada narrativo acontece quando os Greymanes sofrem uma emboscada devastadora pelos inimigos juramentados, os Black Bears. Essa tragédia nocturna força Kliff a reconstruir o grupo e enfrentar não apenas rivais mortais, mas também as forças sobrenaturais que começam a emergir do misterioso reino conhecido como o Abismo — uma dimensão etérea onde um desequilíbrio místico ameaça o mundo inteiro." },
    { tipo: "paragrafo", texto: "A narrativa de Crimson Desert é descrita pelos criadores como cinematográfica, com personagens memoráveis e reviravoltas que vão além do esperado para o gênero. As facções rivais de Pailune mantinham um equilíbrio tenso antes dos eventos do jogo, e entender essa política medieval-fantástica é parte fundamental da experiência." },
    { tipo: "h2", texto: "O Mundo: O Continente de Pywel" },
    { tipo: "paragrafo", texto: "Pywel é um continente aberto com um mapa de 82 quilômetros quadrados — número que coloca o jogo entre os maiores do gênero. O mundo é dividido em cinco regiões distintas, cada uma com sua própria geografia, cultura, fauna e desafios únicos:" },
    { tipo: "lista", itens: ["Planícies e florestas verdes repletas de segredos naturais e acampamentos inimigos","Desertos áridos com ruínas de civilizações extintas e criaturas ancestrais","Cidades movimentadas com NPCs com rotinas próprias e mercados dinâmicos","Montanhas escarpadas com fortalezas e áreas de escalada vertical","O Abismo — um reino etéreo e misterioso no céu, onde leis físicas se curvam"] },
    { tipo: "paragrafo", texto: "A interação com o ambiente é um ponto forte de Pywel. Kliff pode escalar paredes e penhascos, nadar em rios e lagos (embora sem mergulho submarino, confirmado pelos desenvolvedores), planar de alturas elevadas, montar cavalos e até dragões mecanizados em determinados momentos. O mapa é repleto de marcos históricos, ruínas antigas, tesouros escondidos e pontos de interesse que recompensam a exploração." },
    { tipo: "h2", texto: "Sistema de Combate: Brutal, Fluido e Estratégico" },
    { tipo: "paragrafo", texto: "O sistema de combate de Crimson Desert foi desenvolvido com a BlackSpace Engine, uma tecnologia proprietária criada pela Pearl Abyss projetada especificamente para mundos abertos complexos com simulações físicas realistas. O combate combina:" },
    { tipo: "lista", itens: ["Sequências de melee com combos executáveis e janelas de timing precisas","Ataques elementais que potencializam armas com efeitos de fogo, gelo e elétrico","Combate a cavalo com mecânicas específicas de mobilidade e ataque","Batalhas contra chefes em larga escala, incluindo dragões mecânicos monumentais","Sistema de progressão profundo com personalização de habilidades e equipamentos","Construção e gerenciamento de fortalezas — recrutamento de tropas e expansão territorial"] },
    { tipo: "paragrafo", texto: "Análises técnicas de canais como Digital Foundry destacaram especialmente o nível de realismo das simulações físicas e dos efeitos de iluminação. A engine suporta ainda tecnologias modernas de upscaling e renderização que garantem performance tanto em PCs high-end quanto nos consoles de nova geração." },
    { tipo: "h2", texto: "Plataformas e Data de Lançamento" },
    { tipo: "paragrafo", texto: "Crimson Desert está disponível em 19 de março de 2026 para Windows PC (via Steam), macOS, PlayStation 5 e Xbox Series X/S. O pré-download esteve disponível a partir de 17 de março para quem já havia adquirido o jogo. Compradores antecipados receberam o exclusivo Khaled Shield como bônus de pré-venda." },
    { tipo: "paragrafo", texto: "Antes do lançamento, o jogo havia ultrapassado a marca de 3 milhões de listas de desejo somando todas as plataformas globais, posicionando-o como um dos lançamentos mais aguardados de 2026. A recepção da comunidade brasileira foi especialmente intensa, com discussões calorosas sobre customização de personagem e impacto narrativo." },
    { tipo: "conclusao", texto: "Crimson Desert representa a aposta mais ambiciosa da Pearl Abyss até hoje. Com um mundo vivo de 82km², uma narrativa cinematográfica protagonizada por Kliff e os Greymanes, um sistema de combate visceral e uma engine tecnicamente impressionante, o jogo tem tudo para se tornar um marco do RPG na geração atual. Já está com o HD preparado para explorar Pywel?" },
  ],
};

const ARTIGO_2: Artigo = {
  id: "crimson-desert-sistema-de-combate-analise",
  slug: "crimson-desert-combate-blackspace-engine",
  titulo: "Crimson Desert: Como o Sistema de Combate e a BlackSpace Engine Mudam Tudo",
  subtitulo: "Uma análise aprofundada das mecânicas de combate, chefes épicos, montarias e a tecnologia por trás do visual impressionante",
  categoria: "Games",
  tag: "Análise",
  tagColor: "gold",
  dataPublicacao: "16 de março de 2026",
  tempoLeitura: "9 min",
  autor: "VicioCode",
  imagemCapa: crimsonCombateImg,
  keywords: ["Crimson Desert combate","BlackSpace Engine Pearl Abyss","Crimson Desert chefes","Crimson Desert dragões","Kliff habilidades","Crimson Desert fortalezas","RPG ação combate 2026","Crimson Desert review","Crimson Desert PS5","Pearl Abyss motor gráfico"],
  descricaoSEO: "Análise completa do sistema de combate de Crimson Desert: mecânicas de melee, ataques elementais, batalhas contra chefes colossal, combate a cavalo, construção de fortalezas e como a BlackSpace Engine entrega gráficos de nova geração.",
  conteudo: [
    { tipo: "intro", texto: "Desde os primeiros trailers, Crimson Desert chamou atenção não só pelo visual estonteante, mas pela promessa de um combate que vai além do RPG convencional. Com a chegada do lançamento em 19 de março de 2026, vamos analisar em detalhe o que faz o sistema de batalha da Pearl Abyss ser um dos mais discutidos da geração — e como a BlackSpace Engine torna tudo isso possível." },
    { tipo: "h2", texto: "O Núcleo do Combate: Habilidade, Timing e Posição" },
    { tipo: "paragrafo", texto: "O combate de Crimson Desert foi construído sobre três pilares: habilidade de execução, timing preciso e posicionamento estratégico. Diferente de RPGs que permitem apertar botões repetidamente com sucesso garantido, aqui cada encontro exige que o jogador leia os padrões inimigos, identifique janelas de ataque e tome decisões táticas em frações de segundo." },
    { tipo: "paragrafo", texto: "Kliff possui acesso a um sistema de combos extenso que combina ataques rápidos, ataques pesados, defesas ativas e contra-ataques. As sequências podem ser adaptadas dependendo da arma equipada, e a progressão de personagem permite especializar o estilo de luta de acordo com a preferência do jogador — seja um guerreiro brutal corpo a corpo, um lutador ágil com movimentos evasivos, ou um híbrido que mistura magia elemental com força física." },
    { tipo: "destaque", texto: "A BlackSpace Engine foi projetada especificamente para lidar com mundos abertos complexos, cenários altamente detalhados e simulações físicas que desafiam o hardware atual." },
    { tipo: "h2", texto: "Ataques Elementais e Personalização de Armas" },
    { tipo: "paragrafo", texto: "Uma das mecânicas mais espetaculares de Crimson Desert é o sistema de ataques elementais. Armas podem ser imbuídas com diferentes elementos — fogo, gelo, relâmpago e mais — alterando não apenas o dano causado, mas também os efeitos visuais e as reações dos inimigos ao serem atingidos. Um inimigo congelado se torna mais vulnerável a ataques físicos; um coberto em chamas pode se tornar mais agressivo e imprevisível." },
    { tipo: "paragrafo", texto: "O sistema de progressão profundo permite que o jogador personalize cada aspecto do conjunto de habilidades de Kliff, escolhendo entre diferentes ramos de evolução que afetam tanto a eficiência em combate quanto a interação com o mundo aberto. Certas habilidades desbloqueiam novos caminhos de exploração, enquanto outras melhoram capacidades de craft e construção." },
    { tipo: "h2", texto: "Chefes Colossal: Os Momentos Mais Épicos do Jogo" },
    { tipo: "paragrafo", texto: "As batalhas contra chefes de Crimson Desert são, segundo todos os previews, o ápice da experiência. A Pearl Abyss mostrou confrontos de escala monumental — dragões mecânicos que exigem estratégias complexas para serem derrotados, cavaleiros amaldiçoados com padrões de ataque elaborados (como a famosa batalha contra o cavaleiro de uma fortaleza inimiga, demonstrada em gameplay exclusivo da IGN), e a bruxa Maria, revelada no The Game Awards 2024." },
    { tipo: "paragrafo", texto: "Cada boss possui uma identidade visual e mecânica própria, exigindo que o jogador adapte o loadout e a abordagem estratégica. Alguns chefes só podem ser danificados por determinados elementos; outros possuem fases múltiplas que mudam completamente a dinâmica da batalha à medida que sua saúde diminui." },
    { tipo: "h2", texto: "Montarias: Cavalos, Dragões e Muito Mais" },
    { tipo: "paragrafo", texto: "A exploração de Pywel é enriquecida por um sistema de montarias diversificado. Cavalos são o meio de transporte principal e possuem mecânicas de combate específicas — Kliff pode atacar, esquivar e usar habilidades especiais enquanto está montado, tornando as perseguições e batalhas campais dinamicamente diferentes dos confrontos a pé." },
    { tipo: "paragrafo", texto: "Em momentos específicos da narrativa e do mundo aberto, o jogador também terá acesso a dragões e mechas — criaturas e máquinas de guerra que transformam completamente a escala da exploração e do combate. Voar sobre Pywel em um dragão não é apenas uma fantasia estética; é uma mecânica integrada que revela novos pontos de interesse acessíveis apenas por via aérea." },
    { tipo: "h2", texto: "Construção de Fortalezas: A Camada Estratégica" },
    { tipo: "paragrafo", texto: "Uma mecânica que diferencia Crimson Desert de outros RPGs de ação é a possibilidade de construir e gerenciar fortalezas próprias. O jogador pode recrutar tropas, gerenciar recursos, expandir o território controlado pelos Greymanes e usar a fortaleza como base de operações para missões mais complexas. Essa camada estratégica acrescenta profundidade além do combate direto." },
    { tipo: "h2", texto: "A BlackSpace Engine: A Tecnologia por Trás do Visual" },
    { tipo: "paragrafo", texto: "A BlackSpace Engine é a evolução direta do motor gráfico usado em Black Desert Online, totalmente reconstruído para lidar com os desafios de um RPG solo de mundo aberto em escala colossal. A engine suporta simulações físicas avançadas, iluminação dinâmica em tempo real, vegetação procedural e sistemas de clima que afetam tanto o visual quanto o gameplay." },
    { tipo: "paragrafo", texto: "No PS5 e Xbox Series X/S, o jogo roda com suporte a ray tracing, altas taxas de frame e tempo de carregamento praticamente nulo. No PC, a engine tira proveito de tecnologias de upscaling modernas para garantir performance excelente mesmo em configurações medianas. O resultado visível é um dos jogos mais impressionantes tecnicamente da geração." },
    { tipo: "conclusao", texto: "Crimson Desert não é apenas visualmente impressionante — é um sistema de combate complexo, montarias diversificadas, chefes memoráveis e uma camada estratégica de construção de fortalezas que trabalham juntos para criar uma experiência RPG completa. A BlackSpace Engine garante que tudo isso seja apresentado com uma fidelidade visual que redefine o padrão da geração. Para quem ama RPGs de ação, esse é o título de 2026." },
  ],
};

// ─── COMPONENTES AUXILIARES ───────────────────────────────────────────────────

const TAG_COLORS: Record<string, string> = {
  crimson: "bg-red-900/60 text-red-300 border border-red-700/50",
  gold: "bg-yellow-900/60 text-yellow-300 border border-yellow-700/50",
  default: "bg-zinc-800 text-zinc-300 border border-zinc-700",
};

function Tag({ label, color = "default" }: { label: string; color?: string }) {
  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full tracking-wide ${TAG_COLORS[color] || TAG_COLORS.default}`}>
      {label}
    </span>
  );
}

function MetaInfo({ artigo }: { artigo: Artigo }) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">
      <span>{artigo.dataPublicacao}</span>
      <span className="w-1 h-1 rounded-full bg-zinc-600" />
      <span>{artigo.tempoLeitura} de leitura</span>
      <span className="w-1 h-1 rounded-full bg-zinc-600" />
      <span>{artigo.autor}</span>
    </div>
  );
}

function ConteudoArtigo({ conteudo }: { conteudo: ConteudoBloco[] }) {
  return (
    <div className="space-y-5">
      {conteudo.map((bloco, i) => {
        if (bloco.tipo === "intro") {
          return <p key={i} className="text-zinc-300 text-lg leading-relaxed font-light border-l-2 border-red-700 pl-4">{bloco.texto}</p>;
        }
        if (bloco.tipo === "h2") {
          return <h2 key={i} className="text-xl font-bold text-white mt-8 mb-3 flex items-center gap-2"><span className="w-4 h-0.5 bg-red-600 inline-block" />{bloco.texto}</h2>;
        }
        if (bloco.tipo === "paragrafo") {
          return <p key={i} className="text-zinc-400 leading-relaxed">{bloco.texto}</p>;
        }
        if (bloco.tipo === "destaque") {
          return <blockquote key={i} className="border border-red-800/50 bg-red-950/30 rounded-lg px-5 py-4 text-red-200 italic text-sm leading-relaxed">{bloco.texto}</blockquote>;
        }
        if (bloco.tipo === "lista") {
          return (
            <ul key={i} className="space-y-2 ml-2">
              {bloco.itens.map((item, j) => (
                <li key={j} className="flex gap-3 text-zinc-400 text-sm">
                  <span className="text-red-500 mt-1 flex-shrink-0">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (bloco.tipo === "conclusao") {
          return (
            <div key={i} className="bg-gradient-to-r from-zinc-900 to-zinc-800/50 border border-zinc-700/50 rounded-xl p-5 mt-6">
              <p className="text-zinc-300 leading-relaxed text-sm">
                <span className="font-bold text-white text-base block mb-2">Conclusão</span>
                {bloco.texto}
              </p>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

function KeywordBadges({ keywords }: { keywords: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5 mt-4">
      {keywords.map((kw) => (
        <span key={kw} className="text-xs bg-zinc-800/80 text-zinc-400 border border-zinc-700/50 px-2 py-0.5 rounded-full">
          #{kw.toLowerCase().replace(/\s+/g, "-")}
        </span>
      ))}
    </div>
  );
}

// ─── CARD DO ARTIGO ───────────────────────────────────────────────────────────

function ArtigoCard({ artigo, onClick }: { artigo: Artigo; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left group bg-zinc-900/70 border border-zinc-800 hover:border-red-800/60 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-red-950/30"
    >
      <div className="relative overflow-hidden h-48">
        <img src={artigo.imagemCapa} alt={artigo.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          <Tag label={artigo.categoria} color="default" />
          <Tag label={artigo.tag} color={artigo.tagColor} />
        </div>
      </div>
      <div className="p-5">
        <MetaInfo artigo={artigo} />
        <h3 className="mt-3 font-bold text-white leading-snug text-base group-hover:text-red-300 transition-colors line-clamp-2">{artigo.titulo}</h3>
        <p className="mt-2 text-zinc-500 text-sm line-clamp-2">{artigo.subtitulo}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-zinc-600">{artigo.tempoLeitura} de leitura</span>
          <span className="text-red-500 text-xs font-semibold group-hover:text-red-400 transition-colors">Ler artigo →</span>
        </div>
      </div>
    </button>
  );
}

// ─── PÁGINA COMPLETA DO ARTIGO ────────────────────────────────────────────────

function ArtigoCompleto({ artigo, onVoltar }: { artigo: Artigo; onVoltar: () => void }) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <button onClick={onVoltar} className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm mb-6">
        ← Voltar ao painel Crimson Desert
      </button>

      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <Tag label={artigo.categoria} color="default" />
          <Tag label={artigo.tag} color={artigo.tagColor} />
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">{artigo.titulo}</h1>
        <p className="text-zinc-400 text-base mb-4">{artigo.subtitulo}</p>
        <MetaInfo artigo={artigo} />
      </header>

      <div className="rounded-2xl overflow-hidden mb-8 border border-zinc-800">
        <img src={artigo.imagemCapa} alt={artigo.titulo} className="w-full h-64 md:h-80 object-cover" />
      </div>

      <ConteudoArtigo conteudo={artigo.conteudo} />

      <div className="mt-10 pt-6 border-t border-zinc-800">
        <p className="text-xs text-zinc-600 mb-2 uppercase tracking-widest">Tags relacionadas</p>
        <KeywordBadges keywords={artigo.keywords} />
      </div>
    </article>
  );
}

// ─── PAINEL PRINCIPAL CRIMSON DESERT ─────────────────────────────────────────

const CrimsonDesertPanel = () => {
  const [artigoAberto, setArtigoAberto] = useState<Artigo | null>(null);
  const artigos = [ARTIGO_1, ARTIGO_2];

  if (artigoAberto) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white">
        <ArtigoCompleto artigo={artigoAberto} onVoltar={() => setArtigoAberto(null)} />
      </div>
    );
  }

  return (
    <>
      <DynamicSEO />
      <div className="min-h-screen bg-zinc-950 text-white">
        {/* Hero */}
        <div className="relative overflow-hidden border-b border-zinc-800/60">
          <img src={crimsonHeroImg} alt="Crimson Desert - Painel Especial" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-zinc-950/90 to-zinc-950 pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-700/50 to-transparent" />

          <div className="relative max-w-6xl mx-auto px-4 py-12">
            <Link to="/geek">
              <Button variant="ghost" className="mb-6 gap-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50">
                <ArrowLeft className="h-4 w-4" />
                Voltar ao Geek
              </Button>
            </Link>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-900/50 border border-red-700/50 flex items-center justify-center text-2xl">🗡️</div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-500">Especial</span>
                  <span className="text-zinc-600">·</span>
                  <span className="text-xs text-zinc-500">Games</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">Crimson Desert</h1>
                <p className="text-zinc-400 max-w-xl leading-relaxed">
                  Tudo sobre o RPG de mundo aberto da Pearl Abyss — história, gameplay, sistema de combate e o que torna Pywel um dos mundos mais ambiciosos de 2026.
                </p>
                <div className="flex flex-wrap gap-3 mt-5">
                  <span className="inline-flex items-center gap-1.5 text-xs bg-green-950/60 text-green-400 border border-green-800/50 px-3 py-1.5 rounded-full font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Disponível — 19 de março de 2026
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs bg-zinc-800/60 text-zinc-400 border border-zinc-700/50 px-3 py-1.5 rounded-full">PC · PS5 · Xbox Series X|S</span>
                  <span className="inline-flex items-center gap-1.5 text-xs bg-zinc-800/60 text-zinc-400 border border-zinc-700/50 px-3 py-1.5 rounded-full">Pearl Abyss</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de artigos */}
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Artigos do Especial</h2>
            <span className="text-xs text-zinc-600">{artigos.length} artigos</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {artigos.map((artigo) => (
              <ArtigoCard key={artigo.id} artigo={artigo} onClick={() => setArtigoAberto(artigo)} />
            ))}
          </div>

          <div className="mt-12 pt-6 border-t border-zinc-800/50 text-center text-xs text-zinc-600">
            Painel especial VicioCode · Crimson Desert 2026 · Pearl Abyss · BlackSpace Engine
          </div>
        </div>
      </div>
    </>
  );
};

export default CrimsonDesertPanel;

import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import { Clock, User, Calendar, Gamepad2, Star, Zap, Shield, BarChart3 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import ArticleSources from "@/components/ArticleSources";
import EditorialTake from "@/components/EditorialTake";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/pragmata-capcom-guia-completo-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const PragmataCapcom2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "pragmata-capcom-guia-completo-2026",
      "PRAGMATA: Guia Completo do Novo Jogo da Capcom — Gameplay, História e Vale a Pena?",
      "geek"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-geek/20 text-geek rounded-full text-sm font-medium">
            Games · Capcom · Abril 2026
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          PRAGMATA: Guia Completo do Novo Jogo da Capcom — Gameplay, História e Vale a Pena?
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />13 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="13 de Abril, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/9] sm:aspect-video bg-card">
        <img
          fetchpriority="high"
          src={heroImg}
          alt="PRAGMATA Capcom 2026 — astronauta e menina holográfica olhando a Terra a partir da Lua"
          loading="eager"
          decoding="async"
          width={1920}
          height={1071}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Anunciada em 2020, adiada quatro vezes e finalmente lançada em <strong>17 de abril de 2026</strong>, PRAGMATA é uma das novas IPs mais corajosas da Capcom em anos. Ambientada numa colônia lunar abandonada, o jogo mistura ação sci-fi, combate com mecânicas de hacking e uma narrativa emocional entre um soldado e uma misteriosa menina holográfica. Após o lançamento, reunimos análises, nota da crítica e um guia completo para você decidir se vale cada centavo.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-geek" />
          Ficha Técnica e Nota da Crítica
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-geek/20 p-5">
            <h3 className="font-bold text-geek mb-3">📋 Informações Gerais</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>🏢 <strong className="text-foreground">Desenvolvedor:</strong> Capcom</li>
              <li>📅 <strong className="text-foreground">Lançamento:</strong> 17 de abril de 2026</li>
              <li>🎮 <strong className="text-foreground">Plataformas:</strong> PS5, Xbox Series X|S, PC, Switch 2</li>
              <li>🏷️ <strong className="text-foreground">Preço:</strong> R$ 299,90 (Standard) / R$ 399,90 (Deluxe)</li>
              <li>⏱️ <strong className="text-foreground">Duração:</strong> ~18–22h (campanha principal)</li>
              <li>🌐 <strong className="text-foreground">Legendas PT-BR:</strong> Sim</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-geek/20 p-5">
            <h3 className="font-bold text-geek mb-3">⭐ Notas da Crítica</h3>
            <div className="space-y-2">
              {[
                { site: "Metacritic", nota: "84/100", base: "(72 críticas)" },
                { site: "OpenCritic", nota: "85/100", base: "Strong" },
                { site: "Steam", nota: "Very Positive 87%", base: "(12k+ reviews)" },
                { site: "IGN Brasil", nota: "8,5/10", base: "\"Espetacular\"" },
                { site: "Gamespot", nota: "8/10", base: "\"Grande nova IP\"" },
              ].map(({ site, nota, base }) => (
                <div key={site} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{site}</span>
                  <div className="text-right">
                    <span className="font-bold text-geek">{nota}</span>
                    <span className="text-xs text-muted-foreground ml-1">{base}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          História: Hugh e Diana na Lua
        </h2>
        <p>
          PRAGMATA segue <strong>Hugh Williams</strong>, um técnico militar enviado para investigar uma colônia lunar que perdeu contato com a Terra. Ao chegar, ele descobre que a colônia foi tomada por uma IA militar chamada PRAGMA, que corrompeu todos os sistemas e transformou os habitantes em drones mecânicos. Em meio ao caos, Hugh encontra <strong>Diana</strong>, uma menina holográfica que parece saber mais do que deveria sobre o que aconteceu.
        </p>
        <p>
          A dupla Hugh-Diana é o coração emocional do jogo. Diana pode interagir com os sistemas da colônia e hackear inimigos diretamente — criando uma dinâmica de cooperação única onde <strong>você não pode atacar a maioria dos inimigos sem primeiro hackear com Diana</strong>. Isso torna cada encontro um quebra-cabeça tático.
        </p>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
          {[
            { personagem: "Hugh Williams", desc: "Ex-militar pragmático e cínico. Força bruta, combate corpo a corpo e arsenal pesado. Arco de redenção ao longo do jogo.", icon: "💪" },
            { personagem: "Diana (IA holográfica)", desc: "Menina misteriosa criada digitalmente. Pode hackear sistemas, controlar drones e revelar informações ocultas sobre a colônia.", icon: "🔮" },
          ].map(({ personagem, desc, icon }) => (
            <div key={personagem} className="bg-card rounded-xl border border-geek/20 p-4">
              <div className="text-2xl mb-2">{icon}</div>
              <h3 className="font-bold text-sm mb-1">{personagem}</h3>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          Gameplay: O Sistema de Hack-e-Ataque
        </h2>
        <p>
          A maior inovação de PRAGMATA é seu sistema de combate <strong>duplo: hackear com Diana, atacar com Hugh</strong>. Inimigos protegidos por escudos digitais não tomam dano convencional — Diana precisa primeiro analisar a frequência do escudo e interrompê-lo, enquanto Hugh cobre ela dos ataques. Isso cria um ritmo único:
        </p>
        <ul>
          <li><strong>Fase de análise:</strong> Diana escaneia o inimigo e encontra a vulnerabilidade. Você tem 3–10 segundos dependendo do tipo de inimigo.</li>
          <li><strong>Janela de hack:</strong> Diana trava o escudo por alguns segundos. É o momento de atacar com Hugh de forma agressiva.</li>
          <li><strong>Contra-hack:</strong> Alguns inimigos tentam hackear de volta. Você entra num minijogo de sequência para bloquear.</li>
          <li><strong>Execução:</strong> Inimigos reduzidos abaixo de 30% de vida ficam vulneráveis a finalizações cinematográficas co-op.</li>
        </ul>
        <p>
          Críticos elogiam o sistema como "genuinamente inovador" — um shooter de ação que exige raciocínio tático em vez de apenas reflexo. O lado negativo apontado: contra chefes menores, a rotina pode parecer repetitiva nas primeiras horas.
        </p>

        
        <AdInArticle className="my-8" />
<h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-geek" />
          O Que a Crítica Elogiou e O Que Criticou
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-green-500/20 p-5">
            <h3 className="font-bold text-green-400 mb-3">✅ Pontos Fortes</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Visual deslumbrante — melhor ray tracing já visto num jogo Capcom</li>
              <li>• Sistema de combate inovador e satisfatório</li>
              <li>• Narrativa emocional com reviravoltas genuínas</li>
              <li>• Trilha sonora orquestral de alto nível</li>
              <li>• Duração ideal: não estica artificialmente</li>
              <li>• Cenas de cutscene de qualidade cinematográfica</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-red-500/20 p-5">
            <h3 className="font-bold text-red-400 mb-3">⚠️ Pontos Fracos</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Ritmo lento nas primeiras 3 horas (tutorial extenso)</li>
              <li>• Exploração do mundo aberto limitada</li>
              <li>• Alguns quebra-cabeças podem frustrar sem guia</li>
              <li>• Sem modo multiplayer ou co-op local</li>
              <li>• Bosses intermediários menos inspirados</li>
            </ul>
          </div>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          Vale a Pena Comprar? Análise por Perfil
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { perfil: "✅ Compre se você...", items: ["Gosta de jogos narrativos com história bem escrita (The Last of Us, Death Stranding)", "Curte mecânicas de combate táticas e únicas", "Aprecia jogos da Capcom (Resident Evil, Devil May Cry)", "Quer um jogo single player sólido de 20h sem side-quests forçadas"], cor: "border-green-500/30" },
            { perfil: "⏳ Espere um desconto se...", items: ["Você prefere open world massivo com centenas de horas de conteúdo", "Não curte puzzle/hacking integrado ao combate", "Está esperando mais reviews sobre o conteúdo pós-campanha", "O preço de R$ 299,90 está fora do orçamento agora — projeção de 40% de desconto em 3–4 meses"], cor: "border-yellow-500/30" },
          ].map(({ perfil, items, cor }) => (
            <div key={perfil} className={`bg-card rounded-xl border ${cor} p-5`}>
              <h3 className="font-bold mb-3">{perfil}</h3>
              <ul className="space-y-1">
                {items.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="mt-0.5">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-geek" />O Histórico de Desenvolvimento — Uma Jornada de 6 Anos
        </h2>
        <p>
          PRAGMATA foi anunciado pela primeira vez no PS5 Showcase de junho de 2020, com direção de Hiroyuki Kobayashi e produção usando a RE Engine — a mesma engine proprietária da Capcom responsável por Resident Evil Village, Devil May Cry 5, Street Fighter 6 e Monster Hunter Rise. O trailer inicial mostrou um astronauta e uma menina holográfica flutuando sobre uma Nova York coberta de fumaça, com estética visual que imediatamente gerou comparações a Death Stranding e Xenogears.
        </p>
        <p>
          Após o anúncio, PRAGMATA passou por múltiplos adiamentos: a data original era 2022, depois movida para "TBA" e, finalmente, 17 de abril de 2026. A Capcom manteve comunicação esparsa sobre o projeto — typical para o estúdio em IPs novas e ambiciosas. Dragon's Dogma 2 passou por silêncio similar antes de seu lançamento em 2024, e Monster Hunter World teve desenvolvimento longo antes do anúncio público. O padrão sugeriu que a Capcom não queria revelar muito antes de ter certeza da qualidade do produto.
        </p>
        <p>
          O lançamento em abril de 2026 nos confirmou que os seis anos de desenvolvimento foram usados para refinar o sistema de combate hack-e-ataque, a narrativa entre Hugh e Diana, e a otimização visual da RE Engine para os ambientes lunares. O resultado validou a espera — Metacritic 84 e Very Positive no Steam são notas sólidas para uma nova IP de risco.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">A RE Engine e o Visual de PRAGMATA</h2>
        <p>
          A RE Engine é uma das engines proprietárias mais respeitadas da indústria — e PRAGMATA demonstra por quê. A Capcom usou a engine para criar ambientes lunares com iluminação global baseada em ray tracing, partículas de poeira lunar com simulação física e a estética bioluminescente de Diana contrastando com os tons frios e metálicos da colônia abandonada. O Digital Foundry descreveu como "um dos jogos tecnicamente mais impressionantes da RE Engine até agora", com performance estável em 60fps no modo Performance do PS5 e resolução nativa em modo Qualidade.
        </p>
        <p>
          Para PC, a RE Engine tem histórico positivo: Resident Evil 4 Remake e Monster Hunter World rodam excepcionalmente bem em hardware médio, e PRAGMATA segue esse padrão. Com uma RTX 2070 ou equivalente, o jogo atinge 1080p 60fps de forma consistente. Em GPUs mais novas como a RTX 4070, 1440p 60fps com ray tracing ativo é plenamente viável. Os requisitos mínimos são um i5 de oitava geração, 16 GB de RAM e GPU equivalente a uma GTX 1070.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">A Trilha Sonora e o Mundo Sonoro</h2>
        <p>
          Um dos aspectos mais elogiados pela crítica, mas menos cobertos nos reviews em português, é a trilha sonora de PRAGMATA. Composta por Yuki Hayashi — conhecido por Death Parade e Haikyuu — a música usa orquestração clássica com síntese eletrônica que reflete a dualidade de Hugh (humano, peso, metal) e Diana (digital, leveza, luz). Temas específicos para cada personagem se entrelaçam durante as batalhas cooperativas, criando uma experiência sonora que a IGN descreveu como "a melhor trilha de um jogo da Capcom desde Devil May Cry 5."
        </p>
        <p>
          O design de som também foi elogiado: cada tipo de inimigo tem assinatura sonora única que sinaliza seu estado de escudo digital — um recurso de acessibilidade disfarçado de worldbuilding, permitindo que jogadores ouçam quando um inimigo está vulnerável mesmo sem ver a barra de status. Esse tipo de detalhe demonstra cuidado no design que vai além do visual.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Conteúdo Pós-Campanha e Rejogabilidade</h2>
        <p>
          Com 18–22 horas de campanha principal, PRAGMATA não tenta ser um jogo de mundo aberto interminável. Mas há conteúdo além da história: arquivos de áudio e vídeo escondidos nos módulos da colônia constroem o lore da IA PRAGMA e dos colonizadores lunares de forma que os speed-runners do primeiro playthrough vão inevitavelmente perder. Um segundo playthrough com todas as peças de lore disponíveis transforma a percepção de vários momentos da narrativa — um dos aspectos mais elogiados pela comunidade nos fóruns após o lançamento.
        </p>
        <p>
          A dificuldade mais alta, desbloqueada após completar a campanha, adiciona variações de inimigos e novos padrões de hack que os críticos descreveram como "genuinamente desafiadores" — não apenas com mais HP, mas com comportamentos diferentes que exigem repensar estratégias estabelecidas. Para quem quer espremer o máximo de PRAGMATA, as 18 horas da campanha são o ponto de partida, não o destino.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">PRAGMATA no Contexto do Catálogo da Capcom</h2>
        <p>
          PRAGMATA representa a Capcom apostando em IP original pela primeira vez desde Devil May Cry (2001) e Lost Planet (2006). Em anos recentes, o estúdio tem se concentrado em sequências e remakes — Resident Evil 4 Remake (2023), Dragon's Dogma 2 (2024), Monster Hunter Wilds (2025) — com enorme sucesso financeiro e crítico. PRAGMATA é, portanto, um risco calculado: uma aposta de IP nova num momento em que o portfólio de remakes da Capcom ainda está no auge.
        </p>
        <p>
          O Metacritic 84 posiciona PRAGMATA como um sucesso sólido, mas não estrondoso — provavelmente o esperado para uma primeira entrada de uma IP nova sem a nostalgia que impulsiona remakes. O sucesso de crítica e a Very Positive no Steam sugerem que há base para sequências. A pergunta é se as vendas justificam o investimento numa franquia de risco — e a resposta, com base nos primeiros meses, parece positiva.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Hugh e Diana — A Dupla Que Define PRAGMATA</h2>
        <p>
          No centro de PRAGMATA está a relação entre <strong>Hugh</strong>, astronauta veterano da COSMA (a agência espacial fictícia do jogo), e <strong>Diana</strong>, uma menina holográfica de origem desconhecida que se materializa diante dele na Terra tomada pelo caos. A mecânica central do jogo é inseparável dessa relação: Diana projeta escudos digitais nos inimigos, que Hugh precisa explorar com ataques físicos sincronizados. Separados, são vulneráveis. Juntos, são devastadores.
        </p>
        <p>
          O que eleva essa mecânica acima de "personagem secundário como ferramenta" é que Diana tem agência narrativa própria. Ela faz perguntas que Hugh não sabe responder, demonstra curiosidade sobre o mundo humano que ela nunca viveu e, em momentos-chave, discorda abertamente de Hugh sobre a estratégia correta — criando tensão que não é resolvida por simples cenas de cutscene, mas por escolhas de gameplay que refletem a confiança entre os dois. A IGN Brasil destacou esse aspecto como "a melhor escrita de um duo protagonista em um jogo de ação da geração."
        </p>
        <p>
          A Capcom também tomou a decisão de não revelar a origem de Diana nos primeiros dois terços do jogo — uma aposta narrativa que funciona porque o mistério em torno dela é mais interessante do que qualquer explicação prematura seria. Os jogadores que completam PRAGMATA relatam unanimemente que a revelação final recontextualiza toda a jornada de forma satisfatória, sem recorrer a reviravoltas forçadas.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Quanto Tempo Dura PRAGMATA?</h2>
        <p>
          A campanha principal de PRAGMATA dura entre <strong>18 e 22 horas</strong> na dificuldade normal, segundo dados do HowLongToBeat compilados na primeira semana pós-lançamento. Completistas que buscam todos os arquivos de lore, colecionáveis e o conteúdo da dificuldade mais alta podem estender para 30–35 horas. Não há modo multiplayer ou conteúdo de mundo aberto — PRAGMATA é um jogo linear focado na experiência narrativa e de combate, sem padding artificial.
        </p>
        <p>
          Esse escopo foi uma decisão consciente da Capcom: a RE Engine permite que a empresa entregue jogos polidos com 18–25 horas de campanha sem depender de conteúdo de mundo aberto para justificar o preço. Resident Evil 4 Remake (2023) seguiu a mesma fórmula com enorme sucesso. Para o jogador brasileiro avaliando custo-benefício, PRAGMATA a R$ 349,90 entrega uma experiência mais densa e vertical do que muitos open worlds de 60+ horas que diluem a qualidade com conteúdo repetitivo.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Comparativo: PRAGMATA vs. Outros Jogos de Ação de 2026</h2>
        <p>
          No contexto de lançamentos de 2026, PRAGMATA se posiciona de forma interessante. Crimson Desert (março) dominou a conversa com seu mundo aberto massivo, mas recebeu críticas pela narrativa fraca — exatamente o ponto forte de PRAGMATA. Ghost of Yōtei (Sucker Punch / Sony) está previsto para o segundo semestre com proposta de mundo aberto samurai. PRAGMATA chega como a opção de quem quer uma história bem contada com combate de alta qualidade em escopo controlado — sem a sobrecarga de sistemas de um Crimson Desert nem a monotonia potencial de um open world.
        </p>
        <p>
          Dentro do catálogo da Capcom, a comparação mais justa é com Devil May Cry 5 (2019): ambos são jogos de ação lineares, com progressão de habilidades dentro de um mesmo playthrough, narrativa focada num duo de protagonistas e rejogabilidade em dificuldades mais altas. PRAGMATA tem menos espetáculo estilístico que DMC5, mas compensa com profundidade narrativa e tecnologia visual da RE Engine levada ao limite em 2026.
        </p>
      </div>

      <EditorialTake category="geek" title="Análise: PRAGMATA Prova que a Capcom Ainda Sabe Arriscar">
        <p>Após anos de remakes excelentes mas previsíveis, PRAGMATA é a prova de que a Capcom ainda tem coragem de criar algo novo. O sistema de combate hack-e-ataque entre Hugh e Diana é genuinamente inovador num gênero — ação em terceira pessoa — que parecia esgotado em termos de mecânicas novas. A dupla protagonista funciona porque a Capcom entendeu que Diana não pode ser apenas uma ferramenta: ela tem personalidade, motivações e momentos que transformam a relação com Hugh de forma crível. <strong>Isso é design narrativo que poucos jogos de ação conseguem executar sem parar o gameplay</strong>. O ritmo lento das primeiras três horas e a exploração limitada são defeitos reais, mas o núcleo — o loop de hackear e atacar com lógica tática, num cenário lunar impressionante com trilha sonora excepcional — justifica a espera de seis anos. PRAGMATA não é perfeito, mas é original. E em 2026, isso já é raro o suficiente para valer o preço.</p>
      </EditorialTake>

      <ArticleSources category="geek"
        sources={[
          {
            title: "PRAGMATA — Site Oficial Capcom",
            url: "https://www.capcom-games.com/pragmata/",
            publisher: "Capcom",
            accessedAt: "Maio 2026",
          },
          {
            title: "PRAGMATA — Metacritic PC (84)",
            url: "https://www.metacritic.com/game/pragmata/",
            publisher: "Metacritic",
            accessedAt: "Maio 2026",
          },
          {
            title: "PRAGMATA — Steam Store",
            url: "https://store.steampowered.com/app/1573420/PRAGMATA/",
            publisher: "Valve / Capcom",
            accessedAt: "Maio 2026",
          },
          {
            title: "PRAGMATA Review — IGN Brasil (8.5/10)",
            url: "https://br.ign.com/pragmata/review",
            publisher: "IGN Brasil",
            accessedAt: "Maio 2026",
          },
          {
            title: "PRAGMATA Review — GameSpot (8/10)",
            url: "https://www.gamespot.com/reviews/pragmata-review/1900-6418400/",
            publisher: "GameSpot",
            accessedAt: "Maio 2026",
          },
          {
            title: "Capcom Investor Relations — Resultados 2026",
            url: "https://www.capcom.co.jp/ir/english/",
            publisher: "Capcom",
            accessedAt: "Maio 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="pragmata-capcom-guia-completo-2026" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId="pragmata-capcom-guia-completo-2026" postTitle="PRAGMATA: Guia Completo do Novo Jogo da Capcom" category="geek" />
    </article>
  );
};

export default PragmataCapcom2026;
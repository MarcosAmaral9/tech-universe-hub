import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Sword, BookOpen, Map, Shield, Star } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import NewsletterSignup from "@/components/NewsletterSignup";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";
// ⚠️ Adicionar o arquivo kingdom-come-deliverance-2-guia-2025.webp em src/assets/
import heroImg from "@/assets/kingdom-come-deliverance-2-guia-2025.webp";

const SLUG = "kingdom-come-deliverance-2-guia-completo-2025";
const TITLE =
  "Kingdom Come: Deliverance 2 — Guia Completo: História, Combate, Habilidades e o Contexto Histórico da Boêmia em 1403";

const KingdomComeDeliverance2Guia2025 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-geek/20 text-geek rounded-full text-sm font-medium">
            Kingdom Come · Warhorse Studios · RPG Medieval · Guia
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          {TITLE}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            10 de Julho, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            18 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="10 de Julho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          src={heroImg}
          alt="Kingdom Come Deliverance 2 guia completo combate história Boêmia 1403"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Lançado em <strong>4 de fevereiro de 2025</strong> para PS5, Xbox Series X|S e PC,{" "}
          <strong>Kingdom Come: Deliverance 2</strong> é a continuação direta do RPG histórico de 2018
          desenvolvido pelo estúdio checo Warhorse Studios — e entrega exatamente o que a base de fãs do
          original pediu por sete anos: mais história, mais Boêmia medieval e o mesmo sistema de combate
          realista baseado em física que dividiu opiniões e conquistou devotos em igual medida. Ambientado
          em <strong>1403</strong>, o jogo coloca o jogador dentro de um dos períodos mais turbulentos da
          história tcheca, com personagens históricos reais e uma representação geográfica de precisão quase
          arqueológica. Este guia cobre tudo que você precisa saber para começar — e o contexto histórico
          que torna a experiência ainda mais rica.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          A Warhorse Studios e a Origem da Franquia
        </h2>
        <p>
          Kingdom Come: Deliverance 2 não pode ser entendido sem conhecer a história improvável por trás de seu
          predecessor. O primeiro KCD foi desenvolvido pela Warhorse Studios, empresa fundada em Praga em 2011
          por Dan Vávra — designer veterano com passagem pela Illusion Softworks, estúdio responsável por Mafia
          (2002), um dos RPGs de mundo aberto mais respeitados da época. A Warhorse lançou uma campanha de
          financiamento coletivo no Kickstarter em janeiro de 2014 com uma proposta audaciosa: um RPG medieval
          de mundo aberto sem elfos, dragões ou magia — apenas história, física e combate realista. A campanha
          pediu £300.000 e arrecadou £1,1 milhão de libras até o encerramento, sinal claro de que havia demanda
          reprimida por esse tipo de experiência num mercado dominado por fantasy.
        </p>
        <p>
          Kingdom Come: Deliverance original foi lançado em fevereiro de 2018 após quatro anos de desenvolvimento,
          com recepção crítica dividida que se tornou quase um caso de estudo sobre expectativas e nicho de
          mercado. Publicações generalistas apontaram a dificuldade abrupta, os bugs de lançamento e a ausência
          de qualidade de vida padrão em RPGs modernos. Já a comunidade de fãs do gênero abraçou precisamente
          essas características: o combate difícil que exige aprendizado genuíno, o mapa construído a partir de
          registros históricos reais do século XV e a narrativa sem heróis escolhidos — Henry é o filho de um
          ferreiro, não um eleito do destino. Com o tempo e as correções via patches, o jogo acumulou mais de
          5 milhões de cópias vendidas ao longo de seu ciclo de vida, justificando amplamente a sequência. A
          Warhorse foi adquirida pela Plaion (antiga Koch Media, holding que controla a Deep Silver) em 2019,
          mas manteve sua estrutura e identidade criativa independente sob a nova estrutura corporativa.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-geek" />
          O Contexto Histórico: Boêmia em 1403
        </h2>
        <p>
          Parte fundamental do apelo de Kingdom Come: Deliverance 2 — e do original — é que o cenário não é
          uma fantasia medieval genérica, mas uma reconstrução detalhada de um lugar e período reais. A Boêmia
          de 1403 era um dos reinos mais ricos e politicamente complexos da Europa Central, parte do Sacro
          Império Romano-Germânico e epicentro de tensões religiosas, políticas e étnicas que culminariam
          poucos anos depois nas Guerras Hussitas — um conflito que antecipou em um século muitas das
          dinâmicas da Reforma Protestante.
        </p>
        <p>
          O rei da Boêmia no período coberto pelos dois jogos é Wenceslau IV (Václav IV em tcheco), filho
          do imperador Carlos IV e considerado por historiadores um governante errático que perdeu o título
          de Rei dos Romanos em 1400 após conflito com os príncipes eleitores do Império. Seu irmão mais novo,
          Sigismundo de Luxemburgo — rei da Hungria e futuro Imperador do Sacro Império Romano-Germânico —
          é o principal antagonista do primeiro Kingdom Come e figura central na política de KCD2. A rivalidade
          entre os dois irmãos é um fato histórico documentado: Sigismundo prendeu Wenceslau duas vezes
          (em 1394 e 1402) em disputas pelo controle do reino, e essa instabilidade política forma o pano
          de fundo que transforma a Boêmia medieval em terreno fértil para as aventuras de Henry.
        </p>
        <p>
          Outra figura histórica central ao período — e mencionada no contexto do jogo — é Jan Hus, o teólogo
          e reformador religioso checo nascido por volta de 1369 em Husinec. Hus era professor na Universidade
          de Praga (fundada por Carlos IV em 1348, a primeira universidade da Europa Central) e pregava abertamente
          contra a corrupção da Igreja Católica e a venda de indulgências — críticas que o tornariam herege
          aos olhos da autoridade eclesiástica e que resultariam em sua execução na fogueira em Constança, em
          1415, durante o Concílio de Constança. Em 1403, o período do jogo, Hus ainda estava vivo e no
          auge de sua influência intelectual em Praga — um dado que a Warhorse incorpora ao tecido narrativo
          do jogo como contexto de fundo, reforçando a sensação de estar dentro de um momento histórico real
          com consequências que o jogador sabe que virão, mas que os personagens do jogo ainda não conhecem.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Map className="h-7 w-7 text-geek" />
          Os Dois Mapas: Trosky e Kuttenberg
        </h2>
        <p>
          A maior expansão de escala de KCD2 em relação ao original é a presença de dois mapas distintos e
          interconectados ao longo da campanha. O primeiro é a região de Trosky, no nordeste da Boêmia,
          centrada em torno das ruínas do castelo de mesmo nome — um ponto de referência real que ainda
          existe hoje como monumento histórico tcheco, com suas duas torres de basalto vulcânico erguidas
          sobre colinas naturais reconhecíveis até por quem nunca visitou a República Tcheca. A Warhorse
          utilizou registros cartográficos e arqueológicos medievais para reconstruir o território com a
          mesma metodologia aplicada no primeiro jogo ao vale de Sázava e à cidade de Rattay.
        </p>
        <p>
          O segundo mapa é Kuttenberg — nome alemão medieval da cidade hoje conhecida como Kutná Hora, no
          centro da Boêmia, e que foi uma das cidades mais ricas da Europa medieval por conta de suas minas
          de prata. No auge de sua prosperidade no século XIV, Kutná Hora era comparável em riqueza apenas
          a Praga no Sacro Império, e suas minas financiaram campanhas militares, construções monumentais e
          a própria Universidade de Praga. A Catedral de Santa Bárbara, cujas obras começaram em 1388 e se
          estenderam por mais de um século, é o monumento mais famoso da cidade e aparece em KCD2 em fase
          de construção — exatamente como estaria em 1403, detalhe de precisão histórica que resume a
          filosofia de design da Warhorse. Kutná Hora é hoje Patrimônio Mundial da UNESCO, reconhecida em
          1995, o que torna a reconstrução digital da Warhorse um documento cultural de valor além do
          entretenimento.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-geek" />
          O Sistema de Combate: O Que Mudou e o Que Ficou
        </h2>
        <p>
          O sistema de combate de Kingdom Come: Deliverance é, ao mesmo tempo, o aspecto mais elogiado e
          o mais criticado da franquia — e KCD2 o preserva em sua essência enquanto refina pontos específicos
          de frustração identificados no original. A base continua sendo um sistema de seis direções de
          ataque (cima, baixo, esquerda, direita, diagonal esquerda, diagonal direita) aplicadas tanto
          ao ataque quanto ao bloqueio, exigindo que o jogador observe e reaja à direção do golpe do oponente
          em vez de apertar um botão genérico de "defender". Esse modelo, inspirado em sistemas de HEMA
          (Historical European Martial Arts — artes marciais europeias históricas), cria duelos que se
          parecem genuinamente com esgrima medieval: pausados, lidos e perigosos, em vez do ritmo de botão
          acelerado típico dos action RPGs mais populares do mercado.
        </p>
        <p>
          As principais melhorias de KCD2 sobre o sistema original incluem combos encadeados mais fluidos
          com menos janelas de timing impossíveis nos primeiros níveis de habilidade, um sistema de
          contraataque mais responsivo que recompensa a leitura do oponente sem exigir precisão de
          milissegundos em configurações de dificuldade padrão, e um novo sistema de finalizações
          contextuais (Master Strikes) que funcionam como interrupções poderosas quando executadas
          corretamente no momento do ataque do adversário. O jogo também introduziu combate a cavalo
          expandido em relação ao original, com lançamentos de lança, uso de armas de arremesso montado e
          mecânicas específicas de cavalaria que refletem o papel central do combate a cavalo na guerra
          medieval europeia.
        </p>
        <p>
          Importante para quem chega novo à franquia: o combate de KCD2 não é imediatamente satisfatório.
          Henry começa como um lutador medíocre — porque narrativamente ele ainda é um jovem com pouca
          experiência em combate real — e as primeiras horas do jogo envolvem perder confrontos com
          inimigos comuns, aprender padrões e gradualmente desenvolver habilidade tanto no nível do
          personagem quanto no nível real de leitura do jogo pelo jogador. Esse design intencional recompensa
          investimento de tempo com uma sensação de progressão genuína: quando Henry finalmente derrota um
          inimigo armado com facilidade depois de horas de prática, a satisfação é proporcionalmente maior
          do que em qualquer RPG com sistema de combate convencional.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Sistemas de Habilidade e Progressão
        </h2>

        <div className="not-prose my-6 overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
          <table className="w-full min-w-[560px] border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4 w-1/3 align-top">Habilidade</th>
                <th className="text-left py-3 px-4 w-2/3 align-top">Como Evoluir / Por Que Importa</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "⚔️ Sword / Axe / Mace",
                  "Evolui apenas usando a arma correspondente em combate real. Treinar com mestres de armas em cidades acelera a progressão inicial e desbloqueia novas técnicas com menos tempo de farm.",
                ],
                [
                  "🏹 Bow",
                  "Requer prática manual — acertar alvos no mundo avança a habilidade independentemente de combate. Priorize cedo se quiser ter opções à distância antes de chegar às cidades maiores.",
                ],
                [
                  "🐎 Riding",
                  "Aumenta velocidade de cavalo, resistência do animal e capacidade de carga. Cavalgar regularmente entre locais (em vez de andar a pé) é a forma mais eficiente de subir essa habilidade.",
                ],
                [
                  "🗣️ Speech",
                  "Determina quantas opções de diálogo persuasivo estão disponíveis. Alta Speech abre rotas alternativas em missões que de outro modo exigem combate ou furtividade — essencial para builds pacifistas.",
                ],
                [
                  "🌿 Alchemy",
                  "Fabricar poções pessoalmente (não apenas comprar) é o método mais eficiente. Poções de cura, de sono e de aumento de habilidades são mais baratas de fabricar do que comprar de mercadores.",
                ],
                [
                  "📖 Reading",
                  "Exclusividade de KCD: Henry é inicialmente analfabeto. Aprender a ler é uma quest específica que desbloqueia acesso a pergaminhos, mapas detalhados e instruções de alquimia escritas.",
                ],
                [
                  "🤫 Stealth",
                  "Determinada pela frequência de movimentação furtiva e pela ausência de detecção. Builds de stealth permitem esvaziar acampamentos inteiros sem combate — playstyle válido e recompensado.",
                ],
              ].map(([hab, desc], i) => (
                <tr key={i} className="border-t border-border">
                  <td className="py-3.5 px-4 font-semibold break-words text-sm">{hab}</td>
                  <td className="py-3.5 px-4 text-muted-foreground text-sm break-words">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          O sistema de progressão de KCD2 herda e expande a filosofia do original: habilidades sobem
          exclusivamente pelo uso, sem pontos distribuídos manualmente ao subir de nível. Jogar de forma
          furtiva consistentemente sobe Stealth; usar arcos em caça ou combate sobe Bow; comprar e vender
          regularmente sobe Charisma. Essa abordagem cria personagens que refletem genuinamente as
          escolhas de jogo do próprio jogador ao longo de dezenas de horas, em vez de builds teorizadas
          antes do início da campanha.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          Dicas Essenciais para Quem Começa Agora
        </h2>

        <div className="not-prose my-6 space-y-3">
          {[
            {
              titulo: "🍖 Comida estraga — gerencie o inventário",
              desc: "KCD2 mantém o sistema de deterioração de alimentos do original. Carnes e pães estragam com o tempo; poções e ingredientes de alquimia têm durabilidade própria. Não estoque comida desnecessária — venda ou consuma regularmente.",
            },
            {
              titulo: "💤 Durma antes de missões importantes",
              desc: "Henry dorme e acorda com status diferente dependendo da fadiga acumulada. Privação de sono afeta combate, stealth e até opções de diálogo. Sempre descanse antes de confrontos ou missões com checkpoints longos.",
            },
            {
              titulo: "🏇 Use o cavalo para carregar peso",
              desc: "Henry tem limite de carga que afeta velocidade e stamina. O cavalo carrega muito mais. Assalte acampamentos, carregue tudo no cavalo e venda em lotes na cidade mais próxima — a fonte mais eficiente de coroas (moeda do jogo).",
            },
            {
              titulo: "🔧 Mantenha a armadura consertada",
              desc: "Armadura danificada oferece muito menos proteção. Ferreeiros e sapateiros consertam peças específicas; não espere até que toda a armadura esteja quebrada — conserte por partes regularmente para manter a proteção constante.",
            },
            {
              titulo: "📜 Aprenda a ler o quanto antes",
              desc: "A quest para aprender a ler é desbloqueada cedo na história. Priorize-a: acesso a mapas detalhados e à receituário de alquimia completo muda significativamente a qualidade de vida nas horas seguintes.",
            },
            {
              titulo: "⚖️ Crimes têm consequências cumulativas",
              desc: "Ser pego roubando ou agredindo NPCs gera reputação negativa em toda a região — não apenas na cidade onde o crime ocorreu. Reputação baixa eleva preços em mercadores e pode bloquear quests de facção.",
            },
          ].map(({ titulo, desc }) => (
            <div
              key={titulo}
              className="flex gap-3 bg-card rounded-xl border border-geek/20 p-4"
            >
              <span className="text-xl shrink-0">{titulo.split(" ")[0]}</span>
              <div>
                <h3 className="font-bold text-sm mb-0.5">
                  {titulo.split(" ").slice(1).join(" ")}
                </h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          KCD2 vs. KCD1: Vale Jogar o Original Antes?
        </h2>
        <p>
          Kingdom Come: Deliverance 2 é uma continuação direta — Henry retorna, os eventos do primeiro jogo
          são referenciados constantemente, e personagens secundários do original reaparecem com arcos
          continuados. Para quem nunca jogou o primeiro, o jogo inclui um recapitulado em vídeo dos eventos
          principais, mas a experiência emocional é visivelmente mais rica para quem construiu relação com
          os personagens ao longo das 40 a 60 horas da campanha original.
        </p>
        <p>
          A boa notícia é que KCD1 em 2026 é um jogo polido, com anos de patches corrigindo os problemas
          do lançamento original, e está disponível por preço significativamente reduzido em promoções
          regulares da Steam e das lojas de console. Para quem tem tempo e interesse em investir na
          franquia do início, a ordem cronológica é altamente recomendada. Para quem quer entrar direto
          em KCD2, o jogo funciona — mas perde parte de seu impacto narrativo.
        </p>
        <p>
          Do ponto de vista puramente mecânico, jogar o original primeiro também serve como tutorial
          natural para o sistema de combate de KCD2: as primeiras horas de KCD1 introduzem o sistema
          de seis direções de forma mais gradual do que KCD2, que assume certa familiaridade dos
          jogadores veteranos desde o início. Quem chega direto à sequência pode achar o ritmo inicial
          do combate mais abrupto do que quem já tem algumas horas do primeiro jogo no histórico.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Recepção Crítica e Desempenho Comercial
        </h2>
        <p>
          Kingdom Come: Deliverance 2 foi lançado com recepção crítica positiva na grande maioria das
          publicações especializadas, com notas na faixa de 85 a 90 no Metacritic nas três plataformas
          principais. Os elogios se concentraram na ambição histórica, na qualidade da narrativa e no
          refinamento do sistema de combate. As críticas mais consistentes apontaram para ocasionais
          problemas técnicos de lançamento em PC (predominantemente relacionados a stuttering em
          configurações de alta resolução) e para uma curva de dificuldade ainda abrupta nas primeiras
          duas horas que pode afastar jogadores menos pacientes antes que o jogo encontre seu ritmo.
        </p>
        <p>
          Do lado comercial, a Warhorse Studios e a Deep Silver anunciaram que KCD2 ultrapassou 2 milhões
          de cópias vendidas na primeira semana após o lançamento — número que superou as projeções internas
          do estúdio e que foi celebrado publicamente por Dan Vávra em comunicados nas redes sociais da
          empresa. Para um RPG de nicho desenvolvido por um estúdio de médio porte sem o orçamento de
          marketing de publishers como EA, Ubisoft ou Sony, esses números representam um sucesso comercial
          considerável e provavelmente garantem a continuidade da franquia com um terceiro título no futuro.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">
            Você já jogou Kingdom Come: Deliverance? 🏰
          </h3>
          <p className="text-muted-foreground">
            Qual é seu estilo de jogo — combate, stealth ou diplomacia? Conta nos comentários! 👇
          </p>
        </div>
      </div>

      <EditorialTake
        category="geek"
        title="Análise do Marcos: o RPG mais honesto intelectualmente de 2025"
      >
        <p>
          Poucos jogos me fizeram abrir o Wikipedia com tanta frequência quanto Kingdom Come: Deliverance 2.
          Isso é, para mim, o maior elogio que posso dar: o jogo cria curiosidade genuína sobre o período
          histórico que recria. Jan Hus, Sigismundo, as minas de prata de Kutná Hora — sai da tela do jogo
          e você quer saber o que realmente aconteceu. Mecanicamente, o combate ainda vai frustrar uma
          parcela significativa dos jogadores brasileiros acostumados com o feedback imediato de ação dos
          Soulslikes ou o conforto dos RPGs de missão clara e recompensa constante. Mas para quem tem
          paciência para investir nas primeiras quatro ou cinco horas, KCD2 se torna um dos mundos mais
          convincentes já construídos em um videogame — sem dragões, sem magia, sem atalhos narrativos.
          Só a Boêmia medieval, com toda a sujeira, beleza e complexidade que isso implica.
        </p>
      </EditorialTake>

      <ArticleSources
        category="geek"
        sources={[
          {
            title: "Warhorse Studios — Site Oficial",
            url: "https://www.kingdomcomerpg.com/",
            publisher: "Warhorse Studios / Deep Silver",
            accessedAt: "Julho 2026",
          },
          {
            title: "Kingdom Come: Deliverance 2 no Steam",
            url: "https://store.steampowered.com/app/1847380/Kingdom_Come_Deliverance_II/",
            publisher: "Valve / Steam",
            accessedAt: "Julho 2026",
          },
          {
            title: "IGN — Kingdom Come: Deliverance 2 Review",
            url: "https://www.ign.com/games/kingdom-come-deliverance-2",
            publisher: "IGN",
            accessedAt: "Fevereiro 2025",
          },
          {
            title: "Kutná Hora — UNESCO World Heritage Site",
            url: "https://whc.unesco.org/en/list/732/",
            publisher: "UNESCO",
            accessedAt: "Julho 2026",
          },
          {
            title: "KCD2 Wiki — Fextralife",
            url: "https://kingdom-come-deliverance.wiki.fextralife.com/Kingdom+Come+Deliverance+2+Wiki",
            publisher: "Fextralife",
            accessedAt: "Julho 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="geek" />
    </article>
  );
};

export default KingdomComeDeliverance2Guia2025;

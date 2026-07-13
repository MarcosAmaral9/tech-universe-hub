import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Sword, Shield, Map, Zap, Star } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import NewsletterSignup from "@/components/NewsletterSignup";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";
// ⚠️ Adicionar o arquivo monster-hunter-wilds-guia-2025.webp em src/assets/
import heroImg from "@/assets/monster-hunter-wilds-guia-2025.webp";

const SLUG = "monster-hunter-wilds-guia-completo-2025";
const TITLE = "Monster Hunter Wilds: Guia Completo — Armas, Mundo Seamless, Inclemência e Como Começar em 2026";

const MonsterHunterWildsGuia2025 = () => {
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
            Monster Hunter · Capcom · Action RPG · Guia
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          {TITLE}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />10 de Julho, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />17 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="10 de Julho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          src={heroImg}
          alt="Monster Hunter Wilds guia completo armas mundo inclemência 2025"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Lançado em <strong>28 de fevereiro de 2025</strong> para PS5, Xbox Series X|S e PC,{" "}
          <strong>Monster Hunter Wilds</strong> se tornou o jogo mais vendido da história da Capcom nos primeiros
          dias após o lançamento, superando o recorde estabelecido por Monster Hunter: World em 2018. Com um{" "}
          <strong>mundo seamless sem telas de carregamento</strong> entre zonas, um sistema de clima dinâmico que
          transforma o comportamento dos monstros em tempo real e as mesmas 14 classes de armas que os veteranos
          da franquia já conhecem — mas com mecânicas novas em cada uma delas — Wilds é tanto a melhor entrada
          para novatos quanto o game mais ambicioso da série em 20 anos. Este guia cobre tudo que você precisa
          saber para começar em 2026.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          A Franquia e o Peso do Lançamento
        </h2>
        <p>
          Monster Hunter existe desde 2004, quando a Capcom lançou o primeiro título da série para PlayStation 2
          no Japão. Durante mais de uma década, a franquia foi considerada de nicho no Ocidente mas absolutamente
          dominante no mercado japonês — particularmente na versão portátil para Nintendo DS e PSP, onde títulos
          como Monster Hunter Freedom Unite (2008) e Monster Hunter 4 Ultimate (2015) venderam dezenas de milhões
          de cópias acumuladas quase exclusivamente na Ásia. Esse cenário mudou radicalmente em janeiro de 2018,
          quando a Capcom lançou Monster Hunter: World para PS4, Xbox One e PC. World foi o primeiro jogo da série
          desenvolvido desde o início para consoles de sala de alto desempenho, com gráficos modernos, sistema de
          progressão simplificado e suporte pleno ao mercado ocidental. O resultado foi uma reviravolta histórica:
          World vendeu mais de 21 milhões de cópias ao longo de seu ciclo de vida, tornando-se o jogo mais vendido
          da história da Capcom — empresa fundada em 1979 e responsável por franquias como Resident Evil, Devil May
          Cry e Street Fighter. Wilds, desenvolvido sob direção de Yuya Tokuda (que também dirigiu World) e produção
          de Ryozo Tsujimoto (produtor da franquia desde Monster Hunter 4), foi anunciado em dezembro de 2023 durante
          o The Game Awards e imediatamente posicionado como o verdadeiro sucessor espiritual de World — não de Rise
          (2021), o spin-off mais voltado para ação rápida e o mercado japonês.
        </p>
        <p>
          A recepção crítica do lançamento confirmou as expectativas: Wilds alcançou notas acima de 90 nas
          principais publicações especializadas e no agregador Metacritic, consolidando-se como um dos títulos
          mais bem avaliados de 2025. Mais significativo que as notas foram os números de vendas iniciais: a Capcom
          anunciou publicamente que o jogo alcançou a marca de 8 milhões de cópias vendidas nos três primeiros
          dias após o lançamento — superando o recorde anterior de 5 milhões que o próprio World havia estabelecido
          em 2018 e tornando Wilds o lançamento mais rápido da história do estúdio até aquela data.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Map className="h-7 w-7 text-geek" />
          O Mundo Seamless: A Maior Mudança Técnica da Série
        </h2>
        <p>
          A mudança mais estrutural de Monster Hunter Wilds em relação a todos os títulos anteriores da franquia
          é a eliminação das telas de carregamento entre zonas dentro de uma mesma área de caça. Nos jogos
          anteriores — incluindo World, que já era considerado avançado tecnicamente para seu tempo —, o mapa de
          cada região era dividido em zonas numeradas separadas por portais invisíveis que disparavam um breve
          carregamento sempre que o jogador ou o monstro atravessava a fronteira entre elas. Wilds elimina
          completamente esse sistema: cada região do jogo é uma área contínua, explorada sem interrupção, com o
          monstro perseguindo o jogador (e vice-versa) através de passagens, cavernas, pântanos e paredões de
          rocha sem qualquer corte na experiência.
        </p>
        <p>
          Essa transição impôs desafios técnicos consideráveis. A Capcom utilizou uma versão evoluída do RE Engine,
          o mesmo motor proprietário que sustenta a série Resident Evil moderna e os remakes de Devil May Cry e
          Street Fighter 6, mas com modificações substanciais para suportar carregamento dinâmico de terreno e IA
          de monstros operando em escala muito maior do que qualquer título anterior da franquia. O resultado prático
          é uma sensação de mundo vivo que reforça a proposta central da série: os monstros existem como criaturas
          com comportamento próprio, territórios definidos e rotinas que existem independentemente da presença do
          caçador — e o mundo seamless torna essa ilusão muito mais convincente do que o sistema de zonas separadas
          jamais permitiu.
        </p>
        <p>
          O jogo apresenta cinco grandes biomas exploráveis ao longo da campanha principal: o Deserto Escarlate
          (Scarlet Forest), o Pântano Sônico (Windward Plains), os Campos de Mel (Oilwell Basin), a Floresta
          Sombria e as Ruínas Ancestrais — cada um com ecossistemas distintos de monstros, recursos de crafting
          e condições climáticas específicas que compõem o sistema de Inclemência, a segunda grande novidade mecânica
          do jogo.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          O Sistema de Inclemência: Clima que Muda Tudo
        </h2>
        <p>
          Em títulos anteriores de Monster Hunter, o clima era essencialmente cosmético — chuva, névoa ou sol
          afetavam a atmosfera visual mas raramente tinham impacto direto no comportamento dos monstros ou nas
          estratégias de caça. Wilds muda esse paradigma radicalmente com o sistema de Inclemência: eventos
          climáticos extremos que transformam cada bioma periodicamente, alterando quais monstros estão ativos,
          qual é o comportamento deles e até que tipo de materiais raros ficam disponíveis para coleta.
        </p>
        <p>
          Durante uma Inclemência no Deserto Escarlate, por exemplo, tempestades de areia reduzem a visibilidade
          e ativam monstros noturnos que normalmente se escondem durante o dia. No Pântano Sônico, eventos de
          chuva intensa inundam passagens normalmente navegáveis e forçam o caçador a replanéjar rotas de
          perseguição. Cada bioma tem seu conjunto específico de Inclemências com temporizadores próprios,
          e parte da progressão do jogo envolve aprender a usar essas janelas de clima extremo a seu favor —
          seja para encontrar subspecies raras de monstros que só aparecem em condições específicas, seja para
          aproveitar vulnerabilidades que determinados monstros desenvolvem durante certas condições climáticas.
          É um sistema que adiciona uma camada estratégica de planejamento ausente em praticamente toda a
          história da série.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-geek" />
          As 14 Armas: O Que Mudou em Cada Uma
        </h2>
        <p>
          Monster Hunter Wilds mantém as 14 classes de armas que a série consolidou ao longo de duas décadas,
          uma decisão deliberada da equipe de desenvolvimento para não alienar a base de fãs estabelecida. No
          entanto, cada arma recebeu novidades mecânicas que redefinem parcialmente como são utilizadas, algumas
          mais significativas do que outras.
        </p>

        <div className="not-prose my-6 space-y-3">
          {[
            {
              arma: "⚔️ Great Sword",
              desc: "Recebeu o novo Focus Strike, um golpe carregado que pode ser ativado quando o monstro está em estado de queda — criando uma janela de dano massivo em feridas abertas que recompensa posicionamento agressivo.",
            },
            {
              arma: "🗡️ Long Sword",
              desc: "Ganhou o Iai Slash estendido e um sistema de contador mais responsivo, tornando-a ainda mais orientada a timing preciso. Segue sendo a arma mais popular estatisticamente entre os jogadores de todos os títulos recentes.",
            },
            {
              arma: "🛡️ Sword and Shield",
              desc: "O shield passou a ter uso ativo em combo, com o Perfect Guard retornando do Rise e integrado ao fluxo principal de ataques — tornando a arma mais técnica do que aparenta para iniciantes.",
            },
            {
              arma: "🪓 Dual Blades",
              desc: "Demon Mode foi retrabalhado com gestão de stamina mais exigente, mas os combos em Archdemon Mode ficaram mais fluidos, tornando a transição entre os dois estados mais intuitiva.",
            },
            {
              arma: "🔨 Hammer",
              desc: "Novo sistema de Spinning Bludgeon com carregamento angular dá ao Hammer maior versatilidade em movimentação — historicamente seu ponto fraco em relação à outras armas de dano bruto.",
            },
            {
              arma: "🎵 Hunting Horn",
              desc: "Mantém o sistema de Performance introduzido em World Iceborne e aprimorado, com novas músicas de suporte que afetam o grupo mais amplamente — posicionando-a como a melhor escolha para caças em grupo.",
            },
            {
              arma: "🗺️ Lance / Gunlance",
              desc: "Lance ganhou Counter Thrust mais versátil; Gunlance recebeu novos tipos de Shelling com diferentes perfis de dano, forçando os jogadores a adaptar a estratégia de acordo com o monstro do dia.",
            },
            {
              arma: "🐝 Switch Axe / Charge Blade",
              desc: "Switch Axe tem o novo Elemental Burst que usa o medidor de ampe; Charge Blade ficou ligeiramente mais acessível com o sistema de carregamento de frascos revisado — mantendo a complexidade mas com feedback visual mais claro.",
            },
            {
              arma: "🌀 Insect Glaive",
              desc: "O sistema de Kinsect foi simplificado: agora você escolhe o tipo de inseto no início da caça em vez de fazer upgrade separado. Reduz a preparação pré-caça sem sacrificar a profundidade de jogo.",
            },
            {
              arma: "🏹 Armas de Fogo (Bow, LBG, HBG)",
              desc: "As três armas de alcance receberam o sistema de Silkbind Shots integrado diretamente aos combos principais, tornando-as mais dinâmicas e menos estáticas do que eram nos títulos anteriores.",
            },
          ].map(({ arma, desc }) => (
            <div
              key={arma}
              className="flex gap-3 bg-card rounded-xl border border-geek/20 p-4"
            >
              <span className="text-xl shrink-0">{arma.split(" ")[0]}</span>
              <div>
                <h3 className="font-bold text-sm mb-0.5">
                  {arma.split(" ").slice(1).join(" ")}
                </h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p>
          Para iniciantes absolutos, a recomendação mais consistente da comunidade de Monster Hunter é começar
          pela Sword and Shield (SnS) ou pela Long Sword. A SnS permite o uso de itens sem guardar a arma —
          uma vantagem invisível mas enorme para quem ainda está aprendendo a gestão de recursos durante uma
          caça longa — e tem mobilidade suficiente para escapar de ataques enquanto o jogador aprende os padrões
          de cada monstro. A Long Sword, apesar de ter mecânicas de timing mais exigentes, compensa com
          alcance generoso e uma curva de recompensa satisfatória: cada parry bem executado entrega uma sensação
          de maestria que outros títulos do gênero raramente conseguem replicar.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          O Seikret: O Novo Companheiro de Montaria
        </h2>
        <p>
          Uma das mudanças mais visíveis de Wilds em relação a Rise é a substituição do Palamute — o lobo de
          combate montável introduzido em 2021 — pelo Seikret, uma criatura alada semelhante a um wyvern
          terrestre de menor porte que serve tanto como montaria de travessia quanto como sistema de fast travel
          contextual dentro de cada área. O Seikret pode ser invocado a qualquer momento fora de combate e
          carrega automaticamente uma mochila de itens de emergência que o jogador pode acessar mesmo durante
          caças — uma qualidade de vida significativa que reduz a necessidade de retornar ao acampamento base
          para reabastecer consumíveis durante missões longas. A criatura também funciona como transporte para
          pontos de interesse marcados no mapa, navegando automaticamente pelo terreno seamless enquanto o
          jogador pode observar o ambiente ou ajustar o equipamento.
        </p>
        <p>
          A decisão de substituir o Palamute gerou discussão entre a base de fãs mais dedicada de Rise, mas
          o consenso após o lançamento foi positivo: o Seikret se encaixa melhor na identidade mais lenta e
          estratégica de Wilds do que o Palamute — que foi projetado especificamente para o ritmo mais ágil
          e arcade de Rise — e o sistema de transporte automático se mostrou genuinamente útil para os mapas
          maiores do novo jogo, que demandariam tempo considerável para cruzar a pé entre pontos de interesse.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          Dicas Essenciais para Quem Começa Agora em 2026
        </h2>

        <div className="not-prose my-6 overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
          <table className="w-full min-w-[560px] border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4 w-2/5 align-top">Dica</th>
                <th className="text-left py-3 px-4 w-3/5 align-top">Por Que Importa</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Leia os dados do monstro antes de partir", "O Bestiário revela fraquezas elementais, partes quebráveis e materiais raros — informação que transforma caçadas frustrantemente longas em encontros resolvidos em metade do tempo."],
                ["Não venda materiais antes do HR 10", "Monstros revisitados em High Rank dropam variantes diferentes de materiais. Vender tudo cedo é o erro mais comum de iniciantes e frustra a progressão de crafting no médio prazo."],
                ["Use o acampamento para repor itens", "O acampamento não termina a missão. Você pode retornar, repor poções, sharpening stones e bombas, e voltar ao combate. Missões falham por morte tripla, não por reabastecimento."],
                ["Troque de arma pelo menos uma vez antes de decidir", "Wilds oferece uma arma básica de cada tipo no início da campanha. Experimentar três ou quatro tipos antes de investir em crafting de Set completo economiza horas de progressão mal direcionada."],
                ["Aprenda a identificar sinais de fuga", "Monstros com HP baixo começam a coxear, tropeçar ou tentar dormir para regenerar. Carrot (monstro dormindo) é a janela para bombas de sono — dano massivo garantido."],
                ["Ative o Scouting Fly tracking no início", "Os Scouting Flies rastreiam automaticamente o monstro-alvo quando você coleta rastros suficientes. Destravar esse sistema cedo elimina a necessidade de caça manual pelo mapa."],
              ].map(([dica, motivo], i) => (
                <tr key={i} className="border-t border-border">
                  <td className="py-3.5 px-4 font-semibold break-words text-sm">{dica}</td>
                  <td className="py-3.5 px-4 text-muted-foreground text-sm break-words">{motivo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Wilds vs. World vs. Rise: Qual é o Melhor Ponto de Entrada?
        </h2>
        <p>
          É uma pergunta frequente em 2026, quase dois anos depois do lançamento de Wilds: vale a pena começar
          pelo jogo mais recente ou jogar World primeiro? A resposta honesta depende do perfil do jogador.
          Monster Hunter: World ainda é a melhor introdução à série para quem nunca tocou em nenhum título,
          porque sua curva de tutorial é mais generosa, o ritmo de revelação de sistemas é mais gradual e o
          preço — agora significativamente reduzido depois de oito anos de ciclo de vida — torna a experiência
          de menor risco financeiro. World mais sua expansão Iceborne (lançada em 2019) representam juntos mais
          de 200 horas de conteúdo para quem quer se aprofundar completamente antes de passar para Wilds.
        </p>
        <p>
          Para quem quer entrar direto em Wilds em 2026, a boa notícia é que o jogo funciona perfeitamente como
          ponto de entrada: a campanha principal foi projetada para introduzir os sistemas gradualmente, e o
          contexto narrativo é independente dos títulos anteriores. O que diferencia um veterano de um iniciante
          em Wilds não é conhecimento de lore ou história, mas familiaridade com o ritmo de cada arma e com a
          linguagem de sinais que os monstros usam para telegrafiar ataques — e essa linguagem é aprendida
          jogando Wilds, não necessariamente World.
        </p>
        <p>
          Rise, lançado originalmente para Nintendo Switch em 2021 e portado para PS5, Xbox e PC em 2022, é o
          menos recomendado dos três como ponto de entrada: seu ritmo de ação mais rápido e seus sistemas de
          Wirebug formam um vocabulário mecânico que não se traduz diretamente para World nem para Wilds,
          podendo criar confusão em jogadores que tentam fazer a transição entre os títulos. Rise é excelente
          para veteranos que querem uma experiência mais ágil e arcade, mas como introdução à franquia é o
          menos adequado dos três.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Atualizações e Conteúdo Pós-Lançamento
        </h2>
        <p>
          Seguindo o modelo estabelecido por World — que recebeu a expansão massiva Iceborne em setembro de 2019,
          18 meses após o lançamento base — a Capcom implementou para Wilds um calendário de Title Updates
          gratuitos que adicionam monstros, eventos e itens cosméticos periodicamente. As primeiras atualizações
          do jogo trouxeram de volta monstros queridos de títulos anteriores da franquia, como Mizutsune (popular
          desde Monster Hunter Generations e Rise) e Gore Magala (villão icônico de Monster Hunter 4 e 4 Ultimate),
          dois monstros com bases de fãs particularmente ativas que pediam seu retorno desde o anúncio de Wilds.
          Esse padrão de trazer de volta favoritos da comunidade em atualizações gratuitas — em vez de cobrar por
          eles como conteúdo pago — é parte do modelo de pós-lançamento que a Capcom adotou desde World e que
          ajuda a manter a base de jogadores ativa por meses ou anos depois do lançamento inicial.
        </p>
        <p>
          A expectativa da comunidade é que Wilds siga o mesmo caminho de World e receba uma expansão paga
          de grande escala — equivalente ao Iceborne — em algum momento de 2026 ou 2027, adicionando um novo
          bioma, novos monstros e possivelmente novos sistemas mecânicos que expandam a experiência base.
          A Capcom ainda não confirmou ou negou esse plano oficialmente, mas o histórico da empresa com a
          franquia e a escala do sucesso comercial de Wilds tornam esse desdobramento amplamente esperado
          por analistas e pela comunidade.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">
            Você já está jogando Monster Hunter Wilds? 🐉
          </h3>
          <p className="text-muted-foreground">
            Qual é a sua arma favorita? Conta nos comentários! 👇
          </p>
        </div>
      </div>

      <EditorialTake
        category="geek"
        title="Análise do Marcos: o melhor Monster Hunter já feito?"
      >
        <p>
          Monster Hunter Wilds não é perfeito — a campanha principal ainda termina mais cedo do que eu gostaria,
          e o verdadeiro conteúdo da série só começa de fato no High Rank, que demora mais tempo para chegar do
          que em World. Mas dito isso, é inegável que Wilds representa o salto técnico mais ambicioso que a
          Capcom já fez dentro da franquia. O mundo seamless muda fundamentalmente como você percebe a experiência:
          pela primeira vez, Monster Hunter parece um ecossistema real em vez de uma arena disfarçada de floresta.
          O sistema de Inclemência adiciona uma dimensão estratégica que eu não esperava gostar tanto quanto
          gostei. E as 14 armas, mesmo sem adições ao arsenal, são as versões mais bem polidas de si mesmas em
          toda a história da série. Para o jogador brasileiro que quer entrar na franquia agora, o preço em
          reais na Steam BR ainda é o principal obstáculo — mas Wilds é o tipo de jogo que justifica esperar
          a próxima promoção de temporada para comprar. Vale muito.
        </p>
      </EditorialTake>

      <ArticleSources
        category="geek"
        sources={[
          {
            title: "Capcom Investor Relations — Monster Hunter Wilds Sales Announcement",
            url: "https://www.capcom.co.jp/ir/english/",
            publisher: "Capcom",
            accessedAt: "Julho 2026",
          },
          {
            title: "Monster Hunter Wilds — site oficial",
            url: "https://www.monsterhunter.com/wilds/",
            publisher: "Capcom",
            accessedAt: "Julho 2026",
          },
          {
            title: "Monster Hunter Wilds no Steam",
            url: "https://store.steampowered.com/app/2246340/Monster_Hunter_Wilds/",
            publisher: "Valve / Steam",
            accessedAt: "Julho 2026",
          },
          {
            title: "IGN — Monster Hunter Wilds Review",
            url: "https://www.ign.com/games/monster-hunter-wilds",
            publisher: "IGN",
            accessedAt: "Março 2025",
          },
          {
            title: "Fextralife — Monster Hunter Wilds Wiki",
            url: "https://monsterhunterwilds.wiki.fextralife.com/",
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

export default MonsterHunterWildsGuia2025;

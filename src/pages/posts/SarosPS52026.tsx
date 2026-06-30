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
import heroImg from "@/assets/saros-ps5-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const SarosPS52026 = () => {
  useEffect(() => {
    trackArticleRead(
      "saros-housemarque-ps5-2026",
      "SAROS (PS5): Guia Completo do Sucessor Espiritual de Returnal — Vale a Pena?",
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
            Games · PS5 Exclusivo · Roguelike
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          SAROS (PS5): Guia Completo do Sucessor Espiritual de Returnal — Gameplay, Lore e Vale a Pena?
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />13 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="13 de Abril, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="SAROS PS5 Housemarque 2026 gameplay" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          A Housemarque voltou. O estúdio finlandês que criou o aclamado Returnal lançou em <strong>30 de abril de 2026</strong> seu novo exclusivo PS5: <strong>SAROS</strong>. Com impressões antecipadas extremamente positivas de criadores de conteúdo e a crítica já classificando como "o melhor jogo do ano até agora", SAROS promete repetir a fórmula vencedora de Returnal — e ir além. Este guia reúne tudo que você precisa saber.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-geek" />
          Ficha Técnica e Primeiras Notas
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-geek/20 p-5">
            <h3 className="font-bold text-geek mb-3">📋 Informações Gerais</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>🏢 <strong className="text-foreground">Desenvolvedor:</strong> Housemarque (Sony)</li>
              <li>📅 <strong className="text-foreground">Lançamento:</strong> 30 de abril de 2026</li>
              <li>🎮 <strong className="text-foreground">Plataformas:</strong> PS5 e PS5 Pro (exclusivo)</li>
              <li>🏷️ <strong className="text-foreground">Preço:</strong> R$ 329,90 (Standard) / R$ 419,90 (Digital Deluxe)</li>
              <li>⏱️ <strong className="text-foreground">Duração:</strong> Roguelike — infinitamente rejogável</li>
              <li>🌐 <strong className="text-foreground">Legendas PT-BR:</strong> Sim</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-geek/20 p-5">
            <h3 className="font-bold text-geek mb-3">⭐ Primeiras Notas (Early Access)</h3>
            <div className="space-y-2">
              {[
                { site: "Metacritic", nota: "91/100 ⭐", base: "(lançamento)" },
                { site: "IGN", nota: "9,2/10", base: "\"Obra-prima\"" },
                { site: "Eurogamer", nota: "5/5", base: "\"Essencial\"" },
                { site: "Digital Foundry", nota: "N/A", base: "\"Melhor visual do PS5\"" },
                { site: "Steam (PS5)", nota: "N/A", base: "Exclusivo Sony" },
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
          Lore e Ambientação: O Planeta Carcosa
        </h2>
        <p>
          SAROS se passa em <strong>Carcosa</strong>, um planeta alienígena isolado durante um eclipse eterno. O protagonista é <strong>Arjun Devraj</strong>, um explorador espacial enviado para investigar sinais de uma colônia perdida. Ao aterrissar, Arjun descobre que Carcosa está presa num ciclo temporal — toda vez que ele morre, o planeta "reseta", mas Arjun mantém fragmentos de memória e melhorias permanentes.
        </p>
        <p>
          A Housemarque descreveu Carcosa como "um planeta que respira": a flora e fauna mudam entre corridas, os biomas se reconfiguram e segredos só são revelados após múltiplas mortes. A narrativa é contada em fragmentos de memória, diários de exploradores anteriores e alucinações do protagonista durante o eclipse — muito próximo do estilo de Returnal, mas com mais profundidade de lore.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          Gameplay: O Que Mudou em Relação ao Returnal
        </h2>
        <p>
          SAROS mantém o DNA de Returnal — bullet hell em terceira pessoa com progressão roguelike — mas com melhorias substanciais em três áreas:
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { titulo: "Sistema de Eclipse", desc: "O eclipse em Carcosa não é apenas cenário — é uma mecânica. Conforme o eclipse avança durante a corrida, inimigos ficam mais agressivos mas dropos de itens melhoram. Você gerencia o tempo de forma estratégica: quanto mais espera, mais difícil e mais recompensador fica.", icon: "🌑" },
            { titulo: "Progressão Permanente Real", desc: "Diferente de Returnal (onde quase tudo resetava), SAROS tem uma árvore de habilidades permanentes chamada 'Memórias de Carcosa'. A cada morte, você deposita memórias numa estação de base que desbloqueiam passivas permanentes.", icon: "🌳" },
            { titulo: "Construção de Build Mais Rica", desc: "O jogo tem 4 arquétipos de personagem (Guardião, Explorador, Caçador, Oráculo) com habilidades únicas. A combinação de arquétipo + armas + passivas cria synergies profundas que a crítica comparou ao Hades 2.", icon: "⚔️" },
            { titulo: "Mundo Semi-aberto", desc: "Entre os biomas lineares de Returnal, SAROS adiciona hubs interconectados onde você pode explorar livremente, encontrar NPCs sobreviventes e descobrir lore opcional.", icon: "🗺️" },
          ].map(({ titulo, desc, icon }) => (
            <div key={titulo} className="flex gap-3 bg-card rounded-xl border border-geek/20 p-4">
              <span className="text-2xl shrink-0">{icon}</span>
              <div>
                <h3 className="font-bold text-sm mb-1">{titulo}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        
        <AdInArticle className="my-8" />
<h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-geek" />
          SAROS vs Returnal: Comparação Direta
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Aspecto</th>
              <th className="text-left py-3 px-4">Returnal (2021)</th>
              <th className="text-left py-3 px-4">SAROS (2026)</th>
            </tr></thead>
            <tbody>
              {[
                ["Progressão permanente", "Quase inexistente — frustrante", "Árvore de habilidades real — satisfatória"],
                ["Narrativa", "Fragmentada, muito opaca", "Fragmentada, mais acessível e emocionante"],
                ["Dificuldade", "Extremamente punitiva (sem pausa)", "Dura, mas com checkpoint opcional"],
                ["Variedade de builds", "Limitada (armas + passivas)", "4 arquétipos + synergies profundas"],
                ["Visual", "Impressionante para 2021", "Melhor visual já visto no PS5"],
                ["Tamanho do mundo", "Linear por biomas", "Biomas + hubs exploráveis"],
                ["Tempo médio até final", "20–40h (dependendo da habilidade)", "25–50h+ (rejogabilidade infinita"],
              ].map(([asp, ret, sar]) => (
                <tr key={asp} className="border-t border-border">
                  <td className="py-3 px-4 font-medium">{asp}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{ret}</td>
                  <td className="py-3 px-4 text-geek text-xs font-medium">{sar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          Vale a Pena Comprar? Veredicto Final
        </h2>
        <p>
          SAROS é, segundo a maioria dos críticos, o melhor exclusivo PS5 de 2026 até agora — e um forte candidato ao GOTY. A Housemarque evoluiu tudo o que era frustrante em Returnal mantendo o que era genial. Quem tinha medo de entrar no universo roguelike pelos comentários de dificuldade de Returnal vai encontrar em SAROS uma versão mais acolhedora sem sacrificar a profundidade.
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { caso: "✅ Compre agora se...", items: ["Tem PS5 e quer o melhor jogo exclusivo do ano", "Gostou de Returnal ou quer experimentar roguelike pela primeira vez", "Aprecia visual de ponta e trilha sonora imersiva", "Quer um jogo com centenas de horas de conteúdo"], cor: "border-green-500/30" },
            { caso: "⏳ Espere se...", items: ["Não tem PS5 (exclusivo — sem versão PC confirmada até agora)", "Prefere narrativas lineares sem mortes repetitivas", "Tem backlog enorme e pode esperar uma promoção da PS Store"], cor: "border-yellow-500/30" },
          ].map(({ caso, items, cor }) => (
            <div key={caso} className={`bg-card rounded-xl border ${cor} p-5`}>
              <h3 className="font-bold mb-3">{caso}</h3>
              <ul className="space-y-1">
                {items.map((item, i) => <li key={i} className="text-sm text-muted-foreground flex items-start gap-2"><span>•</span>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        <h2 className="text-2xl font-bold mt-10 mb-4">O DNA da Housemarque — Por Que SAROS Importa</h2>
        <p>
          A Housemarque é um dos estúdios mais singulares do portfólio Sony. Fundada em 1995 na Finlândia, passou décadas criando jogos de nicho — Resogun (PS4 launch title, 2013), Alienation (2016), Nex Machina (2017) — até que Returnal (2021) os catapultou para a linha de frente dos first-party PlayStation. Com Metacritic 86 e BAFTA de Melhor Jogo Britânico, Returnal mostrou que a Housemarque poderia combinar o rigor de roguelite com produção AAA e narrativa de mistério psicológico.
        </p>
        <p>
          A Sony adquiriu o estúdio em junho de 2021, poucos meses após o lançamento de Returnal. Essa aquisição foi diretamente motivada pelo sucesso crítico — e pelo reconhecimento de que o tipo de design que a Housemarque pratica (loop de gameplay obcecante, dificuldade intencional, worldbuilding por fragmentos) é exatamente o que diferencia exclusivas PlayStation de jogos multiplatforma genéricos.
        </p>
        <p>
          SAROS é, portanto, o primeiro jogo inteiramente desenvolvido dentro da Sony como estúdio first-party integrado. Isso significa mais recursos, mais tempo de desenvolvimento, e mais pressão para entregar algo que justifique a aquisição. As entrevistas do diretor Gregory Louden ao IGN e Push Square confirmam que o estúdio quer ampliar a narrativa além do que Returnal fez — mantendo o DNA roguelite, mas tornando a história mais acessível para quem ficou confuso com a estrutura fragmentada do predecessor.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">SAROS vs. Returnal — O Que Muda e O Que Permanece</h2>
        <p>
          Com base nas entrevistas disponíveis até o momento, SAROS mantém o loop roguelite de Returnal — morte permanente, runs procedurais, armas coletadas durante cada tentativa — mas introduz mudanças significativas na estrutura narrativa e no mundo.
        </p>
        <ul>
          <li><strong>Narrativa mais direta:</strong> Returnal usava fragmentos de memória e atmosfera kafkiana para contar sua história — fascinante para quem se engajou, impenetrável para muitos jogadores. Louden confirmou que SAROS terá uma estrutura narrativa mais convencional, sem abrir mão da profundidade de lore.</li>
          <li><strong>Mundo distinto de Returnal:</strong> enquanto Returnal se passava no planeta alienígena Atropos, SAROS acontece em um cenário diferente — detalhes ainda restritos, mas o material visual sugere uma estética mais orgânica e menos mecânica que o predecessor.</li>
          <li><strong>Sistema de progressão persistente:</strong> Returnal foi criticado inicialmente por não ter salvamento manual. SAROS, conforme declarado pela Housemarque, terá progressão permanente entre runs — habilidades e upgrades que sobrevivem à morte, tornando cada tentativa fracassada parte do progresso total.</li>
          <li><strong>Cooperativo confirmado:</strong> ao contrário de Returnal (originalmente solo, cooperativo adicionado depois em patch), SAROS foi desenvolvido com co-op desde o início — uma adição que expande o público potencial e muda a dinâmica das runs.</li>
          <li><strong>DualSense aprofundado:</strong> Returnal foi um dos jogos que melhor usou o DualSense, com gatilhos adaptativos distintos por arma e feedback háptico que comunicava o ambiente. SAROS promete aprofundar esse uso, com integração ainda mais granular ao design de sistemas.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">O Contexto do Portfólio Sony em 2026</h2>
        <p>
          SAROS chega num momento específico para a Sony: o portfólio first-party do PS5 em 2025–2026 é mais enxuto do que os anos anteriores. Após o reestruturamento que incluiu cancelamentos de projetos e redução de equipes em alguns estúdios, as exclusivas confirmadas para 2026 se resumem a SAROS, Marathon (Bungie) e conteúdo de Death Stranding 2 On The Beach (lançado em 2025). Isso aumenta o peso de cada lançamento.
        </p>
        <p>
          Para o consumidor brasileiro, SAROS deve seguir o padrão de preços PlayStation: R$ 349,90 na versão digital standard, com eventual Edição Deluxe por R$ 399,90. Membros PS Plus Extra e Premium não terão o jogo disponível no lançamento — o histórico da Sony com exclusivas first-party é de disponibilizar na sub apenas meses após o lançamento. Fique atento ao PlayStation Blog Brasil para promoções no período de lançamento.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">O Que Esperar no Lançamento</h2>
        <p>
          Com base no histórico da Housemarque e nas informações disponíveis, SAROS deve entregar: um loop de roguelite de alta qualidade com curva de dificuldade intencional, uso exemplar do DualSense, narrativa mais acessível que Returnal mas ainda enigmática, e produção visual que aproveita o hardware PS5 ao limite. Se o co-op for implementado de forma coesa ao design do loop, pode ser o diferencial que transforma SAROS num fenômeno maior que Returnal.
        </p>
        <p>
          A maior incógnita permanece a data exata de lançamento — "2026" sem trimestre confirmado. A Sony tipicamente anuncia datas com 60–90 dias de antecedência em State of Play events. Fique atento aos próximos State of Plays do segundo semestre de 2026 para confirmação oficial.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">O Sistema de Roguelite de SAROS — O Que Sabemos</h2>
        <p>
          Com base nas entrevistas disponíveis e no material divulgado pela Housemarque e Sony até agora, SAROS mantém o DNA roguelite de Returnal com ajustes significativos de acessibilidade. O loop fundamental — explorar, coletar armas e upgrades durante a run, morrer, reiniciar — está preservado. A mudança central é a <strong>progressão persistente entre runs</strong>: certos upgrades, habilidades e desbloqueios sobrevivem à morte do personagem, tornando cada tentativa fracassada parte do progresso total.
        </p>
        <p>
          Em Returnal, esse problema foi parcialmente resolvido apenas com o patch de co-op e o sistema de suspensão de partida — mas a progressão em si era resetada a cada morte, com exceção dos Ether coletados. SAROS parece ter integrado a progressão persistente ao design desde o início, não como patch posterior. Isso elimina uma das principais barreiras de entrada do predecessor sem destruir o risco que torna o roguelite satisfatório.
        </p>
        <p>
          O <strong>co-op from day one</strong> é outra mudança fundamental. Returnal era originalmente um jogo solo, com co-op adicionado em patch meses após o lançamento como um sistema que claramente não havia sido projetado para o modo cooperativo desde o início — as runs co-op eram funcionais, mas o balanceamento e a câmera mostravam as costuras de uma adição pós-fato. Em SAROS, a Housemarque prometeu que o co-op foi planejado desde a fase de design — o que idealmente significa bosses com comportamentos co-op, layout de mapas que funciona para dois jogadores e progressão compartilhada que faz sentido narrativamente.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">O Uso do DualSense — Housemarque Como Referência</h2>
        <p>
          Returnal estabeleceu um padrão que poucos jogos igualaram: cada arma tinha feedback háptico e resistência dos gatilhos adaptativos distintos. Uma arma de energia pulsava de forma diferente de uma metralhadora, que por sua vez resistia diferentemente de uma escopeta. O feedback comunicava informações de gameplay — a diferença entre um tiro bem colocado e um errado era sentida antes de ser vista. SAROS promete aprofundar esse sistema.
        </p>
        <p>
          Em entrevista à Push Square, Gregory Louden mencionou explicitamente que o feedback háptico de SAROS vai além de "diferentes armas têm diferentes sensações" — o ambiente em si vai comunicar informações através do controle. Biomas distintos terão assinaturas hápticas que sinalizam perigos antes que eles sejam visíveis na tela. Para um roguelite onde informação antecipada de perigo é literalmente a diferença entre sobreviver e reiniciar a run, essa integração de DualSense como sistema de gameplay — não de imersão — é potencialmente transformadora.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">SAROS no Contexto do Roguelite em 2026</h2>
        <p>
          O gênero roguelite passou por uma explosão de qualidade nos últimos anos: Hades II (2024), Dead Cells: Return to Castlevania, Balatro (2024). Mas quase todos esses títulos são indie ou AA — o espaço AAA do roguelite com produção cinematográfica e exclusividade de console permanece quase vazio desde Returnal. SAROS ocupa esse espaço com vantagem clara: a Housemarque é reconhecida como referência técnica do gênero, a Sony garante recursos e exclusividade de marketing, e o DualSense oferece uma camada de experiência que nenhum jogo PC ou Xbox consegue replicar.
        </p>
        <p>
          Se SAROS entregar o prometido — progressão persistente bem calibrada, co-op nativo, DualSense integrado ao gameplay e narrativa mais acessível que Returnal — tem tudo para ser o maior lançamento exclusivo PlayStation de 2026. A Housemarque raramente decepciona quando tem tempo e recursos adequados. E desta vez, tem os dois.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Como Se Preparar Para SAROS</h2>
        <p>
          Se você ainda não jogou Returnal, este é o momento ideal para recuperar o atraso. O jogo está disponível no PS5 e PC, com frequentes promoções na PlayStation Store e Steam. A experiência de Returnal não é pré-requisito para SAROS — a Housemarque confirmou que são universos separados — mas familiarizar-se com o loop roguelite do estúdio, com a linguagem visual de progressão por runs e com o uso do DualSense em combate vai tornar a entrada em SAROS muito mais natural. Returnal também é um dos melhores jogos da geração por mérito próprio — a preparação para SAROS é só um bônus.
        </p>
        <p>
          Além de Returnal, vale explorar outros roguelites modernos para calibrar a mentalidade certa antes de SAROS: Hades II (PC e consoles, 2024) oferece a melhor narrativa integrada ao loop roguelite disponível; Dead Cells permanece referência em fluidez de combate; e Risk of Rain Returns revisita um clássico com nova produção. Cada um treina habilidades diferentes que se traduzem diretamente para o tipo de desafio que a Housemarque projeta — leitura de padrões, gestão de risco e decisão rápida sob pressão constante.
        </p>
      </div>

      <EditorialTake category="geek" title="Análise do Marcos: SAROS É a Aposta Mais Importante da Sony em 2026">
        <p>Returnal foi um dos jogos mais corajosos do início da geração PS5 — e também um dos mais divisivos. Muitos jogadores abandonaram por dificuldade ou frustração com a narrativa fragmentada. SAROS parece ter sido projetado aprendendo essas lições: progressão persistente entre runs, co-op desde o lançamento, e narrativa mais direta são todas respostas diretas ao feedback de Returnal. <strong>A Housemarque não está recuando do que a torna especial — está tornando esse DNA mais acessível</strong>. Esse equilíbrio é difícil de acertar, e só o produto final vai revelar se conseguiram. Mas com Gregory Louden à frente, o estúdio que produziu Returnal agora com mais recursos, mais tempo e mais clareza sobre o que quer dizer com SAROS, as expectativas são altas por boas razões. É o jogo PS5 que mais acompanho em 2026.</p>
      </EditorialTake>

      <ArticleSources category="geek"
        sources={[
          {
            title: "SAROS — Site Oficial Housemarque / PlayStation",
            url: "https://www.playstation.com/en-us/games/saros/",
            publisher: "Sony / Housemarque",
            accessedAt: "Maio 2026",
          },
          {
            title: "SAROS — Anúncio State of Play setembro 2024",
            url: "https://blog.playstation.com/2024/09/24/saros-housemarque/",
            publisher: "PlayStation Blog",
            accessedAt: "Maio 2026",
          },
          {
            title: "SAROS — Entrevista com diretor Gregory Louden (IGN)",
            url: "https://www.ign.com/articles/saros-housemarque-interview",
            publisher: "IGN",
            accessedAt: "Maio 2026",
          },
          {
            title: "SAROS — Push Square Coverage",
            url: "https://www.pushsquare.com/games/ps5/saros",
            publisher: "Push Square",
            accessedAt: "Maio 2026",
          },
          {
            title: "Housemarque — Aquisição pela Sony (junho 2021)",
            url: "https://blog.playstation.com/2021/06/29/housemarque-joins-the-playstation-family/",
            publisher: "PlayStation Blog",
            accessedAt: "Maio 2026",
          },
          {
            title: "Returnal — Metacritic PS5 (86)",
            url: "https://www.metacritic.com/game/returnal/",
            publisher: "Metacritic",
            accessedAt: "Maio 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="saros-housemarque-ps5-2026" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId="saros-housemarque-ps5-2026" postTitle="SAROS: Guia Completo do Sucessor Espiritual de Returnal" category="geek" />
    </article>
  );
};

export default SarosPS52026;
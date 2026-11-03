import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Zap, Users, Cloud, Car, MessageSquare, Waves, Smartphone, Wifi, Cpu } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import SkeletonImage from "@/components/SkeletonImage";
import heroImg from "@/assets/gta-vi-mecanicas.webp";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";
import { GtaFeatureGrid, GtaBarChart, GtaCallout } from "@/components/gta/GtaVisuals";

const SLUG = "gta-vi-mecanicas-gameplay-2026";
const TITLE = "Mecânicas de GTA VI: Tudo Confirmado Sobre Combate, Direção, NPCs e Mundo Aberto";

const GtaViMecanicasGameplay2026 = () => {
  useEffect(() => { trackArticleRead(SLUG, TITLE, "geek"); }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-pink-500/15 text-pink-300 rounded-full text-sm font-medium">
            GTA VI · Gameplay · Mecânicas confirmadas
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">{TITLE}</h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />Atualizado em 3 de Novembro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />18 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="3 de Novembro, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <SkeletonImage priority src={heroImg} alt="GTA VI mecânicas — controle neon sobre grid 3D do mapa" width={1600} height={900} className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Em dois trailers oficiais — dezembro de 2023 e maio de 2025 — a Rockstar Games entregou mais informação sobre
          as mecânicas de <strong>GTA VI</strong> do que parecia possível em pouco mais de cinco minutos de vídeo
          combinados. Este guia separa o que é confirmação técnica do que é especulação da comunidade, com base em
          análise quadro a quadro dos trailers oficiais e nas declarações públicas da Rockstar e da Take-Two. Tudo
          que está aqui foi visto na tela ou dito por um representante oficial — nada de "leaks" não verificados.
        </p>

        <GtaCallout variant="success" title="Atualização de 3 de novembro de 2026">
          <p>
            Este guia foi revisado com o <strong>trailer de lançamento</strong> (outubro de 2026), a prévia presencial da
            revista britânica <strong>Edge</strong> e os comunicados oficiais da Rockstar sobre o pré-carregamento. Tudo o
            que vem da prévia está marcado como <em>"demonstrado na prévia"</em>: foi mostrado à imprensa, mas ainda não
            foi testado por jogadores.
          </p>
        </GtaCallout>

        <h2 className="text-2xl font-bold mt-10 mb-4">O que já é oficial a 16 dias do lançamento</h2>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          {[
            { k: "Lançamento", v: "19 de novembro de 2026, no mundo todo" },
            { k: "Plataformas", v: "PlayStation 5 e Xbox Series X|S (sem versão de PC anunciada)" },
            { k: "Pré-carregamento", v: "A partir de 10 de novembro (antes previsto para 12/11)" },
            { k: "Espaço livre", v: "Até 212 GB, dependendo do console" },
            { k: "Protagonistas", v: "Jason Duval e Lucia Caminos" },
            { k: "Online", v: "Campanha single-player no dia 1; novo online sem data" },
          ].map((i) => (
            <div key={i.k} className="rounded-xl border border-pink-500/20 bg-pink-500/5 p-4">
              <p className="text-xs uppercase tracking-wider text-pink-300 font-mono">{i.k}</p>
              <p className="mt-1 font-semibold">{i.v}</p>
            </div>
          ))}
        </div>
        <p>
          A mudança no pré-carregamento foi anunciada pela própria Rockstar no X em 3 de novembro. No PS5, o download
          antecipado libera à meia-noite do horário local do dia 10; no Xbox, à meia-noite de Greenwich (21h do dia 9
          em Brasília). Com até 212 GB, vale conferir o SSD antes: quem tem um PS5 com 825 GB e outros jogos grandes
          instalados provavelmente vai precisar liberar espaço ou instalar um SSD NVMe adicional.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-pink-400" /> O que a prévia da Edge mostrou
        </h2>
        <p>
          No fim de outubro, a Edge publicou a primeira matéria de capa com jogabilidade demonstrada ao vivo nos
          escritórios da Rockstar. Os números mais citados vêm dali e foram repercutidos por veículos como ComicBook e
          Dexerto. Em resumo, segundo a demonstração:
        </p>
        <ul>
          <li><strong>Mapa:</strong> Leonida tem cerca de <strong>duas vezes o tamanho</strong> do mapa de GTA V e inclui Vice City e várias regiões ao redor.</li>
          <li><strong>Interiores:</strong> "uma ordem de grandeza a mais" de lugares em que dá para entrar do que em qualquer jogo anterior do estúdio.</li>
          <li><strong>Animações:</strong> por volta de <strong>600 mil animações</strong> dedicadas à variedade de comportamento dos moradores.</li>
          <li><strong>Personalidade dos NPCs:</strong> cada pessoa do mundo recebe traços de personalidade que definem como reage a você.</li>
          <li><strong>Bairros com cara própria:</strong> cada região tem uma população com perfil demográfico diferente.</li>
          <li><strong>Reação dos protagonistas:</strong> Jason e Lucia comentam e reagem ao ambiente — por exemplo, demonstrando nojo ao entrar numa casa suja.</li>
        </ul>
        <p>
          Esses itens são importantes porque mexem no que a série sempre teve de mais forte: a sensação de que a cidade
          continua funcionando mesmo quando você não está olhando. Ainda assim, é preciso cautela. Uma demonstração
          conduzida pelo próprio estúdio mostra o melhor cenário possível; a experiência real, com milhões de pessoas
          jogando em consoles diferentes (incluindo o Xbox Series S, mais fraco), só poderá ser avaliada depois de 19 de
          novembro.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Polícia mais esperta: cães K9 e faixas de pregos</h2>
        <p>
          Em entrevista à Edge, Rob Nelson, da Rockstar, confirmou que a polícia de Leonida ganhou ferramentas novas.
          A principal são as <strong>unidades K9</strong>: cães policiais que perseguem o jogador a pé. Na demonstração,
          os cães conseguiram derrubar e imobilizar Jason depois de uma fuga curta. Isso muda a lógica clássica de GTA,
          em que bastava correr para um beco ou pular uma cerca para despistar os policiais.
        </p>
        <p>
          As <strong>faixas de pregos</strong> também voltam e, segundo a prévia, são usadas de forma mais estratégica
          nas perseguições de carro. Elas existem em quase todos os GTAs (a exceção é San Andreas), mas costumavam ser
          fáceis de desviar. A combinação de cães, bloqueios e patrulhas menos previsíveis indica que fugir da polícia
          vai exigir mais planejamento — um encaixe natural para um jogo construído em torno de assaltos.
        </p>
        <GtaCallout variant="tip" title="Dica para os primeiros dias">
          <p>
            Se os cães realmente imobilizam o personagem, fugir a pé em área aberta deve ser arriscado. Ter um veículo
            por perto e sair da área de busca antes de abandonar o carro tende a ser a estratégia mais segura — mas
            confirme na prática, porque os detalhes do sistema de procurado ainda não foram publicados.
          </p>
        </GtaCallout>

        <h2 className="text-2xl font-bold mt-10 mb-4">O trailer de lançamento: carros, fauna e Vice City</h2>
        <p>
          Publicado em outubro (o Xbox Wire o destacou em 23/10), o trailer de lançamento ultrapassou dezenas de milhões
          de visualizações em poucos dias. Ele quase não avança na história — o que é bom para quem quer chegar sem
          spoilers — mas mostra bastante do mundo. Como sempre na série, os carros não usam marcas reais, mas são
          claramente inspirados em modelos conhecidos: aparecem lowriders pintados à mão, esportivos japoneses no estilo
          dos anos 1990, picapes, motos, barcos e helicópteros. Iguanas, aves e jacarés reforçam a fauna típica da
          Flórida que inspirou Leonida.
        </p>
        <p>
          Para quem gosta de dirigir, o recado é a variedade: há veículos para estradas de pântano, avenidas litorâneas e
          rodovias, e a Rockstar falou na prévia em vias mais realistas, com trânsito mais coerente. A empresa ainda não
          detalhou se a direção ficou mais próxima de simulação ou se manteve o estilo mais solto de GTA V.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Interações bobas também voltaram</h2>
        <p>
          GTA sempre misturou drama criminal com humor ácido, e GTA VI segue a regra. Uma das interações confirmadas em
          agosto — e mostrada pela primeira vez em um episódio de <em>South Park</em> exibido em 28 de outubro — permite
          que Jason recolha fezes de cachorro na praia e as arremesse em pessoas. A cena também chamou atenção pela
          quantidade de gente na areia, talvez a melhor demonstração pública da densidade de multidões do jogo até agora.
          Claro: provocar moradores tem consequência, e é aí que entram os cães da polícia.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-pink-400" /> Dupla protagonista: como funciona em campo
        </h2>
        <p>
          A confirmação mais importante dos trailers é o retorno do sistema de protagonista duplo, mas com uma
          diferença estrutural fundamental em relação a GTA V. Em GTA V, os três protagonistas (Michael, Franklin,
          Trevor) operavam quase sempre em arcos paralelos e raramente apareciam juntos em cena fora de missões
          específicas. Em GTA VI, <strong>Lucia Caminos e Jason Duval estão juntos na maior parte da narrativa</strong>.
          O Trailer 2 mostra os dois lado a lado em assaltos a casas, em fugas de carro, em momentos sociais, em
          interações com outros personagens — eles funcionam como dupla operacional, não como personagens isolados que
          ocasionalmente cruzam.
        </p>
        <p>
          Tecnicamente, isso implica que o sistema de troca de personagem deve funcionar de forma muito mais fluida que
          em GTA V. No jogo anterior, trocar de Michael para Trevor envolvia uma transição cinematográfica com câmera
          subindo até o céu e descendo em outro lugar do mapa. Em GTA VI, com os dois protagonistas geralmente próximos,
          a troca pode ser instantânea ou contextual — possivelmente automatizada em momentos narrativos específicos
          (como Lucia conduzindo o tiroteio enquanto Jason dirige). A Rockstar não detalhou o mecanismo exato, mas a
          coreografia mostrada no Trailer 2 sugere que essa troca foi pensada para reforçar a dinâmica de dupla, não
          para separá-la.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <MessageSquare className="h-7 w-7 text-pink-400" /> NPCs com IA significativamente expandida
        </h2>
        <p>
          Os dois trailers, especialmente o Trailer 2, dedicam tempo notável a mostrar comportamento de NPCs que vai
          além do que GTA V e RDR2 ofereceram. São visíveis: pessoas filmando situações com celulares, multidões
          reagindo a eventos urbanos, agentes da lei com padrões de patrulhamento aparentemente menos roteirizados,
          fauna selvagem em pântanos reagindo de forma orgânica a presença do jogador. Em particular, várias cenas
          mostram NPCs em contextos sociais (clubes, praia, eventos públicos) com comportamento individualizado — não
          são apenas modelos com loop de animação.
        </p>
        <p>
          A Rockstar tradicionalmente investe pesadamente em sistemas de IA ambiental. RDR2, lançado em 2018, ainda
          é citado como referência de NPC dinâmico em jogo de mundo aberto: cidadãos reagiam a chuva, lembravam de
          interações passadas com o jogador, tinham rotinas diárias completas. GTA VI parece levar essa filosofia para
          ambiente urbano contemporâneo — onde a densidade de pessoas, veículos e estímulos é muito maior. Não há
          declaração oficial sobre o "número de NPCs simultâneos na tela" ou sobre o sistema técnico por trás, mas a
          mudança visível em relação a GTA V é significativa.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Car className="h-7 w-7 text-pink-400" /> Direção, física de veículos e dano
        </h2>
        <p>
          Pequenas mas importantes mudanças no sistema de veículos aparecem nos trailers. O Trailer 2 mostra um
          acidente em alta velocidade em que o capô do veículo se deforma de forma localizada — não é mais o modelo
          genérico de "carro pegando fogo" que GTA V usava. Outras cenas mostram interação com vegetação (carros
          passando por arbustos com resposta física plausível), com água (perseguições aquáticas em pântanos e
          praias) e com fauna (encontros com jacarés que reagem ao impacto de veículo).
        </p>
        <p>
          Não há comunicação oficial sobre o sistema de direção em si — se há mudança de feeling, se ficou mais
          arcade ou mais simulação, se há tipos novos de veículos. O que dá para inferir do material visual é que a
          dinâmica de tráfego ficou mais densa, com cidades parecendo significativamente mais cheias que Los Santos
          em GTA V. Para um jogo cuja identidade central inclui perseguições de carro, isso é um diferencial técnico
          relevante: significa que a IA do tráfego está rodando em volume maior simultaneamente, o que historicamente
          é um dos maiores desafios técnicos de jogos de mundo aberto urbano.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cloud className="h-7 w-7 text-pink-400" /> Clima, ciclo dia/noite e nuvens volumétricas
        </h2>
        <p>
          Os trailers mostram condições climáticas que vão de claras a tempestades tropicais intensas. Particularmente
          impressionante é a representação de nuvens volumétricas — não mais o pano azul com sprites de nuvens em 2D
          que jogos antigos usavam, mas estruturas tridimensionais reais que se formam, se movem e interagem com a
          iluminação. RDR2 introduziu nuvens volumétricas para a Rockstar; GTA VI parece levar isso a um patamar
          significativamente mais alto, com formação dinâmica de sistemas de tempestade.
        </p>
        <p>
          O ciclo dia/noite também aparece com transições suaves e tons que mudam ao longo do dia. Cenas em
          amanhecer, meio-dia, pôr do sol e madrugada têm paletas distintas, e a iluminação reage de forma plausível
          — sombras se alongam, reflexos em água mudam, ambiente urbano ganha vida noturna com letreiros e
          iluminação artificial. Para jogadores que apreciam o efeito atmosférico em mundo aberto, esse pilar técnico
          parece ter recebido investimento significativo.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="text-2xl font-bold mt-10 mb-4">Pilares do gameplay confirmados nos trailers</h2>
        <GtaFeatureGrid features={[
          { icon: Users, title: "Dupla protagonista", desc: "Lucia e Jason atuam em conjunto — troca contextual entre os dois em assaltos, fugas e cenas sociais.", accent: "pink" },
          { icon: Car, title: "Dano localizado de veículos", desc: "Capôs, portas e laterais deformam de forma específica conforme o impacto, substituindo o modelo genérico de GTA V.", accent: "amber" },
          { icon: Cloud, title: "Nuvens volumétricas 3D", desc: "Sistemas de tempestade tropical formados dinamicamente, com iluminação reativa em tempo real.", accent: "cyan" },
          { icon: MessageSquare, title: "IA de NPCs expandida", desc: "Multidões filmando com celulares, reações individuais, comportamento social diverso em clubes, praias e eventos.", accent: "violet" },
          { icon: Waves, title: "Mundo aquático ampliado", desc: "Lanchas, jet skis, mergulho, jacarés reativos em pântanos e rotas navegáveis longas em Leonida Keys.", accent: "cyan" },
          { icon: Smartphone, title: "Redes sociais internas", desc: "Personagens gravam e postam vídeos dentro do jogo. Sátira à cultura de influencer integrada ao mundo.", accent: "pink" },
          { icon: Wifi, title: "Single-player no dia 1", desc: "Rockstar confirmou que GTA VI lança em 19/11/2026 como experiência exclusivamente single-player. Novo modo online chega em janela pós-lançamento ainda não anunciada.", accent: "emerald" },
          { icon: Cpu, title: "Densidade urbana inédita", desc: "Muito mais NPCs, veículos e detalhes ambientais simultâneos que Los Santos em GTA V.", accent: "violet" },
        ]} />

        <h2 className="text-2xl font-bold mt-10 mb-4">Mecânicas confirmadas (resumo)</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-pink-500/20">
          <table className="w-full text-sm bg-card table-fixed">
            <thead>
              <tr className="bg-pink-500/10 text-pink-200">
                <th className="w-1/4 text-left py-3 px-4 font-bold">Mecânica</th>
                <th className="w-1/5 text-left py-3 px-4 font-bold">Fonte</th>
                <th className="w-[55%] text-left py-3 px-4 font-bold">Detalhe verificado</th>
              </tr>
            </thead>
            <tbody>
              {[
                { mec: "Dupla protagonista (Lucia + Jason)", fonte: "Trailer 1 e 2", det: "Casal aparece em conjunto em assaltos, fugas e cenas sociais. Sistema de troca contextual entre os dois personagens." },
                { mec: "Dano localizado de veículos", fonte: "Trailer 2", det: "Capôs, portas e laterais se deformam de forma específica conforme o impacto, substituindo o modelo genérico de GTA V." },
                { mec: "Nuvens volumétricas dinâmicas", fonte: "Trailer 1 e 2", det: "Sistemas de tempestade tropical 3D com formação orgânica e iluminação reativa em tempo real." },
                { mec: "IA de NPCs expandida", fonte: "Trailer 2", det: "Multidões filmando com celulares, reações individuais, comportamento social diverso em clubes, praias e eventos." },
                { mec: "Mundo aquático ampliado", fonte: "Trailer 2", det: "Lanchas, jet skis, mergulho com snorkel, jacarés reativos em pântanos e rotas navegáveis longas." },
                { mec: "Redes sociais fictícias internas", fonte: "Trailer 2", det: "Personagens gravam e postam vídeos dentro do jogo; sátira da cultura de influencer integrada ao mundo." },
                { mec: "Lançamento single-player-only", fonte: "Rockstar Newswire (jun/2026)", det: "GTA VI chega em 19/11/2026 exclusivamente como jogo single-player. Novo modo online chega em janela posterior, ainda sem data anunciada." },
              ].map((r, i) => (
                <tr key={r.mec} className={`border-t border-border/60 ${i % 2 ? "bg-muted/20" : ""}`}>
                  <td className="py-3 px-4 font-semibold break-words">{r.mec}</td>
                  <td className="py-3 px-4 text-xs text-pink-300 break-words">{r.fonte}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground break-words">{r.det}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>



        <h2 className="text-2xl font-bold mt-10 mb-4">Mundo aquático: pântanos, praias e mar</h2>
        <p>
          O Trailer 2 dedica tempo significativo ao ambiente aquático, o que faz sentido dado que Leonida é inspirada
          na Flórida — um estado com costa atlântica, costa do Golfo, Everglades pantanosos e arquipélago de Keys. São
          visíveis: lanchas de alta velocidade em perseguição, mergulho com snorkel em recifes, jacarés em pântanos,
          aves marinhas, hidrofones e jet skis. A Rockstar parece ter expandido significativamente o sistema aquático
          em relação a GTA V, onde a maior parte da experiência era passiva (oceano como cenário).
        </p>
        <p>
          Para o gameplay, isso abre vetores novos de missão e exploração. Missões de fuga via água, transporte de
          contrabando por barco, mergulho para coletar itens submersos, perseguições em jet ski. Essas são mecânicas
          que outras franquias de mundo aberto (Just Cause, Far Cry) exploraram, mas que a Rockstar nunca havia
          investido com profundidade. A escolha de Leonida como cenário parece ser, em parte, justificativa narrativa
          para investir nesse pilar de gameplay.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Redes sociais fictícias dentro do jogo</h2>
        <p>
          Uma das revelações conceituais mais interessantes do Trailer 2 é a presença de redes sociais fictícias
          integradas ao mundo. Personagens aparecem filmando situações cotidianas para postar em plataformas internas
          do jogo, NPCs reagem a essas situações como espectadores online, e parte do humor satírico de GTA VI parece
          ser dirigido à cultura de influenciadores e à economia da atenção. Não há detalhes técnicos sobre como isso
          funciona como mecânica — se o jogador interage com essas redes via celular do personagem, se há sistema de
          "viralização" de ações, se há reputação online — mas a presença conceitual é clara.
        </p>
        <p>
          Para a tradição satírica da Rockstar, esse é um terreno fértil. GTA V trabalhou a sátira da bolha de Wall
          Street e da cultura californiana de auto-ajuda. GTA VI parece mirar a cultura de redes sociais e
          influencers — um alvo que está no centro da experiência cotidiana de jogadores em 2026. A integração dessa
          camada como mecânica de jogo (e não apenas como cenário) seria uma evolução real do que a franquia
          historicamente fez.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Modo história: estrutura narrativa e progressão</h2>
        <p>
          A Rockstar não detalhou estrutura específica de missões — quantas missões principais, como funciona a
          progressão da história, se há ramificações narrativas significativas. O que é razoável esperar, com base em
          GTA V e RDR2, é uma campanha de 40 a 60 horas para conclusão da história principal, com 100 horas ou mais
          para completar atividades secundárias. RDR2 tinha 100+ missões nomeadas e dezenas de atividades paralelas;
          GTA V tinha cerca de 80 missões principais. GTA VI deve ficar nessa mesma faixa, possivelmente expandida.
        </p>
        <p>
          A dinâmica de dupla entre Lucia e Jason sugere que algumas missões serão "de dupla obrigatória" (com troca
          contextual entre os dois) e outras serão "solo" (escolha do jogador entre qual personagem). Em GTA V, missões
          solo eram a maioria; em GTA VI, a expectativa é que missões de dupla sejam significativamente mais comuns
          — coerente com a coreografia mostrada nos trailers.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Online: single-player-only no dia 1, novo modo depois</h2>
        <p>
          Rockstar e Take-Two confirmaram em junho de 2026, ao abrir a pré-venda, que <strong>GTA VI lança em 19 de
          novembro como experiência exclusivamente single-player</strong>. Não há GTA Online no dia 1. Um novo modo
          online é esperado em algum momento após o lançamento, no mesmo padrão que aconteceu com GTA V em 2013 (o
          Online chegou semanas depois), mas <strong>a Rockstar não anunciou data</strong>. Quem pré-encomenda hoje
          está pagando pela campanha da história — nada mais.
        </p>
        <p>
          Essa mudança de comunicação em relação a 2025 (quando analistas de Wall Street trabalhavam com hipótese de
          lançamento simultâneo) parece refletir uma decisão da editora de proteger o lançamento da campanha de
          problemas de servidor semelhantes aos que atormentaram GTA V em 2013. O modelo comercial do novo online
          ainda não foi detalhado; Shark Cards e microtransações cosméticas seguem sendo a expectativa razoável dado
          o histórico da franquia. Até lá, GTA VI é, na prática, um lançamento single-player puro — algo que a
          Rockstar não fazia com essa clareza desde Red Dead Redemption 2 em outubro de 2018.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">O que NÃO foi confirmado</h2>
        <p>
          Para deixar claro, há aspectos importantes do gameplay que <strong>não</strong> foram confirmados oficialmente
          pela Rockstar e que aparecem em rumores não verificados. Não foi confirmado: número exato de armas no jogo,
          existência de sistema de crafting, mecânicas detalhadas de habilidades do personagem (RPG-like progression),
          minigames específicos, customização profunda de veículos, sistema de hacking, ou apartamento/imóveis
          compráveis no modo história. Tudo isso pode existir — mas tudo isso são suposições baseadas em vazamentos
          não oficiais de 2022 ou em "padrões da franquia", não em comunicação oficial.
        </p>
        <p>
          A Rockstar tradicionalmente mantém segredo sobre detalhes específicos até muito perto do lançamento. Mesmo
          depois do trailer de lançamento e da prévia da Edge, sistemas como progressão de habilidades, economia e
          personalização de veículos continuam sem explicação oficial completa. As análises completas da imprensa
          devem sair perto de 19 de novembro.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">GTA V x GTA VI: o que muda na prática</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-pink-500/20">
          <table className="w-full text-sm bg-card">
            <thead>
              <tr className="bg-pink-500/10 text-pink-200">
                <th className="text-left py-3 px-4">Aspecto</th>
                <th className="text-left py-3 px-4">GTA V (2013)</th>
                <th className="text-left py-3 px-4">GTA VI (2026)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border/60"><td className="py-3 px-4 font-semibold">Protagonistas</td><td className="py-3 px-4">Três, em arcos separados</td><td className="py-3 px-4">Dupla que age junta</td></tr>
              <tr className="border-t border-border/60 bg-muted/20"><td className="py-3 px-4 font-semibold">Mapa</td><td className="py-3 px-4">Los Santos e Blaine County</td><td className="py-3 px-4">Leonida, cerca de 2x maior (prévia)</td></tr>
              <tr className="border-t border-border/60"><td className="py-3 px-4 font-semibold">Interiores</td><td className="py-3 px-4">Poucos acessíveis</td><td className="py-3 px-4">Muito mais lugares para entrar (prévia)</td></tr>
              <tr className="border-t border-border/60 bg-muted/20"><td className="py-3 px-4 font-semibold">Polícia</td><td className="py-3 px-4">Viaturas, helicópteros, bloqueios</td><td className="py-3 px-4">Soma cães K9 e faixas de pregos mais usadas</td></tr>
              <tr className="border-t border-border/60"><td className="py-3 px-4 font-semibold">Online</td><td className="py-3 px-4">GTA Online semanas depois</td><td className="py-3 px-4">Novo online sem data</td></tr>
              <tr className="border-t border-border/60 bg-muted/20"><td className="py-3 px-4 font-semibold">Instalação</td><td className="py-3 px-4">Cerca de 100 GB (versão atual)</td><td className="py-3 px-4">Até 212 GB</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Confirmado x rumor</h2>
        <ul>
          <li><strong>Confirmado:</strong> data, plataformas, dupla Jason e Lucia, pré-carregamento em 10/11, até 212 GB, cães K9 e campanha sem online no dia 1.</li>
          <li><strong>Demonstrado na prévia:</strong> mapa cerca de 2x maior, 600 mil animações, personalidade dos NPCs e muito mais interiores.</li>
          <li><strong>Ainda é rumor:</strong> versão de PC em 2027, quantidade de missões, preço do online e imóveis para comprar na campanha.</li>
        </ul>



        <EditorialTake category="geek">
          <p>
            Para mim, o salto técnico mais relevante mostrado nos trailers não é o gráfico em si — embora GTA VI seja
            visualmente impressionante. É a densidade de mundo. O número de pessoas na tela, a variedade de atividades
            ambientes, a quantidade de detalhes que parecem reagir individualmente: isso é o que separa um mundo aberto
            "vivo" de um mundo aberto "vistoso". GTA V já era referência nesse quesito em 2013, RDR2 elevou a régua em
            2018. GTA VI parece estar elevando de novo. Se a Rockstar entregar essa densidade rodando estável em PS5 e
            Xbox Series X (e ajustar bem para Series S), o jogo se torna automaticamente referência técnica para a
            próxima década de mundo aberto urbano. Esse, mais do que qualquer outra mecânica específica, é o teste real
            de novembro.
          </p>
        </EditorialTake>
        <ArticleSources
          category="geek"
          sources={[
            { title: "Rockstar Games — GTA VI Trailer 1", url: "https://www.youtube.com/watch?v=QdBZY2fkU-0", publisher: "Rockstar Games", accessedAt: "Junho 2026" },
            { title: "Rockstar Games — GTA VI Trailer 2", url: "https://www.rockstargames.com/newswire", publisher: "Rockstar Games", accessedAt: "Junho 2026" },
            { title: "IGN — GTA VI gameplay analysis", url: "https://www.ign.com/games/grand-theft-auto-vi", publisher: "IGN", accessedAt: "Junho 2026" },
            { title: "Polygon — What GTA VI trailers reveal", url: "https://www.polygon.com/", publisher: "Polygon", accessedAt: "Junho 2026" },
            { title: "GameSpot — GTA VI mechanics breakdown", url: "https://www.gamespot.com/games/grand-theft-auto-vi/", publisher: "GameSpot", accessedAt: "Junho 2026" },
            { title: "GTA 6 Pre-Load Plans Get an Unexpected Change Ahead of Launch", url: "https://www.comingsoon.net/games/news/2217136-gta-6-pre-load-date-change", publisher: "ComingSoon", accessedAt: "Novembro 2026" },
            { title: "Watch the Official Grand Theft Auto VI Launch Trailer", url: "https://news.xbox.com/en-us/2026/10/23/watch-the-official-grand-theft-auto-vi-launch-trailer-explore-leonida-before-the-game-arrives-november-19/", publisher: "Xbox Wire", accessedAt: "Novembro 2026" },
            { title: "GTA 6's Biggest Gameplay Features Revealed in New Preview", url: "https://comicbook.com/gaming/news/gta-6s-biggest-gameplay-features-revealed-in-new-preview/", publisher: "ComicBook.com", accessedAt: "Novembro 2026" },
            { title: "GTA 6's police upgrades confirmed alongside new gameplay footage in South Park", url: "https://www.dexerto.com/gta/gta-6s-police-upgrades-confirmed-alongside-new-gameplay-footage-in-south-park-3422612/", publisher: "Dexerto", accessedAt: "Novembro 2026" },
            { title: "GTA 6: Everything we know so far", url: "https://www.gamesradar.com/gta-6-guide/", publisher: "GamesRadar+", accessedAt: "Novembro 2026" },
          ]}
        />

        <RelatedPosts currentSlug={SLUG} />
        <CommentSection postId={SLUG} postTitle={TITLE} category="geek" />
      </div>
    </article>
  );
};

export default GtaViMecanicasGameplay2026;

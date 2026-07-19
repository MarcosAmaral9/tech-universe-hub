import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Sword, BookOpen, Star, Map, Mountain, Zap } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import NewsletterSignup from "@/components/NewsletterSignup";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";
// ⚠️ Adicionar o arquivo ghost-of-yotei-guia-completo.webp em src/assets/
import heroImg from "@/assets/ghost-of-yotei-guia-completo.webp";

const SLUG = "ghost-of-yotei-guia-completo";
const TITLE =
  "Ghost of Yōtei — Guia Completo: Atsu, o Hokkaido de 1603, o Monte Yōtei e Tudo Que Você Precisa Saber Sobre o Sucessor de Tsushima";

const GhostOfYoteiGuia = () => {
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
            Ghost of Yōtei · Sucker Punch · PS5 · Samurai · Hokkaido
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
            11 de Julho, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            18 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="11 de Julho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          src={heroImg}
          alt="Ghost of Yōtei guia completo Atsu Hokkaido 1603 Sucker Punch PS5"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Anunciado no PlayStation State of Play de <strong>24 de setembro de 2024</strong>,{" "}
          <strong>Ghost of Yōtei</strong> é o sucessor espiritual de <em>Ghost of Tsushima</em>
          (2020) — desenvolvido pela mesma Sucker Punch Productions e publicado pela Sony
          Interactive Entertainment exclusivamente para <strong>PS5</strong>. O jogo abandona
          Jin Sakai e a ilha de Tsushima para apresentar <strong>Atsu</strong>, uma nova
          protagonista feminina, numa jornada ambientada em <strong>1603</strong> nas terras
          selvagens e nevadas do <strong>Hokkaido</strong> — chamado de{" "}
          <em>Ezo</em> pelos japoneses da época —, centrada em torno do imponente{" "}
          <strong>Monte Yōtei</strong>, vulcão real que domina a paisagem da ilha com seus
          1.898 metros de altitude. A mudança de cenário e protagonista é radical, mas a
          proposta central permanece: um jogo de samurai de mundo aberto que usa o Japão
          histórico como palco para um conflito pessoal intenso. Este guia cobre tudo que
          foi confirmado sobre o jogo, o rico contexto histórico do Hokkaido feudal e o
          que torna este cenário único dentro da franquia.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Mountain className="h-7 w-7 text-geek" />
          O Monte Yōtei: O Vulcão que Dá Nome ao Jogo
        </h2>
        <p>
          O nome do jogo não é apenas evocativo — refere-se a um vulcão real e ativo localizado
          no sudoeste de Hokkaido, a ilha mais ao norte do arquipélago japonês. O Monte Yōtei
          (羊蹄山, <em>Yōtei-zan</em>) é um estratovulcão com 1.898 metros de altitude,
          situado na Subprefeitura de Shiribeshi, próximo à cidade de Kutchan. Sua silhueta
          é tão perfeitamente cônica e simétrica que os habitantes locais o apelidam há séculos
          de <em>Ezo Fuji</em> — "o Monte Fuji de Hokkaido" — pela semelhança visual com o
          vulcão mais famoso do Japão, localizado na ilha de Honshu.
        </p>
        <p>
          Geologicamente, o Yōtei pertence ao Arco Vulcânico das Ilhas Curilas, uma cadeia
          de atividade sísmica e vulcânica que se estende do norte do Japão até a Península
          de Kamchatka, na Rússia. Sua última erupção confirmada por registros históricos
          ocorreu há aproximadamente 1.000 anos, mas o vulcão é classificado como ativo pelas
          autoridades geológicas japonesas. A cratera no topo tem cerca de 700 metros de
          diâmetro e é circundada por trilhas de escalada que os alpinistas modernos percorrem
          em cerca de cinco a seis horas de subida a partir da base — uma caminhada que revela
          gradualmente a paisagem de Hokkaido: florestas de carvalho e abetos na base,
          vegetação alpina no meio e rocha nua coberta de neve na cimeira durante boa parte
          do ano.
        </p>
        <p>
          Para a Sucker Punch, a escolha do Monte Yōtei como centro geográfico e narrativo
          do jogo é visualmente acertada pelos mesmos motivos que tornaram Tsushima um cenário
          tão memorável: uma paisagem com identidade visual fortíssima e imediatamente
          reconhecível, que funciona tanto como cenário de combate quanto como símbolo temático.
          Assim como a ilha de Tsushima no primeiro jogo representava um limite — o extremo do
          território japonês, o primeiro ponto de contato com a invasão estrangeira —, o Monte
          Yōtei em 1603 representa uma fronteira de outro tipo: o limite entre o Japão que se
          urbanizava e se unificava sob o novo shogunato Tokugawa e as terras do norte que
          ainda pertenciam a uma cultura completamente diferente.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-geek" />
          O Hokkaido de 1603: Um Mundo à Parte do Japão Feudal
        </h2>
        <p>
          A escolha do ano 1603 como período narrativo de <em>Ghost of Yōtei</em> não é
          arbitrária — é um dos momentos de maior inflexão da história japonesa. Em março
          de 1603, o general e senhor feudal Tokugawa Ieyasu recebeu do Imperador Go-Yōzai
          o título de <em>sei-i taishōgun</em> — Generalíssimo Subjugador dos Bárbaros —,
          formalmente inaugurando o Shogunato Tokugawa, também conhecido como período Edo
          (1603–1868). Essa data marca o fim do longo período de guerras civis japonesas
          conhecido como Sengoku Jidai ("Era dos Estados Combatentes"), que durou de meados
          do século XV até a unificação final sob Tokugawa. O Japão que emergia em 1603 era
          um país que acabava de ser reunificado após mais de um século de fragmentação e
          violência endêmica — um país que tentaria, nas décadas seguintes, isolar-se do
          mundo exterior através da política de <em>sakoku</em> (país fechado).
        </p>
        <p>
          Mas esse Japão unificado de 1603 não incluía o Hokkaido — e esta é a chave para
          entender por que o cenário é tão interessante. O Hokkaido era então chamado de
          <em>Ezo</em> (蝦夷) pelos japoneses, um nome também usado para se referir ao povo
          que habitava essas terras: os <strong>Ainu</strong>. Os Ainu são o povo indígena
          original de Hokkaido, do sul da ilha de Sacalina e das Ilhas Curilas — um grupo
          étnico, linguístico e culturalmente distinto dos japoneses (Wajin), com idioma
          próprio sem relação conhecida com o japonês, práticas espirituais animistas
          centradas no conceito de <em>kamuy</em> (divindades e espíritos presentes em
          animais, plantas, fenômenos naturais e objetos) e uma sociedade organizada em
          comunidades de caça, pesca e coleta, não em estruturas de Estado centralizadas
          como o shogunato japonês.
        </p>
        <p>
          A presença japonesa em Hokkaido em 1603 era geograficamente limitada à ponta sul
          da ilha — a Península de Oshima, hoje conhecida como a região onde fica a cidade
          de Hakodate — controlada pelo Clã Matsumae, o único domínio feudal japonês
          autorizado a operar na região de Ezo. O Clã Matsumae havia recebido do shogunato
          Toyotomi (predecessor do Tokugawa) o monopólio sobre o comércio com os Ainu em
          troca de administrar a fronteira norte do Japão. Essa relação comercial era
          estruturalmente desigual: os Ainu forneciam peixes, algas marinhas, peles e outros
          recursos naturais de Hokkaido em troca de arroz, lacas, sake e metais que o
          norte não produzia — e os termos de troca foram progressivamente manipulados pelos
          comerciantes japoneses ao longo do século XVII, gerando tensões crescentes que
          eventualmente resultariam em conflitos armados nas décadas seguintes.
        </p>
        <p>
          O interior de Hokkaido — onde o Monte Yōtei está localizado — em 1603 era
          território Ainu quase exclusivo. Florestas densas de abeto e carvalho, rios
          repletos de salmão (recurso central para a cultura Ainu), planícies cobertas de
          neve durante meses e a presença de ursos pardos (Ursus arctos yesoensis), chamados
          de <em>kimun kamuy</em> (divindade da montanha) pelos Ainu. Para Atsu, uma
          protagonista samurai navegando essas terras em 1603, o contexto seria de fronteira
          genuína: um lugar onde as regras do Japão feudal que ela conhece se dissolvem e
          onde a sobrevivência exige adaptar-se a um mundo que opera por lógicas completamente
          diferentes das do bushido e do shogunato.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          Atsu: Uma Nova Protagonista, Uma Nova História
        </h2>
        <p>
          A decisão da Sucker Punch de criar uma protagonista completamente nova em vez de
          continuar com Jin Sakai foi confirmada e explicada pelo estúdio no período de
          anúncio. A personagem se chama <strong>Atsu</strong> e é apresentada nos materiais
          de revelação como uma guerreira de katana com motivações próprias ainda não
          completamente reveladas — o trailer de anúncio do PlayStation State of Play de
          setembro de 2024 mostrou Atsu em paisagens nevadas de Hokkaido, em combate com
          inimigos e em momentos de contemplação diante do Monte Yōtei, sugerindo uma
          jornada tanto física quanto interior, no estilo narrativo que a franquia estabeleceu
          com Jin.
        </p>
        <p>
          A escolha de uma protagonista feminina é significativa dentro do contexto histórico
          e do universo da franquia. No Japão feudal, guerreiras existiam — as <em>onna-bugeisha</em>
          (女武芸者) eram mulheres de famílias samurai treinadas em armas, especialmente o
          naginata (uma arma de haste com lâmina curva), para defesa de castelos e domínios
          na ausência dos guerreiros masculinos. Figuras históricas como Tomoe Gozen —
          guerreira do período Heian que serviu ao senhor de guerra Minamoto no Yoshinaka
          no final do século XII e é descrita em crônicas do período como uma das melhores
          arqueiras e espadachins de seu tempo — demonstram que a presença feminina em
          contextos de combate, embora não fosse a norma, estava documentada na história
          japonesa. A escolha da Sucker Punch, portanto, não é anacronismo histórico —
          é uma amplificação dramática de uma possibilidade real dentro do período retratado.
        </p>
        <p>
          O que diferencia Atsu de Jin estruturalmente, além do gênero, é o contexto
          histórico radicalmente diferente. Jin era um samurai de clã estabelecido
          defendendo seu território contra uma invasão estrangeira — um conflito claro de
          invasor e defensor. Atsu navega um Hokkaido de 1603 onde as linhas de
          pertencimento são muito menos óbvias: ela é, por definição, alguém de fora
          das terras onde a história se passa, numa região que não é japonesa no sentido
          do shogunato que estava sendo estabelecido. Essa posição de outsider em território
          desconhecido sugere um conflito narrativo de natureza diferente do de Jin —
          menos sobre honra de clã e mais sobre identidade, pertencimento e o que
          significa ser guerreira num mundo sem as estruturas que definem o que um
          guerreiro deve ser.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Map className="h-7 w-7 text-geek" />
          Hokkaido vs. Tsushima: Por Que a Mudança de Cenário É Uma Decisão Ousada
        </h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full table-fixed border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4 w-1/4 break-words">Aspecto</th>
                <th className="text-left py-3 px-4 w-3/8 break-words">Ghost of Tsushima (1274)</th>
                <th className="text-left py-3 px-4 w-3/8 break-words">Ghost of Yōtei (1603)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Localização", "Ilha de Tsushima — extremo sul do Japão, entre Kyushu e a Coreia", "Hokkaido (Ezo) — extremo norte do Japão, fronteira com o mundo Ainu"],
                ["Período histórico", "Kamakura (1185–1333) — Japão feudal clássico com shogunato de Kamakura", "Início do período Edo — Japão recém-unificado por Tokugawa Ieyasu em 1603"],
                ["Conflito central", "Invasão estrangeira (Mongóis de Kublai Khan) vs. defensores japoneses", "Fronteira cultural entre o Japão Wajin e as terras Ainu do norte"],
                ["Clima / Paisagem", "Florestas de bambu, campos de flores, costas rochosas — clima temperado ameno", "Florestas subárticas, planícies nevadas, vulcões — clima subartico rigoroso"],
                ["Protagonista", "Jin Sakai — samurai masculino de clã nobre em crise de honra", "Atsu — guerreira de identidade e motivações ainda a serem reveladas"],
                ["Escala geográfica", "Ilha de ~708 km²", "Hokkaido tem 83.400 km² — mais de 100x maior que Tsushima"],
              ].map(([aspecto, tsushima, yotei], i) => (
                <tr key={i} className="border-t border-border">
                  <td className="py-3 px-4 font-semibold text-xs break-words">{aspecto}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs break-words">{tsushima}</td>
                  <td className="py-3 px-4 text-xs break-words text-geek/90">{yotei}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          A diferença de escala geográfica entre Tsushima e Hokkaido é, obviamente, não
          literal — nenhum jogo de mundo aberto recria um território de 83.000 km² com
          fidelidade geográfica integral. Mas a escala do território real informa a escala
          da ambição visual: o Hokkaido real tem uma diversidade de biomas concentrada que
          vai de florestas temperadas no sul a tundra e vegetação alpina no norte, de costas
          de mar de Okhotsk no nordeste a campos vulcânicos no interior. A Sucker Punch,
          que demonstrou em Tsushima a capacidade de criar ambientes de diversidade visual
          memorável dentro de uma área de jogo relativamente compacta, tem em Hokkaido
          material visual ainda mais variado com o qual trabalhar.
        </p>
        <p>
          O rigor climático de Hokkaido também é um dado factual que deve influenciar o
          design do jogo de formas que Tsushima não exigiu. A neve cobre o interior de
          Hokkaido por quatro a cinco meses por ano, e o Monte Yōtei tem neve no topo
          durante ainda mais tempo. Se a Sucker Punch incorporar ciclos climáticos reais
          ao design do mundo — como a neve cobrindo e descobrindo elementos do cenário,
          ou condições de tempestade afetando a visibilidade e o movimento — o resultado
          seria um mundo que muda de forma mais dinâmica do que os ambientes de Tsushima,
          onde a variação climática era presente mas menos extrema.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-geek" />
          O Que o Trailer Confirmou Sobre o Jogo
        </h2>
        <p>
          O trailer de anúncio exibido no PlayStation State of Play de setembro de 2024
          confirmou visualmente vários elementos importantes sobre o jogo, mesmo que
          informações detalhadas de gameplay ainda não tivessem sido reveladas publicamente
          até o momento desta publicação.
        </p>

        <div className="not-prose my-6 space-y-3">
          {[
            {
              titulo: "🗡️ Combate com katana em perspectiva em terceira pessoa",
              desc: "Diferente de Ghost of Tsushima, que usou câmera em terceira pessoa, o trailer de Yōtei mostrou Atsu em combate com câmera externa cinematográfica — confirmando a manutenção da perspectiva que tornou os duelos de GoT tão visuais e impactantes.",
            },
            {
              titulo: "❄️ Ambientação nevada predominante",
              desc: "As cenas do trailer mostraram consistentemente paisagens cobertas de neve, florestas de abeto sob geada e o Monte Yōtei ao fundo em condições de inverno — confirmando que o clima frio de Hokkaido é central à estética visual do jogo.",
            },
            {
              titulo: "🐻 Presença da fauna local de Hokkaido",
              desc: "O trailer incluiu imagens de animais que habitam Hokkaido, incluindo o que parece ser referência ao urso pardo local — coerente com o papel dos ursos na cultura Ainu como kimun kamuy (divindades da montanha).",
            },
            {
              titulo: "🌋 O Monte Yōtei como marco visual recorrente",
              desc: "O vulcão aparece em múltiplos planos do trailer, em diferentes distâncias e condições climáticas — funcionando claramente como o equivalente visual ao Castelo de Kaneda em Tsushima: um ponto de referência constante no horizonte.",
            },
            {
              titulo: "⚔️ Inimigos humanos armados com espadas e arcos",
              desc: "O combate mostrado no trailer envolveu oponentes humanos com armaduras e armas brancas — sugerindo que, assim como em Tsushima, o conflito principal não é contra criaturas fantásticas mas contra outros guerreiros com motivações próprias.",
            },
            {
              titulo: "🎮 Exclusivo PS5",
              desc: "Ghost of Yōtei foi anunciado como exclusivo de PlayStation 5 — sem versão PS4 confirmada — indicando que a Sucker Punch projetou o jogo para explorar as capacidades plenas do hardware atual, assim como fez com a Director's Cut de Tsushima.",
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

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          Os Ainu: O Povo que Define o Contexto de Yōtei
        </h2>
        <p>
          Qualquer jogo ambientado em Hokkaido em 1603 que ignore os Ainu seria historicamente
          desonesto — e a Sucker Punch demonstrou em <em>Ghost of Tsushima</em> que não tem
          interesse em produzir ficção histórica com lacunas desse porte. Os Ainu são o povo
          indígena de Hokkaido e parte das ilhas ao norte do Japão, com uma cultura material
          e espiritual riquíssima que não tem relação direta com a cultura japonesa — ao ponto
          de os linguistas classificarem o idioma Ainu como língua isolada, sem parentesco
          demonstrado com nenhuma outra língua conhecida.
        </p>
        <p>
          A espiritualidade Ainu é centrada no conceito de <em>kamuy</em> — seres divinos
          que habitam todas as coisas do mundo natural, de animais e plantas a fenômenos
          como o vento, o fogo e a água. O ritual de <em>iyomante</em> (cerimônia do urso),
          em que um urso pardo criado pela comunidade era sacrificado em ritual elaborado
          para liberar seu espírito de volta ao mundo divino, é uma das cerimônias mais
          documentadas e complexas da cultura Ainu. A pesca do salmão, central para a
          subsistência das comunidades, era acompanhada de rituais de agradecimento aos
          kamuy do rio. A estrutura social Ainu era organizada em <em>kotan</em> (aldeias),
          cada uma relativamente autônoma, sem uma estrutura estatal centralizada comparável
          ao shogunato japonês.
        </p>
        <p>
          O reconhecimento oficial dos Ainu como povo indígena do Japão pelo governo japonês
          só veio em junho de 2019, com a aprovação da Lei de Promoção da Cultura Ainu —
          um reconhecimento tardio mas significativo que chegou acompanhado de financiamento
          para preservação da língua e da cultura, que estão criticamente ameaçadas: estima-se
          que menos de algumas dezenas de falantes nativos fluentes de Ainu permaneçam vivos
          atualmente. Se a Sucker Punch incorporar os Ainu ao mundo de <em>Ghost of Yōtei</em>
          com o mesmo cuidado de representação que demonstrou com a cultura samurai em
          Tsushima — incluindo possíveis consultorias com representantes da comunidade Ainu
          contemporânea, como fez com consultores japoneses no primeiro jogo — o resultado
          poderia ser um dos retratos de cultura indígena mais ricos já produzidos num
          videogame mainstream.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          A Sucker Punch e a Responsabilidade do Legado
        </h2>
        <p>
          <em>Ghost of Tsushima</em> vendeu mais de 9 milhões de cópias, ganhou o Prêmio
          do Público no The Game Awards 2020 e foi um dos jogos mais falados de sua geração.
          Esse sucesso coloca a Sucker Punch numa posição de responsabilidade particular
          com <em>Ghost of Yōtei</em>: a expectativa do público é alta, o material histórico
          disponível é ainda mais rico e complexo do que o de Tsushima, e a decisão de mudar
          de protagonista após um personagem tão querido quanto Jin Sakai é um risco criativo
          real. Franquias de jogos raramente prosperam quando trocam protagonistas entre
          títulos — o histórico da indústria mostra que jogadores tendem a criar vínculos
          fortes com personagens específicos e resistem a substitutos, independentemente
          da qualidade.
        </p>
        <p>
          Por outro lado, a própria estrutura narrativa de <em>Ghost of Tsushima</em> chegou
          a uma conclusão relativamente definitiva que tornaria forçada a continuação direta
          da história de Jin. A decisão de criar Atsu em vez de prolongar Jin é
          artisticamente defensável — e historicamente, os melhores sucessores de franquias
          são aqueles que reinventam em vez de repetir. A Sucker Punch provou com a transição
          de Sly Cooper para inFamous e de inFamous para Ghost que é capaz de mudanças de
          escopo e gênero radicais sem perder qualidade de execução. Se essa capacidade se
          mantiver em Yōtei, o Hokkaido de 1603 tem tudo para ser um palco ainda mais
          memorável do que Tsushima.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">
            Você está animado com Ghost of Yōtei? 🌋
          </h3>
          <p className="text-muted-foreground">
            O que mais te chama atenção — o cenário, a protagonista ou o período histórico?
            Conta nos comentários! 👇
          </p>
        </div>
      </div>

      <EditorialTake
        category="geek"
        title="Análise do Marcos: Hokkaido em 1603 é o cenário mais interessante da série"
      >
        <p>
          Quando a Sucker Punch anunciou <em>Ghost of Yōtei</em> com Atsu no lugar de Jin,
          minha reação inicial foi ceticismo. Jin é um personagem bem construído, e abandoná-lo
          parecia um risco desnecessário. Mas quanto mais eu li sobre o Hokkaido de 1603 —
          a fronteira entre o Japão Tokugawa e as terras Ainu, o Monte Yōtei como marco
          geográfico, o contexto de um Japão recém-unificado que ainda não sabia o que fazer
          com seu extremo norte —, mais comecei a entender por que esse cenário é
          potencialmente mais rico do que Tsushima. O conflito de Tsushima era claro:
          invasores ruins, defensores heróicos, dilema de honra vs. eficiência. Yōtei parece
          propor algo mais ambíguo: uma protagonista num território que não pertence à sua
          cultura, numa época em que as linhas de "certo" e "errado" eram traçadas por quem
          tinha mais poder, não necessariamente por quem tinha razão. Se a Sucker Punch
          executar esse potencial com o mesmo cuidado de Tsushima, <em>Ghost of Yōtei</em>
          pode ser ainda melhor do que seu predecessor.
        </p>
      </EditorialTake>

      <ArticleSources
        category="geek"
        sources={[
          {
            title: "Ghost of Yōtei — Anúncio Oficial PlayStation",
            url: "https://www.playstation.com/en-us/games/ghost-of-yotei/",
            publisher: "Sony Interactive Entertainment",
            accessedAt: "Julho 2026",
          },
          {
            title: "Monte Yōtei — Informações Geográficas",
            url: "https://www.britannica.com/place/Yotei",
            publisher: "Encyclopædia Britannica",
            accessedAt: "Julho 2026",
          },
          {
            title: "Povo Ainu — História e Cultura",
            url: "https://www.britannica.com/topic/Ainu",
            publisher: "Encyclopædia Britannica",
            accessedAt: "Julho 2026",
          },
          {
            title: "Lei de Promoção da Cultura Ainu — Governo do Japão",
            url: "https://www.kantei.go.jp/jp/singi/ainu/index.html",
            publisher: "Governo do Japão",
            accessedAt: "Julho 2026",
          },
          {
            title: "Shogunato Tokugawa — Britannica",
            url: "https://www.britannica.com/topic/Tokugawa-period",
            publisher: "Encyclopædia Britannica",
            accessedAt: "Julho 2026",
          },
          {
            title: "Sucker Punch Productions — PlayStation Studios",
            url: "https://www.playstation.com/en-us/corporate/about/studios/sucker-punch-productions/",
            publisher: "Sony Interactive Entertainment",
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

export default GhostOfYoteiGuia;

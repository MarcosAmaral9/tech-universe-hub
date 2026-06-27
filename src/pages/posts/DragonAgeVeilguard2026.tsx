import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import { ArrowLeft, Clock, User, Calendar, Gamepad2, Star, Cpu, Trophy, AlertTriangle, ThumbsUp, ThumbsDown } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import ArticleSources from "@/components/ArticleSources";
import EditorialTake from "@/components/EditorialTake";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/dragon-age-veilguard-review-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const DragonAgeVeilguard2026 = () => {
  useEffect(() => {
    trackArticleRead("dragon-age-veilguard-review-2026", "Dragon Age: The Veilguard — A BioWare Voltou? Review Completo 2026", "geek");
  }, []);
  return (
  <article className="container py-8 max-w-4xl mx-auto">
    <BackNavigation category="geek" />
    <header className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <CategoryBadge category="geek" size="lg" />
        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">Games · RPG</span>
      </div>
      <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
        Dragon Age: The Veilguard — A BioWare Voltou? Review Completo 2026
      </h1>
      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
        <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
        <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />17 de Março, 2026</span>
        <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
      </div>
      <ShareWhatsApp />
      <AuthorBio category="geek" publishedAt="17 de Março, 2026" />
    </header>
    <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
      <img fetchpriority="high" loading="eager"
          decoding="async"
          src={heroImg} alt="Dragon Age: The Veilguard — review 2026" className="w-full h-full object-cover" />
    </div>
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <p className="lead text-xl text-muted-foreground">
        Dez anos após Dragon Age: Inquisition, a BioWare lançou <strong>Dragon Age: The Veilguard</strong> em outubro de 2024. O jogo chegou depois de um desenvolvimento turbulento de quase uma década, múltiplas mudanças de direção criativa e a saída de veteranos importantes do estúdio. O resultado foi um jogo que dividiu a comunidade — e este é um balanço honesto passados meses do lançamento.
      </p>

      <div className="not-prose my-8 p-5 bg-gradient-to-br from-purple-500/10 to-background rounded-xl border border-purple-500/30">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><Gamepad2 className="h-5 w-5 text-purple-400" />Ficha Técnica</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          {[
            ["Desenvolvedor", "BioWare"],
            ["Publicador", "EA"],
            ["Lançamento", "31/10/2024"],
            ["Gênero", "RPG de Ação"],
            ["Plataformas", "PC, PS5, Xbox Series X|S"],
            ["Preço 2026", "~R$ 150–200 (Steam/EA App)"],
          ].map(([k, v]) => (
            <div key={k}><div className="text-xs text-muted-foreground">{k}</div><div className="font-semibold">{v}</div></div>
          ))}
        </div>
      </div>

      <AdLeaderboard className="my-8" />

      <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
        <Star className="h-7 w-7 text-purple-400" />O Que Funcionou
      </h2>
      <p>The Veilguard foi bem recebido pela crítica especializada — Metacritic PC: 83, PS5: 82 — com elogios específicos ao combate e ao design visual. A BioWare entregou um sistema de combate em tempo real fluido, com habilidades especializáveis e cooperação com os companheiros de forma mais dinâmica do que em Inquisition.</p>
      <p>Os companheiros — o coração emocional de qualquer RPG da BioWare — foram descritos como bem escritos individualmente, com arcos pessoais que funcionam. Bellara, Harding e Neve foram os mais elogiados pelos jogadores. Cada companheiro tem uma missão de lealdade própria que explora sua história e transforma o relacionamento com Rook de forma genuína.</p>
      <p>Visualmente, The Veilguard é deslumbrante. Os ambientes de Thedas são os mais belos já renderizados na franquia, com iluminação de alto nível e design de personagens detalhado. Locais como a Costa Élfica e as Profundezas do Tevinter demonstram o cuidado visual da equipe de arte — e em 4K com ray tracing, o jogo compete com os melhores da geração.</p>
      <p>A acessibilidade também merece menção. The Veilguard oferece um dos sistemas de personalização mais completos da indústria — de opções de gênero e identidade para Rook até dezenas de configurações de dificuldade e auxílio visual. Isso ampliou o público sem comprometer a experiência core.</p>

      <div className="not-prose my-8 grid md:grid-cols-2 gap-5">
        {[
          {
            icon: <ThumbsUp className="h-5 w-5 text-green-400" />,
            titulo: "Pontos Fortes",
            cor: "border-green-500/30 bg-green-500/5",
            itens: [
              "Combate fluido e satisfatório em tempo real",
              "Companheiros com arcos pessoais bem construídos",
              "Visual deslumbrante — melhor da franquia",
              "Excelente personalização de personagem e acessibilidade",
              "Performance técnica sólida no lançamento",
              "Trilha sonora de Hans Zimmer e Lorne Balfe",
            ]
          },
          {
            icon: <ThumbsDown className="h-5 w-5 text-red-400" />,
            titulo: "Pontos Fracos",
            cor: "border-red-500/30 bg-red-500/5",
            itens: [
              "Profundidade de RPG reduzida frente aos anteriores",
              "Sem importação significativa de saves de Inquisition",
              "Tom oscilante — sério e casual de forma inconsistente",
              "Pouco peso das escolhas no arco principal",
              "Narrativa global mais genérica que Origins",
              "Fãs de longa data sentiram herança mal honrada",
            ]
          }
        ].map(({ icon, titulo, cor, itens }) => (
          <div key={titulo} className={`rounded-xl border p-5 ${cor}`}>
            <h3 className="font-bold flex items-center gap-2 mb-3">{icon}{titulo}</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {itens.map(item => <li key={item}>• {item}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <AdInArticle />

      <h2 className="text-2xl font-bold mt-10 mb-4">O Que Desapontou — A Visão dos Fãs Veteranos</h2>
      <p>A comunidade de fãs de longa data da franquia teve críticas mais duras. Os principais pontos:</p>
      <ul>
        <li><strong>Profundidade de RPG reduzida:</strong> em comparação com Origins (2009) e mesmo Inquisition, as escolhas têm menos peso. O jogo é mais linear do que os anteriores, com menos ramificações narrativas reais baseadas nas decisões do jogador.</li>
        <li><strong>Importação de saves anterior não disponível:</strong> diferente de Dragon Age Keep (que permitia definir o estado do mundo anterior ao jogar Inquisition), Veilguard não incorporou decisões dos jogos anteriores de forma significativa. Hawke, o Inquisitor e o Warden são mencionados de passagem — não como consequências reais de escolhas passadas.</li>
        <li><strong>Tom inconsistente:</strong> alguns críticos notaram que o jogo oscilava entre drama sério e leveza casual de forma que quebrava a imersão em momentos-chave. Em cenas de alto impacto emocional, o humor deslocado gerou reações negativas nos fóruns.</li>
        <li><strong>Loghain e a ausência de peso narrativo:</strong> fãs de Origins sentiram que o jogo não honrou adequadamente a herança narrativa da franquia. Figuras e eventos marcantes de títulos anteriores são tratados superficialmente.</li>
        <li><strong>Solas e a conclusão da saga:</strong> o vilão estabelecido em Inquisition como o Dread Wolf retorna, mas para muitos fãs o arco de conclusão não honrou a complexidade que o personagem acumulou ao longo de anos de expansões e DLCs.</li>
      </ul>

      <AdRectangle className="my-8" />

      <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
        <Cpu className="h-7 w-7 text-purple-400" />Performance e PC
      </h2>
      <p>The Veilguard foi elogiado pelo estado técnico no lançamento — raro para um AAA em 2024. O jogo rodava bem na maioria dos PCs com configuração média, sem os problemas de launch que afetaram jogos como The Last of Us Parte I no PC.</p>
      <div className="not-prose my-4 grid md:grid-cols-2 gap-4">
        <div className="bg-card rounded-xl border border-border p-5">
          <h3 className="font-bold mb-3">Mínimo</h3>
          <ul className="text-sm text-muted-foreground space-y-1.5">
            <li>🖥️ GPU: RX 5700 / RTX 2070</li>
            <li>⚡ CPU: Ryzen 5 3600 / Core i7-8700</li>
            <li>💾 RAM: 16 GB</li>
            <li>💿 SSD: 100 GB</li>
          </ul>
        </div>
        <div className="bg-card rounded-xl border border-purple-500/20 p-5">
          <h3 className="font-bold mb-3 text-purple-400">Recomendado</h3>
          <ul className="text-sm text-muted-foreground space-y-1.5">
            <li>🖥️ GPU: RX 6800 XT / RTX 3080</li>
            <li>⚡ CPU: Ryzen 7 5800X</li>
            <li>💾 RAM: 16 GB</li>
            <li>💿 SSD NVMe: 100 GB</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">O Contexto do Desenvolvimento Turbulento</h2>
      <p>Entender The Veilguard exige entender o que a BioWare viveu na última década. Após Mass Effect: Andromeda (2017) e Anthem (2019) — dois lançamentos considerados decepções comerciais e críticas — o estúdio sofreu demissões em massa e perdeu desenvolvedores sêniores que construíram a identidade da empresa.</p>
      <p>The Veilguard passou por pelo menos duas reinvenções completas: começou como um multiplayer online chamado "Joplin", foi cancelado, e renasceu como um RPG single-player mais focado. A mudança de liderança criativa durante o desenvolvimento deixou marcas visíveis no produto final — áreas narrativas que parecem não se conectar completamente, sistemas que existem em paralelo sem verdadeira integração.</p>
      <p>O fato de o jogo ter chegado razoavelmente coeso, com combate funcional e companheiros carismáticos, é em si um feito considerável dada a turbulência. Mas também explica por que os fãs sentiram falta da ambição narrativa que definiu Origins e a expansão Trespasser de Inquisition.</p>

      <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
        <Trophy className="h-7 w-7 text-purple-400" />Vale a Pena em 2026?
      </h2>
      <p>Dragon Age: The Veilguard é um bom jogo de ação-RPG que não é um grande Dragon Age. Se você quer entrar na franquia pela primeira vez, é uma porta de entrada visualmente deslumbrante e acessível. Se você é fã de Origins e Inquisition esperando aquela profundidade narrativa épica, prepare as expectativas.</p>
      <p>Em 2026, o jogo pode ser encontrado por R$ 100–150 em promoções da EA e da Steam. A esse preço, com 40–60 horas de conteúdo sólido, é uma compra razoável para quem aprecia o gênero. O modo de dificuldade pode ser ajustado livremente, a performance é boa e os companheiros entregam momentos genuinamente emocionantes em suas missões individuais.</p>
      <p>Para os fãs de longa data, a recomendação é diferente: jogue sabendo que é uma nova direção, não uma continuação fiel do legado de Origins. Se a expectativa for por um RPG moderno competente com world-building rico e combate fluido, The Veilguard entrega. Se a expectativa for pelo retorno da BioWare dos anos de ouro — prepare-se para decepções pontuais, mesmo que o todo seja agradável.</p>

      <div className="not-prose my-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl flex gap-3">
        <AlertTriangle className="h-5 w-5 text-yellow-400 shrink-0 mt-0.5" />
        <div className="text-sm text-muted-foreground">
          <strong className="text-foreground">Nota sobre o futuro da franquia:</strong> em 2026, a EA não anunciou oficialmente Dragon Age 5. O futuro da BioWare como estúdio independente dentro da EA permanece incerto após a recepção mista de Veilguard, embora o estúdio continue operando e desenvolvendo novo conteúdo para o jogo.
        </div>
      </div>
    
      <h2 className="text-2xl font-bold mt-10 mb-4">A Reação da Comunidade de Fãs de Longa Data</h2>
      <p>
        Para jogadores que acompanham a franquia Dragon Age desde Origins em 2009, The Veilguard representa mudança significativa de tom e estrutura narrativa que gerou reações genuinamente divididas. Fóruns dedicados à franquia mostram debate intenso entre quem aprecia a acessibilidade e qualidade técnica do título mais recente versus quem sente que a essência sombria e moralmente complexa que definiu Origins foi diluída em favor de público mais amplo e casual.
      </p>
      <p>
        Esse debate reflete tensão mais ampla na indústria de RPGs ocidentais sobre como equilibrar acessibilidade comercial com profundidade que satisfaça veteranos do gênero. A BioWare, ao longo de sua história, alternou entre essas prioridades de formas diferentes em cada título — e The Veilguard representa o ponto mais recente dessa negociação contínua entre ambição artística e viabilidade comercial num mercado AAA cada vez mais competitivo.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">O Futuro Incerto da BioWare Após Veilguard</h2>
      <p>
        A recepção mista de The Veilguard, combinada com o histórico recente desafiador do estúdio incluindo as dificuldades de Mass Effect: Andromeda e Anthem, levanta questões legítimas sobre a trajetória futura da BioWare dentro do portfólio da Electronic Arts. Embora a EA não tenha feito anúncios oficiais sobre o status de longo prazo do estúdio, analistas da indústria acompanham de perto métricas de vendas e engajamento de Veilguard como indicador potencial de decisões futuras de investimento.
      </p>
      <p>
        Para fãs que desejam ver a BioWare continuar produzindo RPGs no universo de Thedas, o desempenho comercial sustentado de The Veilguard ao longo de 2026 será fator determinante. A história da indústria de games mostra precedentes tanto de estúdios que se recuperaram de recepções mistas com títulos subsequentes mais bem-sucedidos, quanto de casos onde a EA optou por redirecionar recursos para outros projetos após avaliação de viabilidade comercial de longo prazo.
      </p>
    
      <h2 className="text-2xl font-bold mt-10 mb-4">Comparando as Diferentes Eras Criativas da Franquia Dragon Age</h2>
      <p>
        Analisando Dragon Age como franquia completa, fica evidente que cada título principal representou direção criativa significativamente distinta sob diferentes lideranças dentro da BioWare. Origins (2009) priorizou tom sombrio e escolhas moralmente ambíguas inspiradas fortemente em Baldur's Gate clássico. Dragon Age II (2011) experimentou estrutura narrativa mais focada mas recebeu críticas por escala reduzida. Inquisition (2014) expandiu para mundo aberto com sucesso crítico e comercial considerável. The Veilguard representa a quarta direção distinta, priorizando acessibilidade e combate em tempo real sobre profundidade tática anterior.
      </p>
      <p>
        Essa falta de consistência direcional ao longo de quatro títulos principais — em contraste com franquias como Mass Effect, que manteve identidade mais coesa entre suas entradas originais — pode explicar parte da dificuldade da BioWare em construir base de fãs unificada que aprecie consistentemente cada nova entrada na série. Veteranos da franquia frequentemente preferem entradas específicas de forma quase mutuamente exclusiva, fenômeno menos comum em outras franquias de RPG com direção criativa mais estável ao longo do tempo.
      </p>
    
      <h2 className="text-2xl font-bold mt-10 mb-4">Conclusão</h2>
      <p>
        The Veilguard, em 2026, representa capítulo controverso mas comercialmente relevante na história de Dragon Age. Independentemente de onde você se posiciona no debate sobre acessibilidade versus profundidade narrativa tradicional, o jogo demonstra capacidade técnica considerável da BioWare mesmo em meio a desafios organizacionais significativos enfrentados pelo estúdio nos últimos anos. O futuro da franquia permanece incerto, mas a base de jogadores que apreciou genuinamente esta nova direção garante pelo menos discussão contínua sobre os próximos passos possíveis para o universo de Thedas.
      </p>
    
      <p>
        Seja qual for o caminho futuro da franquia, The Veilguard já garantiu seu lugar como ponto de discussão obrigatório em qualquer análise retrospectiva sobre a evolução — e as tensões internas — de uma das séries de RPG mais influentes da história da BioWare.
      </p>
    
      <p>
        Os próximos meses e anos vão revelar se essa nova direção criativa consegue conquistar definitivamente uma base de fãs sustentável, ou se a BioWare precisará reconsiderar sua abordagem para honrar adequadamente o legado que tornou Dragon Age uma das franquias de RPG mais queridas de sua geração.
      </p>
    
      <p>
        Por enquanto, resta acompanhar de perto os números de vendas contínuas e o engajamento da comunidade ao longo dos próximos meses de 2026.
      </p>
    
      <p>
        A história de Dragon Age, afinal, sempre foi marcada por reinvenções e debates apaixonados entre sua comunidade de fãs — e The Veilguard certamente não será exceção a essa tradição estabelecida ao longo de mais de quinze anos de existência da franquia.
      </p>
    
      <p>
        Que essa próxima fase traga clareza sobre os planos definitivos da BioWare e da EA para o futuro deste universo tão estimado por gerações de jogadores ao redor do mundo.
      </p>
    </div>

    <EditorialTake category="geek" title="Análise: Dragon Age precisa decidir o que quer ser">
      <p>The Veilguard é um jogo em conflito consigo mesmo — e isso fica evidente em cada escolha de design. A BioWare tentou modernizar Dragon Age tornando o combate mais ágil, a acessibilidade mais ampla e o tom mais palatável para um público casual. Em partes, funcionou. O combate é genuinamente satisfatório, e os companheiros têm momentos que lembram o melhor da empresa. Mas ao tentar atingir todo mundo, o jogo perdeu a identidade que fez a franquia especial. <strong>Origins foi brutal, moralmente ambíguo e narrativamente corajoso</strong> — Veilguard é seguro onde deveria arriscar. Para a franquia sobreviver, o próximo Dragon Age precisa escolher: ou abraça o público casual de forma completa, ou volta às raízes RPG sem desculpas. Tentar os dois ao mesmo tempo produziu este resultado dividido.</p>
    </EditorialTake>

    <ArticleSources category="geek"
      sources={[
        {
          title: "Dragon Age: The Veilguard — Metacritic (PC)",
          url: "https://www.metacritic.com/game/dragon-age-the-veilguard/",
          publisher: "Metacritic",
          accessedAt: "Março 2026",
        },
        {
          title: "Dragon Age: The Veilguard Review — IGN",
          url: "https://www.ign.com/articles/dragon-age-the-veilguard-review",
          publisher: "IGN",
          accessedAt: "Março 2026",
        },
        {
          title: "Dragon Age: The Veilguard Review — PC Gamer",
          url: "https://www.pcgamer.com/reviews/dragon-age-the-veilguard-review/",
          publisher: "PC Gamer",
          accessedAt: "Março 2026",
        },
        {
          title: "Dragon Age: The Veilguard — Steam Store",
          url: "https://store.steampowered.com/app/1845910/Dragon_Age_The_Veilguard/",
          publisher: "Valve / EA",
          accessedAt: "Março 2026",
        },
        {
          title: "Dragon Age: The Veilguard Review — GameSpot",
          url: "https://www.gamespot.com/reviews/dragon-age-the-veilguard-review/1900-6418326/",
          publisher: "GameSpot",
          accessedAt: "Março 2026",
        },
        {
          title: "Dragon Age: The Veilguard — How Long to Beat",
          url: "https://howlongtobeat.com/game/dragon-age-the-veilguard",
          publisher: "HowLongToBeat",
          accessedAt: "Março 2026",
        },
      ]}
    />

    <RelatedPosts currentSlug="dragon-age-veilguard-review-2026" />
    <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
    <CommentSection postId="dragon-age-veilguard-review-2026" postTitle="Dragon Age: The Veilguard — Review 2026" category="geek" />
  </article>
);
};

export default DragonAgeVeilguard2026;

import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, BookOpen, Star, Tv, Crown } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import heroImg from "@/assets/maousama-retry.webp";

const MaousamaRetry = () => {
  useEffect(() => {
    trackArticleRead("maousama-retry-demon-lord-guia-completo", "Demon Lord Retry! Maou-sama Guia Completo — Temporadas e Personagens", "otaku");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="otaku" size="lg" />
          <span className="px-3 py-1 bg-otaku/20 text-otaku rounded-full text-sm font-medium">Isekai · Fantasia · Rei Demônio</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Demon Lord, Retry! (Maou-sama, Retry!): O Programador que Virou Rei Demônio — Guia Completo
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />22 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" />
      </header>
      <AdLeaderboard className="my-8" />

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Demon Lord Retry Maou-sama — Hakuto Kunai e Aku" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          <strong>Maou-sama, Retry!</strong> — <strong>Demon Lord, Retry!</strong> em inglês — é um isekai com um giro interessante: o protagonista não é um guerreiro, um estudante ou um trabalhador qualquer, mas um <strong>programador de MMORPGs</strong> que acorda no corpo do personagem que ele mesmo criou — o Rei Demônio do seu próprio jogo. A série recebeu duas adaptações em anime: a original de 2019 e um relançamento remade em 2024.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          Origem: Light Novel
        </h2>
        <p>
          A série é baseada em uma <strong>light novel escrita por Kurone Kanzaki</strong> e ilustrada por <strong>Kōji Ogata</strong>. A história de Akira Oono — programador de 45 anos que gerencia o MMORPG <strong>Infinity Game</strong> há quinze anos — e sua reencarnação no corpo de seu personagem criado, o Rei Demônio <strong>Hakuto Kunai</strong>, conquistou leitores fãs de isekai com foco em gerenciamento e criação de comunidades.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Crown className="h-7 w-7 text-otaku" />
          História: O Programador no Corpo do Rei Demônio
        </h2>
        <p>
          Na noite em que <strong>Akira Oono</strong> encerra definitivamente os servidores do <em>Infinity Game</em> — o MMORPG que administrou por 15 anos — ele é misteriosamente transportado para o mundo do jogo, habitando o corpo de <strong>Hakuto Kunai</strong>, o Rei Demônio que era o chefe final do jogo. Akira ainda possui suas memórias de programador e acesso a algumas das habilidades administrativas do jogo.
        </p>
        <p>
          Logo após chegar, ele testemunha o demônio <strong>Greol</strong> perseguindo uma garotinha chamada <strong>Aku</strong> — e elimina a ameaça sem esforço. Aku, que era maltratada e marginalizada por sua aldeia por ter olhos heterocromáticos (considerados maldição), torna-se a primeira companheira de Hakuto. Ela o chama constantemente de "Rei Demônio" em público, para seu eterno constrangimento.
        </p>
      <AdInArticle />
        <p>
          Confuso sobre quem o invocou e por quê, Hakuto/Akira inicia uma investigação enquanto, inadvertidamente, deixa rastros de caos e milagres por onde passa — criando hospitais gratuitos, casinos, e atraindo um grupo improvável de aliadas poderosas que se tornam suas NPC convocadas do próprio jogo.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-otaku" />
          As Duas Adaptações em Anime
        </h2>
        <div className="not-prose overflow-x-auto my-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Versão</TableHead><TableHead>Estúdio</TableHead><TableHead>Período</TableHead><TableHead>Detalhes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Maou-sama, Retry! (T1)","Ekachi Epilka","4 jul – 19 set 2019","12 episódios. Abertura 'Tempest' por Kaori Ishihara. Encerramento 'New' por Haruka Tōjō. Exibida na Tokyo MX e BS Fuji. Distribuída pela Funimation (depois Crunchyroll)."],
                ["Maou-sama, Retry! R","Gekkō","Out–Dez 2024","Adaptação do mangá spin-off 'Retry! R'. Dirigida por Kazuomi Koga. Roteiro de Katsuhiko Takayama. Recebida de forma mista pelo público."],
              ].map(([v,e,p,d]) => (
                <TableRow key={v}>
                  <TableCell className="font-medium">{v}</TableCell>
                  <TableCell>{e}</TableCell>
                  <TableCell className="text-sm">{p}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{d}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      <AdRectangle className="my-8" />

        
<h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          Personagens Principais
        </h2>
        <div className="not-prose space-y-4 my-4">
          {[
            {name:"Hakuto Kunai / Akira Oono", va:"Kenjiro Tsuda", desc:"Protagonista. O corpo é o Rei Demônio do jogo; a mente é Akira, o programador de 45 anos. Possui poderes imensos de durabilidade e força física, além de acesso a habilidades administrativas do jogo (criar itens, invocar NPCs). Sem resistência mágica — fraqueza interessante dado o ambiente de fantasia. Ao contrário da aparência intimidadora, tende a agir de forma pragmática e às vezes paternal."},
            {name:"Aku", va:"Kaori Ishihara", desc:"Menina de 13 anos com olhos heterocromáticos (vermelho e verde) que é marginalizada por sua aldeia. Salva por Hakuto, torna-se sua primeira companheira e uma espécie de figura filha. Chama-o insistentemente de 'Rei Demônio' em público. Usa o pronome masculino 'boku' em japonês. Sua origem e natureza têm revelações no decorrer da série."},
            {name:"Yu Kirino / Yuu", va:"Yoshitsugu Matsuoka", desc:"Primeira NPC invocada por Hakuto — uma cientista brilhante de 22 anos com longos cabelos negros que serviu como chefe da Cidade Noturna no jogo. Descrita como uma sádica brilhante com atração por garotos jovens. Seu poder 'Mão de Deus' permite curar qualquer ferimento ou doença, tornando-a inestimável."},
            {name:"Isami Tahara", va:"—", desc:"Segundo NPC invocado — um soldado de forças especiais de 31 anos especializado em armas de fogo. Possui 47 armas próprias (de flintlocks a rifles sniper) que flutuam no ar sob seu comando. Lazy genius com devoção absoluta à irmã caçula Manami."},
            {name:"Luna Elegant", va:"Kaori Ishihara", desc:"Uma sacerdotisa que ajuda Hakuto em sua jornada. Representa a aliança entre os poderes de Hakuto e as forças humanas do mundo."},
            {name:"Angel White", va:"Rina Hidaka", desc:"Uma anjo que se torna aliada de Hakuto. Seu poder celestial complementa o arsenal demoníaco do protagonista."},
          ].map(p => (
            <div key={p.name} className="p-4 bg-card border border-border rounded-xl">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h4 className="font-bold">{p.name}</h4>
                <span className="text-xs bg-muted px-2 py-0.5 rounded-full">VA: {p.va}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-0">{p.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-otaku" />
          Onde Assistir
        </h2>
        <p>
          A série original de 2019 está disponível na <strong>Crunchyroll</strong> (após a Sony adquirir a Funimation, os direitos foram migrados para a plataforma). <strong>Maou-sama, Retry! R</strong> (2024) também está disponível na Crunchyroll.
        </p>

        <div className="not-prose mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Rei Demônio ou Programador? Qual versão de Hakuto você prefere? 👾</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

            
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#127918;</span>
          Hakuto Kunai: Programador de MMO no Corpo do Vilão que Criou
        </h2>
        <p>
          A premissa de <strong>Maou-sama, Retry!</strong> é mais sofisticada do que aparece à primeira vista. <strong>Akira Oono</strong> não é apenas um jogador que entrou no seu jogo favorito — ele é o criador e administrador do personagem Hakuto Kunai por 15 anos. Isso significa que ele conhece cada habilidade, cada fraqueza e cada segredo do "Rei Demônio" melhor do que qualquer jogador poderia. Essa distinção muda a dinâmica de poder: Hakuto Kunai foi criado por Akira como o chefe final inderrotável do <em>Infinity Game</em>. No mundo real onde agora existe, ele tem poderes que nenhum habitante jamais enfrentou de forma controlada. Mas Akira, o programador dentro de Hakuto, sabe que "inderrotável dentro do sistema do jogo" não é o mesmo que "inderrotável num mundo real com regras diferentes".
        </p>
        <p>
          O instinto de Akira é administrativo: ele quer entender o sistema, mapear as regras, identificar os atores e só então agir. Para alguém que administrou um MMORPG com centenas de milhares de usuários simultâneos por 15 anos, isso é segunda natureza. O problema é que o mundo não espera que ele termine seu diagnóstico — e a primeira interação com Aku o força a agir antes que esteja pronto.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#127800;</span>
          Aku e a Dinâmica Central da Série
        </h2>
        <p>
          <strong>Aku</strong> — a criança que Hakuto salva logo no início — é o coração emocional de Maou-sama Retry. Marginalizada por sua aldeia por causa de olhos heterocromáticos (considerados sinal de maldição), ela é a primeira pessoa que Hakuto/Akira escolhe proteger por razões puramente pessoais, não estratégicas. A dinâmica entre os dois é propositalmente paternal e não-romântica — o que é uma escolha deliberada que se destaca num gênero onde as companheiras femininas frequentemente têm interesse amoroso no protagonista.
        </p>
        <p>
          Aku chama Hakuto de "Rei Demônio" em todo momento público possível, para o constrangimento constante dele, porque genuinamente acredita que esse é o título correto e sente orgulho em anunciá-lo. Esse gag recorrente funciona porque a série estabelece que Aku não está sendo ingênua — ela simplesmente tem um código de honra que não permite esconder quem seu protetor é. As alianças que Hakuto forma, os conflitos que ele aceita ou evita, e a velocidade com que usa seu poder são todos moldados pela pergunta "isso protege Aku?".
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#128250;</span>
          Maou-sama Retry! R: A Segunda Chance da Franquia
        </h2>
        <p>
          A série original de 2019 foi produzida pelo estúdio <strong>Ekachi Epilka</strong> e sofreu limitações de orçamento que resultaram em qualidade de animação irregular — especialmente visível nas sequências de ação. A premissa tinha potencial genuíno que a produção original não conseguiu realizar completamente. Em 2024, a franquia ganhou uma continuação: <strong>Maou-sama, Retry! R</strong> (Retry Revised), produzida pelo <strong>Studio Geek Toys</strong>, com parte do elenco original e retornando à história com produção superior. A série está disponível na Crunchyroll.
        </p>
        <p>
          Retry R se posiciona como uma oportunidade de refazer a primeira impressão para quem desistiu da série em 2019 pelas questões de produção. O material de base — a light novel de Kurone Kanzaki publicada pela Futabasha desde setembro de 2016 — tem construção de mundo e desenvolvimento de personagens suficientemente sólidos para sustentar uma adaptação melhor executada. Para novos espectadores, Retry R é o ponto de entrada recomendado em vez da série original.
        </p>

      <EditorialTake category="otaku" title="Análise do Marcos: Maou-sama Retry! tem premissa acima da execução — mas Retry R corrige isso">
        <p>
          <strong>Maou-sama, Retry!</strong> é uma light novel de <strong>Kurone Kanzaki</strong>, ilustrada por <strong>Kōji Ogata</strong>, publicada pela <strong>Futabasha</strong> desde setembro de 2016. O anime original foi produzido pelo estúdio <strong>Ekachi Epilka</strong>, com 12 episódios de julho a setembro de 2019. A continuação <strong>Maou-sama, Retry! R</strong> foi produzida pelo <strong>Studio Geek Toys</strong> e está disponível na <strong>Crunchyroll</strong>. Até maio de 2026, nenhuma temporada adicional além de Retry R foi anunciada.
        </p>
        <p>
          A série original de 2019 teve limitações de orçamento que prejudicaram a animação em momentos decisivos. A premissa — programador de MMO acorda no corpo do chefe final que ele mesmo criou — tem potencial genuíno que a produção original não conseguiu realizar completamente. Retry R representa uma segunda chance para o material provar o que pode — e para quem desistiu em 2019 pelas questões técnicas, é o ponto de entrada recomendado.
        </p>
      </EditorialTake>

            <ArticleSources category="otaku"
        sources={[
          {
            title: "Futabasha — Maou-sama Retry",
            url: "https://www.futabasha.co.jp/",
            publisher: "Futabasha",
            accessedAt: "Maio 2026"
          },
          {
            title: "MyAnimeList — Maou-sama Retry",
            url: "https://myanimelist.net/anime/39468/Maou-sama_Retry",
            publisher: "MyAnimeList",
            accessedAt: "Maio 2026"
          },
          {
            title: "Anime News Network — Maou-sama Retry R",
            url: "https://www.animenewsnetwork.com/encyclopedia/anime.php?id=21992",
            publisher: "Anime News Network",
            accessedAt: "Maio 2026"
          },
          {
            title: "Studio Hibari — Site oficial",
            url: "http://www.hibari-anime.com/",
            publisher: "Studio Hibari",
            accessedAt: "Maio 2026"
          },
          {
            title: "Crunchyroll — Demon Lord Retry",
            url: "https://www.crunchyroll.com/series/G6NQ5DWZ6/demon-lord-retry",
            publisher: "Crunchyroll",
            accessedAt: "Maio 2026"
          }
        ]}
      />
      <RelatedPosts currentSlug="maousama-retry-demon-lord-guia-completo" />
      <CommentSection postId="maousama-retry-demon-lord-guia-completo" postTitle="Demon Lord Retry! (Maou-sama) — Guia Completo"  category="otaku" />
          <AdLeaderboard className="my-8" />
    </article>
  );
};

export default MaousamaRetry;
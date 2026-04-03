import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
import ShareWhatsApp from "@/components/ShareWhatsApp";
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

      <RelatedPosts currentSlug="maousama-retry-demon-lord-guia-completo" />
      <CommentSection postId="maousama-retry-demon-lord-guia-completo" postTitle="Demon Lord Retry! (Maou-sama) — Guia Completo" />
          <AdLeaderboard className="my-8" />
    </article>
  );
};

export default MaousamaRetry;

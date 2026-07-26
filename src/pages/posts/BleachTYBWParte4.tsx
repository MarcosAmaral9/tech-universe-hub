/*
 * PAGE_META — entrada em DynamicSEO.tsx > PAGE_META:
 *
 * "/post/bleach-tybw-parte-4-the-calamity-2026": {
 *   title: "Bleach TYBW Parte 4 — The Calamity (A Calamidade): Guia Completo 2026 | VICIO<CODE>",
 *   description: "Guia completo de Bleach: Thousand-Year Blood War Parte 4 – The Calamity (2026): data de estreia 25 de julho, episódios, Disney+, abertura I-BULL de jo0ji, encerramento Rasen de 9Lana e o que esperar do confronto final Ichigo vs. Yhwach.",
 *   keywords: "bleach tybw parte 4, bleach the calamity 2026, bleach thousand year blood war parte 4 episodios, ichigo yhwach confronto final, bleach disney plus brasil 2026",
 * },
 */
import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Star, Zap, Flame, BookOpen, BarChart3, Shield } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/bleach-tybw-parte-4-the-calamity-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const BleachTYBWParte4 = () => {
  useEffect(() => {
    trackArticleRead(
      "bleach-tybw-parte-4-the-calamity-2026",
      "Bleach TYBW Parte 4 — The Calamity: Guia Completo 2026",
      "otaku"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="otaku" size="lg" />
          <span className="px-3 py-1 bg-otaku/20 text-otaku rounded-full text-sm font-medium">
            Anime · Shonen · Verão 2026
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Bleach TYBW Parte 4 — The Calamity: Guia Completo da Fase Final (2026)
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />26 de Julho, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchpriority="high"
          src={heroImg}
          alt="Bleach TYBW Parte 4 The Calamity 2026 Ichigo Yhwach confronto final Disney Plus"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        <p className="lead text-xl text-muted-foreground">
          <strong>Bleach TYBW Parte 4 — The Calamity</strong> estreou em 25 de julho de 2026 no Disney+ com novos episódios toda semana aos sábados às 11h30 (horário de Brasília). A quarta e última parte da adaptação de Bleach: Thousand-Year Blood War encerra mais de duas décadas da franquia de Tite Kubo: o confronto definitivo entre Ichigo Kurosaki e Yhwach, o rei dos Quincy, com material original confirmado pelo próprio autor expandindo batalhas que não apareceram integralmente no mangá original. Este guia reúne tudo o que é confirmado: data, episódios, músicas, plataforma, contexto das partes anteriores e o que esperar do desfecho.
        </p>

        {/* Ficha técnica */}
        <div className="not-prose my-8 bg-card rounded-2xl border border-otaku/30 overflow-hidden">
          <div className="bg-otaku/10 px-6 py-4 border-b border-otaku/20">
            <h2 className="font-bold text-lg flex items-center gap-2">
              <Shield className="h-5 w-5 text-otaku" />
              Ficha Técnica — Bleach: TYBW Parte 4
            </h2>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {[
              ["Título completo", "Bleach: Sennen Kessen-hen — Kashin-tan (The Calamity / A Calamidade)"],
              ["Estreia", "25 de julho de 2026"],
              ["Horário no Brasil", "11h30 BRT (sábados no Disney+)"],
              ["Episódios", "10–13 eps (AniList lista 13; vazamento Sugoi LITE aponta 10 — aguardar confirmação oficial)"],
              ["Previsão de encerramento", "Setembro–Outubro de 2026"],
              ["Estúdio", "Pierrot Films (subsidiária do Studio Pierrot)"],
              ["Diretor", "Hikaru Murata"],
              ["Diretor geral", "Tomohisa Taguchi"],
              ["Abertura", "\"I-BULL\" — jo0ji"],
              ["Encerramento", "\"Rasen\" — 9Lana"],
              ["Plataforma BR", "Disney+ (com legendas e dublagem PT-BR)"],
              ["Plataforma EUA", "Hulu (simulcast)"],
              ["Pré-estreia em cinemas", "Primeiros 3 episódios em salas dos EUA antes do streaming"],
              ["Conteúdo original", "Tite Kubo confirmou cenas inéditas expandindo as batalhas finais"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs text-muted-foreground uppercase tracking-wide">{k}</dt>
                <dd className="font-medium mt-0.5 text-sm">{v}</dd>
              </div>
            ))}
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          Bleach: Uma Franquia de 25 Anos Chegando ao Fim
        </h2>
        <p>
          Bleach foi publicado na Weekly Shōnen Jump da Shueisha entre agosto de 2001 e agosto de 2016 — quinze anos de publicação contínua resultando em 74 volumes tankōbon e mais de 130 milhões de cópias em circulação, posicionando a obra entre os mangás mais vendidos da história. Junto com Naruto e One Piece, Bleach compôs o que a imprensa especializada japonesa chamou de "Big Three" da Shōnen Jump nos anos 2000 — três séries que sustentaram a popularidade da revista simultaneamente e definiram o gosto de uma geração inteira de leitores de shonen fora do Japão.
        </p>
        <p>
          A adaptação original em anime estreou em outubro de 2004 pela TV Tokyo com produção do Studio Pierrot, estendendo-se até março de 2012 com 366 episódios e quatro filmes. O anime clássico encerrou antes de o mangá terminar — e notoriamente antes de adaptar o arco final, o Thousand-Year Blood War — em parte por causa do ritmo de produção apertado que gerou longos períodos de filler para não ultrapassar o mangá. Após dez anos de silêncio, o anúncio da adaptação do TYBW em 2021 — feito durante um evento especial da Shōnen Jump — gerou uma das maiores reações da comunidade de anime em memória recente, com a hashtag #BleachIsBack dominando o Twitter global por horas.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-otaku" />
          As Quatro Partes do TYBW: Contexto Completo
        </h2>
        <p>
          A adaptação do arco Thousand-Year Blood War foi dividida em quatro partes (cours) com intervalos entre elas, um modelo diferente do simulcast semanal contínuo adotado por outras franquias. Essa escolha permitiu ao Studio Pierrot — e depois ao Pierrot Films, subsidiária criada para produções de alto nível — manter padrão de animação mais consistente do que seria possível num cronograma de 52 episódios sem pausa. O resultado foi uma série unanimemente elogiada pela qualidade visual, com episódios específicos que geraram discussão sobre as melhores animações de luta do shonen moderno.
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4">Parte</th>
                <th className="text-left py-3 px-4">Subtítulo</th>
                <th className="text-left py-3 px-4">Período</th>
                <th className="text-left py-3 px-4">Eps</th>
                <th className="text-left py-3 px-4">Foco narrativo</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Parte 1", "The Blood Warfare", "Out–Dez 2022", "13", "Invasão Quincy inicial. Derrotas dos Capitães. Ichigo em Hueco Mundo."],
                ["Parte 2", "The Separation", "Jul–Set 2023", "13", "Wandenreich e Vollständig. Ichigo descobre origens. Mortes importantes."],
                ["Parte 3", "The Conflict", "Out–Dez 2024", "14", "Schutzstaffel. Soul Palace. Yhwach absorve o Soul King. Uryu se revela."],
                ["Parte 4", "The Calamity", "Jul–Set/Out 2026", "10–13*", "Confronto final Ichigo vs. Yhwach. Bankai de Urahara. Fim da franquia."],
              ].map(([parte, sub, periodo, eps, foco]) => (
                <tr key={parte} className="border-t border-border align-top">
                  <td className="py-3 px-4 font-bold text-otaku text-xs">{parte}</td>
                  <td className="py-3 px-4 text-xs font-medium">{sub}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground">{periodo}</td>
                  <td className="py-3 px-4 text-xs font-mono">{eps}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground">{foco}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2 px-1">* AniList lista 13 episódios; vazamento do perfil Sugoi LITE aponta 10. Aguardar confirmação oficial da produção.</p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Flame className="h-7 w-7 text-otaku" />
          O Que Esperar da Parte 4 (Sem Spoilers do Mangá)
        </h2>
        <p>
          A Parte 4 começa exatamente onde a Parte 3 terminou: Yhwach, após absorver o Soul King no Soul Palace, agora detém um poder que vai além do que qualquer shinigami jamais enfrentou — a capacidade de reformular a própria realidade. Ichigo, Aizen, Renji e os capitães sobreviventes estão diante da batalha mais difícil já travada. Para os espectadores que acompanham apenas o anime, o confronto que se aproxima foi construído com paciência ao longo das três partes anteriores, e a Parte 4 é o momento em que todas as peças se encaixam.
        </p>
        <p>
          Um dos pontos mais comentados entre os leitores do mangá é a revelação do Bankai de Kisuke Urahara — um dos mistérios de maior longevidade na série, já que Urahara é um dos personagens mais poderosos confirmados do universo de Bleach, mas nunca havia revelado seu Bankai durante os 74 volumes. A promessa de material original adicional por Tite Kubo — que selecionou pessoalmente todas as músicas-tema desde a fase de demonstração — significa que essa revelação, e outras batalhas, pode ter uma dimensão visual ainda maior do que o material impresso permitia.
        </p>
        <div className="not-prose my-6 p-5 bg-card rounded-xl border border-yellow-500/30">
          <h3 className="font-bold text-base mb-3 flex items-center gap-2">
            <span className="text-yellow-400">⚠️</span> Política de Spoilers deste Artigo
          </h3>
          <p className="text-sm text-muted-foreground">
            Este guia é escrito para espectadores do anime sem exposição ao final do mangá. Não há revelações de mortes, resultados de batalhas ou desfecho da série. A seção de comentários abaixo tem spoilers marcados pelos próprios usuários — entre com cautela se ainda não terminou o mangá.
          </p>
        </div>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          Músicas: "I-BULL" e "Rasen" — Os Criadores
        </h2>
        <p>
          A abertura da Parte 4, <em>"I-BULL"</em>, é interpretada por jo0ji — artista japonês que ficou conhecido internacionalmente por seu trabalho na trilha sonora de Jujutsu Kaisen, especificamente pela faixa <em>"SPECIALZ"</em>, usada no opening da segunda temporada e que viralizou globalmente. A escolha de jo0ji para o encerramento de Bleach estabelece uma conexão sonora interessante entre as duas maiores séries de ação shonen da metade da década de 2020, e sua pegada eletrônica com batidas intensas foi descrita nas primeiras análises do trailer como perfeitamente alinhada à "atmosfera de fim do mundo" que o subtítulo The Calamity promete.
        </p>
        <p>
          O encerramento <em>"Rasen"</em> (Espiral) é de 9Lana — artista que, segundo Tite Kubo em declaração no evento de revelação das músicas, foi selecionada pessoalmente pelo autor após ouvir a música em fase de demonstração. Kubo revelou que participa ativamente do processo de escolha musical desde a Parte 1, e que todas as faixas de tema do TYBW foram aprovadas por ele diretamente, não apenas delegadas à equipe de produção. Essa atenção ao aspecto sonoro da adaptação é citada pelos fãs como parte do motivo pelo qual o TYBW soa diferente das outras grandes franquias de shonen adaptadas no mesmo período.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-otaku" />
          Calendário de Episódios — Sábados no Disney+
        </h2>
        <p>
          A Parte 4 segue o mesmo modelo das partes anteriores: um episódio por semana, sempre aos sábados, disponível no Disney+ às 11h30 BRT. O calendário abaixo usa o número de episódios confirmado pelo AniList (13 eps), com a ressalva de que um vazamento do perfil Sugoi LITE indica 10 episódios — o que encerraria a série em 26 de setembro. Até a produção confirmar oficialmente, o calendário completo permanece como estimativa.
        </p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4">Episódio</th>
                <th className="text-left py-3 px-4">Data (Disney+ BR — 11h30 BRT)</th>
                <th className="text-left py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Ep 1 (ep. 40 total)", "25 de julho de 2026 (sábado)", "Disponível"],
                ["Ep 2 (ep. 41 total)", "1 de agosto de 2026 (sábado)", "Disponível"],
                ["Ep 3 (ep. 42 total)", "8 de agosto de 2026 (sábado)", "Disponível"],
                ["Ep 4 (ep. 43 total)", "15 de agosto de 2026 (sábado)", "Aguardar"],
                ["Ep 5 (ep. 44 total)", "22 de agosto de 2026 (sábado)", "Aguardar"],
                ["Ep 6 (ep. 45 total)", "29 de agosto de 2026 (sábado)", "Aguardar"],
                ["Ep 7–10 (eps. 46–49)", "5–26 de setembro de 2026", "Aguardar"],
                ["Eps 11–13* (eps. 50–52*)", "3–17 de outubro de 2026*", "Estimado (se 13 eps)"],
              ].map(([ep, data, status]) => (
                <tr key={ep} className="border-t border-border">
                  <td className="py-3 px-4 font-semibold text-otaku text-xs">{ep}</td>
                  <td className="py-3 px-4 text-xs">{data}</td>
                  <td className={`py-3 px-4 text-xs font-medium ${status === "Disponível" ? "text-green-400" : status === "Aguardar" ? "text-yellow-400" : "text-muted-foreground"}`}>{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-otaku" />
          Como Assistir: Guia Completo para o Brasil
        </h2>
        <p>
          No Brasil, toda a adaptação TYBW — Partes 1 a 3, mais a Parte 4 em andamento — está disponível no Disney+ com legendas e dublagem em português. As 16 temporadas do anime clássico original (2004–2012) também estão na plataforma, tornando o Disney+ o único serviço necessário para acompanhar a franquia do início ao fim. A qualidade de streaming disponível é 4K HDR para assinantes com planos compatíveis.
        </p>
        <p>
          Para quem está chegando agora e quer ver apenas o TYBW sem maratonar o anime clássico de 366 episódios: é possível começar direto na Parte 1 do TYBW com algum contexto prévio. O arco se passa anos após os eventos da série original, com os personagens já adultos e em novas posições. O Disney+ disponibiliza um breve contexto em texto antes dos primeiros episódios, e a própria narrativa da Parte 1 reapresenta os personagens centrais de forma funcional para novos espectadores. O ideal seria ao menos assistir ao arco do Soul Society do anime clássico (episódios 1–63, aproximadamente) para entender a dinâmica de Shinigami e Soul Society — mas não é obrigatório para acompanhar o TYBW.
        </p>
        <p>
          Para quem leu o mangá e quer saber o que é novo: Tite Kubo confirmou cenas originais especificamente desenhadas para o anime que não estavam no mangá — expandindo batalhas que no material impresso foram tratadas de forma mais sintética, por limitação do formato semanal de publicação. Qual batalha recebeu esse tratamento expandido não foi revelado oficialmente antes da estreia, mantendo o suspense mesmo para os leitores do mangá original.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          Por Que o TYBW Importa para o Anime como Mídia
        </h2>
        <p>
          O retorno de Bleach em 2022 foi mais do que o encerramento de uma história: foi uma demonstração de que franquias de anime com décadas de história podem ser readaptadas com padrão técnico contemporâneo, com respeito ao material original e com envolvimento ativo do autor criativo. O nível de qualidade de animação do TYBW — especialmente nos episódios de batalha, com composição de câmera e fluidez de movimento que rivalizaram com produções de grandes estúdios como MAPPA e ufotable — provou que o Studio Pierrot, historicamente criticado por produções inconsistentes, era capaz de padrão de excelência quando dado tempo e orçamento adequados.
        </p>
        <p>
          A Parte 4 carrega o peso de encerrar não apenas uma história de personagens, mas uma franquia que moldou o que o anime shonen significa para uma geração inteira. Ichigo Kurosaki estreou nas revistas em agosto de 2001 — quando boa parte do público atual que acompanha o TYBW ainda nem havia nascido. O fim da série é, portanto, um evento cultural com dimensão afetiva que vai muito além de um episódio de televisão: é o ponto final de um ciclo de 25 anos de publicação, adaptação e fandom global.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você está assistindo Bleach: The Calamity? ⚔️</h3>
          <p className="text-muted-foreground">O que você mais aguarda na Parte 4 — a batalha final, o Bankai de Urahara ou as cenas originais do Kubo? Conta nos comentários! 👇</p>
        </div>

      </div>

      <EditorialTake category="otaku" title="Análise do Marcos: Bleach TYBW é o melhor caso de readaptação da história do anime — e a Parte 4 tem a responsabilidade de provar que valeu cada ano de espera">
        <p>
          Nenhuma readaptação de anime dos últimos anos chegou perto de fazer o que o TYBW fez com Bleach. A série tinha uma reputação complicada por causa dos fillers intermináveis do anime clássico e de um final de mangá que dividiu opiniões na época. O TYBW chegou e reescreveu essa narrativa episódio por episódio — com animações de combate que eram compartilhadas em loop nas redes, com um nível de fidelidade ao traço de Kubo que o anime original raramente alcançou, e com a sensação crescente de que isso era um encerramento à altura de uma franquia que mereceu mais do que recebeu na primeira adaptação.
        </p>
        <p>
          A Parte 4 agora carrega essa responsabilidade até o fim. O material das três partes anteriores foi construído com cuidado e consistência; a Parte 4 precisa fechar o ciclo de forma que faça jus a 25 anos de franquia. A presença ativa de Tite Kubo no processo criativo — selecionando músicas, aprovando cenas originais, acompanhando storyboards — é a melhor garantia disponível de que esse encerramento vai acontecer com o mesmo cuidado que caracterizou as três partes anteriores. Para os fãs que estão aí desde o dia que o primeiro episódio do anime clássico foi ao ar em 2004, este sábado de julho marca o começo do fim de uma jornada de duas décadas.
        </p>
      </EditorialTake>

      <ArticleSources category="otaku"
        sources={[
          {
            title: "Guia Disney+ Brasil — Bleach TYBW Parte 4: data e horário revelados",
            url: "https://disneyplusbrasil.com.br/quando-estreia-a-parte-4-de-bleach-thousand-year-blood-war-data-e-horario-revelados/",
            publisher: "Guia Disney+ Brasil",
            accessedAt: "Julho 2026"
          },
          {
            title: "O Vício — Calendário de episódios da Parte 4",
            url: "https://ovicio.com.br/bleach-thousand-year-blood-war-confira-o-calendario-de-episodios-da-parte-4/",
            publisher: "O Vício",
            accessedAt: "Julho 2026"
          },
          {
            title: "OtakuPT — Bleach TYBW Part 4 estreia 25 de julho e revela músicas-tema",
            url: "https://www.otakupt.com/anime/bleach-thousand-year-blood-war-part-4-estreia-25-julho/",
            publisher: "OtakuPT",
            accessedAt: "Junho 2026"
          },
          {
            title: "Culpa do Lag — BLEACH TYBW Part 4 estreia com visual e temas revelados",
            url: "https://culpadolag.com.br/bleach-tybw-part-4-estreia-em-25-de-julho-com-visual-e-temas-revelados",
            publisher: "Culpa do Lag",
            accessedAt: "Julho 2026"
          },
          {
            title: "Sportskeeda — Bleach TYBW Part 4 confirms 2026 premiere (Anime Expo 2025)",
            url: "https://www.sportskeeda.com/anime/news-bleach-thousand-year-blood-war-part-4-confirms-2026-premiere-visual",
            publisher: "Sportskeeda",
            accessedAt: "Julho 2025"
          },
          {
            title: "AniList — Bleach: Sennen Kessen-hen — Kashin-tan",
            url: "https://anilist.co/anime/bleach-tybw-part4",
            publisher: "AniList",
            accessedAt: "Julho 2026"
          },
        ]}
      />
      <RelatedPosts currentSlug="bleach-tybw-parte-4-the-calamity-2026" />
      <CommentSection
        postId="bleach-tybw-parte-4-the-calamity-2026"
        postTitle="Bleach TYBW Parte 4 — The Calamity: Guia Completo 2026"
        category="otaku"
      />
    </article>
  );
};

export default BleachTYBWParte4;

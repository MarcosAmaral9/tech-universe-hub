/*
 * PAGE_META — entrada em DynamicSEO.tsx > PAGE_META:
 *
 * "/post/youjo-senki-temporada-2-2026": {
 *   title: "Youjo Senki Temporada 2 (2026): Guia Completo — Saga of Tanya the Evil | VICIO<CODE>",
 *   description: "Guia completo de Youjo Senki 2ª temporada (2026): data de estreia 8 de julho, Studio NUT, abertura MYTH&ROID, elenco, personagens novos, arco narrativo e onde assistir no Brasil.",
 *   keywords: "youjo senki temporada 2, saga of tanya the evil season 2 2026, youjo senki 2 estreia julio 2026, tanya degurechaff anime 2026, myth roid youjo senki 2",
 * },
 */
import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Star, Zap, Flame, BookOpen, BarChart3 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/animes-aguardados-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const YoujoSenkiT22026 = () => {
  useEffect(() => {
    trackArticleRead(
      "youjo-senki-temporada-2-2026",
      "Youjo Senki Temporada 2 (2026): Guia Completo — Saga of Tanya the Evil",
      "otaku"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="otaku" size="lg" />
          <span className="px-3 py-1 bg-otaku/20 text-otaku rounded-full text-sm font-medium">
            Anime · Isekai Militar · Verão 2026
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Youjo Senki Temporada 2 (2026): Guia Completo — Tanya Volta à Guerra Após Quase 10 Anos
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />8 de Julho, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchpriority="high"
          src={heroImg}
          alt="Youjo Senki temporada 2 2026 Tanya Degurechaff Saga of Tanya the Evil Studio NUT Crunchyroll"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        <p className="lead text-xl text-muted-foreground">
          A <strong>Youjo Senki temporada 2</strong> estreou em 8 de julho de 2026 — quase uma década após a primeira temporada de 2017 e sete anos após o filme de 2019. Produzida novamente pelo Studio NUT com a abertura da MYTH&ROID de volta, a segunda temporada da <em>Saga of Tanya the Evil</em> segue Tanya Degurechaff em novos conflitos militares com 12 episódios, novos personagens dublados por Tomokazu Sugita e Yoko Hikasa, e um mini anime bônus semanal exclusivo. Este guia cobre tudo que foi confirmado: ficha técnica, o que aconteceu antes, o que esperar e onde assistir no Brasil.
        </p>

        {/* Ficha técnica */}
        <div className="not-prose my-8 bg-card rounded-2xl border border-otaku/30 overflow-hidden">
          <div className="bg-otaku/10 px-6 py-4 border-b border-otaku/20">
            <h2 className="font-bold text-lg flex items-center gap-2">
              <Star className="h-5 w-5 text-otaku" />
              Ficha Técnica — Youjo Senki 2ª Temporada
            </h2>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {[
              ["Título original", "Youjo Senki (幼女戦記) — 2ª Temporada"],
              ["Título internacional", "Saga of Tanya the Evil Season 2"],
              ["Estreia", "8 de julho de 2026"],
              ["Dia de exibição", "Quartas-feiras (AT-X, TOKYO MX e afiliadas)"],
              ["Episódios", "12 episódios"],
              ["Estúdio", "Studio NUT"],
              ["Diretor", "Takayuki Yamamoto"],
              ["Roteirista", "Kenta Ihara (Youjo Senki T1, Vinland Saga)"],
              ["Design de personagens", "Yuji Hosogoe (Youjo Senki T1, Revenger)"],
              ["Abertura", "\"Why? RED induction\" — MYTH&ROID"],
              ["Encerramento", "\"Weiter! Weiter!\" — Aoi Yūki (como Tanya)"],
              ["Plataforma BR", "Crunchyroll (verificar disponibilidade PT-BR)"],
              ["Mini anime bônus", "\"Youjo Senki 2\" — exibido após eps no AT-X; às 24h quartas no YouTube KADOKAWA"],
              ["Anúncio oficial", "AnimeJapan 2026 (painel KADOKAWA, março 2026)"],
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
          A Espera de Quase Uma Década: Por Que Demorou Tanto?
        </h2>
        <p>
          Quase dez anos. É o intervalo que separa o primeiro episódio da primeira temporada de Youjo Senki, exibido em janeiro de 2017, da estreia da segunda temporada em julho de 2026. No meio do caminho, houve um filme — lançado em fevereiro de 2019 nos cinemas japoneses e depois nos streamings — e um longo período de silêncio que levou muitos fãs a acreditar que a série nunca voltaria em formato de série de TV.
        </p>
        <p>
          Ao contrário de casos como Youjo Senki, onde o intervalo refletiu principalmente negociações de produção e prioridades de estúdio, a espera pela T2 foi alimentada por rumores constantes e anúncios que não se concretizavam. O Studio NUT, fundado em 2014 especificamente por ex-funcionários da Madhouse, tem um catálogo relativamente pequeno — Youjo Senki T1, Deca-Dence (2020) e poucos outros títulos — e anúncios de novas produções por esse estúdio sempre geram discussão sobre capacidade de produção paralela. O anúncio no AnimeJapan 2026 em março chegou como uma surpresa genuína para boa parte do fandom, que havia se resignado a não ver a série continuar em formato televisivo.
        </p>
        <p>
          O retorno da mesma equipe criativa central — roteirista Kenta Ihara, designer de personagens Yuji Hosogoe — com apenas a direção trocada é uma escolha que sinaliza continuidade de identidade visual e narrativa da série. Takayuki Yamamoto, o novo diretor, tem experiência em séries de ação com produções de alto volume como My Hero Academia, o que sugere capacidade técnica para as sequências de batalha aérea que são a marca registrada de Youjo Senki.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Flame className="h-7 w-7 text-otaku" />
          O Que é Youjo Senki: Resumo da Premissa e das Obras Anteriores
        </h2>
        <p>
          Youjo Senki (幼女戦記 — literalmente "A Crónica de Guerra de uma Garotinha") é baseada na light novel escrita por Carlo Zen com ilustrações de Shinobu Shinotsuki, publicada originalmente no Shōsetsuka ni Narō a partir de 2013 e depois licenciada pela Yen Press. A história começa no Japão contemporâneo com um executivo frio e pragmático que é assassinado por um funcionário demitido. No momento da morte, ele é interpelado por uma entidade que ele desafia chamando de "Entidade X" — o que interpretamos como um Deus que ele recusa a reconhecer como tal. Como punição, a Entidade X o reencarna no corpo de uma menina chamada Tanya Degurechaff, num mundo paralelo que mimetiza a Europa do início do século XX, com magia como tecnologia militar.
        </p>
        <p>
          O paradoxo central da série é precisamente esse: Tanya é, de dentro, um homem de meia-idade com a mentalidade de um gestor capitalista implacável, preso no corpo de uma criança loira de aparência angelical. Essa dissonância é a fonte tanto da comédia negra quanto do horror surdo da série: Tanya raciocina de forma completamente utilitária, trata soldados como recursos e decisões de batalha como planilhas de custo-benefício — mas por fora parece uma menina inocente. O anime explora esse contraste com consistência ao longo de toda a T1.
        </p>
        <p>
          A primeira temporada (12 episódios, janeiro–março 2017) cobriu a ascensão de Tanya nos quadros militares do Império, da fronteira sul ao comando do Batalhão de Assistência de Combate 203 (o "Grupo de Tanya"). O filme de 2019 adaptou a campanha no Leste — onde o Império enfrenta a Federação, o análogo da União Soviética — culminando num confronto que introduz Mary Sioux, filha de um soldado inimigo morto por Tanya na T1, que se torna sua adversária movida por sede de vingança.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-otaku" />
          Linha do Tempo da Franquia
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4">Obra</th>
                <th className="text-left py-3 px-4">Período</th>
                <th className="text-left py-3 px-4">Eps / Duração</th>
                <th className="text-left py-3 px-4">Foco narrativo</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Light Novel (Carlo Zen)", "2013–presente", "14 volumes (em andamento)", "Origem da franquia. Cobre todo o conflito."],
                ["Mangá (Chika Tojo)", "2016–presente", "Em andamento", "Adaptação com foco visual nas batalhas."],
                ["Anime — 1ª Temporada", "Jan–Mar 2017", "12 episódios", "Ascensão de Tanya. Batalha do Reno. Formação do Bat. 203."],
                ["Filme: Sabaku no Opera", "Fev 2019", "Longa-metragem (~95 min)", "Campanha do Leste. Surgimento de Mary Sioux. Clash final."],
                ["Anime — 2ª Temporada", "8 jul 2026 →", "12 episódios", "Continuação após os eventos do filme. Novos frentes e personagens."],
              ].map(([obra, periodo, dur, foco]) => (
                <tr key={obra} className="border-t border-border align-top">
                  <td className="py-3 px-4 font-semibold text-otaku text-xs">{obra}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground">{periodo}</td>
                  <td className="py-3 px-4 text-xs font-mono">{dur}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground">{foco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-otaku" />
          Elenco: Veteranos e Personagens Novos
        </h2>
        <p>
          O elenco principal da T1 retorna integralmente para a segunda temporada. Aoi Yūki permanece como voz de Tanya Degurechaff — um papel que a atriz definiu como um dos mais tecnicamente desafiadores de sua carreira, pela exigência de simultaneamente transmitir a postura calculada do executivo de meia-idade e a voz e expressão física de uma criança de seis anos. Saori Hayami retorna como Viktoriya Ivanovna Serebryakov (Visha), a adjunta de Tanya e o único personagem que tem uma relação aproximada de afeto com a protagonista.
        </p>
        <p>
          Dois novos personagens confirmados para a T2 ampliam o peso do elenco de voz de forma significativa: <strong>Mikel</strong>, dublado por Tomokazu Sugita — um dos atores de voz mais prolíficos e reconhecidos do Japão, com papéis como Joseph Joestar em JoJo's Bizarre Adventure, Gintoki em Gintama e Escanor em The Seven Deadly Sins — e <strong>Lilya</strong>, dublada por Yoko Hikasa, conhecida internacionalmente por papéis como Rias Gremory em High School DxD e Leone em Akame ga Kill. Detalhes sobre os personagens Mikel e Lilya não foram revelados nos materiais promocionais pré-estreia, mantendo o elemento de surpresa para os espectadores que não leram a light novel.
        </p>

        <div className="not-prose space-y-3 my-6">
          {[
            { nome: "Tanya Degurechaff", va: "Aoi Yūki", papel: "Protagonista. Tenente-coronel do Batalhão 203. Ex-executivo reencarnado como menina por punição da Entidade X." },
            { nome: "Viktoriya Ivanovna Serebryakov (Visha)", va: "Saori Hayami", papel: "Adjunta de Tanya. Veterana do Bat. 203, sua relação com Tanya é a mais próxima da série." },
            { nome: "Wolfgang Lergen", va: "Shinichirō Miki", papel: "Oficial do Estado-Maior que acompanha de longe o avanço de Tanya com desconfiança crescente." },
            { nome: "Erich von Rudersdorf", va: "Kanda Tetsuya", papel: "General do Estado-Maior. Um dos poucos a compreender o potencial militar de Tanya." },
            { nome: "Mikel (NOVO)", va: "Tomokazu Sugita", papel: "Personagem novo da T2. Detalhes não revelados oficialmente antes da estreia." },
            { nome: "Lilya (NOVA)", va: "Yoko Hikasa", papel: "Personagem nova da T2. Detalhes não revelados oficialmente antes da estreia." },
          ].map(({ nome, va, papel }) => (
            <div key={nome} className="flex gap-3 bg-card rounded-xl border border-otaku/20 p-3">
              <div className="shrink-0 w-1 rounded-full bg-otaku/50" />
              <div>
                <p className="font-bold text-sm">{nome} <span className="text-xs text-muted-foreground font-normal">• VA: {va}</span></p>
                <p className="text-xs text-muted-foreground mt-0.5">{papel}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          Músicas: MYTH&ROID Retorna com "Why? RED induction"
        </h2>
        <p>
          O retorno do grupo MYTH&ROID para a abertura da segunda temporada foi uma das revelações mais celebradas do trailer divulgado em julho de 2026. MYTH&ROID é um dos grupos mais associados ao anime de nicho dos anos 2010: além de <em>"JINGO JUNGLE"</em> (abertura da T1 de Youjo Senki), o grupo é responsável por músicas como <em>"L'il Beat Clover"</em> (Overlord), <em>"HYDRA"</em> (Overlord II) e faixas do catálogo de Re:Zero. Seu estilo característico — batidas eletrônicas intensas combinadas com letras que transitam entre o épico e o perturbador — é considerado pelo fandom uma das melhores combinações musicais possíveis com o tom de Youjo Senki.
        </p>
        <p>
          A nova abertura, <em>"Why? RED induction"</em>, foi descrita nas primeiras análises do trailer como mais sombria e melancólica do que <em>"JINGO JUNGLE"</em>, incorporando elementos musicais que refletem a fase mais avançada da guerra que a T2 vai retratar — em que o conflito já não é mais localizado ou controlável, e as consequências para o Império começam a pesar. O encerramento <em>"Weiter! Weiter!"</em> (Avante! Avante! em alemão), interpretado pela própria Aoi Yūki no papel de Tanya, é uma das escolhas criativas mais marcantes da temporada: colocar a dubladora cantando como o personagem cria uma camada meta entre a voz da atriz e a persona da personagem que a série explorou na T1.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          O Mini Anime Bônus Semanal
        </h2>
        <p>
          Um diferencial da segunda temporada em relação à primeira é a inclusão de um mini anime chamado simplesmente <em>"Youjo Senki 2"</em>, exibido imediatamente após cada episódio principal no canal AT-X no Japão e disponibilizado toda quarta-feira às 24h no canal oficial KADOKAWA Anime Channel no YouTube. Esse formato de conteúdo bônus é relativamente comum em produções japonesas financiadas por Blu-Ray e merchandise — os "shorts" ou "chibi" — mas não havia sido usado na franquia anteriormente.
        </p>
        <p>
          Segundo o site oficial da série, o mini anime trará histórias complementares sobre o Batalhão 203 (o grupo de Tanya) que não são abordadas diretamente na série principal — histórias do cotidiano militar, dinâmicas entre os soldados e situações que ficaram fora do escopo do anime principal. Para o fã que já conhece os personagens do Bat. 203, esse material adicional funciona como conteúdo extra de world-building; para quem está assistindo a T2 como ponto de entrada, é um bônus opcional que não é necessário para acompanhar a trama principal.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-otaku" />
          Por Onde Começar: Guia de Ordem de Assistência
        </h2>
        <p>
          Youjo Senki é uma das poucas séries de anime onde a ordem de assistência é relativamente direta, sem arcos fillers, recaps ou material paralelo que confunda a continuidade. A ordem recomendada é:
        </p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4">Ordem</th>
                <th className="text-left py-3 px-4">Obra</th>
                <th className="text-left py-3 px-4">Onde assistir</th>
                <th className="text-left py-3 px-4">Necessário para T2?</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1º", "Anime — 1ª Temporada (12 eps)", "Crunchyroll (leg. e dub. PT-BR)", "Sim — obrigatório"],
                ["2º", "Filme — Sabaku no Opera", "Crunchyroll (leg. e dub. PT-BR)", "Sim — recomendado"],
                ["3º", "Anime — 2ª Temporada (12 eps)", "Crunchyroll", "É o destino"],
                ["Bônus", "Mini Anime — Youjo Senki 2 (shorts)", "YouTube — KADOKAWA Anime Channel", "Não — conteúdo extra"],
              ].map(([ord, obra, onde, nec]) => (
                <tr key={ord} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-otaku">{ord}</td>
                  <td className="py-3 px-4 text-sm font-medium">{obra}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground">{onde}</td>
                  <td className={`py-3 px-4 text-xs font-medium ${nec.includes("Sim") ? "text-green-400" : nec === "É o destino" ? "text-otaku" : "text-muted-foreground"}`}>{nec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          A T1 e o filme estão disponíveis na Crunchyroll no Brasil com legendas e dublagem em português. Para a T2, a Crunchyroll é a plataforma mais provável para distribuição no Brasil — mas até a data de publicação deste artigo, a confirmação oficial de dublagem PT-BR para a segunda temporada ainda não havia sido anunciada. Recomendamos verificar o canal da Crunchyroll Brasil nas redes sociais para atualização.
        </p>
        <p>
          Uma curiosidade para novos espectadores: a série usa terminologia e hierarquia militar inspirada no sistema alemão da Primeira e Segunda Guerra Mundial, com patentes em alemão e estruturas de comando que refletem o Império Alemão da época. Não é necessário nenhum conhecimento prévio de história militar para acompanhar — a série contextualiza os conflitos de forma suficiente — mas quem tem interesse em história militar da Europa do início do século XX vai perceber as referências com uma camada adicional de significado.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Flame className="h-7 w-7 text-otaku" />
          O Que Torna Youjo Senki Diferente dos Outros Isekais
        </h2>
        <p>
          Youjo Senki não é um isekai convencional. A maioria dos isekais contemporâneos coloca o protagonista em posição de vantagem imediata num mundo de fantasia — seja por habilidade única, sistema de nível favorável ou aliados poderosos que surgem rapidamente. Em Youjo Senki, a vantagem de Tanya é real, mas vem acompanhada de um contexto político e militar que a coloca constantemente em risco existencial: quanto mais eficiente ela é como soldada, mais a promovem para funções de maior risco. Ela literalmente tentou ser medíocre para ficar na retaguarda — e fracassou por ser boa demais.
        </p>
        <p>
          Essa inversão de dinâmica cria uma tensão narrativa genuína que a maioria dos isekais de poder fantasia não tem. Tanya não está conquistando o mundo; ela está tentando sobreviver numa guerra que ela sabe que não pode controlar, tomando decisões horrivelmente pragmáticas num ambiente onde pragmatismo e moralidade colidem constantemente. A série não resolve essa tensão — ela a mantém ao longo de todos os arcos, o que é parte do motivo pelo qual Youjo Senki tem uma reputação crítica acima da média para um isekai.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você está acompanhando Youjo Senki T2? ⚔️</h3>
          <p className="text-muted-foreground">A espera de quase 10 anos valeu a pena? E qual foi o momento favorito da T1 que você quer ver explorado na continuação? Conta nos comentários! 👇</p>
        </div>

      </div>

      <EditorialTake category="otaku" title="Análise do Marcos: Youjo Senki T2 é o retorno mais surpreendente do verão — e o mais difícil de fazer jus ao original">
        <p>
          Há algo específico no tipo de expectativa que uma série como Youjo Senki carrega depois de quase uma década. Não é a expectativa de um público novo que nunca viu o original — é a expectativa de fãs que assistiram à T1 e ao filme múltiplas vezes, que conhecem cada nuance de Tanya, que já desenvolveram uma relação emocional específica com o estilo de animação, de trilha sonora e de ritmo narrativo da série. Esse tipo de expectativa é muito mais difícil de satisfazer do que a de uma série nova.
        </p>
        <p>
          O retorno de MYTH&ROID com uma nova abertura é o sinal mais forte de que a produção entende o que faz Youjo Senki funcionar como experiência. O grupo não estava obrigado a voltar — poderiam ter escolhido um artista diferente — e o fato de que tanto a música de abertura quanto o encerramento (com a própria Aoi Yūki cantando como Tanya) foram confirmados antes da estreia sugere uma atenção cuidadosa à identidade sonora da série. Agora falta saber se os 12 episódios vão entregar a profundidade de arco que os leitores da light novel sabem que o material de origem tem. A T2 tem um dos melhores pontos de partida possíveis — só precisa não desperdiçá-lo.
        </p>
      </EditorialTake>

      <ArticleSources category="otaku"
        sources={[
          {
            title: "OtakuPT — Temporada 2 de Youjo Senki revela data de estreia",
            url: "https://www.otakupt.com/anime/temporada-2-de-youjo-senki-revela-data-de-estreia/",
            publisher: "OtakuPT",
            accessedAt: "Junho 2026"
          },
          {
            title: "OtakuPT — Trailer de Youjo Senki 2 revela abertura e encerramento (MYTH&ROID e Aoi Yuki)",
            url: "https://www.otakupt.com/anime/trailer-de-youjo-senki-2-revela-tema-de-abertura-e-encerramento/",
            publisher: "OtakuPT",
            accessedAt: "Julho 2026"
          },
          {
            title: "Anime United — Primeiras impressões: Youjo Senki 2ª Temporada",
            url: "https://www.animeunited.com.br/noticias/primeiras-impressoes-youjo-senki-2a-temporada/",
            publisher: "Anime United",
            accessedAt: "Julho 2026"
          },
          {
            title: "IntoxiAnime — Youjo Senki 2ª temporada ganha visual e data de estreia",
            url: "https://www.intoxianime.com/2026/06/youjo-senki-2o-temporada-ganha-visual-e-data-de-estreia/",
            publisher: "IntoxiAnime",
            accessedAt: "Junho 2026"
          },
          {
            title: "MangaHoje — Youjo Senki Temporada 2: estreia confirmada para julho de 2026 (calendário e mini anime)",
            url: "https://mangahoje.com/manga/youjo-senki/youjo-senki-temporada-2-estreia-julho-2026",
            publisher: "MangaHoje",
            accessedAt: "Junho 2026"
          },
          {
            title: "Renda Geek — Youjo Senki 2 estreia em julho de 2026 com novo trailer e elenco",
            url: "https://rendageek.com.br/animes/youjo-senki-2-estreia-em-julho-de-2026/",
            publisher: "Renda Geek",
            accessedAt: "Março 2026"
          },
        ]}
      />
      <RelatedPosts currentSlug="youjo-senki-temporada-2-2026" />
      <CommentSection
        postId="youjo-senki-temporada-2-2026"
        postTitle="Youjo Senki Temporada 2 (2026): Guia Completo — Saga of Tanya the Evil"
        category="otaku"
      />
    </article>
  );
};

export default YoujoSenkiT22026;

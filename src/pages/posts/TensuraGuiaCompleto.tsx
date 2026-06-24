import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Tv, Film, BookOpen, Star, Globe, Music } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/tensura-guia-completo.webp";

import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";
const TensuraGuiaCompleto = () => {
  useEffect(() => {
    trackArticleRead("tensura-guia-completo-temporadas-filmes", "TenSura: Guia Completo de Temporadas e Filmes", "otaku");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" portalPath="/otaku/tensura" portalLabel="Painel TenSura" />
      <header className="mb-8">
        <CategoryBadge category="otaku" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          That Time I Got Reincarnated as a Slime: Guia Completo de Temporadas, Filmes e o Universo TenSura
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />20 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />18 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="That Time I Got Reincarnated as a Slime — cidade de Tempest" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          <strong>Tensei Shitara Slime Datta Ken</strong> — conhecido globalmente pela abreviação <strong>TenSura</strong> — é uma das franquias de isekai mais bem-sucedidas da história. A série ultrapassou <strong>56 milhões de cópias em circulação</strong> até o encerramento da light novel em novembro de 2025, e em 2024 já havia vendido mais de <strong>45 milhões de cópias</strong> da série completa. Com 4 temporadas de anime, 2 filmes, múltiplos spin-offs e mangás, TenSura continua expandindo seu universo em 2026.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <BookOpen className="h-7 w-7 text-otaku" />
          Origem: Web Novel, Light Novel e Mangá
        </h2>
        <p>
          A história foi criada por <strong>Fuse</strong> e publicada gratuitamente na plataforma <em>Shōsetsuka ni Narō</em> entre <strong>fevereiro de 2013 e janeiro de 2016</strong>, acumulando centenas de milhões de visualizações. A editora <strong>Micro Magazine</strong> adquiriu os direitos e publicou a versão em light novel a partir de <strong>maio de 2014</strong> sob o selo <em>GC Novels</em>, com ilustrações de <strong>Mitz Vah</strong>. A série foi <strong>encerrada com o volume 23</strong> — intitulado <em>Genesis of Rivalry</em> (相克創世, Sōkoku Sōsei) — lançado em <strong>29 de novembro de 2025</strong>. Simultaneamente foi publicada a história paralela <em>How to Spend a Certain Vacation</em>. A <strong>Yen Press</strong> publica a série em inglês no Ocidente desde dezembro de 2017. A série acumulou <strong>4,5 milhões de volumes</strong> em circulação só em seu primeiro ano e foi o <strong>quinto título mais vendido</strong> de 2018 com 539.277 cópias.
        </p>
        <p>
          O mangá principal é desenhado por <strong>Taiki Kawakami</strong> e publicado na revista <strong>Monthly Shōnen Sirius</strong> (editora Kodansha) desde março de 2015 — a Kodansha USA distribui em inglês. Existem ainda múltiplos spin-offs em mangá publicados na mesma revista:
        </p>
        <div className="not-prose grid sm:grid-cols-2 gap-3 my-4">
          {[
            ["The Slime Diaries", "Slice-of-life no cotidiano de Tempest — de Shiba (anime em 2021)"],
            ["Clayman Revenge", "Lorde Demônio Clayman adquire 'Regressor' e volta 70 anos no tempo"],
            ["Gourmet Story: Peko & Rimuru", "Culinária e conflitos — spin-off de Chika Nakatani (2023)"],
            ["Trinity in Tempest", "Três espiãs de diferentes Lordes Demônio vivendo em Tempest"],
            ["Ways of the Monster Nation", "Guia da vida em Tempest — de Shō Okagiri"],
            ["How to Spend a Certain Vacation", "História paralela: Rimuru, Veldora e Hinata — de Yuzo Takada (2023–2025)"],
          ].map(([t, d]) => (
            <div key={t} className="bg-card border border-border rounded-lg p-3 text-sm">
              <p className="font-bold text-foreground">{t}</p>
              <p className="text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Tv className="h-7 w-7 text-otaku" />
          Temporada 1 — Outubro de 2018 a Março de 2019
        </h2>
        <div className="not-prose bg-card border border-border rounded-xl p-4 my-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            {[
              ["Estreia", "2 out 2018"],["Término", "19 mar 2019"],
              ["Episódios", "24 + OAD"],["Estúdio", "8-Bit"],
              ["Diretor", "Yasuhito Kikuchi"],["Rede", "Tokyo MX / BS11"],
              ["OP", '"Nameless Story" — Takuma Terashima'],
              ["ED", '"Another colony" — TRUE'],
            ].map(([k,v]) => (
              <div key={k}><span className="text-muted-foreground block text-xs">{k}</span><strong className="text-sm">{v}</strong></div>
            ))}
          </div>
        </div>
        <p>
          A primeira temporada adapta os <strong>volumes 1 a 5</strong> da light novel. Satoru Mikami (37 anos, salaryman) é esfaqueado em Tóquio por um ladrão e renasce em um mundo de fantasia como uma gosma azul. Nomeado <strong>Rimuru Tempest</strong> pelo dragão aprisionado Veldora, ele descobre que sua forma concede habilidades únicas — principalmente <em>Predador (Gluttony)</em>, que permite absorver e copiar qualquer ser ou habilidade. A temporada cobre: a organização dos Goblin, o encontro com os Ogres (futuros Kijin), a guerra contra o Orc Lord e os fundamentos da <strong>Federação Jura-Tempest</strong>. Um OAD (Original Animation Disc) foi lançado com o volume 13 da light novel em abril de 2019.
        </p>
        <div className="not-prose bg-otaku/10 border border-otaku/30 rounded-xl p-4 my-4">
          <p className="font-bold text-otaku mb-2 text-sm">✨ Marcos da Temporada 1</p>
          <ul className="text-sm text-muted-foreground space-y-1 mb-0">
            <li>• Rimuru absorve Veldora e lhe dá o sobrenome "Tempest"</li>
            <li>• Os Goblin evoluem para Hobgoblin após receber nomes</li>
            <li>• Batalha épica contra o Orc Lord — Rimuru revela todo seu poder</li>
            <li>• Rimuru assume forma humana permanente (cabelos azul-prateados)</li>
            <li>• Fundação formal da Federação Jura-Tempest</li>
          </ul>
      <AdInArticle />
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Tv className="h-7 w-7 text-otaku" />
          Temporada 2 — Janeiro a Setembro de 2021
        </h2>
        <div className="not-prose bg-card border border-border rounded-xl p-4 my-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            {[
              ["Parte 1", "12 jan — 6 abr 2021"],["Parte 2", "6 jul — 21 set 2021"],
              ["Episódios", "24 (12+12)"],["Diretor", "Atsushi Nakayama"],
              ["Volumes LN", "6 a 9"],["OP P1", '"Styx Helix" — MYTH&ROID'],
              ["OP P2", '"Like Flames" — MindaRyn'],["Streaming", "Crunchyroll (global)"],
            ].map(([k,v]) => (
              <div key={k}><span className="text-muted-foreground block text-xs">{k}</span><strong className="text-sm">{v}</strong></div>
            ))}
          </div>
        </div>
        <p>
          A segunda temporada foi dividida em dois cursos com o spin-off <strong>The Slime Diaries</strong> (abril–junho de 2021, 12 episódios) entre eles. O novo diretor <strong>Atsushi Nakayama</strong> assumiu o lugar de Kikuchi. A <strong>Parte 1</strong> abrange o arco da conspiração de Clayman: Shion e outros habitantes de Tempest são assassinados, forçando Rimuru a sacrificar <strong>10.000 soldados do exército humano</strong> para evoluir para <strong>Demon Lord</strong> e ressuscitar seus súditos. A <strong>Parte 2</strong> culmina na Walpurgis — a reunião dos Demon Lords — onde Rimuru derrota Clayman, que se revela um títere de Kazaream, e é reconhecido como membro legítimo dos Grandes Demon Lords. Milim revela sua forma de <strong>Dragon Nova</strong>.
        </p>
        <div className="not-prose bg-otaku/10 border border-otaku/30 rounded-xl p-4 my-4">
          <p className="font-bold text-otaku mb-2 text-sm">⚡ Marcos da Temporada 2</p>
          <ul className="text-sm text-muted-foreground space-y-1 mb-0">
            <li>• Morte de Shion — o momento mais impactante da série</li>
            <li>• Rimuru devora 10.000 soldados — evolução para Demon Lord</li>
            <li>• Ressurreição dos mortos de Tempest pela habilidade <em>Mercy of the Demon Lord</em></li>
            <li>• Walpurgis: Clayman derrotado, Rimuru aceito como Demon Lord</li>
            <li>• Milim revela sua verdadeira forma: Dragon Nova herdeira de Veldanava</li>
          </ul>
        </div>

        <AdRectangle className="my-8" />

        
<h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Tv className="h-7 w-7 text-otaku" />
          Temporada 3 — Abril a Setembro de 2024
        </h2>
        <div className="not-prose bg-card border border-border rounded-xl p-4 my-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            {[
              ["Estreia", "5 abr 2024"],["Término", "27 set 2024"],
              ["Episódios", "24 (2 cursos)"],["Rede", "NTV / BS11"],
              ["Especial pré-T3", "ep. 48.5 — 30 mar 2024"],["Volumes LN", "10 a 15"],
              ["Streaming", "Crunchyroll (dub multilíngue)"],["Região Ásia", "Muse Asia (YouTube)"],
            ].map(([k,v]) => (
              <div key={k}><span className="text-muted-foreground block text-xs">{k}</span><strong className="text-sm">{v}</strong></div>
            ))}
          </div>
        </div>
        <p>
          A terceira temporada estreou no bloco <em>Friday Anime Night</em> da NTV precedida por um especial de recapitulação (episódio 48.5) em 30 de março de 2024. O arco abrange o <strong>Festival do Fundador de Tempest</strong>, o desenvolvimento das relações diplomáticas com o Império de Farmas e outras nações, e o aprofundamento da visão de Rimuru sobre a coexistência entre humanos e monstros. Ao final da T3, em <strong>27 de setembro de 2024</strong>, foram anunciadas oficialmente a <strong>4ª temporada</strong> e o <strong>2º filme</strong>.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Film className="h-7 w-7 text-otaku" />
          Filme 1: Scarlet Bond — 25 de Novembro de 2022
        </h2>
        <p>
          <strong>Tensei Shitara Slime Datta Ken: Guren no Kizuna-hen</strong> estreou nos cinemas japoneses em <strong>25 de novembro de 2022</strong>, produzido pelo estúdio 8-Bit. História original — não adaptada da light novel — ambientada no reino de <strong>Raja</strong>, ao oeste de Tempest. A rainha <strong>Towa</strong> usa a magia de uma tiara ancestral para proteger seu povo doente, mas o feitiço está consumindo sua vida. O filme apresenta <strong>Hiiro</strong>, um Ogre sobrevivente que afirma ser o irmão mais velho de Benimaru. Um volume mangá especial "Volume 0" do Scarlet Bond foi distribuído nas sessões de cinema, com tiragem de <strong>800.000 cópias</strong>.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Film className="h-7 w-7 text-otaku" />
          Filme 2: Tears of the Azure Sea — 27 de Fevereiro de 2026
        </h2>
        <p>
          <strong>Gekijō-ban Tensei Shitara Slime Datta Ken: Sōkai no Namida-hen</strong> estreou no Japão em <strong>27 de fevereiro de 2026</strong>. Anunciado em setembro de 2024 junto à T4, o segundo filme marca o retorno do estúdio 8-Bit. A <strong>Crunchyroll adquiriu os direitos teatrais mundiais</strong> com a Sony Pictures como distribuidora nos EUA para o lançamento internacional. A história é original e se passa durante os eventos cobertos pela T3/T4.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Star className="h-7 w-7 text-otaku" />
          Temporada 4 — 3 de Abril de 2026 (em exibição)
        </h2>
        <p>
          A <strong>4ª temporada</strong> estreou em <strong>3 de abril de 2026</strong>, marcando um feito histórico para a franquia: a T4 terá <strong>5 cursos (quarters) no total</strong>, sendo os dois primeiros exibidos consecutivamente. <strong>Miho Okasaki</strong> retorna como a voz de Rimuru. O estúdio 8-Bit também retorna. Os antagonistas centrais são <strong>Granbell Rosso</strong>, ex-Herói e líder dos Cinco Anciões do Reino de Siltrosso, e sua neta <strong>Mariabell Rosso</strong>. Disponível no Crunchyroll com simulcast internacional.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Music className="h-7 w-7 text-otaku" />
          Trilha Sonora e Músicas de Abertura
        </h2>
        <div className="not-prose overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-bold">Temporada</th>
                <th className="text-left py-2 pr-4 font-bold">Opening</th>
                <th className="text-left py-2 font-bold">Ending</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["T1","\"Nameless Story\" — Takuma Terashima","\"Another colony\" — TRUE"],
                ["T2 P1","\"Styx Helix\" — MYTH&ROID","\"Shuki Gozen\" — Takuma Terashima"],
                ["T2 P2","\"Like Flames\" — MindaRyn","\"Ame to Garasu\" — TRUE"],
                ["T3","\"Tensei\" — MindaRyn","A definir na exibição"],
                ["Slime Diaries","\"Happiness You & Me\" — TRUE","\"Bokura no Hibi\" — Miho Okasaki"],
              ].map(([t,o,e]) => (
                <tr key={t} className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-otaku">{t}</td>
                  <td className="py-2 pr-4 text-muted-foreground">{o}</td>
                  <td className="py-2 text-muted-foreground">{e}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Globe className="h-7 w-7 text-otaku" />
          Linha do Tempo Completa
        </h2>
        <div className="not-prose bg-card border border-border rounded-xl p-5 my-4">
          <div className="space-y-2.5 text-sm">
            {[
              ["Fev 2013","Web novel no Shōsetsuka ni Narō (serialização 2013–2016)"],
              ["Mai 2014","Light novel vol. 1 — Micro Magazine / GC Novels (il. Mitz Vah)"],
              ["Mar 2015","Mangá vol. 1 — Monthly Shōnen Sirius (il. Taiki Kawakami)"],
              ["Dez 2017","Yen Press — vol. 1 em inglês no Ocidente"],
              ["Out 2018","Anime T1 estreia (Tokyo MX) — 24 eps, dir. Yasuhito Kikuchi"],
              ["Abr 2019","OAD especial lançado com LN vol. 13"],
              ["Jan 2021","Anime T2 Parte 1 — 12 eps, dir. Atsushi Nakayama"],
              ["Abr 2021","The Slime Diaries spin-off — 12 eps"],
              ["Jul 2021","Anime T2 Parte 2 — 12 eps"],
              ["Nov 2022","Filme 1: Scarlet Bond (vol. 0 do mangá: 800K cópias)"],
              ["Abr 2022","Clayman Revenge spin-off mangá inicia no Sirius"],
              ["Nov 2023","ONA: Coleus' Dream — 3 episódios"],
              ["Mar 2024","Especial ep. 48.5 (recapitulação pré-T3)"],
              ["Abr 2024","Anime T3 estreia (NTV, 2 cursos, 24 eps)"],
              ["Set 2024","T3 finaliza — T4 e Filme 2 anunciados"],
              ["Nov 2025","LN vol. 23: Genesis of Rivalry — fim da série principal (56M cópias)"],
              ["Fev 2026","Filme 2: Tears of the Azure Sea estreia (Crunchyroll worldwide)"],
              ["Abr 2026","Anime T4 estreia — 5 cursos, em exibição (Crunchyroll simulcast)"],
            ].map(([date, event]) => (
              <div key={date} className="flex gap-3">
                <span className="text-otaku font-bold w-24 shrink-0">{date}</span>
                <span className="text-muted-foreground">{event}</span>
              </div>
            ))}
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Globe className="h-7 w-7 text-otaku" />
          Onde Assistir
        </h2>
        <div className="not-prose grid sm:grid-cols-2 gap-3 my-4">
          {[
            ["Crunchyroll","T1–T3, Slime Diaries, Scarlet Bond — legendado PT-BR e dub inglês"],
            ["NTV / BS11","Transmissão original no Japão — T4 às sextas à noite"],
            ["Muse Asia (YouTube)","Ásia (excl. Japão) — regiões selecionadas, gratuito"],
            ["Yen Press / Kodansha USA","Light novel e mangá em inglês físico e digital"],
          ].map(([p, i]) => (
            <div key={p} className="bg-card border border-border rounded-lg p-3 text-sm">
              <p className="font-bold text-foreground">{p}</p>
              <p className="text-muted-foreground">{i}</p>
            </div>
          ))}
        </div>
      </div>

            
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#127956;</span>
          Os Spin-offs: Tensura Nikki e Slime Chronicles
        </h2>
        <p>
          Além da série principal, o universo de TenSura tem dois spin-offs animados que expandem o universo com tom completamente diferente. <strong>Tensura Nikki: Tensei Shitara Slime Datta Ken</strong> (2021, estúdio 8bit) é uma série de slice-of-life que mostra o cotidiano de Tempest nos intervalos entre os arcos principais — episódios leves focados em personagens secundários, culinária, festivais e momentos que a série principal não tem tempo de mostrar. É recomendada para fãs que querem mais tempo com o elenco sem o peso narrativo dos arcos de combate.
        </p>
        <p>
          <strong>The Slime Diaries</strong> (nome alternativo do Tensura Nikki em algumas plataformas) foi bem recebido como complemento à série principal — não substitui os arcos principais mas funciona como descanso entre temporadas densas. Para o espectador brasileiro, está disponível na Crunchyroll. O filme <strong>Scarlet Bond</strong> (novembro de 2022) é uma história original ambientada no universo de TenSura — não adapta material da light novel mas foi supervisionado por Fuse para garantir consistência com o cânone.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#127918;</span>
          O Que a Temporada 4 Cobre: Arco da Grande Guerra de Tenma
        </h2>
        <p>
          A <strong>Temporada 4 de TenSura</strong>, confirmada para <strong>abril de 2026</strong> como parte da Spring Season, adapta os arcos subsequentes à T3 da light novel. Com base no ritmo de adaptação das temporadas anteriores (8bit cobre aproximadamente 4–5 volumes por temporada), a T4 deve abordar os arcos que culminam na resolução do conflito com as nações humanas que as temporadas anteriores estabeleceram como ameaça crescente.
        </p>
        <p>
          A <strong>Grande Guerra de Tenma</strong> — conflito em escala que envolve os Demon Lords, as nações humanas e entidades de escala divina — é o arco de maior escopo da série até o momento. É onde TenSura finalmente escala de "isekai de construção de nação" para "épico de fantasia em escala cósmica". Os eventos da Guerra de Tenma redefinem o equilíbrio de poder no mundo inteiro e colocam Rimuru numa posição que as temporadas anteriores apenas insinuavam. O 8bit confirmou a produção com o mesmo diretor e equipe principal das temporadas anteriores — um sinal positivo de continuidade de qualidade.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#128218;</span>
          Como Assistir TenSura em Ordem: Guia Completo
        </h2>
        <p>
          A ordem cronológica de assistência para quem quer acompanhar TenSura completo em 2026:
        </p>
        <p>
          <strong>1.</strong> Temporada 1 (24 episódios, outubro 2018 – março 2019) — Do nascimento de Rimuru até a fundação de Tempest e primeiros contatos com o mundo. <strong>2.</strong> Temporada 2 Parte 1 (12 episódios, janeiro–março 2021) — Primeiros conflitos com nações humanas, revelações sobre os Demon Lords. <strong>3.</strong> Tensura Nikki (12 episódios, abril–junho 2021) — Opcional; cotidiano de Tempest entre os arcos, recomendado após a T2P1. <strong>4.</strong> Temporada 2 Parte 2 (12 episódios, julho–setembro 2021) — Walpurgis, ingresso de Rimuru no Octagram, resolução dos conflitos da T2P1. <strong>5.</strong> Filme Scarlet Bond (novembro 2022, ~90 min) — História original, pode ser assistido após a T2. <strong>6.</strong> Temporada 3 (24 episódios, outubro 2023 – março 2024) — Expansão de Tempest, novos aliados e antagonistas, escalonamento do conflito. <strong>7.</strong> Temporada 4 (abril 2026 em diante) — Arcos finais da light novel em andamento. Todo o conteúdo está disponível na Crunchyroll com legendas em português.
        </p>

      <EditorialTake category="otaku" title="Análise do Marcos: TenSura provei que slice-of-life de construção de nação funciona em escala épica">
        <p>
          Tensei Shitara Slime Datta Ken é uma light novel de <strong>Fuse</strong>, serializada originalmente no Shōsetsuka ni Narō a partir de 2013 e publicada fisicamente pela <strong>Micro Magazine</strong> (GC Novels) desde 2015 — 22 volumes lançados até 2026. O mangá, com arte de <strong>Taiki Kawakami</strong>, é publicado na Monthly Shōnen Sirius (Kodansha) desde 2015. O anime é produzido pelo estúdio <strong>8bit</strong>: T1 (outubro 2018 – março 2019, 24 eps), T2 Parte 1 (jan–mar 2021), T2 Parte 2 (jul–set 2021), especial Tensura Nikki (2021), filme Scarlet Bond (novembro 2022), T3 (outubro 2023 – março 2024) e <strong>T4 confirmada para abril de 2026</strong>. Disponível na <strong>Crunchyroll</strong> com legendas em português.
        </p>
        <p>
          O que me impressiona em TenSura depois de anos de acompanhamento é como Fuse manteve coerência no sistema de poder ao longo de 20+ volumes. Rimuru não é simplesmente 'forte demais para tudo' — há regras claras sobre o que ele pode e não pode fazer, e os antagonistas das temporadas mais recentes representam ameaças genuínas dentro dessas regras. A série provou que isekai de construção pode escalar para conflitos de escala divina sem perder o coração que fez a T1 funcionar: pessoas comuns tentando construir algo melhor juntas.
        </p>
      </EditorialTake>

            <ArticleSources category="otaku"
        sources={[
          {
            title: "Kodansha — TenSura",
            url: "https://www.ten-sura.com/",
            publisher: "Kodansha",
            accessedAt: "Maio 2026"
          },
          {
            title: "MyAnimeList — Tensei Shitara Slime",
            url: "https://myanimelist.net/anime/37430/Tensei_shitara_Slime_Datta_Ken",
            publisher: "MyAnimeList",
            accessedAt: "Maio 2026"
          },
          {
            title: "Crunchyroll — That Time I Got Reincarnated as a Slime",
            url: "https://www.crunchyroll.com/series/GYE5C6KWY/that-time-i-got-reincarnated-as-a-slime",
            publisher: "Crunchyroll",
            accessedAt: "Maio 2026"
          },
          {
            title: "8bit Studio — Site oficial",
            url: "http://www.8bit.co.jp/",
            publisher: "8bit Studio",
            accessedAt: "Maio 2026"
          },
          {
            title: "Box Office Mojo — Scarlet Bond",
            url: "https://www.boxofficemojo.com/",
            publisher: "Box Office Mojo",
            accessedAt: "Maio 2026"
          }
        ]}
      />
      <RelatedPosts currentSlug="tensura-guia-completo-temporadas-filmes" />
      <CommentSection postId="tensura-guia-completo-temporadas-filmes"  category="otaku" />
    </article>
  );
};

export default TensuraGuiaCompleto;
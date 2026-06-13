import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { ArrowLeft, Clock, User, Calendar, Star, Flame, Shield } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/demon-slayer-hashira-2026.webp";

import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";
const hashiras = [
  { nome: "Giyu Tomioka", respiracao: "Água", posicao: "Pilar da Água", status: "Ativo" },
  { nome: "Shinobu Kocho", respiracao: "Inseto", posicao: "Pilar dos Insetos", status: "Ativo" },
  { nome: "Kyojuro Rengoku", respiracao: "Chamas", posicao: "Pilar das Chamas", status: "Falecido (Arco do Trem Mugen)" },
  { nome: "Tengen Uzui", respiracao: "Som", posicao: "Pilar do Som", status: "Aposentado (Arco do Distrito de Entretenimento)" },
  { nome: "Mitsuri Kanroji", respiracao: "Amor", posicao: "Pilar do Amor", status: "Ativo" },
  { nome: "Obanai Iguro", respiracao: "Serpente", posicao: "Pilar da Serpente", status: "Ativo" },
  { nome: "Gyomei Himejima", respiracao: "Pedra", posicao: "Pilar da Pedra", status: "Ativo" },
  { nome: "Sanemi Shinazugawa", respiracao: "Vento", posicao: "Pilar do Vento", status: "Ativo" },
  { nome: "Muichiro Tokito", respiracao: "Névoa", posicao: "Pilar da Névoa", status: "Ativo" },
];

const DemonSlayerHashira2026 = () => {
  useEffect(() => {
    trackArticleRead("demon-slayer-hashira-guia-2026", "Demon Slayer: Guia Completo dos Hashira — Respirações e Poderes", "otaku");
  }, []);
  return (
  <article className="container py-8 max-w-4xl mx-auto">
    <BackNavigation category="otaku" />
    <header className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <CategoryBadge category="otaku" size="lg" />
        <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm font-medium">Anime · Demon Slayer</span>
      </div>
      <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
        Demon Slayer: Guia Completo dos Hashira — Respirações, Poderes e Arcos
      </h1>
      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
        <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
        <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />17 de Março, 2026</span>
        <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
      </div>
      <ShareWhatsApp />
      <AuthorBio category="otaku" />
    </header>
    <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
      <img fetchpriority="high" loading="eager"
          decoding="async"
          src={heroImg} alt="Demon Slayer Hashira — guia completo" className="w-full h-full object-cover" />
    </div>
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <p className="lead text-xl text-muted-foreground">
        <strong>Demon Slayer: Kimetsu no Yaiba</strong> de Koyoharu Gotouge é um dos maiores fenômenos do anime moderno. Os <strong>Hashira</strong> — os nove Pilares da Corporação de Extermínio de Demônios — são os guerreiros mais poderosos da história e o coração das batalhas mais intensas da série.
      </p>

      <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
        <Shield className="h-7 w-7 text-pink-400" />O Que é um Hashira?
      </h2>
      <p>Hashira (柱, literalmente "Pilar") é o título dado aos caçadores de demônios de nível máximo dentro da Corporação de Extermínio de Demônios (Kisatsutai). Para se tornar um Hashira, um caçador precisa cumprir uma das seguintes condições:</p>
      <ul>
        <li>Matar <strong>50 demônios</strong> ao longo da carreira, ou</li>
        <li>Matar um <strong>membro das Doze Luas — os demônios mais poderosos</strong> de Muzan Kibutsuji</li>
      </ul>
      <p>Existem apenas 9 Hashiras em qualquer momento na história — cada um especializado em uma Respiração (estilo de respiração que amplifica as capacidades físicas humanas a níveis sobre-humanos).</p>

      <AdLeaderboard className="my-8" />

      <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
        <Flame className="h-7 w-7 text-pink-400" />Os 9 Hashiras
      </h2>
      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
          <thead><tr className="bg-secondary">
            <th className="text-left py-3 px-4">Nome</th>
            <th className="text-left py-3 px-4">Respiração</th>
            <th className="text-left py-3 px-4">Posição</th>
            <th className="text-left py-3 px-4">Status</th>
          </tr></thead>
          <tbody>
            {hashiras.map(h => (
              <tr key={h.nome} className="border-t border-border">
                <td className="py-3 px-4 font-medium">{h.nome}</td>
                <td className="py-3 px-4 text-pink-400">{h.respiracao}</td>
                <td className="py-3 px-4 text-muted-foreground">{h.posicao}</td>
                <td className={`py-3 px-4 text-xs font-medium ${h.status.includes("Falecido") ? "text-red-400" : h.status.includes("Aposentado") ? "text-yellow-400" : "text-emerald-400"}`}>{h.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
        <Star className="h-7 w-7 text-pink-400" />Destaques por Personagem
      </h2>

      <h3>Kyojuro Rengoku — Pilar das Chamas</h3>
      <p>Rengoku é o personagem mais amado pela comunidade Demon Slayer, e com razão. Seu arco no <strong>Filme Mugen Train</strong> (2020) — o filme de anime com maior bilheteria da história até 2021, com US$ 500 milhões globais — estabeleceu o padrão emocional de toda a série. Filho de uma família com tradição nas Chamas, sua morte em combate contra o Akaza da Lua Superior 3 gerou um dos momentos mais impactantes do anime.</p>

      <h3>Tengen Uzui — Pilar do Som</h3>
      <p>O Pilar do Som foi o protagonista do <strong>Arco do Distrito de Entretenimento</strong>, adaptado na Temporada 2 (2021-2022). Antigo shinobi antes de se juntar à Corporação, Tengen usa duas machetes conectadas por uma corrente e sua respiração do som amplifica velocidade e percepção sensorial a níveis que permitem rastrear movimentos invisíveis a olho nu. É o único Hashira a sobreviver ao arco de seu título com uma aposentadoria honrosa.</p>

      <h3>Gyomei Himejima — Pilar da Pedra</h3>
      <p>Universalmente considerado o Hashira mais forte em combate direto pela maioria dos personagens da própria história, Himejima usa uma corrente com uma machado e um rosário de contas como armas — e é o único Hashira cego. Sua Respiração da Pedra tem apenas 6 formas (a maioria tem mais), mas cada uma é devastadoramente poderosa.</p>

      <AdRectangle className="my-8" />

      
<h2 className="text-2xl font-bold mt-10 mb-4">A Hierarquia das Respirações</h2>
      <p>No universo de Demon Slayer, todas as Respirações derivam de uma única origem: a <strong>Respiração do Sol</strong> (Hinokami Kagura), a mais antiga e poderosa. Tanjiro aprende essa respiração ao longo da história através da tradição familiar Kamado.</p>
      <p>As derivações seguem uma árvore:</p>
      <ul>
        <li><strong>Sol</strong> → Chamas, Água, Pedra, Trovão, Vento</li>
        <li><strong>Água</strong> → Serpente, Inseto, Flor/Amor</li>
        <li><strong>Trovão</strong> → Som</li>
        <li><strong>Vento</strong> → Névoa</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Onde Assistir Demon Slayer em 2026</h2>
      <p>Demon Slayer está disponível na <strong>Crunchyroll</strong> (com dublagem em português) e na <strong>Netflix</strong> (temporadas 1 e 2). O filme Mugen Train também está no streaming. A temporada do Arco do Castelo Infinito (Temporada 4) é a mais recente disponível.</p>

      <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
        <h3 className="text-xl font-bold mb-2">Qual é o seu Hashira favorito?</h3>
        <p className="text-muted-foreground">Conta pra gente nos comentários! 👇</p>
      </div>
    </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#129354;</span>
          A Corporação de Extermínio: Como Funciona a Organização
        </h2>
        <p>
          A <strong>Corporação de Extermínio de Demônios</strong> (Kisatsutai) é uma organização secreta que existe há séculos no Japão — não reconhecida oficialmente pelo governo, mas com uma rede extensa de treinadores (Nichirin), caçadores e apoiadores civis. Sua missão: eliminar demônios criados por Muzan Kibutsuji e, eventualmente, Muzan si mesmo. A Corporação se divide em hierarquias bem definidas — do caçador recém-aprovado que recebe uma Espada Nichirin até os nove Pilares (Hashira) que representam o topo absoluto da força humana na série.
        </p>
        <p>
          Os Pilares são selecionados por dois critérios únicos: ou o caçador eliminou <strong>50 demônios</strong>, ou eliminou um dos <strong>12 Kizuki</strong> (as Luas — demônios diretos de Muzan). Isso explica por que existem apenas nove Hashira ativos no início da história — o nível de habilidade exigido para qualquer uma das duas condições elimina a vasta maioria dos caçadores. Cada Hashira domina uma <strong>Técnica de Respiração</strong> única derivada da Respiração Solar original de Yoriichi Tsugikuni — o único caçador na história da série que a dominou de forma nata.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#128293;</span>
          Cada Hashira: Técnica, Arco e Destino
        </h2>
        <p>
          <strong>Kyojuro Rengoku</strong> (Respiração das Chamas) é o Pilar do Fogo e o primeiro Hashira a ser profundamente desenvolvido na série — seu arco no filme Mugen Train (2020) é considerado um dos momentos mais impactantes do anime moderno. Sua determinação inabalável e a afirmação "Queime seu coração!" definem o código ético de como um Hashira deve viver. Seu confronto com Akaza no final do filme estabelece o padrão para as batalhas de Hashira que viriam a seguir.
        </p>
        <p>
          <strong>Tengen Uzui</strong> (Respiração do Som) é o Pilar do Som — ex-shinobi de uma família de operativos de espionagem. Seu arco no Distrito de Entretenimento (Temporada 2) o coloca frente a frente com Gyutaro e Daki, os demônios gêmeos da Lua Superior Seis. Tengen é o único Hashira que se aposenta com vida intacta durante os eventos principais — uma raridade numa série que não protege seus personagens.
        </p>
        <p>
          <strong>Muichiro Tokito</strong> (Respiração da Névoa) é o Pilar da Névoa — o mais jovem Hashira da história, tendo alcançado o título em apenas dois meses de treinamento. Seu arco na Vila dos Ferreiros revela sua origem e conexão com a linhagem de Yoriichi. <strong>Mitsuri Kanroji</strong> (Respiração do Amor) é a Pilar do Amor — sua técnica única adaptada ao físico dela cria movimentos impossíveis para qualquer outro corpo humano. <strong>Obanai Iguro</strong> (Respiração da Serpente) é o Pilar da Serpente — sua relação com Mitsuri é o único arco romântico substancial entre Hashira na série.
        </p>
        <p>
          <strong>Sanemi Shinazugawa</strong> (Respiração do Vento) é o Pilar do Vento — inicialmente hostil a Tanjiro por razões reveladas gradualmente. Seu passado trágico com demônios informa cada escolha que ele faz. <strong>Gyomei Himejima</strong> (Respiração da Pedra) é o Pilar da Pedra — considerado o Hashira mais forte fisicamente na era atual. Ex-monge cego com força física descomunal que usa uma cadeia com bola e machado em vez de espada. <strong>Giyu Tomioka</strong> (Respiração da Água) é o Pilar da Água — o Hashira que Tanjiro encontra no episódio 1. Sua decisão de poupar Nezuko foi o catalisador de toda a série.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#9728;</span>
          A Respiração Solar: A Origem de Tudo
        </h2>
        <p>
          Todas as Técnicas de Respiração derivam de uma única fonte: a <strong>Respiração Solar</strong>, criada por <strong>Yoriichi Tsugikuni</strong> há trezentos anos. Yoriichi foi o único humano na história da série que nasceu com o Marca do Caçador já ativa — o que o tornava literalmente o ser humano mais poderoso que existiu. Suas técnicas foram adaptadas e transformadas ao longo de séculos: Respiração do Trovão, da Água, das Chamas, da Pedra, do Vento e todas as outras são ramificações que diferentes linhagens desenvolveram a partir da Respiração Solar original.
        </p>
        <p>
          Tanjiro Kamado é o único caçador da era atual que aprende a Respiração Solar de forma direta — através de uma dança ritual preservada por sua família por gerações. Essa revelação no arco do Castelo Infinity é um dos momentos de maior impacto narrativo de toda a série, conectando a origem da Corporação de Extermínio com a família de Tanjiro de maneiras que remontam a Yoriichi.
        </p>

      <EditorialTake category="otaku" title="Análise do Marcos: os Hashira são o coração narrativo de Demon Slayer — e o anime de Ufotable fez jus a cada um">
        <p>
          Demon Slayer: Kimetsu no Yaiba é uma obra de <strong>Koyoharu Gotouge</strong>, serializada na Weekly Shōnen Jump de fevereiro de 2016 a maio de 2020 — 205 capítulos, 23 volumes. O anime é produzido pela <strong>Ufotable</strong> e se tornou o anime mais rentável da história do Japão em bilheteria (considerando o filme Mugen Train, com mais de 30 bilhões de ienes arrecadados no Japão). Os filmes do arco final, cobrindo o Castelo Infinity e o Amanhecer, estão em produção para 2026.
        </p>
        <p>
          O que Ufotable fez pelos Hashira vai além da animação espetacular dos combates: cada personagem recebeu um tratamento de direção de arte específico — paleta de cores, música tema e ritmo de cena que refletem a personalidade da técnica de cada Pilar. Rengoku tem calor e amplitude. Muichiro tem distância etérea. Giyu tem contenção e peso. Esse cuidado de direção é o que transforma batalhas potencialmente genéricas em momentos que a comunidade discute por anos.
        </p>
      </EditorialTake>

        <ArticleSources category="otaku" sources={[
    { title: 'Demon Slayer — Site Oficial', url: 'https://kimetsu.com/anime/', publisher: 'Aniplex/Ufotable', accessedAt: "Maio 2026" },
    { title: 'Crunchyroll — Demon Slayer', url: 'https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba', publisher: 'Crunchyroll', accessedAt: "Maio 2026" },
    { title: 'Sony Pictures Brasil', url: 'https://www.sonypictures.com.br/', publisher: 'Sony', accessedAt: "Maio 2026" },
    { title: 'Box Office Mojo — Mugen Train', url: 'https://www.boxofficemojo.com/title/tt9166672/', publisher: 'BOM', accessedAt: "Maio 2026" },
    { title: 'MyAnimeList — Kimetsu no Yaiba', url: 'https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba', publisher: 'MAL', accessedAt: "Maio 2026" }
  ]} />

      <RelatedPosts currentSlug="demon-slayer-hashira-2026" />
      <CommentSection postId="demon-slayer-hashira-2026" postTitle="Demon Slayer: Guia dos Hashira"  category="otaku" />
  </article>
);
};

export default DemonSlayerHashira2026;
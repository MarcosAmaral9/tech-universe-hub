import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import { useSmartBack } from "@/hooks/useSmartBack";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, Star, Flame, Shield } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import RelatedTopics from "@/components/RelatedTopics";
import heroImg from "@/assets/demon-slayer-hashira-2026.webp";

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
  const goBack = useSmartBack("/otaku");
  return (
  <article className="container py-8 max-w-4xl mx-auto">
    <button onClick={goBack} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Voltar para Otaku
      </button>
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
    </header>
    <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
      <img fetchpriority="high" src={heroImg} alt="Demon Slayer Hashira — guia completo" className="w-full h-full object-cover" />
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
    
      <RelatedTopics
        title="Leia também"
        links={[
          { label: "One Piece: Final Saga", href: "/post/one-piece-final-saga-2026", desc: "Outro mangá/anime de geração — onde estamos" },
          { label: "Animes mais aguardados 2026", href: "/post/animes-mais-aguardados-2026", desc: "O que vem por aí na temporada" },
          { label: "Todos os artigos Otaku", href: "/otaku" },
        ]}
      />
      <RelatedPosts currentSlug="demon-slayer-hashira-2026" category="otaku" />
    <CommentSection postId="demon-slayer-hashira-2026" postTitle="Demon Slayer: Guia dos Hashira" />
  </article>
);
};

export default DemonSlayerHashira2026;

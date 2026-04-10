import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Star, Zap, Shield, BarChart3, BookOpen, Flame } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/jujutsu-kaisen-guia-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const JujutsuKaisenGuia2026 = () => {
  useEffect(() => {
    trackArticleRead("jujutsu-kaisen-guia-completo-2026", "Jujutsu Kaisen: Guia Completo do Mangá e Anime em 2026", "otaku");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="otaku" size="lg" />
          <span className="px-3 py-1 bg-otaku/20 text-otaku rounded-full text-sm font-medium">Mangá · Anime · Jujutsu Kaisen</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Jujutsu Kaisen: Guia Completo do Mangá e Anime — Arcos, Personagens e o Legado da Série
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />11 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />17 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Jujutsu Kaisen guia completo mangá anime 2026" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Jujutsu Kaisen é um dos mangás mais importantes da geração. Criado por Gege Akutami e publicado na Weekly Shōnen Jump de 2018 a 2024, a série vendeu mais de <strong>100 milhões de cópias</strong> e gerou um anime aclamado pela MAPPA. Em 2026, com o anime adaptando os arcos finais, é o momento perfeito para um guia completo.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          O que é Jujutsu Kaisen: Premissa e Universo
        </h2>
        <p>
          Jujutsu Kaisen se passa em um Japão moderno onde existem <strong>Maldições</strong> — entidades sobrenaturais nascidas das emoções negativas humanas. Para combatê-las, existem os <strong>Feiticeiros de Jujutsu</strong>. A premissa central: <strong>Yuji Itadori</strong> engole um dedo do Rei das Maldições, Ryomen Sukuna, e passa a ser seu recipiente — condenado a ser executado após reunir todos os 20 dedos.
        </p>
        <p>O que torna JJK especial é a execução: sistemas de magia originais, personagens com motivações complexas, batalhas com consequências reais e subversão brutal de expectativas.</p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-otaku" />
          Todos os Arcos do Mangá — Guia sem Spoilers Maiores
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { arco: "Arco de Apresentação (caps. 1–8)", anime: "T1 — ep. 1–3", qualidade: "★★★★☆", desc: "Introdução de Yuji, Megumi e Nobara. Ritmo acelerado e regras básicas do sistema de magia." },
            { arco: "Arco da Escola Zenin (caps. 9–20)", anime: "T1 — ep. 4–13", qualidade: "★★★★☆", desc: "Apresenta Gojo, professores e primeiras batalhas de impacto. Combate Gojo contra Jogo." },
            { arco: "Arco da Missão de Resgate (caps. 21–54)", anime: "T1 — ep. 13–24", qualidade: "★★★★★", desc: "O arco mais impactante da T1. Consequências permanentes, mortes chocantes e virada narrativa definitiva." },
            { arco: "Arco de Shibuya (caps. 55–112)", anime: "T2 — ep. 1–23", qualidade: "★★★★★", desc: "O maior e mais denso arco da série. Dezenas de personagens, batalhas simultâneas e o evento mais impactante." },
            { arco: "Arco da Caça ao Culpado (caps. 113–136)", anime: "T2 — parte final", qualidade: "★★★★☆", desc: "Consequências do arco anterior. Yuji fugitivo, novas alianças e revelações do passado." },
            { arco: "Arco Culling Game (caps. 137–197)", anime: "T3 (2025–2026)", qualidade: "★★★★☆", desc: "O arco mais longo. Torneio de sobrevivência com regras de Kenjaku. Sorcerers históricos ressuscitados." },
            { arco: "Arco Final — Shinjuku Showdown (caps. 198–271)", anime: "Em produção (MAPPA)", qualidade: "★★★★★", desc: "O confronto final entre Yuji e Sukuna. Um dos finais de batalha mais épicos do gênero." },
          ].map(({ arco, anime, qualidade, desc }) => (
            <div key={arco} className="bg-card rounded-xl border border-otaku/20 p-5">
              <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                <h3 className="font-bold text-sm">{arco}</h3>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-otaku/15 text-otaku px-2 py-0.5 rounded-full">{anime}</span>
                  <span className="text-xs text-yellow-400">{qualidade}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          Personagens Principais: Guia Rápido
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
          {[
            { nome: "Yuji Itadori", papel: "Protagonista / Recipiente de Sukuna", desc: "Estudante com força sobre-humana. Motivado por dar às pessoas uma 'morte adequada'.", icon: "👊" },
            { nome: "Megumi Fushiguro", papel: "Protagonista secundário / Ten Shadows", desc: "Descendente do clã Zenin. Técnica das Dez Sombras. Pragmático e moralmente complexo.", icon: "🐍" },
            { nome: "Nobara Kugisaki", papel: "Protagonista secundária / Straw Doll", desc: "Usa pregos e bonecas de palha. Autoconfiança inabalável e coração emocional do trio.", icon: "🔨" },
            { nome: "Satoru Gojo", papel: "Professor / Feiticeiro mais forte", desc: "Usuário do Infinito e Seis Olhos. Objetivo: reformar o mundo dos feiticeiros educando a próxima geração.", icon: "♾️" },
            { nome: "Ryomen Sukuna", papel: "Antagonista principal / Rei das Maldições", desc: "Maldição ancestral de 1.000 anos. Técnica Dismantle & Cleave pode cortar qualquer coisa.", icon: "😈" },
            { nome: "Aoi Todo", papel: "Rival / Aliado de Yuji", desc: "Feiticeiro de grau 1. Técnica Boogie Woogie troca posições. Relação cômica com Yuji.", icon: "🤜" },
            { nome: "Kenjaku", papel: "Antagonista secundário / Manipulador", desc: "Feiticeiro de 1.000 anos que sobrevive transplantando seu cérebro. Um dos vilões mais bem construídos.", icon: "🧠" },
            { nome: "Yuta Okkotsu", papel: "Protagonista de JJK 0 / Grau Especial", desc: "Protagonista do volume 0. Feiticeiro de grau especial com reserva maldita gigantesca.", icon: "⚔️" },
          ].map(({ nome, papel, desc, icon }) => (
            <div key={nome} className="bg-card rounded-xl border border-otaku/20 p-4">
              <div className="text-xl mb-2">{icon}</div>
              <h3 className="font-bold text-sm mb-0.5">{nome}</h3>
              <p className="text-xs font-medium text-otaku mb-2">{papel}</p>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Flame className="h-7 w-7 text-otaku" />
          O Anime: Temporadas, Studios e Onde Assistir
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Temporada</th>
              <th className="text-left py-3 px-4">Episódios</th>
              <th className="text-left py-3 px-4">Arcos</th>
              <th className="text-left py-3 px-4">Nota</th>
              <th className="text-left py-3 px-4">Disponível</th>
            </tr></thead>
            <tbody>
              {[
                ["JJK 0 (Filme)", "~1h40", "Volume 0 / Yuta x Geto", "9,0/10 ⭐", "Crunchyroll / Netflix"],
                ["Temporada 1 (2020)", "24 eps", "Apresentação + Resgate", "8,7/10 ⭐", "Crunchyroll / Netflix"],
                ["Temporada 2 (2023)", "23 eps", "Passado de Gojo + Shibuya", "9,3/10 ⭐", "Crunchyroll"],
                ["Temporada 3 (2025)", "21 eps", "Culling Game (parte 1)", "8,9/10", "Crunchyroll"],
                ["Temporada 4 (2026)", "Em exibição", "Culling Game (pt 2) + Final", "TBD", "Crunchyroll (simulcast)"],
              ].map(([temp, eps, arcos, nota, onde]) => (
                <tr key={temp} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-otaku">{temp}</td>
                  <td className="py-3 px-4">{eps}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{arcos}</td>
                  <td className="py-3 px-4">{nota}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground">{onde}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-otaku" />
          Por Onde Começar: Guia para Iniciantes
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { opcao: "Opção A: Anime completo (recomendado)", desc: "Comece pelo Anime T1 (Crunchyroll). Se gostar, assista o Filme JJK 0 antes da T2. A MAPPA faz um trabalho visual excelente." },
            { opcao: "Opção B: Mangá do início", desc: "Os primeiros volumes são rápidos de ler. O mangá tem momentos que o anime cortou ou mudou." },
            { opcao: "Opção C: Volume 0 primeiro (Yuta)", desc: "O Volume 0 é cronologicamente anterior e funciona como porta de entrada mais suave." },
          ].map(({ opcao, desc }) => (
            <div key={opcao} className="bg-card rounded-xl border border-otaku/20 p-4">
              <h3 className="font-bold text-sm mb-1">{opcao}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Qual é o seu personagem favorito de JJK? ✨</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="jujutsu-kaisen-guia-completo-2026" />
      <CommentSection postId="jujutsu-kaisen-guia-completo-2026" postTitle="Jujutsu Kaisen: Guia Completo do Mangá e Anime em 2026" />
    </article>
  );
};

export default JujutsuKaisenGuia2026;

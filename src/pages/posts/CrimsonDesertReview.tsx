import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Star, ThumbsUp, ThumbsDown, AlertTriangle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import BackNavigation from "@/components/BackNavigation";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import crimsonReviewImg from "@/assets/crimson-desert-review.webp";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
const CrimsonDesertReview = () => {
  useEffect(() => {
    trackArticleRead("crimson-desert-review-2026", "Crimson Desert Review 2026", "geek");
  }, []);

  const scores = [
    { outlet: "Forbes",       score: "9.5/10", color: "text-green-400" },
    { outlet: "DualShockers", score: "9.5/10", color: "text-green-400" },
    { outlet: "TechRadar",    score: "8/10",   color: "text-green-400" },
    { outlet: "GamesRadar+",  score: "4/5",    color: "text-green-400" },
    { outlet: "PC Gamer",     score: "8/10",   color: "text-green-400" },
    { outlet: "Game Rant",    score: "8/10",   color: "text-green-400" },
    { outlet: "GameSpot",     score: "7/10",   color: "text-yellow-400" },
    { outlet: "TheGamer",     score: "4/5",    color: "text-yellow-400" },
    { outlet: "Screen Rant",  score: "7/10",   color: "text-yellow-400" },
    { outlet: "IGN",          score: "6/10 *", color: "text-yellow-400" },
  ];

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" portalPath="/geek/crimson-desert" portalLabel="Painel Crimson Desert" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">Review</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Crimson Desert: O Que os Críticos Disseram — Notas, Pontos Fortes e Fracos
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
          <span className="flex items-center gap-1.5"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />19 de Março, 2026</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />12 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img src={crimsonReviewImg} alt="Crimson Desert review 2026" fetchpriority="high" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Crimson Desert foi lançado em <strong>19 de março de 2026</strong> e o embargo de reviews foi levantado
          no mesmo dia. O resultado: um jogo amplamente elogiado por ambição, escala e combate — mas dividido
          pela fraqueza da narrativa, inventário confuso e excesso de sistemas. <strong>Metacritic PC: 78</strong>.
          <strong> OpenCritic: 80</strong> ("Strong", 81% dos críticos recomendam).
        </p>

        {/* Score table */}
        <div className="not-prose my-8">
          <AdLeaderboard className="my-8" />

          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-400" /> Notas da Crítica Especializada
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {scores.map(({ outlet, score, color }) => (
              <div key={outlet} className="bg-card border border-border rounded-xl p-4 flex flex-col gap-1">
                <span className="text-xs text-muted-foreground">{outlet}</span>
                <span className={`text-2xl font-bold ${color}`}>{score}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            * IGN publicou nota provisória de 6/10 após 110 horas com o jogo inacabado. Nota final pendente.
            Metacritic PC: 78 (85–91 críticas). OpenCritic: 80, 81% de recomendação.
              No Steam, o jogo atingiu um pico de <strong>239.000 jogadores simultâneos</strong> no lançamento,
              mas recebeu avaliações <strong>"Mistas"</strong> inicialmente — principalmente pela densidade excessiva de sistemas,
              curva de aprendizado íngreme e falta de tutoriais claros. A Pearl Abyss respondeu com um patch
              em <strong>23 de março de 2026</strong> que reduziu HP e dano de bosses específicos, diminuiu consumo de stamina
              em bloqueios e ajustou padrões de ataque de Kearush the Slayer.
          </p>
        </div>

        <h2>O Que os Críticos Elogiaram</h2>
        <p>
          O consenso positivo converge em torno de três pontos: o <strong>mundo aberto de Pywel</strong>,
          o <strong>sistema de combate</strong> e a <strong>escala do conteúdo</strong>. A GamesRadar+ descreveu
          Crimson Desert como "confuso, mas à medida que você desvenda sua mecânica e compensa suas falhas,
          elementos de genialidade e maravilha tornam a experiência válida." A PC Gamer chamou de "um dos
          jogos mais interessantes" que a crítica Mollie Taylor já jogou, apesar de parar aquém de obra-prima.
          Forbes e DualShockers foram os mais entusiastas, com 9.5/10 cada, elogiando a sensação de
          exploração genuína num mundo aberto que "realmente cumpre o que promete."
        </p>
        <div className="not-prose my-6 p-5 bg-green-500/10 rounded-xl border border-green-500/20">
          <h3 className="font-bold text-green-400 mb-3 flex items-center gap-2">
            <ThumbsUp className="h-4 w-4" /> Pontos Fortes (consenso da crítica)
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• <strong className="text-foreground">Mundo aberto vasto e vivo</strong> — Pywel tem múltiplas regiões com climas, facções e ecossistemas distintos</li>
            <li>• <strong className="text-foreground">Combate profundo e satisfatório</strong> — bosses épicos comparados a Shadow of the Colossus por vários críticos</li>
            <li>• <strong className="text-foreground">Tecnologia visual de ponta</strong> — BlackSpace Engine entrega física de fluidos, iluminação e destruição impressionantes</li>
            <li>• <strong className="text-foreground">Volume de conteúdo enorme</strong> — a TheGamer jogou 150 horas e ainda não havia esgotado o jogo</li>
            <li>• <strong className="text-foreground">Exploração recompensadora</strong> — segredos, masmorras e encontros fora do caminho principal frequentemente surpreendem</li>
          </ul>
        </div>

        <h2>O Que os Críticos Criticaram</h2>
        <p>
          O GameSpot resumiu bem o campo contrário: "Grande parte do impulso narrativo fica limitado a
          descrições curtas no menu de pausa" e "o design de missões frequentemente parece apenas seguir
          uma lista de tarefas." A Screen Rant foi mais dura, descrevendo Crimson Desert como "vítima
          de sua própria ambição", onde as mecânicas nunca se integram num todo coeso. A IGN apontou
          especificamente a dificuldade de inventário: o protagonista Kliff tem poucos slots de mochila e
          absolutamente tudo ocupa espaço, o que força pausas frequentes no combate para gerenciar itens.
        </p>
        <div className="not-prose my-6 p-5 bg-red-500/10 rounded-xl border border-red-500/20">
          <h3 className="font-bold text-red-400 mb-3 flex items-center gap-2">
            <ThumbsDown className="h-4 w-4" /> Pontos Fracos (consenso da crítica)
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• <strong className="text-foreground">Narrativa fraca</strong> — história e personagens pouco desenvolvidos; motivações de Kliff superficiais</li>
            <li>• <strong className="text-foreground">Inventário frustrante</strong> — poucos slots, tudo ocupa espaço, interface pouco intuitiva</li>
            <li>• <strong className="text-foreground">Design de missões repetitivo</strong> — muitas fetch quests e objetivos que parecem "marcar uma lista"</li>
            <li>• <strong className="text-foreground">Excesso de sistemas sobrepostos</strong> — curva de aprendizagem elevada com pouca tutorização adequada</li>
            <li>• <strong className="text-foreground">Problemas técnicos no lançamento</strong> — bugs pontuais relatados em console</li>
          </ul>
        </div>

        <div className="not-prose my-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl flex gap-3">
          <AlertTriangle className="h-5 w-5 text-yellow-400 shrink-0 mt-0.5" />
          <div className="text-sm text-muted-foreground">
            <strong className="text-foreground">Impacto financeiro:</strong> as ações da Pearl Abyss
            caíram <strong>28,96%</strong> na bolsa sul-coreana no dia 19/03/2026, após as notas ficarem
            abaixo das expectativas internas da empresa (que esperava médias de meados a altos 80s).
            O custo de desenvolvimento foi estimado em <strong>200 bilhões de KRW</strong> ao longo de
            aproximadamente 7 anos.
          </div>
        </div>

        <h2>Vale a Pena Comprar?</h2>
        <p>
          Crimson Desert é claramente um jogo para um perfil específico de jogador. Se você valoriza
          exploração de mundo aberto, combate desafiador contra bosses imensos e centenas de horas de
          conteúdo, o jogo entrega. Se você prioriza narrativa cinematográfica coesa ou sistemas
          apresentados de forma clara e intuitiva, pode se frustrar com as escolhas de design.
        </p>
        <p>
          A recomendação mais equilibrada da crítica veio da GamesRadar+: "Dedique tempo para sair
          do caminho principal e descubra quais de suas muitas facetas te atraem, e você encontrará
          um jogo muito melhor como sandbox do que como história."
        </p>
        <p>
          Por US$ 69,99 no lançamento (sem regional pricing implementado no Steam no Brasil),
          é um jogo que justifica o preço para fãs do gênero. Para os demais, aguardar uma promoção
          pode ser a escolha mais prudente.
        </p>
      </div>

      <RelatedPosts currentSlug="crimson-desert-review-2026" />
      <CommentSection postId="crimson-desert-review-2026" postTitle="Crimson Desert: Review 2026" />
    </article>
  );
};

export default CrimsonDesertReview;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, Calendar, User, ChevronRight, Zap, Bot, Brain, Shield, TrendingUp, AlertTriangle, ExternalLink, Star } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import iaFinancasImg from "@/assets/ia-financas-2026.webp";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
// Matrix rain effect component
const MatrixRain = () => {
  const columns = Array.from({ length: 20 }, (_, i) => ({
    left: `${i * 5}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${3 + Math.random() * 4}s`,
    chars: Array.from({ length: 8 }, () => String.fromCharCode(0x30A0 + Math.random() * 96)).join('\n'),
  }));
  

  useEffect(() => {
    trackArticleRead("ia-mercado-financeiro-2026-investimentos", "IA no Mercado Financeiro 2026: Como a IA Está Transformando Investimentos", "invest");
  }, []);
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      <style>{`
        @keyframes matrixFall {
          0% { transform: translateY(-100%); opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
      {columns.map((col, i) => (
        <div
          key={i}
          className="absolute text-[hsl(var(--invest-color))] text-xs font-mono whitespace-pre leading-tight"
          style={{
            left: col.left,
            top: 0,
            animation: `matrixFall ${col.duration} ${col.delay} linear infinite`,
          }}
        >
          {col.chars}
        </div>
      ))}
    </div>
  );
};

interface ToolCardProps {
  name: string;
  description: string;
  category: string;
  ease: number; // 1-5
  link?: string;
}

const ToolCard = ({ name, description, category, ease }: ToolCardProps) => (
  <div className="bg-card border border-border rounded-xl p-5 hover:border-[hsl(var(--invest-color))]/50 transition-all">
    <div className="flex items-center justify-between mb-2">
      <span className="text-xs bg-[hsl(var(--invest-color))]/20 text-[hsl(var(--invest-color))] px-2 py-0.5 rounded-full">{category}</span>
      <div className="flex gap-0.5">
        {[1,2,3,4,5].map(i => (
          <Star key={i} className={`h-3 w-3 ${i <= ease ? 'fill-[hsl(45,100%,50%)] text-[hsl(45,100%,50%)]' : 'text-muted'}`} />
        ))}
      </div>
    </div>
    <h4 className="font-bold mb-1">{name}</h4>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

const IAMercadoFinanceiro2026 = () => {

  return (
    <>
      <article className="container py-8 max-w-4xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/financas" className="hover:text-foreground transition-colors">Finanças</Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/ia" className="hover:text-foreground transition-colors">IA</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">IA no Mercado Financeiro</span>
        </nav>

        <header className="mb-8">
          <div className="flex gap-2 mb-4">
            <CategoryBadge category="invest" size="lg" />
            <CategoryBadge category="ia" size="lg" />
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Inteligência Artificial no Mercado Financeiro 2026: Como a IA Está Transformando Seus Investimentos
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            A IA já está gerenciando bilhões em investimentos. Descubra como a inteligência artificial está mudando as finanças em 2026 e como você pode usar isso a seu favor.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><User className="h-4 w-4" /> VICIO&lt;CODE&gt;</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 20 Fev 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 12 min de leitura</span>
          </div>
          <ShareWhatsApp />
        </header>

        {/* Hero with Matrix effect */}
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <img fetchpriority="high" src={iaFinancasImg} alt="IA no Mercado Financeiro 2026" className="w-full aspect-video object-cover" loading="eager" />
          <MatrixRain />
        </div>

        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed">
            Em 2026, mais de <strong>40% dos trades na B3 são executados por algoritmos</strong>. Robôs gerenciam carteiras de fundos multibilionários. E agora, pela primeira vez na história, o investidor comum tem acesso às mesmas ferramentas que os grandes fundos usavam exclusivamente até há pouco tempo.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            A questão não é mais "a IA vai substituir os analistas?". Ela já substituiu muitos. A questão é: <strong>você vai usar isso a seu favor?</strong>
          </p>
        </div>

        {/* O que a IA faz */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--ia-color))] pl-4">O Que a IA Faz no Mercado Financeiro Hoje</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { icon: <Brain className="h-6 w-6" />, title: "Análise de Sentimento", desc: "Modelos de linguagem analisam milhões de notícias, posts e relatórios em tempo real para prever movimentos antes que apareçam nos gráficos." },
              { icon: <Shield className="h-6 w-6" />, title: "Gestão de Risco Automatizada", desc: "Algoritmos monitoram carteiras 24/7 e rebalanceiam automaticamente quando os ativos saem dos parâmetros." },
              { icon: <AlertTriangle className="h-6 w-6" />, title: "Detecção de Fraudes", desc: "Bancos como Itaú e Bradesco usam IA para identificar transações suspeitas em milissegundos." },
              { icon: <TrendingUp className="h-6 w-6" />, title: "Credit Scoring Dinâmico", desc: "Fintechs calculam risco de crédito em tempo real com centenas de variáveis, não apenas o score do Serasa." },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5">
                <div className="text-[hsl(var(--ia-color))] mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2 text-[hsl(45,100%,50%)]">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Robo-Advisors */}
        <section className="mb-10">
          <AdLeaderboard className="my-8" />

          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--ia-color))] pl-4">Robo-Advisors: O Consultor Financeiro de R$ 0</h2>
          <p className="text-muted-foreground mb-6">Plataformas como Warren, Magnetis e Vérios usam IA para analisar seu perfil, montar carteira diversificada automaticamente, rebalancear periodicamente e minimizar custos.</p>
          
          {/* Comparativo visual */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-center mb-4">
                <User className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                <h3 className="font-bold text-lg">Gestor Humano</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-[hsl(var(--ia-color))]">▶</span> Taxa de administração: 1-3% ao ano</li>
                <li className="flex items-start gap-2"><span className="text-[hsl(var(--ia-color))]">▶</span> Investimento mínimo: R$ 50.000+</li>
                <li className="flex items-start gap-2"><span className="text-[hsl(var(--ia-color))]">▶</span> Rebalanceamento: mensal/trimestral</li>
                <li className="flex items-start gap-2"><span className="text-[hsl(var(--ia-color))]">▶</span> Análise: baseada em experiência e vieses</li>
                <li className="flex items-start gap-2"><span className="text-[hsl(var(--ia-color))]">▶</span> Disponibilidade: horário comercial</li>
              </ul>
            </div>
            <div className="bg-[hsl(var(--ia-color))]/5 border-2 border-[hsl(var(--ia-color))]/30 rounded-xl p-6">
              <div className="text-center mb-4">
                <Bot className="h-10 w-10 mx-auto text-[hsl(var(--ia-color))] mb-2" />
                <h3 className="font-bold text-lg">Robo-Advisor (IA)</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-[hsl(var(--ia-color))]">✓</span> Taxa de administração: 0,3-0,7% ao ano</li>
                <li className="flex items-start gap-2"><span className="text-[hsl(var(--ia-color))]">✓</span> Investimento mínimo: R$ 100</li>
                <li className="flex items-start gap-2"><span className="text-[hsl(var(--ia-color))]">✓</span> Rebalanceamento: contínuo (24/7)</li>
                <li className="flex items-start gap-2"><span className="text-[hsl(var(--ia-color))]">✓</span> Análise: baseada em dados e modelos</li>
                <li className="flex items-start gap-2"><span className="text-[hsl(var(--ia-color))]">✓</span> Disponibilidade: 24 horas, 7 dias</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-[hsl(var(--ia-color))]/10 border border-[hsl(var(--ia-color))]/30 rounded-xl p-5">
            <p className="flex items-start gap-2 text-sm">
              <Zap className="h-5 w-5 text-[hsl(var(--ia-color))] flex-shrink-0 mt-0.5" />
              <span><strong>Vantagem para o pequeno investidor:</strong> Acesso a gestão profissional por taxas muito menores que fundos tradicionais, com investimento mínimo acessível.</span>
            </p>
          </div>
        </section>

        {/* Ferramentas */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--ia-color))] pl-4">Ferramentas de IA Para Usar Agora</h2>
          
          <h3 className="text-lg font-bold mb-3 text-[hsl(45,100%,50%)]">Para Análise de Ações</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <ToolCard name="Trade Map" description="Dados fundamentalistas com IA integrada" category="Ações" ease={4} />
            <ToolCard name="Bloomberg Terminal" description="Padrão da indústria para profissionais" category="Ações" ease={2} />
            <ToolCard name="ChatGPT + Code Interpreter" description="Analise sua carteira com dados do Excel" category="Ações" ease={5} />
          </div>

          <h3 className="text-lg font-bold mb-3 text-[hsl(45,100%,50%)]">Para Cripto</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <ToolCard name="Glassnode" description="Análise on-chain com inteligência artificial" category="Cripto" ease={3} />
            <ToolCard name="Messari" description="Pesquisa de mercado cripto com IA" category="Cripto" ease={3} />
          </div>

          <h3 className="text-lg font-bold mb-3 text-[hsl(45,100%,50%)]">Para Gestão Pessoal</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <ToolCard name="Mobills com IA" description="Categoriza gastos automaticamente usando machine learning" category="Finanças Pessoais" ease={5} />
            <ToolCard name="Organizze" description="Previsão de fluxo de caixa com inteligência artificial" category="Finanças Pessoais" ease={4} />
          </div>
        </section>

        {/* Infográfico: Como IA analisa o mercado */}
        <section className="mb-10">
          <AdRectangle className="my-8" />

          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--ia-color))] pl-4">Como a IA Analisa o Mercado</h2>
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              {[
                { step: "1", title: "Coleta", desc: "Milhões de dados: notícias, redes sociais, relatórios, preços" },
                { step: "2", title: "Processamento", desc: "NLP e Machine Learning identificam padrões e sentimentos" },
                { step: "3", title: "Análise", desc: "Modelos preditivos calculam probabilidades de cenários" },
                { step: "4", title: "Decisão", desc: "Algoritmos executam trades ou geram recomendações" },
                { step: "5", title: "Aprendizado", desc: "Resultados retroalimentam o modelo para melhorar previsões" },
              ].map((item, i) => (
                <div key={i} className="flex-1 text-center">
                  <div className="w-10 h-10 rounded-full bg-[hsl(var(--ia-color))]/20 border-2 border-[hsl(var(--ia-color))] flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                  {i < 4 && <div className="hidden md:block text-muted-foreground mt-2">→</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lado Negro */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--ia-color))] pl-4">O Lado Negro: Riscos da IA nas Finanças</h2>
          <div className="space-y-4">
            {[
              { title: "Flash Crashes", desc: "Em 2010, algoritmos causaram queda de 9% em minutos no mercado americano. Episódios similares ocorreram em cripto em 2025.", icon: "⚡" },
              { title: "Viés Algorítmico", desc: "Modelos de crédito baseados em IA podem perpetuar discriminações históricas presentes nos dados de treinamento.", icon: "⚠️" },
              { title: "Over-otimização", desc: "Algoritmos que funcionam perfeitamente no backtesting falham quando as condições do mercado mudam.", icon: "📉" },
            ].map((item, i) => (
              <div key={i} className="bg-destructive/5 border border-destructive/20 rounded-xl p-5 flex items-start gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* O que a IA NÃO consegue */}
        <section className="mb-10">
          <div className="bg-card border-2 border-dashed border-[hsl(var(--ia-color))]/30 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Bot className="h-5 w-5 text-[hsl(var(--ia-color))]" />
              O Que a IA Não Consegue Fazer (Ainda)
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Prever eventos inesperados (cisnes negros, pandemias, guerras)",
                "Entender mudanças políticas e regulatórias complexas",
                "Substituir totalmente a intuição de mercado de traders experientes",
                "Garantir lucro — nenhum modelo é infalível",
                "Adaptar-se instantaneamente a condições de mercado nunca vistas",
                "Considerar seus objetivos de vida pessoais",
              ].map((item, i) => (
                <p key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-destructive">✕</span> {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Dicas práticas */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--ia-color))] pl-4">Como Usar IA Para Melhorar Suas Finanças Pessoais</h2>
          <div className="space-y-3">
            {[
              "Use ChatGPT/Gemini para entender relatórios de empresas que você quer investir",
              "Automatize seu orçamento com apps de IA (Mobills, Organizze)",
              "Consulte robo-advisors como ponto de partida para sua carteira",
              "Use screeners com IA para filtrar ações por múltiplos critérios",
              "Fique atento a alertas de notícias com análise de sentimento",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-[hsl(var(--ia-color))]/5 rounded-lg p-4">
                <span className="text-[hsl(var(--ia-color))] font-bold">{i + 1}.</span>
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusão */}
        <section className="mb-10">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">📋 Resumo do Artigo</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Mais de 40% dos trades na B3 já são executados por algoritmos de IA",
                "Robo-advisors democratizam o acesso a gestão profissional a partir de R$ 100",
                "Ferramentas como ChatGPT e Trade Map permitem análise sofisticada para qualquer investidor",
                "IA tem limitações reais: flash crashes, vieses e incapacidade de prever cisnes negros",
                "Use IA como ferramenta complementar, nunca como decisão única de investimento",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-[hsl(var(--ia-color))]">✓</span> {item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["IA finanças", "robo advisor", "inteligência artificial", "investimentos 2026", "machine learning", "fintech"].map(tag => (
            <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">#{tag}</span>
          ))}
        </div>

        <div className="flex gap-4 mb-8">
          <BackNavigation category="invest" />
          <BackNavigation category="invest" />
        </div>

        <RelatedPosts currentSlug="ia-mercado-financeiro-2026-investimentos" />
        <CommentSection postId="29" postTitle="IA no Mercado Financeiro 2026: Como a IA Está Transformando Investimentos" />
      </article>
    </>
  );
};

export default IAMercadoFinanceiro2026;

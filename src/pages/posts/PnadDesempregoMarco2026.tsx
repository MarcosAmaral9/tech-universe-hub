import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Briefcase, TrendingUp, BarChart3, AlertTriangle, Lightbulb } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/pnad-desemprego-marco-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const SLUG = "pnad-desemprego-61-marco-2026";
const TITLE = "PNAD Março 2026: Desemprego Sobe a 6,1%, Mas Mantém Mínima Histórica — O Que o Investidor Precisa Saber";

const PnadDesempregoMarco2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
            PNAD · IBGE · Mercado de Trabalho · Renda
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          PNAD Março 2026: Desemprego Sobe a 6,1%, Mas Mantém Mínima Histórica — O Que o Investidor Precisa Saber
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />4 de Maio, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />12 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="PNAD desemprego 6,1% março 2026 IBGE" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O IBGE divulgou nesta quinta-feira (30/04) a PNAD Contínua referente ao trimestre encerrado em março de 2026: a taxa de desocupação ficou em <strong>6,1%</strong> — o menor nível já registrado para esse período do ano desde o início da série, em 2012. A renda média habitual atingiu o <strong>recorde de R$ 3.722</strong> e a massa salarial alcançou <strong>R$ 374,8 bilhões</strong>. Mesmo com 6,6 milhões de desempregados (alta de 19,6% no trimestre), o quadro segue resiliente. Veja o que muda para a Selic, a bolsa e a sua carteira.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          Os Números do Trimestre Encerrado em Março
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { ind: "Taxa de desocupação", val: "6,1%", note: "Mínima histórica para o período", icon: "📉" },
            { ind: "Pessoas desocupadas", val: "6,6 mi", note: "+19,6% no trimestre / -13% no ano", icon: "👥" },
            { ind: "População ocupada", val: "102 mi", note: "-1,0% trim / +1,5% ano", icon: "💼" },
            { ind: "Rendimento médio", val: "R$ 3.722", note: "Recorde da série histórica", icon: "💰" },
          ].map(({ ind, val, note, icon }) => (
            <div key={ind} className="bg-card rounded-xl border border-invest/20 p-4 text-center">
              <div className="text-xl mb-1">{icon}</div>
              <div className="font-bold text-invest text-lg mb-0.5">{val}</div>
              <div className="text-xs font-medium mb-0.5">{ind}</div>
              <div className="text-xs text-muted-foreground">{note}</div>
            </div>
          ))}
        </div>
        <p>
          A alta da taxa frente ao trimestre anterior (5,1% em dezembro) é considerada <strong>sazonal</strong> pelos pesquisadores do IBGE: começo de ano concentra o fim de contratos temporários no comércio (vendedores, balconistas, atendentes) e na rede pública municipal de educação fundamental. Já a comparação anual mostra a verdadeira tendência: 987 mil pessoas a menos no desemprego em 12 meses.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Briefcase className="h-7 w-7 text-invest" />
          Destaques da Pesquisa — Tabela Completa
        </h2>
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Indicador</th>
              <th className="text-left py-3 px-4">Valor</th>
              <th className="text-left py-3 px-4">Observação</th>
            </tr></thead>
            <tbody>
              {[
                ["Taxa de desocupação", "6,1%", "Mínima histórica para o trimestre"],
                ["População desocupada", "6,6 milhões", "+1,1 mi no trimestre / -987 mil em 12 meses"],
                ["População ocupada", "102 milhões", "-1,0% trim / +1,5% ano"],
                ["Nível de ocupação", "58,2%", "-0,7 pp trim / +0,4 pp ano"],
                ["Subutilização", "14,3% (16,3 mi)", "+0,9 pp trim / -1,6 pp ano"],
                ["Desalentados", "2,7 milhões", "-15,9% em 12 meses (-509 mil pessoas)"],
                ["Carteira assinada (privado)", "39,2 milhões", "Estável trim / +1,3% ano"],
                ["Sem carteira (privado)", "13,3 milhões", "-2,1% trim / estável ano"],
                ["Setor público", "12,7 milhões", "-2,5% trim / +3,7% ano"],
                ["Conta própria", "26 milhões", "Estável trim / +2,4% ano"],
                ["Taxa de informalidade", "37,3%", "Recuo trim e ano (38,1 mi pessoas)"],
                ["Rendimento médio habitual", "R$ 3.722", "+1,6% trim / +5,5% ano (recorde)"],
                ["Massa de rendimento", "R$ 374,8 bilhões", "Estável trim / +7,1% ano (recorde)"],
              ].map(([ind, val, obs]) => (
                <tr key={ind} className="border-t border-border">
                  <td className="py-3 px-4 font-medium text-xs">{ind}</td>
                  <td className="py-3 px-4 text-invest font-bold text-xs">{val}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{obs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          Renda em Alta: Onde Cresceu Mais
        </h2>
        <p>
          O rendimento médio mensal subiu em poucos setores na comparação trimestral, mas teve avanços disseminados em 12 meses. Os destaques anuais:
        </p>
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Setor</th>
              <th className="text-left py-3 px-4">Variação anual</th>
              <th className="text-left py-3 px-4">Acréscimo médio (R$)</th>
            </tr></thead>
            <tbody>
              {[
                ["🧰 Outros serviços", "+11,4%", "+R$ 320"],
                ["💻 Informação, comunicação, financeiras e profissionais", "+5,9%", "+R$ 291"],
                ["🏠 Serviços domésticos", "+4,9%", "+R$ 66"],
                ["🏗️ Construção", "+4,5%", "+R$ 124"],
                ["🏛️ Adm. pública, educação e saúde", "+4,0%", "+R$ 198"],
                ["🛒 Comércio e reparação de veículos", "+3,9%", "+R$ 113"],
              ].map(([s, v, r]) => (
                <tr key={s} className="border-t border-border">
                  <td className="py-3 px-4 font-medium text-xs">{s}</td>
                  <td className="py-3 px-4 text-invest font-bold text-xs">{v}</td>
                  <td className="py-3 px-4 text-xs">{r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdRectangle className="my-8" />

        
<h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-invest" />
          O Que Economistas Estão Dizendo
        </h2>
        <p>
          André Valério, economista sênior do Inter, observa que a leitura exige cautela: removendo a sazonalidade, a métrica dessazonalizada chegou a <strong>5,7% em março — o maior valor desde setembro de 2025</strong>. "Vemos a continuidade da tendência de moderação do mercado de trabalho", afirma.
        </p>
        <p>
          Maykon Douglas destaca que a alta sazonal convive com avanço da ocupação em 12 meses e renda em ritmo consistente: "A massa salarial voltou a se acelerar, com crescimento real próximo de 6,4% em base anual". A leitura conjunta sugere desaceleração gradual, sem reversão brusca.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-invest" />
          Impactos para Seus Investimentos
        </h2>
        <div className="not-prose my-4 space-y-2">
          {[
            { tema: "Selic e renda fixa", txt: "Mercado de trabalho ainda apertado e massa salarial em expansão sustentam pressão de demanda. O Copom (29/04) cortou a Selic de 14,75% para 14,50% e o cenário de renda forte pode limitar a velocidade dos próximos cortes — segue favorável a Tesouro Selic, CDBs pós-fixados e IPCA+." },
            { tema: "Bolsa — consumo doméstico", txt: "Recorde de massa salarial (R$ 374,8 bi) e renda média (+5,5% no ano) sustentam tese de varejo, alimentos, bancos e crédito. Atenção a nomes expostos a renda baixa-média: ASSAI3, LREN3, ITUB4, BBAS3." },
            { tema: "Construção e imobiliário", txt: "Rendimento da construção cresceu 4,5% no ano. Demanda por imóveis e MCMV mantém pipeline aquecido para construtoras e FIIs de tijolo (CURY3, MRVE3, HGLG11)." },
            { tema: "Tech e serviços profissionais", txt: "Setor de informação, comunicação e financeiras teve a maior variação absoluta (+R$ 291). Sinal positivo para empresas de tecnologia listadas e BDRs (TOTS3, NVDC34, MSFT34)." },
          ].map(({ tema, txt }) => (
            <div key={tema} className="bg-card rounded-xl border border-invest/20 p-4">
              <h4 className="font-bold text-sm mb-1">{tema}</h4>
              <p className="text-xs text-muted-foreground">{txt}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Como o desemprego e a renda estão impactando o seu planejamento? 💼</h3>
          <p className="text-muted-foreground">Conta nos comentários como você está se posicionando! 👇</p>
        </div>
        <p className="text-xs text-muted-foreground mt-8 p-4 bg-secondary rounded-xl">
          📚 <strong>Fontes:</strong> IBGE (PNAD Contínua, 30/04/2026), declarações de Adriana Beringuy (IBGE), André Valério (Inter), Maykon Douglas. Reportagem g1 — Janize Colaço (30/04/2026). Artigo educacional, não constitui recomendação de investimento.
        </p>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: o que a PNAD esconde">
        <p>Olhar só a taxa de desemprego de 6,1% é miopia analítica. O Brasil tem uma <strong>taxa de informalidade próxima de 38%</strong> da população ocupada (IBGE/PNAD Contínua), o que distorce qualquer comparação com mercados desenvolvidos. Para o investidor brasileiro, o dado relevante é a <strong>massa de rendimento real</strong> — ela é o que sustenta o consumo interno e, por consequência, o lucro de varejistas listadas na B3 como Magazine Luiza (MGLU3) e Lojas Renner (LREN3). Quando o desemprego cai mas o rendimento real estagna, o crescimento do PIB vem de crédito — e isso tem prazo de validade curto, especialmente com a Selic ainda acima de dois dígitos.</p>
      </EditorialTake>
      <ArticleSources category="invest"
        sources={[
          { title: "PNAD Contínua — Indicadores Mensais", url: "https://www.ibge.gov.br/estatisticas/sociais/trabalho/9173-pesquisa-nacional-por-amostra-de-domicilios-continua-mensal.html", publisher: "IBGE", accessedAt: "Maio 2026" },
          { title: "Sistema de Contas Nacionais Trimestrais", url: "https://www.ibge.gov.br/estatisticas/economicas/contas-nacionais/9300-contas-nacionais-trimestrais.html", publisher: "IBGE", accessedAt: "Maio 2026" },
          { title: "Boletim Focus — Relatório de Mercado", url: "https://www.bcb.gov.br/publicacoes/focus", publisher: "Banco Central do Brasil", accessedAt: "Maio 2026" },
          { title: "CAGED — Cadastro Geral de Empregados e Desempregados", url: "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/novo-caged", publisher: "Ministério do Trabalho e Emprego", accessedAt: "Maio 2026" },
        ]}
      />
      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE}  category="invest" />
    </article>
  );
};

export default PnadDesempregoMarco2026;
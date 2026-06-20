/*
 * PAGE_META — adicionar em DynamicSEO.tsx dentro do objeto PAGE_META:
 *
 * "/post/ia-mercado-trabalho-brasil-2026": {
 *   title: "IA no Mercado de Trabalho Brasileiro em 2026: Quais Profissões Ganham e Quais Estão em Risco",
 *   description: "Análise completa do impacto da IA no mercado de trabalho brasileiro: dados do WEF, Goldman Sachs, FMI e IPEA, profissões mais expostas, plano de 90 dias para se diferenciar e o que o PL 2338/2023 muda.",
 *   keywords: "IA mercado de trabalho Brasil 2026, profissões em risco IA, WEF Future Jobs 2025, Goldman Sachs IA empregos, FMI inteligência artificial trabalho, IPEA IA Brasil, automação empregos Brasil, reskilling IA 90 dias, PL 2338 automação, impacto IA empregos",
 * },
 */

import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Brain, TrendingUp, Shield, BarChart3, Lightbulb, Zap, Users } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/ia-trabalho-profissoes-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const IATrabalho2026Impacto = () => {
  useEffect(() => {
    trackArticleRead(
      "ia-mercado-trabalho-brasil-2026",
      "IA no Mercado de Trabalho Brasileiro em 2026: Quais Profissões Ganham e Quais Estão em Risco",
      "ia"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="ia" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="ia" size="lg" />
          <span className="px-3 py-1 bg-ia/20 text-ia rounded-full text-sm font-medium">
            Trabalho · Carreira · Mercado Brasileiro
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          IA no Mercado de Trabalho Brasileiro em 2026: Quais Profissões Ganham e Quais Estão em Risco
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />13 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="ia" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="IA no mercado de trabalho brasileiro em 2026 — quais profissões ganham, quais estão em risco e como se reposicionar" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Uma pesquisa da Fundação Seade mostra que <strong>47% da população do estado de São Paulo já usa IA</strong> — principalmente para o trabalho. E 59% das empresas brasileiras colocam IA entre suas principais iniciativas, segundo a Amcham. A transformação não é hipótese futura: é realidade de abril de 2026. Este artigo analisa, com dados reais, quais carreiras estão sendo mais impactadas, qual o diferencial de salário de quem domina IA e como se reposicionar.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-violet-400" />
          Os Números do Mercado Brasileiro em 2026
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { num: "59%", desc: "das empresas BR têm IA como prioridade (Amcham 2026)", icon: "🏢" },
            { num: "47%", desc: "dos paulistas já usam IA — principalmente no trabalho", icon: "👤" },
            { num: "73%", desc: "dos devs que estudaram IA são profissionais pleno", icon: "💻" },
            { num: "R$ 35k", desc: "salário médio de head de IA no Brasil/mês", icon: "💰" },
          ].map(({ num, desc, icon }) => (
            <div key={num} className="bg-card rounded-xl border border-ia/20 p-4 text-center">
              <div className="text-xl mb-1">{icon}</div>
              <div className="font-bold text-ia text-2xl mb-1">{num}</div>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <p>
          O relatório da Rocketseat aponta que 60% dos profissionais que buscaram formação em IA em 2025 focaram em ferramentas aplicadas ao desenvolvimento de software e produtividade. JavaScript segue como a linguagem mais usada (68%), mas Python — a linguagem da IA — avança rapidamente, especialmente entre profissionais que buscam transição para a área.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-violet-400" />
          Profissões que Estão Ganhando com a IA
        </h2>
        <p>A IA não elimina trabalho — ela redistribui. As profissões abaixo estão com <strong>demanda crescente e salários em alta</strong>:</p>
        <div className="not-prose my-6 space-y-3">
          {[
            { cargo: "Engenheiro de Prompt / AI Product Manager", salario: "R$ 8.000–R$ 25.000/mês", alta: "+340%", desc: "Profissional que define como os modelos de IA são usados em produtos, desde a especificação dos prompts até a avaliação de qualidade das respostas. Não exige formação técnica profunda — entender o negócio é mais importante." },
            { cargo: "Engenheiro de Machine Learning / MLOps", salario: "R$ 15.000–R$ 45.000/mês", alta: "+180%", desc: "Treina, ajusta e coloca modelos em produção. Com as grandes empresas expandindo uso de IA, a demanda por quem consegue manter modelos funcionando em escala é altíssima." },
            { cargo: "Analista de Dados com IA", salario: "R$ 6.000–R$ 18.000/mês", alta: "+95%", desc: "Analistas que dominam ferramentas como Python, SQL e modelos de IA para análise preditiva são muito mais valorizados que analistas tradicionais. A IA automatizou os relatórios básicos; o humano analisa o que os modelos geram." },
            { cargo: "Desenvolvedor Full Stack com IA", salario: "R$ 8.000–R$ 22.000/mês", alta: "+75%", desc: "Devs que integram APIs de LLMs (Claude, GPT, Gemini) em aplicações reais são muito mais produtivos. Um dev com IA entrega em 1 semana o que antes levava um mês." },
            { cargo: "Especialista em Automação (n8n, Make, Zapier)", salario: "R$ 5.000–R$ 15.000/mês", alta: "+220%", desc: "Profissão que praticamente não existia em 2023. Empresas pagam bem por quem automatiza processos usando ferramentas no-code/low-code integradas com IA." },
          ].map(({ cargo, salario, alta, desc }) => (
            <div key={cargo} className="bg-card rounded-xl border border-green-500/20 p-5">
              <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                <h3 className="font-bold text-sm">{cargo}</h3>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-green-500/15 text-green-400 px-2 py-1 rounded-full font-medium">💰 {salario}</span>
                  <span className="text-xs bg-violet-500/15 text-ia px-2 py-1 rounded-full font-medium">↑{alta} vagas</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-violet-400" />
          Profissões com Maior Risco de Automação
        </h2>
        <AdInArticle />
        <p>Ser substituído pela IA não significa que a profissão vai desaparecer — mas o volume de vagas e os salários para quem não se adaptar tendem a cair. As mais expostas:</p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Profissão</th>
              <th className="text-left py-3 px-4">O que a IA já faz</th>
              <th className="text-left py-3 px-4">O que salva o humano</th>
              <th className="text-left py-3 px-4">Risco</th>
            </tr></thead>
            <tbody>
              {[
                ["Redator / Copywriter básico", "Gera textos, adapta tom, cria variações", "Estratégia, voz de marca, relacionamento", "Alto ⚠️"],
                ["Analista de suporte N1", "Responde dúvidas padrão, triagem de tickets", "Problemas complexos, empatia, escalada", "Alto ⚠️"],
                ["Tradutor de textos simples", "Traduz com qualidade profissional (DeepL, GPT)", "Conteúdo técnico especializado, localização cultural", "Alto ⚠️"],
                ["Analista de dados básico", "Limpa dados, gera relatórios padrão, visualiza", "Interpretação estratégica, storytelling", "Médio ⚡"],
                ["Programador júnior de código boilerplate", "Gera estruturas, testes, documentação", "Arquitetura, decisões de negócio, revisão crítica", "Médio ⚡"],
                ["Advogado de documentação padrão", "Gera contratos, pesquisa jurisprudência", "Estratégia, negociação, julgamento ético", "Médio ⚡"],
                ["Designer de templates", "Cria layouts, gera variações visuais", "Identidade de marca, criação original, direção de arte", "Médio ⚡"],
              ].map(([prof, faz, salva, risco]) => (
                <tr key={prof} className="border-t border-border">
                  <td className="py-3 px-4 font-medium">{prof}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{faz}</td>
                  <td className="py-3 px-4 text-xs text-green-400">{salva}</td>
                  <td className="py-3 px-4 text-xs font-bold">{risco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdRectangle className="my-8" />

        
<h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-violet-400" />
          Como Se Reposicionar: O Plano de 90 Dias
        </h2>
        <div className="not-prose my-6 space-y-4">
          {[
            { fase: "Dias 1–30: Fundação", cor: "border-blue-500/30", itens: ["Aprenda os fundamentos de prompting (Claude, ChatGPT): como dar instruções claras, usar contexto e iterar", "Experimente 3 ferramentas de IA na sua área — não precisa dominar, só entender o que fazem", "Identifique as 5 tarefas mais repetitivas do seu trabalho: quais poderiam ser parcialmente automatizadas?"] },
            { fase: "Dias 31–60: Prática", cor: "border-violet-500/30", itens: ["Automatize pelo menos 1 tarefa repetitiva do seu trabalho usando IA + uma ferramenta como n8n ou Zapier", "Crie um portfólio com exemplos concretos do que você fez com IA (economizou 5h/semana, reduziu erros em 30%...)", "Faça 1 curso especializado: Prompt Engineering, Python para IA, ou n8n (todos têm versões gratuitas)"] },
            { fase: "Dias 61–90: Diferenciação", cor: "border-green-500/30", itens: ["Documente seus resultados com números e publique no LinkedIn: 'Automatizei X e economizei Y horas por semana'", "Negocie revisão salarial ou procure vagas com o diferencial de IA no currículo — a média de aumento é 25–40%", "Posicione-se como o expert em IA do seu time — mesmo sendo 30% melhor que os colegas já cria grande vantagem"] },
          ].map(({ fase, cor, itens }) => (
            <div key={fase} className={`bg-card rounded-xl border ${cor} p-5`}>
              <h3 className="font-bold mb-3">{fase}</h3>
              <ul className="space-y-1.5">
                {itens.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-ia mt-0.5">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-violet-400" />
          A Pergunta Certa: Não É "A IA Vai Me Substituir?"
        </h2>
        <p>
          A pergunta certa é: <strong>"Um profissional que usa IA vai me substituir?"</strong>. Sim — e já está acontecendo. A boa notícia é que a barreira para aprender o suficiente para se diferenciar nunca foi tão baixa. Não é preciso virar engenheiro de machine learning. É preciso entender o que a IA faz bem, o que ela faz mal, e como você pode usar isso a seu favor.
        </p>
        <p>
          A pesquisa da Avantia é clara: 52% dos líderes discordam que a IA reduz empregos — mas acreditam que o perfil de quem é contratado vai mudar. Quem domina IA vai ganhar mais e trabalhar menos nas tarefas repetitivas. Quem ignora vai competir com quem domina. A escolha, por enquanto, ainda é sua.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-violet-400" />
          Os Dados Brasileiros: IBRE/FGV, OIT e IPEA Sobre Automação no Brasil
        </h2>
        <p>
          Enquanto debates globais usam estimativas amplas, três estudos com dados especificamente brasileiros foram publicados em 2025-2026 e merecem atenção direta. O primeiro é o levantamento do <strong>IBRE/FGV</strong> com base na metodologia da OIT: no terceiro trimestre de 2025, <strong>30% dos trabalhadores brasileiros estavam em ocupações expostas à IA generativa</strong> — equivalente a aproximadamente <strong>30,9 milhões de pessoas</strong>. O impacto é desproporcionalmente maior entre mulheres, trabalhadores jovens (18 a 30 anos), e em três setores específicos: comércio, serviços de informação e intermediação financeira.
        </p>
        <p>
          O segundo dado vem da própria <strong>OIT</strong>, no estudo <em>Generative AI and Jobs: A Refined Global Index of Occupational Exposure</em> (maio de 2025): globalmente, <strong>25% dos empregos estão potencialmente expostos</strong> à IA generativa, mas <strong>apenas 5% a 6% estão sob risco de substituição quase total</strong>. A distinção é crucial — "exposto" não significa "substituído". Significa que parte relevante das tarefas da ocupação pode ser automatizada, o que geralmente aumenta a produtividade do trabalhador que aprende a usar a IA, não elimina o trabalhador.
        </p>
        <p>
          O terceiro é do <strong>IPEA</strong>: em abril de 2026, o instituto lançou na Câmara dos Deputados o livro <em>Inteligência Artificial, Automação do Trabalho, Empregabilidade e Previdência Social</em>, 18º volume da série Estudos Estratégicos. O pesquisador Luis Kubota (CTS-Ipea) conclui que a automação contemporânea <strong>não elimina ocupações inteiras, mas reconfigura tarefas</strong> — alterando o conteúdo do trabalho, os requisitos de qualificação e os próprios processos. O alerta central do IPEA é para o setor de serviços, onde mais de <strong>80% das ocupações têm alguma exposição à IA generativa</strong> segundo o IBRE/FGV, concentrando o maior impacto absoluto em atividades administrativas, contábeis, jurídicas e de atendimento.
        </p>
        <p>
          Para a América Latina como um todo, o contexto é ainda mais delicado: <strong>aproximadamente 62% dos empregos</strong> estão em ocupações com alta probabilidade de automação — percentual significativamente superior ao de países desenvolvidos — porque a região tem maior concentração de trabalho repetitivo e menor capacidade imediata de requalificação em escala.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Brain className="h-7 w-7 text-violet-400" />
          Setores Brasileiros Mais Expostos: Onde o Impacto É Maior
        </h2>
        <p>
          Com base nos dados combinados do DIAP, IBRE/FGV e CNI/IPEA, os setores com maior exposição imediata no Brasil em 2026 são os seguintes:
        </p>
        <ul className="space-y-2 my-6">
          <li>
            <strong>Serviços financeiros e intermediação:</strong> Análise de crédito automatizada, atendimento bancário digital, processamento de documentos, gestão de carteiras. O Nubank, Itaú e Bradesco já processam bilhões de eventos por dia com IA sem intervenção humana. As funções que sobram são as de relacionamento, gestão de exceções e compliance regulatório.
          </li>
          <li>
            <strong>Comércio e varejo:</strong> Atendimento no ponto de venda, reposição de estoque, precificação dinâmica, análise de demanda. Autoatendimento e logística inteligente estão eliminando funções operacionais, mas expandindo papéis em e-commerce, análise de dados de comportamento do consumidor e marketing digital.
          </li>
          <li>
            <strong>Serviços administrativos e de escritório:</strong> CNI e IPEA confirmam que funções como assistente administrativo, operador de caixa, cobrador e datilógrafo estão em rápido declínio no mercado formal. Empresas médias que antes tinham 5 assistentes administrativos estão operando com 2 + ferramentas de automação.
          </li>
          <li>
            <strong>Indústria:</strong> O DIAP projeta redução de 10% a 20% em tarefas repetitivas até 2030, mas compensada em parte pelo aumento de demanda por técnicos, analistas e operadores qualificados em automação industrial, manutenção preditiva e controle de qualidade com visão computacional.
          </li>
          <li>
            <strong>Setores em expansão:</strong> Saúde, educação, cuidados pessoais e economia criativa devem expandir — reforçando a tese de reconfiguração do mercado, não colapso. O crescimento em técnicos de energia renovável, manutenção industrial especializada, programação e análise de dados também é confirmado por CNI e IPEA.
          </li>
        </ul>

      </div>

      <EditorialTake category="ia" title="Análise do Marcos: três competências que nenhuma IA substitui no curto prazo">
        <p>
          O Future of Jobs Report 2025 do WEF projeta criação líquida de 78 milhões de empregos globalmente até 2030 — 170 milhões criados, 92 milhões deslocados. As funções mais impactadas: atendimento ao cliente, contabilidade básica e desenvolvimento de software júnior. No Brasil, IPEA e CNI publicaram em 2024 análises mostrando exposição maior em serviços formais urbanos do que em ocupações manuais.
        </p>
        <p>
          O profissional brasileiro deve focar em três competências complementares à IA: <strong>pensamento crítico</strong> para validar outputs (a IA ainda erra de formas imprevisíveis), <strong>gestão de pessoas e projetos</strong> (não automatizável no curto prazo) e <strong>domínio de pelo menos uma ferramenta de IA</strong> aplicada à sua área. Quem ignorar o tema nos próximos 24 meses corre risco real de defasagem salarial — a diferença entre quem usa IA e quem não usa já é de 25–40% em produtividade em tarefas de escrita e análise.
        </p>
      </EditorialTake>

      <ArticleSources sources={[
        { title: "WEF — Future of Jobs Report 2025", url: "https://www.weforum.org/reports/the-future-of-jobs-report-2025", publisher: "World Economic Forum", accessedAt: "Maio 2026" },
        { title: "IPEA/CTS — IA, Automação do Trabalho, Empregabilidade e Previdência Social (abr/2026)", url: "https://www.ipea.gov.br/cts/pt/central-de-conteudo/todas-as-publicacoes/publicacoes/538-ia-e-o-futuro-do-mercado-de-trabalho", publisher: "IPEA", accessedAt: "Maio 2026" },
        { title: "OIT — Generative AI and Jobs: A Refined Global Index (maio 2025)", url: "https://www.ilo.org/publications/artificial-intelligence-and-jobs", publisher: "Organização Internacional do Trabalho", accessedAt: "Maio 2026" },
        { title: "DIAP — Transformações Estruturais no Mercado de Trabalho Brasileiro 2026–2030", url: "https://www.diap.org.br/index.php/noticias/artigos/92762-transformacoes-estruturais-no-mercado-de-trabalho-brasileiro-2026-2030-inteligencia-artificial-automacao-e-desigualdades-emergentes", publisher: "DIAP", accessedAt: "Maio 2026" },
        { title: "Stanford HAI — AI Index 2024", url: "https://hai.stanford.edu/research/ai-index-2024", publisher: "Stanford HAI", accessedAt: "Maio 2026" },
      ]} />

      <RelatedPosts currentSlug="ia-mercado-trabalho-brasil-2026" />
      <CommentSection category="ia" postId="ia-mercado-trabalho-brasil-2026" postTitle="IA no Mercado de Trabalho Brasileiro em 2026: Quais Profissões Ganham e Quais Estão em Risco" />
    </article>
  );
};

export default IATrabalho2026Impacto;

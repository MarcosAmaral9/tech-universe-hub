import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, Calendar, User, ChevronRight, Brain, CheckCircle2, AlertTriangle, Smartphone, ShieldAlert, Sparkles, MessageSquare, Calculator, ListChecks } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";
import heroImg from "@/assets/ia-financas-pessoais-2026.webp";

const FERRAMENTAS = [
  { nome: "ChatGPT / Gemini", tipo: "Assistentes de IA", uso: "Análise de extratos, simulações, dúvidas financeiras personalizadas", custo: "Gratuito (versão básica)" },
  { nome: "Organizze", tipo: "App de finanças", uso: "Controle de gastos com categorização automática por IA", custo: "Freemium" },
  { nome: "Mobills", tipo: "App de finanças", uso: "Planejamento financeiro, metas e alertas inteligentes", custo: "Freemium" },
  { nome: "Cora / Neon", tipo: "Bancos digitais", uso: "Categorização automática e insights de gastos via IA", custo: "Gratuito" },
  { nome: "Planilhas + IA", tipo: "DIY", uso: "Google Sheets com Gemini integrado para análise de dados financeiros", custo: "Gratuito" },
];

const IAFinancasPessoais2026 = () => {
  useEffect(() => {
    trackArticleRead("ia-para-financas-pessoais-2026", "Como usar IA para organizar suas finanças em 2026", "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex gap-2">
          <CategoryBadge category="invest" size="lg" />
          <CategoryBadge category="ia" size="lg" />
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 mt-4">
          Como usar IA para organizar suas finanças em 2026
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          Ferramentas de inteligência artificial já conseguem categorizar gastos, simular investimentos e responder dúvidas financeiras personalizadas. Veja como começar.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><User className="h-4 w-4" /> VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 22 Mar 2026</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 7 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="rounded-2xl overflow-hidden mb-8">
        <img fetchpriority="high" src={heroImg} alt="IA e finanças pessoais 2026" className="w-full aspect-video object-cover" loading="eager" />
      </div>

      <div className="prose prose-lg max-w-none space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          Você provavelmente já usa IA no trabalho ou pra criar conteúdo. Mas você já pensou em usar inteligência artificial para cuidar do seu bolso? Em 2026, isso virou realidade acessível — e quem ainda não experimentou está deixando dinheiro (e tempo) na mesa. A diferença entre quem usa IA para finanças pessoais e quem não usa não está no conhecimento técnico, mas em um hábito simples: transformar dados financeiros brutos (extratos, faturas, planilhas) em decisões organizadas, sem precisar de horas de trabalho manual.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Segundo pesquisa da Febraban, <strong>67% dos brasileiros</strong> consideram que não têm controle adequado sobre seus gastos mensais. A IA pode ser a ferramenta que faltava para mudar esse cenário — sem planilhas complicadas e sem precisar virar contador. O grande diferencial dos modelos de linguagem de 2026 é a capacidade de processar dados não estruturados: você não precisa formatar nada, só colar o extrato bruto e pedir o que precisa saber.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Vale uma ressalva importante desde já: usar IA para finanças pessoais não significa terceirizar decisões — significa <strong>acelerar a parte mecânica</strong> (categorizar, somar, comparar cenários) para que você gaste seu tempo na parte que realmente importa, que é decidir o que fazer com a informação organizada. A IA é excelente em processar volume; a decisão final continua sendo sua.
        </p>

        <AdLeaderboard />

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">O que a IA pode fazer pelas suas finanças</h2>
        <p className="text-muted-foreground leading-relaxed">Ferramentas de IA já conseguem hoje:</p>
        <div className="space-y-3">
          {[
            { icon: <ListChecks className="h-5 w-5" />, text: "Categorizar gastos automaticamente a partir do extrato do banco ou cartão de crédito" },
            { icon: <Sparkles className="h-5 w-5" />, text: "Identificar padrões de consumo e alertar quando você está gastando mais do que o normal em alguma categoria" },
            { icon: <Calculator className="h-5 w-5" />, text: "Simular cenários de investimento com base no seu perfil e nos dados do mercado atual" },
            { icon: <MessageSquare className="h-5 w-5" />, text: "Responder dúvidas financeiras de forma personalizada, sem precisar pagar uma hora de consultoria" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-[hsl(var(--invest-color))]/5 rounded-lg p-4">
              <span className="text-[hsl(var(--invest-color))] mt-0.5 flex-shrink-0">{item.icon}</span>
              <span className="text-sm text-muted-foreground">{item.text}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Ferramentas disponíveis em 2026</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3 text-muted-foreground font-medium">Ferramenta</th>
                <th className="text-left p-3 text-muted-foreground font-medium">Tipo</th>
                <th className="text-left p-3 text-muted-foreground font-medium">Uso principal</th>
                <th className="text-left p-3 text-muted-foreground font-medium">Custo</th>
              </tr>
            </thead>
            <tbody>
              {FERRAMENTAS.map((f, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="p-3 font-medium">{f.nome}</td>
                  <td className="p-3 text-xs text-muted-foreground">{f.tipo}</td>
                  <td className="p-3 text-xs text-muted-foreground">{f.uso}</td>
                  <td className="p-3 text-xs font-medium text-green-500">{f.custo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Como funciona na prática?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Você pode, por exemplo, colar seu extrato bancário em um chat de IA e pedir para ele identificar onde você está gastando mais, sugerir onde cortar e simular quanto você teria daqui a 12 meses se guardasse R$ 500 por mês com rendimento de CDI.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Não é magia — é <strong>análise de dados aplicada ao seu dia a dia</strong>. E funciona.
        </p>

        <AdRectangle />

        {/* Exemplo prático com prompt */}
        
<h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Exemplo: prompt para analisar seus gastos</h2>
        <div className="bg-card border border-border rounded-2xl p-6">
          <p className="text-xs text-muted-foreground mb-3 flex items-center gap-2"><MessageSquare className="h-4 w-4" /> Copie e cole este prompt no ChatGPT ou Gemini:</p>
          <div className="bg-muted rounded-xl p-4 font-mono text-xs text-muted-foreground leading-relaxed">
            <p>"Analise meus gastos do mês abaixo e me diga:</p>
            <p>1. Qual categoria eu mais gastei?</p>
            <p>2. Onde posso cortar sem perder qualidade de vida?</p>
            <p>3. Se eu economizar 20% dos gastos variáveis, quanto terei em 12 meses investindo a 100% do CDI (Selic a 14,5%)?</p>
            <br />
            <p>[Cole aqui seu extrato ou lista de gastos]"</p>
          </div>
          <p className="text-xs text-muted-foreground mt-3">💡 Dica: exporte o extrato como CSV pelo app do banco e cole direto no chat. A IA estrutura e analisa em segundos.</p>
        </div>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Casos de uso avançados</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <Calculator className="h-8 w-8 text-[hsl(var(--invest-color))] mb-3" />
            <h3 className="font-bold mb-2">Simulação de aposentadoria</h3>
            <p className="text-sm text-muted-foreground">Peça para a IA calcular quanto você precisa investir por mês para se aposentar em X anos, considerando inflação, taxa de juros e estilo de vida desejado.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <Smartphone className="h-8 w-8 text-[hsl(var(--invest-color))] mb-3" />
            <h3 className="font-bold mb-2">Comparação de produtos</h3>
            <p className="text-sm text-muted-foreground">Compare CDB vs Tesouro vs LCI informando prazos, taxas e alíquotas. A IA calcula o rendimento líquido real de cada um.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <Brain className="h-8 w-8 text-[hsl(var(--invest-color))] mb-3" />
            <h3 className="font-bold mb-2">Planejamento de metas</h3>
            <p className="text-sm text-muted-foreground">Defina metas (viagem, carro, reserva) e peça para a IA criar um plano mensal de aportes com projeção realista de prazos.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <Sparkles className="h-8 w-8 text-[hsl(var(--invest-color))] mb-3" />
            <h3 className="font-bold mb-2">Revisão de assinaturas</h3>
            <p className="text-sm text-muted-foreground">Liste todas as suas assinaturas e peça para a IA identificar sobreposições, serviços pouco usados e quanto você economizaria cancelando.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">O que a IA não faz (ainda)</h2>
        <p className="text-muted-foreground leading-relaxed">
          Importante deixar claro: IA não substitui um planejador financeiro certificado para decisões complexas, como planejamento de aposentadoria, herança ou escolha de produtos de investimento específicos. Para isso, ainda vale buscar um profissional.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          A IA também pode cometer erros em cálculos complexos ou não considerar particularidades fiscais da sua situação. Use como ferramenta de apoio, não como oráculo financeiro.
        </p>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          <span className="flex items-center gap-2"><ShieldAlert className="h-6 w-6" /> Cuidados com privacidade</span>
        </h2>
        <div className="space-y-3">
          {[
            "Nunca insira número de conta, agência, senhas ou tokens de acesso em ferramentas de IA",
            "Prefira copiar apenas valores e categorias, sem dados pessoais identificáveis",
            "Use ferramentas com política clara de não treinamento com seus dados (ChatGPT Plus, Gemini Advanced)",
            "Para dados sensíveis, considere usar modelos locais (Llama, Mistral) que rodam no seu computador",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-destructive/5 border border-destructive/20 rounded-lg p-4">
              <ShieldAlert className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Por onde começar? Passo a passo</h2>
        <div className="space-y-3">
          {[
            "Liste suas receitas e despesas mensais — pode ser numa planilha simples ou no app do banco",
            "Escolha uma ferramenta: um app de finanças pessoais com IA ou um assistente como ChatGPT/Gemini",
            "Faça sua primeira análise: cole o extrato e peça insights. O resultado vai te surpreender.",
            "Defina uma meta concreta: quitar dívida, montar reserva de emergência ou começar a investir",
            "Acompanhe mensalmente e ajuste conforme necessário — consistência importa mais que perfeição",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-[hsl(var(--invest-color))]/5 rounded-lg p-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[hsl(var(--invest-color))] text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Prompts Avançados para Decisões de Investimento</h2>
        <p className="text-muted-foreground leading-relaxed">
          Além de organizar gastos, a IA pode ajudar a estruturar o raciocínio antes de uma decisão de investimento — não para substituir a decisão, mas para garantir que você considerou todas as variáveis relevantes. Veja três exemplos de prompts que vão além do básico:
        </p>
        <div className="space-y-3">
          {[
            { titulo: "Comparação ajustada por risco e liquidez", prompt: "\"Tenho R$ 10.000 e três opções: CDB 110% CDI com carência de 90 dias, Tesouro Selic com liquidez diária, e LCI 95% CDI isento de IR com vencimento em 2 anos. Considerando que posso precisar de parte desse dinheiro em até 6 meses, monte uma tabela comparando o rendimento líquido de cada opção e me diga qual combinação faz mais sentido.\"" },
            { titulo: "Simulação de cenários de aposentadoria com variáveis", prompt: "\"Tenho 32 anos, quero me aposentar com 60 anos com uma renda mensal de R$ 8.000 em valores de hoje. Considerando inflação média de 4% ao ano e retorno real da carteira de 5% ao ano acima da inflação, simule três cenários de aporte mensal: conservador (R$ 800), moderado (R$ 1.500) e agressivo (R$ 2.500), e mostre o patrimônio acumulado em cada cenário aos 60 anos.\"" },
            { titulo: "Checklist antes de uma compra grande", prompt: "\"Estou pensando em financiar um carro de R$ 80.000 em 48 meses com entrada de R$ 20.000. Antes de decidir, monte um checklist de perguntas que eu deveria responder sobre minha situação financeira atual, e calcule o impacto dessa parcela no meu orçamento mensal considerando que minha renda é de R$ 9.000.\"" },
          ].map(({ titulo, prompt }) => (
            <div key={titulo} className="bg-card border border-border rounded-2xl p-5">
              <h4 className="font-bold text-sm mb-2 flex items-center gap-2"><MessageSquare className="h-4 w-4 text-[hsl(var(--invest-color))]" />{titulo}</h4>
              <div className="bg-muted rounded-xl p-3 font-mono text-xs text-muted-foreground leading-relaxed">{prompt}</div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">IA vs Planejador Financeiro Humano: Quando Usar Cada Um</h2>
        <p className="text-muted-foreground leading-relaxed">
          Uma dúvida comum é se a IA torna o planejador financeiro humano obsoleto. A resposta é não — mas o papel de cada um fica mais claro quando se entende onde cada ferramenta é mais eficiente:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-bold mb-3 text-[hsl(var(--invest-color))]">🤖 Use IA para...</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Organizar e categorizar gastos mensais rapidamente</li>
              <li>• Simular múltiplos cenários numéricos em segundos</li>
              <li>• Tirar dúvidas conceituais sobre produtos financeiros</li>
              <li>• Revisar assinaturas e identificar gastos redundantes</li>
              <li>• Comparar rendimento líquido entre produtos similares</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-bold mb-3 text-[hsl(45,100%,50%)]">👤 Use um planejador para...</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Planejamento sucessório e questões de herança</li>
              <li>• Estruturação tributária complexa (holdings, offshore)</li>
              <li>• Decisões que envolvem questões emocionais e familiares</li>
              <li>• Validação de estratégias com responsabilidade profissional (CVM)</li>
              <li>• Situações com múltiplas fontes de renda e patrimônio complexo</li>
            </ul>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Na prática, o fluxo mais eficiente para 2026 é híbrido: use a IA no dia a dia para manter as finanças organizadas e entender conceitos, e reserve a consulta com um profissional certificado (CFP ou AAI) para decisões estruturais de maior impacto — geralmente revisões anuais ou em momentos de mudança de vida significativa, como casamento, herança ou aposentadoria.
        </p>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Cuidados de Privacidade ao Usar IA com Dados Financeiros</h2>
        <p className="text-muted-foreground leading-relaxed">
          Antes de colar extratos bancários ou faturas de cartão em uma ferramenta de IA generativa, vale entender como esses dados são tratados. Plataformas como ChatGPT e Gemini, em suas versões gratuitas, podem usar conversas para treinar futuros modelos, a menos que o usuário desative explicitamente essa opção nas configurações de privacidade. Para informações financeiras sensíveis — números de conta, CPF completo, saldos detalhados — a recomendação de especialistas em segurança digital é sempre anonimizar ou mascarar esses dados antes de compartilhar com qualquer ferramenta de IA, mantendo apenas as categorias e valores necessários para a análise pretendida.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Uma prática segura é substituir números de conta e identificadores pessoais por marcadores genéricos antes de colar o extrato — por exemplo, trocar "Conta 12345-6" por "Conta A" — preservando a estrutura dos dados para análise sem expor informações que poderiam ser usadas de forma indevida caso a conversa seja acessada por terceiros. Para uso recorrente e mais seguro, ferramentas com política de privacidade mais rígida e que prometem não usar dados de conversas para treinamento (geralmente as versões pagas ou empresariais dos principais assistentes de IA) reduzem esse risco.
        </p>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">O Futuro: Open Finance e IA Trabalhando Juntos</h2>
        <p className="text-muted-foreground leading-relaxed">
          O Open Finance brasileiro, sistema regulado pelo Banco Central que permite o compartilhamento seguro de dados financeiros entre instituições autorizadas mediante consentimento do usuário, está criando a infraestrutura para que assistentes de IA tenham acesso direto e automatizado a contas bancárias, cartões e investimentos — eliminando a necessidade de colar extratos manualmente. Já existem aplicativos que combinam Open Finance com IA para gerar análises automáticas de gastos, alertas personalizados e até sugestões de realocação de investimentos, tudo isso com a segurança de um sistema regulado pelo Banco Central.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Para os próximos anos, a tendência é que essa integração se torne cada vez mais transparente para o usuário final: em vez de precisar abrir um chat e colar informações manualmente, assistentes financeiros com IA embutidos diretamente nos aplicativos bancários vão oferecer análises automáticas, alertas proativos de gastos fora do padrão e simulações personalizadas sem exigir nenhuma ação extra do usuário além de autorizar o compartilhamento inicial de dados via Open Finance. Essa evolução deve tornar o uso de IA em finanças pessoais ainda mais acessível para quem não tem familiaridade técnica com prompts, democratizando o acesso a análises que hoje exigem certo conhecimento sobre como interagir com esses sistemas de forma eficaz.
        </p>

        <div className="bg-card border border-border rounded-2xl p-6 mt-8">
          <p className="text-xs text-muted-foreground flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
            Conteúdo informativo. Resultados de IA podem conter imprecisões. Sempre valide cálculos importantes com um profissional.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 my-8">
        {["IA", "finanças pessoais", "ChatGPT", "Gemini", "planejamento financeiro", "organizar gastos", "investimentos 2026", "controle financeiro", "apps de finanças"].map(tag => (
          <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">#{tag}</span>
        ))}
      </div>

      <BackNavigation category="invest" />

      <EditorialTake category="invest" title="Análise do Marcos: IA no bolso — 3 usos que funcionam de verdade">
        <p>Bancos brasileiros já incorporaram IA em apps populares: Nubank com 'Tuna' (assistente em testes), Itaú com 'Íon' e Bradesco com 'BIA'. Segundo o Relatório de Cidadania Financeira 2024 do Banco Central, 87% dos brasileiros adultos têm conta bancária e 76% usam apps de banco mensalmente. Ferramentas populares de finanças pessoais com IA: Mobills, Organizze e Olivia (esta última usa machine learning para classificar gastos automaticamente).</p>
        <p className="mt-2">Minha análise: IA em finanças pessoais funciona melhor em três frentes — <strong>categorização automática de gastos</strong>, <strong>simulação de cenários</strong> ('e se eu investir R$ 500/mês por 10 anos') e <strong>revisão de assinaturas esquecidas</strong>. Para investimentos, evite seguir recomendação cega de modelos generalistas; eles não conhecem seu perfil de risco nem a tributação brasileira (IR sobre renda fixa, come-cotas em fundos, isenção em LCI/LCA). ChatGPT e Claude são ótimos copiloto para entender conceitos — não para decisões com seu patrimônio.</p>
      </EditorialTake>

      <ArticleSources category="invest" sources={[
        { title: "Relatório de Cidadania Financeira 2024", url: "https://www.bcb.gov.br/cidadaniafinanceira/relatoriocidadania", publisher: "Banco Central do Brasil", accessedAt: "Maio 2026" },
        { title: "Receita Federal — Tributação de Investimentos e Renda Fixa", url: "https://www.gov.br/receitafederal/pt-br", publisher: "Receita Federal do Brasil", accessedAt: "Maio 2026" },
        { title: "ANBIMA — Educação Financeira Digital", url: "https://www.anbima.com.br/pt_br/educar/", publisher: "ANBIMA", accessedAt: "Maio 2026" },
        { title: "Mobills — Gestão Financeira com IA", url: "https://www.mobills.com.br/", publisher: "Mobills", accessedAt: "Maio 2026" },
        { title: "CVM — Portal do Investidor", url: "https://www.investidor.gov.br/", publisher: "Comissão de Valores Mobiliários (CVM)", accessedAt: "Maio 2026" },
        { title: "Banco Central — Open Finance e Inovação Financeira", url: "https://www.bcb.gov.br/estabilidadefinanceira/openfinance", publisher: "Banco Central do Brasil", accessedAt: "Maio 2026" },
      ]} />

      <RelatedPosts currentSlug="ia-para-financas-pessoais-2026" />
      <CommentSection postId="ia-para-financas-pessoais-2026" postTitle="Como usar IA para organizar suas finanças em 2026" category="invest" />
    </article>
  );
};

export default IAFinancasPessoais2026;
import { useEffect } from "react";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, MessageSquare, Lightbulb, Target, Zap, BookOpen, AlertTriangle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import BackNavigation from "@/components/BackNavigation";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import heroImg from "@/assets/prompt-engineering-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const faqData = [
  { q: "O que é prompt engineering?", a: "Prompt engineering é a técnica de escrever instruções claras e estruturadas para obter melhores respostas de modelos de IA como ChatGPT, Gemini e Claude. Envolve definir contexto, formato, tom e restrições para guiar a IA ao resultado desejado." },
  { q: "Preciso saber programar para fazer prompt engineering?", a: "Não. Prompt engineering é essencialmente sobre comunicação clara em linguagem natural. Qualquer pessoa pode aprender as técnicas básicas. Conhecimento de programação ajuda em cenários avançados, mas não é pré-requisito." },
  { q: "Qual a diferença entre zero-shot, few-shot e chain-of-thought?", a: "Zero-shot é pedir algo sem exemplos. Few-shot é fornecer 2-3 exemplos do resultado esperado antes de pedir. Chain-of-thought (CoT) é pedir que a IA explique seu raciocínio passo a passo, o que melhora significativamente a precisão em tarefas complexas." },
  { q: "Prompt engineering é uma profissão real?", a: "Sim. Em 2026, empresas como Anthropic, Google e startups de IA contratam especialistas em prompt engineering com salários entre US$ 80 mil e US$ 200 mil anuais nos EUA. No Brasil, a função está crescendo em consultorias e empresas de tecnologia." },
  { q: "Quais são os erros mais comuns ao escrever prompts?", a: "Os erros mais comuns são: prompts vagos sem contexto, não especificar o formato da resposta, pedir tudo de uma vez em vez de dividir em etapas, não iterar sobre o resultado e assumir que a IA sabe o contexto que você tem em mente." },
];

const PromptEngineering2026 = () => {
  useEffect(() => {
    trackArticleRead("prompt-engineering-guia-2026", "Prompt Engineering em 2026: Guia Definitivo para Escrever Prompts que Funcionam", "ia");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="ia" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="ia" size="lg" />
          <span className="px-3 py-1 bg-ia/20 text-ia rounded-full text-sm font-medium">Produtividade</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Prompt Engineering em 2026: Guia Definitivo para Escrever Prompts que Funcionam
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
          <span className="flex items-center gap-1.5"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />28 de Março, 2026</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchPriority="high" src={heroImg} alt="Prompt Engineering Guia 2026" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          A diferença entre uma resposta medíocre e uma resposta brilhante de uma IA está quase sempre no <strong>prompt</strong>. Em 2026, com modelos como GPT-5, Gemini 2.5 e Claude 4, saber conversar com a IA é uma habilidade tão valiosa quanto saber usar Excel era nos anos 2000.
        </p>

        <p>
          Prompt engineering não é sobre "truques mágicos" — é sobre <strong>comunicação clara, estruturada e intencional</strong>. Este guia cobre desde os fundamentos até técnicas avançadas usadas por profissionais.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-ia" />
          Os Fundamentos: Anatomia de um Bom Prompt
        </h2>

        <p>
          Todo bom prompt tem 4 componentes essenciais. Nem todos precisam estar presentes em toda interação, mas quanto mais complexa a tarefa, mais componentes você deve incluir:
        </p>

        <div className="not-prose my-8 grid md:grid-cols-2 gap-5">
          {[
            {
              icon: <Target className="h-7 w-7 text-blue-400" />,
              title: "1. Papel (Role)",
              color: "border-blue-500/30 bg-blue-500/5",
              desc: "Defina quem a IA deve ser. \"Você é um especialista em marketing digital com 15 anos de experiência\" produz respostas muito diferentes de uma pergunta genérica.",
              example: "\"Aja como um nutricionista especializado em dietas para atletas.\"",
            },
            {
              icon: <MessageSquare className="h-7 w-7 text-green-400" />,
              title: "2. Contexto",
              color: "border-green-500/30 bg-green-500/5",
              desc: "Forneça informações relevantes sobre a situação. Quanto mais contexto, mais precisa a resposta.",
              example: "\"Tenho 30 anos, corro 5x por semana e quero ganhar massa muscular sem perder resistência.\"",
            },
            {
              icon: <Lightbulb className="h-7 w-7 text-amber-400" />,
              title: "3. Tarefa",
              color: "border-amber-500/30 bg-amber-500/5",
              desc: "Seja específico sobre o que você quer. \"Escreva um texto\" é vago. \"Escreva 5 títulos de 60 caracteres para um artigo sobre X\" é preciso.",
              example: "\"Crie um plano alimentar semanal com 2.500 kcal/dia, distribuídas em 5 refeições.\"",
            },
            {
              icon: <Zap className="h-7 w-7 text-purple-400" />,
              title: "4. Formato e Restrições",
              color: "border-purple-500/30 bg-purple-500/5",
              desc: "Defina como quer a resposta: lista, tabela, parágrafos, JSON. Inclua restrições: tamanho máximo, tom, idioma, o que evitar.",
              example: "\"Responda em formato de tabela com colunas: refeição, alimentos, macros. Máximo 200 palavras.\"",
            },
          ].map(({ icon, title, color, desc, example }) => (
            <div key={title} className={`rounded-xl border p-5 ${color}`}>
              <div className="mb-3">{icon}</div>
              <h3 className="font-bold text-base mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{desc}</p>
              <p className="text-xs text-primary font-mono bg-primary/10 p-2 rounded">{example}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-ia" />
          Técnicas Avançadas de Prompt Engineering
        </h2>

        <h3 className="text-xl font-bold mt-6">1. Few-Shot Prompting (Exemplos)</h3>
        <p>
          Em vez de apenas descrever o que quer, <strong>mostre exemplos</strong> do resultado esperado. Pesquisas da Google DeepMind (2024) demonstraram que fornecer 2-3 exemplos melhora a precisão em até <strong>40%</strong> em tarefas de classificação e formatação.
        </p>
        <div className="not-prose my-4 p-4 bg-card border border-border rounded-xl">
          <p className="text-xs text-muted-foreground mb-2 font-semibold">Exemplo de few-shot:</p>
          <pre className="text-sm text-foreground whitespace-pre-wrap font-mono">
{`Classifique o sentimento como positivo, neutro ou negativo:

"Adorei o produto, superou expectativas" → Positivo
"Chegou no prazo, funciona normal" → Neutro  
"Péssimo, quebrou em 2 dias" → Negativo

Agora classifique: "O atendimento foi bom mas a entrega atrasou 5 dias"`}
          </pre>
        </div>

        <AdRectangle className="my-8" />

        <h3 className="text-xl font-bold mt-6">2. Chain-of-Thought (Raciocínio em Etapas)</h3>
        <p>
          Pedir que a IA "pense passo a passo" antes de responder melhora drasticamente a precisão em tarefas que envolvem lógica, matemática ou análise. O artigo original da Google Research (Wei et al., 2022) mostrou melhorias de até <strong>70%</strong> em problemas matemáticos. Em 2026, modelos como GPT-5 e Gemini 2.5 Pro já utilizam CoT internamente, mas guiá-los explicitamente ainda melhora os resultados.
        </p>
        <div className="not-prose my-4 p-4 bg-card border border-border rounded-xl">
          <p className="text-xs text-muted-foreground mb-2 font-semibold">Prompt com CoT:</p>
          <pre className="text-sm text-foreground whitespace-pre-wrap font-mono">
{`Analise se vale a pena refinanciar minha casa.
Dados: dívida atual R$ 300 mil, taxa 12% ao ano, 20 anos restantes.
Nova proposta: taxa 9,5% ao ano, prazo de 25 anos, custo do refinanciamento R$ 8 mil.

Pense passo a passo: calcule o custo total de cada cenário antes de dar sua recomendação.`}
          </pre>
        </div>

        <h3 className="text-xl font-bold mt-6">3. Prompt Iterativo</h3>
        <p>
          Raramente o primeiro prompt dá o resultado perfeito. A técnica iterativa envolve refinar progressivamente:
        </p>
        <ol>
          <li><strong>Prompt inicial</strong> → resultado genérico</li>
          <li><strong>Refine o contexto</strong> → "Focue mais em X e menos em Y"</li>
          <li><strong>Ajuste o formato</strong> → "Reformule como tabela comparativa"</li>
          <li><strong>Peça autocrítica</strong> → "Revise sua resposta e identifique pontos fracos"</li>
        </ol>

        <h3 className="text-xl font-bold mt-6">4. System Prompts e Personas</h3>
        <p>
          Em ferramentas que permitem system prompts (como a API do ChatGPT e Custom GPTs), você pode definir instruções persistentes que guiam todas as interações. Isso é especialmente útil para criar assistentes especializados.
        </p>
        <div className="not-prose my-4 p-4 bg-card border border-border rounded-xl">
          <p className="text-xs text-muted-foreground mb-2 font-semibold">System prompt exemplo:</p>
          <pre className="text-sm text-foreground whitespace-pre-wrap font-mono">
{`Você é um consultor financeiro brasileiro especializado em renda fixa.
Sempre cite fontes quando mencionar dados.
Nunca recomende produtos específicos — apenas explique as categorias.
Responda em português brasileiro, tom profissional mas acessível.
Use analogias do dia a dia para explicar conceitos complexos.`}
          </pre>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-ia" />
          Prompts Prontos para Usar no Dia a Dia
        </h2>

        <p>
          Aqui estão templates testados que você pode adaptar para suas necessidades:
        </p>

        <div className="not-prose my-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left font-semibold">Cenário</th>
                  <th className="p-3 text-left font-semibold">Template de Prompt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 font-medium">Resumir documento</td>
                  <td className="p-3 text-xs font-mono">"Resuma o texto abaixo em 5 bullet points. Foque nos pontos principais e dados quantitativos. Máximo 150 palavras."</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Comparar opções</td>
                  <td className="p-3 text-xs font-mono">"Compare [A] e [B] em formato de tabela com colunas: critério, [A], [B], vencedor. Critérios: preço, qualidade, suporte, facilidade."</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Revisar texto</td>
                  <td className="p-3 text-xs font-mono">"Revise o texto abaixo para: clareza, gramática e tom profissional. Liste as mudanças feitas e explique por que cada uma melhora o texto."</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Planejar projeto</td>
                  <td className="p-3 text-xs font-mono">"Crie um plano de projeto para [objetivo] com: fases, tarefas, prazos estimados, dependências e riscos. Formato: tabela Gantt simplificada."</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Estudar conceito</td>
                  <td className="p-3 text-xs font-mono">"Explique [conceito] como se eu tivesse 15 anos. Use 3 analogias do cotidiano. Depois, explique novamente em nível universitário em 1 parágrafo."</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-ia" />
          Erros Comuns e Como Evitá-los
        </h2>

        <ol>
          <li><strong>Prompt vago demais:</strong> "Escreva sobre marketing" → "Escreva 5 estratégias de marketing digital para pequenas empresas em 2026, com exemplos práticos e orçamento estimado."</li>
          <li><strong>Pedir tudo de uma vez:</strong> divida tarefas complexas em etapas. Primeiro peça pesquisa, depois análise, depois formatação.</li>
          <li><strong>Não especificar formato:</strong> se você quer uma tabela, diga. Se quer tópicos, diga. A IA não adivinha seu formato ideal.</li>
          <li><strong>Aceitar a primeira resposta:</strong> sempre itere. Peça para a IA melhorar, aprofundar ou reformular. A segunda ou terceira versão quase sempre é melhor.</li>
          <li><strong>Ignorar o contexto:</strong> a IA não sabe o que você sabe. Forneça dados, restrições e objetivos explicitamente.</li>
          <li><strong>Confiar cegamente:</strong> IAs alucinam (geram informações falsas com confiança). Sempre verifique dados, estatísticas e citações com fontes primárias.</li>
        </ol>

        <h2>Conclusão</h2>
        <p>
          Prompt engineering em 2026 não é uma moda passageira — é uma competência fundamental para qualquer profissional que quer extrair o máximo das ferramentas de IA. A boa notícia: não exige conhecimento técnico, apenas prática e clareza de comunicação.
        </p>
        <p>
          Comece aplicando os 4 componentes (papel, contexto, tarefa, formato) no seu próximo prompt. Itere sobre as respostas. Em poucas semanas, a diferença nos resultados será enorme.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Qual seu prompt favorito?</h3>
          <p className="text-muted-foreground">Compartilhe nos comentários o melhor prompt que você já usou! 🤖</p>
        </div>

        <p className="text-xs text-muted-foreground mt-6 italic">
          Conteúdo baseado em pesquisas publicadas por Google DeepMind, OpenAI e Anthropic. Técnicas referenciadas são de domínio público e amplamente documentadas na literatura de IA.
        </p>
      </div>

      <RelatedPosts currentSlug="prompt-engineering-guia-2026" />
      <CommentSection postId="prompt-engineering-guia-2026" />
    </article>
  );
};

export default PromptEngineering2026;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, Code, Globe, DollarSign, Zap } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import RelatedTopics from "@/components/RelatedTopics";
import heroImg from "@/assets/modelos-ia-open-source-2026.webp";

const ModelosIAOpenSource2026 = () => {
  useEffect(() => {
    trackArticleRead("modelos-ia-open-source-2026", "IA Open Source 2026: Llama, Mistral e DeepSeek Contra os Modelos Pagos", "ia");
  }, []);
  return (
  <article className="container py-8 max-w-4xl mx-auto">
    <BackNavigation categoryPath="/ia" categoryLabel="Inteligência Artificial" />
    <header className="mb-8">
      <CategoryBadge category="ia" size="lg" />
      <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
        IA Open Source em 2026: Llama, Mistral e DeepSeek Contra os Modelos Pagos
      </h1>
      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
        <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
        <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />17 de Março, 2026</span>
        <span className="flex items-center gap-2"><Clock className="h-4 w-4" />12 min de leitura</span>
      </div>
      <ShareWhatsApp />
    </header>
    <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
      <img fetchpriority="high" src={heroImg} alt="Modelos IA open source 2026 — Llama, Mistral, DeepSeek" className="w-full h-full object-cover" />
    </div>
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <p className="lead text-xl text-muted-foreground">
        Em janeiro de 2025, o <strong>DeepSeek R1</strong> sacudiu o mercado ao mostrar que um modelo open source poderia competir com GPT-4o e Claude 3.5 Sonnet a uma fração do custo de treinamento. Em 2026, a distância entre open source e modelos proprietários continua fechando — mas ainda há diferenças importantes.
      </p>

      <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
        <Globe className="h-7 w-7 text-violet-400" />Os Principais Modelos Open Source em 2026
      </h2>
      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
          <thead><tr className="bg-secondary">
            <th className="text-left py-3 px-4">Modelo</th>
            <th className="text-left py-3 px-4">Empresa</th>
            <th className="text-left py-3 px-4">Tamanho</th>
            <th className="text-left py-3 px-4">Melhor uso</th>
          </tr></thead>
          <tbody>
            {[
              ["Llama 3.3", "Meta", "70B", "Uso geral, textos longos, raciocínio"],
              ["Mistral Large 2", "Mistral AI", "123B", "Código, multilíngue, baixo custo por token"],
              ["DeepSeek R1", "DeepSeek", "671B MoE", "Raciocínio, matemática, ciência"],
              ["Qwen 2.5", "Alibaba", "72B", "Código, matemática, chinês/inglês"],
              ["Gemma 3", "Google", "27B", "Dispositivos locais, eficiência"],
            ].map(([m, e, t, u]) => (
              <tr key={m} className="border-t border-border">
                <td className="py-3 px-4 font-bold text-violet-400">{m}</td>
                <td className="py-3 px-4 text-muted-foreground">{e}</td>
                <td className="py-3 px-4">{t}</td>
                <td className="py-3 px-4 text-muted-foreground text-xs">{u}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
        <Zap className="h-7 w-7 text-violet-400" />DeepSeek: O Momento que Mudou Tudo
      </h2>
      <p>O DeepSeek R1, lançado em janeiro de 2025 pela empresa chinesa DeepSeek, foi treinado com uma eficiência de custos radicalmente menor do que os modelos da OpenAI e Anthropic. A empresa reportou um custo de treinamento de aproximadamente US$ 5,6 milhões — comparado aos bilhões estimados para GPT-4.</p>
      <p>Em benchmarks de raciocínio matemático e científico (MATH, AIME, GPQA), o DeepSeek R1 igualou ou superou o GPT-4o. O impacto foi imediato: as ações da Nvidia caíram 17% em um único dia quando a notícia veio a público, pois questionava a narrativa de que era necessário hardware extraordinariamente caro para treinar modelos de ponta.</p>

      <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
        <DollarSign className="h-7 w-7 text-violet-400" />Open Source vs Pago: Onde Cada Um Ganha
      </h2>
      <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
        <div className="bg-card rounded-xl border border-emerald-500/20 p-5">
          <h3 className="font-bold text-emerald-400 mb-3">✅ Open Source Ganha</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• <strong>Privacidade:</strong> dados nunca saem da sua infraestrutura</li>
            <li>• <strong>Custo em escala:</strong> zero custo por token após hardware</li>
            <li>• <strong>Fine-tuning:</strong> customização total para domínios específicos</li>
            <li>• <strong>Sem dependência de vendor</strong> — sem risco de descontinuação</li>
            <li>• <strong>Conformidade regulatória:</strong> LGPD, GDPR, HIPAA mais simples</li>
          </ul>
        </div>
        <div className="bg-card rounded-xl border border-violet-500/20 p-5">
          <h3 className="font-bold text-violet-400 mb-3">⭐ Modelos Pagos Ganham</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• <strong>Qualidade de instrução:</strong> GPT-4o e Claude 3.5 ainda lideram em seguir instruções complexas</li>
            <li>• <strong>Multimodal:</strong> visão, áudio e imagem mais maduros</li>
            <li>• <strong>Zero infraestrutura:</strong> API lista para usar</li>
            <li>• <strong>Suporte e SLA:</strong> garantias empresariais</li>
            <li>• <strong>Atualizações constantes:</strong> sem overhead de manutenção</li>
          </ul>
        </div>
      </div>

      <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
        <Code className="h-7 w-7 text-violet-400" />Como Rodar Modelos Open Source Localmente
      </h2>
      <p>A forma mais simples de experimentar modelos open source é o <strong>Ollama</strong> — uma ferramenta que permite baixar e rodar modelos como Llama 3, Mistral e Gemma com um único comando:</p>
      <div className="not-prose my-4 bg-secondary rounded-xl p-4 font-mono text-sm">
        <div className="text-green-400 mb-1"># Instalar Ollama (macOS/Linux)</div>
        <div className="text-foreground">curl -fsSL https://ollama.com/install.sh | sh</div>
        <div className="text-green-400 mt-3 mb-1"># Baixar e rodar Llama 3.3 (70B)</div>
        <div className="text-foreground">ollama run llama3.3</div>
        <div className="text-green-400 mt-3 mb-1"># Ou Mistral para uso geral</div>
        <div className="text-foreground">ollama run mistral</div>
      </div>
      <p>O requisito mínimo para modelos de 7B é 8GB de RAM. Para modelos de 70B, recomenda-se 64GB de RAM ou uma GPU com VRAM suficiente (RTX 4090 com 24GB roda 70B em 4-bit quantization).</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Quando Escolher Open Source?</h2>
      <ul>
        <li>✅ Dados sensíveis que não podem sair da empresa</li>
        <li>✅ Volume alto de tokens onde custo por API seria alto demais</li>
        <li>✅ Necessidade de fine-tuning em domínio específico</li>
        <li>✅ Equipe com capacidade técnica para gerenciar infraestrutura</li>
        <li>❌ Equipe pequena sem DevOps dedicado — overhead pode superar economia</li>
        <li>❌ Tarefas multimodais complexas — modelos pagos ainda têm vantagem</li>
      </ul>

      <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
        <h3 className="text-xl font-bold mb-2">Você usa modelos open source no seu trabalho?</h3>
        <p className="text-muted-foreground">Compartilhe nos comentários! 👇</p>
      </div>
    </div>
    
      <RelatedTopics
        title="Leia também"
        links={[
          { label: "IA e Programação 2026", href: "/post/ia-codigo-programadores-2026", desc: "Copilot, Cursor e Windsurf na prática" },
          { label: "ChatGPT vs Gemini vs Claude", href: "/post/chatgpt-vs-gemini-vs-claude-2026", desc: "Compare os principais modelos pagos" },
          { label: "IA e Privacidade de Dados", href: "/post/ia-privacidade-dados-2026", desc: "Por que privacidade é o principal argumento open source" },
        ]}
      />
      <RelatedPosts currentSlug="modelos-ia-open-source-2026" category="ia" />
    <CommentSection postId="modelos-ia-open-source-2026" postTitle="IA Open Source 2026" />
  </article>
);
};

export default ModelosIAOpenSource2026;

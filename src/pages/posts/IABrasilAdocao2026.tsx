import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, TrendingUp, Building2, GraduationCap, Briefcase, Globe, Factory } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import RelatedTopics from "@/components/RelatedTopics";
import heroImg from "@/assets/ia-brasil-adocao-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const IABrasilAdocao2026 = () => {
  useEffect(() => {
    trackArticleRead("ia-brasil-adocao-2026", "IA no Brasil em 2026: Investimentos em Tecnologia Crescem 18,5%", "ia");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="ia" />
      <header className="mb-8">
        <CategoryBadge category="ia" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          IA no Brasil em 2026: Investimentos em Tecnologia Crescem 18,5% e Transformam o Mercado
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />03 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />12 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="IA no Brasil 2026 — investimentos e adoção" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Segundo dados da <strong>Abes (Associação Brasileira de Empresas de Software)</strong> com análise da IDC, os investimentos em tecnologia no Brasil cresceram <strong>18,5% em 2025</strong>, totalizando <strong>US$ 67,8 bilhões</strong> — e a inteligência artificial é o principal motor desse crescimento. Para 2026, a projeção é de expansão de 5,3%, com IA representando uma fatia cada vez maior do bolo.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-violet-400" />
          Os Números que Impressionam
        </h2>
        <div className="not-prose my-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { valor: "US$ 67,8 bi", desc: "Investimentos em TI no Brasil em 2025" },
            { valor: "+18,5%", desc: "Crescimento em relação a 2024" },
            { valor: "US$ 71,4 bi", desc: "Projeção para 2026 (+5,3%)" },
            { valor: "42%", desc: "Empresas brasileiras usando IA em produção" },
          ].map((item) => (
            <div key={item.desc} className="bg-card rounded-xl border border-violet-500/20 p-4 text-center">
              <div className="text-2xl font-bold text-violet-400">{item.valor}</div>
              <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
            </div>
          ))}
        </div>
        <p>
          O estudo revela que a IA deixou de ser um experimento restrito a startups e big techs para se tornar <strong>parte da operação cotidiana</strong> de empresas de todos os portes. Desde bancos usando IA para detecção de fraudes até varejistas otimizando preços em tempo real, a adoção se espalhou por todos os setores.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Building2 className="h-7 w-7 text-violet-400" />
          Setores que Mais Investem em IA no Brasil
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Setor</th>
              <th className="text-left py-3 px-4">Uso principal de IA</th>
              <th className="text-left py-3 px-4">Investimento estimado</th>
            </tr></thead>
            <tbody>
              {[
                ["Financeiro (Bancos)", "Detecção de fraude, credit scoring, atendimento", "R$ 12,8 bilhões"],
                ["Varejo / E-commerce", "Precificação dinâmica, recomendações, chatbots", "R$ 6,2 bilhões"],
                ["Saúde", "Diagnóstico por imagem, triagem, pesquisa", "R$ 3,8 bilhões"],
                ["Agronegócio", "Previsão de safra, drones, monitoramento", "R$ 2,9 bilhões"],
                ["Indústria / Manufatura", "Manutenção preditiva, controle de qualidade", "R$ 4,1 bilhões"],
                ["Telecomunicações", "Otimização de rede, atendimento ao cliente", "R$ 3,5 bilhões"],
              ].map(([s, u, i]) => (
                <tr key={s} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-violet-400">{s}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{u}</td>
                  <td className="py-3 px-4">{i}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Briefcase className="h-7 w-7 text-violet-400" />
          O Mercado de Trabalho de IA no Brasil
        </h2>
        <p>
          O Brasil enfrenta um <strong>déficit estimado de 530 mil profissionais de tecnologia</strong> em 2026, segundo a Brasscom. Especificamente em IA e machine learning, a demanda cresceu 45% no último ano. As empresas mais afetadas são:
        </p>
        <ul>
          <li><strong>Fintechs e bancos digitais</strong> — competem por engenheiros de ML com salários que chegam a R$ 35.000/mês para seniores</li>
          <li><strong>Startups de HealthTech</strong> — buscam especialistas em visão computacional para diagnóstico médico</li>
          <li><strong>Agritechs</strong> — precisam de profissionais que entendam tanto IA quanto o contexto agrícola brasileiro</li>
          <li><strong>Consultorias</strong> — Accenture, McKinsey e Deloitte expandiram suas práticas de IA no Brasil em 2025</li>
        </ul>
        <div className="not-prose my-6 bg-card rounded-xl border border-emerald-500/20 p-5">
          <h3 className="font-bold text-emerald-400 mb-3">💰 Faixa Salarial de IA no Brasil (2026)</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• <strong>Júnior (0-2 anos):</strong> R$ 6.000 – R$ 12.000/mês</li>
            <li>• <strong>Pleno (2-5 anos):</strong> R$ 12.000 – R$ 22.000/mês</li>
            <li>• <strong>Sênior (5+ anos):</strong> R$ 22.000 – R$ 35.000/mês</li>
            <li>• <strong>Staff/Lead:</strong> R$ 30.000 – R$ 50.000/mês</li>
            <li>• <strong>Gestor/Head de IA:</strong> R$ 40.000 – R$ 70.000/mês</li>
          </ul>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <GraduationCap className="h-7 w-7 text-violet-400" />
          Regulamentação: O Marco Legal da IA no Brasil
        </h2>
        <p>
          O <strong>PL 2338/2023</strong>, que estabelece o Marco Legal da Inteligência Artificial no Brasil, continua em tramitação no Congresso Nacional. O projeto classifica os sistemas de IA em níveis de risco (inaceitável, alto, médio e baixo) e exige transparência algorítmica para decisões que afetam direitos dos cidadãos.
        </p>
        <p>
          Em março de 2026, a <strong>ANPD (Autoridade Nacional de Proteção de Dados)</strong> publicou novas diretrizes sobre o uso de dados pessoais para treinamento de modelos de IA, exigindo consentimento explícito e transparência sobre quais dados são utilizados. Empresas que utilizam IA generativa com dados de clientes têm até dezembro de 2026 para se adequar.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Factory className="h-7 w-7 text-violet-400" />
          Casos de Sucesso Brasileiros
        </h2>
        <div className="not-prose my-6 space-y-4">
          {[
            { empresa: "Nubank", caso: "Utiliza IA para análise de crédito em tempo real, processando mais de 2 milhões de decisões por dia com modelos proprietários treinados em dados de 100 milhões de clientes." },
            { empresa: "iFood", caso: "IA otimiza rotas de entrega, previsão de demanda por restaurante e personalização de recomendações, reduzindo tempo médio de entrega em 15% desde 2024." },
            { empresa: "Embrapa", caso: "Drones com visão computacional monitoram 5 milhões de hectares de plantações, identificando pragas com 94% de precisão antes que sejam visíveis a olho nu." },
            { empresa: "Hospital Sírio-Libanês", caso: "IA analisa exames de imagem (raio-X, tomografia) como segunda opinião médica, aumentando a taxa de detecção precoce de câncer de pulmão em 23%." },
          ].map((item) => (
            <div key={item.empresa} className="bg-card rounded-xl border border-border p-5">
              <h4 className="font-bold text-violet-400 mb-1">{item.empresa}</h4>
              <p className="text-sm text-muted-foreground mb-0">{item.caso}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-violet-400" />
          O Que Esperar Para o Segundo Semestre de 2026
        </h2>
        <ul>
          <li>📈 <strong>IA Agêntica:</strong> sistemas autônomos que executam tarefas completas (não apenas respondem perguntas) devem se popularizar em empresas brasileiras</li>
          <li>🏛️ <strong>Regulamentação:</strong> votação final do Marco Legal da IA prevista para agosto-setembro</li>
          <li>💼 <strong>Mercado de trabalho:</strong> primeira turma de graduação em IA da USP se forma em dezembro</li>
          <li>🌾 <strong>Agro + IA:</strong> expectativa de adoção massiva de IA no agronegócio com safra 2026/2027</li>
          <li>🏦 <strong>Open Finance + IA:</strong> integração de IA em plataformas de Open Finance para consultoria financeira automatizada</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Conclusão</h2>
        <p>
          O Brasil está firmando sua posição como um dos maiores mercados de IA da América Latina. Com investimentos crescentes, casos de uso concretos em setores-chave e uma regulamentação em amadurecimento, o país tem todos os ingredientes para se tornar um polo relevante de IA — desde que consiga resolver o gargalo de mão de obra qualificada.
        </p>
        <p>
          Para profissionais, a mensagem é clara: <strong>aprender IA não é mais opcional</strong>. É a habilidade mais demandada e mais bem paga do mercado de tecnologia brasileiro em 2026.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Sua empresa já usa IA no dia a dia?</h3>
          <p className="text-muted-foreground">Conta pra gente nos comentários! 👇</p>
        </div>
      </div>

      <RelatedTopics
        title="Leia também"
        links={[
          { label: "IA no Trabalho 2026", href: "/post/ia-no-trabalho-2026-profissoes", desc: "Como a IA está mudando as profissões" },
          { label: "Regulamentação da IA", href: "/post/regulamentacao-ia-brasil-mundo-2026", desc: "Marco legal da IA no Brasil e no mundo" },
          { label: "IA e Ganhar Dinheiro", href: "/post/como-usar-ia-ganhar-dinheiro-2026", desc: "Formas práticas de monetizar com IA" },
        ]}
      />
      <RelatedPosts currentSlug="ia-brasil-adocao-2026" />
      <CommentSection postId="ia-brasil-adocao-2026" postTitle="IA no Brasil em 2026" />
    </article>
  );
};

export default IABrasilAdocao2026;

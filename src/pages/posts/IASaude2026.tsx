import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { ArrowLeft, Clock, User, Calendar, Heart, Stethoscope, Brain, Pill } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/ia-saude-2026.webp";

import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";
const IASaude2026 = () => {

  useEffect(() => {
    trackArticleRead("ia-saude-2026-diagnosticos-futuro", "IA para Saúde 2026: Diagnósticos, Monitoramento e o Futuro da Medicina", "ia");
  }, []);
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="ia" />

      <header className="mb-8">
        <CategoryBadge category="ia" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          IA para Saúde em 2026: Diagnósticos, Monitoramento e o Futuro da Medicina
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />02 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="ia" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" loading="eager"
          decoding="async"
          src={heroImg} alt="IA para saúde em 2026 — diagnósticos, monitoramento por wearables e o futuro da medicina com inteligência artificial" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Em outubro de 2025, um sistema de IA identificou um câncer de pâncreas em estágio inicial em um paciente assintomático — o mesmo exame que <strong>quatro radiologistas humanos</strong> haviam analisado sem encontrar nada.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Stethoscope className="h-7 w-7 text-ia" />
          O Que a IA Já Faz na Medicina Hoje
        </h2>
        <ul className="space-y-2 my-6">
          <li><strong>Diagnóstico por imagem:</strong> supera médicos na detecção de melanoma, retinopatia diabética e certos cânceres de mama.</li>
          <li><strong>Descoberta de medicamentos:</strong> 10-15 anos de pesquisa comprimidos para 2-3 anos (AlphaFold e sucessores).</li>
          <li><strong>Análise genômica:</strong> sequenciamento e análise de DNA em horas, não meses.</li>
          <li><strong>Predição de sepse:</strong> IA detecta sepse 6 horas antes dos protocolos tradicionais.</li>
        </ul>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Heart className="h-7 w-7 text-ia" />
          Ferramentas de IA para o Paciente Comum
        </h2>
        <div className="space-y-3 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">📱 Apps de Orientação</h4>
            <p className="text-sm text-muted-foreground mb-0">Ada Health e K Health oferecem triagem com precisão comparável à enfermagem.</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">⌚ Wearables com IA</h4>
            <p className="text-sm text-muted-foreground mb-0">Apple Watch Series 10 e Galaxy Watch 7 detectam fibrilação atrial, apneia do sono e variações de SPO2.</p>
      <AdInArticle />
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">📊 Plataformas de Acompanhamento</h4>
            <p className="text-sm text-muted-foreground mb-0">Acompanhe exames e receba análises contextualizadas. Essas ferramentas orientam — não substituem a consulta médica.</p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Brain className="h-7 w-7 text-ia" />
          IA na Saúde Mental
        </h2>
        <p>
          Plataformas como Woebot e Wysa atendem milhões de pessoas sem acesso à terapia tradicional. Estudos mostram reduções significativas em sintomas de <strong>ansiedade e depressão leve a moderada</strong>. No Brasil, onde o acesso à saúde mental é limitado, o potencial é enorme.
        </p>

        <AdRectangle className="my-8" />


<h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Pill className="h-7 w-7 text-ia" />
          O Futuro Próximo (até 2028)
        </h2>
        <ul className="space-y-2 my-6">
          <li>Médicos de IA pessoal que conhecem seu histórico completo</li>
          <li>Cirurgias robóticas assistidas com precisão milimétrica</li>
          <li>Medicamentos personalizados baseados no perfil genético</li>
          <li>Predição de doenças crônicas com 5-10 anos de antecedência</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-6">Os Números Reais: O Que Está Aprovado pela FDA e Anvisa</h2>
        <p>
          Em janeiro de 2025 a FDA mantinha uma lista pública com mais de <strong>1.000 dispositivos médicos com IA/ML
          autorizados</strong> nos EUA — o número saltou de 343 em 2020 para 1.016 em 2024. A maior fatia é de
          <strong> radiologia</strong> (76% das aprovações), seguida por cardiologia e oftalmologia. Sistemas como o
          <strong> IDx-DR</strong> (Digital Diagnostics), primeiro algoritmo aprovado para diagnóstico autônomo de retinopatia
          diabética, já são usados em farmácias e clínicas dos EUA sem necessidade de oftalmologista presente para a triagem.
        </p>
        <p>
          No Brasil, a <strong>Anvisa</strong> publicou em 2024 a Consulta Pública 1.301, base do futuro marco regulatório
          para Software como Dispositivo Médico (SaMD) com IA. Até maio de 2026, dispositivos como o <strong>Lunit INSIGHT MMG</strong>
          (mamografia) e <strong>Aidoc</strong> (acidente vascular cerebral) já operam em hospitais brasileiros — Albert Einstein,
          Sírio-Libanês e Rede D'Or relataram redução de até 30% no tempo de laudo. O CFM regulamentou pela Resolução
          2.314/2022 o uso de telerradiologia, abrindo caminho para a IA assistir laudos a distância.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">AlphaFold e a Revolução na Descoberta de Medicamentos</h2>
        <p>
          O <strong>AlphaFold</strong> da DeepMind ganhou o Nobel de Química de 2024 (Demis Hassabis e John Jumper) por resolver
          um problema de 50 anos: prever a estrutura tridimensional de proteínas a partir da sequência de aminoácidos. Até 2025
          o banco AlphaFold DB já catalogava <strong>mais de 200 milhões de estruturas</strong> proteicas — praticamente todas
          conhecidas pela ciência. O impacto direto: empresas como <strong>Isomorphic Labs</strong> (spin-off da DeepMind),
          Recursion e Insilico Medicine encurtaram o ciclo de descoberta de candidatos a medicamento de ~4 anos para
          <strong> menos de 18 meses</strong> em vários alvos.
        </p>
        <p>
          A versão <strong>AlphaFold 3</strong>, lançada em maio de 2024, expandiu a previsão para interações proteína-DNA,
          proteína-ligante e modificações pós-traducionais — peças essenciais para desenhar fármacos. Para o paciente,
          o efeito ainda é indireto (medicamento descoberto hoje só chega à farmácia em 2030+), mas o pipeline está mudando.
          A primeira terapia desenhada parcialmente com IA já entrou em fase 2 de testes clínicos em 2024 (Insilico para
          fibrose pulmonar idiopática).
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">Wearables: O Que o Apple Watch e Galaxy Watch Realmente Detectam</h2>
        <p>
          O <strong>Apple Watch</strong> tem três funções de saúde com aprovação FDA: ECG (detecta fibrilação atrial),
          notificações de ritmo irregular, e monitor de queda. Em 2023 foi adicionada a função de detecção de apneia do sono
          (Watch Series 10 e Ultra 2). Estudos publicados no <em>JAMA Cardiology</em> (2018) mostraram que o algoritmo de FA
          tem sensibilidade de 98,3% e especificidade de 99,6% para o ritmo sinusal — números que justificam o uso como triagem,
          <strong> não como diagnóstico definitivo</strong>.
        </p>
        <p>
          O <strong>Galaxy Watch</strong> da Samsung adicionou em 2024 a aferição de pressão arterial sem manguito (aprovada no
          Brasil pela Anvisa em 2024), embora exija calibração mensal com um aparelho tradicional. Para o consumidor brasileiro,
          a regra prática é: <strong>wearables são ótimos para tendências e alertas</strong> (variação semanal de batimento,
          notificação de ritmo anômalo), mas valores absolutos (pressão exata, SpO2) ainda devem ser confirmados em consultório.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">IA na Saúde Mental: O Que a Ciência Diz (e o Que Não)</h2>
        <p>
          Estudos randomizados publicados no <em>JMIR mHealth</em> (2017) e na <em>Nature Digital Medicine</em> (2022)
          mostraram que aplicativos como <strong>Woebot</strong> (terapia cognitivo-comportamental conversacional) e
          <strong> Wysa</strong> reduzem sintomas de ansiedade e depressão leve a moderada em populações específicas —
          principalmente jovens adultos com acesso limitado à terapia. <strong>Não substituem psicoterapia ou tratamento
          farmacológico</strong> em casos moderados a graves, e não são indicados para crise suicida.
        </p>
        <p>
          O lado preocupante: em 2024 a Stanford Medicine publicou estudo apontando que chatbots de IA generativa não
          especializados (ChatGPT, Replika) <strong>respondem inadequadamente a sinais de ideação suicida</strong> em até
          40% das interações. O Conselho Federal de Psicologia (CFP) brasileiro publicou nota em 2024 alertando para o uso
          de "IA terapeuta" sem registro como dispositivo de saúde — qualquer ferramenta que se proponha a tratar deve passar
          pela Anvisa.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">FAQ — Perguntas Frequentes</h2>
        <div className="space-y-3 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Posso usar ChatGPT para tirar dúvidas médicas?</h4>
            <p className="text-sm text-muted-foreground mb-0">Para entender termos e contexto, sim. Para autodiagnóstico ou ajuste de medicação, não. ChatGPT não tem acesso ao seu prontuário, exames atualizados ou medicamentos em uso — e pode alucinar referências.</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Meu plano de saúde já usa IA?</h4>
            <p className="text-sm text-muted-foreground mb-0">Sim, principalmente em radiologia e autorização de procedimentos. Pela LGPD, você tem direito a saber e a pedir revisão humana se uma decisão automatizada negar cobertura (art. 20).</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Wearable detecta infarto?</h4>
            <p className="text-sm text-muted-foreground mb-0">Não diretamente. Detecta fibrilação atrial e variações de ritmo que aumentam o risco. Dor no peito persistente continua sendo emergência — chame o SAMU 192.</p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Você usaria uma IA para monitorar sua saúde?</h3>
          <p className="text-muted-foreground">Conta pra gente nos comentários! 👇</p>
        </div>
      </div>

      <EditorialTake category="ia" title="Análise do Marcos: IA médica salva vidas em triagem, mas precisa de médico para decidir">
        <p>
          A IA na saúde já entrega resultado real <strong>onde ela é assistente do médico</strong> — radiologia, triagem,
          descoberta de fármacos. Onde ela tenta substituir o profissional ou virar "terapeuta de bolso", ainda é experimental
          e perigosa. No Brasil, a vantagem competitiva está nos hospitais que integram a IA ao fluxo do radiologista
          (Einstein, Sírio, Rede D'Or já fazem isso). O risco real, no entanto, é o plano de saúde usar IA para negar cobertura
          sem revisão humana — algo que a <strong>LGPD veda</strong> e que ainda é pouco fiscalizado. Se você teve procedimento
          recusado em 2025-2026, peça expressamente revisão humana baseada no art. 20.
        </p>
      </EditorialTake>

      <ArticleSources sources={[
        { title: "FDA — AI/ML-Enabled Medical Devices (lista oficial)", url: "https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-aiml-enabled-medical-devices", publisher: "U.S. Food and Drug Administration", accessedAt: "Maio 2026" },
        { title: "DeepMind — AlphaFold 3 (Nature, 2024)", url: "https://deepmind.google/discover/blog/alphafold-3-predicts-the-structure-and-interactions-of-all-of-lifes-molecules/", publisher: "Google DeepMind", accessedAt: "Maio 2026" },
        { title: "Apple Heart Study — Stanford / JAMA Cardiology", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1901183", publisher: "NEJM", accessedAt: "Maio 2026" },
        { title: "Anvisa — Consulta Pública 1.301 (Software como Dispositivo Médico)", url: "https://www.gov.br/anvisa/pt-br/assuntos/regulamentacao/agenda-regulatoria/temas/2021-2023/dispositivos-medicos", publisher: "Anvisa", accessedAt: "Maio 2026" },
        { title: "Conselho Federal de Medicina — Resolução 2.314/2022 (Telemedicina)", url: "https://portal.cfm.org.br/images/PDF/resolucao2314.pdf", publisher: "CFM", accessedAt: "Maio 2026" }
      ]} />

      <RelatedPosts currentSlug="ia-saude-2026-diagnosticos-futuro" />
      <CommentSection postId="ia-saude-2026-diagnosticos-futuro" postTitle="IA para Saúde 2026: Diagnósticos, Monitoramento e o Futuro da Medicina" />
    </article>
  );
};

export default IASaude2026;
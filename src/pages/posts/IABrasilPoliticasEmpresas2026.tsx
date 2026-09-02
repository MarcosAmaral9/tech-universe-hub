import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import RelatedPosts from "@/components/RelatedPosts";
import CommentSection from "@/components/CommentSection";
import CategoryBadge from "@/components/CategoryBadge";
import { Clock, User, Calendar, Landmark, ShieldCheck, Rocket, Building2, Scale, Banknote } from "lucide-react";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";
import heroImg from "@/assets/ia-brasil-politicas-empresas-2026.webp";

const IABrasilPoliticasEmpresas2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "ia-brasil-politicas-empresas-2026",
      "IA no Brasil em 2026: Políticas Públicas, Leis de Privacidade e o Cenário de Empresas e Startups",
      "ia"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="ia" />
      <header className="mb-8">
        <CategoryBadge category="ia" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          IA no Brasil em 2026: Políticas Públicas, Leis de Privacidade e o Cenário de Empresas e Startups
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />02 de Setembro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="ia" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" loading="eager" decoding="async"
          src={heroImg} alt="Mapa do Brasil em circuitos digitais com prédio do governo, rede neural e escudo de privacidade — políticas públicas de IA no Brasil" className="w-full h-full object-cover" width={1536} height={864} />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Em 2026, a inteligência artificial no Brasil deixou de ser assunto de laboratório para virar <strong>pauta de Estado</strong>. De um lado, o governo federal acelera o <strong>Plano Brasileiro de Inteligência Artificial (PBIA)</strong> e suas políticas públicas de financiamento, infraestrutura e capacitação. Do outro, a <strong>LGPD</strong> e as novas diretrizes da <strong>ANPD</strong> definem os limites do que empresas podem fazer com dados de cidadãos. No meio desse campo, um ecossistema de empresas e startups que já movimenta bilhões de reais tenta se posicionar. Este guia conecta os três eixos — políticas públicas, leis de privacidade e mercado — para você entender de verdade onde o Brasil está e para onde vai.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Landmark className="h-7 w-7 text-violet-400" />
          Políticas Públicas: o Estado Entra no Jogo
        </h2>
        <p>
          O marco principal é o <strong>Plano Brasileiro de Inteligência Artificial (PBIA 2024–2028)</strong>, lançado pelo Ministério da Ciência, Tecnologia e Inovações (MCTI) com orçamento previsto de <strong>R$ 23 bilhões</strong> ao longo de quatro anos, combinando recursos do FNDCT, do BNDES, da Finep e de fundos setoriais. O plano organiza a atuação federal em cinco frentes: infraestrutura e supercomputação, disseminação da IA nas empresas, formação de pessoas, aplicação de IA em serviços públicos e regulação.
        </p>
        <div className="not-prose my-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { valor: "R$ 23 bi", desc: "Orçamento previsto do PBIA 2024–2028" },
            { valor: "R$ 1 bi", desc: "Linha 'IA Transforma' do BNDES para empresas" },
            { valor: "5 eixos", desc: "Frentes de atuação do plano federal de IA" },
            { valor: "50 mil", desc: "Meta de profissionais capacitados por ano" },
          ].map((item) => (
            <div key={item.desc} className="bg-card rounded-xl border border-violet-500/20 p-4 text-center">
              <div className="text-2xl font-bold text-violet-400">{item.valor}</div>
              <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
            </div>
          ))}
        </div>
        <p>
          Na prática, as ações mais visíveis do PBIA em 2026 são:
        </p>
        <ul>
          <li><strong>Supercomputação nacional:</strong> ampliação do Santos Dumont, o supercomputador da Petrobras/LNCC, e investimentos em infraestrutura de processamento para pesquisa, reduzindo a dependência de nuvem estrangeira para treinar modelos em português.</li>
          <li><strong>IA no serviço público:</strong> programas de modernização do governo digital com IA em atendimento ao cidadão, análise de benefícios e combate a fraudes, sob coordenação da Secretaria de Governo Digital.</li>
          <li><strong>Capacitação em massa:</strong> parcerias com plataformas de ensino e institutos federais para formar técnicos, desenvolvedores e gestores com competências em IA, com bolsas e cursos gratuitos.</li>
          <li><strong>Financiamento à inovação:</strong> além da linha "IA Transforma" do BNDES, a Finep e o FNDCT mantêm chamadas públicas para projetos de pesquisa aplicada em IA, com prioridade para saúde, agro e indústria.</li>
        </ul>
        <p>
          Estados e municípios também entraram no movimento. São Paulo lidera com o ecossistema do <strong>Parque Tecnológico de São José dos Campos</strong> e programas da Fapesp de apoio a pesquisa em IA; outros estados criaram secretarias ou comitês de inovação com eixos dedicados à tecnologia. A descentralização é lenta, mas existe — e importa, porque boa parte dos incentivos estaduais (isenções fiscais, incubadoras, editais) passa despercebida por quem empreende.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Scale className="h-7 w-7 text-violet-400" />
          A Regulamentação: Marco Legal da IA e o Que Já Vale
        </h2>
        <p>
          O <strong>PL 2338/2023</strong>, aprovado pelo Senado em dezembro de 2024, segue em tramitação na Câmara dos Deputados em 2026. O texto cria um marco regulatório inspirado no modelo europeu, com classificação de sistemas de IA por nível de risco:
        </p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Nível de risco</th>
              <th className="text-left py-3 px-4">Exemplos</th>
              <th className="text-left py-3 px-4">Obrigação principal</th>
            </tr></thead>
            <tbody>
              {[
                ["Risco excessivo (proibido)", "Vigilância biométrica indiscriminada, manipulação subliminar, pontuação social estilo crédito social", "Proibição total no território nacional"],
                ["Alto risco", "IA em saúde, recrutamento, crédito, educação, infraestrutura crítica", "Avaliação de impacto, governança, supervisão humana e relatórios"],
                ["Risco limitado", "Chatbots, assistentes virtuais, sistemas de recomendação", "Transparência: o usuário deve saber que interage com IA"],
                ["Risco mínimo", "Filtros de spam, jogos, ferramentas de produtividade", "Livre, seguindo a legislação geral (LGPD, CDC)"],
              ].map(([n, e, o]) => (
                <tr key={n} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-violet-400">{n}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{e}</td>
                  <td className="py-3 px-4">{o}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          O ponto mais importante para empresas: <strong>a aprovação do marco legal não é condição para ter obrigações</strong>. A LGPD já vale desde 2020 e já se aplica integralmente a qualquer sistema de IA que processe dados pessoais — inclusive ao Artigo 20, que garante ao cidadão o direito de <strong>revisão de decisões automatizadas</strong>. Um banco que nega crédito por algoritmo, por exemplo, já pode ser obrigado hoje a explicar os critérios utilizados.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <ShieldCheck className="h-7 w-7 text-violet-400" />
          Leis de Privacidade: LGPD, ANPD e os Limites do Treinamento de IA
        </h2>
        <p>
          A <strong>ANPD (Autoridade Nacional de Proteção de Dados)</strong> virou protagonista do debate de IA no Brasil. Em 2024, a autarquia suspendeu preventivamente o uso de dados pessoais de brasileiros pela Meta para treinar seus modelos — decisão revertida parcialmente após ajustes de transparência, mas que marcou o tom: <strong>dados pessoais não são matéria-prima gratuita</strong>. Em 2025 e 2026, a ANPD notificou o X/Twitter sobre o Grok, abriu diálogo com a OpenAI e publicou estudo preliminar sobre sandbox regulatório para IA.
        </p>
        <p>
          Para empresas que treinam ou ajustam modelos, as regras práticas em 2026 são:
        </p>
        <ul>
          <li><strong>Base legal obrigatória:</strong> treinar IA com dados pessoais exige fundamento na LGPD (legítimo interesse é o mais usado, mas exige balanço documentado de riscos e expectativas do titular).</li>
          <li><strong>Direito de oposição:</strong> o titular pode se opor ao uso de seus dados — e as plataformas precisam oferecer mecanismo acessível para isso.</li>
          <li><strong>Dados sensíveis e de crianças:</strong> praticamente vedados para treinamento sem consentimento específico e destacado; dados de menores exigem consentimento parental na melhor hipótese.</li>
          <li><strong>Transferência internacional:</strong> enviar dados para APIs estrangeiras exige garantias contratuais (cláusulas-padrão) ou que o destino tenha nível de proteção equivalente — ponto crítico para quem usa APIs americanas com dados de clientes.</li>
          <li><strong>RIPD (Relatório de Impacto):</strong> tratamentos de alto risco, como perfilamento automatizado em larga escala, exigem relatório de impacto à proteção de dados pessoais.</li>
        </ul>
        <div className="not-prose my-6 bg-card rounded-xl border border-emerald-500/20 p-5">
          <h3 className="font-bold text-emerald-400 mb-3">✅ Checklist LGPD + IA para empresas</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Mapeie quais dados pessoais entram em qualquer fluxo de IA (prompts, fine-tuning, embeddings)</li>
            <li>• Documente a base legal de cada tratamento e o balanço de legítimo interesse, se aplicável</li>
            <li>• Garanta canal de oposição e de revisão de decisões automatizadas (Art. 20 LGPD)</li>
            <li>• Revise contratos com provedores de API: DPA, cláusulas de transferência internacional, política de retenção</li>
            <li>• Anonimize ou pseudonimize dados sempre que o caso de uso permitir</li>
            <li>• Nomeie ou formalize o encarregado de dados (DPO) e mantenha RIPD atualizado</li>
          </ul>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Rocket className="h-7 w-7 text-violet-400" />
          O Ecossistema de Startups de IA no Brasil
        </h2>
        <p>
          O Brasil tem hoje <strong>mais de 1.000 startups que usam IA como núcleo do produto</strong>, segundo mapeamentos do ecossistema como o 100 Open Startups e relatórios da ABStartups. O destaque de 2025–2026 foi a profissionalização: saíram de cena os projetos de "IA genérica em cima de API" e cresceram startups com modelo de negócio defensável — dados proprietários, integração profunda com processos do cliente e receita recorrente.
        </p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Vertical</th>
              <th className="text-left py-3 px-4">O que as startups fazem</th>
              <th className="text-left py-3 px-4">Momento em 2026</th>
            </tr></thead>
            <tbody>
              {[
                ["Legaltechs / Jurimetria", "Análise de jurisprudência, automação de peças, due diligence com LLMs", "Adoção acelerada por grandes escritórios e departamentos jurídicos"],
                ["Healthtechs", "Triagem, laudos assistidos por IA, gestão de leitos", "Crescimento forte, mas travado por regulação da Anvisa e LGPD de dados sensíveis"],
                ["Agritechs", "Visão computacional em lavouras, previsão de safra, manejo de precisão", "Tração real no agro brasileiro, com exportação de soluções"],
                ["Fintechs / Crédito", "Credit scoring alternativo, antifraude, atendimento", "Maduro: IA já é infraestrutura, não diferencial"],
                ["HRtechs", "Recrutamento com IA, avaliação de fit, people analytics", "Cresce, sob escrutínio por risco de discriminação algorítmica"],
                ["IA generativa corporativa", "Copilotos setoriais, automação de suporte, geração de documentos", "Segmento mais disputado; diferenciação por dados e integração"],
              ].map(([v, f, m]) => (
                <tr key={v} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-violet-400">{v}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{f}</td>
                  <td className="py-3 px-4">{m}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          No lado do capital, os fundos brasileiros e internacionais voltaram a escrever cheques para IA depois da ressaca de 2022–2023, mas com critério muito maior: exigem receita, retenção e um plano claro de margem diante do custo de inferência. A tese dominante mudou de "quem tem o melhor modelo" para <strong>"quem tem os melhores dados e a melhor distribuição"</strong> — o que favorece startups verticais com acesso a dados de nicho que as big techs não têm.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Building2 className="h-7 w-7 text-violet-400" />
          Grandes Empresas: da Experimentação à Operação
        </h2>
        <p>
          Nas grandes corporações, 2026 é o ano em que IA saiu do centro de inovação e entrou no orçamento das áreas de negócio. Os bancos seguem na vanguarda — Itaú, Bradesco e Nubank mantêm centenas de modelos em produção para crédito, fraude e atendimento. O varejo avança em precificação dinâmica e cadeia de suprimentos. Indústrias como Vale, Embraer e Petrobras aplicam IA em manutenção preditiva, simulação e segurança operacional.
        </p>
        <p>
          Três tendências definem o comportamento das grandes empresas brasileiras neste ano:
        </p>
        <ul>
          <li><strong>Governança antes de escala:</strong> comitês internos de IA, políticas de uso de IA generativa para funcionários e inventário de modelos viraram padrão — em parte por pressão da LGPD, em parte por antecipação ao marco legal.</li>
          <li><strong>Multimodelo e multicloud:</strong> depois de sobressaltos com mudanças de preço e de termos de APIs, as empresas passaram a desenhar arquiteturas que não dependem de um único fornecedor — combinando APIs comerciais com modelos open source (Llama, Qwen, Mistral) rodando em infraestrutura própria ou contratada.</li>
          <li><strong>Medição de ROI:</strong> acabou a paciência com pilotos infinitos. Os projetos que sobrevivem em 2026 são os que demonstram ganho mensurável — redução de custo por atendimento, aumento de conversão, horas economizadas por processo.</li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Banknote className="h-7 w-7 text-violet-400" />
          O Que Falta: Infraestrutura, Talentos e Soberania de Dados
        </h2>
        <p>
          Apesar do avanço, três gargalos estruturais limitam o Brasil. O primeiro é <strong>computacional</strong>: o país não tem data centers de ponta em escala para treinar modelos de fronteira, e a energia e a conectividade dos centros existentes ainda encarecem a operação — embora o potencial de energia renovável brasileira tenha começado a atrair anúncios de investimento em data centers. O segundo é <strong>humano</strong>: o déficit de profissionais de tecnologia segue na casa das centenas de milhares, e as empresas disputam os mesmos poucos engenheiros de machine learning sêniores. O terceiro é <strong>regulatório-econômico</strong>: setores como saúde e finanças precisam de garantias de soberania de dados que ainda não existem de forma plena, o que trava projetos inteiros.
        </p>
        <p>
          A resposta do PBIA a esses gargalos — supercomputação pública, formação em massa e financiamento — é a aposta de longo prazo. A pergunta que fica para 2027 é se a execução vai acompanhar a ambição do orçamento anunciado.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Conclusão</h2>
        <p>
          O Brasil em 2026 vive um momento raro de alinhamento: dinheiro público na mesa, regulamentação em construção com participação da sociedade, uma autoridade de dados ativa e um ecossistema privado que já provou casos de uso reais. Quem empreende ou trabalha com IA no país precisa dominar os três eixos ao mesmo tempo — aproveitar os incentivos das políticas públicas, operar dentro das regras de privacidade que já existem e construir produtos que resolvam problemas reais do mercado. A janela está aberta, mas não é infinita.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">Perguntas Frequentes</h2>
        <div className="not-prose my-6 space-y-4">
          {[
            { q: "O que é o Plano Brasileiro de Inteligência Artificial (PBIA)?", a: "É o plano federal 2024–2028 coordenado pelo MCTI, com orçamento previsto de R$ 23 bilhões, organizado em cinco eixos: infraestrutura e supercomputação, difusão de IA nas empresas, formação de pessoas, IA no serviço público e regulação." },
            { q: "O Marco Legal da IA já está valendo no Brasil?", a: "Não. O PL 2338/2023 foi aprovado no Senado em dezembro de 2024 e segue em tramitação na Câmara em 2026. Mas a LGPD já se aplica integralmente a sistemas de IA que tratam dados pessoais, incluindo o direito de revisão de decisões automatizadas (Art. 20)." },
            { q: "Empresas podem usar dados de clientes para treinar IA?", a: "Sim, desde que haja base legal na LGPD, transparência, mecanismo de oposição do titular e, para dados sensíveis ou de crianças, consentimento específico. Transferir dados para APIs estrangeiras exige garantias contratuais de transferência internacional." },
            { q: "Existem incentivos públicos para startups de IA no Brasil?", a: "Sim: a linha 'IA Transforma' do BNDES (R$ 1 bilhão), chamadas da Finep e do FNDCT, programas estaduais como os da Fapesp em São Paulo e incubadoras ligadas a parques tecnológicos." },
            { q: "Quais setores concentram as startups de IA brasileiras?", a: "Legaltechs, healthtechs, agritechs, fintechs, HRtechs e soluções corporativas de IA generativa são as verticais mais fortes, com diferenciação baseada em dados proprietários de nicho." },
            { q: "O Brasil consegue treinar seus próprios grandes modelos de IA?", a: "Ainda não em escala de fronteira, por falta de infraestrutura computacional de ponta. O PBIA investe em supercomputação (como a ampliação do Santos Dumont) e em modelos nacionais de menor porte em português." },
          ].map((f) => (
            <div key={f.q} className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-bold text-base mb-2">{f.q}</h3>
              <p className="text-sm text-muted-foreground mb-0">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      <EditorialTake category="ia" title="Análise do Marcos: o alinhamento raro entre Estado, lei e mercado">
        <p>
          O mais interessante do momento brasileiro não é nenhum dos três eixos isolado — é o fato de eles estarem se movendo <strong>juntos pela primeira vez</strong>. O PBIA colocou dinheiro de verdade na mesa, a ANPD mostrou que não tem medo de notificar gigante global e o mercado amadureceu a ponto de abandonar pilotos decorativos. Esse alinhamento é raro em política de tecnologia no Brasil, onde o normal é a lei chegar dez anos depois da prática.
        </p>
        <p>
          Mas tem uma assimetria que pouca gente comenta: as obrigações já estão valendo (LGPD + Art. 20), enquanto os benefícios do PBIA ainda estão em fase de desembolso. Na prática, isso significa que 2026 é o ano em que <strong>compliance paga antes do incentivo chegar</strong>. A empresa que estruturar agora sua governança de dados e de IA não está "se preparando para a lei" — está construindo vantagem competitiva, porque quando o dinheiro público e as licitações com exigência de conformidade destravarem, quem estiver pronto entra na frente da fila.
        </p>
        <p>
          Para startups, o recado do mercado ficou claro: API wrapper genérico não levanta mais rodada. O que vale é dado proprietário, vertical profunda e arquitetura que não morre se uma API gringa mudar de preço. O Brasil tem uma vantagem subestimada nesse jogo — setores como agro, jurídico e saúde geram dados que simplesmente não existem em nenhum outro lugar do mundo. Quem transformar esses dados em produto, dentro da LGPD, tem negócio defensável de verdade.
        </p>
      </EditorialTake>
      <ArticleSources
        sources={[
          { title: "Plano Brasileiro de Inteligência Artificial (PBIA 2024–2028)", url: "https://www.gov.br/mcti/pt-br", publisher: "MCTI", accessedAt: "Setembro 2026" },
          { title: "PL 2338/2023 — Marco Legal da Inteligência Artificial", url: "https://www25.senado.leg.br/web/atividade/materias/-/materia/157233", publisher: "Senado Federal", accessedAt: "Setembro 2026" },
          { title: "Lei Geral de Proteção de Dados — atuação e notificações sobre IA", url: "https://www.gov.br/anpd/pt-br", publisher: "ANPD", accessedAt: "Setembro 2026" },
          { title: "Linha de crédito IA Transforma", url: "https://www.bndes.gov.br/", publisher: "BNDES", accessedAt: "Setembro 2026" },
          { title: "Mapeamento do ecossistema de inovação aberta", url: "https://100openstartups.com/", publisher: "100 Open Startups", accessedAt: "Setembro 2026" },
          { title: "Associação Brasileira de Startups — relatórios do ecossistema", url: "https://abstartups.com.br/", publisher: "ABStartups", accessedAt: "Setembro 2026" },
        ]}
      />
      <RelatedPosts currentSlug="ia-brasil-politicas-empresas-2026" />
      <CommentSection category="ia" postId="ia-brasil-politicas-empresas-2026" postTitle="IA no Brasil em 2026: Políticas Públicas, Leis de Privacidade e Empresas" />
    </article>
  );
};

export default IABrasilPoliticasEmpresas2026;

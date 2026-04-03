import { BlogPost, Category } from "@/types/blog";

import mangaManhwaManhuaImg from "@/assets/manga-manhwa-manhua.webp";
import manhwaVsManuaImg from "@/assets/manhwa-vs-manhua.webp";
import systemManhwaImg from "@/assets/system-manhwa-hero.webp";
import aiAnimeDubbingImg from "@/assets/ai-anime-dubbing.jpg";
import aiRemasteringImg from "@/assets/ai-remastering.webp";
import techInvesting2026Img from "@/assets/tech-investing-2026.webp";
import vikingsRagnarImg from "@/assets/vikings-ragnar.webp";
import hellLetLooseImg from "@/assets/hell-let-loose.jpg";
import avatarPandoraImg from "@/assets/avatar-pandora.webp";
import avatarWaterImg from "@/assets/avatar-water-swimming.webp";
import avatarFireImg from "@/assets/avatar-fire.webp";
import avatarGameImg from "@/assets/avatar-game-female.webp";
import acValhallaImg from "@/assets/ac-valhalla.webp";
import acShadowsImg from "@/assets/ac-shadows.webp";
import acOdysseyImg from "@/assets/ac-odyssey.webp";
import acBlackFlagImg from "@/assets/ac-black-flag.webp";
import ac1AltairImg    from "@/assets/ac-1-altair.webp";
import ac2EzioImg      from "@/assets/ac-2-ezio.webp";
import acBrotherImg    from "@/assets/ac-brotherhood.webp";
import acRevImg        from "@/assets/ac-revelations.webp";
import soloLevelingImg  from "@/assets/solo-leveling.webp";
import tsukimichiImg    from "@/assets/tsukimichi.webp";
import mugenGachaImg    from "@/assets/mugen-gacha.webp";
import kizokuTenseiImg  from "@/assets/kizoku-tensei.webp";
import hellModeImg      from "@/assets/hell-mode.webp";
import nonbiriNoukaImg  from "@/assets/isekai-nonbiri-nouka.webp";
import maousamaImg      from "@/assets/maousama-retry.webp";
import okirakuImg       from "@/assets/okiraku-ryoushu.webp";
import acOriginsImg from "@/assets/ac-origins.webp";
import acMirageImg from "@/assets/ac-mirage.webp";
import ac3Img from "@/assets/ac-3.webp";
import acSyndicateImg from "@/assets/ac-syndicate.webp";
import acUnityImg from "@/assets/ac-unity.webp";
import acRogueImg from "@/assets/ac-rogue.webp";
import acPortalImg from "@/assets/assassins-creed-portal.webp";
import tesouroDiretoImg from "@/assets/tesouro-direto-2026.webp";
import rendaPassivaImg from "@/assets/renda-passiva-2026.webp";
import carteiraInvestimentosImg from "@/assets/carteira-investimentos-2026.webp";
import cryptoInvest2026Img from "@/assets/crypto-invest-2026.webp";
import irpf2026Img from "@/assets/irpf-2026.webp";
import iaFinancas2026Img from "@/assets/ia-financas-2026.webp";
import metodo3BaldesImg from "@/assets/metodo-3-baldes.webp";
import fiis2026Img from "@/assets/fiis-2026.webp";
import sairDividas2026Img from "@/assets/sair-dividas-2026.webp";
import planejamentoFinanceiro2026Img from "@/assets/planejamento-financeiro-2026.webp";
import calculadorasFinanceirasImg from "@/assets/calculadoras-financeiras.webp";
// New IA articles images
import chatgptVsGeminiImg from "@/assets/chatgpt-vs-gemini-vs-claude-2026.webp";
import iaGanharDinheiroImg from "@/assets/ia-ganhar-dinheiro-2026.webp";
import iaTrabalhoImg from "@/assets/ia-trabalho-2026.webp";
import appsIaProdutividadeImg from "@/assets/apps-ia-produtividade-2026.webp";
import iaGenerativaIniciantesImg from "@/assets/ia-generativa-iniciantes-2026.webp";
import deepfakesIaImg from "@/assets/deepfakes-ia-2026.webp";
import iaEducacaoImg from "@/assets/ia-educacao-2026.webp";
import agentesIaImg from "@/assets/agentes-ia-2026.webp";
import iaSaudeImg from "@/assets/ia-saude-2026.webp";
import regulamentacaoIaImg from "@/assets/regulamentacao-ia-2026.webp";
// New Otaku articles images
import animesAguardadosImg from "@/assets/animes-aguardados-2026.webp";
import guiaCosplayImg from "@/assets/guia-cosplay-2026.webp";
import mangaVsAnimeImg from "@/assets/manga-vs-anime-2026.webp";
import culturaOtakuBrasilImg from "@/assets/cultura-otaku-brasil-2026.webp";
import jogosAnimeImg from "@/assets/jogos-anime-2026.webp";
import aprenderJaponesImg from "@/assets/aprender-japones-anime-2026.webp";
import isekaiImg from "@/assets/isekai-2026.webp";
import merchandisingOtakuImg from "@/assets/merchandising-otaku-2026.webp";
import melhoresMangasImg from "@/assets/melhores-mangas-2026.webp";
import saudeMentalOtakuImg from "@/assets/saude-mental-otaku-2026.webp";
import iaCriatividadeImg from "@/assets/ia-criatividade-2026.webp";
import iaPrivacidadeImg from "@/assets/ia-privacidade-dados-2026.webp";
import etfs2026Img from "@/assets/etfs-2026.webp";
import economiaDomesticaImg from "@/assets/economia-domestica-2026.webp";
import crimsonDesertGuiaImg from "@/assets/crimson-desert-guia.webp";
import crimsonDesertCombateImg from "@/assets/crimson-desert-combate.webp";
import crimsonDesertReviewImg from "@/assets/crimson-desert-review.webp";
import crimsonDesertBuildsImg from "@/assets/crimson-desert-builds.webp";
import cdb2026Img from "@/assets/cdb-2026-guia.webp";
import previdenciaImg from "@/assets/previdencia-privada-2026.webp";
import iaCodigoImg from "@/assets/ia-codigo-programadores-2026.webp";
import iaOpenSourceImg from "@/assets/modelos-ia-open-source-2026.webp";
import bg3Img from "@/assets/baldurs-gate-3-review-2026.webp";
import dragonAgeImg from "@/assets/dragon-age-veilguard-review-2026.webp";
import demonSlayerImg from "@/assets/demon-slayer-hashira-2026.webp";
import onePieceImg from "@/assets/one-piece-final-saga-2026.webp";
import crimsonMapaImg from "@/assets/crimson-desert-mapa-pywel.webp";
import crimsonBossesImg from "@/assets/crimson-desert-bosses.webp";
import crimsonIniciantesImg from "@/assets/crimson-desert-iniciantes.webp";
import crimsonEquipImg from "@/assets/crimson-desert-equipamentos.webp";
import tensuraGuiaImg from "@/assets/tensura-guia-completo.webp";
import tensuraCharsImg from "@/assets/tensura-personagens.webp";
import overlordGuiaImg from "@/assets/overlord-guia-completo.webp";
import overlordCharsImg from "@/assets/overlord-personagens.webp";
import selicCairImg from "@/assets/selic-cair-2026.webp";
import bitcoin2026ValeImg from "@/assets/bitcoin-2026-vale-comprar.webp";
import iaFinancasPessoaisImg from "@/assets/ia-financas-pessoais-2026.webp";
import fiis2026AindaValeImg from "@/assets/fiis-2026-ainda-vale.webp";
import poupancaVsCdbTesouroImg from "@/assets/poupanca-vs-cdb-tesouro-2026.webp";
import reservaEmergenciaImg from "@/assets/reserva-emergencia-2026.webp";
import iaCibersegurancaImg from "@/assets/ia-ciberseguranca-2026.webp";
import promptEngineeringImg from "@/assets/prompt-engineering-2026.webp";
import gemini3VsGpt5Img from "@/assets/gemini3-vs-gpt5-2026.webp";
import iaBrasilAdocaoImg from "@/assets/ia-brasil-adocao-2026.webp";
import inflacaoProtegerImg from "@/assets/inflacao-proteger-investimentos-2026.webp";
import fiisDefensivosAbrilImg from "@/assets/fiis-defensivos-abril-2026.webp";

export const blogPosts: BlogPost[] = [

  // ── 03 Abr 2026 — IA ──────────────────────────────────────
  {
    id: "139",
    slug: "gemini-3-vs-gpt-5-2026",
    title: "Gemini 2.5 Pro vs GPT-4o: Qual o Melhor Modelo de IA em 2026?",
    excerpt: "Comparamos os dois modelos de IA mais usados no mundo em 2026: Gemini 2.5 Pro (Google) e GPT-4o (OpenAI). Benchmarks reais, preços, multimodalidade e qual escolher para cada caso.",
    content: "",
    category: "ia",
    subtopic: "comparativos",
    image: gemini3VsGpt5Img,
    author: "VICIO<CODE>",
    date: "2026-04-03",
    readTime: "14 min",
    faq: [
      { q: "Qual é melhor: Gemini 2.5 Pro ou GPT-4o?", a: "Depende do uso. O Gemini 2.5 Pro é superior em raciocínio matemático (MATH: 91% vs 76,6%), análise de vídeo nativa e contexto longo (1M tokens). O GPT-4o é mais rápido, melhor avaliado por humanos no Chatbot Arena e superior em código Python (HumanEval: 90,2% vs 84,1%)." },
      { q: "Quanto custa usar o Gemini 2.5 Pro?", a: "O Gemini 2.5 Pro custa US$ 1,25 por milhão de tokens de entrada (para contextos até 200K tokens) e US$ 2,50 acima disso. O GPT-4o cobra US$ 2,50 por milhão de tokens de entrada — o dobro na faixa padrão." },
      { q: "O GPT-4o processa vídeo?", a: "Não nativamente via API — o GPT-4o aceita apenas imagens. O Gemini 2.5 Pro processa vídeos diretamente na API, podendo analisar até 1 hora de conteúdo em uma única chamada." },
      { q: "Qual modelo tem a maior janela de contexto?", a: "O Gemini 2.5 Pro lidera com 1 milhão de tokens (suporte experimental a 2 milhões), contra 128 mil tokens do GPT-4o. Para análise de documentos longos, contratos ou livros, o Gemini 2.5 Pro é a escolha clara." },
      { q: "Existe alternativa a esses dois modelos?", a: "Sim. O Claude 3.7 Sonnet da Anthropic (lançado em fevereiro de 2026) lidera em benchmarks de código (SWE-bench: 70,3%). Para uso gratuito e local, o Llama 3.3 70B (Meta) e o DeepSeek R1 são opções open source de alta qualidade." },
    ],
  },
  {
    id: "140",
    slug: "ia-brasil-adocao-2026",
    title: "IA no Brasil em 2026: Investimentos em Tecnologia Crescem 18,5% e Transformam o Mercado",
    excerpt: "Com US$ 67,8 bilhões investidos em TI e 42% das empresas usando IA em produção, o Brasil se consolida como polo de inteligência artificial na América Latina.",
    content: "",
    category: "ia",
    subtopic: "trabalho",
    image: iaBrasilAdocaoImg,
    author: "VICIO<CODE>",
    date: "2026-04-03",
    readTime: "12 min",
    faq: [
      { q: "Quanto o Brasil investe em tecnologia em 2026?", a: "Segundo a Abes/IDC, os investimentos em TI no Brasil totalizaram US$ 67,8 bilhões em 2025, com crescimento de 18,5%. Para 2026, a projeção é de US$ 71,4 bilhões (+5,3%)." },
      { q: "Quantas empresas brasileiras usam IA?", a: "Cerca de 42% das empresas brasileiras já utilizam IA em produção, não apenas em projetos piloto. Os setores que mais adotam são financeiro, varejo e saúde." },
      { q: "Qual o salário de um profissional de IA no Brasil?", a: "Em 2026, um júnior ganha entre R$ 6.000 e R$ 12.000/mês, um pleno entre R$ 12.000 e R$ 22.000, e um sênior entre R$ 22.000 e R$ 35.000. Heads de IA podem ganhar até R$ 70.000/mês." },
      { q: "O Brasil tem regulamentação para IA?", a: "O PL 2338/2023 (Marco Legal da IA) está em tramitação no Congresso. A ANPD publicou diretrizes sobre uso de dados pessoais para treinamento de modelos em março de 2026." },
      { q: "Quais setores mais investem em IA no Brasil?", a: "O setor financeiro lidera com R$ 12,8 bilhões, seguido por varejo (R$ 6,2 bi), indústria (R$ 4,1 bi), telecomunicações (R$ 3,5 bi), saúde (R$ 3,8 bi) e agronegócio (R$ 2,9 bi)." },
    ],
  },

  // ── 03 Abr 2026 — Finanças ────────────────────────────────
  {
    id: "141",
    slug: "inflacao-proteger-investimentos-2026",
    title: "Inflação Acima da Meta em 2026: Como Proteger Seus Investimentos",
    excerpt: "O IPCA projetado subiu para 4,31% e a guerra no Oriente Médio pressiona commodities. Veja 5 estratégias para proteger seu patrimônio da inflação persistente.",
    content: "",
    category: "invest",
    subtopic: "planejamento",
    image: inflacaoProtegerImg,
    author: "VICIO<CODE>",
    date: "2026-04-03",
    readTime: "13 min",
    faq: [
      { q: "Qual a inflação projetada para 2026?", a: "Segundo o Boletim Focus de 30/03/2026, o IPCA projetado para o fim de 2026 é de 4,31%, acima da meta de 3,0% com tolerância de 1,5 ponto percentual." },
      { q: "Como a inflação afeta meus investimentos?", a: "A inflação corrói o poder de compra do dinheiro. Um investimento que rende 10% ao ano com inflação de 4,31% tem rendimento real de apenas ~5,5%. Poupança e renda fixa prefixada são os mais afetados." },
      { q: "Tesouro IPCA+ protege contra inflação?", a: "Sim. O Tesouro IPCA+ paga a variação do IPCA + uma taxa prefixada. Em abril de 2026, está pagando IPCA + 6,8% ao ano — um rendimento real historicamente alto." },
      { q: "FIIs protegem contra inflação?", a: "Sim. FIIs de tijolo têm contratos de aluguel reajustados pelo IPCA ou IGP-M. FIIs de recebíveis com CRIs indexados ao IPCA também oferecem proteção direta." },
      { q: "Devo investir em dólar para me proteger?", a: "Uma exposição de 5-10% da carteira em dólar (via ETFs como IVVB11) pode proteger contra a desvalorização do real, mas não deve ser a estratégia principal." },
    ],
  },
  {
    id: "142",
    slug: "fiis-defensivos-abril-2026",
    title: "FIIs Defensivos em Abril de 2026: Estratégia para Investir com Segurança",
    excerpt: "Com Selic a 13,25% e inflação acima da meta, grandes corretoras recomendam carteiras defensivas de FIIs. Veja critérios de seleção, segmentos e modelo de carteira.",
    content: "",
    category: "invest",
    subtopic: "fiis",
    image: fiisDefensivosAbrilImg,
    author: "VICIO<CODE>",
    date: "2026-04-03",
    readTime: "14 min",
    faq: [
      { q: "O que são FIIs defensivos?", a: "FIIs defensivos são fundos imobiliários com perfil de menor risco: contratos longos, inquilinos de qualidade, baixa vacância e receitas indexadas à inflação ou ao CDI." },
      { q: "FIIs de papel são melhores que FIIs de tijolo agora?", a: "Em cenário de Selic alta (13,25%), FIIs de recebíveis (papel) tendem a distribuir mais dividendos por terem CRIs indexados ao CDI e IPCA. Mas FIIs de tijolo oferecem potencial de valorização quando os juros caírem." },
      { q: "Qual o dividend yield médio dos FIIs em 2026?", a: "O dividend yield médio do IFIX em abril de 2026 é de 9,2% ao ano, com FIIs de recebíveis chegando a 11,5% e logística em torno de 8,8%." },
      { q: "Como sei se um FII está caro ou barato?", a: "O principal indicador é o P/VP (Preço/Valor Patrimonial). Abaixo de 1,0 indica desconto. Acima de 1,05 pode indicar ágio. Combine com DY, vacância e qualidade dos ativos." },
      { q: "Quando devo aumentar o risco na carteira de FIIs?", a: "Quando o Banco Central iniciar cortes mais agressivos na Selic (previsto para 2° semestre de 2026), será o momento de aumentar exposição a FIIs de tijolo e reduzir recebíveis CDI+." },
    ],
  },

  // ── 28 Mar 2026 — IA ──────────────────────────────────────
  {
    id: "137",
    slug: "ia-ciberseguranca-2026",
    title: "IA e Cibersegurança em 2026: Como a Inteligência Artificial Defende (e Ataca) o Mundo Digital",
    excerpt: "A IA é a principal arma de defesa e ataque no mundo digital. Entenda como ela detecta ameaças, como hackers a exploram e como se proteger em 2026.",
    content: "",
    category: "ia",
    subtopic: "seguranca",
    image: iaCibersegurancaImg,
    author: "VICIO<CODE>",
    date: "2026-03-28",
    readTime: "14 min",
    faq: [
      { q: "Como a IA é usada em cibersegurança?", a: "A IA é usada para detectar ameaças em tempo real, analisar padrões de tráfego de rede, identificar comportamentos anômalos, automatizar respostas a incidentes e prever ataques antes que aconteçam." },
      { q: "Hackers também usam IA para atacar?", a: "Sim. Cibercriminosos usam IA para criar e-mails de phishing mais convincentes, gerar deepfakes para engenharia social, automatizar a descoberta de vulnerabilidades e adaptar malwares para escapar de antivírus." },
      { q: "O que é um SOC com IA?", a: "Um SOC (Security Operations Center) com IA é um centro de operações de segurança que utiliza inteligência artificial para monitorar, detectar e responder a ameaças de forma automatizada." },
      { q: "A IA vai substituir profissionais de cibersegurança?", a: "Não. A IA complementa os profissionais, automatizando tarefas repetitivas, mas decisões estratégicas e investigações complexas ainda exigem especialistas humanos." },
      { q: "Quais são as principais ameaças de IA em 2026?", a: "Phishing gerado por IA, deepfakes em tempo real para fraudes, malware adaptativo e ataques automatizados em larga escala a APIs e infraestruturas cloud." },
    ],
  },
  {
    id: "138",
    slug: "prompt-engineering-guia-2026",
    title: "Prompt Engineering em 2026: Guia Definitivo para Escrever Prompts que Funcionam",
    excerpt: "Aprenda a escrever prompts que realmente funcionam. Técnicas de few-shot, chain-of-thought, personas e templates prontos para usar no dia a dia com ChatGPT, Gemini e Claude.",
    content: "",
    category: "ia",
    subtopic: "produtividade",
    image: promptEngineeringImg,
    author: "VICIO<CODE>",
    date: "2026-03-28",
    readTime: "15 min",
    faq: [
      { q: "O que é prompt engineering?", a: "Prompt engineering é a técnica de escrever instruções claras e estruturadas para obter melhores respostas de modelos de IA como ChatGPT, Gemini e Claude." },
      { q: "Preciso saber programar para fazer prompt engineering?", a: "Não. Prompt engineering é essencialmente sobre comunicação clara em linguagem natural. Qualquer pessoa pode aprender as técnicas básicas." },
      { q: "Qual a diferença entre zero-shot, few-shot e chain-of-thought?", a: "Zero-shot é pedir algo sem exemplos. Few-shot é fornecer 2-3 exemplos do resultado esperado. Chain-of-thought é pedir que a IA explique seu raciocínio passo a passo." },
      { q: "Prompt engineering é uma profissão real?", a: "Sim. Em 2026, empresas como Anthropic, Google e startups de IA contratam especialistas em prompt engineering com salários entre US$ 80 mil e US$ 200 mil anuais nos EUA." },
      { q: "Quais são os erros mais comuns ao escrever prompts?", a: "Prompts vagos sem contexto, não especificar formato da resposta, pedir tudo de uma vez, não iterar sobre o resultado e assumir que a IA sabe o contexto que você tem em mente." },
    ],
  },

  // ── 27 Mar 2026 — Finanças ────────────────────────────────
  {
    id: "135",
    slug: "poupanca-vs-cdb-tesouro-2026",
    title: "Poupança vs CDB vs Tesouro Direto em 2026: Qual Rende Mais?",
    excerpt: "Comparativo completo entre Poupança, CDB e Tesouro Direto em 2026. Simulações reais com Selic a 13,25%, tabelas de rendimento líquido e recomendações por objetivo.",
    content: "",
    category: "invest",
    subtopic: "renda-fixa",
    image: poupancaVsCdbTesouroImg,
    author: "VICIO<CODE>",
    date: "2026-03-27",
    readTime: "12 min",
    faq: [
      { q: "Poupança ainda vale a pena em 2026?", a: "A poupança rende 70% da Selic + TR quando a Selic está acima de 8,5%. Em março de 2026, com a Selic a 13,25%, a poupança rende cerca de 9,28% ao ano — menos que CDBs e Tesouro Direto, que oferecem 100% do CDI ou mais." },
      { q: "Qual a diferença entre CDB e Tesouro Direto?", a: "CDBs são títulos emitidos por bancos, cobertos pelo FGC até R$ 250 mil. O Tesouro Direto são títulos do governo federal, considerados os mais seguros do país. CDBs costumam pagar mais, mas o Tesouro tem menor risco de crédito." },
      { q: "CDB tem garantia do FGC?", a: "Sim. O Fundo Garantidor de Créditos (FGC) protege investimentos em CDBs até R$ 250 mil por CPF por instituição financeira, com limite global de R$ 1 milhão a cada 4 anos." },
      { q: "Quanto rende R$ 10.000 na poupança, CDB e Tesouro em 2026?", a: "Com a Selic a 13,25% ao ano: Poupança rende ~R$ 928/ano; CDB 100% CDI rende ~R$ 1.325/ano (bruto); Tesouro Selic rende ~R$ 1.325/ano (bruto). Após IR, CDB e Tesouro ainda superam a poupança." },
      { q: "Qual o melhor investimento para reserva de emergência?", a: "Para reserva de emergência, o Tesouro Selic é a opção mais indicada por ter liquidez D+1, risco soberano e não ter IOF após 30 dias. CDBs com liquidez diária de bancos sólidos também são uma boa alternativa." },
    ],
  },
  {
    id: "136",
    slug: "reserva-emergencia-2026-como-montar",
    title: "Como Montar Sua Reserva de Emergência em 2026: Guia Definitivo",
    excerpt: "Guia completo para montar sua reserva de emergência em 2026. Quanto guardar, onde investir, quanto tempo leva e os erros mais comuns. Com simulações práticas por faixa de renda.",
    content: "",
    category: "invest",
    subtopic: "planejamento",
    image: reservaEmergenciaImg,
    author: "VICIO<CODE>",
    date: "2026-03-27",
    readTime: "11 min",
    faq: [
      { q: "Quanto devo ter de reserva de emergência?", a: "A recomendação padrão é entre 3 e 12 meses de gastos mensais fixos. CLT com estabilidade: 3-6 meses. Autônomos e MEIs: 6-12 meses. Famílias com dependentes: pelo menos 6 meses." },
      { q: "Onde guardar a reserva de emergência em 2026?", a: "O Tesouro Selic é a opção mais indicada: liquidez D+1, risco soberano e rendimento de 13,25% ao ano bruto. CDBs com liquidez diária de grandes bancos também servem." },
      { q: "Posso usar a reserva de emergência para investir?", a: "Não. A reserva de emergência NÃO é investimento — é proteção. Ela deve estar em produtos com liquidez imediata e baixíssimo risco." },
      { q: "Quanto tempo leva para montar uma reserva de emergência?", a: "Depende do seu percentual de poupança. Guardando 20% da renda, uma reserva de 6 meses leva cerca de 2,5 anos. Com 30%, cerca de 1,7 anos." },
      { q: "Reserva de emergência precisa render muito?", a: "Não. O objetivo da reserva é preservação de capital e liquidez, não rendimento máximo. Em 2026, o Tesouro Selic cumpre esse papel com folga." },
    ],
  },


  // ── 22 Mar 2026 — Finanças ────────────────────────────────
  {
    id: "75",
    slug: "selic-comeca-cair-2026",
    title: "Selic começa a cair: o que muda nos seus investimentos agora?",
    excerpt: "O Copom confirmou o início do ciclo de cortes da Selic para março de 2026. Saiba como se reposicionar entre renda fixa, FIIs e renda variável.",
    content: "",
    category: "invest",
    subtopic: "renda-fixa",
    image: selicCairImg,
    author: "VICIO<CODE>",
    date: "2026-03-22",
    readTime: "8 min",
    faq: [
      { q: "Qual é a taxa Selic em março de 2026?", a: "A Selic está em 14,50% ao ano após o primeiro corte de 0,50 ponto percentual realizado pelo Copom em março de 2026, iniciando o ciclo de queda após ter ficado em 15% por cinco reuniões consecutivas." },
      { q: "Até quanto a Selic pode cair em 2026?", a: "O mercado financeiro projeta que a Selic chegue a cerca de 12,25% ao final de 2026, com cortes graduais de 0,50 ponto percentual a cada reunião do Copom." },
      { q: "O que é marcação a mercado no Tesouro Direto?", a: "Marcação a mercado é a atualização diária do preço dos títulos públicos. Quando os juros caem, títulos prefixados comprados antes da queda se valorizam, permitindo vendê-los antes do vencimento com lucro." },
      { q: "Vale a pena investir em renda fixa prefixada com a Selic caindo?", a: "Sim. Ao travar uma taxa prefixada enquanto os juros ainda estão altos, você garante um bom retorno mesmo quando a Selic cair mais. Títulos prefixados de longo prazo tiveram retorno de 20,07% em 2025 segundo a Anbima." },
      { q: "Quais investimentos se beneficiam da queda da Selic?", a: "Títulos prefixados, Tesouro IPCA+, Fundos Imobiliários (FIIs) e ações de setores sensíveis ao crédito como construção civil, varejo e educação tendem a se beneficiar com a queda dos juros." },
    ],
  },
  {
    id: "128",
    slug: "bitcoin-2026-vale-comprar",
    title: "Bitcoin em 2026: vale comprar agora ou esperar?",
    excerpt: "O Bitcoin corrigiu forte após o recorde de US$ 125 mil em 2025 e agora ronda os US$ 70-73 mil. Entenda o cenário e se faz sentido investir agora.",
    content: "",
    category: "invest",
    subtopic: "cripto",
    image: bitcoin2026ValeImg,
    author: "VICIO<CODE>",
    date: "2026-03-22",
    readTime: "8 min",
    faq: [
      { q: "Qual o preço do Bitcoin em março de 2026?", a: "O Bitcoin está cotado entre US$ 70 mil e US$ 73 mil em março de 2026, após ter atingido o recorde histórico de US$ 125 mil em 2025 e corrigido cerca de 44%." },
      { q: "Preciso comprar um Bitcoin inteiro?", a: "Não. Você pode comprar frações de Bitcoin a partir de poucos reais, tanto em exchanges (Mercado Bitcoin, Binance) quanto via ETFs na B3 (BITH11, HASH11, QBTC11)." },
      { q: "Qual a forma mais segura de investir em Bitcoin no Brasil?", a: "Para iniciantes, os ETFs de Bitcoin na B3 são a opção mais prática e segura: BITH11, HASH11 e QBTC11. Funcionam como qualquer ação, sem necessidade de wallet ou exchange." },
      { q: "Bitcoin é um bom investimento em 2026?", a: "Depende do perfil e tamanho da posição. Especialistas recomendam uma alocação entre 1% e 5% da carteira para quem ainda não tem exposição a cripto. O mercado institucional segue comprando via ETFs." },
      { q: "Qual a diferença entre Bitcoin e altcoins para investimento?", a: "O Bitcoin tem maior histórico, liquidez e menor risco regulatório, sendo o único com ETFs aprovados nos EUA. Altcoins como Ethereum e Solana são mais voláteis e devem ser complementares, não a base da carteira." },
    ],
  },
  {
    id: "129",
    slug: "ia-para-financas-pessoais-2026",
    title: "Como usar IA para organizar suas finanças em 2026",
    excerpt: "Ferramentas de IA já categorizam gastos, simulam investimentos e respondem dúvidas financeiras personalizadas. Veja como começar.",
    content: "",
    category: "invest",
    secondaryCategory: "ia",
    subtopic: "ia-financas",
    image: iaFinancasPessoaisImg,
    author: "VICIO<CODE>",
    date: "2026-03-22",
    readTime: "7 min",
    faq: [
      { q: "Como a IA pode ajudar nas finanças pessoais?", a: "A IA pode categorizar gastos automaticamente, identificar padrões de consumo, simular cenários de investimento e responder dúvidas financeiras personalizadas, tudo de forma gratuita usando assistentes como ChatGPT ou Gemini." },
      { q: "É seguro colar meu extrato bancário no ChatGPT?", a: "Você deve evitar inserir dados sensíveis como número de conta, agência, senhas ou documentos. Copie apenas valores e categorias. Use ferramentas com política clara de não treinamento com seus dados, como ChatGPT Plus ou Gemini Advanced." },
      { q: "Quais apps de finanças pessoais usam IA em 2026?", a: "Organizze, Mobills e bancos digitais como Cora e Neon já incorporam funcionalidades de IA para categorização automática e insights de gastos. O Google Sheets com Gemini integrado também é uma opção gratuita." },
      { q: "A IA substitui um planejador financeiro?", a: "Não. A IA é uma ferramenta de apoio para organização e análises básicas. Para decisões complexas como planejamento de aposentadoria, herança ou escolha de produtos específicos de investimento, ainda é recomendado buscar um profissional certificado." },
    ],
  },
  {
    id: "130",
    slug: "fiis-2026-ainda-vale-investir",
    title: "FIIs em 2026: ainda vale a pena investir com a Selic caindo?",
    excerpt: "Com o início do ciclo de queda dos juros, os Fundos Imobiliários voltam ao radar. Entenda o cenário, setores promissores e cuidados antes de investir.",
    content: "",
    category: "invest",
    subtopic: "fiis",
    image: fiis2026AindaValeImg,
    author: "VICIO<CODE>",
    date: "2026-03-22",
    readTime: "8 min",
    faq: [
      { q: "O que são Fundos Imobiliários (FIIs)?", a: "FIIs são fundos que investem em imóveis ou títulos do setor imobiliário. São obrigados por lei a distribuir pelo menos 95% do lucro aos cotistas mensalmente, gerando renda passiva isenta de Imposto de Renda para pessoa física." },
      { q: "Por que FIIs ficam mais atrativos com a Selic caindo?", a: "Com juros menores, a renda fixa paga menos, tornando os dividendos dos FIIs relativamente mais atrativos. Além disso, as cotas tendem a se valorizar em ciclos de queda de juros — no último ciclo (2023-2024), o IFIX subiu cerca de 15% em 12 meses." },
      { q: "Qual a diferença entre FII de papel e FII de tijolo?", a: "FIIs de papel investem em títulos de dívida imobiliária (CRI, LCI) e se beneficiam de juros altos. FIIs de tijolo investem em imóveis físicos (shoppings, galpões, escritórios) e tendem a valorizar mais em ciclos de queda de juros." },
      { q: "Quanto preciso para começar a investir em FIIs?", a: "É possível começar com valores a partir de R$ 10 por cota. Abra conta em uma corretora (XP, Rico, Clear, NuInvest), estude 3 a 5 FIIs de setores diferentes e comece com aportes pequenos." },
      { q: "Dividendos de FIIs pagam Imposto de Renda?", a: "Os dividendos mensais são isentos de IR para pessoa física. Porém, o ganho de capital na venda de cotas com lucro é tributado em 20%. FIIs também não têm garantia do FGC como CDBs e LCIs." },
    ],
  },

  // ── Geek Posts ───────────────────────────────────────────
  {
    id: "22",
    slug: "ac-rogue-assassino-templario",
    title: "AC Rogue em 2026 Vale a Pena? Review — Jogue Como Templário",
    excerpt: "Em AC Rogue você joga como um Templário caçando Assassinos. Shay Patrick Cormac tem uma das melhores histórias da franquia — conheça por que esse jogo subestimado merece sua atenção em 2026.",
    content: "",
    category: "geek",
    subtopic: "assassins-creed",
    image: acRogueImg,
    author: "VICIO<CODE>",
    date: "2026-01-19",
    readTime: "18 min",
    faq: [
      { q: "AC Rogue vale a pena em 2026?", a: "Sim. É um dos ACs mais subestimados, com uma história única onde você joga como Templário. Gráficos remasterizados e gameplay sólido de ~15 horas." },
      { q: "Em AC Rogue você é um Templário?", a: "Sim. Shay Patrick Cormac é um ex-Assassino que muda de lado após uma missão catastrófica, tornando-se caçador de Assassinos a serviço dos Templários." },
      { q: "AC Rogue é sequência de qual jogo?", a: "Rogue se passa entre AC Black Flag e AC Unity, conectando as duas histórias. É a ponte narrativa entre a era colonial e a Revolução Francesa." },
    ]
  },
  {
    id: "21",
    slug: "ac-unity-jogo-frente-tempo-paris",
    title: "AC Unity: O Jogo À Frente do Seu Tempo",
    excerpt: "Assassin's Creed Unity foi lançado com bugs graves em 2014, mas esconde um dos melhores designs de parkour e ambientações da franquia. Paris nunca foi tão detalhada num jogo da Ubisoft.",
    content: "",
    category: "geek",
    subtopic: "assassins-creed",
    image: acUnityImg,
    author: "VICIO<CODE>",
    date: "2026-01-20",
    readTime: "18 min",
    faq: [
      { q: "AC Unity ainda tem bugs em 2026?", a: "Não. A Ubisoft corrigiu todos os bugs graves ao longo dos anos. Em 2026, o jogo roda perfeitamente e é considerado um dos mais bonitos da franquia." },
      { q: "AC Unity tem multiplayer?", a: "Sim. Unity foi o primeiro AC com co-op para até 4 jogadores em missões especiais. Os servidores continuam ativos em 2026." },
      { q: "Por que AC Unity é considerado à frente do seu tempo?", a: "O sistema de parkour, a densidade de NPCs, a ambientação de Paris e o design de interiores eram revolucionários em 2014. Muitos recursos só foram igualados anos depois." },
    ]
  },
  {
    id: "19",
    slug: "ac-syndicate-revolucao-industrial-londres",
    title: "AC Syndicate em 2026 Vale a Pena? Review — Londres Vitoriana",
    excerpt: "Assassin's Creed Syndicate mergulha no Londres vitoriano da Revolução Industrial com os gêmeos Frye. Conheça mecânicas, história e por que ele merece mais reconhecimento.",
    content: "",
    category: "geek",
    subtopic: "assassins-creed",
    image: acSyndicateImg,
    author: "VICIO<CODE>",
    date: "2026-01-21",
    readTime: "18 min",
    faq: [
      { q: "AC Syndicate vale a pena em 2026?", a: "Sim. A ambientação londrina é incrível, os gêmeos Frye são carismáticos e o combate com lâminas ocultas é satisfatório. Um dos ACs mais divertidos de jogar." },
      { q: "Quem são os protagonistas de AC Syndicate?", a: "Jacob e Evie Frye, gêmeos assassinos que lutam contra os Templários na Londres Vitoriana de 1868 durante a Revolução Industrial." },
      { q: "AC Syndicate tem mundo aberto?", a: "Sim. Londres é totalmente explorável com carruagens, trens, o Tâmisa e marcos históricos como o Palácio de Buckingham e a Torre de Londres." },
    ]
  },
  {
    id: "11",
    slug: "avatar-frontiers-pandora-ubisoft-review",
    title: "Avatar: Frontiers of Pandora em 2026 Vale a Pena? Review Completa",
    excerpt: "Analise o jogo que coloca o jogador na pele de um Na'vi com uma das florestas mais bonitas já vistas em videogames.",
    content: "",
    category: "geek",
    subtopic: "avatar",
    image: avatarGameImg,
    author: "VICIO<CODE>",
    date: "2026-01-22",
    readTime: "18 min",
    faq: [
      { q: "Avatar Frontiers of Pandora vale a pena em 2026?", a: "Sim para fãs de Avatar e jogos de mundo aberto. A flora e fauna de Pandora são deslumbrantes. O gameplay é competente, embora siga a fórmula Ubisoft." },
      { q: "Precisa ter assistido Avatar para jogar?", a: "Não. O jogo conta uma história independente com um protagonista Na'vi original. Conhecer os filmes enriquece a experiência, mas não é obrigatório." },
      { q: "Avatar Frontiers of Pandora roda em quais plataformas?", a: "PC, PS5 e Xbox Series X|S. O jogo foi desenvolvido exclusivamente para a geração atual, sem versões para PS4 ou Xbox One." },
    ]
  },
  {
    id: "18",
    slug: "ac-3-remastered-revolucao-americana",
    title: "AC III Remastered: Revolução Americana",
    excerpt: "Assassin's Creed 3 Remastered revisita a Revolução Americana com gráficos atualizados. Conheça a história de Connor, os melhoramentos e o que mudou na versão remasterizada.",
    content: "",
    category: "geek",
    subtopic: "assassins-creed",
    image: ac3Img,
    author: "VICIO<CODE>",
    date: "2026-01-23",
    readTime: "18 min",
    faq: [
      { q: "AC 3 Remastered vale a pena em 2026?", a: "Sim. Os gráficos melhorados e a história de Connor durante a Revolução Americana são envolventes. Inclui AC Liberation e todos os DLCs." },
      { q: "Quem é Connor em AC 3?", a: "Ratonhnhaké:ton (Connor) é um Assassino meio-nativo americano, meio-inglês que luta durante a Guerra de Independência dos EUA entre 1753 e 1783." },
      { q: "O que mudou no Remastered?", a: "Texturas em alta resolução, iluminação melhorada, novos modelos de personagens e melhorias de gameplay. Inclui AC Liberation Remastered e todos os DLCs originais." },
    ]
  },
  {
    id: "10",
    slug: "avatar-3-fogo-cinzas-lado-sombrio-pandora",
    title: "Avatar 3: Fire and Ash — Tudo Sobre o Filme, Data e O Que Esperar",
    excerpt: "Avatar 3: Fire and Ash chega em dezembro de 2025 explorando o lado sombrio de Pandora. Saiba tudo sobre a data de lançamento, enredo, personagens e o que esperar do próximo capítulo da saga.",
    content: "",
    category: "geek",
    subtopic: "avatar",
    image: avatarFireImg,
    author: "VICIO<CODE>",
    date: "2026-01-24",
    readTime: "10 min",
    faq: [
      { q: "Quando estreia Avatar 3?", a: "Avatar 3: Fire and Ash estreou em dezembro de 2025, explorando o 'lado sombrio de Pandora' com novos biomas vulcânicos e tribos Na'vi desconhecidas." },
      { q: "Avatar 3 é o último filme?", a: "Não. James Cameron planeja pelo menos 5 filmes Avatar. O quarto está previsto para 2029 e o quinto para 2031." },
      { q: "Preciso assistir Avatar 2 antes?", a: "Sim. Avatar 3 continua diretamente a história da família Sully iniciada em The Way of Water, com novos conflitos e revelações sobre Pandora." },
    ]
  },
  {
    id: "17",
    slug: "ac-mirage-retorno-raizes-bagda",
    title: "AC Mirage: O Retorno às Raízes em Bagdá",
    excerpt: "Assassin's Creed Mirage leva Basim a Bagdá do século IX, apostando em parkour, stealth e sigilo para resgatar a essência clássica da série da Ubisoft.",
    content: "",
    category: "geek",
    subtopic: "assassins-creed",
    image: acMirageImg,
    author: "VICIO<CODE>",
    date: "2026-01-25",
    readTime: "18 min",
    faq: [
      { q: "AC Mirage é um jogo curto?", a: "Sim, comparado aos RPGs recentes. A campanha principal tem ~20 horas, voltando às raízes clássicas da franquia com foco em stealth e parkour." },
      { q: "AC Mirage tem sistema de níveis e RPG?", a: "Mirage tem um sistema de progressão simplificado comparado a Origins/Odyssey/Valhalla. O foco é em stealth, sigilo e assassinatos, não em builds de RPG." },
      { q: "Quem é Basim em AC Mirage?", a: "Basim Ibn Ishaq é o protagonista, um ladrão de rua em Bagdá do século IX que se torna um Assassino. Ele também aparece em AC Valhalla." },
    ]
  },
  {
    id: "9",
    slug: "avatar-caminho-da-agua-fisica-fluidos",
    title: "Avatar 2: A Física dos Fluidos e o CGI",
    excerpt: "Treze anos depois, a sequência focou na família de Jake Sully e na impressionante captura de performance subaquática.",
    content: "",
    category: "geek",
    subtopic: "avatar",
    image: avatarWaterImg,
    author: "VICIO<CODE>",
    date: "2026-01-26",
    readTime: "14 min",
    faq: [
      { q: "Como foi feita a captura subaquática de Avatar 2?", a: "James Cameron desenvolveu um sistema inédito de captura de performance subaquática. Os atores fizeram cenas em tanques gigantes com câmeras especiais que capturam movimentos debaixo d'água." },
      { q: "Avatar 2 bateu recordes de bilheteria?", a: "Sim. Arrecadou mais de US$ 2,3 bilhões mundialmente, tornando-se o terceiro filme de maior bilheteria da história, atrás apenas de Avatar (2009) e Avengers: Endgame." },
      { q: "O CGI de Avatar 2 é melhor que o primeiro?", a: "Sim. A Wētā FX desenvolveu novos sistemas de simulação de água, cabelo molhado e bioluminescência subaquática que superaram significativamente o primeiro filme." },
    ]
  },

  // ── Otaku Posts ──────────────────────────────────────────
  {
    id: "3",
    slug: "10-melhores-manhwas-sistema-2026",
    title: "Os 10 melhores Manhwas de 'Sistema' para ler em 2026",
    excerpt: "Os 10 melhores manhwas com sistema de 2026 — aqueles que você não consegue parar de ler. Seleção com sinopse, número de capítulos e onde ler online gratuitamente.",
    content: "",
    category: "otaku",
    subtopic: "manhwa",
    image: systemManhwaImg,
    author: "VICIO<CODE>",
    date: "2026-01-27",
    readTime: "8 min",
    faq: [
      { q: "O que é um manhwa de sistema?", a: "É um quadrinho coreano (manhwa) onde o protagonista recebe um 'sistema de jogo' com níveis, quests, status e habilidades, similar a um RPG dentro da história." },
      { q: "Solo Leveling é o melhor manhwa de sistema?", a: "Solo Leveling é o mais popular e pioneiro do gênero, mas títulos como Omniscient Reader's Viewpoint e The Beginning After The End são considerados tão bons ou melhores por muitos leitores." },
      { q: "Onde ler manhwas de sistema online?", a: "Plataformas oficiais como Webtoon, Tappytoon e Tapas oferecem manhwas traduzidos. No Brasil, a editora Panini está publicando edições físicas de títulos populares." },
    ]
  },

  // ── Geek Posts ───────────────────────────────────────────
  {
    id: "16",
    slug: "ac-origins-renascimento-franquia-egito",
    title: "AC Origins em 2026 Vale a Pena? Review Completa — Egito Antigo",
    excerpt: "Assassin's Creed Origins redefiniu a franquia ao trazer combate renovado, o Egito Antigo esplêndido e a origem da Irmandade dos Assassinos com Bayek de Siwa.",
    content: "",
    category: "geek",
    subtopic: "assassins-creed",
    image: acOriginsImg,
    author: "VICIO<CODE>",
    date: "2026-01-28",
    readTime: "18 min",
    faq: [
      { q: "AC Origins revolucionou a franquia?", a: "Sim. Origins redesenhou completamente o combate, introduziu sistema de níveis RPG, loot e um mundo aberto imenso no Egito Antigo, redefinindo a fórmula da série." },
      { q: "Quem é Bayek de Siwa?", a: "Bayek é um Medjay (protetor) egípcio e o fundador da Irmandade dos Assassinos. Sua história de vingança se passa no Egito de Ptolomeu XIII e Cleópatra." },
      { q: "AC Origins tem modo educativo?", a: "Sim. O Discovery Tour do Egito Antigo permite explorar o mundo sem combate, com guias narrados sobre história, arquitetura e cultura do Egito ptolemaico." },
    ]
  },
  {
    id: "8",
    slug: "avatar-2009-filme-revolucionou-tecnologia",
    title: "Avatar (2009): O Filme que Revolucionou o CGI",
    excerpt: "Relembre como James Cameron esperou mais de uma década para que a tecnologia de captura de movimento fosse capaz de criar Pandora.",
    content: "",
    category: "geek",
    subtopic: "avatar",
    image: avatarPandoraImg,
    author: "VICIO<CODE>",
    date: "2026-01-29",
    readTime: "12 min",
    faq: [
      { q: "Por que Avatar (2009) revolucionou o cinema?", a: "Avatar introduziu captura de performance em tempo real, câmeras virtuais e CGI fotorrealista em escala inédita. O filme popularizou o cinema 3D e arrecadou US$ 2,9 bilhões." },
      { q: "James Cameron esperou quanto tempo para fazer Avatar?", a: "Cameron concebeu a ideia nos anos 1990, mas esperou mais de uma década até que a tecnologia de CGI e captura de movimento fosse capaz de criar Pandora de forma convincente." },
      { q: "Avatar (2009) ainda é o filme de maior bilheteria?", a: "Sim. Com US$ 2,923 bilhões mundiais (incluindo relançamentos), Avatar continua sendo o filme de maior bilheteria da história do cinema." },
    ]
  },

  // ── Otaku Posts ──────────────────────────────────────────
  {
    id: "2",
    slug: "como-diferenciar-manhuas-manhwas",
    title: "Saiba como diferenciar Manhuas e Manhwas",
    excerpt: "Aprenda a diferenciar Manhuas (chineses) de Manhwas (coreanos) de vez. Guia completo com características visuais, temas, sentido de leitura e exemplos populares de cada tipo.",
    content: "",
    category: "otaku",
    subtopic: "manhwa",
    image: manhwaVsManuaImg,
    author: "VICIO<CODE>",
    date: "2026-01-30",
    readTime: "4 min",
    faq: [
      { q: "Qual a diferença entre manhua e manhwa?", a: "Manhuas são quadrinhos chineses (lidos da esquerda para direita) e manhwas são quadrinhos coreanos (também esquerda para direita). Diferem em estilos artísticos, temas culturais e plataformas de publicação." },
      { q: "Manhuas são coloridos?", a: "Sim. Tanto manhuas quanto manhwas modernos são publicados em formato webtoon colorido e vertical, diferente dos mangás japoneses que são em preto e branco." },
      { q: "Quais são os manhuas mais populares?", a: "Tales of Demons and Gods, Soul Land, Battle Through the Heavens e The Beginning After The End estão entre os manhuas mais populares mundialmente." },
    ]
  },

  // ── Geek Posts ───────────────────────────────────────────
  {
    id: "15",
    slug: "ac-black-flag-melhor-jogo-piratas",
    title: "AC Black Flag: O Melhor Jogo de Piratas Já Feito",
    excerpt: "Assassin's Creed Black Flag combina pirataria, exploração naval e a história fascinante de Edward Kenway num dos jogos mais amados da franquia da Ubisoft.",
    content: "",
    category: "geek",
    subtopic: "assassins-creed",
    image: acBlackFlagImg,
    author: "VICIO<CODE>",
    date: "2026-01-31",
    readTime: "18 min",
    faq: [
      { q: "AC Black Flag é o melhor jogo de piratas?", a: "Para muitos jogadores e críticos, sim. A exploração naval, a história de Edward Kenway e o Caribe aberto fazem dele um dos melhores jogos de piratas já feitos." },
      { q: "AC Black Flag tem batalhas navais?", a: "Sim. O sistema naval é um dos pilares do jogo. Você comanda o Jackdaw em batalhas contra navios mercantes, fragatas e fortes, podendo abordá-los e saquear cargas." },
      { q: "AC Black Flag vale a pena em 2026?", a: "Absolutamente. Mesmo após 13 anos, o gameplay naval, a história envolvente e o mundo aberto caribenho continuam divertidos. A Ubisoft anunciou um remake para a geração atual." },
    ]
  },

  // ── IA Posts ─────────────────────────────────────────────
  {
    id: "20",
    slug: "ia-remasterizacao-jogos-classicos",
    title: "IA Remaster: Como a Tech Salva Jogos Clássicos",
    excerpt: "Entenda como a IA de Upscaling e o Deep Learning estão restaurando e salvando a história dos games, dando nova vida a títulos que definiram gerações.",
    content: "",
    category: "ia",
    subtopic: "games",
    image: aiRemasteringImg,
    author: "VICIO<CODE>",
    date: "2026-02-01",
    readTime: "6 min",
    faq: [
      { q: "Como a IA remasteriza jogos clássicos?", a: "Técnicas de IA como upscaling neural (ESRGAN, DLSS), restauração de texturas com redes generativas e recriação de modelos 3D permitem melhorar gráficos de jogos antigos sem acesso ao código-fonte original." },
      { q: "Qual a diferença entre remaster e remake com IA?", a: "Remaster com IA melhora texturas e resolução sobre o jogo original. Remake reconstrói o jogo do zero. A IA acelera ambos os processos, mas é mais impactante em remasters." },
      { q: "Jogadores podem usar IA para melhorar gráficos?", a: "Sim. Mods de IA como HD Texture Packs gerados por ESRGAN já existem para jogos clássicos como Morrowind, Resident Evil e Final Fantasy, disponíveis gratuitamente em comunidades de modding." },
    ]
  },

  // ── Otaku Posts ──────────────────────────────────────────
  {
    id: "1",
    slug: "diferenca-mangas-manhuas-manhwas",
    title: "Sabe a diferença entre Mangas, Manhuas e Manhwas?",
    excerpt: "Aprenda de uma vez a diferença entre Mangás japoneses, Manhwas coreanos e Manhuas chineses: sentido de leitura, arte, temas e os títulos mais populares de cada origem para você começar a explorar.",
    content: "",
    category: "otaku",
    subtopic: "manga",
    image: mangaManhwaManhuaImg,
    author: "VICIO<CODE>",
    date: "2026-02-02",
    readTime: "5 min",
    faq: [
      { q: "O que é mangá?", a: "Mangá é a forma japonesa de quadrinhos, geralmente em preto e branco, lido da direita para esquerda. É publicado em revistas semanais/mensais e depois compilado em volumes (tankōbon)." },
      { q: "Qual a diferença entre mangá, manhwa e manhua?", a: "Mangá é japonês (P&B, direita→esquerda). Manhwa é coreano (colorido, esquerda→direita). Manhua é chinês (colorido, esquerda→direita). Cada um tem estilos e temas culturais distintos." },
      { q: "Por onde começar a ler mangás?", a: "Para iniciantes, recomendamos títulos clássicos como Naruto, One Piece, Death Note ou Fullmetal Alchemist. Plataformas como MangaPlus (Shueisha) e Crunchyroll oferecem capítulos gratuitos." },
    ]
  },

  // ── Geek Posts ───────────────────────────────────────────
  {
    id: "7",
    slug: "hell-let-loose-simulador-guerra",
    title: "Hell Let Loose em 2026 Vale a Pena? Review do Simulador de Guerra",
    excerpt: "Este FPS tático de Segunda Guerra Mundial coloca 100 jogadores em um mapa imenso onde um único tiro pode ser fatal.",
    content: "",
    category: "geek",
    subtopic: "games",
    image: hellLetLooseImg,
    author: "VICIO<CODE>",
    date: "2026-02-03",
    readTime: "18 min",
    faq: [
      { q: "Hell Let Loose vale a pena em 2026?", a: "Sim. Com atualizações constantes e uma comunidade ativa, HLL continua sendo o melhor simulador tático de WWII para quem busca realismo sem a curva de aprendizado extrema de outros milsims." },
      { q: "Hell Let Loose é realista?", a: "Sim. Balas são letais (1-2 tiros matam), não há minimapa com inimigos, comunicação por voz é essencial e partidas com 100 jogadores exigem coordenação real entre esquadrões." },
      { q: "Hell Let Loose roda em console?", a: "Sim. O jogo está disponível para PC, PS5 e Xbox Series X|S. As versões de console recebem atualizações regulares, embora com um leve delay em relação ao PC." },
    ]
  },
  {
    id: "14",
    slug: "ac-odyssey-odisseia-grecia",
    title: "AC Odyssey em 2026 Vale a Pena? Review Completa — Grécia Antiga",
    excerpt: "Explore a Grécia Antiga em Assassin's Creed Odyssey — batalhas épicas, escolhas morais, o misterioso Culto de Kosmos e um dos maiores mapas da franquia.",
    content: "",
    category: "geek",
    subtopic: "assassins-creed",
    image: acOdysseyImg,
    author: "VICIO<CODE>",
    date: "2026-02-04",
    readTime: "18 min",
    faq: [
      { q: "AC Odyssey é o maior mapa da franquia?", a: "É um dos maiores. A Grécia Antiga de Odyssey inclui dezenas de ilhas, cidades e regiões exploráveis, com mais de 100 horas de conteúdo entre história principal e secundária." },
      { q: "Posso jogar como Kassandra ou Alexios?", a: "Sim. Você escolhe entre os dois irmãos no início. A Ubisoft confirmou que Kassandra é a protagonista canônica da história." },
      { q: "AC Odyssey tem escolhas que afetam a história?", a: "Sim. É o primeiro AC com sistema de diálogos e escolhas que afetam o enredo, incluindo múltiplos finais e romance com NPCs." },
    ]
  },

  // ── IA Posts ─────────────────────────────────────────────
  {
    id: "4",
    slug: "ia-transformando-dublagem-animes",
    title: "IA na Dublagem de Animes: Voice Cloning e o Futuro da Localização",
    excerpt: "Descubra como a clonagem de voz e tradução em tempo real estão revolucionando o mercado de animes e quebrando barreiras de idioma ao redor do mundo.",
    content: "",
    category: "ia",
    subtopic: "dublagem",
    image: aiAnimeDubbingImg,
    author: "VICIO<CODE>",
    date: "2026-02-05",
    readTime: "10 min",
    faq: [
      { q: "A IA pode dublar animes automaticamente?", a: "Sim. Tecnologias de voice cloning e tradução em tempo real já permitem gerar dublagens em múltiplos idiomas. Empresas como ElevenLabs e Dubverse oferecem soluções comerciais." },
      { q: "A dublagem por IA substitui dubladores humanos?", a: "Ainda não totalmente. A IA é usada para acelerar o processo e criar versões preliminares, mas dubladores profissionais ainda são essenciais para emoção, timing e qualidade final." },
      { q: "Quais estúdios de anime já usam IA na dublagem?", a: "Crunchyroll e Funimation testam IA para legendas em tempo real. Estúdios japoneses como Toei Animation exploram voice cloning para preservar vozes de seiyuus veteranos." },
    ]
  },

  // ── Investimentos Posts ───────────────────────────────────
  {
    id: "5",
    slug: "investir-em-tecnologia-2026",
    title: "Como Investir em Tecnologia em 2026: Guia de Setores e ETFs",
    excerpt: "Descubra como investir em empresas de tecnologia em 2026, quais setores têm mais potencial de crescimento e como montar uma carteira tech diversificada.",
    content: "",
    category: "invest",
    subtopic: "semicondutores",
    image: techInvesting2026Img,
    author: "VICIO<CODE>",
    date: "2026-02-06",
    readTime: "12 min",
    faq: [
      { q: "O que são ETFs de tecnologia?", a: "São fundos negociados em bolsa que investem em empresas de tecnologia. Na B3, o NASD11 replica o Nasdaq 100 e o USTK11 é focado em tech americana, permitindo exposição ao setor sem comprar ações individuais." },
      { q: "Quais setores de tecnologia têm mais potencial em 2026?", a: "Inteligência artificial, semicondutores, computação em nuvem, cibersegurança e data centers lideram o crescimento. Empresas como NVIDIA, TSMC, Microsoft e AMD estão entre as mais promissoras." },
      { q: "Posso investir em tecnologia americana pela B3?", a: "Sim. Através de BDRs (recibos de ações estrangeiras) ou ETFs como NASD11, IVVB11 e USTK11 você investe em empresas americanas sem abrir conta no exterior." },
      { q: "Investir em tecnologia é arriscado?", a: "Ações de tecnologia tendem a ser mais voláteis que setores defensivos. A recomendação é limitar tech a 20-30% da carteira e diversificar entre subsetores para reduzir o risco." },
    ],
  },

  // ── Geek Posts ───────────────────────────────────────────
  {
    id: "6",
    slug: "vikings-legado-ragnar-lothbrok",
    title: "Vikings: Vale a Pena Assistir em 2026? Review Completa da Série",
    excerpt: "Explore o fascinante legado de Ragnar Lothbrok, a cultura viking e como a série Vikings retratou com precisão os guerreiros nórdicos que moldaram a Europa.",
    content: "",
    category: "geek",
    subtopic: "vikings",
    image: vikingsRagnarImg,
    author: "VICIO<CODE>",
    date: "2026-02-07",
    readTime: "18 min",
    faq: [
      { q: "A série Vikings é historicamente precisa?", a: "Parcialmente. A série mistura fatos históricos com ficção. Ragnar Lothbrok é uma figura semi-lendária, mas eventos como o ataque a Lindisfarne (793) e a Grande Armada Viking são reais." },
      { q: "Vikings vale a pena assistir em 2026?", a: "Sim. As 6 temporadas contam uma saga épica de expansão nórdica. A série é elogiada por batalhas, personagens complexos e uma representação fascinante da cultura viking." },
      { q: "Qual a ordem para assistir Vikings?", a: "Vikings (6 temporadas, 2013-2020) → Vikings: Valhalla (3 temporadas, 2022-2024). Valhalla se passa 100 anos depois, com novos personagens como Leif Eriksson e Harald Sigurdsson." },
    ]
  },
  {
    id: "12",
    slug: "ac-valhalla-jornada-epica-eivor",
    title: "AC Valhalla em 2026 Vale a Pena? Review Completa — Vikings e RPG",
    excerpt: "Se você é fã de Vikings e adora explorar mundos abertos massivos, Valhalla é o ápice da fórmula moderna da Ubisoft.",
    content: "",
    category: "geek",
    subtopic: "assassins-creed",
    image: acValhallaImg,
    author: "VICIO<CODE>",
    date: "2026-02-08",
    readTime: "18 min",
    faq: [
      { q: "AC Valhalla vale a pena em 2026?", a: "Sim, especialmente com todos os DLCs inclusos. A história de Eivor na Inglaterra anglo-saxã é envolvente, com mais de 100 horas de conteúdo entre campanha e expansões." },
      { q: "AC Valhalla é um jogo de Vikings?", a: "Sim. Você joga como Eivor, um líder viking que sai da Noruega para conquistar territórios na Inglaterra do século IX, construindo um assentamento e formando alianças." },
      { q: "Qual o tamanho do mapa de AC Valhalla?", a: "É o maior mapa da franquia, incluindo Inglaterra, Noruega, Vinland (América do Norte), Irlanda e Paris (via DLCs). A exploração completa pode levar mais de 150 horas." },
    ]
  },
  {
    id: "13",
    slug: "ac-shadows-japao-feudal",
    title: "AC Shadows em 2026 Vale a Pena? Review Completa — Japão Feudal",
    excerpt: "Assassin's Creed Shadows finalmente leva a franquia ao Japão Feudal. Conheça a história, mecânicas, personagens e por que esse é um dos jogos mais aguardados.",
    content: "",
    category: "geek",
    subtopic: "assassins-creed",
    image: acShadowsImg,
    author: "VICIO<CODE>",
    date: "2026-02-09",
    readTime: "18 min",
    faq: [
      { q: "AC Shadows se passa no Japão?", a: "Sim. É o primeiro AC ambientado no Japão Feudal do século XVI, com dois protagonistas jogáveis: Naoe (shinobi) e Yasuke (samurai histórico)." },
      { q: "Quem é Yasuke em AC Shadows?", a: "Yasuke foi um samurai real de origem africana que serviu Oda Nobunaga no Japão do século XVI. É uma figura histórica documentada que se tornou um dos protagonistas de Shadows." },
      { q: "AC Shadows tem dois protagonistas?", a: "Sim. Naoe oferece gameplay de stealth clássico (shinobi) e Yasuke oferece combate direto de samurai. Você alterna entre ambos ao longo da história." },
    ]
  },
  {
    id: "23",
    slug: "ranking-melhor-assassins-creed-2026",
    title: "Ranking: Qual o Melhor Assassin's Creed para Jogar em 2026?",
    excerpt: "Ranking completo de todos os jogos Assassin's Creed em 2026 — do melhor ao pior. Análise de gameplay, história, inovação e impacto de cada título na franquia da Ubisoft.",
    content: "",
    category: "geek",
    subtopic: "assassins-creed",
    image: acPortalImg,
    author: "VICIO<CODE>",
    date: "2026-02-10",
    readTime: "10 min",
    faq: [
      { q: "Qual o melhor Assassin's Creed para jogar em 2026?", a: "Depende do gosto. Para história: AC 2/Brotherhood. Para mundo aberto: Origins/Odyssey. Para stealth clássico: Mirage. Para conteúdo: Valhalla. Black Flag para pirataria." },
      { q: "Quantos jogos Assassin's Creed existem?", a: "A série principal tem 13 jogos (AC1 a Shadows), além de spin-offs como Chronicles, Freedom Cry e mobile games. No total, mais de 20 títulos foram lançados desde 2007." },
      { q: "Preciso jogar os ACs em ordem?", a: "Não é obrigatório. Cada jogo conta uma história independente. Mas jogar em ordem cronológica de lançamento enriquece a compreensão da trama moderna (Desmond/Layla)." },
    ]
  },

  // ── IA Posts ─────────────────────────────────────────────
  {
    id: "35",
    slug: "chatgpt-vs-gemini-vs-claude-2026",
    title: "ChatGPT vs Gemini vs Claude 2026: Qual Vale Mais?",
    excerpt: "Comparamos ChatGPT, Gemini e Claude em 20 cenários do dia a dia. Descubra qual IA realmente entrega o que promete em 2026.",
    content: "",
    category: "ia",
    subtopic: "comparativos",
    image: chatgptVsGeminiImg,
    author: "VICIO<CODE>",
    date: "2026-02-11",
    readTime: "12 min",
    faq: [
      { q: "Qual a melhor IA em 2026: ChatGPT, Gemini ou Claude?", a: "Depende do uso. ChatGPT (GPT-5) lidera em versatilidade. Gemini 2.5 se destaca em pesquisa e multimodal. Claude 4 é superior em textos longos e análise de documentos." },
      { q: "Qual IA é gratuita em 2026?", a: "Todas oferecem versões gratuitas: ChatGPT Free, Gemini (integrado ao Google), e Claude Free. As versões pagas (Plus/Pro/Advanced) desbloqueiam modelos mais potentes e limites maiores." },
      { q: "ChatGPT ou Gemini para programação?", a: "ChatGPT com GPT-5 e Claude com Opus são os mais indicados para código. Gemini 2.5 Pro também é competente, especialmente para projetos que envolvem dados do ecossistema Google." },
    ]
  },
  {
    id: "36",
    slug: "como-usar-ia-ganhar-dinheiro-2026",
    title: "Como Usar IA para Ganhar Dinheiro em 2026: 15 Formas",
    excerpt: "A IA não substitui o esforço, ela multiplica. Conheça 15 formas reais de monetizar com inteligência artificial em 2026.",
    content: "",
    category: "ia",
    subtopic: "renda",
    image: iaGanharDinheiroImg,
    author: "VICIO<CODE>",
    date: "2026-02-12",
    readTime: "15 min",
    faq: [
      { q: "É possível ganhar dinheiro com IA em 2026?", a: "Sim. As 15 formas incluem freelancing com IA (redação, design, código), criação de conteúdo, automação de processos, consultoria e desenvolvimento de produtos baseados em IA." },
      { q: "Preciso saber programar para ganhar dinheiro com IA?", a: "Não necessariamente. Muitas formas de monetização usam ferramentas no-code como ChatGPT, Midjourney e plataformas de automação. Saber programar amplia as possibilidades, mas não é requisito." },
      { q: "Quanto é possível ganhar com IA?", a: "Varia muito. Freelancers de conteúdo com IA ganham R$ 2.000-8.000/mês. Desenvolvedores de automações, R$ 5.000-20.000/mês. Consultores especializados podem cobrar R$ 200-500/hora." },
    ]
  },
  {
    id: "37",
    slug: "ia-no-trabalho-2026-profissoes",
    title: "IA no Trabalho em 2026: Sua Profissão Vai Acabar ou Evoluir?",
    excerpt: "Analisamos 30 profissões e dizemos claramente: risco alto, médio ou oportunidade. Descubra onde você se encaixa.",
    content: "",
    category: "ia",
    subtopic: "trabalho",
    image: iaTrabalhoImg,
    author: "VICIO<CODE>",
    date: "2026-02-13",
    readTime: "13 min",
    faq: [
      { q: "Quais profissões a IA vai substituir?", a: "Profissões com tarefas repetitivas e previsíveis têm risco alto: digitação, atendimento básico, tradução simples e entrada de dados. Profissões criativas e de relacionamento têm risco baixo." },
      { q: "A IA vai acabar com empregos em 2026?", a: "A IA está transformando empregos, não eliminando-os em massa. O World Economic Forum estima que a IA criará 97 milhões de novos empregos até 2030, enquanto 85 milhões serão transformados." },
      { q: "Como se preparar para a IA no trabalho?", a: "Desenvolva habilidades complementares à IA: pensamento crítico, criatividade, comunicação, liderança e capacidade de usar ferramentas de IA como multiplicador da sua produtividade." },
    ]
  },
  {
    id: "38",
    slug: "melhores-apps-ia-produtividade-2026",
    title: "Os 10 Melhores Apps de IA para Produtividade em 2026",
    excerpt: "Selecionamos os 10 aplicativos de inteligência artificial mais úteis para aumentar sua produtividade no trabalho, nos estudos e na vida pessoal em 2026.",
    content: "",
    category: "ia",
    subtopic: "apps",
    image: appsIaProdutividadeImg,
    author: "VICIO<CODE>",
    date: "2026-02-14",
    readTime: "11 min",
    faq: [
      { q: "Quais os melhores apps de IA para produtividade?", a: "Os 10 melhores incluem ChatGPT, Notion AI, Otter.ai (transcrição), Gamma (apresentações), Perplexity (pesquisa), Copy.ai (textos), Grammarly, Canva AI, Descript e Zapier AI." },
      { q: "Apps de IA para produtividade são gratuitos?", a: "A maioria oferece plano gratuito limitado. ChatGPT, Perplexity, Canva AI e Grammarly têm versões free úteis. Planos pagos variam de R$ 30 a R$ 150/mês." },
      { q: "Qual app de IA substitui o PowerPoint?", a: "Gamma e Tome criam apresentações profissionais a partir de texto simples usando IA. Beautiful.ai e Slidesgo AI também são alternativas populares ao PowerPoint tradicional." },
    ]
  },

  // ── Investimentos Posts ───────────────────────────────────
  {
    id: "24",
    slug: "tesouro-direto-2026-guia-completo",
    title: "Tesouro Direto 2026: Ainda Vale a Pena?",
    excerpt: "Descubra se o Tesouro Direto ainda é o melhor investimento para iniciantes em 2026. Comparamos taxas, rendimentos e estratégias.",
    content: "",
    category: "invest",
    subtopic: "renda-fixa",
    image: tesouroDiretoImg,
    author: "VICIO<CODE>",
    date: "2026-02-15",
    updatedAt: "2026-03-15",
    readTime: "12 min",
    faq: [
      { q: "É seguro vender o Tesouro Direto antes do vencimento?", a: "Sim, mas há risco de perda no Prefixado e IPCA+ por conta da marcação a mercado. O Tesouro Selic é o único que não sofre esse efeito e pode ser resgatado a qualquer momento sem perdas." },
      { q: "Posso usar o Tesouro Direto como reserva de emergência?", a: "Apenas o Tesouro Selic. Nunca coloque reserva de emergência em Prefixado ou IPCA+, pois você pode perder dinheiro se precisar resgatar antes do vencimento." },
      { q: "Qual é a taxa de custódia do Tesouro Direto?", a: "A B3 cobra 0,20% ao ano sobre o valor investido. É cobrada semestralmente em janeiro e julho. Para o Tesouro Selic, investidores com menos de R$ 10.000 são isentos." },
      { q: "Os juros semestrais do IPCA+ são automáticos?", a: "Os juros são pagos automaticamente na sua conta, mas você precisa reinvesti-los manualmente se quiser manter os juros compostos. Caso contrário, o dinheiro fica parado na conta sem render." },
      { q: "Qual a diferença entre Tesouro Selic, IPCA+ e Prefixado?", a: "Tesouro Selic acompanha a taxa básica de juros (ideal para reserva de emergência). IPCA+ garante rentabilidade acima da inflação (ideal para longo prazo). Prefixado tem taxa travada na compra (bom quando a Selic está alta e vai cair)." },
    ],
  },
  {
    id: "25",
    slug: "renda-passiva-2026-formas-comprovadas",
    title: "Renda Passiva 2026: 7 Formas Comprovadas",
    excerpt: "7 formas reais de renda passiva em 2026: FIIs, dividendos, CDB, conteúdo digital e mais. Com exemplos de valores, rendimentos esperados e quanto capital você precisa para começar.",
    content: "",
    category: "invest",
    subtopic: "renda-passiva",
    image: rendaPassivaImg,
    author: "VICIO<CODE>",
    date: "2026-02-16",
    readTime: "15 min",
    faq: [
      { q: "O que é renda passiva?", a: "É o dinheiro que você recebe sem precisar trabalhar ativamente por ele. Exemplos incluem dividendos de ações e FIIs, rendimentos de CDBs, aluguéis e royalties de conteúdo digital." },
      { q: "Quanto preciso investir para viver de renda passiva?", a: "Depende do seu custo de vida. Para receber R$ 5.000/mês com FIIs rendendo 0,8% ao mês, você precisaria de aproximadamente R$ 625.000 investidos." },
      { q: "Qual a melhor forma de renda passiva para iniciantes?", a: "CDBs com liquidez diária e FIIs são os mais acessíveis. CDBs começam com R$ 1, FIIs a partir de R$ 10 por cota, e ambos geram rendimentos regulares sem necessidade de gestão ativa." },
      { q: "Dividendos de FIIs pagam Imposto de Renda?", a: "Não. Dividendos de FIIs são isentos de IR para pessoa física. Já dividendos de ações e rendimentos de CDBs são tributados conforme as regras vigentes." },
    ],
  },
  {
    id: "26",
    slug: "carteira-investimentos-iniciantes-2026",
    title: "Carteira de Investimentos para Iniciantes 2026",
    excerpt: "Não sabe por onde começar a investir? Este guia passo a passo mostra como montar uma carteira do zero em 2026.",
    content: "",
    category: "invest",
    subtopic: "carteira",
    image: carteiraInvestimentosImg,
    author: "VICIO<CODE>",
    date: "2026-02-17",
    readTime: "13 min",
    faq: [
      { q: "Qual o primeiro passo para montar uma carteira de investimentos?", a: "Montar uma reserva de emergência de 3 a 6 meses de despesas em Tesouro Selic ou CDB 100% CDI com liquidez diária. Só depois comece a diversificar em outros ativos." },
      { q: "Quanto dinheiro preciso para começar a investir?", a: "Você pode começar com R$ 30 no Tesouro Direto, R$ 1 em CDBs e R$ 10 em FIIs. Não existe valor mínimo alto — o importante é começar." },
      { q: "O que é perfil de investidor?", a: "É a classificação do seu nível de tolerância a risco: conservador (prioriza segurança), moderado (aceita oscilações moderadas) ou arrojado (busca maior retorno aceitando mais risco)." },
      { q: "Devo investir em renda fixa ou variável?", a: "Para iniciantes, o ideal é começar com renda fixa (Tesouro Selic, CDB) e ir adicionando renda variável (FIIs, ETFs) gradualmente conforme ganha experiência e confiança." },
    ],
  },
  {
    id: "27",
    slug: "bitcoin-criptomoedas-2026-investir",
    title: "Bitcoin e Criptomoedas em 2026: Ainda Dá Para Lucrar?",
    excerpt: "O mercado cripto mudou muito. Entenda o cenário das criptomoedas em 2026, quais ainda têm potencial e como investir sem perder o que você tem.",
    content: "",
    category: "invest",
    subtopic: "cripto",
    image: cryptoInvest2026Img,
    author: "VICIO<CODE>",
    date: "2026-02-18",
    updatedAt: "2026-03-15",
    readTime: "14 min",
    faq: [
      { q: "O que é DeFi (Finanças Descentralizadas)?", a: "Ecossistema de serviços financeiros construídos sobre blockchain, sem intermediários como bancos. Inclui empréstimos, exchanges e seguros descentralizados." },
      { q: "O que é NFT (Token Não-Fungível)?", a: "Um ativo digital único registrado em blockchain. Usado para arte, colecionáveis, ingressos e propriedade intelectual." },
      { q: "O que é Halving do Bitcoin?", a: "Evento que reduz pela metade a recompensa dos mineradores de Bitcoin a cada aproximadamente 4 anos. Historicamente associado a ciclos de alta no preço." },
      { q: "O que é Seed Phrase?", a: "Conjunto de 12 a 24 palavras que serve como backup da sua carteira de criptomoedas. Nunca compartilhe com ninguém — quem tem a seed phrase controla os fundos." },
      { q: "O que é Staking de criptomoedas?", a: "Processo de travar suas criptomoedas na rede para validar transações e receber recompensas, similar a juros. Disponível em redes como Ethereum, Solana e Cardano." },
      { q: "O que é Cold Wallet?", a: "Carteira offline (hardware) para armazenar criptomoedas com máxima segurança, desconectada da internet. Exemplos: Ledger e Trezor." },
      { q: "O que é ETF de Criptomoedas?", a: "Fundo negociado em bolsa que acompanha o preço de criptomoedas, permitindo investir sem precisar comprar ou custodiar os ativos diretamente." },
    ],
  },
  {
    id: "28",
    slug: "irpf-2026-guia-declarar-pagar-menos",
    title: "IRPF 2026: Guia Completo Para Declarar e Pagar Menos Imposto",
    excerpt: "Tudo que você precisa saber para declarar o Imposto de Renda 2026 corretamente, evitar a malha fina e usar deduções legais para pagar menos IR.",
    content: "",
    category: "invest",
    subtopic: "impostos",
    image: irpf2026Img,
    author: "VICIO<CODE>",
    date: "2026-02-19",
    updatedAt: "2026-03-15",
    readTime: "16 min",
    faq: [
      { q: "Posso declarar despesas com saúde do meu dependente?", a: "Sim, desde que o dependente esteja incluído na sua declaração. As despesas médicas são totalmente dedutíveis, sem limite de valor." },
      { q: "Preciso declarar minha conta de criptomoedas?", a: "Sim. Mesmo que não tenha vendido, criptomoedas devem ser declaradas na ficha 'Bens e Direitos' pelo valor de aquisição." },
      { q: "O que acontece se atrasar a declaração?", a: "Multa mínima de R$ 165,74, podendo chegar a 20% do imposto devido. Além disso, seu CPF pode ficar irregular." },
      { q: "Gastos com cursinho e inglês são dedutíveis?", a: "Não. Apenas ensino fundamental, médio, técnico, graduação e pós-graduação são dedutíveis em educação." },
      { q: "Vendi ações com lucro abaixo de R$ 20.000/mês. Preciso pagar IR?", a: "Não. Vendas de ações (operações comuns) até R$ 20.000/mês são isentas. Mas day trade não tem essa isenção." },
      { q: "MEI precisa declarar como pessoa física?", a: "Sim, se você se enquadrar nos critérios de obrigatoriedade. O rendimento do MEI deve ser declarado." },
      { q: "Posso incluir meus pais como dependentes?", a: "Sim, desde que eles sejam economicamente dependentes de você e tenham rendimentos dentro do limite permitido." },
      { q: "FIIs pagam IR sobre dividendos?", a: "Não. Dividendos de FIIs são isentos de IR para pessoa física. Porém, o ganho de capital na venda das cotas é tributado em 20%." },
      { q: "Como declarar aluguel recebido?", a: "Aluguel recebido é rendimento tributável. Deve ser informado mês a mês e, se acima da faixa de isenção, gera carnê-leão." },
      { q: "Qual a diferença entre PGBL e VGBL no IR?", a: "PGBL permite deduzir até 12% da renda bruta no IR. VGBL não tem dedução, mas o IR incide apenas sobre os rendimentos no resgate." }
    ]
  },
  {
    id: "29",
    slug: "ia-mercado-financeiro-2026-investimentos",
    title: "IA no Mercado Financeiro 2026: Guia Prático",
    excerpt: "A IA já está gerenciando bilhões em investimentos. Descubra como a inteligência artificial está mudando as finanças em 2026.",
    content: "",
    category: "invest",
    secondaryCategory: "ia",
    subtopic: "ia-financas",
    image: iaFinancas2026Img,
    author: "VICIO<CODE>",
    date: "2026-02-20",
    readTime: "12 min",
    faq: [
      { q: "Como a IA é usada no mercado financeiro?", a: "A IA é usada em trading algorítmico, análise de risco de crédito, detecção de fraudes, robo-advisors (gestão automatizada de carteira) e análise de sentimento de mercado em tempo real." },
      { q: "O que são robo-advisors?", a: "São plataformas de investimento que usam algoritmos de IA para criar e gerenciar carteiras automaticamente. No Brasil, exemplos incluem Warren, Magnetis e o advisor do BTG Pactual." },
      { q: "A IA pode prever o mercado de ações?", a: "A IA não prevê com certeza, mas identifica padrões e probabilidades. Modelos de machine learning analisam milhares de variáveis simultaneamente, mas o mercado continua imprevisível em eventos extremos." },
      { q: "Investidores iniciantes devem usar IA para investir?", a: "Sim, como ferramenta de apoio. Robo-advisors são bons para iniciantes por diversificarem automaticamente. Mas nunca invista baseado apenas em previsões de IA sem entender os fundamentos." },
    ],
  },
  {
    id: "30",
    slug: "educacao-financeira-metodo-3-baldes",
    title: "Método 3 Baldes: Finanças para Iniciantes",
    excerpt: "Se você chega no fim do mês sem dinheiro, este artigo é para você. O Método dos 3 Baldes é simples e funciona para qualquer salário.",
    content: "",
    category: "invest",
    subtopic: "educacao-financeira",
    image: metodo3BaldesImg,
    author: "VICIO<CODE>",
    date: "2026-02-21",
    readTime: "11 min",
    faq: [
      { q: "O que é o Método dos 3 Baldes?", a: "É uma estratégia simples de organização financeira que divide sua renda em três partes: Essencial (50-60%), Objetivos (20-30%) e Liberdade (10-20%), facilitando o controle sem planilhas complexas." },
      { q: "O Método dos 3 Baldes funciona para qualquer salário?", a: "Sim. Os percentuais são ajustáveis. Se você ganha pouco, pode começar com 70% essencial, 20% objetivos e 10% liberdade. O importante é criar o hábito de separar." },
      { q: "Qual a diferença entre o Método 3 Baldes e o 50-30-20?", a: "São muito parecidos. O 3 Baldes é mais flexível nos percentuais e usa nomes mais intuitivos. O conceito central é o mesmo: separar gastos essenciais, metas e lazer." },
      { q: "Por onde começar a organizar minhas finanças?", a: "Anote todos os seus gastos por 30 dias (use apps como Organizze ou Mobills). Depois, classifique em essenciais e não-essenciais. Isso mostra onde está vazando dinheiro antes de aplicar qualquer método." },
    ],
  },
  {
    id: "31",
    slug: "fiis-2026-melhores-fundos-imobiliarios",
    title: "FIIs em 2026: Os Melhores Fundos Imobiliários e Como Analisar",
    excerpt: "Guia completo de FIIs para 2026. Saiba como escolher os melhores fundos imobiliários e construir uma carteira que paga dividendos mensais.",
    content: "",
    category: "invest",
    subtopic: "fiis",
    image: fiis2026Img,
    author: "VICIO<CODE>",
    date: "2026-02-22",
    updatedAt: "2026-03-15",
    readTime: "14 min",
    faq: [
      { q: "Devo escolher FIIs só pelo Dividend Yield (DY)?", a: "Não. Um DY de 15% pode significar que a cota despencou, não que o fundo paga mais. Analise sempre o histórico de distribuições, qualidade dos imóveis e contratos antes de investir." },
      { q: "A qualidade dos imóveis dentro do FII importa?", a: "Sim, é um dos critérios mais importantes. Galpões logísticos de primeira linha têm vacância menor e contratos mais longos do que imóveis de terceira categoria." },
      { q: "Contratos típicos ou atípicos são melhores nos FIIs?", a: "Atípicos geralmente são mais seguros pois possuem multas pesadas em caso de rescisão antecipada, oferecendo previsibilidade maior de renda para o FII." },
      { q: "O que fazer quando a cota do FII cai bastante?", a: "Não venda por pânico. Se os fundamentos continuam bons (imóveis ocupados, contratos sólidos, gestão competente), a queda pode ser oportunidade de compra com yield ainda maior." },
      { q: "FIIs pagam Imposto de Renda sobre os dividendos?", a: "Não. Dividendos de FIIs são isentos de IR para pessoa física, desde que o fundo tenha mais de 50 cotistas e suas cotas sejam negociadas em bolsa. O ganho de capital na venda das cotas é tributado a 20%." },
    ],
  },
  {
    id: "32",
    slug: "sair-das-dividas-2026-plano-acao",
    title: "Sair das Dívidas em 2026: O Plano de Ação Que Realmente Funciona",
    excerpt: "Endividado e sem ver saída? Este plano passo a passo foi criado para a realidade brasileira de 2026, com estratégias para quitar dívidas.",
    content: "",
    category: "invest",
    subtopic: "dividas",
    image: sairDividas2026Img,
    author: "VICIO<CODE>",
    date: "2026-02-23",
    readTime: "13 min",
    faq: [
      { q: "Qual a primeira dívida que devo pagar?", a: "A com maior taxa de juros — geralmente cartão de crédito (até 400% ao ano) e cheque especial (até 150% ao ano). Quitar essas primeiro evita que a dívida cresça como bola de neve." },
      { q: "Vale a pena fazer portabilidade de dívida?", a: "Sim, quando você consegue uma taxa menor. Bancos digitais e fintechs frequentemente oferecem taxas de 2-4% ao mês para portabilidade de dívidas de cartão que cobram 15-20% ao mês." },
      { q: "Devo usar a reserva de emergência para quitar dívidas?", a: "Depende. Se a dívida tem juros acima de 5% ao mês, pode valer usar parte da reserva. Mas nunca zere a reserva — mantenha pelo menos 1 mês de despesas como colchão mínimo." },
      { q: "É melhor o método avalanche ou bola de neve para quitar dívidas?", a: "Avalanche (pagar primeiro a de maior juros) é matematicamente melhor. Bola de neve (pagar primeiro a menor) dá mais motivação. Escolha o que funcionar para você manter a disciplina." },
    ],
  },
  {
    id: "33",
    slug: "planejamento-financeiro-2026-metas",
    title: "Planejamento Financeiro 2026: Defina suas Metas",
    excerpt: "Aprenda o método científico para definir e alcançar objetivos financeiros em 2026. Chega de metas que não saem do papel.",
    content: "",
    category: "invest",
    subtopic: "planejamento",
    image: planejamentoFinanceiro2026Img,
    author: "VICIO<CODE>",
    date: "2026-02-24",
    readTime: "11 min",
    faq: [
      { q: "Como definir metas financeiras realistas?", a: "Use o método SMART: Específica, Mensurável, Alcançável, Relevante e com Prazo. Em vez de 'quero economizar', diga 'quero juntar R$ 10.000 em 12 meses guardando R$ 834/mês'." },
      { q: "Qual a diferença entre planejamento financeiro de curto e longo prazo?", a: "Curto prazo (até 1 ano): reserva de emergência, quitar dívidas, viagens. Longo prazo (5+ anos): aposentadoria, compra de imóvel, independência financeira. Os investimentos mudam conforme o prazo." },
      { q: "Preciso de um planejador financeiro profissional?", a: "Para quem tem patrimônio acima de R$ 100.000 ou situação complexa (herança, empresa, previdência), um CFP certificado pode valer. Para iniciantes, apps e conteúdo educativo são suficientes." },
      { q: "Como manter a disciplina no planejamento financeiro?", a: "Automatize: configure transferências automáticas no dia do pagamento. O que não passa pela sua conta corrente, você não gasta. Revise suas metas a cada 3 meses para manter o foco." },
    ],
  },
  {
    id: "34",
    slug: "calculadoras-financeiras-ativos",
    title: "Calculadoras Financeiras: Simule seus Investimentos",
    excerpt: "Use nossas calculadoras com cotações em tempo real para simular quanto custaria comprar diferentes ativos financeiros.",
    content: "",
    category: "invest",
    subtopic: "calculadoras",
    image: calculadorasFinanceirasImg,
    author: "VICIO<CODE>",
    date: "2026-02-25",
    readTime: "5 min",
    faq: [
      { q: "Como funciona a calculadora de investimentos?", a: "Você insere o valor de aporte, prazo e taxa de rendimento. A calculadora mostra quanto seu dinheiro renderá com juros compostos, considerando aportes mensais e inflação." },
      { q: "As cotações das calculadoras são em tempo real?", a: "As cotações são atualizadas em intervalos regulares durante o pregão da B3. Podem ter delay de até 15 minutos em relação ao preço real de mercado." },
    ],
  },

  // ── IA Posts ─────────────────────────────────────────────
  {
    id: "39",
    slug: "ia-generativa-iniciantes-2026-guia",
    title: "IA Generativa para Iniciantes 2026: Do Zero ao Avançado",
    excerpt: "Guia completo de IA generativa para iniciantes em 2026: aprenda a usar ChatGPT, Midjourney, Sora e outras ferramentas do zero, com exemplos práticos e dicas de segurança.",
    content: "",
    category: "ia",
    subtopic: "tutorial",
    image: iaGenerativaIniciantesImg,
    author: "VICIO<CODE>",
    date: "2026-02-26",
    readTime: "16 min",
    faq: [
      { q: "O que é IA generativa?", a: "IA generativa são sistemas que criam conteúdo novo (texto, imagens, vídeo, código, música) a partir de instruções. Exemplos: ChatGPT (texto), Midjourney (imagens), Suno (música), Sora (vídeo)." },
      { q: "Preciso saber programar para usar IA generativa?", a: "Não. A maioria das ferramentas de IA generativa funciona com linguagem natural. Você digita o que quer em português e a IA gera o resultado. Saber programar é opcional." },
      { q: "IA generativa é segura para usar?", a: "Sim, com cuidados. Não insira dados pessoais sensíveis, verifique informações factuais geradas e respeite direitos autorais. Use ferramentas com políticas claras de privacidade." },
    ]
  },
  {
    id: "40",
    slug: "deepfakes-ia-2026-como-identificar",
    title: "Deepfakes 2026: Como Identificar Conteúdo Falso",
    excerpt: "Deepfakes deixaram de ser ficção científica. Aprenda a identificar conteúdo falso e proteger sua imagem online.",
    content: "",
    category: "ia",
    subtopic: "seguranca",
    image: deepfakesIaImg,
    author: "VICIO<CODE>",
    date: "2026-02-27",
    readTime: "12 min",
    faq: [
      { q: "O que é deepfake?", a: "Deepfake é conteúdo (vídeo, áudio ou imagem) gerado ou manipulado por IA para parecer real. Pode trocar rostos, clonar vozes ou criar pessoas que não existem." },
      { q: "Como identificar um deepfake?", a: "Sinais incluem: movimentos labiais dessincronizados, bordas irregulares no rosto, piscadas anormais, iluminação inconsistente e texturas estranhas na pele. Ferramentas como Microsoft Video Authenticator ajudam na detecção." },
      { q: "Deepfake é crime no Brasil?", a: "Criar deepfakes para difamação, fraude ou pornografia não consensual é crime. O marco legal brasileiro (Lei 14.811/2024) criminaliza deepfakes envolvendo crianças e adolescentes." },
    ]
  },
  {
    id: "41",
    slug: "ia-educacao-2026-estudar-inteligente",
    title: "IA na Educação 2026: Como Estudar de Forma Inteligente",
    excerpt: "Explore o lado produtivo da IA na educação: como aprender mais rápido e reter melhor sem terceirizar o pensamento.",
    content: "",
    category: "ia",
    subtopic: "educacao",
    image: iaEducacaoImg,
    author: "VICIO<CODE>",
    date: "2026-02-28",
    readTime: "13 min",
    faq: [
      { q: "Como usar IA para estudar melhor?", a: "Use IA para criar resumos personalizados, gerar flashcards, simular provas, explicar conceitos complexos de formas diferentes e criar cronogramas de estudo adaptados ao seu ritmo." },
      { q: "Usar IA para estudar é trapacear?", a: "Depende de como você usa. Usar IA como tutor para entender conceitos é legítimo. Copiar respostas prontas sem aprender é antipedagógico. O importante é usar IA para aprofundar, não para atalhar." },
      { q: "Quais ferramentas de IA são melhores para estudantes?", a: "ChatGPT (explicações e resumos), Anki com IA (flashcards), Notion AI (organização), Quillbot (paráfrases), Perplexity (pesquisa acadêmica) e Khan Academy com Khanmigo (tutoria personalizada)." },
    ]
  },
  {
    id: "42",
    slug: "agentes-ia-2026-como-funcionam",
    title: "Agentes de IA 2026: O Que São e Como Funcionam",
    excerpt: "Agentes de IA autônomos estão mudando tudo em 2026. Entenda o que são, como funcionam, quais empresas já usam e por que essa tecnologia é o próximo grande salto da inteligência artificial.",
    content: "",
    category: "ia",
    subtopic: "agentes",
    image: agentesIaImg,
    author: "VICIO<CODE>",
    date: "2026-03-01",
    readTime: "14 min",
    faq: [
      { q: "O que são agentes de IA?", a: "Agentes de IA são sistemas autônomos que podem planejar, executar tarefas e tomar decisões sem supervisão constante. Diferente de chatbots, eles agem proativamente para atingir objetivos." },
      { q: "Quais empresas já usam agentes de IA?", a: "Google (Gemini Agents), OpenAI (GPT Agents), Microsoft (Copilot Agents), Salesforce (Einstein GPT) e startups como Cognition (Devin) e Adept já implementam agentes em produção." },
      { q: "Agentes de IA são perigosos?", a: "O risco existe se não houver supervisão adequada. Por isso, a maioria dos agentes atuais opera em 'sandbox' com limites definidos. A regulamentação está avançando para garantir segurança." },
    ]
  },
  {
    id: "43",
    slug: "ia-saude-2026-diagnosticos-futuro",
    title: "IA para Saúde 2026: Diagnósticos e Futuro",
    excerpt: "A IA está transformando a medicina em velocidade que poucos percebem. Dos diagnósticos por imagem à saúde mental.",
    content: "",
    category: "ia",
    subtopic: "saude",
    image: iaSaudeImg,
    author: "VICIO<CODE>",
    date: "2026-03-02",
    readTime: "14 min",
    faq: [
      { q: "A IA pode fazer diagnósticos médicos?", a: "Sim, com limitações. IA já detecta câncer de pele, retinopatia diabética e pneumonia em exames de imagem com precisão comparável ou superior a especialistas humanos. Mas sempre sob supervisão médica." },
      { q: "Quais hospitais usam IA no Brasil?", a: "Hospital Albert Einstein, Sírio-Libanês, Dasa e Rede D'Or já utilizam IA para triagem, análise de exames de imagem, predição de deterioração clínica e gestão hospitalar." },
      { q: "A IA vai substituir médicos?", a: "Não. A IA é uma ferramenta de apoio. Diagnósticos finais, decisões clínicas e a relação médico-paciente continuam exigindo profissionais humanos. A IA ajuda a ser mais preciso e rápido." },
    ]
  },
  {
    id: "44",
    slug: "regulamentacao-ia-brasil-mundo-2026",
    title: "Regulamentação de IA no Brasil e no Mundo em 2026: O Que Muda",
    excerpt: "O AI Act europeu, o marco brasileiro de IA e as novas regras globais. O que muda na prática para você e para as empresas.",
    content: "",
    category: "ia",
    subtopic: "regulacao",
    image: regulamentacaoIaImg,
    author: "VICIO<CODE>",
    date: "2026-03-03",
    readTime: "12 min",
    faq: [
      { q: "O Brasil tem lei de IA?", a: "Sim. O Marco Legal da IA (PL 2338/2023) foi aprovado e estabelece princípios, direitos e obrigações para desenvolvimento e uso de IA no Brasil, incluindo classificação de risco." },
      { q: "O que é o AI Act europeu?", a: "É a primeira legislação abrangente do mundo sobre IA, aprovada pela União Europeia em 2024. Classifica sistemas de IA por nível de risco e proíbe práticas como vigilância biométrica em massa." },
      { q: "A regulamentação vai frear a inovação em IA?", a: "Há debate. Regulamentação cria custos de compliance, mas também gera confiança e mercados mais previsíveis. Empresas que se adaptam cedo tendem a ganhar vantagem competitiva." },
    ]
  },

  // ── Otaku Posts ──────────────────────────────────────────
  {
    id: "45",
    slug: "animes-mais-aguardados-2026",
    title: "Animes Mais Aguardados de 2026: O Que Vai Dominar as Telas",
    excerpt: "Do retorno de clássicos às novas apostas dos grandes estúdios — guia completo para não perder nenhum lançamento.",
    content: "",
    category: "otaku",
    subtopic: "anime",
    image: animesAguardadosImg,
    author: "VICIO<CODE>",
    date: "2026-03-04",
    readTime: "12 min",
    faq: [
      { q: "Quais animes estreiam em 2026?", a: "Destaques incluem TenSura T4, Chainsaw Man Parte 2, Solo Leveling T2, Oshi no Ko T3, Vinland Saga T3 e Blue Lock T2. A temporada de abril/2026 é uma das mais aguardadas da década." },
      { q: "Onde assistir animes novos em 2026?", a: "Crunchyroll é a principal plataforma com simulcast. Netflix, Amazon Prime Video e Disney+ também licenciam títulos exclusivos. Funimation foi integrada ao Crunchyroll." },
      { q: "Qual o anime mais aguardado de 2026?", a: "Solo Leveling Temporada 2 e Chainsaw Man Parte 2 disputam o topo. TenSura T4 e Demon Slayer Infinity Castle (trilogia de filmes) também geram grande expectativa." },
    ]
  },
  {
    id: "46",
    slug: "guia-cosplay-2026-iniciantes",
    title: "Guia Definitivo para Começar no Cosplay em 2026",
    excerpt: "Guia definitivo para começar no cosplay em 2026: materiais, ferramentas, quanto custa, como escolher seu primeiro personagem e dicas de quem já foi à convenção vestido como o herói favorito.",
    content: "",
    category: "otaku",
    subtopic: "cosplay",
    image: guiaCosplayImg,
    author: "VICIO<CODE>",
    date: "2026-03-05",
    readTime: "14 min",
    faq: [
      { q: "Quanto custa fazer cosplay?", a: "Varia muito. Cosplays simples custam R$ 100-300. Intermediários, R$ 500-1.500. Elaborados com armaduras e LEDs podem passar de R$ 3.000. Reaproveitar materiais e DIY reduzem custos." },
      { q: "Qual personagem escolher para o primeiro cosplay?", a: "Escolha um personagem que você ama e que tenha um visual relativamente simples. Protagonistas de uniformes escolares (Demon Slayer, MHA) ou roupas casuais são boas opções para iniciantes." },
      { q: "Preciso costurar para fazer cosplay?", a: "Não necessariamente. Muitos cosplayers iniciantes compram bases prontas e personalizam. Mas aprender costura básica e uso de EVA/Worbla abre muitas possibilidades." },
    ]
  },
  {
    id: "47",
    slug: "manga-vs-anime-adaptacao-2026",
    title: "Mangá vs. Anime: Quando a Adaptação Supera o Original",
    excerpt: "Mangá ou anime: qual versão vale mais a pena? Comparamos adaptações famosas como Demon Slayer, JJK e Chainsaw Man para descobrir quando o anime supera o original — e quando decepciona feio.",
    content: "",
    category: "otaku",
    subtopic: "anime",
    image: mangaVsAnimeImg,
    author: "VICIO<CODE>",
    date: "2026-03-06",
    readTime: "13 min",
    faq: [
      { q: "Mangá ou anime: qual é melhor?", a: "Depende do título. Animes com boa animação (Demon Slayer, JJK) podem superar o mangá. Mangás com arte detalhada (Berserk, Vagabond) são superiores. Ambos se complementam." },
      { q: "Por que adaptações de anime cortam conteúdo?", a: "Por limitações de tempo. Uma temporada de 12 episódios cobre ~50 capítulos de mangá. Material extra, arcos secundários e detalhes narrativos são frequentemente omitidos ou condensados." },
      { q: "Quais adaptações de anime superaram o mangá?", a: "Demon Slayer (animação da Ufotable), Mob Psycho 100 (Bones), Attack on Titan (MAPPA/WIT) e Jujutsu Kaisen são exemplos onde a adaptação animada é considerada superior ao mangá original." },
    ]
  },
  {
    id: "48",
    slug: "cultura-otaku-brasil-2026",
    title: "Cultura Otaku no Brasil 2026: Maior do Mundo",
    excerpt: "O Brasil tem uma das maiores comunidades otaku do mundo. Entenda como a cultura japonesa enraizou no país, os números impressionantes do mercado de anime e o que esperar dos próximos anos.",
    content: "",
    category: "otaku",
    subtopic: "cultura",
    image: culturaOtakuBrasilImg,
    author: "VICIO<CODE>",
    date: "2026-03-07",
    readTime: "14 min",
    faq: [
      { q: "O Brasil é a maior comunidade otaku fora da Ásia?", a: "Sim. O Brasil tem a maior comunidade otaku fora da Ásia, com eventos como CCXP atraindo mais de 300 mil visitantes e o mercado de mangás crescendo 40% ao ano." },
      { q: "O que significa 'otaku' no Brasil?", a: "No Brasil, otaku é usado de forma positiva para descrever fãs de anime, mangá e cultura japonesa. No Japão, o termo pode ter conotação negativa de obsessão, mas no Brasil é motivo de orgulho." },
      { q: "Quais os maiores eventos otaku do Brasil?", a: "CCXP (São Paulo), Anime Friends, Sana (Fortaleza), AnimaRecife e Anime Extreme são alguns dos maiores. A CCXP é o maior evento de cultura pop da América Latina." },
    ]
  },
  {
    id: "49",
    slug: "melhores-jogos-anime-2026",
    title: "Os Melhores Jogos de Anime de 2026: Do RPG ao Fighting Game",
    excerpt: "Os melhores jogos baseados em animes para jogar em 2026 — Dragon Ball, Naruto, One Piece e muito mais. Ranking com plataformas, preços e qual vale mais a pena comprar.",
    content: "",
    category: "otaku",
    subtopic: "games",
    image: jogosAnimeImg,
    author: "VICIO<CODE>",
    date: "2026-03-08",
    readTime: "13 min",
    faq: [
      { q: "Quais os melhores jogos de anime em 2026?", a: "Dragon Ball Sparking! Zero, Naruto x Boruto Ultimate Storm, One Piece Odyssey, Jujutsu Kaisen Cursed Clash e Demon Slayer: Hinokami Chronicles estão entre os destaques." },
      { q: "Jogos de anime valem a pena?", a: "Os melhores sim. Títulos como Dragon Ball FighterZ e Naruto Storm 4 são excelentes mesmo para não-fãs do anime. Outros são mais voltados para fãs e podem ser medianos como jogos." },
      { q: "Onde comprar jogos de anime mais baratos?", a: "Steam (PC) tem as melhores promoções. PS Store e Xbox Store fazem sales frequentes. Sites como Nuuvem e Green Man Gaming oferecem jogos de anime com desconto para PC." },
    ]
  },
  {
    id: "50",
    slug: "aprender-japones-anime-2026",
    title: "Como Aprender Japonês Assistindo Anime em 2026",
    excerpt: "O método definitivo para aprender japonês assistindo anime em 2026. Dicas práticas, aplicativos, técnicas de shadowing e como evoluir do zero ao conversacional.",
    content: "",
    category: "otaku",
    subtopic: "idiomas",
    image: aprenderJaponesImg,
    author: "VICIO<CODE>",
    date: "2026-03-09",
    readTime: "15 min",
    faq: [
      { q: "É possível aprender japonês só assistindo anime?", a: "Parcialmente. Anime ajuda com vocabulário, pronúncia e compreensão auditiva, mas não ensina escrita (kanji/hiragana/katakana) nem gramática formal. Use como complemento a estudos estruturados." },
      { q: "Quais animes são melhores para aprender japonês?", a: "Animes com linguagem cotidiana como Shirokuma Café, Yotsuba&!, K-On! e slice of life em geral. Evite shounen de batalha (linguagem muito informal/inventada) no início." },
      { q: "Quanto tempo leva para aprender japonês com anime?", a: "Com estudo dedicado de 1-2 horas/dia usando anime como complemento, você pode atingir nível conversacional básico (JLPT N4) em 12-18 meses." },
    ]
  },
  {
    id: "51",
    slug: "isekai-2026-genero-domina",
    title: "Isekai 2026: Por Que o Gênero Criticado Domina",
    excerpt: "Uma análise profunda do fenômeno isekai, seus clichês, suas obras-primas e por que você provavelmente já está assistindo um.",
    content: "",
    category: "otaku",
    subtopic: "generos",
    image: isekaiImg,
    author: "VICIO<CODE>",
    date: "2026-03-10",
    readTime: "14 min",
    faq: [
      { q: "O que é isekai?", a: "Isekai ('outro mundo') é um gênero de anime/mangá onde o protagonista é transportado ou reencarnado em um mundo diferente, geralmente de fantasia com sistema de RPG." },
      { q: "Por que isekai é tão popular?", a: "O gênero oferece escapismo, fantasia de poder e familiaridade com mecânicas de jogos. A premissa simples permite histórias variadas — de comédia a dark fantasy — atraindo público amplo." },
      { q: "Quais os melhores isekais de 2026?", a: "TenSura T4, Mushoku Tensei, Re:Zero T3, Overlord (filme), Shield Hero T4 e The Beginning After The End estão entre os mais aguardados e bem avaliados." },
    ]
  },
  {
    id: "52",
    slug: "merchandising-otaku-colecionar-2026",
    title: "Merchandising Otaku: Como Colecionar com Inteligência",
    excerpt: "Guia completo de action figures, mangás, cards e itens exclusivos — onde comprar, o que valoriza e como organizar.",
    content: "",
    category: "otaku",
    subtopic: "collectibles",
    image: merchandisingOtakuImg,
    author: "VICIO<CODE>",
    date: "2026-03-11",
    readTime: "14 min",
    faq: [
      { q: "Onde comprar action figures de anime no Brasil?", a: "Lojas especializadas como Hakkan Store, Ankan, Loja Kan e sites como Mercado Livre e Amazon Brasil. Para importação, AmiAmi, HobbyLink Japan e Solaris Japan são referências mundiais." },
      { q: "Action figures de anime valorizam?", a: "Sim, especialmente edições limitadas, figuras de fabricantes premium (Good Smile, Kotobukiya, Bandai) e itens descontinuados. Manter na caixa original e em bom estado é essencial para valorização." },
      { q: "Como começar a colecionar mangás?", a: "Comece por uma série que você ama. Editoras como Panini, JBC e NewPOP publicam mangás no Brasil. Compre volumes usados em sebos ou grupos de Facebook para economizar." },
    ]
  },
  {
    id: "53",
    slug: "melhores-mangas-ler-2026",
    title: "Os Melhores Mangás Para Ler em 2026: Guia por Gênero",
    excerpt: "Seleção dos melhores mangás para ler em 2026 organizados por gênero — ação, romance, suspense, slice of life. Recomendações para iniciantes e veteranos do mundo otaku.",
    content: "",
    category: "otaku",
    subtopic: "manga",
    image: melhoresMangasImg,
    author: "VICIO<CODE>",
    date: "2026-03-12",
    readTime: "15 min",
    faq: [
      { q: "Quais os melhores mangás para iniciantes?", a: "Death Note (suspense), Fullmetal Alchemist (aventura), One Punch Man (comédia/ação), Spy x Family (comédia/família) e Chainsaw Man (ação) são ótimos pontos de entrada." },
      { q: "Onde ler mangás online de graça?", a: "MangaPlus (app oficial da Shueisha) oferece capítulos gratuitos de One Piece, Naruto, Dragon Ball e mais. Crunchyroll Manga também tem títulos selecionados." },
      { q: "Qual o mangá mais vendido de todos os tempos?", a: "One Piece, com mais de 530 milhões de cópias vendidas mundialmente. Em segundo lugar está Dragon Ball (~300 milhões) e Naruto (~260 milhões)." },
    ]
  },
  {
    id: "54",
    slug: "saude-mental-cultura-otaku-2026",
    title: "Saúde Mental e Cultura Otaku: Quando o Anime Ajuda e Quando Isola",
    excerpt: "Como a cultura otaku e os animes podem impactar positivamente a saúde mental — empatia, escape saudável, comunidade e quando buscar apoio profissional além das telas.",
    content: "",
    category: "otaku",
    subtopic: "saude-mental",
    image: saudeMentalOtakuImg,
    author: "VICIO<CODE>",
    date: "2026-03-13",
    readTime: "13 min",
    faq: [
      { q: "Assistir anime faz bem para saúde mental?", a: "Pode sim. Animes oferecem escape saudável, representação de emoções complexas, senso de comunidade e personagens que inspiram resiliência. O problema é quando substitui relacionamentos reais." },
      { q: "Quando a cultura otaku pode ser prejudicial?", a: "Quando leva ao isolamento social extremo, quando substitui tratamento profissional de saúde mental, quando causa dependência de escape ou quando interfere significativamente no trabalho/estudos." },
      { q: "Quais animes abordam saúde mental?", a: "A Silent Voice (bullying/depressão), March Comes In Like a Lion (solidão), Fruits Basket (trauma), Evangelion (identidade), Blue Period (autoexpressão) e Bocchi the Rock (ansiedade social)." },
    ]
  },

  // ── IA Posts ─────────────────────────────────────────────
  {
    id: "55",
    slug: "ia-criatividade-arte-musica-2026",
    title: "IA e Criatividade 2026: Arte e Música por IA",
    excerpt: "Da geração de imagens com Midjourney à criação musical com Suno AI. Descubra como a IA está transformando as artes criativas.",
    content: "",
    category: "ia",
    subtopic: "criatividade",
    image: iaCriatividadeImg,
    author: "VICIO<CODE>",
    date: "2026-03-14",
    readTime: "14 min",
    faq: [
      { q: "IA pode criar arte original?", a: "IA gera imagens, música e textos que são tecnicamente 'novos', mas baseados em padrões aprendidos de obras existentes. O debate sobre originalidade e autoria continua intenso." },
      { q: "Quais as melhores ferramentas de IA para arte?", a: "Midjourney (imagens estilizadas), DALL-E 3 (integrado ao ChatGPT), Stable Diffusion (open source), Suno AI (música), Runway (vídeo) e Adobe Firefly (edição profissional)." },
      { q: "Arte feita por IA tem direitos autorais?", a: "Na maioria dos países, incluindo EUA e Brasil, obras geradas exclusivamente por IA não recebem proteção de direitos autorais. Obras com intervenção humana significativa podem ser protegidas." },
    ]
  },
  {
    id: "56",
    slug: "ia-privacidade-dados-2026",
    title: "IA e Privacidade de Dados 2026: Seus Dados Estão Seguros?",
    excerpt: "Seus dados pessoais alimentam modelos de IA todos os dias. Entenda os riscos reais e como se proteger em 2026.",
    content: "",
    category: "ia",
    subtopic: "privacidade",
    image: iaPrivacidadeImg,
    author: "VICIO<CODE>",
    date: "2026-03-15",
    readTime: "13 min",
    faq: [
      { q: "As IAs usam meus dados para treinar?", a: "Depende da ferramenta e do plano. ChatGPT Free pode usar conversas para treino (desativável). Planos pagos e empresariais geralmente não usam. Gemini usa dados conforme política do Google." },
      { q: "Como proteger meus dados ao usar IA?", a: "Não insira dados sensíveis (CPF, senhas, informações médicas). Use planos empresariais com políticas de não-treino. Desative histórico de conversas quando possível. Leia os termos de uso." },
      { q: "A LGPD protege contra uso indevido por IA?", a: "Sim. A LGPD garante direitos como acesso, correção e exclusão de dados pessoais, incluindo os usados por sistemas de IA. Empresas devem ter base legal para processar seus dados." },
    ]
  },

  // ── Investimentos Posts ───────────────────────────────────
  {
    id: "57",
    slug: "etfs-2026-guia-completo-investir",
    title: "ETFs em 2026: Guia Completo Para Investir com Diversificação",
    excerpt: "ETFs são a forma mais simples de investir com diversificação em 2026. Guia completo com os melhores fundos de índice disponíveis no Brasil, como escolher e quando comprar ou vender cotas.",
    content: "",
    category: "invest",
    subtopic: "etfs",
    image: etfs2026Img,
    author: "VICIO<CODE>",
    date: "2026-03-16",
    readTime: "15 min",
    faq: [
      { q: "O que são ETFs?", a: "ETFs (Exchange Traded Funds) são fundos de investimento negociados em bolsa que replicam índices, setores ou classes de ativos. Uma única cota dá exposição a dezenas ou centenas de ativos simultaneamente." },
      { q: "Qual o melhor ETF para iniciantes no Brasil?", a: "BOVA11 (Ibovespa) e IVVB11 (S&P 500) são os mais indicados por terem alta liquidez, taxas baixas e diversificação ampla. O BOVV11 tem a menor taxa do mercado (0,04%)." },
      { q: "ETFs pagam dividendos?", a: "A maioria dos ETFs brasileiros reinveste os dividendos automaticamente no fundo, aumentando o valor da cota. Poucos ETFs distribuem dividendos diretamente aos cotistas." },
      { q: "Qual a tributação de ETFs no Brasil?", a: "ETFs de renda variável pagam 15% de IR sobre o lucro na venda, sem isenção para vendas abaixo de R$ 20.000/mês (diferente de ações). ETFs de renda fixa seguem a tabela regressiva de IR." },
    ],
  },

  // ── Geek Posts ───────────────────────────────────────────
  {
    id: "70",
    slug: "crimson-desert-guia-completo",
    title: "Crimson Desert 2026: Guia Completo do Lançamento",
    excerpt: "Tudo sobre história, gameplay, mundo aberto e sistema de combate do novo épico da Pearl Abyss. Descubra o continente de Pywel e a jornada de Kliff.",
    content: "",
    category: "geek",
    subtopic: "crimson-desert",
    image: crimsonDesertGuiaImg,
    author: "VICIO<CODE>",
    date: "2026-03-16",
    readTime: "12 min",
    faq: [
      { q: "Crimson Desert é do mesmo estúdio de Black Desert?", a: "Sim. Pearl Abyss desenvolve ambos. Crimson Desert usa a nova BlackSpace Engine e é focado em narrativa single-player com história linear, diferente do MMO Black Desert Online." },
      { q: "Crimson Desert é MMO?", a: "Não. Crimson Desert é um RPG de ação single-player com mundo aberto. Originalmente planejado como MMO, foi redesenhado para focar em uma história cinematográfica de ~40 horas." },
      { q: "Quando Crimson Desert lança?", a: "Crimson Desert foi lançado em 2026 para PC, PS5 e Xbox Series X|S. O jogo passou anos em desenvolvimento após ser anunciado em 2020." },
    ]
  },
  {
    id: "71",
    slug: "crimson-desert-combate-blackspace-engine",
    title: "Crimson Desert: Combate e BlackSpace Engine",
    excerpt: "Análise aprofundada das mecânicas de combate, chefes épicos, montarias e a tecnologia por trás do visual impressionante do RPG da Pearl Abyss.",
    content: "",
    category: "geek",
    subtopic: "crimson-desert",
    image: crimsonDesertCombateImg,
    author: "VICIO<CODE>",
    date: "2026-03-16",
    readTime: "9 min",
    faq: [
      { q: "O que é a BlackSpace Engine?", a: "É o motor gráfico proprietário da Pearl Abyss, evolução do motor de Black Desert. Oferece renderização de cenários massivos, física avançada e animações de combate cinematográficas." },
      { q: "O combate de Crimson Desert é difícil?", a: "O combate é desafiador e recompensador, similar a jogos como Devil May Cry e Dark Souls. Chefes têm padrões únicos e exigem aprendizado. Há opções de dificuldade para diferentes perfis." },
      { q: "Crimson Desert tem montarias?", a: "Sim. O jogo inclui cavalos e outras montarias que podem ser usadas em combate e exploração. O sistema de montarias é herança do excelente sistema equestre de Black Desert." },
    ]
  },

  // ── Investimentos Posts ───────────────────────────────────
  {
    id: "58",
    slug: "economia-domestica-2026-cortar-gastos",
    title: "Economia Doméstica 2026: 30 Dicas para Economizar",
    excerpt: "Energia, supermercado, assinaturas e transporte: corte até R$ 1.500/mês do seu orçamento com estas estratégias.",
    content: "",
    category: "invest",
    subtopic: "economia-domestica",
    image: economiaDomesticaImg,
    author: "VICIO<CODE>",
    date: "2026-03-17",
    readTime: "14 min",
    faq: [
      { q: "Quanto é possível economizar por mês com economia doméstica?", a: "Com as 30 dicas deste guia, famílias brasileiras conseguem cortar entre R$ 500 e R$ 1.500 por mês do orçamento, dependendo da renda e dos hábitos atuais de consumo." },
      { q: "Vale a pena trocar de bandeira tarifária de energia?", a: "Sim. Mudar para tarifa branca e concentrar uso de eletrodomésticos pesados no horário fora de ponta pode reduzir a conta de luz em até 20%." },
      { q: "Quais assinaturas devo cortar primeiro?", a: "Comece pelas que você menos usa. Dados mostram que brasileiros gastam em média R$ 180/mês em assinaturas digitais (streaming, apps, jogos). Mantenha no máximo 2-3 e reveze entre elas." },
      { q: "Comprar em atacado realmente economiza?", a: "Sim, para itens não perecíveis e de alto consumo. Produtos de limpeza, higiene e alimentos secos podem ser 30-50% mais baratos no atacado. Mas evite comprar perecíveis em excesso." },
    ],
  },

  // ── Geek Posts ───────────────────────────────────────────
  {
    id: "72",
    slug: "crimson-desert-review-2026",
    title: "Crimson Desert Review: Notas e Análise Crítica",
    excerpt: "Crimson Desert recebeu notas mistas no lançamento: Metacritic 78, OpenCritic 80. Compilamos as avaliações de GameSpot, PC Gamer, IGN e outros para mostrar o que a crítica amou e o que criticou.",
    content: "",
    category: "geek",
    subtopic: "crimson-desert",
    image: crimsonDesertReviewImg,
    author: "VICIO<CODE>",
    date: "2026-03-17",
    readTime: "15 min",
    faq: [
      { q: "Qual a nota de Crimson Desert?", a: "O jogo recebeu Metacritic 78 e OpenCritic 80, com elogios ao combate e mundo aberto, e críticas à história e bugs de lançamento." },
      { q: "Crimson Desert vale a pena comprar?", a: "Sim para fãs de RPGs de ação com mundo aberto. O combate é excelente, o mundo é lindo e há muito conteúdo. Mas se você prioriza narrativa, pode se decepcionar com a história." },
      { q: "Quanto tempo dura Crimson Desert?", a: "A história principal leva ~35-40 horas. Com side quests e exploração completa, pode passar de 80 horas. O mundo aberto de Pywel tem bastante conteúdo opcional." },
    ]
  },
  {
    id: "73",
    slug: "crimson-desert-builds-guia-2026",
    title: "Crimson Desert: Sistema de Progressão de Kliff e Estilos de Jogo",
    excerpt: "Guia de progressão de Kliff em Crimson Desert: os três estilos de jogo (agressivo, defensivo, híbrido), como expandir o inventário cedo e dicas de críticos que jogaram mais de 100 horas.",
    content: "",
    category: "geek",
    subtopic: "crimson-desert",
    image: crimsonDesertBuildsImg,
    author: "VICIO<CODE>",
    date: "2026-03-17",
    readTime: "14 min",
    faq: [
      { q: "Crimson Desert tem classes?", a: "Não há classes tradicionais. Kliff pode usar diferentes estilos de combate (agressivo, defensivo, híbrido) que funcionam como 'builds' personalizáveis ao longo do jogo." },
      { q: "Qual o melhor estilo de jogo em Crimson Desert?", a: "O estilo agressivo é mais divertido e rápido. Defensivo é mais seguro contra chefes. Híbrido oferece versatilidade. A maioria dos jogadores recomenda começar com agressivo e adaptar conforme o desafio." },
      { q: "Como expandir o inventário em Crimson Desert?", a: "Compre bolsas de viagem em mercadores de cidades principais, complete quests de caçadores e explore acampamentos inimigos. Expandir o inventário cedo é essencial para gerenciar loot." },
    ]
  },

  // ── Investimentos Posts ───────────────────────────────────
  {
    id: "111",
    slug: "cdb-2026-guia-completo",
    title: "CDB em 2026: Ainda Vale a Pena? Guia Completo com Taxas Reais",
    excerpt: "CDB 100% CDI, 110% CDI, IR regressivo e comparação com LCI, LCA e Tesouro Direto. Tudo que você precisa saber para investir bem em renda fixa em 2026.",
    content: "",
    category: "invest",
    subtopic: "renda-fixa",
    image: cdb2026Img,
    author: "VICIO<CODE>",
    date: "2026-03-17",
    readTime: "12 min",
    faq: [
      { q: "O que é CDB?", a: "CDB (Certificado de Depósito Bancário) é um título de renda fixa emitido por bancos. Você empresta dinheiro ao banco e recebe juros em troca. É protegido pelo FGC até R$ 250 mil por CPF/instituição." },
      { q: "Qual a diferença entre CDB, LCI e LCA?", a: "CDB paga IR sobre os rendimentos (alíquota regressiva de 22,5% a 15%). LCI e LCA são isentas de IR para pessoa física, mas geralmente pagam taxas menores (85-90% CDI vs 100-120% CDI dos CDBs)." },
      { q: "O que significa CDB 100% CDI?", a: "Significa que o CDB rende exatamente a taxa CDI, que acompanha de perto a Selic. Com a Selic a 14,50%, um CDB 100% CDI rende aproximadamente 14,40% ao ano bruto, antes do desconto de IR." },
      { q: "CDB tem garantia do FGC?", a: "Sim. O Fundo Garantidor de Créditos (FGC) protege até R$ 250 mil por CPF por instituição financeira, cobrindo capital + rendimentos. É a mesma garantia da poupança." },
    ],
  },
  {
    id: "112",
    slug: "previdencia-privada-pgbl-vgbl-2026",
    title: "Previdência Privada 2026: PGBL ou VGBL?",
    excerpt: "A diferença definitiva entre PGBL e VGBL, quando cada um vale a pena, tributação progressiva vs regressiva e como a taxa de administração impacta seu patrimônio final.",
    content: "",
    category: "invest",
    subtopic: "planejamento",
    image: previdenciaImg,
    author: "VICIO<CODE>",
    date: "2026-03-17",
    readTime: "13 min",
    faq: [
      { q: "Qual a diferença entre PGBL e VGBL?", a: "PGBL permite deduzir até 12% da renda bruta no IR (ideal para quem faz declaração completa). VGBL não tem dedução, mas o IR incide apenas sobre os rendimentos no resgate (ideal para declaração simplificada)." },
      { q: "Vale a pena fazer previdência privada em 2026?", a: "Depende. Para quem faz declaração completa do IR e quer deduzir até 12% da renda, o PGBL é vantajoso. Mas compare a taxa de administração — acima de 1% ao ano, outros investimentos costumam render mais." },
      { q: "O que é tabela regressiva na previdência?", a: "É o regime de tributação onde o IR diminui com o tempo: começa em 35% (até 2 anos) e cai até 10% (acima de 10 anos). Ideal para quem pretende resgatar no longo prazo." },
      { q: "Posso resgatar a previdência privada antes da aposentadoria?", a: "Sim, mas haverá cobrança de IR conforme a tabela escolhida (progressiva ou regressiva). Resgates no curto prazo podem ter tributação de até 35%, tornando o investimento pouco vantajoso." },
    ],
  },

  // ── IA Posts ─────────────────────────────────────────────
  {
    id: "113",
    slug: "ia-codigo-programadores-2026",
    title: "IA e Programação 2026: Copilot, Cursor e Mais",
    excerpt: "GitHub Copilot, Cursor, Windsurf e Claude Code — análise honesta do que funciona, o que ainda é hype e como integrar IA ao seu fluxo de desenvolvimento.",
    content: "",
    category: "ia",
    subtopic: "comparativos",
    image: iaCodigoImg,
    author: "VICIO<CODE>",
    date: "2026-03-17",
    readTime: "13 min",
    faq: [
      { q: "GitHub Copilot vale a pena em 2026?", a: "Sim para a maioria dos desenvolvedores. Copilot com GPT-5 completa código, escreve testes e explica legacy code. O ganho de produtividade é de 30-55% segundo estudos da GitHub." },
      { q: "Cursor IDE é melhor que VS Code com Copilot?", a: "Para desenvolvimento assistido por IA, Cursor oferece uma experiência mais integrada com chat, edição inline e entendimento de codebase inteiro. VS Code + Copilot é mais estabelecido e estável." },
      { q: "IA vai substituir programadores?", a: "Não no curto/médio prazo. IA é excelente em tarefas repetitivas e boilerplate, mas arquitetura de sistemas, debugging complexo e decisões de produto ainda requerem humanos experientes." },
    ]
  },
  {
    id: "114",
    slug: "modelos-ia-open-source-2026",
    title: "IA Open Source 2026: Llama, Mistral e DeepSeek",
    excerpt: "DeepSeek R1 sacudiu o mercado em 2025 e a distância entre open source e modelos proprietários segue fechando. Comparação técnica e quando cada escolha faz sentido.",
    content: "",
    category: "ia",
    subtopic: "comparativos",
    image: iaOpenSourceImg,
    author: "VICIO<CODE>",
    date: "2026-03-17",
    readTime: "12 min",
    faq: [
      { q: "O que são modelos de IA open source?", a: "São modelos com pesos e código disponíveis publicamente. Llama (Meta), Mistral e DeepSeek permitem que qualquer pessoa execute, modifique e treine IA localmente sem depender de APIs pagas." },
      { q: "DeepSeek R1 é melhor que GPT-5?", a: "Em alguns benchmarks de raciocínio, DeepSeek R1 se aproxima do GPT-5 a uma fração do custo. Mas GPT-5 é mais versátil, multimodal e tem melhor suporte. Depende do caso de uso." },
      { q: "Posso rodar IA open source no meu PC?", a: "Sim. Modelos menores (7B-13B parâmetros) rodam em GPUs com 8-16GB VRAM. Ferramentas como Ollama e LM Studio facilitam a instalação. Modelos maiores (70B+) exigem hardware profissional." },
    ]
  },

  // ── Geek Posts ───────────────────────────────────────────
  {
    id: "115",
    slug: "baldurs-gate-3-review-2026",
    title: "Baldur's Gate 3 em 2026: Ainda o Melhor RPG da Geração?",
    excerpt: "Lançado em 2023, BG3 continua recebendo atualizações gratuitas da Larian. Com 20 milhões de cópias vendidas e Metacritic 96, vale a pena comprar em 2026?",
    content: "",
    category: "geek",
    subtopic: "games",
    image: bg3Img,
    author: "VICIO<CODE>",
    date: "2026-03-17",
    readTime: "14 min",
    faq: [
      { q: "Baldur's Gate 3 ainda vale a pena em 2026?", a: "Absolutamente. Com Metacritic 96, mais de 20 milhões de cópias vendidas e atualizações gratuitas da Larian, BG3 continua sendo referência em RPGs. O mod support ampliou muito a longevidade." },
      { q: "Baldur's Gate 3 é difícil?", a: "Tem curva de aprendizado por ser baseado em D&D 5e, mas oferece múltiplos níveis de dificuldade. O modo Explorer é acessível para novatos. Tactician e Honour Mode são para veteranos." },
      { q: "Preciso jogar BG1 e BG2 antes de BG3?", a: "Não. BG3 conta uma história independente. Conhecer os jogos anteriores enriquece referências, mas não é necessário para entender ou aproveitar a história." },
    ]
  },
  {
    id: "116",
    slug: "dragon-age-veilguard-review-2026",
    title: "Dragon Age Veilguard Review 2026: Vale a Pena?",
    excerpt: "Lançado em outubro 2024 após quase uma década de desenvolvimento, Veilguard dividiu os fãs. Metacritic 83 — análise honesta do que funcionou e o que desapontou.",
    content: "",
    category: "geek",
    subtopic: "games",
    image: dragonAgeImg,
    author: "VICIO<CODE>",
    date: "2026-03-17",
    readTime: "13 min",
    faq: [
      { q: "Dragon Age Veilguard vale a pena?", a: "Para fãs da série, sim. A história conclui arcos importantes e o combate é fluido. Para novatos, o jogo é acessível mas pode não ter o mesmo impacto emocional sem contexto das 3 entradas anteriores." },
      { q: "Preciso jogar os Dragon Ages anteriores?", a: "Recomendado mas não obrigatório. Veilguard tem resumos da história. Porém, personagens como Solas, Varric e Harding têm muito mais impacto se você jogou Inquisition." },
      { q: "Dragon Age Veilguard é mundo aberto?", a: "Semi-aberto. O jogo usa hubs exploráveis grandes em vez de um mapa contínuo. Cada região tem conteúdo substancial, similar à estrutura de Dragon Age: Inquisition." },
    ]
  },

  // ── Otaku Posts ──────────────────────────────────────────
  {
    id: "117",
    slug: "demon-slayer-hashira-guia-2026",
    title: "Demon Slayer: Guia Completo dos Hashira — Respirações e Poderes",
    excerpt: "Os 9 Pilares da Corporação de Extermínio: Rengoku, Tengen, Himejima e todos os outros. Guia completo com a hierarquia das respirações e arcos de cada personagem.",
    content: "",
    category: "otaku",
    subtopic: "anime",
    image: demonSlayerImg,
    author: "VICIO<CODE>",
    date: "2026-03-17",
    readTime: "14 min",
    faq: [
      { q: "Quantos Hashira existem em Demon Slayer?", a: "São 9 Hashira (Pilares): Gyomei (Pedra), Tengen (Som), Rengoku (Chamas), Shinobu (Inseto), Mitsuri (Amor), Obanai (Serpente), Muichiro (Névoa), Sanemi (Vento) e Giyu (Água)." },
      { q: "Qual o Hashira mais forte?", a: "Gyomei Himejima (Pilar da Pedra) é considerado o mais forte entre os Hashira ativos. Entre todos os espadachins da história, Yoriichi Tsugikuni (criador da Respiração Solar) é imbatível." },
      { q: "Demon Slayer já acabou?", a: "O mangá terminou em 2020 com 205 capítulos. A adaptação em anime está em fase final com a trilogia de filmes Infinity Castle, cobrindo o arco final da série." },
    ]
  },
  {
    id: "118",
    slug: "one-piece-final-saga-2026",
    title: "One Piece Final Saga: Onde Estamos e O Que Esperar do Final",
    excerpt: "A Final Saga começou em 2022. Arco de Egghead, revelações sobre Imu e os Gorosei, e o que sabemos sobre o One Piece. Spoilers e previsões para o fim da série.",
    content: "",
    category: "otaku",
    subtopic: "manga",
    image: onePieceImg,
    author: "VICIO<CODE>",
    date: "2026-03-17",
    readTime: "15 min",
    faq: [
      { q: "One Piece está acabando?", a: "Sim. Eiichiro Oda iniciou a Final Saga em 2022. Estimativas apontam que o mangá termine entre 2027-2028, após mais de 25 anos de publicação e 1100+ capítulos." },
      { q: "O que é o One Piece (tesouro)?", a: "Ainda é um mistério. Oda revelou que o One Piece é algo físico, tangível, e que Luffy vai encontrá-lo na ilha de Laugh Tale. A revelação é o clímax mais aguardado da história dos mangás." },
      { q: "Onde estamos na Final Saga?", a: "Em 2026, o mangá está no Arco de Elbaf após o Arco de Egghead. Revelações sobre Imu, os Gorosei, o Século Vazio e Joy Boy estão acelerando rumo ao confronto final." },
    ]
  },

  // ── Geek Posts ───────────────────────────────────────────
  {
    id: "119",
    slug: "crimson-desert-mapa-regioes-pywel",
    title: "Crimson Desert: Mapa de Pywel e suas Regiões",
    excerpt: "Pywel tem ~90 km², o dobro do mapa de Skyrim. Guia completo das 5 regiões: Hernand, Pailune, Demeniss, Delesyia e Crimson Desert — biomas, bosses, fast travel e lore.",
    content: "",
    category: "geek",
    subtopic: "crimson-desert",
    image: crimsonMapaImg,
    author: "VICIO<CODE>",
    date: "2026-03-19",
    readTime: "13 min",
    faq: [
      { q: "Qual o tamanho do mapa de Crimson Desert?", a: "O continente de Pywel tem aproximadamente 90 km², o dobro do mapa de Skyrim. São 5 regiões distintas com biomas variados, de desertos a florestas geladas." },
      { q: "Crimson Desert tem fast travel?", a: "Sim, mas limitado. Você desbloqueia pontos de viagem rápida ao descobrir acampamentos e cidades. A exploração a cavalo é incentivada pelo design do mundo aberto." },
      { q: "Quais são as regiões de Pywel?", a: "Hernand (planícies centrais), Pailune (litoral e portos), Demeniss (montanhas geladas), Delesyia (florestas densas) e Crimson Desert (deserto vermelho que dá nome ao jogo)." },
    ]
  },

  {
    id: "132",
    slug: "crimson-desert-bosses-guia-chefes",
    title: "Crimson Desert: Guia de Bosses — Onde Encontrar, Como Derrotar e Recompensas",
    excerpt: "Guia completo dos 76 bosses de Crimson Desert: Myurdin, Kailok, Reed Devil, White Horn, Staglord, Hexe Marie, Kearush, Antumbra, Priscus e Caliburn. Estratégias, fraquezas, mecânicas e recompensas. Atualizado patch 23/03/2026.",
    content: "",
    category: "geek",
    subtopic: "crimson-desert",
    image: crimsonBossesImg,
    author: "VICIO<CODE>",
    date: "2026-03-29",
    readTime: "22 min",
    faq: [
      { q: "Quantos bosses tem Crimson Desert?", a: "Crimson Desert tem 76 bosses no lançamento, incluindo Field Bosses, World Bosses e o boss final Caliburn. Cada região de Pywel tem seus próprios chefes com mecânicas únicas." },
      { q: "Qual é o boss mais difícil de Crimson Desert?", a: "Caliburn é considerado o boss mais difícil do jogo. Entre os World Bosses, Hexe Marie e Kearush Slayer são os mais desafiadores para grupos." },
      { q: "Os bosses de Crimson Desert respawnam?", a: "Sim. Field Bosses respawnam a cada 4-12 horas. World Bosses têm timers de 12-24 horas e anúncio global. O boss final Caliburn é de instância e pode ser repetido." },
      { q: "Vale a pena farmar bosses em Crimson Desert?", a: "Sim. Bosses são a principal fonte de equipamentos raros, materiais de refinamento e Silver. World Bosses oferecem drops exclusivos não encontrados em outras fontes." },
    ],
  },
  {
    id: "133",
    slug: "crimson-desert-guia-iniciantes-dicas",
    title: "Crimson Desert: Guia de Dicas para Iniciantes — Tudo que Você Precisa Saber",
    excerpt: "20 dicas essenciais para iniciantes em Crimson Desert: progressão sem XP, fast travel, combate avançado, inventário, culinária, companheiros e sistemas ocultos que o jogo não explica.",
    content: "",
    category: "geek",
    subtopic: "crimson-desert",
    image: crimsonIniciantesImg,
    author: "VICIO<CODE>",
    date: "2026-03-29",
    readTime: "20 min",
    faq: [
      { q: "Crimson Desert tem sistema de XP tradicional?", a: "Não. Crimson Desert usa progressão por habilidades e equipamentos, sem level de personagem tradicional. Você evolui dominando combos, coletando Abyss Artifacts e melhorando equipamentos." },
      { q: "Como funciona o fast travel em Crimson Desert?", a: "O fast travel funciona por Waypoints desbloqueados ao explorar o mapa. Você também pode usar montarias. Descobrir Waypoints cedo é essencial dado o tamanho do mapa de Pywel." },
      { q: "Crimson Desert tem multiplayer?", a: "Sim. A campanha principal é single player, mas há conteúdo co-op para World Bosses e masmorras especiais que requerem grupos de 2-4 jogadores." },
      { q: "Qual é a melhor build para iniciantes em Crimson Desert?", a: "Sword e Shield oferece o melhor equilíbrio entre ataque e defesa para iniciantes. Foque em equipamentos da região inicial e domine os combos básicos antes de tentar builds especializadas." },
    ],
  },
  {
    id: "134",
    slug: "crimson-desert-melhores-equipamentos-inicio",
    title: "Crimson Desert: Melhores Equipamentos do Início — Onde Encontrar",
    excerpt: "Os melhores equipamentos do início ao meio de Crimson Desert: Sword of the Lord, Tauria's Curved Sword, Flamespitter, Knuckledrill, armaduras do Fallen Kingdom e sistema de refinamento completo.",
    content: "",
    category: "geek",
    subtopic: "crimson-desert",
    image: crimsonEquipImg,
    author: "VICIO<CODE>",
    date: "2026-03-29",
    readTime: "18 min",
    faq: [
      { q: "Quais são as melhores armas do início de Crimson Desert?", a: "As melhores armas iniciais são a Sword of the Lord (masmorra Fallen Kingdom), Tauria Curved Sword (drop de boss regional) e o Flamespitter para builds mágicas. Todas são acessíveis nas primeiras 10 horas." },
      { q: "Como refinar equipamentos em Crimson Desert?", a: "O refinamento usa Palm Concentrates e materiais de bosses. Recomenda-se refinar até +5 antes de tentar nível superior para não desperdiçar recursos raros." },
      { q: "Os equipamentos quebram em Crimson Desert?", a: "Não existe durabilidade — equipamentos não quebram com uso. O refinamento pode falhar mas nunca destrói o item, tornando o sistema mais acessível." },
      { q: "Onde encontrar armaduras do Fallen Kingdom?", a: "As armaduras do Fallen Kingdom dropam de inimigos e mini-bosses dentro da Masmorra Fallen Kingdom, acessível após o segundo capítulo da história." },
    ],
  },
  // ── Otaku Posts ──────────────────────────────────────────
  {
    id: "76",
    slug: "tensura-guia-completo-temporadas-filmes",
    title: "TenSura: Guia Completo — Todas as Temporadas, Filmes e Novidades 2026",
    excerpt: "Guia completo de Tensei Shitara Slime Datta Ken (TenSura): T1 (2018), T2 (2021), T3 (2024), T4 (abril/2026 — 5 cursos), Filme Scarlet Bond, Tears of the Azure Sea, 56 milhões de cópias vendidas e muito mais.",
    content: "",
    category: "otaku",
    subtopic: "tensura",
    image: tensuraGuiaImg,
    author: "VICIO<CODE>",
    date: "2026-03-20",
    readTime: "18 min",
    faq: [
      { q: "Quantas temporadas TenSura tem?", a: "4 temporadas: T1 (2018), T2 Part 1 e 2 (2021), T3 (2024) e T4 (abril 2026). Além de Slime Diaries (spin-off), filme Scarlet Bond (2022) e filme Tears of the Azure Sea." },
      { q: "TenSura T4 já lançou?", a: "A Temporada 4 estreia em abril de 2026 com 5 cours planejados, sendo a maior temporada da série. A produção segue com 8-Bit Studio." },
      { q: "Qual a ordem para assistir TenSura?", a: "T1 → T2 Part 1 → T2 Part 2 → Filme Scarlet Bond → T3 → T4. Slime Diaries é spin-off opcional (entre T1 e T2). O filme pode ser visto após T2." },
    ],
  },
  {
    id: "78",
    slug: "overlord-guia-completo-temporadas-ainz",
    title: "Overlord: Guia Completo — 4 Temporadas, Filme Sacred Kingdom e T5",
    excerpt: "Overlord completo: T1 (2015), T2 (2018), T3 (2018), T4 (2022), filmes de compilação (2017) e The Sacred Kingdom (setembro/2024). OPs de OxT e MYTH&ROID, vozes de Satoshi Hino, e tudo sobre a esperada T5.",
    content: "",
    category: "otaku",
    subtopic: "overlord",
    image: overlordGuiaImg,
    author: "VICIO<CODE>",
    date: "2026-03-20",
    readTime: "18 min",
    faq: [
      { q: "Quantas temporadas Overlord tem?", a: "4 temporadas (T1: 2015, T2: 2018, T3: 2018, T4: 2022) e o filme The Sacred Kingdom (setembro 2024). A Temporada 5 ainda não foi confirmada oficialmente." },
      { q: "Overlord terá Temporada 5?", a: "Não foi confirmada oficialmente. O filme Sacred Kingdom adaptou os volumes 12-13 da light novel. Os volumes 14-18 ainda não foram adaptados, deixando material para uma possível T5." },
      { q: "Qual a ordem para assistir Overlord?", a: "T1 → T2 → T3 → T4 → Filme The Sacred Kingdom. Os filmes de compilação (2017) são resumos das temporadas 1-2 e podem ser pulados." },
    ],
  },
  {
    id: "77",
    slug: "tensura-personagens-rimuru-demon-lords",
    title: "TenSura: Rimuru Tempest, os Demon Lords e o Sistema de Poderes",
    excerpt: "Rimuru Tempest, Milim Nava, Shion, Benimaru, Veldora, Diablo e os 10 Grandes Demon Lords — ficha completa de cada personagem, seus poderes, habilidades únicas e o sistema de nomes e evolução de TenSura.",
    content: "",
    category: "otaku",
    subtopic: "tensura",
    image: tensuraCharsImg,
    author: "VICIO<CODE>",
    date: "2026-03-21",
    readTime: "10 min",
    faq: [
      { q: "Rimuru Tempest é o protagonista mais forte dos isekais?", a: "Rimuru está entre os mais fortes. Como True Demon Lord e posteriormente True Dragon, seus poderes incluem análise, absorção de habilidades e controle sobre espaço-tempo. Poucos protagonistas isekai o superam." },
      { q: "Quantos Demon Lords existem em TenSura?", a: "São 10 Grandes Demon Lords (Octagram após reorganização): Guy Crimson, Milim Nava, Ramiris, Dagruel, Dino, Luminous Valentine, Leon Cromwell, Rimuru Tempest e dois assentos variáveis." },
      { q: "Qual a relação entre Rimuru e Veldora?", a: "Rimuru absorveu Veldora (o Storm Dragon) na Caverna Selada e deu a ele o sobrenome Tempest. São 'amigos juramentados' — Veldora é a fonte de poder e proteção de Rimuru nos primeiros arcos." },
    ],
  },
  {
    id: "79",
    slug: "overlord-ainz-guardians-personagens",
    title: "Overlord: Ainz Ooal Gown, Floor Guardians e os Personagens do Novo Mundo",
    excerpt: "Ainz Ooal Gown, Albedo, Demiurge, Shalltear Bloodfallen, Cocytus, Sebas Tian, Aura, Mare e Pandora's Actor — fichas completas dos Floor Guardians e dos personagens do Novo Mundo como Gazef Stronoff e Renner.",
    content: "",
    category: "otaku",
    subtopic: "overlord",
    image: overlordCharsImg,
    author: "VICIO<CODE>",
    date: "2026-03-21",
    readTime: "15 min",
    faq: [
      { q: "Quem é Ainz Ooal Gown?", a: "Ainz (nome real: Momonga) é um jogador de YGGDRASIL que ficou preso no jogo quando ele fechou. Ele é um Elder Lich supremo, líder da Grande Tumba de Nazarick e o Sorcerer King." },
      { q: "Quantos Floor Guardians Nazarick tem?", a: "7 Floor Guardians: Shalltear (1-3), Cocytus (5), Aura e Mare (6 — são gêmeos), Demiurge (7), Victim (8) e Albedo (Overseer). Gargantua (4) é um golem sem personalidade." },
      { q: "Albedo ama Ainz?", a: "Sim. Momonga editou as configurações de Albedo antes do servidor fechar, adicionando que ela o amaria profundamente. Isso criou uma devoção obsessiva que é tema recorrente na série." },
    ],
  },

  // ── Geek Posts ───────────────────────────────────────────
  {
    id: "80",
    slug: "ac-1-altair-terra-santa-1191",
    title: "Assassin's Creed (2007): O Início da Lenda — Altaïr e a Terra Santa",
    excerpt: "O jogo que fundou tudo: Altaïr Ibn-La'Ahad nas Cruzadas de 1191, a Maçã do Éden, o Animus e o Credo dos Assassinos. Por que AC1 ainda importa em 2026.",
    content: "",
    category: "geek",
    subtopic: "assassins-creed",
    image: ac1AltairImg,
    author: "VICIO<CODE>",
    date: "2026-03-21",
    readTime: "18 min",
    faq: [
      { q: "AC 1 vale a pena jogar em 2026?", a: "Historicamente importante, mas o gameplay é repetitivo pelos padrões atuais. Vale para fãs que querem entender as origens de Altaïr, o Credo e a rivalidade Assassinos vs Templários." },
      { q: "Quem é Altaïr?", a: "Altaïr Ibn-La'Ahad é um Assassino sírio-árabe que atua durante a Terceira Cruzada em 1191. Ele redescobre o Credo após uma missão fracassada e se torna o maior Mentor da Irmandade." },
      { q: "AC 1 tem Animus?", a: "Sim. AC 1 introduziu o Animus — máquina que permite reviver memórias de ancestrais. Desmond Miles usa o Animus na Abstergo Industries para acessar as memórias de Altaïr." },
    ],
  },
  {
    id: "81",
    slug: "ac-2-ezio-italia-renascentista",
    title: "Assassin's Creed II: Ezio Auditore e a Itália Renascentista",
    excerpt: "O melhor AC na opinião de muitos fãs: Ezio Auditore em Florença, Veneza e Roma Renascentistas. Leonardo da Vinci, os Médici, os Bórgias e a Maçã do Éden — guia completo.",
    content: "",
    category: "geek",
    subtopic: "assassins-creed",
    image: ac2EzioImg,
    author: "VICIO<CODE>",
    date: "2026-03-21",
    readTime: "20 min",
    faq: [
      { q: "AC 2 é considerado o melhor da franquia?", a: "Por muitos fãs e críticos, sim. A história de Ezio, a Itália Renascentista, o salto de qualidade em relação ao AC 1 e a parceria com Leonardo da Vinci fazem dele um dos jogos mais memoráveis." },
      { q: "Quem é Ezio Auditore?", a: "Ezio Auditore da Firenze é um nobre florentino que se torna Assassino após a execução de sua família pelos Templários. Protagoniza AC 2, Brotherhood e Revelations (1459-1524)." },
      { q: "Leonardo da Vinci aparece em AC 2?", a: "Sim. Leonardo é aliado de Ezio e cria gadgets como a lâmina oculta dupla, a pistola oculta e a máquina voadora. Sua oficina serve como ponto de upgrade ao longo do jogo." },
    ],
  },
  {
    id: "82",
    slug: "ac-brotherhood-ezio-roma-borgia",
    title: "Assassin's Creed Brotherhood: Ezio Reconstrói a Irmandade em Roma",
    excerpt: "Ezio com 40 anos enfrenta Cesare Borgia em Roma — review completa do sistema de recrutamento de Assassinos, as máquinas de Leonardo, o multijogador online e o final chocante.",
    content: "",
    category: "geek",
    subtopic: "assassins-creed",
    image: acBrotherImg,
    author: "VICIO<CODE>",
    date: "2026-03-21",
    readTime: "17 min",
    faq: [
      { q: "AC Brotherhood vale a pena em 2026?", a: "Sim. Brotherhood refinou tudo de AC 2, adicionou o sistema de recrutamento de Assassinos e um multiplayer inovador. Roma é um dos melhores mapas da franquia." },
      { q: "O que é o sistema de Assassinos em Brotherhood?", a: "Você recruta cidadãos de Roma como Assassinos aprendizes, treina-os em missões e pode convocá-los em combate. É um dos sistemas mais queridos da franquia e influenciou jogos posteriores." },
      { q: "Brotherhood tem multiplayer?", a: "Sim. Foi o primeiro AC com multiplayer, um modo onde jogadores se disfarçam de NPCs e caçam uns aos outros. Foi inovador e elogiado, embora os servidores tenham sido desativados." },
    ],
  },
  {
    id: "83",
    slug: "ac-revelations-ezio-constantinopla",
    title: "Assassin's Creed Revelations: Ezio em Constantinopla e o Legado de Altaïr",
    excerpt: "O encerramento da trilogia Ezio: Constantinopla otomana de 1511, os selos de Altaïr, Sofia Sartor, o gancho-lâmina e o adeus emocionante dos dois Assassinos mais icônicos.",
    content: "",
    category: "geek",
    subtopic: "assassins-creed",
    image: acRevImg,
    author: "VICIO<CODE>",
    date: "2026-03-21",
    readTime: "16 min",
    faq: [
      { q: "AC Revelations encerra a história de Ezio?", a: "Sim. Revelations é o último jogo com Ezio como protagonista. A história se passa em Constantinopla (1511) e conecta as histórias de Ezio, Altaïr e Desmond Miles." },
      { q: "Altaïr aparece em AC Revelations?", a: "Sim. Através dos Selos de Masyaf, Ezio revive memórias de Altaïr em diferentes fases da vida, revelando o que aconteceu após AC 1 e o destino final do lendário Assassino." },
      { q: "O que é o gancho-lâmina de Revelations?", a: "O Hookblade é uma adição à lâmina oculta que permite escalar mais rápido, usar tirolesas pela cidade e novos movimentos de combate. É exclusivo de Revelations e temática otomana." },
    ],
  },

  // ── Otaku Novos (Mar 2026) ─────────────────────────────────────────────
  {
    id: "120",
    slug: "solo-leveling-guia-completo-temporadas",
    title: "Solo Leveling: Guia Completo — Temporadas, Filme e o Monarca das Sombras",
    excerpt: "Tudo sobre Solo Leveling: T1 (jan-mar 2024, 12 eps, A-1 Pictures), T2 Arise from the Shadow (jan-mar 2025, 13 eps), filme ReAwakening (nov 2024). Sung Jinwoo, Cha Hae-in e os Monarcas. Anime do Ano no Crunchyroll 2025.",
    content: "",
    category: "otaku",
    subtopic: "isekai",
    image: soloLevelingImg,
    author: "VICIO<CODE>",
    date: "2026-03-29",
    readTime: "20 min",
    faq: [
      { q: "Quantas temporadas tem Solo Leveling?", a: "Solo Leveling tem 2 temporadas: T1 pela A-1 Pictures (jan-mar 2024, 12 eps) e T2 Arise from the Shadow (jan-mar 2025, 13 eps). O filme ReAwakening foi lançado em novembro de 2024." },
      { q: "Solo Leveling é fiel ao manhwa?", a: "Sim, a A-1 Pictures manteve os principais momentos icônicos com alta fidelidade. Pequenas mudanças de pacing foram feitas para o formato anime." },
      { q: "Qual é o poder de Sung Jinwoo?", a: "Sung Jinwoo é o Shadow Monarch — extrai as sombras de inimigos derrotados e os transforma em soldados leais. Seu sistema único permite evolução sem limite." },
      { q: "Onde assistir Solo Leveling no Brasil?", a: "Solo Leveling está disponível na Crunchyroll com legendas em português. O filme ReAwakening também está na plataforma." },
    ],
  },
  {
    id: "121",
    slug: "tsukimichi-moonlit-fantasy-guia-completo",
    title: "Tsukimichi Moonlit Fantasy: Guia Completo — Temporadas e Personagens",
    excerpt: "Tsuki ga Michibiku Isekai Douchuu completo: T1 C2C (jul-set 2021, 12 eps), T2 J.C.Staff (jan-jun 2024, 25 eps), T3 anunciada. Makoto Misumi, Tomoe, Mio e o mundo de Elysion — onde o protagonista é rejeitado pela deusa e banido para as terras selvagens.",
    content: "",
    category: "otaku",
    subtopic: "isekai",
    image: tsukimichiImg,
    author: "VICIO<CODE>",
    date: "2026-03-29",
    readTime: "16 min",
    faq: [
      { q: "Quantas temporadas tem Tsukimichi Moonlit Fantasy?", a: "Tsukimichi tem 2 temporadas: T1 pela C2C (jul-set 2021, 12 eps) e T2 pela J.C.Staff (jan-jun 2024, 25 eps). A T3 foi anunciada sem data confirmada." },
      { q: "Quem são Tomoe e Mio em Tsukimichi?", a: "Tomoe é um dragão milenar em forma humana que serve Makoto. Mio é uma Aranha das Trevas extremamente poderosa. As duas são os serventes mais fortes do protagonista." },
      { q: "Por que Makoto foi banido pela deusa em Tsukimichi?", a: "A deusa considerou Makoto feio pelos padrões do mundo de Elysion e o baniu para as Terras Selvagens, onde ele descobre seus poderes absurdos e cria sua própria comunidade." },
      { q: "Tsukimichi é um isekai de construção de mundo?", a: "Sim. Makoto cria um refúgio para seres marginalizados, desenvolve relações comerciais e constrói influência política, combinando isekai com construção de comunidade." },
    ],
  },
  {
    id: "122",
    slug: "mugen-gacha-level-9999-traicao-dungeon",
    title: "My Gift Lvl 9999 Unlimited Gacha: Traído no Fundo da Dungeon — Guia Completo",
    excerpt: "Shinjiteita Nakamatachi ni Dungeon Okuchi de Korosarekaketa ga Gift: anime J.C.Staff out-dez 2025, HIDIVE. Light, o humano traído pelos companheiros no Abismo, usa o dom Gacha Ilimitada para invocar guerreiras nível 9999 e buscar vingança.",
    content: "",
    category: "otaku",
    subtopic: "isekai",
    image: mugenGachaImg,
    author: "VICIO<CODE>",
    date: "2026-03-29",
    readTime: "14 min",
    faq: [
      { q: "Qual é o enredo de Mugen Gacha Level 9999?", a: "Light é traído e abandonado pelos companheiros no fundo de uma dungeon, mas descobre o sistema Gacha Ilimitado que invoca guerreiras de nível 9999. Com elas, ele busca vingança." },
      { q: "Mugen Gacha Level 9999 tem anime?", a: "Sim. O anime foi produzido pela J.C.Staff e exibido de outubro a dezembro de 2025 no HIDIVE, com 12 episódios." },
      { q: "As personagens do Gacha são todas mulheres?", a: "Sim, o sistema Gacha invoca exclusivamente guerreiras chamadas Gift Otome, cada uma com habilidades únicas e lealdade absoluta ao protagonista Light." },
      { q: "Mugen Gacha Level 9999 é focado em vingança?", a: "Sim. Light foi deixado para morrer pelos companheiros que queriam os créditos da expedição. Com o poder do Gacha ele cresce além de todos e confronta os traidores." },
    ],
  },
  {
    id: "123",
    slug: "kizoku-tensei-noble-reincarnation-guia",
    title: "Noble Reincarnation (Kizoku Tensei): O Príncipe Mais Forte — Guia Completo",
    excerpt: "Kizoku Tensei: Megumareta Umare kara Saikyou no Chikara wo Eru — anime CompTown estreou jan 2026 (12 eps, Crunchyroll). Noah Ararat, 13º filho do imperador, reencarnado com cap de nível infinito e habilidade de absorver poderes de servos leais.",
    content: "",
    category: "otaku",
    subtopic: "isekai",
    image: kizokuTenseiImg,
    author: "VICIO<CODE>",
    date: "2026-03-29",
    readTime: "13 min",
    faq: [
      { q: "Quem é Noah Ararat em Kizoku Tensei?", a: "Noah é o 13° filho do imperador, reencarnado com cap de nível infinito e habilidade de absorver poderes de serventes leais que sacrificam suas vidas por ele." },
      { q: "Kizoku Tensei tem quantos episódios?", a: "A temporada 1 tem 12 episódios, lançados em janeiro de 2026 na Crunchyroll. Produzido pela CompTown, cobre os primeiros volumes do light novel." },
      { q: "O que diferencia Kizoku Tensei de outros isekai?", a: "Noah cresce absorvendo habilidades de serventes que se sacrificam por ele — uma mecânica de evolução baseada em lealdade e sacrifício, não apenas em farmar experiência." },
      { q: "Kizoku Tensei é reencarnação ou transmigração?", a: "Reencarnação — o protagonista nasce como bebê nobre no mundo de fantasia, crescendo com memórias da vida anterior mas como nativo do novo mundo." },
    ],
  },
  {
    id: "124",
    slug: "hell-mode-gamer-isekai-guia-completo",
    title: "Hell Mode: O Gamer Viciado em Desafios Domina o Isekai — Guia Completo",
    excerpt: "Hell Mode anime Yokohama Animation Laboratory, estreou jan 2026 (HIDIVE/Prime Video). Kenichi Yamada, gamer de 35 anos reencarnado como Allen com classe Invocador — 100x mais XP necessário, 100x mais recompensas no Hell Mode.",
    content: "",
    category: "otaku",
    subtopic: "isekai",
    image: hellModeImg,
    author: "VICIO<CODE>",
    date: "2026-03-29",
    readTime: "15 min",
    faq: [
      { q: "O que é o Hell Mode no anime?", a: "Hell Mode é a dificuldade máxima do MMORPG que Kenichi jogava — exige 100x mais XP mas oferece recompensas superiores. Ao reencarnar, ele mantém essa configuração, evoluindo lentamente mas sem limites." },
      { q: "Hell Mode tem quantos episódios?", a: "A temporada 1 tem 12 episódios, lançados em janeiro de 2026. Produzido pela Yokohama Animation Laboratory, disponível no HIDIVE e Amazon Prime Video." },
      { q: "Qual é a classe do protagonista em Hell Mode?", a: "Allen é um Invocador — classe considerada fraca por muitos. No Hell Mode seus invocados crescem junto com ele, tornando-se uma força devastadora conforme evolui." },
      { q: "Hell Mode é recomendado para fãs de RPG?", a: "Sim. O anime usa mecânicas de RPG (stats, skills, builds) como parte central da narrativa, com forte apelo para jogadores de MMORPG e fãs de isekai com sistemas de progressão." },
    ],
  },
  {
    id: "125",
    slug: "isekai-nonbiri-nouka-farming-life-guia",
    title: "Farming Life in Another World (Isekai Nonbiri Nouka): Guia Completo",
    excerpt: "Isekai Nonbiri Nouka: T1 anime Zero-G (jan-mar 2023, 12 eps). Hiraku Machio, morto aos 39 anos de doença terminal, reencarnado com a Ferramenta Universal de Fazenda. Vampiras, elfas e dragões na fazenda. T2 confirmada abr/2026.",
    content: "",
    category: "otaku",
    subtopic: "isekai",
    image: nonbiriNoukaImg,
    author: "VICIO<CODE>",
    date: "2026-03-29",
    readTime: "14 min",
    faq: [
      { q: "Qual é a premissa de Farming Life in Another World?", a: "Hiraku Machio reencarna em um mundo de fantasia com a Ferramenta Universal de Fazenda, criando a fazenda mais extraordinária do mundo e atraindo vampiras, elfas e dragões." },
      { q: "Farming Life in Another World tem segunda temporada?", a: "Sim. A T1 foi exibida em jan-mar 2023 (12 eps, Zero-G). A T2 foi confirmada para abril de 2026, com produção também pela Zero-G no Amazon Prime Video." },
      { q: "É um isekai de slice of life?", a: "Sim, é um dos mais populares do gênero. Sem grandes batalhas — o foco é na vida pacífica da fazenda, relações com as esposas e crescimento da comunidade ao redor." },
      { q: "Quem é Loo em Farming Life?", a: "Loo é uma vampira milenar extremamente poderosa que se torna a primeira esposa de Hiraku, escolhendo a vida tranquila da fazenda. Sua história é central para os primeiros arcos." },
    ],
  },
  {
    id: "126",
    slug: "maousama-retry-demon-lord-guia-completo",
    title: "Demon Lord, Retry! (Maou-sama): O Programador Virou Rei Demônio — Guia Completo",
    excerpt: "Maou-sama Retry: T1 Ekachi Epilka (jul-set 2019, 12 eps) e versão R Gekkō (out-dez 2024). Akira Oono, programador de 45 anos, acorda no corpo do Rei Demônio Hakuto Kunai de seu próprio MMORPG. Com Aku, Yu Kirino e Angel White.",
    content: "",
    category: "otaku",
    subtopic: "isekai",
    image: maousamaImg,
    author: "VICIO<CODE>",
    date: "2026-03-29",
    readTime: "14 min",
    faq: [
      { q: "Qual a diferença entre Maou-sama Retry e Retry R?", a: "Retry (2019, Ekachi Epilka) tinha animação modesta. Retry R (2024, Gekkō) é uma nova adaptação com animação completamente refeita, maior fidelidade ao material original e produção superior." },
      { q: "Quem é Hakuto Kunai em Maou-sama Retry?", a: "Hakuto Kunai é o avatar Rei Demônio que Akira Oono, programador de 45 anos, criou em seu MMORPG. Ao ser sugado para dentro do jogo, ele mantém todos os poderes absurdos do personagem." },
      { q: "Maou-sama Retry é comédia ou ação?", a: "Mistura dos dois. A comédia vem do contraste entre a aparência intimidadora do Rei Demônio e as atitudes mundanas de Akira preocupado com negócios e gestão. A ação mostra seu poder absurdo." },
      { q: "Maou-sama Retry tem final completo?", a: "Retry R (2024) é mais completo que o anime de 2019. O light novel de Tsetsuki Kakeru continua em publicação com arcos que vão além do material animado." },
    ],
  },
  {
    id: "127",
    slug: "okiraku-ryoushu-territory-defense-guia",
    title: "Easygoing Territory Defense (Okiraku Ryoushu): Guia Completo do Anime 2026",
    excerpt: "Okiraku Ryoushu no Tanoshii Ryouchi Bouei: anime NAZ estreou jan 2026 (12 eps, Crunchyroll). Van, 4º filho exilado para vilarejo em ruínas, usa a desprezada Magia de Produção para criar a cidade-fortaleza mais poderosa do reino.",
    content: "",
    category: "otaku",
    subtopic: "isekai",
    image: okirakuImg,
    author: "VICIO<CODE>",
    date: "2026-03-29",
    readTime: "13 min",
    faq: [
      { q: "Qual é o poder de Van em Okiraku Ryoushu?", a: "Van tem a Magia de Produção — considerada inútil pela maioria, mas permite criar estruturas e defesas de qualidade incomparável, transformando um vilarejo esquecido em fortaleza impenetrável." },
      { q: "Okiraku Ryoushu tem quantos episódios?", a: "A temporada 1 tem 12 episódios, lançada em janeiro de 2026 na Crunchyroll. Produzido pela NAZ, adapta o light novel de Mizu Morino." },
      { q: "É um isekai de construção?", a: "Sim, similar ao Tensei Slime mas com Van sendo nobre humano que usa habilidades de produção para defender sua região em vez de poder de combate direto." },
      { q: "Qual o diferencial de Okiraku Ryoushu entre os isekai de 2026?", a: "Foco em estratégia defensiva e engenharia — Van raramente combate diretamente, preferindo criar armadilhas e fortalezas superiores, dando ao anime ritmo distinto com ênfase em planejamento." },
    ],
  },
];


export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts
    .filter(post => post.category === category || post.secondaryCategory === category)
    .sort((a, b) => new Date(b.date + "T12:00:00").getTime() - new Date(a.date + "T12:00:00").getTime());
};

export const getPostsBySubtopic = (subtopic: string): BlogPost[] => {
  return blogPosts.filter(post => post.subtopic === subtopic);
};

export const getLatestPosts = (count: number = 5): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

// Get the latest post from each category for the carousel
export const getLatestPostsByCategory = (): BlogPost[] => {
  const categories: Category[] = ['ia', 'invest', 'geek', 'otaku'];
  const latestByCategory: BlogPost[] = [];
  
  categories.forEach(category => {
    const categoryPosts = blogPosts.filter(post => post.category === category);
    if (categoryPosts.length > 0) {
      const latest = categoryPosts.sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      )[0];
      latestByCategory.push(latest);
    }
  });
  
  return latestByCategory;
};

// Get related posts: random from same category, excluding current post.
// If viewedSlugs is provided, prioritize posts the user hasn't seen yet.
const shuffleArray = <T,>(arr: T[]): T[] => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

export const getRelatedPosts = (
  currentSlug: string,
  count: number = 3,
  options?: { viewedSlugs?: string[] }
): BlogPost[] => {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return getLatestPosts(count);

  const viewed = new Set(options?.viewedSlugs ?? []);
  const otherPosts = blogPosts.filter((post) => post.slug !== currentSlug);

  const sameCategoryPool = otherPosts.filter(
    (post) => post.category === currentPost.category || post.secondaryCategory === currentPost.category
  );

  const pool = sameCategoryPool.length > 0 ? sameCategoryPool : otherPosts;

  // Prioritize unseen when we have the signal (typically for logged-in users)
  if (options?.viewedSlugs) {
    const unseen = pool.filter((p) => !viewed.has(p.slug));
    const seen = pool.filter((p) => viewed.has(p.slug));

    const result = [...shuffleArray(unseen), ...shuffleArray(seen)];
    return result.slice(0, count);
  }

  return shuffleArray(pool).slice(0, count);
};

// Get all subtopics for a category
export const getSubtopicsByCategory = (category: Category): string[] => {
  const subtopics = new Set<string>();
  blogPosts
    .filter(post => post.category === category && post.subtopic)
    .forEach(post => {
      if (post.subtopic) subtopics.add(post.subtopic);
    });
  return Array.from(subtopics);
};

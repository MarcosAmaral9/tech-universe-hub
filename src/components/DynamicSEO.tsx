import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { blogPosts } from "@/data/posts";
import { derivePageMeta } from "@/lib/postKeyword";

const SITE_NAME = "VICIO<CODE>";
const BASE_URL = "https://viciocode.com";
const SITE_LOGO = `${BASE_URL}/icon-512x512.png`;
const SITE_SOCIAL = [
  "https://instagram.com/viciocode",
  "https://tiktok.com/@viciocode",
];

const PAGE_META: Record<string, { title: string; description: string; keywords: string }> = {
  // ═══════════════════════════════════════════════════════════
  // PÁGINAS DO SITE
  // ═══════════════════════════════════════════════════════════
  "/": {
    title: "IA, Investimentos, Geek & Otaku",
    description: "Seu portal definitivo para IAs, investimentos, cultura geek e o mundo otaku. Conteúdo de qualidade para mentes curiosas.",
    keywords: "inteligência artificial, investimentos, finanças pessoais, cultura geek, otaku, mangás, animes, tecnologia, criptomoedas, games, manhwas, educação financeira, IA generativa, ChatGPT",
  },
  "/otaku": {
    title: "Otaku",
    description: "Mangás, manhwas, manhuas, animes e tudo do universo otaku.",
    keywords: "otaku, mangás, animes, manhwas, manhuas, cultura japonesa, cosplay, anime 2026, melhores animes, mangás para ler, light novels, isekai, shonen, seinen",
  },
  "/ia": {
    title: "Inteligência Artificial",
    description: "As últimas novidades e análises sobre Inteligência Artificial.",
    keywords: "inteligência artificial, IA, ChatGPT, Gemini, Claude, machine learning, IA generativa, deepfake, agentes IA, automação, produtividade IA, regulamentação IA, IA saúde, IA educação",
  },
  "/financas": {
    title: "Investimentos & Finanças",
    description: "Guias completos sobre investimentos, finanças pessoais e educação financeira.",
    keywords: "investimentos, finanças pessoais, renda passiva, tesouro direto, fundos imobiliários, FIIs, bitcoin, criptomoedas, IRPF, planejamento financeiro, educação financeira, ações B3, carteira de investimentos, sair das dívidas",
  },
  "/geek": {
    title: "Geek",
    description: "Games, séries, filmes e cultura geek.",
    keywords: "cultura geek, games, jogos, séries, filmes, Assassins Creed, Avatar, Vikings, simulador de guerra, reviews de jogos, franquias de games, universo geek, Hell Let Loose, cinema",
  },
  "/cotacoes": {
    title: "Cotações em Tempo Real",
    description: "Acompanhe cotações de ações da B3, câmbio, metais preciosos e criptomoedas em tempo real.",
    keywords: "cotações, ações B3, câmbio, dólar, euro, bitcoin, criptomoedas, ouro, prata, metais preciosos, bolsa de valores, mercado financeiro, cotação em tempo real, investimentos",
  },
  "/historico-cotacoes": {
    title: "Histórico de Cotações",
    description: "Veja o histórico de preços de ações da B3, criptomoedas, câmbio e metais preciosos com gráficos interativos. Compare variações em 7 dias, 30 dias, 90 dias ou 1 ano.",
    keywords: "histórico de cotações, gráfico de preços, B3 histórico, bitcoin histórico, dólar histórico, ouro histórico, variação de preços, análise de mercado, investimentos",
  },
  "/entrar": {
    title: "Entrar",
    description: "Acesse sua conta no VICIO<CODE> para personalizar sua experiência.",
    keywords: "login, entrar, criar conta, cadastro, VICIO CODE, acesso, conta",
  },
  "/redefinir-senha": {
    title: "Redefinir Senha",
    description: "Defina uma nova senha para sua conta no VICIO<CODE>.",
    keywords: "redefinir senha, esqueci senha, recuperar conta, nova senha",
  },
  "/sobre": {
    title: "Sobre Nós",
    description: "Conheça o VICIO<CODE>, seu portal de IA, investimentos, cultura geek e otaku.",
    keywords: "sobre, VICIO CODE, equipe, missão, portal tecnologia, blog brasileiro, conteúdo digital, quem somos",
  },
  "/contato": {
    title: "Contato",
    description: "Entre em contato com a equipe do VICIO<CODE>.",
    keywords: "contato, fale conosco, email, suporte, VICIO CODE, mensagem, feedback",
  },
  "/privacidade": {
    title: "Política de Privacidade",
    description: "Política de privacidade do VICIO<CODE>.",
    keywords: "política de privacidade, dados pessoais, LGPD, privacidade, cookies, proteção de dados",
  },
  "/termos": {
    title: "Termos de Uso",
    description: "Termos de uso do VICIO<CODE>.",
    keywords: "termos de uso, condições, regras, uso do site, termos e condições",
  },
  "/politica-conteudo": {
    title: "Política de Conteúdo",
    description: "Política de conteúdo do VICIO<CODE>.",
    keywords: "política de conteúdo, diretrizes, regras de publicação, moderação, comunidade",
  },
  "/instalar": {
    title: "Instalar App",
    description: "Instale o VICIO<CODE> como aplicativo no seu dispositivo.",
    keywords: "instalar app, PWA, aplicativo, download, VICIO CODE app, celular, desktop",
  },
  "/auth/google": {
    title: "Autenticação Google",
    description: "Autenticando com Google no VICIO<CODE>.",
    keywords: "login google, autenticação, VICIO CODE",
  },
  "/painel-social": {
    title: "Painel Social Media",
    description: "Painel de geração de conteúdo para redes sociais do VICIO<CODE>.",
    keywords: "painel social, instagram, tiktok, conteúdo, VICIO CODE",
  },

  // ═══════════════════════════════════════════════════════════
  // PÁGINAS DE PAINEL E REGIÕES
  // ═══════════════════════════════════════════════════════════
  "/otaku/tensura": {
    title: "TenSura: Guia Completo — Temporadas, Filmes e Personagens",
    description: "Guia completo de That Time I Got Reincarnated as a Slime (TenSura): 3 temporadas + T4 em abril 2026, Filme Scarlet Bond, Tears of the Azure Sea, Rimuru Tempest, Milim, Veldora e os Demon Lords.",
    keywords: "tensura, tensei shitara slime datta ken, rimuru tempest, milim nava, veldora, demon lords, temporada 4, filme scarlet bond, tears azure sea, slime diaries, isekai anime 2026, benimaru, shion, diablo, nazarick",
  },
  "/otaku/overlord": {
    title: "Overlord: Guia Completo — Ainz Ooal Gown, Temporadas e Nazarick",
    description: "Guia completo de Overlord: 4 temporadas (2015–2022), filme The Sacred Kingdom (2024), Ainz Ooal Gown, Albedo, Demiurge, Shalltear e os Floor Guardians da Grande Tumba de Nazarick. Tudo sobre a T5.",
    keywords: "overlord anime, ainz ooal gown, momonga, nazarick, floor guardians, albedo overlord, demiurge, shalltear, sacred kingdom 2024, overlord temporada 5, isekai dark fantasy, madhouse anime, kugane maruyama",
  },
  "/geek/avatar": {
    title: "Portal Avatar",
    description: "Tudo sobre a franquia Avatar de James Cameron: filmes, jogos e tecnologia.",
    keywords: "Avatar, James Cameron, Pandora, Avatar 2, Avatar 3, Frontiers of Pandora, Na'vi, filme Avatar, tecnologia CGI, cinema 3D, franquia Avatar, Ubisoft",
  },
  "/regiao/pailune": {
    title: "Pailune — Guia Completo da Região Norte Gelada | Crimson Desert",
    description: "Guia completo de Pailune em Crimson Desert: mapa da região, bosses Saigord Staglord e White Horn, Skoghorn Tribe, Silver Wolf Mountain, clima ártico e exploração no norte de Pywel.",
    keywords: "Pailune Crimson Desert, Pailune mapa, Staglord boss, White Horn boss, Praevus Ancient, Greymane clan, Skoghorn Tribe, Stronghold Greymane, Silver Wolf Mountain, White Mountains, norte Pywel, região gelo Crimson Desert",
  },
  "/regiao/hernand": {
    title: "Hernand — Guia Completo da Área Inicial | Crimson Desert",
    description: "Guia completo de Hernand em Crimson Desert: cidades Calphade e Beighen, bosses Kearush, Reed Devil e Matthias, clã Greymane, Scholastone Institute e dicas de crafting e exploração.",
    keywords: "Hernand Crimson Desert, Hernand mapa, Calphade cidade, Beighen cidade, Kearush boss, Reed Devil boss, Matthias boss, Greymane acampamento, Howling Hill, Scholastone Institute, área inicial Crimson Desert, Pywel centro-oeste",
  },
  "/regiao/demeniss": {
    title: "Demeniss — Guia Completo da Capital Política | Crimson Desert",
    description: "Guia completo de Demeniss em Crimson Desert: cidade de Caliburn, Fort Ironclad, Golden Plains, bosses Lucian Bastier, T'rukan e Ator Antumbra, Casas Thorel e Byron, Antumbra Order.",
    keywords: "Demeniss Crimson Desert, Caliburn cidade, Fort Ironclad, Golden Plains, Lucian Bastier boss, Trukan boss, Ator Antumbra boss, Stonewalker Antiquum, Casa Thorel, Casa Byron, capital Pywel, Demeniss mapa",
  },
  "/regiao/delesyia": {
    title: "Delesyia — Guia Completo da Região Industrial | Crimson Desert",
    description: "Guia completo de Delesyia em Crimson Desert: Sky Fortress, Golden Star boss, Myurdin forma final, Hexe Marie boss, Porto de Gorthak, Steel Mountains e dicas de endgame.",
    keywords: "Delesyia Crimson Desert, Delesyia mapa, Sky Fortress, Golden Star boss, Myurdin final boss, Hexe Marie boss, Thunder Tank boss, Porto Gorthak, Steel Mountains, Crimson Desert industrial, Pywel sudeste, Delesyia endgame",
  },
  "/regiao/crimson-desert": {
    title: "Crimson Desert (Região) — Guia do Deserto Árido de Pywel",
    description: "Guia completo da região Crimson Desert: Forebearer's Barrens, Urdavah, Tashkalp, bosses Tarandus, Muskan, Priscus e Crookrock Walker, lore das civilizações extintas e Spires of Ringing Truth.",
    keywords: "Crimson Desert região, Forebearer's Barrens, Urdavah oásis, Tashkalp ruínas, Tarandus boss, Muskan boss, Priscus Ancient, Crookrock Walker, Spire of Ringing Truth, deserto Pywel, nordeste Pywel, civilização extinta Crimson Desert",
  },
  "/geek/crimson-desert": {
    title: "Portal Crimson Desert",
    description: "Tudo sobre Crimson Desert da Pearl Abyss: guia completo, combate, BlackSpace Engine e edições com preços em reais.",
    keywords: "Crimson Desert, Pearl Abyss, Kliff, Pywel, BlackSpace Engine, RPG ação mundo aberto, lançamento 2026, PC PS5 Xbox",
  },
  "/geek/assassins-creed": {
    title: "Portal Assassin's Creed",
    description: "Guias, análises e ranking completo de todos os jogos Assassin's Creed.",
    keywords: "Assassins Creed, AC Valhalla, AC Shadows, AC Odyssey, AC Black Flag, AC Origins, AC Mirage, Ubisoft, jogos de mundo aberto, ranking Assassins Creed, história, parkour",
  },

  // ═══════════════════════════════════════════════════════════
  // CATEGORIA: INTELIGÊNCIA ARTIFICIAL — 37 posts
  // ═══════════════════════════════════════════════════════════
  "/post/ia-ciberseguranca-2026": {
    title: "IA e Cibersegurança em 2026: Ameaças, Defesas e o Novo Cenário de Ataques",
    description: "47% mais incidentes no CERT.br em 2025. Spear-phishing com LLM 3-4× mais eficaz. Vishing com voz clonada +300%. Como montar defesa com IA por tamanho de empresa e o que a LGPD exige.",
    keywords: "IA cibersegurança 2026, ataques IA cibersegurança, LLM ataques phishing, vishing voz clonada IA, CERT.br incidentes 2025, IBM X-Force ransomware Brasil, SIEM IA Microsoft Sentinel, EDR CrowdStrike, BAS breach simulation, LGPD cibersegurança, ANPD dados segurança",
  },
  "/post/prompt-engineering-guia-2026": {
    title: "Prompt Engineering em 2026: Guia Completo com Templates Prontos",
    description: "10 templates prontos (escrita, código, análise, brainstorm, email). Como Chain-of-Thought mudou com o3 e DeepSeek R1. Meta-prompting explicado e os erros mais comuns que destroem seus resultados.",
    keywords: "prompt engineering 2026, templates prompt prontos, Chain-of-Thought DeepSeek R1, meta-prompting, OpenAI o3 prompts, Claude extended thinking, Few-Shot prompting, Anthropic prompt guide, DeepLearning.AI prompt engineering, erros prompt comuns, prompts em português",
  },
  "/post/gpt-5-ia-trabalhador-digital-autonomo-2026": {
    title: "GPT como Trabalhador Digital em 2026: Como Empresas Estão Automatizando com IA",
    description: "Klarna, BBVA e Itaú documentaram resultados reais com GPT como trabalhador digital. O que funcionou, o que falhou, riscos do PL 2338 e como o TST já julgou demissão por algoritmo.",
    keywords: "GPT trabalhador digital 2026, automação com GPT empresas, LLM trabalho corporativo, Klarna IA demissão, BBVA Microsoft Copilot produtividade, Itaú IA colaboradores, PL 2338 demissão algoritmo, TST decisão automatizada, digital worker IA Brasil",
  },
  "/post/como-usar-ia-ganhar-dinheiro-2026": {
    title: "Como Usar IA para Ganhar Dinheiro em 2026: 15 Formas Reais com Dados de Mercado",
    description: "Gupy: +306% em busca de profissionais com IA. 15 formas com faixas de renda reais por fase, os 5 erros fatais, tabela salarial verificada e comparativo Workana vs 99Freelas vs Fiverr com taxas.",
    keywords: "ganhar dinheiro com IA 2026, monetizar IA Brasil, freelancer IA, automação com IA, chatbot WhatsApp negócios, consultoria IA, cursos IA infoproduto, Workana IA, 99Freelas, Fiverr dólar, salário especialista IA Brasil, Gupy empregabilidade IA 2025",
  },
  "/post/ia-privacidade-dados-2026": {
    title: "IA e Privacidade de Dados em 2026: Seus Dados Estão Seguros?",
    description: "ANPD notificou X/Twitter e abriu diálogo com OpenAI. FGV: nenhuma IA atende plenamente à LGPD. Tabela comparativa por plataforma (Claude, ChatGPT, Gemini, Grok) e checklist LGPD+IA para empresas.",
    keywords: "IA privacidade dados 2026, ANPD IA generativa, LGPD inteligência artificial, X Twitter ANPD 2024, FGV privacidade IA, opt-out treinamento IA, ChatGPT dados seguros, Claude privacidade, Grok dados Brasil, DPA fornecedor IA, checklist LGPD IA empresa",
  },
  "/post/modelos-ia-open-source-2026": {
    title: "IA Open Source em 2026: Llama 4, DeepSeek e Mistral Contra os Modelos Pagos",
    description: "Llama 4: 8GB VRAM via Ollama. DeepSeek MIT irrestrito. Tabela de licenças comerciais verificada. Groq: 400–800 tok/seg grátis. Quando fine-tuning vale (US$ 30–80 no RunPod) e quando não vale.",
    keywords: "IA open source 2026, Llama 4 Meta local, DeepSeek V3 MIT, Mistral Large Apache, Qwen 2.5 Alibaba, Gemma 3 Google, Hugging Face leaderboard, Groq inferência rápida, Together AI Llama, fine-tuning LLM custo, licença open source IA comercial, rodar IA localmente Brasil",
  },
  "/post/gemini-25-pro-vs-claude-ia-2026": {
    title: "Gemini 2.5 Pro vs Claude em 2026: Qual Modelo Vence nas Tarefas do Dia a Dia?",
    description: "Claude Sonnet 4.6: 82,1% no SWE-bench vs 63,8% do Gemini. Gemini tem 1M tokens e Google Workspace nativo. Preços API em reais, privacidade e 10 cenários práticos de decisão.",
    keywords: "Gemini 2.5 Pro vs Claude 2026, SWE-bench benchmark verificado, Claude Sonnet 4.6, Gemini contexto 1 milhão tokens, Google Workspace Gemini, preço API Claude vs Gemini, LMSys Arena código, melhor IA código 2026, melhor IA escrita 2026, Claude vs Gemini Brasil",
  },
  "/post/dola-ai-app-assistente-2026": {
    title: "Dola AI: O App de Assistente de IA que Virou Febre no Brasil em 2026",
    description: "Dola AI lidera produtividade na Play Store brasileira. 8 recursos principais, comparativo com ChatGPT e Gemini, plano gratuito vs premium, quando vale e o alerta de privacidade que todo usuário deve saber.",
    keywords: "Dola AI 2026, Dola app assistente IA, Dola AI como usar, Dola AI Android iOS, Dola AI vs ChatGPT, app IA gratuito 2026, assistente IA celular, Dola AI bots, Dola AI gerar imagem, Dola AI WhatsApp Telegram, app inteligência artificial Brasil 2026",
  },
  "/post/seedance-2-0-geracao-video-ia-2026": {
    title: "Seedance 2.0: O Gerador de Vídeo com IA da ByteDance que Lidera em 2026",
    description: "1º no Artificial Analysis Video Arena (maio/2026). Vídeo 2K com áudio nativo, disponível via CapCut e Dreamina no Brasil. Comparativo verificado com Kling 3.0, Veo 3.1, Runway Gen-4 e preços em reais.",
    keywords: "Seedance 2.0, ByteDance gerador de vídeo IA, Seedance 2.0 como usar, Dreamina Seedance, CapCut Seedance, Artificial Analysis Video Arena, gerador de vídeo IA 2026, Seedance vs Kling 3, Veo 3.1 Google, Runway Gen-4 comparativo, video AI Brasil grátis",
  },
  "/post/suno-ai-gerador-musica-2026": {
    title: "Suno AI: O Guia Completo do Gerador de Músicas com IA em 2026",
    description: "100M usuários, 7M músicas por dia. Suno v5.5: clonagem de voz, 44,1kHz, 8 minutos. Warner fechou acordo; Sony processa até julho/2026. Como distribuir no Spotify e o que o Copyright Office decidiu.",
    keywords: "Suno AI 2026, Suno gerador música IA, Suno v5.5, como usar Suno AI, Suno AI grátis, Suno vs Udio, criar música com IA, Suno planos preços, RIAA processo Suno Sony, Warner Music acordo Suno, direitos autorais música IA, Suno comercial distribuir Spotify",
  },
  "/post/agentes-ia-2026-como-funcionam": {
    title: "Agentes de IA em 2026: O Que São, Como Funcionam e Por Que Mudam Tudo",
    description: "Entenda os agentes de IA em 2026: diferença entre chatbot e agente, benchmarks reais (SWE-bench, OSWorld), MCP, A2A, custos, riscos LGPD e como usar com segurança no Brasil.",
    keywords: "agentes de IA 2026, agentes autônomos, MCP protocolo, SWE-bench, OSWorld benchmark, agente vs chatbot, Claude Computer Use, OpenAI Operator, LGPD agentes IA, A2A protocol, CrewAI, AutoGPT, inteligência artificial autônoma",
  },
  "/post/agentes-ia-autonomos-2026": {
    title: "Agentes de IA Autônomos em 2026: O que São, Como Funcionam e Por Que Vão Mudar Tudo",
    description: "Guia completo sobre agentes de IA autônomos em 2026: ciclo ReAct, comparativo de plataformas (Claude Code, n8n, AutoGPT, Copilot Studio), casos de uso no Brasil e riscos LGPD.",
    keywords: "agentes de IA autônomos 2026, agente autônomo IA, ReAct framework, Claude Code agente, n8n automação IA, AutoGPT CrewAI, agentes IA empresas brasileiras, Deloitte agentes IA, Microsoft Copilot Studio, Google Agentspace, riscos agentes IA, LGPD automação",
  },
  "/post/anthropic-mythos-google-2026": {
    title: "Anthropic, Mythos e Google: A Disputa pelo Futuro da IA Segura em 2026",
    description: "Como Anthropic, Mythos e Google estão competindo pelo mercado de IA segura em 2026 — investimentos, modelos, posicionamento regulatório e o que isso significa para o ecossistema de IA.",
    keywords: "Anthropic Google 2026, Mythos IA segura, corrida IA segura, Claude vs Gemini mercado, investimento Anthropic Google, AI safety 2026, IA segura empresas, Anthropic Series E, Google DeepMind estratégia",
  },
  "/post/melhores-apps-ia-produtividade-2026": {
    title: "Os 10 Melhores Aplicativos de IA para Produtividade em 2026 (Testados e Aprovados)",
    description: "Ranking testado de 80+ ferramentas: os 10 melhores apps de IA para produtividade, 3 apps que não valem a assinatura, stack gratuito e como montar seu kit de IA por menos de R$ 100/mês.",
    keywords: "aplicativos de IA produtividade 2026, melhores apps IA, Notion AI, Claude AI, Perplexity AI, Otter.ai, Runway ML, ElevenLabs, Midjourney v7, Zapier AI, Reclaim.ai, ferramentas IA Brasil, LGPD apps IA, Apple Intelligence Android 16",
  },
  "/post/chatgpt-vs-gemini-vs-claude-2026": {
    title: "ChatGPT vs Gemini vs Claude em 2026: Qual IA Realmente Vale a Pena Assinar?",
    description: "Comparativo completo com atualizações de 2026: ChatGPT com o3, Gemini 2.5 Pro (1M tokens), Claude Sonnet 4.6. Benchmarks, preços em reais, privacidade LGPD e qual IA assinar por perfil.",
    keywords: "ChatGPT vs Gemini vs Claude 2026, qual IA assinar 2026, ChatGPT Plus o3, Gemini Advanced 1M tokens, Claude Pro Sonnet 4.6, Copilot Pro, comparativo IAs, melhor IA 2026, LMSYS Arena, IA para programador, IA para escritor, IA Brasil preço",
  },
  "/post/claude-cowork-saaspocalypse-2026": {
    title: "Claude Cowork e o SaaSpocalypse: Como os Agentes de IA Estão Substituindo Softwares Inteiros",
    description: "Claude Cowork vs Microsoft Copilot Studio: comparativo direto com preços, residência de dados no Brasil, compliance e qual escolher por perfil. O que ainda protege o SaaS especializado.",
    keywords: "Claude Cowork, SaaSpocalypse, agentes IA corporativo, IA substituindo SaaS, Anthropic Cowork, Microsoft Copilot Studio comparativo, automação jurídica IA, automação financeira IA, RH com IA, SaaS vs agentes IA 2026, LGPD dados Azure Brasil",
  },
  "/post/claude-opus-vs-sonnet-2026": {
    title: "Claude 4 Opus vs Claude Sonnet 4.6: Qual Modelo Usar em 2026?",
    description: "Benchmarks verificados fev/2026: Opus 4.6 (80,8%) vs Sonnet 4.6 (79,6%) no SWE-bench — gap de 1,2pp. GPQA Diamond: 91,3% vs 74,1%. Preços em reais, Terminal-Bench e estratégia híbrida.",
    keywords: "Claude Opus 4.6 vs Sonnet 4.6, SWE-bench Verified 2026, GPQA Diamond Claude, Claude 4 benchmarks, Sonnet vs Opus custo, Claude API preço reais, Terminal-Bench Claude, Claude Sonnet 4.6 preço, Claude Opus 4.6 preço, estratégia híbrida Claude",
  },
  "/post/deepfakes-ia-2026-como-identificar": {
    title: "Deepfakes e IA em 2026: Como Identificar Conteúdo Falso e Proteger Sua Imagem",
    description: "42,5% das fraudes financeiras no Brasil usam IA (PF, 2026). 6,9M tentativas de golpe por semestre. Como identificar deepfakes de vídeo e voz, casos documentados e defesa corporativa.",
    keywords: "deepfakes 2026, como identificar deepfake, voz clonada IA, Polícia Federal fraude IA 2026, Serasa fraudes 2025, golpe voz clonada Brasil, Intel FakeCatcher, Sensity AI, EU AI Act deepfake, C2PA, caso Hong Kong deepfake, Marcos Mion deepfake",
  },
  "/post/gemini-2-5-pro-vs-claude-2026": {
    title: "Gemini 2.5 Pro vs Claude em 2026: Qual Modelo Vence nas Tarefas do Dia a Dia?",
    description: "Comparativo Gemini 2.5 Pro vs Claude (Sonnet e Opus) em 2026: benchmarks reais, contexto, preço, integração com Workspace e quando usar cada modelo para máxima produtividade.",
    keywords: "Gemini 2.5 Pro vs Claude, Gemini 2.5 Pro 2026, Claude Sonnet comparativo, Claude Opus vs Gemini, Google vs Anthropic modelos, 1 milhão tokens contexto, benchmarks LLM 2026, melhor IA escrita, melhor IA código 2026",
  },
  "/post/gemini-2-5-pro-vs-gpt-4o-2026": {
    title: "Gemini 2.5 Pro vs GPT-5.4: Qual o Melhor Modelo de IA em 2026?",
    description: "Gemini 2.5 Pro: 86,7% AIME, 84% GPQA Diamond, 1M tokens, 8× mais barato no input. GPT-5.4: melhor em português e código. Comparativo verificado com 6 cenários práticos de decisão.",
    keywords: "Gemini 2.5 Pro vs GPT-5.4, Gemini 2.5 Pro benchmarks, AIME 2025 Gemini, GPQA Diamond comparativo, melhor modelo IA 2026, preço API Gemini GPT, contexto 1 milhão tokens real, TokenMix LM Council benchmark, melhor IA ciência, modelos IA 2026 Brasil",
  },
  "/post/gpt-trabalhador-digital-2026": {
    title: "GPT como Trabalhador Digital em 2026: Como Empresas Estão Automatizando com IA",
    description: "Como empresas brasileiras e globais usam GPT e LLMs como trabalhadores digitais em 2026: casos reais, ROI documentado, riscos e o que o PL 2338/2023 exige de transparência.",
    keywords: "GPT trabalhador digital 2026, automação com GPT empresas, LLM trabalho corporativo, GPT-4o automação, trabalhador digital IA, ROI automação IA, PL 2338 automação, casos uso GPT empresas brasileiras, digital worker IA",
  },
  "/post/ia-brasil-adocao-2026": {
    title: "IA no Brasil em 2026: 3º Maior Usuário do ChatGPT, Mas Só 12% em Produção",
    description: "R$ 5,2B em 2024, R$ 18B projetados para 2027. 67% das empresas experimentaram, 12% têm IA em produção. Os 3 gargalos reais (mão de obra, dado legado, LGPD) e o que BNDES e MCTI estão fazendo.",
    keywords: "IA no Brasil 2026, adoção IA empresas brasileiras, IDC Brasil mercado IA, BNDES IA Transforma, McKinsey IA Brasil, CERT.br cibersegurança, mão de obra IA gargalo, cloud soberana Brasil, LGPD dados treinamento IA, Open Finance IA",
  },
  "/post/ia-codigo-programadores-2026": {
    title: "IA e Programação em 2026: GitHub Copilot, Cursor e o Futuro do Desenvolvedor",
    description: "Claude Code: 80,8% no SWE-bench. Cursor: 30% mais rápido por tarefa que Copilot. Qual ferramenta por perfil, o que a IA ainda não faz bem em código e como integrar sem criar dívida técnica.",
    keywords: "IA programação 2026, GitHub Copilot Pro, Cursor Pro, Claude Code SWE-bench, Windsurf Codeium, ferramentas IA desenvolvedor, SWE-bench Verified 2026, produtividade dev IA, Stack Overflow AI Survey 2025, Snyk vulnerabilidades código IA, IA para dev brasil",
  },
  "/post/ia-criatividade-arte-musica-2026": {
    title: "IA e Criatividade em 2026: Arte, Música e Vídeo com Inteligência Artificial",
    description: "Sora encerrado em março de 2026. Midjourney V7, Runway Gen-4.5, Suno v5.5, Seedance 2.0, direitos autorais no Brasil e como proteger suas obras com C2PA, Nightshade e registro na Biblioteca Nacional.",
    keywords: "IA criatividade 2026, Sora encerrado 2026, Midjourney V7, Adobe Firefly 3, Suno AI v5.5, Runway Gen-4.5, Seedance 2.0 vídeo, IA geração vídeo 2026, direitos autorais IA Brasil, C2PA proteção artista, Nightshade Glaze, EU AI Act conteúdo IA",
  },
  "/post/ia-educacao-2026-estudar-inteligente": {
    title: "IA na Educação em 2026: Como Estudar de Forma Inteligente (Sem Fazer Batota)",
    description: "USP e UNICAMP já têm política de IA. MEC publicou nota sobre uso em escolas. Khanmigo, NotebookLM, Feynman com IA, plano de 30 dias, detectores de plágio e tabela de ferramentas por LGPD.",
    keywords: "IA na educação 2026, USP política IA, MEC inteligência artificial escolas, Khanmigo Khan Academy, Google NotebookLM, método Feynman IA, GPTZero Turnitin detecção, ChatGPT Edu Microsoft Education, LGPD menores IA, flashcards IA Anki, plano estudo IA",
  },
  "/post/ia-generativa-iniciantes-2026-guia": {
    title: "IA Generativa para Iniciantes em 2026: O Guia Completo do Zero ao Avançado",
    description: "Custo de inferência caiu 280× (Stanford AI Index). 78% trazem IA sozinhos para o trabalho (BYOAI). Guia prático do zero com plano de 30 dias, recursos gratuitos em PT-BR e 5 erros comuns a evitar.",
    keywords: "IA generativa iniciantes 2026, guia IA para iniciantes, Stanford AI Index custo inferência, BYOAI Bring Your Own AI, Claude Gemini ChatGPT grátis, engenharia de prompts básica, DeepLearning.AI curso gratuito, Google AI Essentials, comunidade IA Brasil",
  },
  "/post/ia-saude-2026-diagnosticos-futuro": {
    title: "IA para Saúde em 2026: Diagnósticos, Wearables e o Que CFM e ANVISA Decidiram",
    description: "ANVISA regulamentou software médico com IA (RDC 657/2022). CFM: decisão clínica é do médico. IDx-DR, Viz.ai, Apple Watch ECG aprovados no Brasil. O que o SUS implementa e o que ainda está pendente.",
    keywords: "IA saúde 2026, ANVISA RDC 657 2022, CFM Resolução 2314 2024, telemedicina IA, IDx-DR retinopatia, Viz.ai AVC, Apple Watch ECG ANVISA, SUS IA projetos, wearables IA saúde, AlphaFold proteínas, diagnóstico IA Brasil",
  },
  "/post/ia-no-trabalho-2026-profissoes": {
    title: "IA no Trabalho em 2026: Sua Profissão Vai Acabar ou Evoluir?",
    description: "WEF: 170M criados, 92M deslocados. Gupy: +306% em busca de profissionais com IA. OIT: só 5% em risco real de substituição. O que PL 2338 muda para RH com IA e o plano prático para requalificação.",
    keywords: "IA no trabalho 2026, profissões em risco IA, Future of Jobs WEF 2025, Gupy IA mercado trabalho, OIT IA empregos, IPEA automação Brasil, PL 2338 RH IA, LGPD triagem currículo, reskilling IA, profissões do futuro, automação mercado formal Brasil",
  },
  "/post/ia-mercado-trabalho-brasil-2026": {
    title: "IA no Mercado de Trabalho Brasileiro em 2026: Quais Profissões Ganham e Quais Estão em Risco",
    description: "IBRE/FGV: 30% dos trabalhadores brasileiros expostos (30,9M). IPEA (abr/2026): IA reconfigura tarefas. DIAP: 80%+ dos serviços expostos. Plano de 90 dias e o que o TST já decidiu sobre demissão por IA.",
    keywords: "IA mercado trabalho Brasil 2026, IBRE FGV automação 30 porcento, IPEA IA emprego 2026, OIT IA generativa ocupações, DIAP transformações trabalho, profissões risco IA, profissões crescimento IA, plano reposicionamento carreira IA, PL 2338 trabalhador, automação serviços Brasil",
  },
  "/post/mcp-protocol-agentes-ia-2026": {
    title: "MCP (Model Context Protocol): O Padrão que Está Unificando os Agentes de IA em 2026",
    description: "Guia completo sobre o MCP (Model Context Protocol) da Anthropic: como funciona, por que a OpenAI e Google adotaram, os 1.000+ servidores públicos e como implementar em projetos brasileiros.",
    keywords: "MCP Model Context Protocol, Anthropic MCP 2026, protocolo agentes IA, MCP vs API, servidores MCP públicos, Claude MCP, Cursor MCP, Windsurf MCP, A2A protocol Google, USB-C agentes IA, MCP Brasil implementação",
  },
  "/post/negocio-online-ia-2026": {
    title: "Como Criar um Negócio Online com IA em 2026: 10 Modelos Lucrativos",
    description: "Faixas reais mês a mês (R$ 0 no mês 1 → até R$ 20k em 6+ meses). Workana vs 99Freelas vs Fiverr com taxas reais. MEI, Simples Nacional e como tributar NF de serviço com IA no Brasil.",
    keywords: "negócio online IA 2026, criar negócio com IA, agência conteúdo IA, SaaS nicho IA, automação PME Brasil, Workana taxa freelancer, 99Freelas IA, Fiverr dólar freelancer, MEI prestador IA, NF serviço IA, renda IA mês a mês, erros negócio IA",
  },
  "/post/regulamentacao-ia-brasil-mundo-2026": {
    title: "Regulamentação de IA no Brasil e no Mundo em 2026: O Que Muda Para Sua Empresa",
    description: "EU AI Act: 4 categorias de risco, multas até €35M, proibições ativas desde fev/2025. PL 2338 ainda na Câmara. EUA desregulando. Checklist prático de compliance e o que Art. 20 da LGPD já exige hoje.",
    keywords: "regulamentação IA 2026, EU AI Act categorias risco, PL 2338 2023 Brasil, ANPD inteligência artificial, LGPD decisões automatizadas, compliance IA empresas, multas EU AI Act 35M, Marco Legal IA Brasil Câmara, alto risco IA RH crédito, checklist IA LGPD",
  },
  "/post/pragmata-capcom-guia-completo-2026": {
    title: "Pragmata (Capcom) 2026: Guia Completo — Data, Gameplay e Tudo que Sabemos",
    description: "Pragmata da Capcom em 2026: data de lançamento, gameplay revelado, enredo, protagonistas, plataformas e tudo que sabemos sobre o misterioso jogo sci-fi da Capcom.",
    keywords: "Pragmata Capcom 2026, Pragmata lançamento data, Pragmata gameplay, Pragmata enredo, Pragmata PS5 PC, Capcom Pragmata guia, Pragmata sci-fi Capcom",
  },
  "/post/guia-cosplay-2026-iniciantes": {
    title: "Guia de Cosplay 2026: EVA, Comunidade, WCS e Convenções no Brasil",
    description: "Guia completo de cosplay iniciante 2026: EVA, heatforming, contact cement, orçamentos. Comunidade no Instagram (#cosplaybrasil), Discord, TikTok. World Cosplay Summit (Nagoya), Anime Friends e CCXP 2026.",
    keywords: "guia cosplay iniciante 2026, EVA cosplay heatforming, contact cement cosplay, cosplaybrasil Instagram, Discord cosplay Brasil, World Cosplay Summit WCS Nagoya, Anime Friends cosplay julho, CCXP cosplay novembro, orcamento cosplay brasil",
  },
  "/post/jujutsu-kaisen-guia-completo-2026": {
    title: "Jujutsu Kaisen: Guia Completo — Arcos, Energia Maldita e Personagens",
    description: "Guia definitivo de JJK (271 caps, 100M+ cópias): arcos do mangá, energia maldita e Domain Expansion, Yuji, Gojo, Sukuna, Megumi, Nobara, Yuta. Onde assistir e ler no Brasil em 2026.",
    keywords: "Jujutsu Kaisen guia completo, energia maldita JJK, Domain Expansion JJK, Gojo Satoru, Sukuna JJK, Nobara Kugisaki, Shibuya arc JJK, Culling Game, Gege Akutami, MAPPA, JBC manga JJK, Manga Plus JJK",
  },
  "/post/rezero-temporada-4-guia-2026": {
    title: "Re:ZERO Temporada 4: Torre de Plêiades — Arco 6, Personagens e Data",
    description: "Re:ZERO T4 estreou em abril 2026 (White Fox, Crunchyroll, 25 eps). Arco 6 Torre de Plêiades: Subaru, Beatrice, Rem, Roswaal, Satella. Mecanismo de Retorno pela Morte e TEPT na série.",
    keywords: "ReZero temporada 4, Re:ZERO T4 2026, Torre de Pleiades, Subaru Natsuki, Beatrice ReZero, Rem memoria apagada, Roswaal livro futuro, Satella Bruxa Inveja, White Fox, Crunchyroll ReZero, Tappei Nagatsuki, arco 6 ReZero",
  },
  "/post/demon-slayer-hashira-guia-2026": {
    title: "Demon Slayer: Guia Completo dos 9 Hashira — Respirações e Destinos",
    description: "Os 9 Pilares de Demon Slayer: Rengoku (Fogo), Tengen (Som), Muichiro (Névoa), Mitsuri (Amor), Obanai (Serpente), Sanemi (Vento), Gyomei (Pedra), Giyu (Água). Respiração Solar de Yoriichi e arco de cada Hashira.",
    keywords: "Hashira Demon Slayer, Pilares Kimetsu no Yaiba, Rengoku Fogo, Tengen Som, Muichiro Nevoa, Mitsuri Amor, Sanemi Vento, Gyomei Pedra, Giyu Agua, Respiracao Solar Yoriichi, Ufotable Demon Slayer, Corporacao Exterminio",
  },

   // ═══════════════════════════════════════════════════════════
  // CATEGORIA: FINANCAS — 37 posts
  // ═══════════════════════════════════════════════════════════
   "/post/acoes-brasileiras-baratas-valuation-2026": {
    title: "Ibovespa em Recordes mas Ações Brasileiras Ainda Estão Baratas: O Paradoxo de Abril de 2026",
    description: "Ibovespa acima de 195 mil pontos, mas P/L médio de 8,5× contra média histórica de 12×. Entenda por que a bolsa está em máxima mas os múltiplos ainda estão baratos e quais setores aproveitar.",
    keywords: "ações baratas Brasil 2026, valuation Ibovespa, P/L bolsa brasileira, múltiplos historicamente baixos, bolsa brasileira desconto, dividend yield 6,5%, oportunidades bolsa 2026, bancos petróleo utilities, BBAS3 PETR4 EQTL3",
  },
  "/post/berkshire-hathaway-greg-abel-2026-sem-buffett": {
    title: "Berkshire Hathaway 2026: Greg Abel Assume, US$ 397 Bilhões em Caixa e a Era Pós-Buffett Começa",
    description: "No primeiro meeting sem Buffett como CEO, Greg Abel presenta lucro que dobrou no Q1, US$ 397 bilhões em caixa parado e um deepfake chocante de Buffett para alertar sobre os riscos da IA.",
    keywords: "Berkshire Hathaway 2026, Greg Abel CEO, Warren Buffett successão, BERK34 BDR B3, US$ 397 bilhões caixa, meeting anual Berkshire, deepfake IA Buffett, investimento valor longo prazo, Omaha 2026",
  },
  "/post/bitcoin-2026-vale-comprar": {
    title: "Bitcoin em 2026: Vale a Pena Comprar Agora? Análise Completa com Riscos e Estratégias",
    description: "Com o halving de 2024 ainda ecoando e ETFs spot nos EUA movimentando bilhões, o Bitcoin de 2026 é uma classe de ativos mais matura. Mas ainda vale comprar? Análise completa de riscos, estratégias DCA e tributação.",
    keywords: "bitcoin vale comprar 2026, bitcoin halving 2024 efeito, ETF bitcoin EUA aprovado, bitcoin carteira percentual, DCA bitcoin mensal, tributação cripto Brasil 2026, HASH11 bitcoin B3, custódia hardware wallet, bitcoin longo prazo",
  },
  "/post/bitcoin-criptomoedas-2026-investir": {
    title: "Bitcoin e Criptomoedas em 2026: Guia Completo Para Investir com Segurança",
    description: "Guia completo de criptomoedas em 2026: como funciona o Bitcoin, Ethereum, DeFi, NFTs e criptomoedas alternativas. Tributação, custódia, exchanges, carteiras e estratégias para o investidor brasileiro.",
    keywords: "criptomoedas 2026 guia, bitcoin como investir, ethereum 2026, DeFi finanças descentralizadas, NFT blockchain, tributação criptomoedas Brasil, exchange regulada cripto, carteira hardware cripto segurança, HASH11 ETF cripto",
  },
  "/post/calculadoras-financeiras-ativos": {
    title: "Calculadoras Financeiras em Tempo Real: Cotações de Ações, Bitcoin, Dólar e Ouro",
    description: "Calculadoras financeiras interativas com cotações em tempo real da B3, Bitcoin, dólar e ouro. Simule quanto você consegue comprar com qualquer valor. Dados atualizados automaticamente.",
    keywords: "calculadora financeira online, cotação bitcoin real, cotação dólar hoje, cotação ouro gramas, calculadora ações B3, quanto compro com X reais, preço Ibovespa tempo real, BOVA11 IVVB11 cotação, calculadora investimento",
  },
  "/post/carteira-investimentos-iniciantes-2026": {
    title: "Carteira de Investimentos Para Iniciantes em 2026: Guia Passo a Passo",
    description: "Como montar uma carteira de investimentos do zero em 2026. Quiz de perfil, portfólios por perfil (conservador, moderado, arrojado), quais ativos comprar primeiro e os erros mais comuns de quem está começando.",
    keywords: "carteira investimentos iniciantes 2026, como investir do zero, perfil investidor quiz, portfólio conservador moderado arrojado, primeira carteira B3, Tesouro Selic CDB LCI ações FIIs iniciante, quanto investir começando",
  },
  "/post/cdb-2026-guia-completo": {
    title: "CDB em 2026: Guia Completo — Rendimento, Tributação, FGC e Como Escolher o Melhor",
    description: "CDBs pagando 110-130% do CDI em bancos médios em 2026. Guia completo com explicação de rendimentos, tabela regressiva de IR, cobertura do FGC, diferença entre pós-fixado e prefixado e como comparar opções.",
    keywords: "CDB 2026 melhores taxas, CDB 100% CDI 110% 120%, FGC garantia 250 mil, CDB liquidez diária, tributação CDB tabela regressiva, CDB banco médio seguro, CDB vs LCI LCA comparação, melhor CDB para reserva emergência",
  },
  "/post/copom-abril-2026-selic-investimentos": {
    title: "Copom Abril 2026: Selic a 14,50% — O Que Muda para Renda Fixa, Ações e Câmbio",
    description: "Copom cortou Selic de 14,75% para 14,50% em reunião de 28-29 de abril. Análise do comunicado, impacto em cada classe de ativos e carteiras recomendadas por perfil para o ciclo de afrouxamento gradual.",
    keywords: "Copom abril 2026, Selic 14,50% corte, decisão Copom juros, ciclo corte juros Brasil, Tesouro Prefixado após corte, FIIs Selic caindo, ações sensíveis juros 2026, renda fixa após Copom, carteira Selic caindo",
  },
  "/post/copom-selic-1450-corte-abril-2026": {
    title: "Copom Corta Selic para 14,50%: Segundo Corte Consecutivo em Meio à Guerra do Oriente Médio",
    description: "Segundo corte consecutivo da Selic em meio ao conflito Irã-EUA e petróleo acima de US$ 100. Comunicado pede cautela e serenidade. O que muda na renda fixa, nos FIIs e nas ações brasileiras agora.",
    keywords: "Copom Selic 14,50% maio 2026, segundo corte consecutivo Selic, comunicado Copom serenidade cautela, Selic petróleo Ormuz inflação, renda fixa CDB Tesouro após corte, FIIs papel CDI Selic caindo, horizonte política monetária",
  },
  "/post/cortar-gastos-2026": {
    title: "Cortar Gastos em 2026: 20 Estratégias Práticas para Economizar no Brasil",
    description: "Com IPCA em 4,31% e combustíveis em alta, veja como economizar R$ 500 a R$ 2.000 por mês com 20 estratégias práticas validadas para o brasileiro em 2026, organizadas por impacto financeiro.",
    keywords: "cortar gastos 2026, como economizar dinheiro Brasil, estratégias economia doméstica, reduzir despesas mensais, orçamento pessoal Brasil, dicas economizar supermercado, cancelar assinaturas economizar, combustível mais barato 2026, planejamento financeiro gastos",
  },
  "/post/dolar-queda-2026-investir-exterior": {
    title: "Dólar no Menor Nível em 2 Anos: Como Aproveitar a Queda Cambial para Investir no Exterior",
    description: "Dólar a R$ 5,01 em abril de 2026 — menor cotação em dois anos e queda de 9,21% no ano. Entenda os motivos, se é hora de comprar dólares e como investir em ativos internacionais com câmbio favorável.",
    keywords: "dólar queda 2026, dólar R$ 5,01 menor nivel, investir exterior câmbio favorável, IVVB11 dólar barato, NASD11 S&P 500 em reais, BDR Apple Google Brasil, como investir nos EUA pelo Brasil, diversificação cambial 2026",
  },
  "/post/economia-domestica-2026-cortar-gastos": {
    title: "30 Dicas Práticas de Economia Doméstica em 2026 — Reduzir Gastos Sem Sofrimento",
    description: "30 estratégias práticas de economia doméstica testadas em 2026. De supermercado a energia elétrica, assinaturas a transporte — como reduzir gastos fixos e variáveis sem abrir mão de qualidade de vida.",
    keywords: "economia doméstica 2026, reduzir gastos casa, dicas economizar supermercado, conta de luz mais barata, cancelar assinaturas Netflix economia, combustível mais barato app, gastos casa 30 dicas, orçamento familiar Brasil",
  },
  "/post/educacao-financeira-metodo-3-baldes": {
    title: "Método dos 3 Baldes: Educação Financeira Para Quem Sempre Gastou Tudo",
    description: "64% dos brasileiros não conseguem poupar mensalmente. O Método dos 3 Baldes (Necessidades 55%, Investimentos 25%, Qualidade de Vida 20%) resolve isso com automação e mudança comportamental comprovada.",
    keywords: "método 3 baldes, educação financeira iniciante, como começar poupar dinheiro Brasil, organizar finanças pessoais, controle gastos mensais, poupar com salário baixo, finanças comportamentais método, automatizar investimentos",
  },
  "/post/etfs-2026-guia-completo-investir": {
    title: "ETFs em 2026: Guia Completo Para Investir com Diversificação e Baixo Custo",
    description: "Mais de 120 ETFs disponíveis na B3 em 2026. Guia completo com BOVA11, IVVB11, SMAL11, NASD11, como escolher, tributação, carteiras por perfil e os erros mais comuns. Comece a investir em fundos de índice.",
    keywords: "ETFs 2026 guia, melhores ETFs B3, BOVA11 IVVB11 SMAL11 NASD11, investir ETF B3, taxa administração ETF, tributação ETF 2026, carteira ETFs iniciante, SPIVA fundos ativos vs índice, ETF rebalanceamento DCA",
  },
  "/post/etfs-b3-guia-completo-2026": {
    title: "ETFs na B3 em 2026: Guia Completo para Investir em Fundos de Índice",
    description: "Mais de 80 ETFs listados na B3 em 2026. Guia com BOVA11, IVVB11, SMAL11, NASD11, como escolher por taxa, liquidez, tracking error e tributação. Carteiras modelo e erros a evitar.",
    keywords: "ETFs B3 2026, melhores ETFs listados B3, BOVA11 IVVB11 SMAL11 NASD11, fundos de índice Brasil, ETF renda fixa IMAB11, como investir ETF B3, tributação ETF 2026, taxa administração ETF, tracking error ETF, carteira ETFs perfil",
  },
  "/post/fiis-2026-ainda-vale-investir": {
    title: "FIIs em 2026: Ainda Vale Investir em Fundos Imobiliários com Selic Caindo?",
    description: "Com Selic iniciando queda, FIIs de tijolo voltam ao radar. Análise de por que ainda vale investir em fundos imobiliários em 2026, quais segmentos se beneficiam da queda de juros e como posicionar a carteira.",
    keywords: "FIIs ainda vale 2026, fundos imobiliários Selic caindo, FIIs tijolo vs papel 2026, IFIX perspectiva 2026, dividend yield FIIs 2026, logística shoppings lajes FIIs, P/VP FIIs comprar abaixo de 1, FIIs renda passiva 2026",
  },
  "/post/fiis-2026-melhores-fundos-imobiliarios": {
    title: "Fundos Imobiliários (FIIs) em 2026: Os Melhores, Como Analisar e Erros Que Te Custam Dinheiro",
    description: "Guia completo de FIIs em 2026: os 3 tipos de fundos (papel, tijolo, híbrido), como analisar DY, P/VP e vacância, simulador de renda passiva, tributação completa e os 5 erros mais comuns dos investidores.",
    keywords: "FIIs 2026 melhores fundos imobiliários, como analisar FII dividend yield P/VP, FII tributação IR isenção 2026, vacância FII logística shoppings lajes, IFIX 2026, simulador renda passiva FIIs, fundos imobiliários iniciante, carteira FIIs diversificada",
  },
  "/post/fiis-defensivos-abril-2026": {
    title: "FIIs Defensivos em Abril de 2026: Estratégia para Investir com Segurança",
    description: "Análise dos melhores FIIs defensivos para investir em abril de 2026 com Selic elevada e inflação acima da meta. Foco em recebíveis, logística e critérios de seleção para proteger a carteira.",
    keywords: "FIIs defensivos 2026, fundos imobiliários seguros Selic alta, FIIs recebíveis CRI CDI IPCA, FIIs logística contratos longos, WAULT FII prazo médio, P/VP FII defensivo, IFIX abril 2026, DY sustentável FII seguro",
  },
  "/post/guerra-ira-petroleo-petrobras-2026": {
    title: "Guerra EUA-Irã: Petróleo Dispara, Petrobras Sobe — O Que Fazer com PETR4 Agora",
    description: "Com a guerra EUA-Irã em curso e o petróleo Brent acima de US$ 90, a Petrobras está no centro das atenções. Análise de PETR4, PRIO3, impacto do conflito no setor e estratégias para o investidor.",
    keywords: "guerra EUA Irã petróleo 2026, PETR4 guerra Ormuz, petróleo brent alta guerra, PRIO3 petróleo estratégia, Petrobras dividendo 2026, Ormuz bloqueio petróleo, como investir petróleo Brasil, setor petróleo ações brasileiras, geopolítica investimentos",
  },
  "/post/ia-mercado-financeiro-2026-investimentos": {
    title: "Inteligência Artificial no Mercado Financeiro 2026: Como a IA Transforma Seus Investimentos",
    description: "Mais de 40% dos trades na B3 são executados por algoritmos. Descubra como robo-advisors, análise de sentimento e IA generativa estão mudando as finanças e como usar isso a seu favor em 2026.",
    keywords: "IA mercado financeiro 2026, robo advisor Brasil, algoritmos investimento, inteligência artificial finanças, Warren Magnetis robo, trade automatizado B3, análise sentimento ações, machine learning fintech, ChatGPT investimentos, IA finanças pessoais",
  },
  "/post/ia-para-financas-pessoais-2026": {
    title: "Como Usar IA para Organizar suas Finanças em 2026: Prompts, Apps e Estratégias Práticas",
    description: "Guia prático de como usar ChatGPT, Gemini e outros assistentes de IA para controle de gastos, análise de extrato bancário, simulações de investimento e planejamento financeiro pessoal em 2026.",
    keywords: "IA finanças pessoais 2026, ChatGPT controle gastos, prompts IA financeiro, Mobills Organizze IA, Open Finance assistente IA, análise extrato bancário IA, IA planejamento financeiro, ChatGPT investimentos simulação",
  },
  "/post/ibovespa-recorde-selic-caindo-2026": {
    title: "Ibovespa em Recordes e Selic Caindo: Onde Investir Agora em Abril de 2026",
    description: "Ibovespa acima de 195 mil pontos, Selic cortada para 14,50% e dólar no menor nível em 2 anos. Análise completa de onde investir agora, carteiras por perfil e riscos do momento para não errar.",
    keywords: "Ibovespa recorde 2026 onde investir, Selic caindo bolsa brasileira, 195 mil pontos Ibovespa, carteira investimentos abril 2026, ações sensíveis juros comprar, Tesouro Prefixado IPCA+ Selic caindo, renda variável 2026 oportunidades",
  },
  "/post/inflacao-proteger-investimentos-2026": {
    title: "Inflação Acima da Meta em 2026: Como Proteger Seus Investimentos do IPCA",
    description: "IPCA projetado em 4,31% para 2026, acima da meta. Guia completo de como proteger o patrimônio contra a inflação com Tesouro IPCA+, LCI/LCA, FIIs de tijolo e ações defensivas. O que evitar.",
    keywords: "inflação 2026 como proteger investimentos, IPCA acima da meta, Tesouro IPCA+ 2026 proteção, LCI LCA inflação proteção, FIIs contratos IPCA indexados, ações energia saneamento inflação, hedge inflação carteira, NTN-B IPCA+ comprar 2026",
  },
  "/post/investir-em-tecnologia-2026": {
    title: "Como Investir em Tecnologia em 2026: Guia Completo de Setores, ETFs e Estratégias",
    description: "Guia completo para investir no setor de tecnologia em 2026. Semicondutores, IA, data centers e cibersegurança. ETFs como QQQ, SMH, NASD11 e BDRs de Apple, Nvidia e Microsoft no Brasil.",
    keywords: "investir tecnologia 2026, semicondutores Nvidia TSMC ASML, ETF tecnologia QQQ SMH NASD11, BDR tecnologia B3 NVDC34, IA data center investimento, cibersegurança ETF CIBR, como investir big tech Brasil, avenue xp EUA investimentos",
  },
  "/post/irpf-2026-guia-declarar-pagar-menos": {
    title: "IRPF 2026: Guia Completo Para Declarar e Pagar Menos Imposto Legalmente",
    description: "Guia completo do Imposto de Renda 2026 com prazo 29 de maio. Deduções de saúde sem limite, PGBL, dependentes e educação. Calculadora simplificado vs completo, checklist de documentos e FAQ com 12 perguntas.",
    keywords: "IRPF 2026 guia completo, declarar imposto de renda 2026, deduções IR saúde sem limite, PGBL dedução 12% renda, declaração pré-preenchida 2026, malha fina imposto renda, prazo 29 maio IRPF, IR investimentos ações FIIs cripto",
  },
  "/post/magnificent-seven-resultados-q1-2026-apple-tim-cook": {
    title: "Magnificent Seven Q1 2026: Meta +9%, Alphabet Bate Projeções e Apple Anuncia Saída de Tim Cook",
    description: "Quatro das sete empresas do Magnificent Seven reportaram resultados do Q1 2026 antes da Apple. Meta surpreende com +9%, Alphabet bate projeções, Microsoft e Amazon sólidas. Análise e impacto para investidores.",
    keywords: "Magnificent Seven resultados Q1 2026, Meta resultado Q1 lucro, Alphabet Google resultado, Microsoft Azure cloud Q1, Amazon AWS resultado, Apple Tim Cook saída CEO, NVDC34 MSFT34 GOGL34 BDR, Ternus Apple CEO 2026",
  },
  "/post/ouro-maxima-historica-2026-como-investir": {
    title: "Ouro em Máxima Histórica: Por Que o Metal Subiu +30% em 12 Meses e Como Investir Agora",
    description: "Ouro acima de US$ 3.300 por onça em 2026 — máxima histórica e alta de mais de 30% em 12 meses. Entenda os 5 motivos estruturais, as formas de investir (GOLD11, ETFs, físico) e quanto alocar na carteira.",
    keywords: "ouro máxima histórica 2026, ouro US$ 3.300 por que subiu, GOLD11 ETF ouro B3, como investir ouro Brasil, ouro bancos centrais compra, hedge ouro geopolítico, ouro vs dólar vs bitcoin, quanto alocar ouro carteira percentual",
  },
  "/post/petroleo-brent-125-bloqueio-ormuz-2026": {
    title: "Brent Ultrapassa US$ 125: Bloqueio em Ormuz, Combustível Mais Caro e O Que Fazer com Petrobras",
    description: "Petróleo Brent acima de US$ 125 por barril após bloqueio do Estreito de Ormuz pela guerra EUA-Irã. Impacto na inflação, combustíveis e câmbio brasileiros. PETR4, PRIO3 e como posicionar a carteira.",
    keywords: "petróleo brent US$ 125 Ormuz 2026, guerra EUA Irã petróleo 2026, PETR4 petróleo guerra, Ormuz bloqueio preço petróleo, combustível Brasil inflação petróleo, PRIO3 alta petróleo, ouro dólar geopolítica, hedge petróleo carteira",
  },
  "/post/planejamento-financeiro-2026-metas": {
    title: "Planejamento Financeiro 2026: Como Definir e Atingir Metas Financeiras com Método SMART",
    description: "Guia completo de planejamento financeiro para 2026 com método SMART, orçamento por percentual, planejamento por fase de vida e como fazer revisão trimestral sem tornar isso uma tortura.",
    keywords: "planejamento financeiro 2026, metas financeiras SMART, como organizar finanças 2026, orçamento pessoal método, planejamento aposentadoria Brasil, revisão trimestral finanças, metas curto médio longo prazo dinheiro, educação financeira adultos",
  },
  "/post/pnad-desemprego-61-marco-2026": {
    title: "PNAD Março 2026: Desemprego em 6,1% — Mínima Histórica e O Que Muda nos Investimentos",
    description: "IBGE divulga desocupação de 6,1% no 1º tri 2026, renda média recorde de R$ 3.722 e massa salarial de R$ 374,8 bi. Análise dos impactos na Selic, bolsa, consumo doméstico e carteira de investimentos.",
    keywords: "PNAD março 2026, desemprego 6,1% Brasil, taxa desocupação 2026, IBGE mercado trabalho, renda média recorde 2026, massa salarial Brasil, impacto PNAD investimentos, Selic desemprego mercado trabalho, consumo doméstico bolsa",
  },
  "/post/poupanca-vs-cdb-tesouro-2026": {
    title: "Poupança vs CDB vs Tesouro Selic: Qual Rende Mais em 2026? Comparação Completa",
    description: "Comparação detalhada entre poupança, CDB 100% CDI, LCI/LCA e Tesouro Selic em 2026 com Selic a 14,75%. Simulações com IR, rendimento real e por que poupança não compensa mais em nenhum cenário.",
    keywords: "poupança vs CDB 2026, poupança vs Tesouro Selic, CDB ou poupança melhor, rendimento poupança 2026, LCI LCA isenção IR vs CDB, Tesouro Selic vs CDB tabela, onde aplicar dinheiro 2026, melhor aplicação renda fixa 2026",
  },
  "/post/previdencia-privada-pgbl-vgbl-2026": {
    title: "Previdência Privada em 2026: PGBL vs VGBL, Tabela Progressiva vs Regressiva e Como Portabilizar",
    description: "Guia completo de previdência privada para 2026. Diferença entre PGBL e VGBL, tabela progressiva vs regressiva, taxas de administração aceitáveis, portabilidade gratuita e planejamento sucessório.",
    keywords: "previdência privada 2026, PGBL VGBL diferença, tabela regressiva progressiva previdência, portabilidade previdência privada, taxa administração previdência, previdência vs Tesouro IPCA+, planejamento sucessório previdência, melhor plano previdência 2026",
  },
  "/post/renda-passiva-2026-formas-comprovadas": {
    title: "Renda Passiva em 2026: 7 Formas Comprovadas Para Ganhar Dinheiro Enquanto Dorme",
    description: "7 formas de construir renda passiva em 2026: dividendos de ações, FIIs, renda fixa com cupons, infoprodutos, aluguéis, royalties e P2P lending. Tributação de cada fonte e erros comuns para evitar.",
    keywords: "renda passiva 2026, como ter renda passiva Brasil, dividendos ações renda passiva, FIIs renda mensal isento IR, infoprodutos renda passiva digital, royalties renda passiva criativa, aluguéis renda passiva imóvel, P2P lending Brasil renda",
  },
  "/post/reserva-emergencia-2026-como-montar": {
    title: "Reserva de Emergência 2026: Quanto Guardar, Onde Investir e Como Construir do Zero",
    description: "Guia completo de reserva de emergência para 2026 com Selic a 14,75%. Quanto guardar (3-12 meses de gastos), onde aplicar (Tesouro Selic, CDB liquidez diária), como construir e quando usar.",
    keywords: "reserva emergência 2026, quanto guardar reserva emergência, onde investir reserva emergência Selic alta, Tesouro Selic reserva emergência, CDB liquidez diária reserva, 3 meses de gastos reserva, construir reserva do zero, reserva emergência autônomo",
  },
  "/post/sair-das-dividas-2026-plano-acao": {
    title: "Sair das Dívidas em 2026: Plano de Ação Completo Para Quitar Tudo e Recomeçar",
    description: "Plano de ação completo para quitar dívidas em 2026. Método Avalanche (quita primeiro os mais caros) vs Bola de Neve, como negociar dívidas antigas com desconto, Desenrola Brasil e recuperação do score.",
    keywords: "sair das dívidas 2026, plano quitar dívidas Brasil, método avalanche bola de neve, negociar dívida bancária desconto, Desenrola Brasil 2026, renegociação dívidas Serasa, score crédito recuperar, rotativo cartão crédito quitar, como pagar dívidas",
  },
  "/post/selic-comeca-cair-2026": {
    title: "Selic Começa a Cair: O Que Fazer com Renda Fixa, FIIs e Ações Agora",
    description: "Com a Selic iniciando o ciclo de queda, é hora de reposicionar a carteira. Guia completo de como aproveitar a marcação a mercado em prefixados, FIIs de tijolo, ações cíclicas e curva de juros.",
    keywords: "Selic começa cair 2026, marcação a mercado Tesouro Prefixado, Tesouro IPCA+ Selic caindo, FIIs tijolo Selic queda, ações sensíveis juros comprar, renda fixa Selic caindo estratégia, ciclo corte Selic portfólio, curva juros Brasil 2026",
  },
  "/post/tesouro-direto-2026-guia-completo": {
    title: "Tesouro Direto em 2026: Guia Completo de Todos os Títulos, Tributação e Como Comprar",
    description: "Guia completo do Tesouro Direto em 2026. Diferença entre Tesouro Selic, Prefixado e IPCA+, como comprar passo a passo, tributação com exemplos, taxa de custódia e quando cada título faz sentido.",
    keywords: "Tesouro Direto 2026 guia, Tesouro Selic vs Prefixado vs IPCA+, como comprar Tesouro Direto 2026, tributação Tesouro Direto IR, taxa custódia B3 Tesouro, NTN-B IPCA+ 2026, marcação mercado Tesouro, melhor título Tesouro 2026",
  },
  "/post/tesouro-prefixado-vs-ipca-2026": {
    title: "Tesouro Prefixado vs IPCA+: Qual Escolher em 2026 com Selic Caindo e Inflação Pressionada?",
    description: "Análise completa da escolha entre Tesouro Prefixado e Tesouro IPCA+ em 2026, com Selic iniciando queda e inflação acima da meta. Simulações de retorno, cenários, checklist de decisão e FAQ.",
    keywords: "Tesouro Prefixado vs IPCA+ 2026, qual título comprar Tesouro 2026, NTN-B IPCA+ ou prefixado, marcação a mercado prefixado risco, Tesouro IPCA+ proteção inflação, ciclo corte juros qual titulo, simulação prefixado IPCA+ retorno, checklist Tesouro Direto",
  },
  
  // ═══════════════════════════════════════════════════════════
  // CATEGORIA: GEEK — 52 posts
  // ═══════════════════════════════════════════════════════════
  "/post/hell-mode-gamer-isekai-guia-completo": {
    title: "Hell Mode: O Gamer com Dificuldade Máxima no Isekai — Guia 2026",
    description: "Hell Mode anime Yokohama Animation Lab (jan 2026, HIDIVE/Prime Video): Allen reencarnado no modo mais difícil com 100x mais XP necessário. Hamuo/Earth Star, mangá Enji Tetta, arcos, personagens e sistema de invocação.",
    keywords: "Hell Mode anime, Hamuo light novel, Earth Star Entertainment, Yokohama Animation Lab, HIDIVE Hell Mode, Allen Invocador isekai, Mutsumi Tamura, sistema gacha invocação, Hell Mode Enji Tetta mangá, isekai dificuldade máxima, J-Novel Club",
  },
  "/post/crimson-desert-bosses-guia-chefes": {
    title: "Crimson Desert: Guia Completo de Bosses — Todos os Chefes, Estratégias e Recompensas",
    description: "Guia completo de bosses de Crimson Desert: todos os chefes, estratégias de combate, fraquezas, padrões de ataque e recompensas de cada encontro.",
    keywords: "Crimson Desert bosses guia, chefes Crimson Desert, como derrotar chefes Crimson Desert, Crimson Desert estratégias bosses, Crimson Desert guia 2026, Pearl Abyss bosses",
  },
  "/post/crimson-desert-guia-iniciantes-dicas": {
    title: "Crimson Desert: Guia para Iniciantes — Dicas Essenciais para Começar Certo",
    description: "Guia de iniciantes para Crimson Desert: dicas essenciais para começar bem, erros a evitar, como funciona o combate, sistema de progressão e os primeiros passos em Pywel.",
    keywords: "Crimson Desert guia iniciantes, dicas Crimson Desert começo, como jogar Crimson Desert, Crimson Desert tutorial dicas, começar Crimson Desert, primeiros passos CD Pywel",
  },
  "/post/crimson-desert-melhores-equipamentos-inicio": {
    title: "Crimson Desert: Melhores Equipamentos do Início do Jogo — Guia Completo",
    description: "Quais são os melhores equipamentos no início de Crimson Desert? Guia completo de armas, armaduras e acessórios para as primeiras horas do jogo com Kliff.",
    keywords: "Crimson Desert melhores equipamentos início, armas Crimson Desert early game, armaduras CD início, guia equipamentos Crimson Desert, melhores itens começo Crimson Desert",
  },
  "/post/elden-ring-nightreign-guia-completo-2026": {
    title: "Elden Ring Nightreign: Guia Completo — Classes, Expedições, Bosses e DLC Forsaken Hollows",
    description: "Guia completo de Elden Ring Nightreign: classes, mecânicas de Expedição, Nightlords, DLC Forsaken Hollows, builds recomendadas e como jogar em co-op.",
    keywords: "Elden Ring Nightreign guia, Nightreign classes, Nightreign co-op, Forsaken Hollows DLC, Nightreign bosses Nightlords, FromSoftware roguelite, Elden Ring Nightreign 2026",
  },
  "/post/super-mario-galaxy-movie-2026-bilheteria": {
    title: "Super Mario Galaxy: O Filme — US$ 372 Milhões de Abertura e o Futuro do Nintendo Cinematic Universe",
    description: "Super Mario Galaxy: O Filme abriu com US$ 372 milhões mundiais no primeiro fim de semana. Review completa e o futuro do Nintendo Cinematic Universe.",
    keywords: "Super Mario Galaxy filme 2026, Mario Galaxy movie bilheteria, Nintendo Cinematic Universe, filme Mario Galaxy review, Nintendo Animation movie 2026, NCU futuro",
  },
  "/post/nintendo-switch-2-guia-completo-2026": {
    title: "Nintendo Switch 2: Guia Completo — Preço (R$ 4.500), Todos os Jogos, Specs e Vale a Pena?",
    description: "Nintendo Switch 2 guia completo: preço no Brasil (R$ 4.500), todos os jogos de lançamento, especificações técnicas, Joy-Con 2 e análise de vale a pena comprar.",
    keywords: "Nintendo Switch 2 guia completo, Switch 2 preço Brasil R$ 4500, Switch 2 jogos lançamento, Nintendo Switch 2 specs, Switch 2 vale a pena comprar, Mario Kart World Switch 2",
  },
  "/post/zelda-ocarina-of-time-remake-switch-2-2026": {
    title: "Zelda: Ocarina of Time Remake — Tudo que Sabemos sobre o Retorno do Melhor Jogo da História no Switch 2",
    description: "Zelda: Ocarina of Time Remake — data, plataforma Switch 2, o que vai mudar, comparativo com o original e por que é o remake mais aguardado da Nintendo.",
    keywords: "Zelda Ocarina of Time Remake, Ocarina of Time Switch 2, Zelda OOT remake 2026, melhor jogo história remake, Nintendo Switch 2 Zelda, Ocarina of Time gráficos novos",
  },
  "/post/ac-1-altair-terra-santa-1191": {
    title: "Assassin's Creed 1 em 2026: Review Completa — Altaïr Ibn-La'Ahad e a Terra Santa",
    description: "Assassin's Creed 1 vale a pena em 2026? Review completa do jogo original: Altaïr Ibn-La'Ahad, Terra Santa 1191, Terceira Cruzada, Templários históricos, Animus, parkour livre e social stealth, Maçã do Éden, custo-benefício.",
    keywords: "Assassin's Creed 1, AC 1 review 2026, Altaïr Ibn-La'Ahad, Terra Santa 1191, Terceira Cruzada jogo, AC original vale a pena, Animus origem, parkour AC1, social stealth, Templários históricos, Maçã do Éden, Ubisoft Montreal AC 1, inicio franquia AC",
  },
  "/post/ia-remasterizacao-jogos-classicos": {
    title: "IA e Remasterização de Jogos Clássicos: DLSS 4.5, FSR 4 e o Futuro dos Games",
    description: "DLSS 4.5 preferido à resolução nativa em 7.000 testes cegos (ComputerBase, fev/2026). FSR 4: 15% mais eficiente. RTX Remix, AI NPC, NVIDIA ACE e o debate sobre fidelidade original vs melhoria técnica.",
    keywords: "IA remasterização jogos 2026, DLSS 4.5 vs FSR 4, DLSS 4.5 teste cego ComputerBase, FSR 4 AMD RDNA 4, RTX Remix open source, NVIDIA ACE NPC, upscaling IA 4K, machine learning games, remasterização vs remake, jogos clássicos IA 2026",
  },
  "/post/ac-2-ezio-italia-renascentista": {
    title: "Assassin's Creed II em 2026: Review Completa — Ezio Auditore e a Itália Renascentista",
    description: "Assassin's Creed II vale a pena em 2026? Review completa: Ezio Auditore, Itália Renascentista, Florença e Veneza, Conspiração dos Pazzi, Leonardo da Vinci, Glifos e Minerva, DLCs, Ezio Collection, requisitos de PC e custo-benefício.",
    keywords: "Assassin's Creed 2, AC 2 review 2026, Ezio Auditore, Itália Renascentista jogo, Florença Veneza AC2, Leonardo da Vinci AC, Conspiração Pazzi, Rodrigo Borgia, Ezio Collection, AC2 PC requisitos, Ubisoft Montreal, AC 2 vale a pena 2026, Glifos Minerva",
  },
  "/post/ac-3-remastered-revolucao-americana": {
    title: "Assassin's Creed III Remastered em 2026: Review Completa — Revolução Americana com Connor Kenway",
    description: "Assassin's Creed III Remastered vale a pena em 2026? Review completa: Revolução Americana, Connor Kenway Mohawk, Saga Kenway, DLC Tirania do Rei Washington, AC Liberation incluso, requisitos de PC e custo-benefício.",
    keywords: "Assassin's Creed III Remastered, AC 3 review 2026, Connor Kenway, Revolução Americana jogo, Saga Kenway, Tirania Rei Washington DLC, AC Liberation Remastered, AC3 PC requisitos, Ubisoft Montreal, Haytham Kenway, George Washington AC, AC3 vale a pena 2026",
  },
  "/post/ac-black-flag-melhor-jogo-piratas": {
    title: "Assassin's Creed IV Black Flag em 2026: Review Completa — Ainda o Melhor Jogo de Piratas?",
    description: "Assassin's Creed IV Black Flag ainda vale a pena em 2026? Review completa: Era de Ouro da Pirataria, Edward Kenway, combate naval Jackdaw, Sea Shanties, DLC Freedom Cry, piratas históricos, requisitos de PC e custo-benefício.",
    keywords: "Assassin's Creed Black Flag, AC Black Flag review 2026, Edward Kenway, melhor jogo piratas, Jackdaw navio, Sea Shanties, Barba Negra jogo, Nassau piratas, Freedom Cry DLC, Black Flag PC requisitos, Ubisoft Montreal, Era de Ouro Pirataria, AC Black Flag vale a pena",
  },
  "/post/ac-brotherhood-ezio-roma-borgia": {
    title: "Assassin's Creed Brotherhood em 2026: Review Completa — Ezio Reconstrói a Irmandade em Roma",
    description: "Assassin's Creed Brotherhood vale a pena em 2026? Review completa: Ezio Auditore em Roma, Cesare Borgia, sistema de recrutamento de Assassinos, máquinas de Leonardo da Vinci, multijogador, Ezio Collection, requisitos de PC e custo-benefício.",
    keywords: "Assassin's Creed Brotherhood, AC Brotherhood review 2026, Ezio Roma, Cesare Borgia, recrutamento Assassinos, Leonardo da Vinci AC, Ezio Collection, Brotherhood multijogador, AC Brotherhood PC, Ubisoft Montreal, Brotherhood vale a pena, Borgia torres Roma",
  },
  "/post/ac-mirage-retorno-raizes-bagda": {
    title: "Assassin's Creed Mirage em 2026: Review Completa — Furtividade Clássica em Bagdá",
    description: "Assassin's Creed Mirage vale a pena em 2026? Review completa de AC Mirage: Bagdá do século IX, furtividade clássica, Basim Ibn Ishaq, ferramentas do assassino, Assassin's Focus, requisitos de PC e custo-benefício.",
    keywords: "Assassin's Creed Mirage, AC Mirage review 2026, Basim Ibn Ishaq, Bagdá século IX, furtividade AC, Mirage PC requisitos, Era de Ouro Islã jogo, Ubisoft Bordeaux, Assassin's Focus, AC Mirage vale a pena, AC clássico stealth, Ocultos Assassinos",
  },
  "/post/ac-odyssey-odisseia-grecia": {
    title: "Assassin's Creed Odyssey em 2026: Review Completa — RPG Épico na Grécia Antiga",
    description: "Assassin's Creed Odyssey vale a pena em 2026? Review completa: Guerra do Peloponeso, Kassandra vs Alexios, Culto de Kosmos, criaturas mitológicas, DLCs Fate of Atlantis e Legacy of the First Blade, requisitos de PC e custo-benefício.",
    keywords: "Assassin's Creed Odyssey, AC Odyssey review 2026, Kassandra ou Alexios, Grécia Antiga jogo, Culto de Kosmos, Fate of Atlantis DLC, Guerra do Peloponeso, Misthios, AC Odyssey PC requisitos, Ubisoft Quebec, mitologia grega jogo, Odyssey vale a pena 2026",
  },
  "/post/ac-origins-renascimento-franquia-egito": {
    title: "Assassin's Creed Origins em 2026: Review Completa — Renascimento da Franquia no Egito Antigo",
    description: "Assassin's Creed Origins vale a pena em 2026? Review completa de AC Origins: Egito Ptolemaico, Bayek de Siwa, Cleópatra, Júlio César, Discovery Tour educativo, DLCs Hidden Ones e Curse of the Pharaohs, requisitos de PC e custo-benefício.",
    keywords: "Assassin's Creed Origins, AC Origins review 2026, Bayek de Siwa, Egito Antigo jogo, Cleópatra AC, Discovery Tour Egito, Hidden Ones DLC, Curse of the Pharaohs, AC Origins PC requisitos, Ubisoft Montreal, AC Origins vale a pena, Ocultos fundação, Egito Ptolemaico game",
  },
  "/post/ac-revelations-ezio-constantinopla": {
    title: "Assassin's Creed Revelations em 2026: Review Completa — Ezio em Constantinopla e o Fim de Altaïr",
    description: "Assassin's Creed Revelations vale a pena em 2026? Review completa: Ezio em Constantinopla otomana, o legado de Altaïr Ibn-La'Ahad, gancho-lâmina, craft de bombas, Sofia Sartor, DLC The Lost Archive, Ezio Collection, requisitos de PC e custo-benefício.",
    keywords: "Assassin's Creed Revelations, AC Revelations review 2026, Ezio Constantinopla, Altaïr legado, fim trilogia Ezio, Sofia Sartor, gancho lâmina AC, Ezio Collection, AC Revelations PC, Ubisoft Montreal, Revelations vale a pena, Cesare Borgia, Império Otomano jogo",
  },
  "/post/ac-rogue-assassino-templario": {
    title: "Assassin's Creed Rogue em 2026: Review Completa — Jogue Como Templário",
    description: "Assassin's Creed Rogue vale a pena em 2026? Review completa de AC Rogue: narrativa de Shay Cormac, navegação ártica no Morrigan, sistema Anti-Assassino, requisitos de PC leves e custo-benefício.",
    keywords: "Assassin's Creed Rogue, AC Rogue review 2026, Shay Cormac templário, Morrigan navio AC, Rogue PC requisitos, AC Rogue vale a pena, saga Kenway, AC Rogue Ártico, Ubisoft Sofia, AC Rogue remastered, assassinos vs templários, AC Rogue comprar",
  },
  "/post/ac-shadows-japao-feudal": {
    title: "Assassin's Creed Shadows em 2026: Review Completa — Japão Feudal, Naoe e Yasuke",
    description: "Assassin's Creed Shadows vale a pena em 2026? Review completa: Japão Feudal no período Sengoku, protagonistas Naoe (shinobi) e Yasuke (samurai), estações dinâmicas, iluminação global, DLC Claws of Awaji, requisitos de PC pesados e custo-benefício.",
    keywords: "Assassin's Creed Shadows, AC Shadows review 2026, Naoe shinobi, Yasuke samurai, Japão Feudal jogo, período Sengoku AC, Oda Nobunaga game, estações dinâmicas AC, Shadows PC requisitos, Ubisoft Quebec, AC Shadows vale a pena, samurai africano jogo, Claws of Awaji DLC",
  },
  "/post/ac-syndicate-revolucao-industrial-londres": {
    title: "Assassin's Creed Syndicate em 2026: Review Completa — Londres Vitoriana e Sistema de Gangues",
    description: "Assassin's Creed Syndicate vale a pena em 2026? Review completa de AC Syndicate: Londres vitoriana, irmãos Jacob e Evie Frye, sistema de gangues Rooks vs Blighters, DLC Jack the Ripper, requisitos de PC e custo-benefício.",
    keywords: "Assassin's Creed Syndicate, AC Syndicate review 2026, Jacob Frye, Evie Frye, Rooks gangue, Blighters, Londres vitoriana jogo, Jack the Ripper DLC, AC Syndicate PC requisitos, gancho de corda AC, Era Vitoriana game, Ubisoft Quebec, AC Syndicate vale a pena",
  },
  "/post/ac-unity-jogo-frente-tempo-paris": {
    title: "Assassin's Creed Unity em 2026: Review Completa — O Melhor Parkour da Franquia em Paris",
    description: "Assassin's Creed Unity vale a pena em 2026? Review completa de AC Unity: Revolução Francesa, melhor parkour da série, co-op 4 jogadores, DLC Dead Kings gratuita, requisitos de PC e custo-benefício.",
    keywords: "Assassin's Creed Unity, AC Unity review 2026, AC Unity parkour, Revolução Francesa jogo, Arno Dorian, AC Unity PC requisitos, Unity co-op, Dead Kings DLC, Ubisoft Montreal, AC Unity vale a pena, Paris jogo histórico, Unity multidão NPCs",
  },
  "/post/ac-valhalla-jornada-epica-eivor": {
    title: "Assassin's Creed Valhalla em 2026: Review Completa — RPG Viking na Inglaterra Medieval",
    description: "Assassin's Creed Valhalla vale a pena em 2026? Review completa: Era Viking, Eivor, assentamento Ravensthorpe, DLCs Wrath of the Druids, Siege of Paris e Dawn of Ragnarök, requisitos de PC, custo-benefício e comparativo com Odyssey.",
    keywords: "Assassin's Creed Valhalla, AC Valhalla review 2026, Eivor Viking, Ravensthorpe assentamento, Dawn of Ragnarök DLC, Era Viking Inglaterra, Ordem dos Antigos, Valhalla PC requisitos, Ubisoft Montreal, AC Valhalla vale a pena, RPG viking, Valhalla vs Odyssey",
  },
  "/post/ranking-melhor-assassins-creed-2026": {
    title: "Ranking: Qual o Melhor Assassin's Creed para Jogar em 2026? Top 10 Definitivo",
    description: "Qual o melhor Assassin's Creed para jogar em 2026? Ranking completo com os 10 melhores títulos da franquia: critérios de avaliação, por onde começar, dicas para iniciantes e veteranos, e análise editorial do Marcos.",
    keywords: "melhor Assassin's Creed 2026, ranking AC 2026, qual AC jogar primeiro, Assassin's Creed ordem, melhores jogos AC, AC Valhalla Shadows Odyssey ranking, por onde começar Assassin's Creed, franquia AC completa, AC Black Flag melhor pirata, AC Unity melhor parkour",
  },
  "/post/avatar-2009-filme-revolucionou-tecnologia": {
    title: "Avatar 2009: O Filme que Revolucionou o Cinema 3D e a Tecnologia de CGI",
    description: "Como Avatar (2009) de James Cameron revolucionou o cinema: tecnologia 3D estereoscópico, motion capture facial, biologia de Pandora e o impacto duradouro na indústria cinematográfica.",
    keywords: "Avatar 2009 tecnologia, Avatar James Cameron revolução, Avatar CGI 2009, 3D cinema Avatar, motion capture Avatar, Pandora biologia, Avatar bilheteria recorde, Avatar impacto tecnologia cinema",
  },
  "/post/avatar-3-fogo-cinzas-lado-sombrio-pandora": {
    title: "Avatar 3: Fire and Ash — Tudo Sobre o Filme, Data e O Que Esperar",
    description: "Avatar 3: Fire and Ash — data de lançamento, enredo, clã Ash People, personagens novos, conexão com Avatar 1 e 2, e o que esperar do terceiro filme de James Cameron.",
    keywords: "Avatar 3 Fire and Ash, Avatar 3 data lançamento, Avatar 3 enredo, Ash People Avatar 3, James Cameron Avatar 3, Avatar 3 2025, Pandora Fire and Ash, Avatar 3 cinema",
  },
  "/post/avatar-caminho-da-agua-fisica-fluidos": {
    title: "Avatar 2: O Caminho da Água — A Revolução em CGI e Simulação de Fluidos",
    description: "Avatar 2: O Caminho da Água revolucionou o cinema com simulação de fluidos em tempo real, captura de movimento subaquática e tecnologia 3D HFR. Análise técnica completa.",
    keywords: "Avatar Caminho da Água tecnologia, Avatar 2 CGI revolução, simulação fluidos Avatar 2, captura movimento subaquática, Avatar 2 HFR, O Caminho da Água efeitos especiais, James Cameron tecnologia",
  },
  "/post/avatar-frontiers-pandora-ubisoft-review": {
    title: "Avatar: Frontiers of Pandora em 2026: Review Completa — Vale a Pena?",
    description: "Avatar: Frontiers of Pandora vale a pena em 2026? Review completa: mundo aberto de Pandora, gráficos next-gen, gameplay Na'vi, requisitos de PC pesados e custo-benefício.",
    keywords: "Avatar Frontiers of Pandora review 2026, Frontiers of Pandora vale a pena, Avatar jogo PC, Pandora mundo aberto, Avatar Ubisoft review, Frontiers of Pandora requisitos PC",
  },
  "/post/crimson-desert-builds-guia-2026": {
    title: "Crimson Desert: Guia de Builds 2026 — Melhores Configurações para Kliff",
    description: "Guia completo de builds para Crimson Desert 2026: melhores configurações de atributos, habilidades e equipamentos para Kliff em cada estilo de jogo.",
    keywords: "Crimson Desert builds 2026, builds Kliff Crimson Desert, melhores builds Crimson Desert, guia builds CD, Crimson Desert atributos habilidades",
  },
  "/post/crimson-desert-combate-blackspace-engine": {
    title: "Crimson Desert: Sistema de Combate — Blackspace Engine Explicado",
    description: "Como funciona o combate de Crimson Desert com a Blackspace Engine: física de impacto real, sistema de postura, combos, dodges e como dominar a mecânica do jogo.",
    keywords: "Crimson Desert combate, Blackspace Engine combate, sistema combate Crimson Desert, física combate CD, como jogar Crimson Desert combate, Pearl Abyss Blackspace",
  },
  "/post/crimson-desert-guia-completo": {
    title: "Crimson Desert: Guia Completo 2026 — Tudo que Você Precisa Saber",
    description: "Guia completo de Crimson Desert 2026: história, personagens, combate, mapa de Pywel, builds, bosses, requisitos de PC e tudo que você precisa para jogar.",
    keywords: "Crimson Desert guia completo 2026, guia CD 2026, Crimson Desert tudo, Pearl Abyss Crimson Desert, Crimson Desert dicas, Crimson Desert Kliff guia, mundo Pywel Crimson Desert",
  },
  "/post/crimson-desert-mapa-regioes-pywel": {
    title: "Crimson Desert: Mapa de Pywel — Todas as Regiões, Segredos e Pontos de Interesse",
    description: "Guia completo do mapa de Pywel em Crimson Desert: todas as regiões, zonas de boss, pontos de interesse, segredos escondidos e como navegar pelo mundo aberto.",
    keywords: "Crimson Desert mapa Pywel, regiões Crimson Desert, mapa CD 2026, Pywel zonas Crimson Desert, segredos mapa Crimson Desert, pontos interesse CD, mundo aberto Pywel",
  },
  "/post/crimson-desert-patches-atualizacoes-2026": {
    title: "Crimson Desert: Todas as Atualizações e Patches de 2026",
    description: "Acompanhe todas as atualizações e patches de Crimson Desert em 2026: correções de bugs, balanceamento, novos conteúdos e melhorias de performance adicionadas pela Pearl Abyss.",
    keywords: "Crimson Desert patches 2026, atualizações Crimson Desert, Crimson Desert update 2026, Pearl Abyss patches CD, Crimson Desert hotfix correções, Crimson Desert notas de versão",
  },
  "/post/crimson-desert-personagens-kliff-damiane-oongka": {
    title: "Crimson Desert: Kliff, Damiane e Oongka — Guia Completo dos 3 Personagens Jogáveis",
    description: "Guia completo dos 3 personagens jogáveis de Crimson Desert: Kliff, Damiane e Oongka — habilidades, estilos de jogo, builds recomendadas e como alternar entre eles.",
    keywords: "Crimson Desert personagens, Kliff Crimson Desert, Damiane personagem, Oongka guia, três personagens Crimson Desert, builds personagens Crimson Desert 2026",
  },
  "/post/crimson-desert-review-2026": {
    title: "Crimson Desert: Review Completa 2026 — Vale a Pena Comprar?",
    description: "Crimson Desert vale a pena em 2026? Review completa do RPG de ação da Pearl Abyss: gráficos, combate Blackspace Engine, mundo de Pywel, duração e custo-benefício.",
    keywords: "Crimson Desert review 2026, Crimson Desert vale a pena, CD review completo, Pearl Abyss Crimson Desert análise, Crimson Desert nota review, Crimson Desert comprar 2026",
  },
  "/post/crimson-desert-vendas-review-completo-2026": {
    title: "Crimson Desert: Análise de Vendas e Review Comercial 2026",
    description: "Como foi o desempenho comercial de Crimson Desert em 2026? Análise de vendas, recepção crítica, comparativo com concorrentes e perspectivas futuras da Pearl Abyss.",
    keywords: "Crimson Desert vendas 2026, Crimson Desert sucesso comercial, Pearl Abyss resultados, Crimson Desert desempenho mercado, CD vendas lançamento, Crimson Desert recepção",
  },
  "/post/baldurs-gate-3-review-2026": {
    title: "Baldur's Gate 3 em 2026: Ainda o Melhor RPG da Geração? Review Completa e Vale a Pena",
    description: "Baldur's Gate 3 ainda vale a pena em 2026? Review completa: classes, co-op, DLC, melhorias pós-lançamento, requisitos de PC e por que é considerado o melhor RPG da geração.",
    keywords: "Baldur's Gate 3 review 2026, BG3 vale a pena 2026, Baldur Gate 3 PC requisitos, Larian Studios RPG, BG3 classes builds, BG3 cooperativo, melhor RPG 2024 2025",
  },
  "/post/diablo-iv-lord-of-hatred-2026": {
    title: "Diablo IV: Lord of Hatred — Guia Completo: Paladin, Warlock, Skovos e Novo Endgame",
    description: "Diablo IV: Lord of Hatred — guia completo da expansão 2026: nova classe Paladin, Warlock, região de Skovos, novo endgame, mecânicas e tudo que muda no jogo.",
    keywords: "Diablo IV Lord of Hatred, Diablo 4 expansão 2026, Paladin Diablo 4, Warlock Diablo IV, Skovos region Diablo, Lord of Hatred guia completo, Blizzard Diablo 2026",
  },
  "/post/dragon-age-veilguard-review-2026": {
    title: "Dragon Age: The Veilguard em 2026 — Review Completa e Vale a Pena?",
    description: "Dragon Age: The Veilguard vale a pena em 2026? Review completa: Rook, companheiros, sistema de combate em tempo real, encerramento da saga de Thedas e custo-benefício.",
    keywords: "Dragon Age Veilguard review 2026, Veilguard vale a pena, Dragon Age The Veilguard análise, Rook protagonista, Dragon Age 4 review, BioWare Dragon Age 2026, Veilguard companheiros",
  },
  "/post/gta-vi-guia-completo-2026": {
    title: "GTA VI: Guia Completo 2026 — Data, Plataformas, Personagens Lucia e Jason e Tudo que Sabemos",
    description: "GTA VI guia completo 2026: data de lançamento confirmada, plataformas, protagonistas Lucia e Jason, estado de Leonida, Vice City e tudo que a Rockstar revelou.",
    keywords: "GTA VI guia completo, GTA 6 data lançamento, GTA VI Lucia Jason, Vice City GTA 6, GTA VI PC PS5 Xbox, Rockstar Games GTA 6 2026, GTA VI Leonida",
  },
  "/post/gta-vi-novembro-2026-vice-city-leonida": {
    title: "GTA VI: Data Confirmada para Novembro 2026 — Leonida, Lucia, Jason e o Maior Jogo da Década",
    description: "GTA VI tem data confirmada para novembro de 2026. Tudo sobre Leonida, Lucia, Jason e por que é o jogo mais aguardado da história da Rockstar Games.",
    keywords: "GTA VI novembro 2026, GTA 6 data confirmada, GTA VI Leonida estado, Lucia protagonista GTA 6, Jason GTA VI, Vice City GTA 6, Rockstar Games novembro 2026",
  },
  "/post/hell-let-loose-simulador-guerra": {
    title: "Hell Let Loose em 2026: Review Completa — O Simulador de Guerra Mais Realista Vale a Pena?",
    description: "Hell Let Loose vale a pena em 2026? Review completa do simulador tático de Segunda Guerra: 100 jogadores, teatro europeu, sistema de recursos, comunicação vocal e requisitos de PC.",
    keywords: "Hell Let Loose review 2026, Hell Let Loose vale a pena, simulador guerra Segunda Guerra, HLL PC requisitos, Hell Let Loose 100 jogadores, HLL tático realista, Team17 Hell Let Loose 2026",
  },
  "/post/lancamentos-games-abril-2026": {
    title: "Lançamentos de Games em Abril de 2026: Pragmata, Saros, Hades 2 no Xbox e Muito Mais",
    description: "Lançamentos de games em abril de 2026: Pragmata (Capcom), Saros (Housemarque), Hades 2 no Xbox, e todos os jogos que chegam ao PC, PS5 e Xbox no mês.",
    keywords: "lançamentos games abril 2026, jogos novos abril 2026, Pragmata lançamento, Saros PS5 2026, Hades 2 Xbox abril, novos jogos PC abril 2026",
  },
  "/post/lego-batman-legacy-2026": {
    title: "LEGO Batman: Legacy of the Dark Knight — Guia Completo, Data de Lançamento e Tudo que Sabemos",
    description: "LEGO Batman: Legacy of the Dark Knight — guia completo do novo jogo anunciado para 2026: data de lançamento, plataformas, personagens, gameplay e tudo que sabemos.",
    keywords: "LEGO Batman Legacy 2026, jogo LEGO Batman maio 2026, Legacy of the Dark Knight game, LEGO Batman Switch PC, Ubisoft Batman 2026",
  },
  "/post/nintendo-switch-2-guia-2026": {
    title: "Nintendo Switch 2: Guia — Specs, Jogos de Lançamento e Vale a Pena Comprar em 2026?",
    description: "Nintendo Switch 2: Guia do novo console da Nintendo — specs, jogos de lançamento, preço no Brasil, comparativo com Switch 1 e análise de vale a pena comprar em 2026.",
    keywords: "Nintendo Switch 2 guia, Switch 2 specs 2026, jogos Nintendo Switch 2, Switch 2 vs Switch 1, Nintendo Switch 2 preço, Switch 2 lançamento jogos exclusivos",
  },
  "/post/saros-housemarque-ps5-2026": {
    title: "Saros (Housemarque): Review e Guia Completo — O Sucessor de Returnal no PS5",
    description: "Saros da Housemarque vale a pena em 2026? Review e guia do sucessor espiritual de Returnal: mundo aberto, ciclo temporal, combate bullet hell, exclusivo PS5.",
    keywords: "Saros Housemarque PS5, Saros review 2026, Saros sucessor Returnal, Housemarque Saros guia, Saros PS5 exclusivo, Saros gameplay bullet hell, Saros mundo aberto ciclo temporal",
  },
  "/post/vikings-legado-ragnar-lothbrok": {
    title: "Vikings: O Legado de Ragnar Lothbrok — História, Mitologia Nórdica e a Série de TV",
    description: "Conheça o legado histórico e cultural de Ragnar Lothbrok: a figura lendária dos Vikings, a Era Viking, a mitologia nórdica, a série History Channel e a influência em AC Valhalla.",
    keywords: "Vikings Ragnar Lothbrok, legado Vikings história, mitologia nórdica Ragnar, série Vikings History Channel, Era Viking cultura, Ragnar Lothbrok histórico, Vikings AC Valhalla, nórdicos raids história",
  },
  "/post/jujutsu-kaisen-temporada-4-culling-game-2026": {
    title: "Jujutsu Kaisen Temporada 4: Culling Game Part 2 — O Que Sabemos",
    description: "MAPPA confirmou JJK T4: Culling Game Part 2 em produção (mar 2026). Regras do Culling Game, colônias, Yuji, Megumi, Yuta, quando estreia e JUJU FES 2026. Disponível na Crunchyroll.",
    keywords: "Jujutsu Kaisen temporada 4, JJK T4, Culling Game Part 2, MAPPA JJK, Yuji Itadori, Megumi Fushiguro, Yuta Okkotsu, JJK anime 2026, Crunchyroll JJK, JUJU FES 2026, data estreia JJK T4",
  },
  "/post/melhores-jogos-anime-2026": {
    title: "Os Melhores Jogos de Anime 2026: Fighting, RPG, Visual Novel e Mobile",
    description: "Guia dos melhores jogos de anime 2026: Dragon Ball Sparking ZERO (5M+ cópias), FighterZ, One Piece Odyssey, Demon Slayer Hinokami, Steins;Gate visual novel, Genshin Impact, Blue Archive. Preços no Brasil e onde comprar.",
    keywords: "jogos anime 2026, Dragon Ball Sparking Zero, Dragon Ball FighterZ, One Piece Odyssey, Demon Slayer Hinokami Chronicles, Genshin Impact, Blue Archive, Steins Gate visual novel, jogos anime PS5 PC, preco regional Bandai Namco brasil",
  },
  "/post/tensura-guia-completo-temporadas-filmes": {
    title: "TenSura: Guia Completo — T1 a T4 (2026), Filmes, Spin-offs e Ordem",
    description: "Guia completo de TenSura (Fuse, 8bit): T1–T3, Tensura Nikki, filme Scarlet Bond, T4 confirmada abril 2026 (Grande Guerra de Tenma). Ordem de assistência completa e spin-offs. Disponível na Crunchyroll.",
    keywords: "TenSura guia completo, Tensei Shitara Slime ordem assistencia, TenSura T4 2026, Grande Guerra Tenma, Tensura Nikki, Slime Diaries, Scarlet Bond filme, 8bit estudio, Rimuru Tempest, Fuse light novel, Crunchyroll TenSura",
  },
  "/post/tensura-personagens-rimuru-demon-lords": {
    title: "TenSura: Personagens, Demon Lords, Octagram e True Dragons",
    description: "Guia completo dos personagens de TenSura: Rimuru, Milim, Diablo, Veldora, os 8 membros do Octagram, True Dragons e aliados externos como Hinata Sakaguchi. Com tabela de aparições por temporada.",
    keywords: "TenSura personagens, Rimuru Tempest, Milim Nava, Diablo TenSura, Veldora Tempest, Octagram Demon Lords, Guy Crimson, Ramiris, Luminous Valentine, Hinata Sakaguchi, True Dragons TenSura, aliados Tempest",
  },
  "/post/overlord-ainz-guardians-personagens": {
    title: "Overlord: Ainz, Floor Guardians, Pleiades e Personagens do Novo Mundo",
    description: "Fichas completas de Overlord: Albedo, Demiurge, Shalltear, Cocytus, Aura e Mare, Sebas, Pandora's Actor. Personagens do Novo Mundo: Climb, Brain Unglaus, Gazef Stronoff. Hierarquia de Nazarick.",
    keywords: "Overlord personagens, Ainz Ooal Gown, Albedo Overlord, Demiurge Overlord, Shalltear Bloodfallen, Sebas Tian, Pandora Actor, Climb Overlord, Gazef Stronoff, Floor Guardians Nazarick, Pleiades Overlord",
  },
  
  // ═══════════════════════════════════════════════════════════
  // CATEGORIA: OTAKU — 31 posts
  // ═══════════════════════════════════════════════════════════
  "/post/solo-leveling-guia-completo-temporadas": {
    title: "Solo Leveling: Manhwa, Anime T1 e T2, Ragnarok e Impacto na Indústria",
    description: "Solo Leveling completo: manhwa Chugong/DUBU (14,4bi views Kakao, 179 caps). Anime A-1 Pictures T1 (2024), T2 Arise from Shadow (2025), ReAwakening (nov 2024). Ragnarok, impacto global e edição física Panini Brasil.",
    keywords: "Solo Leveling guia, Sung Jinwoo Shadow Monarch, manhwa DUBU Chugong, A-1 Pictures Solo Leveling, Solo Leveling T2 Arise Shadow 2025, ReAwakening novembro 2024, Ragnarok Suho Sung, Crunchyroll Anime Awards 2025, Panini Solo Leveling PT",
  },
  "/post/tsukimichi-moonlit-fantasy-guia-completo": {
    title: "Tsukimichi Moonlit Fantasy: T1 (C2C) e T2 (J.C.Staff) — Guia Completo",
    description: "Tsukimichi: Makoto Misumi banido pela deusa, acompanhado de Tomoe e Mio. T1 C2C (2021), T2 J.C.Staff (2024, Crunchyroll). Sistema de maná e contratos, os dois mundos, análise da dinâmica Tomoe/Mio além do harem.",
    keywords: "Tsukimichi Moonlit Fantasy, Makoto Misumi, Tomoe Tsukimichi, Mio aranha negra, C2C anime 2021, J.C.Staff T2 2024, Azumi Kei Alphapolis, Comic Alive mangá, Crunchyroll Tsukimichi, isekai dois mundos, contratos servidao",
  },
  "/post/mugen-gacha-level-9999-traicao-dungeon": {
    title: "My Gift Lvl 9999 Unlimited Gacha: Revenge Isekai J.C.Staff — Guia 2026",
    description: "Mugen Gacha: Light traído no Abismo usa Gacha Ilimitada para invocar aliadas nível 9999. J.C.Staff (out-dez 2025, HIDIVE/Muse). Subgênero revenge isekai, Mei, hierarquia de raças e onde assistir.",
    keywords: "Mugen Gacha, My Gift Lvl 9999, Shinjiteita Nakamatachi, Light protagonista, revenge isekai 2025, J.C.Staff outubro 2025, HIDIVE Sentai, Muse Communication, gacha isekai 9999, abismo dungeon traicao",
  },
  "/post/kizoku-tensei-noble-reincarnation-guia": {
    title: "Noble Reincarnation (Kizoku Tensei): 13º Filho do Imperador — Guia 2026",
    description: "Kizoku Tensei anime CompTown (jan 2026, 12 eps, Crunchyroll). Noah Ararat, cap infinito, absorção de lealdade, política imperial. Nazuna Miki/SB Creative GA Novel. Comparativo com isekais de nobre.",
    keywords: "Kizoku Tensei, Noble Reincarnation, Noah Ararat 13 filho imperador, cap nivel infinito, absorção lealdade, CompTown anime 2026, Michio Fukuda diretor, SB Creative GA Novel, Manga UP Square Enix, Crunchyroll inverno 2026",
  },
  "/post/isekai-nonbiri-nouka-farming-life-guia": {
    title: "Farming Life in Another World: T1 e T2 (Abr 2026) — Guia Completo",
    description: "Isekai Nonbiri Nouka: Hiraku Machio com Ferramenta Universal de Fazenda. T1 Zero-G (jan-mar 2023, Amazon Prime). T2 confirmada abril 2026. Loo vampira, elfas, dragões. Kinosuke Naito/Enterbrain.",
    keywords: "Isekai Nonbiri Nouka, Farming Life Another World, Hiraku Machio, Ferramenta Universal Fazenda, Zero-G anime 2023, Temporada 2 abril 2026, Amazon Prime Video farming life, Loo vampira, Kinosuke Naito, Yasumo ilustradora",
  },
  "/post/maousama-retry-demon-lord-guia-completo": {
    title: "Demon Lord Retry! Guia: Original 2019 e Retry R — Hakuto Kunai e Aku",
    description: "Maou-sama Retry!: Akira Oono reencarnado como Hakuto Kunai, rei demônio de seu MMORPG. Ekachi Epilka (2019) e Retry R (Studio Geek Toys, Crunchyroll). Aku, dinâmica central e diferenças entre as versões.",
    keywords: "Maou-sama Retry, Demon Lord Retry, Hakuto Kunai, Aku personagem, Akira Oono MMORPG, Ekachi Epilka 2019, Retry R Studio Geek Toys, Crunchyroll Maousama, Kurone Kanzaki Futabasha, rei demonio isekai programador",
  },
  "/post/okiraku-ryoushu-territory-defense-guia": {
    title: "Easygoing Territory Defense: Van e a Magia de Produção — Guia 2026",
    description: "Okiraku Ryoushu anime NAZ (jan 2026, 12 eps, Crunchyroll). Van usa Magia de Produção para defender território. Sou Akaike/Overlap Novels. Seven Seas Entertainment. Comparativo com TenSura, Overlord.",
    keywords: "Okiraku Ryoushu, Easygoing Territory Defense, Van Magia de Producao, NAZ estudio 2026, Sou Akaike Overlap, Seven Seas Entertainment ingles, Crunchyroll inverno 2026, Tetsuya Tatamitani, territorio defesa isekai, Maro Aoiro manga",
  },
  "/post/kaiju-no-8-temporada-2-guia-arco-final-2026": {
    title: "Kaiju No. 8 T2: Defense Force, Arco Final do Mangá e Personagens",
    description: "Kaiju No. 8 T2 Production I.G (Spring 2026): Kafka Hibino, Mina Ashiro, Kikoru Shinomiya. Sistema Defense Force (Numerations, Neutralizers), arco final do mangá (Jump Festa 2025) e onde assistir.",
    keywords: "Kaiju No 8 temporada 2, Kafka Hibino, Mina Ashiro, Kikoru Shinomiya, Defense Force Japão, Neutralizers kaiju, Naoya Matsumoto manga, Production I.G 2026, Crunchyroll Kaiju No 8, arco final Jump Festa 2025",
  },
  "/post/ia-transformando-dublagem-animes": {
    title: "IA na Dublagem de Animes: Voice Cloning, ElevenLabs e o Futuro da Localização",
    description: "ElevenLabs: 29 idiomas, clonagem de 1 min de áudio. SAG-AFTRA: 4 meses de greve até acordos com 80 empresas de games. Sated-SP, PL 2338 e por que a dublagem clássica brasileira é patrimônio insubstituível.",
    keywords: "IA dublagem animes, voice cloning dublagem, ElevenLabs 29 idiomas, SAG-AFTRA acordo IA voz 2024, Sated SP manifesto IA dublagem, PL 2338 voz dublador, Microsoft VALL-E, Rask AI Dubverse, dublagem brasileira IA patrimônio, Goku Wendel Bezerra",
  },
  "/post/dragon-ball-super-beerus-anime-confirmado-2026": {
    title: "Dragon Ball Super: Série Beerus Confirmada — Pós-Toriyama e o Que Esperar",
    description: "Toei Animation confirmou série anime focada em Beerus, Deus da Destruição. Contexto pós-Akira Toriyama (falecido março 2024), Toyotaro na supervisão. Battle of Gods (2013), Dragon Ball Super e o futuro da franquia.",
    keywords: "Dragon Ball Beerus anime, Dragon Ball Super Beerus, Akira Toriyama legado, Toyotaro Dragon Ball, Toei Animation Dragon Ball 2026, Beerus Deus Destruicao, Whis, Dragon Ball pós Toriyama, Battle of Gods 2013",
  },
  "/post/naruto-especiais-confirmados-2026": {
    title: "Naruto Especiais 2026: Sasuke Retsuden, Konoha Shinden e Studio Pierrot",
    description: "Naruto especiais 2026 adaptam light novels Sasuke Retsuden e Konoha Shinden (Studio Pierrot, TV Tokyo, Crunchyroll). Legado de Naruto no Brasil (Panini, Cartoon Network), guia de fillers e onde assistir.",
    keywords: "Naruto especiais 2026, Sasuke Retsuden anime, Konoha Shinden anime, Studio Pierrot Naruto, Naruto light novel, Naruto Crunchyroll 2026, Panini Naruto brasil, guia fillers Shippuden, Naruto Boruto Two Blue Vortex",
  },
  "/post/big-three-naruto-bleach-one-piece-2026": {
    title: "Big Three em 2026: Status de One Piece, Bleach e Naruto — Legado e Números",
    description: "O Big Three em 2026: One Piece (530M cópias, Final Saga Elbaf), Bleach TYBW encerrado, Naruto especiais. Números reais, o 'novo Big Three' e por que a categoria não se repete no mercado fragmentado atual.",
    keywords: "Big Three anime 2026, One Piece Final Saga, Bleach TYBW encerrado, Naruto especiais 2026, 530 milhões cópias One Piece, Big Three status atual, novo Big Three JJK MHA Demon Slayer, Shonen Jump legado Big Three",
  },
  "/post/re-monster-anime-manga-guia-2026": {
    title: "Re:Monster: Guia Completo — Rou, Absorção, Anime Doga Kobo e Mangá",
    description: "Re:Monster: Rou reencarnado como goblin com absorção por consumo. Anime Doga Kobo (abr-jun 2024, Crunchyroll, nota 6.7 MAL). Mangá Monthly Comic Alive em andamento. Comparativo com TenSura e Goblin Slayer.",
    keywords: "Re:Monster anime, Re:Monster mangá, Rou goblin absorção, Kanekiru Kogitsune, Haruyoshi Kobayakawa, Doga Kobo 2024, Hiroshi Kimura diretor, Re:Monster Crunchyroll, J-Novel Club ingles, monster protagonist isekai, goblin isekai",
  },
  "/post/isekai-mokushiroku-mynoghra-guia-2026": {
    title: "Isekai Mokushiroku Mynoghra: Civilização Apocalíptica e Anime Wao World",
    description: "Mynoghra: Takuto Ira reencarna como rei de uma nação 4X apocalíptica que corrompe o terreno ao expandir. Atou Líder Corrupta. Anime Wao World anunciado out 2024. Meij/Kadokawa, mangá Kiyoshi Funatsu, Comic Alive.",
    keywords: "Isekai Mokushiroku Mynoghra, Mynoghra anime Wao World, Atou Líder Corrupta, Takuto Ira, isekai 4X civilizacao, corrupção terreno Mynoghra, Meij Kadokawa, Kiyoshi Funatsu manga, Monthly Comic Alive, MangaDex Mynoghra 2026",
  },
  "/post/animes-mais-aguardados-2026": {
    title: "Animes Mais Aguardados de 2026: Guia com Datas e Calendário AniList",
    description: "Os animes mais aguardados de 2026: Demon Slayer filmes arco final, One Piece Elbaf sazonal, JJK T4, Frieren T3. Como montar calendário de acompanhamento via AniList, LiveChart e estratégias para não perder estreias.",
    keywords: "animes mais aguardados 2026, Demon Slayer arco final filme Ufotable, One Piece Elbaf sazonal, JJK T4 MAPPA, Frieren T3 Madhouse, AniList calendário 2026, LiveChart anime, r/animebrasil Discord, AJA mercado anime 31 bilhões",
  },
  "/post/cultura-otaku-brasil-2026": {
    title: "Cultura Otaku no Brasil 2026: 2º Maior Mercado e Perfil da Comunidade",
    description: "O Brasil é o 2º maior mercado de mangá fora do Japão (Shueisha 2024). 120 mil na Anime Friends, CCXP, cosplay no WCS. Perfil do fã 2026: gerações sobrepostas, cosplay como profissão, dublagem e criadores de conteúdo.",
    keywords: "cultura otaku brasil 2026, segundo maior mercado manga fora Japão, Anime Friends 120 mil, perfil fa anime brasil, cosplay profissão brasil, dublagem anime brasil, criadores conteúdo anime YouTube brasil, Panini JBC Newpop brasil",
  },
  "/post/aprender-japones-anime-2026": {
    title: "Aprender Japonês com Anime em 2026: Método + Recursos em Português",
    description: "Método completo para aprender japonês com anime: Refold (Matt vs Japan), Anki, Yomitan, Migaku. Recursos em português: Japonês do Zero (YouTube), Discord Japonês para Brasileiros, pt.tae-kim.com. N4 e N3 possíveis em 2–3 anos.",
    keywords: "aprender japones anime 2026, Refold japones imersao, Matt vs Japan YouTube, Anki japones deck, Yomitan extensao browser, Migaku plataforma, Japones do Zero YouTube, Discord japones brasileiros, Japonês para Brasileiros, N3 N4 japones",
  },
  "/post/merchandising-otaku-colecionar-2026": {
    title: "Merchandising Otaku 2026: Colecionar, Importar, Mercado Secundário BR",
    description: "Guia completo 2026: Nendoroids, Figmas, Scale Figures. Como identificar bootlegs (holograma GSC). Importar via AmiAmi, Programa Remessa Conforme. Mercado secundário no Brasil: Mercado Livre, Mercari, Shopee. US$12,4bi em 2023.",
    keywords: "merchandising otaku 2026, Nendoroid brasil, Figma importar, bootleg como identificar holograma, Good Smile Company revendedor, AmiAmi Solaris importar, Programa Remessa Conforme 2026, Mercari Brasil otaku, mercado secundario figuras",
  },
  "/post/melhores-mangas-ler-2026": {
    title: "Os Melhores Mangás Para Ler em 2026: Guia com Ferramentas de Descoberta",
    description: "Guia completo dos melhores mangás 2026: FMA, Berserk, Chainsaw Man, Sakamoto Days. Como descobrir novos títulos via MyAnimeList, AniList, Manga Plus (3 caps gratuitos) e Reddit r/manga. JJK e MHA encerraram em 2024.",
    keywords: "melhores mangas 2026, mangás para ler, Fullmetal Alchemist, Berserk Miura, Chainsaw Man Fujimoto, Sakamoto Days, AniList manga descubrir, MyAnimeList ranking manga, Manga Plus 3 capitulos gratis, r/manga recomendacoes, Panini JBC 2026",
  },
  "/post/saude-mental-cultura-otaku-2026": {
    title: "Saúde Mental e Cultura Otaku: Identidade, Hikikomori e Bem-Estar Digital",
    description: "Análise baseada em evidências: cultura otaku como comunidade de pertencimento, hikikomori (dados Ministério Saúde Japão 2023), bem-estar digital (Orben/Przybylski Oxford), CVV (188) e CAPS. Welcome to the NHK e A Silent Voice.",
    keywords: "saude mental otaku, hikikomori brasil, CVV 188 gratuito, CAPS SUS saude mental, cultura otaku pertencimento, bem-estar digital anime, Welcome to NHK, A Silent Voice saude mental, Tamaki Saito hikikomori, pesquisa Oxford tempo tela",
  },
  "/post/manga-vs-anime-adaptacao-2026": {
    title: "Mangá vs Anime: Quando a Adaptação Supera o Original — Guia e Casos 2026",
    description: "O anime adiciona trilha, voice acting e movimento; o mangá tem detalhe estático e ritmo do leitor. FMA Brotherhood, Mushishi e Dandadan superam o original. Tokyo Ghoul, Berserk 2016 e Promised Neverland T2 decepcionam. Guia por franquia.",
    keywords: "manga vs anime adaptacao, FMA Brotherhood, Mushishi anime, Dandadan anime Science SARU, Tokyo Ghoul decepção, Berserk 2016 CGI, Promised Neverland T2, Solo Leveling adaptacao, Vinland Saga MAPPA, quando manga ou anime primeiro",
  },
  "/post/diferenca-mangas-manhuas-manhwas": {
    title: "Manga vs Manhwa vs Manhua: Diferenças, História e Melhores Títulos 2026",
    description: "Guia completo das diferenças entre manga japonês (Tezuka, PB&W, direita-esquerda), manhwa coreano (webtoon, Solo Leveling, full color) e manhua chinês (Xianxia, cultivo). Plataformas legais e onde ler no Brasil.",
    keywords: "diferenca manga manhwa manhua, manga japones Tezuka, manhwa coreano webtoon, manhua chines xianxia, Solo Leveling manhwa, One Piece manga, Battle Through Heavens manhua, Webtoon Bilibili Comics, MangaDex, historia manga 1947",
  },
  "/post/como-diferenciar-manhuas-manhwas": {
    title: "Como Diferenciar Manhwa Coreano de Manhua Chinês: 3 Perguntas que Resolvem",
    description: "Guia completo para diferenciar manhwa (coreano, webtoon, Solo Leveling) de manhua (chinês, Xianxia, Tales of Demons and Gods). Solo Leveling, Tower of God, Battle Through the Heavens. Plataformas legais e onde ler.",
    keywords: "diferenciar manhwa manhua, manhwa coreano webtoon, manhua chines xianxia, Solo Leveling manhwa, Tower of God webtoon, Tales of Demons Gods manhua, cultivo marcial, Bilibili Comics, Webtoon gratuito, MangaDex manhwa",
  },
  "/post/frieren-temporada-3-confirmada-2026": {
    title: "Frieren Temporada 3 Confirmada: Arcos do Norte e O Que o Mangá Reserva",
    description: "Frieren T3 confirmada em abril 2026 (Madhouse). O que a T2 cobriu (Exame Primeira Classe), arcos do Norte rumo a Aureole, Frieren, Fern, Stark e Lawine. Kanehito Yamada, nota 9,3 MAL.",
    keywords: "Frieren temporada 3, Frieren Beyond Journey End T3, Madhouse Frieren, Arcos Norte Aureole, Fern Frieren, Stark Frieren, Lawine Kanne, Kanehito Yamada Tsukasa Abe, nota 93 MAL, Weekly Shonen Sunday Frieren",
  },
  "/post/one-piece-elbaf-formato-sazonal-2026": {
    title: "One Piece Elbaf: Formato Sazonal, Usopp e o Que Esperar da Ilha dos Gigantes",
    description: "One Piece Elbaf estreou em abril 2026 no formato sazonal inédito (Toei Animation, Crunchyroll). Promessa de 30 anos, arco de Usopp, Big Mom e Joy Boy. Como assistir via One Pace ou Crunchyroll.",
    keywords: "One Piece Elbaf, One Piece formato sazonal, arco Elbaf 2026, Usopp Elbaf, Big Mom Elbaf, Toei Animation sazonal, Crunchyroll One Piece, One Pace site, promessa 30 anos Oda, Joy Boy Elbaf, Island of Giants",
  },
  "/post/spring-season-animes-abril-2026": {
    title: "Spring Season 2026: 66 Títulos, Calendário Semanal e Guia por Gênero",
    description: "Spring Season 2026 com 66 estreias: One Piece Elbaf, Re:ZERO T4, TenSura T4, Dr. STONE final, Lazarus (Watanabe). Calendário semanal, títulos além dos óbvios (Dandadan, Kaiju No.8 T2) e como gerenciar sem perder o prazer.",
    keywords: "spring season 2026 completo, 66 animes abril 2026, Dandadan segunda parte, Kaiju No 8 T2, Wistoria Wand Sword, Lazarus anime Netflix, como acompanhar anime temporada, AniList temporada 2026, Crunchyroll primavera 2026",
  },
  "/post/temporada-animes-abril-2026": {
    title: "Temporada de Animes Abril 2026: Calendário Completo da Spring Season",
    description: "Spring Season 2026: One Piece Elbaf (5 abr), Re:ZERO T4 (6 abr), TenSura T4 (7 abr), Dr. STONE final (12 abr), Lazarus Watanabe+MAPPA. Calendário semana a semana, guia de prioridade e onde assistir.",
    keywords: "temporada animes abril 2026, spring season 2026 completo, One Piece Elbaf estreia, ReZero T4 6 abril, TenSura T4 7 abril, Dr STONE Science World, Lazarus Watanabe MAPPA Netflix, Crunchyroll abril 2026, LiveChart anime 2026",
  },
  "/post/10-melhores-manhwas-sistema-2026": {
    title: "Os 10 Melhores Manhwas de Sistema: Solo Leveling, ORV e Mais — Guia 2026",
    description: "Guia completo dos melhores manhwas de sistema 2026: Solo Leveling, Omniscient Reader's Viewpoint, The Beginning After the End, Leveling With The Gods, Second Life Ranker. Como ler legalmente no Brasil.",
    keywords: "melhores manhwas sistema 2026, Solo Leveling, Omniscient Readers Viewpoint ORV, The Beginning After the End, Leveling With Gods, Second Life Ranker, manhwa sistema level up, Webtoon gratuito, Tapas manhwa, Panini Solo Leveling brasil",
  },
  "/post/isekai-2026-genero-domina": {
    title: "Isekai 2026: História, Subgêneros e Por Que Ainda Domina o Anime",
    description: "Análise do isekai em 2026: origem (Narou 2012–2014), subgêneros (sistema, construção de reino, regressão, slice-of-life, revenge), por que domina e os melhores para começar — Mushoku Tensei, TenSura, Re:Zero, KonoSuba.",
    keywords: "isekai 2026 historia, subgeneros isekai, isekai sistema, isekai construcao reino, isekai regressao, Narou isekai origem, Mushoku Tensei, TenSura melhor isekai, Re:Zero drama, KonoSuba isekai comédia, porque isekai domina anime",
  },
  "/post/one-piece-final-saga-2026": {
    title: "One Piece Final Saga: Egghead, Joy Boy, Void Century e o Que Elbaf Revela",
    description: "Final Saga de One Piece (desde cap 1057, 2022): revelações do Arco Egghead (Cinco Anciões, Joy Boy, Void Century), estado atual dos Chapéus de Palha e o que o arco de Elbaf deve revelar. 530M cópias, Eiichiro Oda.",
    keywords: "One Piece Final Saga, Arco Egghead revelacoes, Joy Boy One Piece, Void Century, Cinco Ancioes Gorosei poderes, One Piece Elbaf final saga, Chapéus de Palha 2026, Gear 5 Luffy Nika, Fruta Sol, Eiichiro Oda",
  },
  "/post/overlord-guia-completo-temporadas-ainz": {
    title: "Overlord: Guia Completo — T1–T4, Sacred Kingdom e Status da T5",
    description: "Overlord completo: T1–T4 Madhouse/Studio Kai, filme Sacred Kingdom (nov 2023). Ainz Ooal Gown como protagonista-vilão, Kugane Maruyama confirmou série não terminou. Ordem de assistência e onde encontrar no Brasil.",
    keywords: "Overlord guia completo, Overlord temporadas, Overlord Sacred Kingdom filme, Overlord T5 confirmado, Ainz Ooal Gown, Kugane Maruyama, Madhouse Studio Kai, Crunchyroll Overlord, JBC manga Overlord brasil, Yen Press Overlord ingles",
  },

  // ═══════════════════════════════════════════════════════════
  // CATEGORIA: FINANÇAS & INVESTIMENTOS — 19 posts
  // ═══════════════════════════════════════════════════════════
  "/post/anthropic-mythos-modelo-ia-google-investimento-2026": {
    title: "Anthropic, Mythos e Google: A Disputa pelo Futuro da IA Segura em 2026",
    description: "Google investiu US$ 2 bilhões na Anthropic. Mythos é o modelo mais avançado — acesso restrito via Project Glasswing. O que essa aliança muda para o ecossistema de IA e para o usuário brasileiro.",
    keywords: "Anthropic Google 2026, Mythos IA segura, corrida IA segura, Claude vs Gemini mercado, investimento Anthropic Google, AI safety 2026, IA segura empresas, Project Glasswing, Google DeepMind estratégia, Anthropic Series E",
  },
  "/post/openai-bilhoes-financiamento-record-2026": {
    title: "OpenAI Capta US$ 40 Bilhões: O Que Significa para o Futuro da IA",
    description: "SoftBank + consórcio em 31/março/2025. Valuation US$ 300B. Receita US$ 29,4B projetada para 2026. Fluxo de caixa positivo só em 2029. O que muda para devs brasileiros e toda a indústria de IA.",
    keywords: "OpenAI financiamento 2026, OpenAI 40 bilhões SoftBank, valuation OpenAI 300 bilhões, rodada Series OpenAI 2025, GPT-5 financiamento, OpenAI fluxo de caixa 2029, impacto API OpenAI Brasil, Anthropic vs OpenAI investimento, corrida AGI financiamento, Azure OpenAI latência Brasil",
  },
  "/post/openai-financiamento-2026": {
    title: "OpenAI Capta US$ 40 Bilhões em 2026: O Que Significa para o Futuro da IA",
    description: "Análise completa da rodada de US$ 40 bilhões da OpenAI em 2026: investidores, valuation, impacto no mercado de IA, o que muda para ChatGPT e o que isso diz sobre a corrida pela AGI.",
    keywords: "OpenAI financiamento 2026, OpenAI 40 bilhões, valuation OpenAI 2026, rodada Series E OpenAI, investimento IA 2026, SoftBank OpenAI, corrida AGI financiamento, ChatGPT futuro 2026, OpenAI vs Anthropic investimento",
  },

  "/post/mcp-model-context-protocol-2026": {
    title: "MCP (Model Context Protocol): O Padrão que Unifica os Agentes de IA em 2026",
    description: "10.000+ servidores MCP, 164M downloads/mês. Doado à Linux Foundation dez/2025. Anthropic comprou Stainless por US$ 300M. 72,8% dos ataques Tool Poisoning têm sucesso — como implementar com segurança.",
    keywords: "MCP Model Context Protocol 2026, Anthropic MCP Linux Foundation, servidores MCP públicos, Python SDK MCP downloads, HubSpot MCP, Conta Azul MCP, Tool Poisoning segurança MCP, OAuth 2.1 MCP, Claude Cursor MCP, A2A protocol Google, MCP Brasil implementação",
  },
};

const CATEGORY_KEYWORDS: Record<string, string[]> = {
  otaku: ["otaku", "anime", "mangá", "manhwa", "cultura japonesa", "cosplay", "japão", "light novel", "série anime", "comunidade otaku"],
  ia: ["inteligência artificial", "IA", "machine learning", "ChatGPT", "Gemini", "automação", "tecnologia", "deep learning", "IA generativa", "futuro da IA"],
  invest: ["investimentos", "finanças", "renda passiva", "educação financeira", "mercado financeiro", "bolsa de valores", "dinheiro", "economia", "poupança", "rentabilidade"],
  geek: ["geek", "games", "jogos", "cultura pop", "séries", "filmes", "tecnologia", "nerd", "entretenimento", "reviews"],
};

// Stopwords PT-BR comuns que NÃO devem virar keywords
const PT_STOPWORDS = new Set([
  "para", "como", "mais", "tudo", "sobre", "guia", "esse", "este", "essa", "esta",
  "isso", "aquele", "aquela", "pelos", "pela", "pelo", "pelas", "entre", "também",
  "quando", "onde", "porque", "porquê", "porqu", "ainda", "depois", "antes",
  "muito", "muita", "muitos", "muitas", "outro", "outra", "outros", "outras",
  "todos", "todas", "todo", "toda", "neste", "nesta", "nessa", "nesse", "nisso",
  "deste", "desta", "dessa", "desse", "disso", "ser", "ter", "estar", "fazer",
  "haver", "vai", "vão", "fica", "ficou", "tem", "têm", "são", "foi", "foram",
]);

const CATEGORY_NAME: Record<string, string> = {
  ia: "Inteligência Artificial",
  invest: "Finanças & Investimentos",
  geek: "Geek",
  otaku: "Otaku",
};

// Helpers de SEO ─────────────────────────────────────────────────────────────
const truncateAtWord = (text: string, max: number) => {
  if (text.length <= max) return text;
  const slice = text.slice(0, max);
  const lastSpace = slice.lastIndexOf(" ");
  return (lastSpace > 0 ? slice.slice(0, lastSpace) : slice).trim() + "…";
};

const extractTopWords = (text: string, top: number): string[] => {
  const freq: Record<string, number> = {};
  const tokens = text
    .toLowerCase()
    .replace(/[^a-záàâãéèêíïóôõúüç\s-]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 3 && !PT_STOPWORDS.has(w));
  for (const t of tokens) freq[t] = (freq[t] ?? 0) + 1;
  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, top)
    .map(([w]) => w);
};

const buildPostKeywords = (post: { title: string; excerpt: string; category: string; subtopic?: string | null }): string => {
  const cat = CATEGORY_KEYWORDS[post.category] ?? [];
  const titleWords = extractTopWords(post.title, 6);
  const excerptWords = extractTopWords(post.excerpt, 5);
  const sub = post.subtopic ? [post.subtopic.replace(/-/g, " ")] : [];

  const all = [...titleWords, ...excerptWords, ...sub, ...cat];
  // Remove duplicatas preservando ordem
  const seen = new Set<string>();
  const unique: string[] = [];
  for (const k of all) {
    const key = k.toLowerCase().trim();
    if (key && !seen.has(key)) {
      seen.add(key);
      unique.push(k);
    }
  }
  // Garante mínimo de 12 palavras (preenche com mais da categoria se faltar)
  while (unique.length < 12 && cat.length > 0) {
    const extra = cat[unique.length % cat.length];
    if (!seen.has(extra.toLowerCase())) {
      unique.push(extra);
      seen.add(extra.toLowerCase());
    } else {
      break;
    }
  }
  return unique.slice(0, 18).join(", ");
};

const DynamicSEO = () => {
  const { pathname, search } = useLocation();

  let title = SITE_NAME;
  let description = "Seu portal definitivo para IAs, investimentos, cultura geek e o mundo otaku.";
  let image = `${BASE_URL}/og-image.png`;
  let keywords = "VICIO CODE, tecnologia, IA, investimentos, geek, otaku, animes, mangás, finanças, games";
  const url = `${BASE_URL}${pathname}${search || ""}`;
  const isPost = pathname.startsWith("/post/");

  const post = isPost ? blogPosts.find((p) => p.slug === pathname.replace("/post/", "")) : undefined;

  if (post) {
    const manual = PAGE_META[pathname];
    if (manual) {
      title = manual.title;
      description = manual.description;
      keywords = manual.keywords;
    } else {
      // Fallback automático: garante que a keyword principal apareça
      // em title, description e keywords (mesmo sem PAGE_META manual).
      const derived = derivePageMeta(
        {
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          category: post.category,
          subtopic: post.subtopic ?? null,
        },
        { categoryName: CATEGORY_NAME[post.category] }
      );
      title = derived.title;
      description = derived.description;
      keywords = derived.keywords;
    }
    const rawImage = String(post.image);
    image = rawImage.startsWith("http") ? rawImage : `${BASE_URL}${rawImage}`;
  } else {
    const pageMeta = PAGE_META[pathname];
    if (pageMeta) {
      title = pageMeta.title;
      description = pageMeta.description;
      keywords = pageMeta.keywords;
    }
  }

  const fullTitle = pathname === "/" ? `${SITE_NAME} - IA, Investimentos, Geek & Otaku` : `${title} | ${SITE_NAME}`;

  const isRegion = pathname.startsWith("/regiao/");
  const ogType = (isPost || isRegion) ? "article" : "website";

  const privatePaths = ["/configuracoes", "/entrar", "/redefinir-senha", "/painel-social", "/instalar"];
  const isPrivate = privatePaths.some(p => pathname.startsWith(p)) || pathname.startsWith("/perfil/") || pathname.startsWith("/auth/");
  const robotsContent = isPrivate
    ? "noindex, nofollow"
    : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

  // ── JSON-LD blocks ────────────────────────────────────────────────────────
  const categoryPages: Record<string, string> = {
    "/ia": "Inteligência Artificial",
    "/financas": "Finanças",
    "/geek": "Geek",
    "/otaku": "Otaku",
  };
  const isCategory = pathname in categoryPages;

  const organization = {
    "@type": "Organization",
    name: "VICIO<CODE>",
    url: `${BASE_URL}/sobre`,
    logo: { "@type": "ImageObject", url: SITE_LOGO },
    sameAs: SITE_SOCIAL,
  };

  let mainJsonLd: Record<string, unknown> | null = null;
  let breadcrumbJsonLd: Record<string, unknown> | null = null;
  let faqJsonLd: Record<string, unknown> | null = null;

  if (post) {
    const wordCount = Math.max(0, Math.round(String(post.content ?? "").length / 5));
    mainJsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      image,
      url,
      datePublished: post.date,
      dateModified: post.updatedAt ?? post.date,
      author: { ...organization },
      publisher: organization,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      keywords,
      articleSection: CATEGORY_NAME[post.category] ?? "Blog",
      wordCount,
      inLanguage: "pt-BR",
    };
    const categoryMap: Record<string, { path: string; name: string }> = {
      ia: { path: "/ia", name: "Inteligência Artificial" },
      invest: { path: "/financas", name: "Finanças" },
      geek: { path: "/geek", name: "Geek" },
      otaku: { path: "/otaku", name: "Otaku" },
    };
    const cat = categoryMap[post.category] || { path: "/", name: "Início" };

    // Painéis — espelha o registro de src/components/Breadcrumb.tsx
    // Fluxo: Início > Categoria > [Painel] > Post
    const PANELS: { label: string; path: string; prefixes: string[] }[] = [
      { label: "Avatar",           path: "/geek/avatar",          prefixes: ["avatar-"] },
      { label: "Assassin's Creed", path: "/geek/assassins-creed", prefixes: ["ac-"] },
      { label: "Crimson Desert",   path: "/geek/crimson-desert",  prefixes: ["crimson-desert-"] },
      { label: "TenSura",          path: "/otaku/tensura",        prefixes: ["tensura-"] },
      { label: "Overlord",         path: "/otaku/overlord",       prefixes: ["overlord-"] },
    ];
    const panel = PANELS.find(p => p.prefixes.some(pre => post.slug.startsWith(pre)));

    const items: Record<string, unknown>[] = [
      { "@type": "ListItem", position: 1, name: "Início", item: { "@type": "Thing", "@id": BASE_URL } },
      { "@type": "ListItem", position: 2, name: cat.name, item: { "@type": "Thing", "@id": `${BASE_URL}${cat.path}` } },
    ];
    if (panel) {
      items.push({ "@type": "ListItem", position: items.length + 1, name: panel.label, item: { "@type": "Thing", "@id": `${BASE_URL}${panel.path}` } });
    }
    items.push({ "@type": "ListItem", position: items.length + 1, name: post.title, item: { "@type": "Thing", "@id": url } });

    breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items,
    };
    if (post.faq && post.faq.length > 0) {
      faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      };
    }
  } else if (isCategory) {
    const catName = categoryPages[pathname];
    mainJsonLd = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: catName,
      description,
      url,
      publisher: organization,
      isPartOf: { "@type": "WebSite", name: SITE_NAME, url: BASE_URL },
      inLanguage: "pt-BR",
    };
    breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: { "@type": "Thing", "@id": BASE_URL } },
        { "@type": "ListItem", position: 2, name: catName, item: { "@type": "Thing", "@id": url } },
      ],
    };
  } else {
    mainJsonLd = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: BASE_URL,
      description,
      publisher: organization,
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
      inLanguage: "pt-BR",
    };
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />

      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={isPrivate ? "noindex, nofollow" : "index, follow"} />

      {mainJsonLd && (
        <script type="application/ld+json">{JSON.stringify(mainJsonLd)}</script>
      )}
      {breadcrumbJsonLd && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      )}
      {faqJsonLd && (
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      )}
    </Helmet>
  );
};

export default DynamicSEO;


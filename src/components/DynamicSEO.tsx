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
    description: "Como a IA está transformando a cibersegurança em 2026: novos vetores de ataque com LLMs, deepfakes corporativos, defesas com IA e o que empresas brasileiras precisam fazer agora.",
    keywords: "IA cibersegurança 2026, ataques IA cibersegurança, LLM ataques phishing, deepfake corporativo, defesa IA segurança, SIEM com IA, threat detection IA, LGPD cibersegurança, cibersegurança Brasil 2026, vishing IA voz clonada",
  },
  "/post/prompt-engineering-guia-2026": {
    title: "Prompt Engineering em 2026: Guia Definitivo para Escrever Prompts que Funcionam",
    description: "Guia completo de prompt engineering em 2026: Chain-of-Thought, Few-Shot, meta-prompting, técnicas validadas em papers (NeurIPS, ICLR), guias oficiais OpenAI e Anthropic e o que mudou com modelos de raciocínio.",
    keywords: "prompt engineering 2026, como escrever prompts, Chain-of-Thought prompting, Few-Shot prompting, meta-prompting, OpenAI prompt guide, Anthropic prompt engineering, DeepSeek R1 reasoning, Claude extended thinking, prompts que funcionam, engenharia de prompts Brasil",
  },
  "/post/gpt-5-ia-trabalhador-digital-autonomo-2026": {
    title: "GPT-5.4 Trabalhador Digital Autônomo: IA Supera Humanos no OSWorld 2026",
    description: "GPT-5.4 atinge 75% no OSWorld-V e supera a baseline humana de 72,4%. Primeira IA a executar trabalho real no computador: Excel, web, código. Impacto em profissões.",
    keywords: "GPT-5.4, GPT-5 trabalhador digital, IA autônoma 2026, OSWorld benchmark, IA executa tarefas, agentes IA computador, OpenAI GPT-5, IA mercado de trabalho, IA Excel, automação profissional, IA produtividade, futuro do trabalho IA",
  },
  "/post/como-usar-ia-ganhar-dinheiro-2026": {
    title: "Como Usar IA para Ganhar Dinheiro em 2026: 15 Formas Reais e Comprovadas",
    description: "15 formas reais de monetizar com IA em 2026: criação de conteúdo, freelancer de automações, chatbots, consultoria e muito mais — com faixas de renda verificáveis para o mercado brasileiro.",
    keywords: "ganhar dinheiro com IA 2026, monetizar IA Brasil, freelancer IA, automação com IA, chatbot WhatsApp negócios, consultoria IA, cursos IA infoproduto, Workana IA, n8n Make automação, renda extra IA, IA para empreendedores",
  },
  "/post/ia-privacidade-dados-2026": {
    title: "IA e Privacidade de Dados em 2026: Seus Dados Estão Seguros?",
    description: "Guia completo sobre IA e privacidade de dados em 2026: LGPD, EU AI Act, opt-out de treinamento no ChatGPT e Claude, IA federada, Glaze, Nightshade e 6 regras práticas para proteger seus dados.",
    keywords: "IA privacidade dados 2026, LGPD inteligência artificial, EU AI Act privacidade, ChatGPT dados seguros, Claude privacidade, opt-out treinamento IA, IA federada, ANPD análise IA generativa, proteção dados IA Brasil, Glaze Nightshade",
  },
  "/post/modelos-ia-open-source-2026": {
    title: "IA Open Source em 2026: Llama 4, Mistral e DeepSeek Contra os Modelos Pagos",
    description: "Comparativo completo dos modelos de IA open source em 2026: Llama 4, DeepSeek-V3, Mistral Large 2, Qwen 2.5 — benchmarks reais, custos, casos de uso e quando vale rodar on-premise.",
    keywords: "IA open source 2026, Llama 4 Meta, DeepSeek V3, Mistral Large 2, Qwen 2.5 Alibaba, modelos IA gratuitos, open source vs ChatGPT, Hugging Face leaderboard, LMSYS Arena, rodar IA on-premise Brasil, fine-tuning LLM",
  },
  "/post/gemini-25-pro-vs-claude-ia-2026": {
    title: "Gemini 2.5 Pro vs Claude em 2026: Qual a Melhor IA?",
    description: "Comparativo Gemini 2.5 Pro vs Claude em 2026: benchmarks, contexto, preço de API, raciocínio, programação e qual IA escolher para cada caso de uso.",
    keywords: "Gemini 2.5 Pro vs Claude 2026, comparativo Gemini Claude, qual IA usar 2026, Claude Sonnet vs Gemini, API Gemini Anthropic preço, benchmarks IA 2026, Gemini 2.5 Pro review, Claude review 2026, melhor IA programação, melhor IA texto",
  },
  "/post/dola-ai-app-assistente-2026": {
    title: "Dola AI: O App de Assistente de IA que Virou Febre no Brasil em 2026",
    description: "Tudo sobre o Dola AI em 2026: o que é, como funciona, 8 recursos principais, comparativo com ChatGPT e Gemini, planos e preço, e se vale a pena para o usuário brasileiro.",
    keywords: "Dola AI, Dola app assistente IA, Dola AI como usar, Dola AI Android iOS, Dola AI vs ChatGPT, app IA gratuito 2026, assistente IA celular, Dola AI bots, Dola AI gerar imagem, Dola AI WhatsApp Telegram, app inteligência artificial Brasil 2026",
  },
  "/post/seedance-2-0-geracao-video-ia-2026": {
    title: "Seedance 2.0: O Gerador de Vídeo com IA da ByteDance que Muda o Jogo em 2026",
    description: "Guia completo do Seedance 2.0: como funciona a geração de vídeo multimodal da ByteDance, benchmarks reais, preços Dreamina, comparativo com Sora 2 e Kling 3.0 e como usar no Brasil.",
    keywords: "Seedance 2.0, ByteDance gerador de vídeo IA, Seedance 2.0 como usar, Dreamina Seedance, CapCut Seedance, gerador de vídeo IA 2026, Seedance vs Sora 2, Seedance vs Kling, Dual-Branch Diffusion Transformer, video AI 2026 Brasil, geração vídeo texto imagem IA",
  },
  "/post/suno-ai-gerador-musica-2026": {
    title: "Suno AI: O Guia Completo do Gerador de Músicas com IA em 2026",
    description: "Tudo sobre o Suno AI em 2026: como funciona o v5.5, preços, plano gratuito, como criar músicas do zero, comparativo com Udio, direitos autorais e o que a batalha judicial com a RIAA significa para criadores.",
    keywords: "Suno AI 2026, Suno gerador de música IA, Suno v5.5, como usar Suno AI, Suno AI grátis, Suno vs Udio, criar música com IA, Suno planos preços, RIAA processo Suno, direitos autorais música IA, Suno comercial, gerar música texto IA Brasil",
  },
  "/post/agentes-ia-2026-como-funcionam": {
    title: "Agentes de IA em 2026: O Que São, Como Funcionam e Por Que Mudam Tudo",
    description: "Entenda os agentes de IA em 2026: diferença entre chatbot e agente, benchmarks reais (SWE-bench, OSWorld), MCP, A2A, custos, riscos LGPD e como usar com segurança no Brasil.",
    keywords: "agentes de IA 2026, agentes autônomos, MCP protocolo, SWE-bench, OSWorld benchmark, agente vs chatbot, Claude Computer Use, OpenAI Operator, LGPD agentes IA, A2A protocol, CrewAI, AutoGPT, inteligência artificial autônoma",
  },
  "/post/agentes-ia-autonomos-2026": {
    title: "Agentes de IA Autônomos em 2026: O que São, Como Funcionam e Por Que Vão Mudar Tudo",
    description: "Guia completo sobre agentes de IA autônomos em 2026: diferença real para chatbots, ciclo ReAct, comparativo de plataformas (Claude Code, n8n, AutoGPT), casos de uso no Brasil e riscos LGPD.",
    keywords: "agentes de IA autônomos 2026, agente autônomo IA, ReAct framework, Claude Code agente, n8n automação IA, AutoGPT CrewAI, agentes IA empresas brasileiras, Deloitte agentes IA, Microsoft Copilot Studio, Google Agentspace, riscos agentes IA, LGPD automação",
  },
  "/post/anthropic-mythos-google-2026": {
    title: "Anthropic, Mythos e Google: A Disputa pelo Futuro da IA Segura em 2026",
    description: "Como Anthropic, Mythos e Google estão competindo pelo mercado de IA segura em 2026 — investimentos, modelos, posicionamento regulatório e o que isso significa para o ecossistema de IA.",
    keywords: "Anthropic Google 2026, Mythos IA segura, corrida IA segura, Claude vs Gemini mercado, investimento Anthropic Google, AI safety 2026, IA segura empresas, Anthropic Series E, Google DeepMind estratégia",
  },
  "/post/melhores-apps-ia-produtividade-2026": {
    title: "Os 10 Melhores Aplicativos de IA para Produtividade em 2026 (Testados e Aprovados)",
    description: "Ranking testado de 80+ ferramentas: os 10 melhores apps de IA para produtividade em 2026 com custo em reais, análise LGPD e stack gratuito para começar no Brasil.",
    keywords: "aplicativos de IA produtividade 2026, melhores apps IA, Notion AI, Claude AI, Perplexity AI, Otter.ai, Runway ML, ElevenLabs, Midjourney v7, Zapier AI, Reclaim.ai, ferramentas IA Brasil, LGPD apps IA",
  },
  "/post/chatgpt-vs-gemini-vs-claude-2026": {
    title: "ChatGPT vs Gemini vs Claude em 2026: Qual IA Realmente Vale a Pena Assinar?",
    description: "Comparativo completo ChatGPT vs Gemini vs Claude em 2026: benchmarks reais, preços em reais, privacidade LGPD e qual IA assinar para cada perfil de usuário brasileiro.",
    keywords: "ChatGPT vs Gemini vs Claude 2026, qual IA assinar 2026, ChatGPT Plus, Gemini Advanced, Claude Pro, Copilot Pro, comparativo IAs, melhor IA 2026, LMSYS Arena, IA para programador, IA para escritor, IA Brasil preço",
  },
  "/post/claude-cowork-saaspocalypse-2026": {
    title: "Claude Cowork e o SaaSpocalypse: Como os Agentes de IA Estão Substituindo Softwares Inteiros",
    description: "Claude Cowork chegou para substituir SaaS corporativos de R$ 500 a R$ 5.000/mês. Entenda o SaaSpocalypse, o que muda para empresas brasileiras e o que o SaaS tradicional ainda faz melhor.",
    keywords: "Claude Cowork, SaaSpocalypse, agentes IA corporativo, IA substituindo SaaS, Anthropic Cowork, MCP empresas, automação jurídica IA, automação financeira IA, RH com IA, SaaS vs agentes IA 2026, agentes corporativos Brasil",
  },
  "/post/claude-opus-vs-sonnet-2026": {
    title: "Claude 4 Opus vs Claude 4 Sonnet: Qual Modelo Usar em 2026?",
    description: "Comparativo completo Claude 4 Opus vs Sonnet: benchmarks reais (MMLU, HumanEval, SWE-bench), preços em dólar, estratégia híbrida e qual modelo escolher por perfil de uso.",
    keywords: "Claude 4 Opus vs Sonnet, Claude 4 comparativo, Claude Opus benchmarks, Claude Sonnet preço, qual modelo Claude usar, Anthropic Claude 4, HumanEval Claude, SWE-bench Claude, estratégia híbrida LLM, Claude API custo",
  },
  "/post/deepfakes-ia-2026-como-identificar": {
    title: "Deepfakes e IA em 2026: Como Identificar Conteúdo Falso e Proteger Sua Imagem",
    description: "Guia completo sobre deepfakes em 2026: como identificar vídeo e voz falsos, ferramentas de detecção (Intel FakeCatcher, Sensity AI), proteção de imagem e o que a lei brasileira diz.",
    keywords: "deepfakes 2026, como identificar deepfake, voz clonada IA, deepfake vídeo, Intel FakeCatcher, Sensity AI, proteger imagem deepfake, golpe clonagem de voz, EU AI Act deepfake, PL 2338 deepfake Brasil, fraude áudio sintético Febraban",
  },
  "/post/gemini-2-5-pro-vs-claude-2026": {
    title: "Gemini 2.5 Pro vs Claude em 2026: Qual Modelo Vence nas Tarefas do Dia a Dia?",
    description: "Comparativo Gemini 2.5 Pro vs Claude (Sonnet e Opus) em 2026: benchmarks reais, contexto, preço, integração com Workspace e quando usar cada modelo para máxima produtividade.",
    keywords: "Gemini 2.5 Pro vs Claude, Gemini 2.5 Pro 2026, Claude Sonnet comparativo, Claude Opus vs Gemini, Google vs Anthropic modelos, 1 milhão tokens contexto, benchmarks LLM 2026, melhor IA escrita, melhor IA código 2026",
  },
  "/post/gemini-2-5-pro-vs-gpt-4o-2026": {
    title: "Gemini 2.5 Pro vs GPT-4o: Qual o Melhor Modelo de IA em 2026?",
    description: "Comparativo completo Gemini 2.5 Pro vs GPT-4o: benchmarks reais (MMLU, HumanEval, GPQA), preços na API, diferenças em vídeo e raciocínio, e qual modelo escolher por caso de uso.",
    keywords: "Gemini 2.5 Pro vs GPT-4o, Gemini 2.5 Pro benchmarks, GPT-4o comparativo, melhor modelo IA 2026, LMSYS Arena ranking, Gemini API preço, GPT-4o preço, contexto 1 milhão tokens, Claude 3.7 Sonnet comparativo, modelos IA 2026",
  },
  "/post/gpt-trabalhador-digital-2026": {
    title: "GPT como Trabalhador Digital em 2026: Como Empresas Estão Automatizando com IA",
    description: "Como empresas brasileiras e globais usam GPT e LLMs como trabalhadores digitais em 2026: casos reais, ROI documentado, riscos e o que o PL 2338/2023 exige de transparência.",
    keywords: "GPT trabalhador digital 2026, automação com GPT empresas, LLM trabalho corporativo, GPT-4o automação, trabalhador digital IA, ROI automação IA, PL 2338 automação, casos uso GPT empresas brasileiras, digital worker IA",
  },
  "/post/ia-brasil-adocao-2026": {
    title: "IA no Brasil em 2026: Investimentos em Tecnologia Crescem 18,5%",
    description: "Panorama completo da adoção de IA no Brasil em 2026: crescimento de 18,5% em investimentos, desafios de maturidade, setores líderes e o que empresas brasileiras ainda precisam superar.",
    keywords: "IA no Brasil 2026, adoção inteligência artificial Brasil, investimentos IA Brasil, maturidade IA empresas brasileiras, transformação digital Brasil 2026, IA corporativa Brasil, tecnologia IA crescimento Brasil",
  },
  "/post/ia-codigo-programadores-2026": {
    title: "IA e Programação em 2026: GitHub Copilot, Cursor e o Futuro do Dev",
    description: "Como GitHub Copilot, Cursor e Claude Code estão mudando a programação em 2026: benchmarks reais, casos de uso, impacto no dev júnior e o que IA ainda não substitui.",
    keywords: "IA e programação 2026, GitHub Copilot, Cursor AI, Claude Code, Devin programação, IA para desenvolvedores, futuro do programador IA, SWE-bench 2026, ferramentas IA código, dev com IA Brasil",
  },
  "/post/ia-criatividade-arte-musica-2026": {
    title: "IA e Criatividade em 2026: Como a IA Está Revolucionando Arte e Música",
    description: "Como Sora, Midjourney, Suno e Adobe Firefly estão transformando criatividade em 2026: direitos autorais, C2PA, proteção para artistas brasileiros e o debate sobre licenciamento de obras.",
    keywords: "IA e criatividade 2026, arte gerada por IA, música gerada por IA, Sora OpenAI, Midjourney v7, Suno AI, Adobe Firefly, direitos autorais IA Brasil, C2PA marca d'água, IA e artistas, copyright IA 2026",
  },
  "/post/ia-educacao-2026-estudar-inteligente": {
    title: "IA na Educação em 2026: Como Estudar de Forma mais Inteligente (Sem Fazer Batota)",
    description: "Como usar IA na educação em 2026 sem prejudicar o aprendizado: método Feynman com Claude, NotebookLM, Khanmigo, flashcards com Anki e o que a UNESCO e o MEC recomendam.",
    keywords: "IA na educação 2026, estudar com IA, método Feynman IA, Google NotebookLM, Khanmigo Khan Academy, ChatGPT Edu, flashcards IA Anki, detecção IA trabalhos, GPTZero Turnitin, UNESCO IA educação, MEC inteligência artificial",
  },
  "/post/ia-generativa-iniciantes-2026-guia": {
    title: "IA Generativa para Iniciantes em 2026: O Guia Completo do Zero ao Avançado",
    description: "Guia prático de IA generativa para iniciantes em 2026: o que é, como começar sem código, engenharia de prompts, melhores ferramentas gratuitas e os erros mais comuns a evitar.",
    keywords: "IA generativa iniciantes 2026, guia IA para iniciantes, como usar ChatGPT, o que é IA generativa, engenharia de prompts básica, ferramentas IA gratuitas, Claude Gemini ChatGPT, automação n8n Zapier, Stanford AI Index, Harvard estudo IA produtividade",
  },
  "/post/ia-saude-2026-diagnosticos-futuro": {
    title: "IA para Saúde em 2026: Diagnósticos, Monitoramento e o Futuro da Medicina",
    description: "Como a IA está transformando a saúde em 2026: diagnóstico por imagem (AlphaFold, Google Med-PaLM), wearables com IA, telemedicina e o que a LGPD e o CFM dizem sobre IA médica no Brasil.",
    keywords: "IA saúde 2026, inteligência artificial medicina, diagnóstico por imagem IA, AlphaFold proteínas, Google Med-PaLM, wearables IA saúde, telemedicina IA, CFM inteligência artificial, LGPD dados de saúde, IA oncologia, IA radiologia",
  },
  "/post/ia-no-trabalho-2026-profissoes": {
    title: "IA no Trabalho em 2026: Sua Profissão Vai Acabar ou Evoluir?",
    description: "Como a IA está impactando profissões em 2026: quais cargos estão em risco, quais evoluem, o que WEF, Stanford e McKinsey dizem e o que o PL 2338/2023 muda para empresas brasileiras.",
    keywords: "IA no trabalho 2026, profissões em risco IA, Future of Jobs WEF 2025, McKinsey IA 2024, impacto IA empregos Brasil, PL 2338 IA trabalho, automação empregos, IA vs humanos, reskilling IA, profissões do futuro IA, LGPD triagem currículo",
  },
  "/post/ia-mercado-trabalho-brasil-2026": {
    title: "IA no Mercado de Trabalho Brasileiro em 2026: Quais Profissões Ganham e Quais Estão em Risco",
    description: "Análise completa do impacto da IA no mercado de trabalho brasileiro: dados do WEF, Goldman Sachs, FMI e IPEA, profissões mais expostas, plano de 90 dias para se diferenciar e o que o PL 2338/2023 muda.",
    keywords: "IA mercado de trabalho Brasil 2026, profissões em risco IA, WEF Future Jobs 2025, Goldman Sachs IA empregos, FMI inteligência artificial trabalho, IPEA IA Brasil, automação empregos Brasil, reskilling IA 90 dias, PL 2338 automação, impacto IA empregos",
  },
  "/post/mcp-protocol-agentes-ia-2026": {
    title: "MCP (Model Context Protocol): O Padrão que Está Unificando os Agentes de IA em 2026",
    description: "Guia completo sobre o MCP (Model Context Protocol) da Anthropic: como funciona, por que a OpenAI e Google adotaram, os 1.000+ servidores públicos e como implementar em projetos brasileiros.",
    keywords: "MCP Model Context Protocol, Anthropic MCP 2026, protocolo agentes IA, MCP vs API, servidores MCP públicos, Claude MCP, Cursor MCP, Windsurf MCP, A2A protocol Google, USB-C agentes IA, MCP Brasil implementação",
  },
  "/post/negocio-online-ia-2026": {
    title: "Como Criar um Negócio Online com IA em 2026: 10 Modelos Lucrativos",
    description: "10 modelos de negócio online com IA para 2026: agência de conteúdo, SaaS micro-nicho, automação para PMEs e muito mais — com faixas de faturamento verificáveis para o mercado brasileiro.",
    keywords: "negócio online IA 2026, criar negócio com IA, agência conteúdo IA, SaaS nicho IA, automação PME Brasil, empreendedorismo digital IA, monetizar IA 2026, n8n negócio, chatbot WhatsApp negócio, infoproduto IA Brasil",
  },
  "/post/regulamentacao-ia-brasil-mundo-2026": {
    title: "Regulamentação de IA no Brasil e no Mundo em 2026: O Que Muda para Empresas",
    description: "Panorama completo da regulamentação de IA em 2026: EU AI Act (Reg. 2024/1689), PL 2338/2023 brasileiro, ANPD, LGPD art. 20 e o que muda nos EUA após a revogação do Executive Order 14110.",
    keywords: "regulamentação IA 2026, EU AI Act Brasil, PL 2338 2023 IA, ANPD inteligência artificial, LGPD decisões automatizadas, compliance IA empresas, avaliação impacto algorítmico AIIA, regulação IA mundo, Marco Legal IA Brasil, White House AI policy",
  },
  "/post/pragmata-capcom-guia-completo-2026": {
    title: "Pragmata (Capcom) 2026: Guia Completo — Data, Gameplay e Tudo que Sabemos",
    description: "Pragmata da Capcom em 2026: data de lançamento, gameplay revelado, enredo, protagonistas, plataformas e tudo que sabemos sobre o misterioso jogo sci-fi da Capcom.",
    keywords: "Pragmata Capcom 2026, Pragmata lançamento data, Pragmata gameplay, Pragmata enredo, Pragmata PS5 PC, Capcom Pragmata guia, Pragmata sci-fi Capcom",
  },
  "/post/guia-cosplay-2026-iniciantes": {
    title: "Guia de Cosplay para Iniciantes em 2026: Do Zero à Convenção",
    description: "Guia completo de cosplay para iniciantes 2026: como escolher personagem, materiais (EVA, Worbla), orçamentos reais, técnicas de heatforming e o que esperar na primeira convenção.",
    keywords: "guia cosplay iniciantes, como fazer cosplay, EVA cosplay brasil, materiais cosplay brasil, heatforming EVA, contact cement cosplay, Anime Friends cosplay, CCXP cosplay, orcamento cosplay, primeiro cosplay, 2026",
  },
  "/post/jujutsu-kaisen-guia-completo-2026": {
    title: "Jujutsu Kaisen: Guia Completo — Arcos, Personagens e Anime 2026",
    description: "Guia definitivo de Jujutsu Kaisen: todos os arcos do mangá, personagens principais, temporadas do anime e por onde começar em 2026. JJK do início ao fim.",
    keywords: "Jujutsu Kaisen guia completo, JJK arcos manga, JJK personagens, Yuji Itadori, Gojo Satoru, Sukuna, MAPPA JJK, Jujutsu Kaisen temporadas, onde assistir JJK, JJK por onde comecar",
  },
  "/post/rezero-temporada-4-guia-2026": {
    title: "Re:ZERO Temporada 4: Tudo Sobre a Nova Temporada — Arcos e Data",
    description: "Re:ZERO T4 estreia em abril de 2026 na Crunchyroll. Arco 6 da Torre de Plêiades, novos personagens, 25 episódios e o que o mangá revela sobre o destino de Subaru.",
    keywords: "ReZero temporada 4, Re:ZERO T4, Re Zero 2026, Torre de Pleiades ReZero, Subaru Emilia T4, White Fox ReZero, Crunchyroll ReZero T4, rezero arco 6, quando estreia rezero temporada 4",
  },
  "/post/demon-slayer-hashira-guia-2026": {
    title: "Demon Slayer: Guia Completo dos Hashira — Respirações e Poderes",
    description: "Os 9 Pilares da Corporação de Extermínio: Rengoku, Tengen, Himejima e todos os outros. Respirações, hierarquia, batalhas e quem sobreviveu ao arco final.",
    keywords: "Demon Slayer Hashira, Pilares Demon Slayer, Rengoku Hashira, Tengen Uzui, Himejima Gyomei, Respirações Demon Slayer, poderes Hashira, Kimetsu no Yaiba Hashira, hierarquia Demon Slayer",
  },

  // ═══════════════════════════════════════════════════════════
  // CATEGORIA: GEEK — 52 posts
  // ═══════════════════════════════════════════════════════════
  "/post/hell-mode-gamer-isekai-guia-completo": {
    title: "Hell Mode: O Gamer no Isekai com Dificuldade Máxima — Guia Completo",
    description: "Hell Mode anime Yokohama Animation Laboratory estreou jan 2026 (HIDIVE/Prime Video). Kenichi Yamada, gamer de 35 anos reencarnado como Allen o Invocador no Hell Mode — 100x mais XP necessário.",
    keywords: "Hell Mode, Yarikomizuki Gamer, isekai gamer, Allen Invocador, Yokohama Animation Lab, anime 2026, HIDIVE, isekai dificuldade máxima, Hell Mode anime, invocador isekai",
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
    title: "IA e Remasterização: Como a IA Está Dando Nova Vida aos Jogos Clássicos",
    description: "Como a IA está transformando a remasterização de jogos clássicos em 2026: upscaling DLSS e FSR, restauração de texturas, AI NPC e os debates sobre autenticidade vs. nostalgia.",
    keywords: "IA remasterização jogos, inteligência artificial jogos clássicos, DLSS upscaling, FSR AMD, AI NPC comportamento, restauração texturas IA, remasterização vs remake, jogos clássicos 4K IA, machine learning games 2026",
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
    description: "MAPPA confirmou JJK Temporada 4: Culling Game Part 2 em produção. Tudo sobre o anúncio, data de estreia esperada, arco do mangá e personagens da nova temporada.",
    keywords: "Jujutsu Kaisen temporada 4, JJK T4, Culling Game Part 2, MAPPA JJK, Yuji Itadori, Sukuna, JJK anime 2026, Crunchyroll JJK, data estreia JJK temporada 4, jujutsu kaisen confirmado",
  },
  "/post/melhores-jogos-anime-2026": {
    title: "Os Melhores Jogos de Anime de 2026: RPG ao Fighting Game",
    description: "Melhores jogos baseados em animes para jogar em 2026 — Dragon Ball, Naruto, One Piece e mais. Ranking com plataformas, preços e onde comprar no Brasil.",
    keywords: "melhores jogos anime 2026, jogos baseados em anime, Dragon Ball jogo 2026, Naruto jogo, One Piece jogo, anime game RPG, fighting game anime, jogos otaku brasil, jogos anime PS5 PC",
  },
  "/post/tensura-guia-completo-temporadas-filmes": {
    title: "TenSura: Guia Completo — Todas as Temporadas, Filmes e Novidades 2026",
    description: "Guia completo de Tensei Shitara Slime Datta Ken (TenSura): T1 a T4 (2026), filmes, OVAs, spin-offs e o que está vindo. Rimuru, Demon Lords e como assistir em ordem.",
    keywords: "TenSura guia completo, Tensei Shitara Slime, TenSura temporadas, TenSura T4 2026, Rimuru Tempest, TenSura filmes, Crunchyroll TenSura, TenSura ordem assistir, TenSura spin-off",
  },
  "/post/tensura-personagens-rimuru-demon-lords": {
    title: "TenSura: Rimuru Tempest, Demon Lords e Sistema de Poderes",
    description: "Ficha completa dos personagens de TenSura: Rimuru, Milim, Diablo, Veldora, Shion, Benimaru e os 10 Grandes Demon Lords. Habilidades únicas e hierarquia do sistema de poder.",
    keywords: "TenSura personagens, Rimuru Tempest poderes, Milim Nava, Diablo TenSura, Veldora Tempest, 10 Grandes Demon Lords TenSura, habilidades TenSura, sistema poder Slime, Benimaru Shion",
  },
  "/post/overlord-ainz-guardians-personagens": {
    title: "Overlord: Ainz Ooal Gown, Floor Guardians e Personagens do Novo Mundo",
    description: "Fichas completas de Ainz Ooal Gown, Albedo, Demiurge, Shalltear, Cocytus, Sebas e todos os Floor Guardians de Overlord. Poderes, hierarquia de Nazarick e personalidades.",
    keywords: "Overlord personagens, Ainz Ooal Gown, Albedo Overlord, Demiurge Overlord, Shalltear Bloodfallen, Floor Guardians Nazarick, Sebas Tian Overlord, poderes Overlord, Overlord ficha personagens",
  },

  // ═══════════════════════════════════════════════════════════
  // CATEGORIA: OTAKU — 31 posts
  // ═══════════════════════════════════════════════════════════
  "/post/solo-leveling-guia-completo-temporadas": {
    title: "Solo Leveling: Guia Completo — Temporadas, Filme e Personagens",
    description: "Solo Leveling completo: T1 A-1 Pictures (jan-mar 2024, 12 eps), T2 Arise from the Shadow (jan-mar 2025, 13 eps), filme ReAwakening (nov 2024). Sung Jinwoo, Cha Hae-in e os Monarcas. Anime do Ano Crunchyroll 2025.",
    keywords: "Solo Leveling, Sung Jinwoo, Monarca das Sombras, A-1 Pictures, temporadas Solo Leveling, Shadow Monarch, Cha Hae-in, manhwa, anime 2024, Crunchyroll Anime Awards, ReAwakening",
  },
  "/post/tsukimichi-moonlit-fantasy-guia-completo": {
    title: "Tsukimichi Moonlit Fantasy: Guia Completo de Temporadas e Personagens",
    description: "Tsuki ga Michibiku Isekai Douchuu: T1 C2C (jul-set 2021, 12 eps), T2 J.C.Staff (jan-jun 2024, 25 eps), T3 anunciada. Makoto Misumi banido pela deusa, acompanhado de Tomoe e Mio nas terras selvagens de Elysion.",
    keywords: "Tsukimichi, Tsuki ga Michibiku Isekai Douchuu, Moonlit Fantasy, Makoto Misumi, Tomoe, Mio, isekai 2021, isekai 2024, J.C.Staff, Elysion, temporadas Tsukimichi",
  },
  "/post/mugen-gacha-level-9999-traicao-dungeon": {
    title: "My Gift Lvl 9999 Unlimited Gacha: Traído na Dungeon — Guia Completo",
    description: "Shinjiteita Nakamatachi ni Dungeon Okuchi de Korosarekaketa: anime J.C.Staff out-dez 2025 no HIDIVE. Light traído pelos companheiros no Abismo usa o Gacha Ilimitada para invocar guerreiras nível 9999 e se vingar.",
    keywords: "Mugen Gacha, My Gift Lvl 9999, Shinjiteita Nakamatachi, dungeon okuchi, traição isekai, vingança anime 2025, J.C.Staff HIDIVE, Gift Otome, Level 9999, isekai revenge",
  },
  "/post/kizoku-tensei-noble-reincarnation-guia": {
    title: "Noble Reincarnation (Kizoku Tensei): O Príncipe Mais Forte — Guia 2026",
    description: "Kizoku Tensei anime CompTown estreou jan 2026 (12 eps, Crunchyroll). Noah Ararat, 13º filho do imperador reencarnado, com cap de nível infinito e habilidade de absorver poderes de servos leais.",
    keywords: "Kizoku Tensei, Noble Reincarnation, Noah Ararat, príncipe isekai, CompTown anime, isekai 2026, Megumareta Umare, Born Blessed, cap nível infinito, anime inverno 2026",
  },
  "/post/isekai-nonbiri-nouka-farming-life-guia": {
    title: "Farming Life in Another World (Isekai Nonbiri Nouka): Guia Completo",
    description: "Isekai Nonbiri Nouka: T1 anime Zero-G (jan-mar 2023, 12 eps). Hiraku Machio reencarnado com a Ferramenta Universal de Fazenda. Vampiras, elfas e dragões na fazenda. T2 confirmada abril 2026.",
    keywords: "Isekai Nonbiri Nouka, Farming Life Another World, Hiraku Machio, fazenda isekai, Zero-G anime 2023, temporada 2 Farming Life 2026, slice of life isekai, Loo vampira, Amazon Prime",
  },
  "/post/maousama-retry-demon-lord-guia-completo": {
    title: "Demon Lord Retry! (Maou-sama): Guia Completo — Temporadas e Personagens",
    description: "Maou-sama Retry: T1 Ekachi Epilka (jul-set 2019, 12 eps) e versão R Gekkō (out-dez 2024). Akira Oono, programador de 45 anos, reencarnado como o Rei Demônio Hakuto Kunai de seu próprio MMORPG.",
    keywords: "Maou-sama Retry, Demon Lord Retry, Hakuto Kunai, Aku, programador isekai, Ekachi Epilka 2019, Maou-sama Retry R 2024, Kenjiro Tsuda, Angel White, Yu Kirino, rei demônio isekai",
  },
  "/post/okiraku-ryoushu-territory-defense-guia": {
    title: "Easygoing Territory Defense (Okiraku Ryoushu): Guia Completo 2026",
    description: "Okiraku Ryoushu anime NAZ estreou jan 2026 (12 eps, Crunchyroll). Van usa a Magia de Produção para transformar um vilarejo esquecido na cidade-fortaleza mais poderosa do reino.",
    keywords: "Okiraku Ryoushu, Easygoing Territory Defense, Van Magia de Produção, NAZ anime 2026, isekai construção, defesa território isekai, Crunchyroll 2026, noble reincarnation build, anime inverno 2026",
  },
  "/post/kaiju-no-8-temporada-2-guia-arco-final-2026": {
    title: "Kaiju No. 8 Temporada 2: Guia Completo da T2 e Arco Final do Mangá 2026",
    description: "Kaiju No. 8 Temporada 2 estreou na Spring Season 2026 pela Production I.G. Mangá entrou no arco final segundo Jump Festa. Guia: história, personagens e onde assistir.",
    keywords: "Kaiju No. 8 Temporada 2, Kaiju No 8 T2, Production I.G anime, Kafka Hibino, Mina Ashiro, Defense Force Japão, arco final Kaiju No 8, Naoya Matsumoto mangá, Spring Season 2026, Crunchyroll Kaiju, monstros anime 2026, Jump Festa anime",
  },
  "/post/ia-transformando-dublagem-animes": {
    title: "IA na Dublagem de Animes: Voice Cloning e o Futuro da Localização",
    description: "Como voice cloning e IA estão transformando a dublagem de animes: ElevenLabs, Microsoft VALL-E, acordos SAG-AFTRA, manifesto Sated-SP e o que muda para o mercado brasileiro de dublagem.",
    keywords: "IA dublagem animes, voice cloning dublagem, ElevenLabs dublagem, VALL-E Microsoft, SAG-AFTRA IA voz, Sated SP manifesto IA, dublagem brasileira IA, clonagem de voz anime, Crunchyroll IA legendagem, futuro dublagem 2026",
  },
  "/post/dragon-ball-super-beerus-anime-confirmado-2026": {
    title: "Dragon Ball Super: Beerus Anime Confirmado para 2026",
    description: "Dragon Ball Super: Beerus é o novo anime spin-off confirmado pela Toei para 2026. Elenco, estúdio, data de estreia e o que esperar do arco do Deus da Destruição.",
    keywords: "Dragon Ball Super Beerus, Dragon Ball novo anime 2026, Beerus anime, Toei Animation Dragon Ball, Dragon Ball Super 2026, spin-off Beerus, Whis Vermouth, Dragon Ball Super continuação, Akira Toriyama legado, anime Dragon Ball novo",
  },
  "/post/naruto-especiais-confirmados-2026": {
    title: "Naruto: Episódios Especiais Confirmados para 2026",
    description: "Naruto especiais confirmados em 2026: episódios novos da Studio Pierrot, contexto da celebração de aniversário, datas e onde assistir no Brasil.",
    keywords: "Naruto especiais 2026, Naruto novos episódios, Studio Pierrot Naruto, Naruto aniversário 2026, Naruto Shippuden especial, Boruto Naruto, Naruto onde assistir 2026, Naruto Crunchyroll, anime Naruto novo, Masashi Kishimoto Naruto",
  },
  "/post/big-three-naruto-bleach-one-piece-2026": {
    title: "Big Three: Naruto, Bleach e One Piece em 2026",
    description: "Big Three em 2026: Naruto, Bleach e One Piece — status atual do trio que definiu a Shonen Jump, novas adaptações, releituras e o legado para o anime moderno.",
    keywords: "Big Three Naruto Bleach One Piece, Big Three anime 2026, Shonen Jump clássicos, One Piece status 2026, Bleach TYBW final, Naruto legado, Big Three shonen, anime clássicos 2026, trio shonen, jujutsu kaisen new big three",
  },
  "/post/re-monster-anime-manga-guia-2026": {
    title: "Re:Monster: Guia Completo do Anime e Mangá 2026",
    description: "Re:Monster anime (Doga Kobo, 2024, Crunchyroll) e mangá: Rou, goblin reencarnado que absorve poderes consumindo inimigos. Sistema de poder, personagens, diferenças entre anime, mangá e light novel e status de T2.",
    keywords: "Re:Monster anime, Re:Monster mangá, Rou goblin, absorção poder Re:Monster, Re:Monster Crunchyroll, Re:Monster temporada 2, Doga Kobo Re:Monster, isekai goblin, Re:Monster light novel, Re:Monster guia completo 2026",
  },
  "/post/isekai-mokushiroku-mynoghra-guia-2026": {
    title: "Isekai Mokushiroku Mynoghra: Guia Completo — Anime e Mangá 2026",
    description: "Mynoghra: Takuto Ira reencarna como rei da nação apocalíptica de um jogo 4X real. Anime pela Wao World confirmado, mangá em andamento. Atou, mecânicas de corrupção, comparação com Overlord e TenSura.",
    keywords: "Isekai Mokushiroku Mynoghra, Mynoghra anime, Mynoghra manga, Atou Líder Corrupta, Takuto Ira, isekai estratégia 4X, civilização apocalipse isekai, Wao World anime, Mynoghra guia completo, Hametsu no Bunmei Sekai Seifuku 2026",
  },
  "/post/animes-mais-aguardados-2026": {
    title: "Animes Mais Aguardados de 2026: Guia Completo por Temporada",
    description: "Demon Slayer filmes, One Piece Elbaf sazonal, JJK T4, Frieren T3, Bleach TYBW e mais: guia dos animes mais aguardados de 2026 com datas, estúdios e onde assistir no Brasil.",
    keywords: "animes mais aguardados 2026, anime 2026, Demon Slayer arco final filme, One Piece Elbaf, Jujutsu Kaisen temporada 4, Frieren temporada 3, Bleach TYBW 2026, Re:Zero temporada 4, Crunchyroll anime 2026",
  },
  "/post/cultura-otaku-brasil-2026": {
    title: "Cultura Otaku no Brasil 2026: Uma das Maiores Comunidades do Mundo",
    description: "O Brasil é o 2º maior mercado de mangá fora do Japão, com 1.500+ lojas e 120 mil na Anime Friends. História, convenções, streaming e o futuro da cultura otaku brasileira.",
    keywords: "cultura otaku brasil 2026, anime brasil, manga brasil, Anime Friends 2026, CCXP otaku, comunidade otaku brasil, cosplay brasil, Crunchyroll brasil, mercado manga brasil, historia anime brasil",
  },
  "/post/aprender-japones-anime-2026": {
    title: "Como Aprender Japonês Assistindo Anime em 2026: Método Completo",
    description: "Método completo para aprender japonês com anime em 2026: AJATT, Refold, Anki, Yomitan, animes por nível e rotina diária eficiente para iniciantes e intermediários.",
    keywords: "aprender japones anime, como aprender japones assistindo anime, metodo AJATT, Refold japones, Anki japones, Yomitan, japones iniciante anime, imersao japones, N3 N4 japones anime, aprender japones 2026",
  },
  "/post/merchandising-otaku-colecionar-2026": {
    title: "Merchandising Otaku: Como Colecionar com Inteligência em 2026",
    description: "Guia completo de colecionáveis otaku: Nendoroids, Figmas, Scale Figures, como identificar falsificações, onde importar do Japão e o que valoriza no mercado brasileiro.",
    keywords: "merchandising otaku, colecionar anime figuras, Nendoroid brasil, Figma importar, colecionaveis otaku brasil, falsificacao bootleg anime, Good Smile Company brasil, AmiAmi brasil, imposto importacao figura",
  },
  "/post/melhores-mangas-ler-2026": {
    title: "Os Melhores Mangás Para Ler em 2026: Guia por Gênero e Nível",
    description: "Guia dos melhores mangás para ler em 2026: por gênero (shonen, seinen, shojo), nível de experiência, novidades como Sakamoto Days e onde ler legalmente no Brasil.",
    keywords: "melhores mangas 2026, mangas para ler 2026, melhores mangas iniciante, melhor manga seinen, Fullmetal Alchemist, Berserk, Vagabond, Chainsaw Man, Sakamoto Days, Manga Plus, Panini manga 2026",
  },
  "/post/saude-mental-cultura-otaku-2026": {
    title: "Saúde Mental e Cultura Otaku: Quando o Anime Ajuda e Quando Isola",
    description: "Análise baseada em evidências sobre saúde mental e cultura otaku: quando o anime é terapêutico, sinais de fuga disfuncional, hikikomori e recursos de apoio no Brasil (CVV 188).",
    keywords: "saude mental otaku, anime saude mental, hikikomori brasil, CVV 188, anime depressao, A Silent Voice saude mental, March Comes in Like a Lion, escapismo saudavel anime, CAPS saude mental brasil",
  },
  "/post/manga-vs-anime-adaptacao-2026": {
    title: "Mangá vs. Anime: Quando a Adaptação Supera o Original — Análise 2026",
    description: "Análise de quando o anime supera o mangá (FMA Brotherhood, Demon Slayer) e quando decepciona (Tokyo Ghoul, Berserk 2016). Os 4 critérios que determinam o sucesso de uma adaptação.",
    keywords: "manga vs anime, adaptacao anime manga, FMA Brotherhood adaptacao, Demon Slayer anime, Tokyo Ghoul decepcao, Berserk 2016 CGI, quando anime supera manga, melhores adaptacoes anime, MAL top anime 2026",
  },
  "/post/diferenca-mangas-manhuas-manhwas": {
    title: "Manga vs Manhwa vs Manhua: Diferenças e Melhores Obras 2026",
    description: "Guia completo das diferenças entre manga japonês, manhwa coreano e manhua chinês: formato, leitura, cores, gêneros, plataformas e os melhores títulos de cada tipo para 2026.",
    keywords: "diferenca manga manhwa manhua, manga vs manhwa, manga japones, manhwa coreano, manhua chines, Solo Leveling manhwa, One Piece manga, webtoon br, Manga Plus brasil, xianxia manhua, 2026",
  },
  "/post/como-diferenciar-manhuas-manhwas": {
    title: "Como Diferenciar Manhuas e Manhwas: Guia Completo",
    description: "Aprenda a diferenciar Manhuas (chineses) de Manhwas (coreanos) de vez. Guia completo com características visuais, temas, plataformas e exemplos de obras de cada formato.",
    keywords: "diferenciar manhuas manhwas, manhwa coreano, manhua chines, webtoon manhwa, xianxia manhua, Solo Leveling manhwa, plataformas manhwa brasil, onde ler manhwa, onde ler manhua",
  },
  "/post/frieren-temporada-3-confirmada-2026": {
    title: "Frieren Temporada 3 Confirmada: O Que Esperar da Continuação",
    description: "Frieren T3 confirmada após final aclamado da T2 em abril 2026. Tudo sobre os novos arcos, o que o mangá reserva e quando esperar a continuação da série nota 9,3 no MAL.",
    keywords: "Frieren temporada 3, Frieren Beyond Journey End T3, Frieren confirmada, Madhouse Frieren, anime Frieren 2026, Frieren mangá arcos, Stark Frieren, Sense Fern, Frieren Crunchyroll",
  },
  "/post/one-piece-elbaf-formato-sazonal-2026": {
    title: "One Piece Arco de Elbaf: Formato Sazonal e Tudo que Sabemos",
    description: "One Piece adotou formato sazonal em 2026 para o Arco de Elbaf — a Ilha dos Gigantes. Toei Animation, datas, episódio de estreia de 50 min e o que esperar de Usopp e Big Mom.",
    keywords: "One Piece Elbaf, One Piece formato sazonal, arco Elbaf 2026, One Piece abril 2026, Toei Animation One Piece, Usopp Elbaf, One Piece Crunchyroll sazonal, One Piece episodio estreia",
  },
  "/post/spring-season-animes-abril-2026": {
    title: "Spring Season 2026: Os Melhores Animes de Abril para Não Perder",
    description: "66 animes na temporada de primavera 2026! One Piece Elbaf, Re:ZERO T4, TenSura T4 e mais. Guia completo com datas de estreia, estúdios e onde assistir no Brasil.",
    keywords: "spring season 2026, animes abril 2026, temporada primavera anime 2026, One Piece Elbaf estreia, ReZero T4 Crunchyroll, TenSura T4, melhores animes primavera 2026, simulcast abril 2026",
  },
  "/post/temporada-animes-abril-2026": {
    title: "Temporada de Animes Abril 2026: Guia Completo da Spring Season",
    description: "Spring Season 2026: Re:ZERO T4, TenSura T4, Dr. STONE Final, Kaiju No. 8 T2 e mais. Tabela completa com datas, estúdios e onde assistir cada título no Brasil.",
    keywords: "temporada animes abril 2026, spring season animes 2026, animes estreia abril 2026, Re:ZERO T4, TenSura T4, Kaiju No 8 T2, Crunchyroll abril 2026, simulcast abril 2026, melhores animes abril",
  },
  "/post/10-melhores-manhwas-sistema-2026": {
    title: "Os 10 Melhores Manhwas de Sistema para Ler em 2026",
    description: "Os 10 melhores manhwas com sistema de 2026: Solo Leveling, Tower of God, Omniscient Reader e mais. Seleção com sinopse, número de capítulos e onde ler legalmente.",
    keywords: "melhores manhwas sistema 2026, manhwa sistema, manhwa regressão, Solo Leveling manhwa, Tower of God, Omniscient Reader, manhwa webtoon brasil, manhwa 2026, melhores manhwas coreanos",
  },
  "/post/isekai-2026-genero-domina": {
    title: "Isekai 2026: Por Que o Gênero Criticado Ainda Domina o Anime",
    description: "Análise profunda do fenômeno isekai: seus clichês, obras-primas como TenSura e Re:ZERO, e por que o gênero mais criticado do anime continua dominando em 2026.",
    keywords: "isekai 2026, porque isekai domina, melhores isekais 2026, isekai cliches, TenSura isekai, ReZero isekai, Solo Leveling isekai, isekai genero anime, isekai vs outros generos",
  },
  "/post/one-piece-final-saga-2026": {
    title: "One Piece Final Saga: Onde Estamos e O Que Esperar do Final",
    description: "A Final Saga de One Piece começou em 2022. Arco de Egghead, revelações sobre Imu e os Gorosei, One Piece final e o que já sabemos sobre o desfecho de Luffy.",
    keywords: "One Piece Final Saga, One Piece arco final, Egghead One Piece, Imu One Piece, One Piece Elbaf, One Piece 2026, One Piece fim, Luffy Gear 5, One Piece Oda final, One Piece spoilers",
  },
  "/post/overlord-guia-completo-temporadas-ainz": {
    title: "Overlord: Guia Completo — 4 Temporadas, Filmes e T5",
    description: "Overlord completo: T1 a T4, filme Sacred Kingdom (2023) e novidades de T5. Ainz Ooal Gown, o Novo Mundo, Nazarick e por onde começar em 2026.",
    keywords: "Overlord guia completo, Overlord temporadas, Overlord Sacred Kingdom filme, Overlord T5, Ainz Ooal Gown, Nazarick, Overlord Crunchyroll, Overlord anime 2026, Overlord ordem assistir",
  },

  // ═══════════════════════════════════════════════════════════
  // CATEGORIA: FINANÇAS & INVESTIMENTOS — 19 posts
  // ═══════════════════════════════════════════════════════════
  "/post/poupanca-vs-cdb-tesouro-2026": {
    title: "Poupança vs CDB vs Tesouro Direto em 2026: Qual Rende Mais?",
    description: "Comparação completa entre Poupança, CDB e Tesouro Direto em 2026: rendimentos, liquidez, riscos, imposto de renda e qual escolher para cada objetivo financeiro.",
    keywords: "poupança vs CDB vs Tesouro Direto, melhor investimento 2026, rendimento poupança, CDB liquidez diária, Tesouro Selic, renda fixa comparação, investimento iniciante, Selic 2026",
  },
  "/post/reserva-emergencia-2026-como-montar": {
    title: "Como Montar Sua Reserva de Emergência em 2026: Guia Definitivo",
    description: "Guia completo para montar reserva de emergência em 2026: quanto guardar, onde investir (Tesouro Selic vs CDB), quanto tempo leva e os erros mais comuns. Com simulações por faixa de renda.",
    keywords: "reserva emergência 2026, quanto guardar reserva emergência, onde investir reserva emergência, Tesouro Selic reserva, CDB liquidez diária, quanto meses de despesas, reserva CLT autônomo",
  },
  "/post/berkshire-hathaway-greg-abel-2026-sem-buffett": {
    title: "Berkshire Hathaway 2026: Greg Abel Assume CEO e US$ 397B em Caixa",
    description: "Greg Abel preside o primeiro encontro da Berkshire sem Buffett. US$ 397 bilhões em caixa, lucro dobrou no Q1 2026 e deepfake de Buffett alerta sobre riscos de IA.",
    keywords: "Berkshire Hathaway 2026, Greg Abel CEO, Warren Buffett sucessão, Berkshire encontro anual, BRK.B, Berkshire caixa 397 bilhões, deepfake Buffett, holding Berkshire, investimentos value, Charlie Munger legado, BRKB ações, Berkshire investidor brasileiro",
  },
  "/post/pnad-desemprego-61-marco-2026": {
    title: "PNAD Março 2026: Desemprego em 6,1%, Mínima Histórica — Impactos para o Investidor",
    description: "IBGE: PNAD do trimestre até março 2026 mostra desemprego em 6,1%, 6,6 milhões de desocupados e renda média recorde de R$ 3.722. Impactos em Selic, bolsa e carteira.",
    keywords: "PNAD março 2026, desemprego Brasil 6,1%, IBGE PNAD trimestral, mercado de trabalho 2026, renda média Brasil, massa salarial 2026, taxa desocupação, impacto Selic desemprego, Copom PNAD, indicadores macroeconômicos, bolsa brasileira PNAD, investidor IBGE",
  },
  "/post/copom-selic-1450-corte-abril-2026": {
    title: "Copom Corta Selic para 14,50% — Segundo Corte do Ciclo em Abril 2026",
    description: "Copom reduz Selic de 14,75% para 14,50% ao ano. Segundo corte consecutivo. Comunicado pede cautela com choque do petróleo. Impactos em renda fixa, ações e FIIs.",
    keywords: "Copom Selic 14,50%, corte Selic abril 2026, Banco Central juros, ata Copom 2026, ciclo de corte Selic, taxa Selic Brasil, renda fixa Selic 14,50, impacto Selic ações, FIIs Selic, Tesouro Direto Selic, Galípolo Copom, política monetária 2026",
  },
  "/post/petroleo-brent-125-bloqueio-ormuz-2026": {
    title: "Petróleo Brent Ultrapassa US$ 125 com Bloqueio em Ormuz — Impacto em PETR4",
    description: "Brent sobe 6,2% e passa de US$ 125/barril após bloqueio naval ao Estreito de Ormuz. Maior nível desde 2008. Impacto na inflação brasileira, PETR4, PRIO3 e aéreas.",
    keywords: "petróleo Brent 125 dólares, bloqueio Estreito Ormuz, PETR4 alta petróleo, Petrobras 2026, PRIO3 petróleo, choque do petróleo 2026, crise petróleo Oriente Médio, inflação petróleo Brasil, aéreas alta combustível, Trump Irã Ormuz, commodities 2026, Brent recorde",
  },
  "/post/anthropic-mythos-modelo-ia-google-investimento-2026": {
    title: "Google Investe US$ 40 Bilhões na Anthropic e Mythos Chega — Resposta à OpenAI",
    description: "Google compromete US$ 40 bilhões na Anthropic a valuation de US$ 350B. Anthropic lança Mythos, modelo com cibersegurança avançada restrita a parceiros selecionados.",
    keywords: "Anthropic Mythos, Google investe Anthropic, Anthropic 40 bilhões, modelo Mythos IA, Claude Anthropic 2026, Anthropic valuation 350 bilhões, Anthropic vs OpenAI, Google IA investimento, cibersegurança IA Mythos, Dario Amodei, modelos IA 2026, Anthropic Google Cloud",
  },
  "/post/magnificent-seven-resultados-q1-2026-apple-tim-cook": {
    title: "Magnificent Seven Q1 2026: MSFT, Meta, Google, Amazon e Tim Cook Sai da Apple",
    description: "Microsoft, Meta, Alphabet e Amazon reportam Q1 2026 com capex combinado de US$ 620B+ em IA. Tim Cook anuncia saída da Apple em 1º de setembro, sucedido por John Ternus.",
    keywords: "Magnificent Seven Q1 2026, resultados Big Tech, Tim Cook sai Apple, John Ternus CEO Apple, Microsoft Meta Google Amazon, capex IA 620 bilhões, balanço Big Tech 2026, MSFT Meta GOOGL AMZN, Apple sucessão CEO, ações tech 2026, temporada balanços Wall Street, IA capex 2026",
  },
  "/post/sair-das-dividas-2026-plano-acao": {
    title: "Sair das Dívidas em 2026: Plano de Ação Que Realmente Funciona",
    description: "Como sair das dívidas em 2026: método bola de neve, negociação com bancos, Desenrola Brasil, juros do rotativo (400%+) e plano de 12 meses passo a passo.",
    keywords: "sair das dívidas 2026, como quitar dívidas, método bola de neve, Desenrola Brasil 2026, juros rotativo cartão, negociar dívidas Serasa, Limpa Nome, planejamento financeiro dívidas, sair do vermelho, dívida cartão crédito, cheque especial, portabilidade crédito",
  },
  "/post/selic-comeca-cair-2026": {
    title: "Selic Começa a Cair em 2026: O Que Muda nos Seus Investimentos",
    description: "Selic em queda em 2026: como ajustar carteira de renda fixa, IPCA+ longo, marcação a mercado, oportunidades em prefixados e impacto em Tesouro Selic, CDB e bolsa.",
    keywords: "Selic cair 2026, queda Selic Copom 2026, IPCA+ marcação a mercado, prefixado Selic baixa, Tesouro Direto Selic queda, ciclo queda juros Brasil, renda fixa Selic 2026, ações Selic cair, FIIs Selic queda, Boletim Focus 2026, ciclo de corte de juros",
  },
  "/post/renda-passiva-2026-formas-comprovadas": {
    title: "Renda Passiva em 2026: 7 Formas Comprovadas de Ganhar Dinheiro",
    description: "Renda passiva real em 2026 no Brasil: dividendos B3, FIIs (IFIX), JCP, Tesouro IPCA+ com cupons, ETFs e quanto patrimônio precisa para viver de renda.",
    keywords: "renda passiva 2026, viver de dividendos, melhores FIIs dividendos 2026, IFIX rendimento, IDIV dividendos, JCP imposto, ações pagadoras dividendos, Tesouro IPCA juros semestrais, ETFs renda passiva, quanto investir viver renda, dividendos isentos IR",
  },
  "/post/previdencia-privada-pgbl-vgbl-2026": {
    title: "Previdência Privada 2026: PGBL ou VGBL? Guia Para Decidir Sem Erro",
    description: "PGBL vs VGBL em 2026: tabela progressiva ou regressiva, dedução IR 12%, taxa de carregamento zero, portabilidade SUSEP e quando vale para sucessão.",
    keywords: "previdência privada 2026, PGBL ou VGBL, tabela regressiva previdência, deduzir IR PGBL, taxa carregamento zero, portabilidade previdência, SUSEP regulamentação, planejamento sucessório VGBL, melhor previdência 2026, fundo previdenciário, complementar aposentadoria",
  },
  "/post/investir-em-tecnologia-2026": {
    title: "Investir em Tecnologia em 2026: Guia de Setores, BDRs e ETFs",
    description: "Como investir em tecnologia em 2026: Magnificent Seven, ETFs QQQ, SMH, XLK, BDRs na B3, IVVB11, semicondutores, IA e alocação para o investidor brasileiro.",
    keywords: "investir tecnologia 2026, BDRs B3 tech, ETF QQQ Nasdaq, SMH semicondutores, XLK tecnologia, Magnificent Seven, IVVB11 S&P 500, Avenue Securities, Nvidia BDR, Apple BDR, Microsoft BDR, ações de IA, investimento internacional",
  },
  "/post/ia-para-financas-pessoais-2026": {
    title: "Como Usar IA para Organizar Suas Finanças Pessoais em 2026",
    description: "Guia completo sobre IA e finanças pessoais em 2026: apps Mobills, Organizze, Olivia, Nubank Tuna, Itaú Íon, como usar ChatGPT para simular investimentos e os limites da IA em decisões financeiras.",
    keywords: "IA finanças pessoais 2026, app controle financeiro IA, Mobills IA, Olivia app, Nubank Tuna IA, Itaú Íon, ChatGPT finanças pessoais, simular investimento IA, orçamento doméstico IA, LGPD dados financeiros, Banco Central cidadania financeira",
  },
  "/post/openai-bilhoes-financiamento-record-2026": {
    title: "OpenAI Capta US$ 40 Bilhões: Maior Rodada de IA da História",
    description: "OpenAI fecha financiamento recorde de US$ 40 bilhões com SoftBank a valuation de US$ 300B. O que muda para ChatGPT, GPT-5 e a corrida da IA em 2026.",
    keywords: "OpenAI financiamento 2026, OpenAI 40 bilhões SoftBank, OpenAI valuation 300 bilhões, rodada recorde IA, ChatGPT futuro 2026, GPT-5, Sam Altman financiamento, OpenAI IPO, corrida IA, SoftBank OpenAI Masayoshi Son",
  },
  "/post/ouro-maxima-historica-2026-como-investir": {
    title: "Ouro em Máxima Histórica em 2026: Como Investir no Brasil",
    description: "Ouro em máxima histórica em 2026: motivos da alta, ETFs, GLD, OURO11, ouro físico no Brasil e como montar exposição protegida contra dólar e inflação.",
    keywords: "ouro máxima histórica 2026, como investir ouro 2026, OURO11 ETF, GLD ouro, ouro físico Brasil, ouro vs Bitcoin 2026, hedge inflação ouro, cotação ouro 2026, comprar ouro no Brasil, reservas ouro Banco Central",
  },
  "/post/acoes-brasileiras-baratas-valuation-2026": {
    title: "Ações Brasileiras Baratas em 2026: Valuation Atrativo na B3",
    description: "Ações brasileiras baratas em 2026: análise de valuation, P/L histórico, dividend yield e oportunidades na B3 com Selic em queda e Ibovespa descontado.",
    keywords: "ações brasileiras baratas 2026, valuation B3 2026, ações P/L atrativo, dividend yield Brasil, Ibovespa descontado, ações para comprar 2026, oportunidades B3, Selic queda ações, value investing Brasil, ações baratas Selic",
  },
  "/post/ia-mercado-financeiro-2026-investimentos": {
    title: "IA no Mercado Financeiro em 2026: Como a IA Está Transformando Investimentos",
    description: "Como a IA está transformando investimentos em 2026: robôs-advisor (Warren, Magnetis, XP), análise fundamentalista, Open Finance, Resolução BCB 287/2022 e como usar IA para triagem de ativos no Brasil.",
    keywords: "IA mercado financeiro 2026, robô advisor Brasil, Warren Magnetis XP IA, IA investimentos 2026, análise fundamentalista IA, Status Invest IA, Open Finance IA, BCB resolução 287 2022, NVIDIA AI financial services, ChatGPT investimentos, IA para investidor pessoa física",
  },
  "/post/openai-financiamento-2026": {
    title: "OpenAI Capta US$ 40 Bilhões em 2026: O Que Significa para o Futuro da IA",
    description: "Análise completa da rodada de US$ 40 bilhões da OpenAI em 2026: investidores, valuation, impacto no mercado de IA, o que muda para ChatGPT e o que isso diz sobre a corrida pela AGI.",
    keywords: "OpenAI financiamento 2026, OpenAI 40 bilhões, valuation OpenAI 2026, rodada Series E OpenAI, investimento IA 2026, SoftBank OpenAI, corrida AGI financiamento, ChatGPT futuro 2026, OpenAI vs Anthropic investimento",
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


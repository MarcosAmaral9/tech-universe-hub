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
    title: "Jujutsu Kaisen: Guia Completo — Arcos, Sistema de Maldições e Personagens",
    description: "Guia definitivo de Jujutsu Kaisen: todos os arcos (cap. 1–271), sistema de energia maldita e Domínios, personagens principais, temporadas do anime e por onde começar em 2026.",
    keywords: "Jujutsu Kaisen guia completo, JJK arcos manga, energia maldita JJK, Domínio Expansão, Yuji Itadori, Gojo Satoru, Sukuna, Megumi Fushiguro, MAPPA JJK, JBC manga JJK, Manga Plus JJK",
  },
  "/post/rezero-temporada-4-guia-2026": {
    title: "Re:ZERO Temporada 4: Torre de Plêiades — Guia Completo",
    description: "Re:ZERO T4 estreia em abril de 2026 (White Fox, Crunchyroll). Arco 6: Torre de Plêiades — Subaru, Beatrice, Rem, Roswaal e as revelações sobre Satella. 25 episódios previstos.",
    keywords: "ReZero temporada 4, Re:ZERO T4, Torre de Pleiades ReZero, Subaru Emilia T4, Beatrice ReZero, Rem ReZero, Satella, White Fox ReZero, Crunchyroll ReZero T4, Arco 6 ReZero, retorno pela morte",
  },
  "/post/demon-slayer-hashira-guia-2026": {
    title: "Demon Slayer: Guia Completo dos Hashira — Respirações, Arcos e Destinos",
    description: "Os 9 Pilares de Demon Slayer: Rengoku, Tengen, Muichiro, Mitsuri, Obanai, Sanemi, Gyomei, Giyu. Técnicas de Respiração, arcos individuais, destinos e a origem da Respiração Solar de Yoriichi.",
    keywords: "Demon Slayer Hashira, Pilares Demon Slayer, Rengoku Respiração do Fogo, Tengen Uzui Som, Muichiro Névoa, Gyomei Pedra, Giyu Água, Respiração Solar Yoriichi, Corporação Extermínio, Kimetsu no Yaiba Ufotable",
  },

   // ═══════════════════════════════════════════════════════════
  // CATEGORIA: FINANCAS — 37 posts
  // ═══════════════════════════════════════════════════════════
   "/post/acoes-brasileiras-baratas-valuation-2026": {
    title: "Ações Brasileiras Baratas em 2026: Valuation, P/L e Onde Está o Desconto",
    description: "Com o Ibovespa oscilando e Selic ainda alta, algumas ações brasileiras negociam com desconto histórico. Análise de valuation, P/L, P/VP e setores com maior potencial em 2026.",
    keywords: "ações brasileiras baratas 2026, valuation ações B3, P/L ações Brasil, ibovespa desconto 2026, ações subvalorizadas Brasil, onde investir bolsa 2026, VALE3 PETR4 barato, análise fundamentalista ações, setor bancário desconto, small caps baratas 2026",
  },
  "/post/berkshire-hathaway-greg-abel-2026-sem-buffett": {
    title: "Berkshire Hathaway Meeting 2026: Greg Abel Sem Buffett — O Que Esperar",
    description: "A primeira reunião anual da Berkshire Hathaway sem Warren Buffett na cadeira. O que Greg Abel sinalizou para o futuro, a carteira de ações e o que o investidor brasileiro aprende com isso.",
    keywords: "Berkshire Hathaway 2026, Greg Abel CEO, Warren Buffett reunião anual, Berkshire meeting 2026, Greg Abel investimentos, Berkshire portfólio 2026, BRK.B BRK.A 2026, value investing 2026, lições Berkshire investidor brasileiro",
  },
  "/post/bitcoin-2026-vale-comprar": {
    title: "Bitcoin em 2026: Vale Comprar Agora ou Esperar?",
    description: "Bitcoin corrigiu após o recorde de R$ 731 mil em 2025 e ronda os R$ 409–427 mil. Análise dos ciclos históricos, ETFs, demanda institucional e se vale comprar agora.",
    keywords: "bitcoin 2026 vale comprar, bitcoin preço 2026, BTC correção 2026, ETF bitcoin B3, BITH11 HASH11, halving bitcoin, cripto 2026 investir, bitcoin ciclos históricos, comprar bitcoin Brasil, bitcoin vs altcoins, criptomoedas 2026",
  },
  "/post/bitcoin-criptomoedas-2026-investir": {
    title: "Bitcoin e Criptomoedas em 2026: Ainda Dá Para Lucrar ou Já Passou da Hora?",
    description: "O mercado cripto entrou em maturidade regulatória em 2026. Entenda o cenário, quais criptomoedas têm potencial, estratégia DCA, tributação e como investir com segurança.",
    keywords: "bitcoin criptomoedas 2026, investir cripto 2026, bitcoin vale a pena 2026, ethereum solana 2026, DCA cripto, ETF bitcoin B3 BITH11, tributação criptomoedas Brasil, halving bitcoin, altcoins 2026, como comprar bitcoin segurança",
  },
  "/post/calculadoras-financeiras-ativos": {
    title: "Calculadoras Financeiras: Simule Investimentos em Tempo Real — B3, Cripto, Câmbio e Metais",
    description: "Calculadoras financeiras interativas com cotações em tempo real: B3, criptomoedas, câmbio (dólar, euro) e metais preciosos. Simule quanto comprar com qualquer valor em reais.",
    keywords: "calculadoras financeiras, simulador investimentos tempo real, quanto comprar bitcoin reais, preço ações B3 hoje, cotação dólar real, preço ouro gramas brasil, simulador cripto, calculadora PETR4 VALE3, calcular frações bitcoin, ferramenta financeira online",
  },
  "/post/carteira-investimentos-iniciantes-2026": {
    title: "Carteira de Investimentos para Iniciantes 2026: Monte do Zero em 5 Passos",
    description: "Guia completo para montar uma carteira de investimentos do zero em 2026: perfil de investidor, reserva de emergência, classes de ativos e modelos de carteira para cada perfil.",
    keywords: "carteira de investimentos para iniciantes 2026, como investir do zero, perfil de investidor, reserva de emergência, renda fixa, renda variável, carteira conservadora moderada arrojada, onde investir 2026, ETFs FIIs ações iniciante, corretoras 2026",
  },
  "/post/cdb-2026-guia-completo": {
    title: "CDB em 2026: Ainda Vale a Pena? Guia Completo com Taxas Reais",
    description: "CDB 100% CDI, 110% CDI, IR regressivo e comparação com LCI, LCA e Tesouro Direto. Tudo que você precisa saber para investir bem em renda fixa em 2026.",
    keywords: "CDB 2026, CDB vale a pena, CDB 110% CDI, CDB liquidez diária, IR regressivo CDB, CDB vs LCI LCA, CDB vs Tesouro Direto, renda fixa 2026, FGC CDB, CDI 2026, melhores CDBs 2026, CDB banco digital",
  },
  "/post/copom-abril-2026-selic-investimentos": {
    title: "Copom Abril 2026: Selic, Decisão e O Que Muda nos Investimentos",
    description: "O Copom reuniu-se em abril de 2026 e confirmou corte de 0,50 ponto na Selic. Entenda o que mudou, por que o mercado reagiu e como reposicionar seus investimentos.",
    keywords: "Copom abril 2026, Selic corte abril 2026, reunião Copom decisão, investimentos após Copom, tesouro direto Selic caindo, FIIs Copom 2026, renda fixa Copom, Banco Central decisão juros abril",
  },
  "/post/copom-selic-1450-corte-abril-2026": {
    title: "Copom Corta Selic para 14,50%: O Que Muda nos Seus Investimentos",
    description: "O Copom cortou a Selic de 15% para 14,50% em março de 2026. Análise completa do comunicado, projeções do Focus e como reposicionar a carteira de renda fixa e variável.",
    keywords: "Copom Selic 14,50 2026, corte Selic maio 2026, comunicado Copom março 2026, projeções Selic Focus, renda fixa Selic caindo, FIIs alta Copom, tesouro prefixado oportunidade, investimentos ciclo queda juros",
  },
  "/post/cortar-gastos-2026": {
    title: "Cortar Gastos em 2026: 20 Estratégias Práticas Para Liberar Renda Para Investir",
    description: "Energia, supermercado, assinaturas e transporte: estratégias validadas para cortar gastos em 2026 e redirecionar a economia para investimentos que constroem patrimônio.",
    keywords: "cortar gastos 2026, como economizar dinheiro 2026, reduzir despesas mensais, assinaturas cancelar 2026, economia doméstica dicas, liberar dinheiro investir, orçamento familiar 2026, gastos fixos reduzir, economia energia supermercado",
  },
  "/post/dolar-queda-2026-investir-exterior": {
    title: "Dólar em Queda em 2026: Vale Investir no Exterior Mesmo Assim?",
    description: "Com o dólar recuando de R$ 6,30 para R$ 5,60, muitos investidores se perguntam se ainda faz sentido ter ativos dolarizados. A resposta é sim — e aqui está o porquê.",
    keywords: "dólar queda 2026, investir exterior dólar barato, IVVB11 dólar caindo, ETF internacional 2026, BDR dólar fraco, hedge cambial 2026, diversificação internacional real, SP500 BRL 2026, risco cambial investimento",
  },
  "/post/economia-domestica-2026-cortar-gastos": {
    title: "Economia Doméstica em 2026: 30 Dicas Para Cortar Gastos Sem Perder Qualidade de Vida",
    description: "Energia, supermercado, assinaturas e transporte: corte até R$ 1.500/mês do orçamento doméstico com estratégias práticas validadas em 2026.",
    keywords: "economia doméstica 2026, como economizar em casa 2026, dicas cortar gastos, reduzir conta de luz, economizar no supermercado, cancelar assinaturas, orçamento familiar 2026, reserva de emergência, marmita economia, poupar dinheiro 2026",
  },
  "/post/educacao-financeira-metodo-3-baldes": {
    title: "Método dos 3 Baldes: Educação Financeira Para Quem Sempre Gastou Tudo",
    description: "Se você chega no fim do mês sem dinheiro, o Método dos 3 Baldes é para você. Sistema simples de educação financeira que funciona para qualquer salário em 2026.",
    keywords: "método dos 3 baldes, educação financeira 2026, como guardar dinheiro, organizar finanças pessoais, finanças para iniciantes, controle financeiro 2026, como economizar salário, regra 50 30 20, investir com pouco dinheiro, comportamento financeiro",
  },
  "/post/etfs-2026-guia-completo-investir": {
    title: "ETFs em 2026: Guia Completo Para Investir com Diversificação e Baixo Custo",
    description: "ETFs são a forma mais simples de investir com diversificação em 2026. Guia com os melhores fundos de índice na B3, como BOVA11, IVVB11 e IMAB11, estratégias e erros a evitar.",
    keywords: "ETFs 2026, melhores ETFs Brasil 2026, BOVA11, IVVB11, SMAL11, IMAB11, NASD11, fundos de índice B3, como investir em ETFs, ETF renda fixa, ETF internacional, diversificação baixo custo, ETF vs fundo de ações",
  },
  "/post/etfs-b3-guia-completo-2026": {
    title: "ETFs na B3 em 2026: Guia Completo de Fundos de Índice Listados",
    description: "Guia completo dos ETFs disponíveis na B3 em 2026: BOVA11, IVVB11, SMAL11, IMAB11 e mais de 120 opções. Compare taxas, liquidez e estratégias para montar seu portfólio.",
    keywords: "ETFs B3 2026, melhores ETFs listados B3, BOVA11 IVVB11 SMAL11 2026, ETF renda fixa IMAB11, fundos de índice Brasil, ETF internacional B3, como investir ETF B3, taxa administração ETF, ETF vs fundo ações ativo",
  },
  "/post/fiis-2026-ainda-vale-investir": {
    title: "FIIs em 2026: Ainda Vale a Pena Investir com a Selic Caindo?",
    description: "Com o início do ciclo de queda dos juros, os FIIs voltam ao radar. Entenda o cenário, os setores mais promissores de 2026 e os cuidados antes de investir em fundos imobiliários.",
    keywords: "FIIs 2026 vale a pena, fundos imobiliários Selic caindo, IFIX 2026, FII papel vs tijolo, DY P/VP FIIs, melhores FIIs logística shoppings, renda passiva FII 2026, dividendos FII isento IR, investir FII ciclo de corte Selic",
  },
  "/post/fiis-2026-melhores-fundos-imobiliarios": {
    title: "FIIs em 2026: Os Melhores Fundos Imobiliários e Como Analisar",
    description: "Guia completo de FIIs para 2026: como escolher os melhores fundos imobiliários, analisar DY, P/VP e vacância, e construir uma carteira que paga dividendos mensais isentos de IR.",
    keywords: "FIIs 2026, melhores fundos imobiliários 2026, IFIX 2026, dividendos mensais FIIs, FII papel CRI, FII tijolo logística, FII híbrido, como analisar FII, DY P/VP vacância, renda passiva imóveis, fundos imobiliários B3",
  },
  "/post/fiis-defensivos-abril-2026": {
    title: "FIIs Defensivos em Abril 2026: Quais Fundos Resistem à Volatilidade",
    description: "Num cenário de volatilidade geopolítica e Selic em queda, FIIs defensivos com contratos longos, vacância baixa e gestão comprovada se destacam. Saiba quais avaliar.",
    keywords: "FIIs defensivos 2026, fundos imobiliários baixa volatilidade, FII logística defensivo, FII papel defensivo abril 2026, FII contrato atípico longo, FIIs crise geopolítica, IFIX volatilidade, quais FIIs comprar abril 2026",
  },
  "/post/guerra-ira-petroleo-petrobras-2026": {
    title: "Guerra EUA-Irã e Estreito de Ormuz: Vale a Pena Investir em Petrobras (PETR4) Agora?",
    description: "O conflito EUA-Irã fechou o Estreito de Ormuz e disparou o Brent de US$ 73 para US$ 116. PETR4 subiu 60% em 2026. Análise dos 3 cenários e como posicionar sua carteira.",
    keywords: "PETR4 2026, Petrobras vale a pena comprar, guerra EUA Irã petróleo, Estreito de Ormuz fechado, Brent 2026, petróleo geopolítica, PETR4 dividendos 2026, Petrobras preço-alvo BTG, petroleo investimento 2026, PETR3 PETR4 análise",
  },
  "/post/ia-mercado-financeiro-2026-investimentos": {
    title: "IA no Mercado Financeiro 2026: Como a Inteligência Artificial Transforma Investimentos",
    description: "Mais de 40% dos trades na B3 já são executados por algoritmos. Descubra como a IA está mudando robo-advisors, análise de ações, detecção de fraudes e como usá-la a seu favor.",
    keywords: "IA mercado financeiro 2026, robo advisor Brasil, algoritmos investimento, inteligência artificial finanças, Warren Magnetis Vérios, trade automatizado B3, análise sentimento ações, IA investimentos pessoa física, chatGPT análise ações, machine learning fintech",
  },
  "/post/ia-para-financas-pessoais-2026": {
    title: "Como Usar IA Para Organizar Suas Finanças Pessoais em 2026",
    description: "Ferramentas de IA já categorizam gastos, simulam investimentos e respondem dúvidas financeiras. Guia prático com prompts reais, apps e cuidados com privacidade.",
    keywords: "IA finanças pessoais 2026, ChatGPT finanças, Gemini organizar gastos, apps IA controle financeiro, Mobills Organizze IA, prompt ChatGPT extratos, robo advisor Brasil gratuito, IA investimentos pessoais, simulação investimento IA",
  },
  "/post/ibovespa-recorde-selic-caindo-2026": {
    title: "Ibovespa Bate Recorde com Selic Caindo em 2026: Vale Entrar Agora?",
    description: "O Ibovespa superou 140 mil pontos pela primeira vez com o ciclo de queda da Selic. Análise dos setores mais beneficiados, valuation e estratégia para quem ainda não entrou.",
    keywords: "Ibovespa recorde 2026, IBOV 140000 pontos, Selic caindo bolsa sobe, investir Ibovespa 2026, BOVA11 alta 2026, setores bolsa queda juros, valuation Ibovespa 2026, small caps SMAL11, ações brasileiras 2026",
  },
  "/post/inflacao-proteger-investimentos-2026": {
    title: "Como Proteger Seus Investimentos da Inflação em 2026",
    description: "Com o IPCA projetado em 4,3% e riscos de alta por geopolítica, saiba quais investimentos realmente protegem contra a inflação: IPCA+, LCI, FIIs, ouro e ações.",
    keywords: "proteger investimentos inflação 2026, IPCA mais investimento, tesouro IPCA 2026, inflação alta onde investir, LCI LCA inflação, FIIs proteção inflação, ouro hedge inflação, renda fixa IPCA Brasil 2026",
  },
  "/post/investir-em-tecnologia-2026": {
    title: "Como Investir em Tecnologia em 2026: Semicondutores, IA, Data Centers e ETFs",
    description: "Guia completo de como investir em tecnologia em 2026: setores de semicondutores, IA, data centers e cibersegurança. ETFs, BDRs e estratégias para iniciantes e intermediários.",
    keywords: "investir em tecnologia 2026, ETF tecnologia Brasil, semicondutores investimento, Nvidia AMD ações 2026, QQQ IVVB11 tech, BDR tecnologia B3, ETF cibersegurança, data center investimento, setor tecnologia bolsa 2026, Magnificent Seven BDR",
  },
  "/post/irpf-2026-guia-declarar-pagar-menos": {
    title: "IRPF 2026: Guia Completo Para Declarar e Pagar Menos Imposto",
    description: "Prazo, deduções, declaração de investimentos e como usar o modelo completo para pagar menos IR em 2026. Guia passo a passo com dicas de planejamento tributário.",
    keywords: "IRPF 2026, declaração imposto de renda 2026, como declarar IR 2026, deduções IRPF 2026, modelo completo IR dedução, declarar investimentos IR, restituição IR 2026, prazo IRPF 2026, pagar menos imposto renda, planejamento tributário pessoa física",
  },
  "/post/magnificent-seven-resultados-q1-2026-apple-tim-cook": {
    title: "Magnificent Seven no Q1 2026: Resultados, Apple e o Que Muda Para o Investidor Brasileiro",
    description: "Apple, Microsoft, Nvidia, Alphabet, Meta, Amazon e Tesla divulgaram resultados do Q1 2026. Análise completa e impacto para quem tem BDRs e ETFs internacionais no Brasil.",
    keywords: "Magnificent Seven resultados 2026, Apple Q1 2026, Nvidia resultados 2026, Microsoft Q1 2026, Big Tech resultados primeiro trimestre, BDRs Apple Microsoft Brasil, IVVB11 Big Tech, Nasdaq 2026 resultados, Tim Cook Apple resultados",
  },
  "/post/ouro-maxima-historica-2026-como-investir": {
    title: "Ouro em Máxima Histórica em 2026: Como Investir e Por Que Ele Subiu",
    description: "O ouro superou US$ 3.000/oz em 2026 com demanda de bancos centrais e incerteza geopolítica. Saiba como investir em ouro no Brasil via ETF, OZ1D ou fundos.",
    keywords: "ouro máxima histórica 2026, preço ouro 2026 Brasil, como investir em ouro, OZ1D tesouro ouro B3, ETF ouro Brasil, ouro vs inflação, ouro hedge geopolítica, ouro bancos centrais 2026, preço ouro real grama 2026",
  },
  "/post/petroleo-brent-125-bloqueio-ormuz-2026": {
    title: "Petróleo Brent a US$ 125 e Bloqueio do Estreito de Ormuz: Impacto nos Investimentos",
    description: "O Brent disparou para US$ 125 com o bloqueio do Estreito de Ormuz. Análise do impacto em Petrobras, inflação brasileira, transportes e como posicionar a carteira.",
    keywords: "petróleo Brent 125 2026, Estreito de Ormuz bloqueado, impacto petróleo investimentos, PETR4 alta petróleo, inflação combustíveis Brasil 2026, Petrobras Brent 125, crise petróleo 2026, crude oil 2026 Brasil",
  },
  "/post/planejamento-financeiro-2026-metas": {
    title: "Planejamento Financeiro Para 2026: Como Definir Metas e Realmente Alcançá-las",
    description: "Chega de começar o ano com as mesmas metas financeiras. Aprenda o método SMART, o roadmap mensal de 2026 e a mentalidade que separa quem alcança objetivos de quem não alcança.",
    keywords: "planejamento financeiro 2026, metas financeiras 2026, método SMART finanças, como economizar 2026, organização financeira, reserva de emergência meta, orçamento pessoal 2026, como sair das dívidas, metas SMART dinheiro, finanças pessoais 2026",
  },
  "/post/pnad-desemprego-61-marco-2026": {
    title: "PNAD: Desemprego Cai Para 6,1% em Março de 2026 — O Que Significa Para o Investidor",
    description: "O desemprego no Brasil atingiu 6,1% em março de 2026, o menor nível histórico. Análise do impacto no consumo, renda, Selic e quais setores se beneficiam.",
    keywords: "PNAD desemprego 2026, desemprego Brasil março 2026, desemprego 6,1% Brasil, mercado trabalho 2026, consumo baixo desemprego, impacto econômico desemprego mínimo, IBGE PNAD 2026, ações consumo desemprego, Selic desemprego baixo",
  },
  "/post/poupanca-vs-cdb-tesouro-2026": {
    title: "Poupança vs CDB vs Tesouro Direto em 2026: Qual Rende Mais?",
    description: "Com a Selic a 13,25% ao ano, a poupança perde para CDB e Tesouro Direto mesmo com IR. Comparativo completo com simulação de R$ 10.000 em 12 meses.",
    keywords: "poupança vs CDB vs Tesouro Direto 2026, poupança ou CDB, qual rende mais 2026, Tesouro Selic rentabilidade, CDB 100% CDI, reserva de emergência, renda fixa 2026, FGC garantia, IR renda fixa, poupança vale a pena",
  },
  "/post/previdencia-privada-pgbl-vgbl-2026": {
    title: "Previdência Privada em 2026: PGBL ou VGBL? Guia Completo Para Decidir Sem Erro",
    description: "A escolha errada entre PGBL e VGBL pode custar milhares de reais em IR desnecessário. Guia definitivo com tabela progressiva vs regressiva, taxas e quando cada um compensa.",
    keywords: "previdência privada 2026, PGBL ou VGBL, diferença PGBL VGBL, tabela regressiva progressiva previdência, taxa de administração previdência, portabilidade PGBL, PGBL dedução IR, VGBL planejamento sucessório, previdência privada vale a pena 2026",
  },
  "/post/renda-passiva-2026-formas-comprovadas": {
    title: "Renda Passiva Real em 2026: 7 Formas Comprovadas de Ganhar Dinheiro Dormindo",
    description: "Renda passiva não é mito — é construção patrimonial. Conheça 7 estratégias validadas para 2026 que geram renda recorrente, com valores reais e como começar com pouco.",
    keywords: "renda passiva 2026, como ter renda passiva, FIIs dividendos mensais, ações pagadoras de dividendos, CDB renda passiva, renda passiva com investimentos, quanto investir para viver de renda, royalties renda passiva, P2P lending, renda passiva Brasil 2026",
  },
  "/post/reserva-emergencia-2026-como-montar": {
    title: "Como Montar Sua Reserva de Emergência em 2026: Guia Definitivo",
    description: "58% dos brasileiros não têm reserva. Aprenda quanto guardar, onde investir (Tesouro Selic ou CDB), passo a passo completo e os 5 erros que destroem a sua reserva de emergência.",
    keywords: "reserva de emergência 2026, como montar reserva de emergência, quanto guardar reserva emergência, Tesouro Selic reserva emergência, CDB liquidez diária, reserva emergência CLT autônomo, onde guardar reserva 2026, planejamento financeiro segurança",
  },
  "/post/sair-das-dividas-2026-plano-acao": {
    title: "Sair das Dívidas em 2026: O Plano de Ação Que Realmente Funciona",
    description: "73 milhões de brasileiros estão endividados. Plano de ação passo a passo: liste, classifique, negocie (Serasa, Desenrola Brasil) e use Avalanche ou Bola de Neve para quitar de vez.",
    keywords: "sair das dívidas 2026, como quitar dívidas, Serasa Limpa Nome, Desenrola Brasil, método avalanche dívidas, método bola de neve, negociar dívida cartão, cheque especial juros, portabilidade de crédito, dívidas cartão de crédito Brasil",
  },
  "/post/selic-comeca-cair-2026": {
    title: "Selic Começa a Cair em 2026: O Que Muda nos Seus Investimentos Agora?",
    description: "Depois de dois anos a 15%, a Selic iniciou o ciclo de queda em março de 2026. Saiba como reposicionar a carteira — prefixado, IPCA+, FIIs e ações — antes que a janela se feche.",
    keywords: "Selic caindo 2026, queda da Selic investimentos, Tesouro Prefixado 2026, Tesouro IPCA+ longo, marcação a mercado, CDB prefixado, FIIs ciclo de queda, Copom corte Selic, Boletim Focus 2026, reposicionar carteira Selic",
  },
  "/post/tesouro-direto-2026-guia-completo": {
    title: "Tesouro Direto em 2026: Ainda Vale a Pena? Guia Completo Atualizado",
    description: "Selic acima de 13%, IPCA+ pagando 6,5% real e prefixados em alta histórica. Descubra qual título do Tesouro Direto faz mais sentido para cada objetivo em 2026.",
    keywords: "tesouro direto 2026, tesouro selic vale a pena, tesouro ipca mais 2026, tesouro prefixado 2029, marcação a mercado tesouro, melhor tesouro direto 2026, tesouro vs CDB LCI, renda fixa governo federal, como investir tesouro direto, calculadora tesouro direto",
  },
  "/post/tesouro-prefixado-vs-ipca-2026": {
    title: "Tesouro Prefixado ou IPCA+? Qual Escolher com a Selic Caindo em 2026",
    description: "Com a Selic caindo de 15% para projeção de 12,25% até fim de 2026, a pergunta é: travo taxa prefixada agora ou fico protegido com IPCA+? Simulações reais e recomendação por perfil.",
    keywords: "Tesouro Prefixado ou IPCA 2026, Tesouro Direto Selic caindo, marcação a mercado tesouro, NTN-B IPCA+ 2035, Tesouro Prefixado 2029, renda fixa ciclo queda juros, qual tesouro direto comprar 2026, simulação tesouro prefixado, proteção inflação investimento",
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
    description: "MAPPA confirmou JJK Temporada 4: Culling Game Part 2 em produção. Regras do Culling Game, colônias, personagens centrais, quando estreia e como se preparar para a Part 2.",
    keywords: "Jujutsu Kaisen temporada 4, JJK T4, Culling Game Part 2, MAPPA JJK, Yuji Itadori, Sukuna, Yuta Okkotsu, Megumi Fushiguro, JJK anime 2026, Crunchyroll JJK, JUJU FES 2026",
  },
  "/post/melhores-jogos-anime-2026": {
    title: "Os Melhores Jogos de Anime de 2026: Fighting, RPG, Mobile e Visual Novel",
    description: "Guia completo dos melhores jogos de anime em 2026: Dragon Ball Sparking ZERO, FighterZ, One Piece Odyssey, Demon Slayer Hinokami Chronicles, Genshin Impact, Blue Archive e visual novels como Steins;Gate.",
    keywords: "melhores jogos anime 2026, Dragon Ball Sparking ZERO, Dragon Ball FighterZ, One Piece Odyssey, Demon Slayer Hinokami Chronicles, jogos anime PS5 PC, Genshin Impact, Blue Archive, Steins Gate visual novel, jogos otaku brasil",
  },
  "/post/tensura-guia-completo-temporadas-filmes": {
    title: "TenSura: Guia Completo — T1 a T4, Filme Scarlet Bond e Ordem de Assistência",
    description: "Guia definitivo de TenSura: Temporadas 1 a 4 (Spring 2026), Tensura Nikki spin-off, filme Scarlet Bond (2022), worldbuilding de Tempest e ordem de assistência recomendada. Light novel Fuse, estúdio 8bit, Crunchyroll.",
    keywords: "TenSura guia completo, Tensei Shitara Slime temporadas, TenSura T4 2026, filme Scarlet Bond TenSura, Tensura Nikki, ordem assistência TenSura, Rimuru Tempest worldbuilding, 8bit anime, Crunchyroll TenSura, Fuse light novel",
  },
  "/post/tensura-personagens-rimuru-demon-lords": {
    title: "TenSura: Personagens, Floor Guardians e o Nascimento do Octagram",
    description: "Guia completo dos personagens de TenSura: Rimuru, Benimaru, Shion, Diablo, Veldora e Milim. Os 8 membros do Octagram com títulos e territórios. True Dragons. Personagens da T3 e T4 (Yuuki, Chloe).",
    keywords: "TenSura personagens, Rimuru Tempest, Milim Nava Dragon Nova, Diablo Primordial, Veldora Tempest, Octagram Demon Lords, Guy Crimson, Benimaru Shion TenSura, Chloe O'Bell heroína, Floor Guardians TenSura, T4 personagens novos",
  },
  "/post/overlord-ainz-guardians-personagens": {
    title: "Overlord: Ainz Ooal Gown, Floor Guardians e Personagens do Novo Mundo",
    description: "Fichas completas de Overlord: Ainz, Albedo, Demiurge, Shalltear, Cocytus, Aura, Mare, Sebas, Climb, Gazef Stronoff, Brain Unglaus e Fluder Paradyne. Nazarick, lealdade programada e os NPCs que ganharam vida.",
    keywords: "Overlord personagens, Ainz Ooal Gown poderes, Albedo Overlord, Demiurge Overlord, Shalltear Bloodfallen, Cocytus guardião, Nazarick Floor Guardians, Climb Overlord, Gazef Stronoff, Fluder Paradyne, Rubedo Overlord",
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
    title: "Tsukimichi Moonlit Fantasy: Guia Completo — T1 (C2C), T2 (J.C.Staff) e Sistema de Magia",
    description: "Tsuki ga Michibiku Isekai Douchuu: T1 C2C (2021), T2 J.C.Staff (jan-jun 2024, 25 eps). Sistema de magia de Makoto (Sakai, mana ilimitado), os três mundos da série e diferenças entre anime e light novel Azumi Kei.",
    keywords: "Tsukimichi Moonlit Fantasy, Tsuki ga Michibiku Isekai, T2 J.C.Staff 2024, Makoto Misumi magia, Sakai Tsukimichi, Tomoe Mio personagens, Azumi Kei light novel, C2C anime, J.C.Staff anime, Crunchyroll Tsukimichi, Tsukimichi T3",
  },
  "/post/mugen-gacha-level-9999-traicao-dungeon": {
    title: "My Gift Lvl 9999 Unlimited Gacha: O Revenge Isekai do J.C.Staff — Guia 2026",
    description: "Mugen Gacha: Light traído pelos companheiros no Abismo usa o Gacha Ilimitada para invocar aliadas nível 9999. Anime J.C.Staff (out-dez 2025, HIDIVE). Subgênero revenge isekai, sistema de gacha, hierarquia de raças e personagens.",
    keywords: "Mugen Gacha, My Gift Lvl 9999, Shinjiteita Nakamatachi, dungeon okuchi, traição isekai, revenge isekai, J.C.Staff 2025, HIDIVE, Sentai Filmworks, Light protagonista, nível 9999 aliadas, gacha isekai",
  },
  "/post/kizoku-tensei-noble-reincarnation-guia": {
    title: "Noble Reincarnation (Kizoku Tensei): Guia Completo — Cap Infinito e Política Imperial",
    description: "Kizoku Tensei anime CompTown estreou jan 2026 (Crunchyroll). Noah Ararat, 13º filho do imperador com cap de nível infinito e absorção de lealdade. Sistema de poder, política imperial, comparativo com isekais de nobre.",
    keywords: "Kizoku Tensei, Noble Reincarnation, Noah Ararat, cap nível infinito, absorção lealdade, CompTown anime, SB Creative GA Novel, Nazuna Miki, isekai nobre 2026, Michio Fukuda diretor, Crunchyroll inverno 2026",
  },
  "/post/isekai-nonbiri-nouka-farming-life-guia": {
    title: "Farming Life in Another World: Guia Completo — T1 e T2 Confirmada (2026)",
    description: "Isekai Nonbiri Nouka: Hiraku Machio reencarnado com a Ferramenta Universal de Fazenda. T1 estúdio Zero-G (jan-mar 2023, Amazon Prime Video), T2 confirmada abril 2026. Personagens, sistema de fazenda e como a comunidade cresceu.",
    keywords: "Isekai Nonbiri Nouka, Farming Life Another World, Hiraku Machio, Ferramenta Universal de Fazenda, Zero-G anime, Amazon Prime Video, Loo vampira, Temporada 2 Farming Life 2026, slice-of-life isekai, Kinosuke Naito",
  },
  "/post/maousama-retry-demon-lord-guia-completo": {
    title: "Demon Lord Retry! (Maou-sama): Guia Completo — Original e Retry R",
    description: "Maou-sama Retry!: Akira Oono reencarnado como Hakuto Kunai, o Rei Demônio de seu próprio MMORPG. Anime original Ekachi Epilka (2019) e continuação Retry R (Studio Geek Toys, Crunchyroll). Aku, sistema de poder e diferenças entre as versões.",
    keywords: "Maou-sama Retry, Demon Lord Retry, Hakuto Kunai, Aku, Akira Oono programador isekai, Ekachi Epilka 2019, Maou-sama Retry R, Studio Geek Toys, Crunchyroll, Kurone Kanzaki, Futabasha, rei demônio MMORPG",
  },
  "/post/okiraku-ryoushu-territory-defense-guia": {
    title: "Easygoing Territory Defense (Okiraku Ryoushu): Guia Completo 2026",
    description: "Okiraku Ryoushu anime NAZ estreou jan 2026 (Crunchyroll). Van usa a Magia de Produção para defender um território com artesanato e infraestrutura. Sou Akaike/Overlap, Seven Seas Entertainment, comparativo com TenSura e Overlord.",
    keywords: "Okiraku Ryoushu, Easygoing Territory Defense, Van Magia de Produção, NAZ anime 2026, Sou Akaike Overlap, Seven Seas Entertainment, Crunchyroll 2026, isekai construção território, Tetsuya Tatamitani, inverno 2026 anime",
  },
  "/post/kaiju-no-8-temporada-2-guia-arco-final-2026": {
    title: "Kaiju No. 8 Temporada 2: Guia Completo da T2 e Arco Final 2026",
    description: "Kaiju No. 8 T2 estreou na Spring Season 2026 pela Production I.G. Sistema da Defense Force, personagens centrais da T2 (Kafka, Mina, Kikoru) e o arco final do mangá de Naoya Matsumoto. Disponível na Crunchyroll.",
    keywords: "Kaiju No. 8 Temporada 2, Kaiju No 8 T2, Kafka Hibino, Mina Ashiro, Kikoru Shinomiya, Defense Force Numbers, Production I.G 2026, Naoya Matsumoto manga, Spring Season 2026, Crunchyroll Kaiju No 8, arco final Kaiju",
  },
  "/post/ia-transformando-dublagem-animes": {
    title: "IA na Dublagem de Animes: Voice Cloning e o Futuro da Localização",
    description: "Como voice cloning e IA estão transformando a dublagem de animes: ElevenLabs, Microsoft VALL-E, acordos SAG-AFTRA, manifesto Sated-SP e o que muda para o mercado brasileiro de dublagem.",
    keywords: "IA dublagem animes, voice cloning dublagem, ElevenLabs dublagem, VALL-E Microsoft, SAG-AFTRA IA voz, Sated SP manifesto IA, dublagem brasileira IA, clonagem de voz anime, Crunchyroll IA legendagem, futuro dublagem 2026",
  },
  "/post/dragon-ball-super-beerus-anime-confirmado-2026": {
    title: "Dragon Ball: Série Beerus — Tudo que Sabemos sobre o Anime do Deus da Destruição",
    description: "Toei Animation confirmou série anime de Beerus, Deus da Destruição do Universo 7. Contexto pós-Toriyama, o que esperar, quem é Beerus desde Battle of Gods (2013) e o desafio de Dragon Ball sem seu criador.",
    keywords: "Dragon Ball Beerus anime, Dragon Ball novo anime 2026, Beerus Deus da Destruição, Toei Animation Dragon Ball, Akira Toriyama legado, Toyotaro Dragon Ball, Dragon Ball Super Beerus, Whis, Champa, Dragon Ball 2026",
  },
  "/post/naruto-especiais-confirmados-2026": {
    title: "Naruto: Episódios Especiais 2026 — Light Novels, Studio Pierrot e Crunchyroll",
    description: "Studio Pierrot e TV Tokyo confirmaram especiais de Naruto para 2026 adaptando light novels da franquia (Sasuke Retsuden, Konoha Shinden). O que cobrem, quando estreiam na Crunchyroll e o legado de Naruto no Brasil.",
    keywords: "Naruto especiais 2026, Naruto novos episódios 2026, Studio Pierrot Naruto, Naruto light novel anime, Sasuke Retsuden anime, Konoha Shinden, Crunchyroll Naruto, TV Tokyo Naruto, Panini Naruto Brasil, Naruto 20 anos",
  },
  "/post/big-three-naruto-bleach-one-piece-2026": {
    title: "Big Three em 2026: Status Atual de Naruto, Bleach e One Piece",
    description: "O Big Three do anime em 2026: One Piece na Final Saga com Elbaf, Bleach TYBW encerrado, Naruto com especiais. Histórico, números de vendas, legado e a questão do 'novo Big Three' (JJK, MHA, Demon Slayer).",
    keywords: "Big Three anime, Naruto Bleach One Piece 2026, Big Three status, One Piece Final Saga, Bleach TYBW encerrado, Naruto especiais 2026, novo Big Three, JJK MHA Demon Slayer, shonen jump clássicos, legado Big Three",
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
    title: "Saúde Mental e Cultura Otaku: Fandom, Isolamento e Onde Buscar Ajuda",
    description: "Análise completa da relação entre saúde mental e cultura otaku: fandom como suporte social, hikikomori no Brasil, sinais de alerta, autocuidado e recursos (CVV 188, CAPS). Baseado em pesquisas reais e dados do CVV.",
    keywords: "saúde mental otaku, fandom suporte social, hikikomori Brasil, CVV 188 gratuito, CAPS saúde mental, isolamento anime, A Silent Voice saúde mental, autocuidado otaku, cultura otaku isolamento, FGV pesquisa jovens pandemia",
  },
  "/post/manga-vs-anime-adaptacao-2026": {
    title: "Mangá vs. Anime: Quando a Adaptação Supera o Original — Análise 2026",
    description: "O que o anime adiciona que o mangá não tem (trilha, voice acting, timing). Casos de 2025-2026: Dandadan supera, Solo Leveling perde detalhes. Guia por franquia: One Piece, JJK, Frieren, Berserk, Vinland Saga.",
    keywords: "manga vs anime adaptação, anime supera manga, manga melhor que anime, Dandadan anime, Solo Leveling anime manhwa, FMA Brotherhood, Berserk adaptação, trilha sonora anime, voice acting anime, guia por franquia manga anime 2026",
  },
  "/post/diferenca-mangas-manhuas-manhwas": {
    title: "Manga vs Manhwa vs Manhua: Diferenças Completas — História e Cultura",
    description: "Guia completo das diferenças entre manga japonês (Tezuka, preto e branco, Jump), manhwa coreano (webtoon, Naver, Solo Leveling) e manhua chinês (Xianxia, cultivo, Bilibili). Onde ler cada um legalmente.",
    keywords: "diferença manga manhwa manhua, manga japonês história, manhwa coreano webtoon, manhua chinês xianxia, Osamu Tezuka mangá origem, Naver Webtoon manhwa, Bilibili manhua, One Piece mangá, Solo Leveling manhwa, Tales Demons Gods",
  },
  "/post/como-diferenciar-manhuas-manhwas": {
    title: "Como Diferenciar Manhwa (Coreano) de Manhua (Chinês): Guia Completo",
    description: "Aprenda a diferenciar manhwa coreano (Solo Leveling, Tower of God, webtoon) de manhua chinês (Xianxia, cultivo marcial, Tales of Demons and Gods). Plataformas legais, títulos e 3 perguntas para identificar qualquer obra.",
    keywords: "diferenciar manhwa manhua, manhwa coreano, manhua chines, webtoon manhwa, xianxia manhua, cultivo marcial, Solo Leveling manhwa, Tower of God webtoon, Tales of Demons and Gods, Bilibili Comics, Webtoon gratuito",
  },
  "/post/frieren-temporada-3-confirmada-2026": {
    title: "Frieren Temporada 3 Confirmada: O Que Esperar da Continuação",
    description: "Frieren T3 confirmada após final aclamado da T2 em abril 2026. Tudo sobre os novos arcos, o que o mangá reserva e quando esperar a continuação da série nota 9,3 no MAL.",
    keywords: "Frieren temporada 3, Frieren Beyond Journey End T3, Frieren confirmada, Madhouse Frieren, anime Frieren 2026, Frieren mangá arcos, Stark Frieren, Sense Fern, Frieren Crunchyroll",
  },
  "/post/one-piece-elbaf-formato-sazonal-2026": {
    title: "One Piece: Arco de Elbaf e o Formato Sazonal — Tudo que Sabemos",
    description: "One Piece migrou para formato sazonal em abril de 2026 com o Arco de Elbaf. Toei Animation, episódio de estreia estendido, por que Elbaf importa, Usopp, Big Mom e como assistir via One Pace ou Crunchyroll.",
    keywords: "One Piece Elbaf, One Piece formato sazonal, arco Elbaf 2026, Toei Animation One Piece, Usopp Elbaf, One Piece Crunchyroll sazonal, One Piece abril 2026, One Pace site, Eiichiro Oda Elbaf, Big Mom Elbaf",
  },
  "/post/spring-season-animes-abril-2026": {
    title: "Spring Season 2026: Guia Completo dos Melhores Animes de Abril",
    description: "66 títulos na Spring Season 2026. One Piece Elbaf, Re:ZERO T4, TenSura T4, Dr. STONE final, Lazarus (Watanabe+MAPPA). Guia por gênero, calendário semanal, onde assistir e como gerenciar o acompanhamento sem perder o prazer.",
    keywords: "spring season 2026, animes abril 2026, One Piece Elbaf, ReZero T4, TenSura T4, Dr STONE final, Lazarus Watanabe MAPPA, Dandadan T2, Kaiju No 8 T2, Crunchyroll primavera 2026, melhores animes primavera 2026",
  },
  "/post/temporada-animes-abril-2026": {
    title: "Temporada de Animes Abril 2026: Guia Completo da Spring Season",
    description: "Spring Season 2026: One Piece Elbaf, Re:ZERO T4, TenSura T4, Dr. STONE arco final, Lazarus (Watanabe+MAPPA). 66 títulos — calendário por semana, onde assistir e guia de prioridade.",
    keywords: "temporada animes abril 2026, spring season animes 2026, One Piece Elbaf estreia, ReZero T4, TenSura T4, Dr STONE final, Lazarus anime, Crunchyroll abril 2026, simulcast abril 2026",
  },
  "/post/10-melhores-manhwas-sistema-2026": {
    title: "Os 10 Melhores Manhwas de Sistema para Ler em 2026",
    description: "Os 10 melhores manhwas com sistema de 2026: Solo Leveling, Tower of God, Omniscient Reader e mais. Seleção com sinopse, número de capítulos e onde ler legalmente.",
    keywords: "melhores manhwas sistema 2026, manhwa sistema, manhwa regressão, Solo Leveling manhwa, Tower of God, Omniscient Reader, manhwa webtoon brasil, manhwa 2026, melhores manhwas coreanos",
  },
  "/post/isekai-2026-genero-domina": {
    title: "Isekai 2026: Por Que o Gênero Ainda Domina o Anime e Seus Subgêneros",
    description: "Análise do fenômeno isekai em 2026: história do gênero, subgêneros (sistema, construção de reino, regressão, slice-of-life, revenge), por que domina e os melhores títulos para começar — TenSura, Mushoku Tensei, Re:Zero, KonoSuba.",
    keywords: "isekai 2026, porque isekai domina anime, subgeneros isekai, isekai sistema level up, isekai construcao reino, isekai regressao, TenSura isekai, Mushoku Tensei, Re:Zero, KonoSuba, melhores isekais 2026, Narou isekai",
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
  "/post/anthropic-mythos-modelo-ia-google-investimento-2026": {
    title: "Google Investe US$ 40 Bilhões na Anthropic e Mythos Chega — Resposta à OpenAI",
    description: "Google compromete US$ 40 bilhões na Anthropic a valuation de US$ 350B. Anthropic lança Mythos, modelo com cibersegurança avançada restrita a parceiros selecionados.",
    keywords: "Anthropic Mythos, Google investe Anthropic, Anthropic 40 bilhões, modelo Mythos IA, Claude Anthropic 2026, Anthropic valuation 350 bilhões, Anthropic vs OpenAI, Google IA investimento, cibersegurança IA Mythos, Dario Amodei, modelos IA 2026, Anthropic Google Cloud",
  },
  "/post/openai-bilhoes-financiamento-record-2026": {
    title: "OpenAI Capta US$ 40 Bilhões: Maior Rodada de IA da História",
    description: "OpenAI fecha financiamento recorde de US$ 40 bilhões com SoftBank a valuation de US$ 300B. O que muda para ChatGPT, GPT-5 e a corrida da IA em 2026.",
    keywords: "OpenAI financiamento 2026, OpenAI 40 bilhões SoftBank, OpenAI valuation 300 bilhões, rodada recorde IA, ChatGPT futuro 2026, GPT-5, Sam Altman financiamento, OpenAI IPO, corrida IA, SoftBank OpenAI Masayoshi Son",
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


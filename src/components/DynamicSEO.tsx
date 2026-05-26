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
  // ── Páginas de regiões de Pywel — SEO individual para indexação ──────────────
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
  "/post/hell-mode-gamer-isekai-guia-completo": {
    title: "Hell Mode: O Gamer no Isekai com Dificuldade Máxima — Guia Completo",
    description: "Hell Mode anime Yokohama Animation Laboratory estreou jan 2026 (HIDIVE/Prime Video). Kenichi Yamada, gamer de 35 anos reencarnado como Allen o Invocador no Hell Mode — 100x mais XP necessário.",
    keywords: "Hell Mode, Yarikomizuki Gamer, isekai gamer, Allen Invocador, Yokohama Animation Lab, anime 2026, HIDIVE, isekai dificuldade máxima, Hell Mode anime, invocador isekai",
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
  }
,
  "/post/crimson-desert-bosses-guia-chefes": {
    title: "Crimson Desert: Guia de Bosses — Como Derrotar Todos os Chefes",
    description: "Guia completo dos 76 bosses de Crimson Desert: estratégias, fraquezas, localização e recompensas de Myurdin, Kailok, Reed Devil, White Horn, Staglord, Hexe Marie, Kearush, Caliburn e mais. Patch 23/03/2026.",
    keywords: "Crimson Desert bosses, chefes Crimson Desert, Kailok Hornsplitter, Reed Devil, White Horn, Hexe Marie, Kearush Slayer, Caliburn boss final, guia bosses Pywel, fraquezas bosses",
  },
  "/post/crimson-desert-guia-iniciantes-dicas": {
    title: "Crimson Desert: Guia para Iniciantes — 20 Dicas Essenciais",
    description: "20 dicas para iniciantes em Crimson Desert: progressão sem XP, fast travel, combate avançado, inventário, culinária, companheiros e todos os sistemas que o jogo não explica. Evite os erros mais comuns em Pywel.",
    keywords: "Crimson Desert iniciantes, dicas Crimson Desert, guia começar Pywel, Abyss Artifacts, fast travel Crimson Desert, combate iniciante, Kliff Greymanes, Crimson Desert tips",
  },
  "/post/crimson-desert-melhores-equipamentos-inicio": {
    title: "Crimson Desert: Melhores Armas e Equipamentos do Início — Onde Encontrar",
    description: "Os melhores equipamentos do início ao meio de Crimson Desert: Sword of the Lord, Tauria's Curved Sword, Flamespitter, Knuckledrill, armaduras do Fallen Kingdom, Palm Concentrates e guia de refinamento completo.",
    keywords: "Crimson Desert equipamentos, melhores armas Crimson Desert, Sword of the Lord, Tauria Curved Sword, Flamespitter, Knuckledrill, Palm Concentrate, onde encontrar armas Pywel, refinamento armas",
  },
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
  "/post/ia-ciberseguranca-2026": {
    title: "IA e Cibersegurança em 2026: Como a Inteligência Artificial Defende e Ataca",
    description: "A IA é a principal arma de defesa e ataque no mundo digital. Entenda como ela detecta ameaças, como hackers a exploram e como se proteger em 2026.",
    keywords: "IA cibersegurança, inteligência artificial segurança digital, ciberataques IA 2026, deepfake fraude, phishing IA, SOC inteligência artificial, proteção digital, cibercrime 2026",
  },
  "/post/prompt-engineering-guia-2026": {
    title: "Prompt Engineering 2026: Guia Definitivo para Escrever Prompts que Funcionam",
    description: "Aprenda prompt engineering do zero ao avançado: few-shot, chain-of-thought, personas, templates prontos e erros comuns. Guia prático para ChatGPT, Gemini e Claude em 2026.",
    keywords: "prompt engineering 2026, como escrever prompts, few-shot prompting, chain of thought, ChatGPT prompts, Gemini prompts, técnicas prompt, IA produtividade, engenharia de prompt",
  },
  // ── Leva 1 SEO (04 Mai 2026) ─────────────────────────────────────────────
  "/post/gpt-5-ia-trabalhador-digital-autonomo-2026": {
    title: "GPT-5.4 Trabalhador Digital Autônomo: IA Supera Humanos no OSWorld 2026",
    description: "GPT-5.4 atinge 75% no OSWorld-V e supera a baseline humana de 72,4%. Primeira IA a executar trabalho real no computador: Excel, web, código. Impacto em profissões.",
    keywords: "GPT-5.4, GPT-5 trabalhador digital, IA autônoma 2026, OSWorld benchmark, IA executa tarefas, agentes IA computador, OpenAI GPT-5, IA mercado de trabalho, IA Excel, automação profissional, IA produtividade, futuro do trabalho IA",
  },
  "/post/berkshire-hathaway-greg-abel-2026-sem-buffett": {
    title: "Berkshire Hathaway 2026: Greg Abel Assume CEO e US$ 397B em Caixa",
    description: "Greg Abel preside o primeiro encontro da Berkshire sem Buffett. US$ 397 bilhões em caixa, lucro dobrou no Q1 2026 e deepfake de Buffett alerta sobre riscos de IA.",
    keywords: "Berkshire Hathaway 2026, Greg Abel CEO, Warren Buffett sucessão, Berkshire encontro anual, BRK.B, Berkshire caixa 397 bilhões, deepfake Buffett, holding Berkshire, investimentos value, Charlie Munger legado, BRKB ações, Berkshire investidor brasileiro",
  },
  "/post/elden-ring-nightreign-guia-completo-2026": {
    title: "Elden Ring Nightreign Guia Completo: Classes, Bosses e DLC Forsaken Hollows",
    description: "Guia de Elden Ring Nightreign 2026: as 10 classes (Nightfarers), 5 Nightlords mais difíceis, mecânicas de Expedição e tudo sobre o DLC Forsaken Hollows.",
    keywords: "Elden Ring Nightreign, Nightreign guia 2026, Forsaken Hollows DLC, classes Nightfarers, Nightlords bosses, Elden Ring multiplayer, FromSoftware 2026, Expedição Nightreign, Limveld mapa, Bandai Namco, Elden Ring DLC, Nightreign review",
  },
  "/post/kaiju-no-8-temporada-2-guia-arco-final-2026": {
    title: "Kaiju No. 8 Temporada 2: Guia Completo da T2 e Arco Final do Mangá 2026",
    description: "Kaiju No. 8 Temporada 2 estreou na Spring Season 2026 pela Production I.G. Mangá entrou no arco final segundo Jump Festa. Guia: história, personagens e onde assistir.",
    keywords: "Kaiju No. 8 Temporada 2, Kaiju No 8 T2, Production I.G anime, Kafka Hibino, Mina Ashiro, Defense Force Japão, arco final Kaiju No 8, Naoya Matsumoto mangá, Spring Season 2026, Crunchyroll Kaiju, monstros anime 2026, Jump Festa anime",
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
  "/post/super-mario-galaxy-movie-2026-bilheteria": {
    title: "Super Mario Galaxy: O Filme Abre com US$ 372 Milhões — Review e Análise",
    description: "Super Mario Galaxy: O Filme estreia com US$ 372 milhões mundiais, Rotten Tomatoes 82%. Rosalina como protagonista, Jack Black como Bowser e o futuro do Nintendo Cinematic Universe.",
    keywords: "Super Mario Galaxy filme, Super Mario Galaxy bilheteria, Mario Galaxy 2026 review, Rosalina filme Mario, Jack Black Bowser, Nintendo Cinematic Universe, Illumination Nintendo, animação Mario 2026, abertura bilheteria Mario, Chris Pratt Mario, Rotten Tomatoes Mario Galaxy, filme Nintendo 2026",
  },
  // ── Leva 2 SEO (24 Mai 2026) — Posts das expansões editoriais ────────────
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
    title: "IA para Finanças Pessoais em 2026: Como Usar Sem Riscos",
    description: "IA para finanças pessoais em 2026: ChatGPT, Mobills, Organizze, Olivia, categorização automática de gastos, simulações e o que NUNCA compartilhar com a IA.",
    keywords: "IA finanças pessoais 2026, ChatGPT finanças, Mobills IA, Organizze app, Olivia categorizar gastos, IA controle financeiro, planilha gastos IA, IA investimentos pessoa física, privacidade dados financeiros IA, app finanças 2026, automação financeira",
  },
  "/post/como-usar-ia-ganhar-dinheiro-2026": {
    title: "Como Usar IA para Ganhar Dinheiro em 2026: 15 Formas Reais",
    description: "15 formas comprovadas de ganhar dinheiro com IA em 2026: freelance Workana, automações Zapier, criação de conteúdo, prompts profissionais e quanto dá para faturar.",
    keywords: "ganhar dinheiro com IA 2026, freelance IA, Workana IA, automação Zapier IA, monetizar ChatGPT, criar conteúdo IA YouTube, Midjourney freelance, Runway vídeos IA, ElevenLabs voz IA, prompts para vender, renda extra IA, side hustle IA brasil",
  },
  "/post/ia-privacidade-dados-2026": {
    title: "IA e Privacidade de Dados em 2026: Seus Dados Estão Seguros?",
    description: "IA e privacidade em 2026: LGPD, ANPD, EU AI Act, opt-out ChatGPT e Claude, riscos de vazamento e checklist prático para usuários e empresas.",
    keywords: "IA privacidade dados 2026, LGPD inteligência artificial, ANPD IA generativa, EU AI Act 2026, opt-out ChatGPT treinamento, Claude privacidade, Gemini coleta dados, DPO empresas IA, proteção dados pessoais IA, vazamento dados ChatGPT, política de privacidade IA",
  },
  "/post/modelos-ia-open-source-2026": {
    title: "Modelos de IA Open Source em 2026: Llama 4, Mistral, DeepSeek e Qwen",
    description: "Modelos de IA open source em 2026: Llama 4, DeepSeek-V3 e R1, Mistral Large 2, Qwen 2.5, comparativo de performance, custo e quando vale rodar on-premise.",
    keywords: "IA open source 2026, Llama 4 Meta, DeepSeek R1, DeepSeek V3, Mistral Large 2, Qwen 2.5 Alibaba, Hugging Face leaderboard, LLM arena, modelos IA abertos, fine-tuning Llama, LLM on-premise Brasil, comparativo IA open source",
  },
  "/post/ia-transformando-dublagem-animes": {
    title: "IA na Dublagem de Animes em 2026: Voice Cloning e o Futuro",
    description: "IA na dublagem em 2026: ElevenLabs, VALL-E, acordo SAG-AFTRA, manifesto SATED, voice cloning ético e por que a dublagem clássica PT-BR não vai sumir.",
    keywords: "IA dublagem animes 2026, voice cloning IA, ElevenLabs dublagem, VALL-E Microsoft, SAG-AFTRA IA, SATED dubladores Brasil, Wendel Bezerra IA, dublagem PT-BR IA, Crunchyroll IA legendagem, futuro dublagem, IA cinema dublagem",
  },
  "/post/dragon-ball-super-beerus-anime-confirmado-2026": {
    title: "Dragon Ball Super: Beerus Anime Confirmado para 2026",
    description: "Dragon Ball Super: Beerus é o novo anime spin-off confirmado pela Toei para 2026. Elenco, estúdio, data de estreia e o que esperar do arco do Deus da Destruição.",
    keywords: "Dragon Ball Super Beerus, Dragon Ball novo anime 2026, Beerus anime, Toei Animation Dragon Ball, Dragon Ball Super 2026, spin-off Beerus, Whis Vermouth, Dragon Ball Super continuação, Akira Toriyama legado, anime Dragon Ball novo",
  },
  "/post/openai-bilhoes-financiamento-record-2026": {
    title: "OpenAI Capta US$ 40 Bilhões: Maior Rodada de IA da História",
    description: "OpenAI fecha financiamento recorde de US$ 40 bilhões com SoftBank a valuation de US$ 300B. O que muda para ChatGPT, GPT-5 e a corrida da IA em 2026.",
    keywords: "OpenAI financiamento 2026, OpenAI 40 bilhões SoftBank, OpenAI valuation 300 bilhões, rodada recorde IA, ChatGPT futuro 2026, GPT-5, Sam Altman financiamento, OpenAI IPO, corrida IA, SoftBank OpenAI Masayoshi Son",
  },
  "/post/gemini-25-pro-vs-claude-ia-2026": {
    title: "Gemini 2.5 Pro vs Claude em 2026: Qual a Melhor IA?",
    description: "Comparativo Gemini 2.5 Pro vs Claude em 2026: benchmarks, contexto, preço de API, raciocínio, programação e qual IA escolher para cada caso de uso.",
    keywords: "Gemini 2.5 Pro vs Claude 2026, comparativo Gemini Claude, qual IA usar 2026, Claude Sonnet vs Gemini, API Gemini Anthropic preço, benchmarks IA 2026, Gemini 2.5 Pro review, Claude review 2026, melhor IA programação, melhor IA texto",
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
  "/post/nintendo-switch-2-guia-completo-2026": {
    title: "Nintendo Switch 2: Guia Completo do Console em 2026",
    description: "Nintendo Switch 2 em 2026: especificações, jogos exclusivos, retrocompatibilidade, preço no Brasil e por que o console é o maior lançamento de hardware do ano.",
    keywords: "Nintendo Switch 2 guia 2026, Switch 2 especificações, Switch 2 preço Brasil, jogos exclusivos Switch 2, Switch 2 retrocompatível, Mario Kart Switch 2, Zelda Switch 2, Joy-Con 2, Nintendo lançamento 2026, console Nintendo novo",
  },
  "/post/zelda-ocarina-of-time-remake-switch-2-2026": {
    title: "Zelda Ocarina of Time Remake no Switch 2: Tudo em 2026",
    description: "Remake de Zelda Ocarina of Time no Switch 2 em 2026: novidades, gráficos, mudanças confirmadas pela Nintendo e o que esperar do retorno de Link a Hyrule.",
    keywords: "Zelda Ocarina of Time remake 2026, Switch 2 Zelda, OoT Switch 2, Zelda remake gráficos, Nintendo Switch 2 jogos, Link Hyrule remake, Zelda 64 remake, remake clássico Nintendo, Zelda OoT 2026, novidades Zelda Switch 2",
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
    breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: { "@type": "Thing", "@id": BASE_URL } },
        { "@type": "ListItem", position: 2, name: cat.name, item: { "@type": "Thing", "@id": `${BASE_URL}${cat.path}` } },
        { "@type": "ListItem", position: 3, name: post.title, item: { "@type": "Thing", "@id": url } },
      ],
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


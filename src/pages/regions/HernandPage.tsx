import RegionPageTemplate from "./RegionPageTemplate";
const HernandPage = () => (
  <RegionPageTemplate
    slug="hernand" name="Hernand" label="Área Inicial" iconKey="compass"
    accentClass="border-green-500/30 bg-green-500/5" badgeClass="bg-green-500/20 text-green-400"
    position="Centro-oeste de Pywel, entre pradarias férteis e florestas densas"
    biome="Pradarias, florestas de carvalho e pinheiro, montanhas de baixa e média altitude, planícies agrícolas, charcos no extremo sul"
    climate="Temperado com estações marcadas. Verões quentes favoráveis à agricultura, invernos com neve leve nas cotas altas. Chuvas frequentes na primavera que criam lama profunda nos caminhos secundários."
    overview={[
      "Hernand é a região inicial de Crimson Desert — onde Kliff e os Greymanes têm seu acampamento base em Howling Hill após fugirem de Pailune. É a região mais acessível e extensa do jogo, com estética de fantasia medieval europeia: campos verdes, grandes cidades medievais e dezenas de vilas espalhadas pelas planícies.",
      "As cidades confirmadas incluem Calphade (a maior metrópole de Hernand) e Beighen. É em Hernand que o jogador aprende todos os sistemas do jogo — combate, montaria, crafting, construção de base e facções — antes de avançar para as regiões mais difíceis.",
      "Hernand também abriga a maior concentração de missões secundárias de todo o jogo, incluindo as cadeias de facção dos Black Bears dissidentes, os mystérios do Scholastone Institute e as missões de caçada que desbloqueiam upgrades exclusivos de mochila e montaria.",
    ]}
    lore={[
      "Hernand foi historicamente o coração político de Pywel antes da ascensão de Demeniss. A cidade de Calphade já foi capital de um reino independente, mas hoje está sob influência das facções que disputam o poder central de Demeniss.",
      "O terreno diversificado de Hernand esconde segredos antigos: a Scholastone Institute foi fundada há séculos por magistas que usavam o Abyss como fonte de energia. Explorar suas instalações é uma das arcos laterais mais ricas em lore do jogo.",
    ]}
    locations={[
      { name: "Calphade", desc: "Maior cidade de Hernand e uma das mais populosas de Pywel. Hub central de comércio, blacksmith, estábulos e missões de facção. Palco de vários confrontos da história principal." },
      { name: "Beighen", desc: "Segunda maior cidade da região. Especializada em produção de armamentos — os melhores ferreiros de nível médio ficam aqui. Missões de resgate e investigação convergem para Beighen." },
      { name: "Howling Hill", desc: "Acampamento base dos Greymanes após a fuga de Pailune. Serves como HQ do jogador durante boa parte das primeiras horas — pode ser expandido e melhorado ao longo do jogo." },
      { name: "Scholastone Institute", desc: "Instituto de pesquisa do Abyss disfarçado de academia. Missão principal envolve infiltração e confronto com Tenebrum. Rica em lore sobre a origem do poder das trevas." },
      { name: "Unicorn Cliffs", desc: "Formações rochosas no norte de Hernand. Habitat de criaturas raras e local do boss Kailok. Materiais de crafting de nível intermediário são encontrados aqui." },
      { name: "Fort Hellwood", desc: "Fortaleza militar parcialmente abandonada no centro-leste de Hernand. Boss de facção Hemon Beindel exige completar a questline associada antes de aparecer." },
      { name: "Arboria Castle", desc: "Castelo coberto por vegetação que cresceu por décadas sem habitação humana. Lar da Queen Spider — o boss é acessível após a missão Queen of the Silkspun Citadel." },
      { name: "Icemoor Castle Ruins", desc: "Ruínas de um castelo destruído em batalha antiga. Saigord, o Staglord, habita as ruínas. A região tem névoa permanente que dificulta a navegação." },
      { name: "Karin Quarry", desc: "Pedreira ativa com trabalhadores sob coerção. A missão Estate in Dismay revela que a máquina de escavação foi transformada em arma. Boss Marni's Excavatron escondido no nível mais profundo." },
    ]}
    bosses={[
      {
        name: "Matthias",
        difficulty: 2,
        desc: "Cavaleiro veterano com 2 barras de vida. Primeiro boss da história principal (Capítulo 1). Movimentos bem telegrafados e pausa longa entre combos — ideal para aprender o timing de parry.",
        reward: "Skill Pump Kick",
        tip: "Combo leve 3× → combo pesado enquanto ele está em stagger. Cure com Grilled Meat entre as fases.",
      },
      {
        name: "Kailok, the Hornsplitter",
        difficulty: 2,
        desc: "Goblin líder dos Unicorn Cliffs com 1 barra de vida. Usa ondas de longo alcance que drenam stamina ao bloquear. Boss do Capítulo 2 — mais ágil que Matthias.",
        reward: "Sword of the Lord + Seal of Greed",
        tip: "Contra-ataques com escudo (L1) são muito eficientes. Quando ele recua para ataques de distância, avance rapidamente para pressão corpo a corpo.",
      },
      {
        name: "Reed Devil",
        difficulty: 3,
        desc: "Entidade do pântano com 3 fases e mecânica de totens. Fase 2 exige destruir 5 totens espalhados pela arena antes de continuar o dano direto. Boss do Capítulo 3.",
        reward: "Skill Swift Stab + Abyss Artifact",
        tip: "Use Focused Shot e Charged Shot para destruir os totens rapidamente. Leve 40+ Grilled Meat — a fase 3 é longa.",
      },
      {
        name: "Tenebrum",
        difficulty: 2,
        desc: "Entidade do Scholastone Institute com mecânica de boss-puzzle. O corpo é intangível exceto quando o ponto fraco brilhante está exposto. Sem mecânica de stagger convencional.",
        reward: "Chave para a Spire of the Stars",
        tip: "Use Blinding Flash para forçar o ponto fraco a aparecer, depois Force Palm no ar (duplo toque Quadrado) para o burst de dano.",
      },
      {
        name: "Kearush, the Slayer",
        difficulty: 4,
        desc: "Gorila gigante de 3 barras de vida — o boss mais difícil de Hernand. A maioria dos jogadores considera o maior pico de dificuldade das primeiras horas. Não possui abertura óbvia para parry.",
        reward: "Arma exclusiva + Abyss Artifact raro",
        tip: "Nunca tente bloquear — quebrará a guarda instantaneamente. Esquive diagonal (forward-right), ataque 3×, recue. Use Back Hang quando possível. Leve 100-200 Grilled Meat obrigatoriamente.",
      },
      {
        name: "Cassius Morten",
        difficulty: 3,
        desc: "Cavaleiro crimson com escudo e 1 barra de vida. Boss do arco The Unyielding Shields em Calphade. Usa a arena com pilares de pedra estrategicamente.",
        reward: "Shield of Betrayal",
        tip: "Use Nature's Grasp nos pilares da arena para dano massivo em área. A Tauria Curved Sword com Nature's Echo duplica eficiência.",
      },
      {
        name: "Saigord, the Staglord (Icemoor Ruins)",
        difficulty: 4,
        desc: "Boss opcional de 3 fases com armadura de chifres. Arena em névoa densa — use o minimapa para não se perder durante as investidas de alta velocidade.",
        reward: "Turning Slash Expertise + Staglord's Shield",
        tip: "Acumule stagger com Force Palm. Quando a barra de stagger encher, o Staglord cai e você tem 8 segundos de combo livre.",
      },
      {
        name: "Queen Spider",
        difficulty: 3,
        desc: "Aranha rainha no teto do castelo. Usa projéteis de veneno em padrões que cobrem toda a arena. As aranhas menores reaparecem infinitamente — ignore-as.",
        reward: "Materiais de aranha raros para crafting",
        tip: "Use Nature's Retribution para defletir os projéteis de volta para ela. Cada defleção cobre ~30% da barra de stagger.",
      },
    ]}
    factions={[
      { name: "Greymane Clan", desc: "Clã de Kliff, baseado em Howling Hill. Expanda o acampamento para desbloquear serviços: forja, laboratório de poções e estábulo melhorado." },
      { name: "Goldleaf Guild", desc: "Guilda de mercadores e aventureiros baseada em Calphade. Missões de entrega e escolta oferecem recompensas de ouro elevadas e acesso a equipamentos raros." },
      { name: "Scholastone Institute", desc: "Organização secreta de pesquisa do Abyss. Após completar a missão principal do Institute, membros dissidentes oferecem missões de investigação." },
      { name: "Black Bears (dissidentes)", desc: "Facção de ex-membros dos Black Bears que romperam com a liderança. Missões de facção abrem comércio de equipamentos de nível intermediário-alto." },
    ]}
    tips={[
      "Explore Hernand inteiramente antes de avançar para Pailune ou Demeniss — a maioria dos upgrades de mochila e montaria está aqui.",
      "O Scholastone Institute tem um cofre secreto no subsolo com os melhores materiais de crafting do mid-game de Hernand — leve uma tocha, o caminho não tem iluminação.",
      "Os ferreiros de Beighen têm receitas exclusivas de armas de qualidade superior que não aparecem em outros lugares durante as primeiras 15 horas.",
      "Karin Quarry: vá ao nível mais baixo sem agredir os trabalhadores — o boss só aparece se você investigar a máquina primeiro.",
      "Fort Hellwood: complete a questline de facção antes de entrar pelas portas principais — o boss Hemon Beindel não spawna sem o trigger correto.",
      "Icemoor Castle: leve tochas e ative todos os cristais de luz no caminho — eles permanecem ativos e iluminam o retorno após o boss.",
    ]}
    seo={{
      title: "Hernand — Guia Completo da Região Inicial | Crimson Desert",
      description: "Guia completo de Hernand em Crimson Desert: mapa da região, cidades Calphade e Beighen, bosses (Kearush, Reed Devil, Matthias), Greymane Clan, dicas de exploração e crafting.",
      keywords: "Hernand Crimson Desert, Hernand mapa, Calphade cidade, Beighen cidade, Kearush boss, Reed Devil boss, Matthias boss, Greymane acampamento, Howling Hill, Scholastone Institute, Crimson Desert região inicial, Pywel centro-oeste",
    }}
  />
);
export default HernandPage;

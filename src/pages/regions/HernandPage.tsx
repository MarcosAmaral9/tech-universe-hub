import RegionPageTemplate from "./RegionPageTemplate";

const HernandPage = () => (
  <RegionPageTemplate
    slug="hernand"
    name="Hernand"
    label="Área Inicial"
    iconKey="compass"
    accentClass="border-green-500/30 bg-green-500/5"
    badgeClass="bg-green-500/20 text-green-400"
    position="Centro-oeste do continente de Pywel"
    biome="Pradarias verdes, florestas densas e vales férteis com colinas suaves"
    climate="Temperado durante o ano inteiro. Estações marcadas, com invernos amenos e verões quentes — ideal para explorar a pé ou a cavalo."
    overview={[
      "Hernand é a região inicial de Crimson Desert — o ponto onde Kliff, depois do massacre em Pailune, estabelece o novo acampamento dos Greymanes em Howling Hill. É o lugar onde o jogo apresenta seus principais sistemas: combate, exploração, fast travel, montarias, crafting e culinária.",
      "A estética é a de uma fantasia medieval europeia clássica: cidades muradas, mercados, vilas pelo campo, castelos no horizonte e estradas seguras. Calphade, a maior cidade da região, funciona como hub econômico, enquanto Beighen oferece missões secundárias e contratos de mercenário.",
      "Embora seja a área inicial, Hernand recompensa exploração demorada: PC Gamer e GameSpot destacam que vários upgrades importantes (mochila, equipamentos básicos avançados, montarias melhores) só aparecem se o jogador realmente vasculhar Reedwind Valley e os arredores de Howling Hill antes de seguir para Demeniss.",
    ]}
    locations={[
      { name: "Calphade", desc: "Maior cidade comercial de Hernand. Mercado central, ferreiros, alquimistas e quartel-general da guarda local." },
      { name: "Beighen", desc: "Vila tradicional com missões de fazenda, contratos de mercenário e introdução à culinária regional." },
      { name: "Acampamento Greymane (Howling Hill)", desc: "Base operacional de Kliff e do clã pós-Pailune. Hub central de upgrades, gestão e missões principais." },
      { name: "Reedwind Valley", desc: "Vale fértil onde o Reed Devil pode ser caçado — boss inicial recomendado para testar o sistema de combate completo." },
      { name: "Unicorn Cliffs", desc: "Penhascos onde aparece o Hornsplitter (Kailok) — boss opcional com recompensa de equipamento de cavalaria." },
    ]}
    bosses={[
      {
        name: "Reed Devil (Reedwind Valley)",
        desc: "Boss inicial de Hernand. Criatura aquática que ensina o jogador a usar esquivas direcionais e janelas de parry. Recompensa: armadura leve e materiais de crafting.",
      },
      {
        name: "Hornsplitter / Kailok (Unicorn Cliffs)",
        desc: "Boss opcional com investidas devastadoras. Recompensa inclui equipamento focado em combate montado e materiais raros para armaduras pesadas.",
      },
    ]}
    tips={[
      "Conclua todas as missões de Howling Hill antes de viajar para Demeniss — várias delas desbloqueiam upgrades permanentes.",
      "Compre o primeiro upgrade de mochila em Calphade assim que possível para evitar inventário lotado.",
      "Aprenda culinária básica em Beighen — comidas dão buffs duradouros essenciais para bosses como o Reed Devil.",
      "Explore Reedwind Valley a pé pelo menos uma vez: rumores e entradas escondidas levam a tesouros e Abyss Cressets.",
    ]}
    seo={{
      title: "Hernand (Crimson Desert): Guia Completo da Área Inicial de Pywel",
      description:
        "Hernand é a região inicial de Crimson Desert: Calphade, Beighen, Howling Hill, Reedwind Valley e Unicorn Cliffs. Bosses, dicas e como aproveitar tudo antes de avançar.",
      keywords:
        "Hernand Crimson Desert, Pywel inicial, Calphade, Beighen, Howling Hill, Reedwind Valley, Unicorn Cliffs, Reed Devil boss, Hornsplitter Kailok, dicas iniciantes Crimson Desert, Greymanes acampamento, Kliff Hernand",
    }}
  />
);

export default HernandPage;

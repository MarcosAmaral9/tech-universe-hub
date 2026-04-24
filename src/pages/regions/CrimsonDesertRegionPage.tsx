import RegionPageTemplate from "./RegionPageTemplate";

const CrimsonDesertRegionPage = () => (
  <RegionPageTemplate
    slug="crimson-desert"
    name="Crimson Desert"
    label="Deserto Sem Lei"
    iconKey="skull"
    accentClass="border-red-500/30 bg-red-500/5"
    badgeClass="bg-red-500/20 text-red-400"
    position="Sul / sudeste do continente de Pywel"
    biome="Deserto de areia carmesim, descampados áridos e oásis isolados"
    climate="Extremo: dias escaldantes e noites geladas. Tempestades de areia frequentes reduzem a visibilidade e podem sobrecarregar montarias."
    overview={[
      "Crimson Desert é a região homônima do jogo: uma extensão imensa de areia avermelhada que dá nome a todo o título da Pearl Abyss. É o território mais perigoso e imprevisível de Pywel, sem governo central, dominado por bandidos, mercenários, traficantes de relíquias e criaturas hostis.",
      "Diferente das regiões organizadas como Demeniss ou Hernand, aqui não há proteção da guarda real. Cada cidade é controlada por um chefe local — alguns dispostos a dialogar, outros que atacam à primeira vista. Tommaso, a maior cidade, oferece três pontos de fast travel e funciona como o único hub minimamente estruturado da região.",
      "A GameSpot destaca o Crimson Desert como zona de world bosses e encontros aleatórios de alto risco. O Crookrock Walker, por exemplo, pode aparecer perto do Spire of the Sun se o jogador usar o teleporter errado — exigindo equipamento de fim de jogo para sobreviver.",
    ]}
    locations={[
      { name: "Tommaso", desc: "Maior cidade do deserto. Conta com 3 pontos de fast travel, mercado de relíquias, contratos de caça e taverna central." },
      { name: "Serpent Shrine of Aeserion", desc: "Santuário antigo no extremo sul. Lar de cultos isolados e fragmentos importantes de lore relacionados a serpentes míticas." },
      { name: "Spire of the Sun", desc: "Torre central do deserto. Spawna o world boss Crookrock Walker se o teleporter próximo for ativado de forma incorreta." },
      { name: "Acampamentos de bandidos", desc: "Espalhados por todo o deserto. Abrigam relíquias roubadas, mapas do tesouro e equipamentos pilhados de outras regiões." },
    ]}
    bosses={[
      {
        name: "Crookrock Walker",
        desc: "World boss colossal próximo ao Spire of the Sun. Pode aparecer involuntariamente após uso de fast travel errado. Exige equipamento de fim de jogo, montaria de combate e farmácia abastecida.",
      },
      {
        name: "Chefes de facção e bandidos de elite",
        desc: "Encontros variados em acampamentos e fortes improvisados. Costumam vir acompanhados de capangas e atiradores — pontos de cobertura e flechas incendiárias ajudam.",
      },
    ]}
    tips={[
      "Sempre mantenha água e suprimentos no inventário — o deserto drena recursos rapidamente.",
      "Não use teleporters desconhecidos perto do Spire of the Sun a menos que esteja preparado para o Crookrock Walker.",
      "Monte uma montaria de longa distância (camelo blindado ou raptor de areia) — atravessar o deserto a cavalo padrão é ineficiente.",
      "Interrogue bandidos antes de matá-los: muitos revelam localizações de tesouros e Abyss Cressets que não aparecem em mapa.",
    ]}
    seo={{
      title: "Crimson Desert (Região): Guia Completo do Deserto Sem Lei de Pywel",
      description:
        "Crimson Desert é o deserto carmesim ao sul de Pywel: Tommaso, Spire of the Sun, Serpent Shrine of Aeserion, world boss Crookrock Walker, bandidos e dicas de sobrevivência.",
      keywords:
        "Crimson Desert regiao, deserto Pywel, Tommaso cidade, Spire of the Sun, Serpent Shrine Aeserion, Crookrock Walker, world boss Crimson Desert, bandidos Pywel, deserto carmesim, Pearl Abyss deserto, fast travel Tommaso",
    }}
  />
);

export default CrimsonDesertRegionPage;

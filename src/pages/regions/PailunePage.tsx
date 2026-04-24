import RegionPageTemplate from "./RegionPageTemplate";

const PailunePage = () => (
  <RegionPageTemplate
    slug="pailune"
    name="Pailune"
    label="Norte Gelado"
    iconKey="snowflake"
    accentClass="border-blue-400/30 bg-blue-400/5"
    badgeClass="bg-blue-400/20 text-blue-300"
    position="Extremo norte do continente de Pywel"
    biome="Tundra árctica, montanhas nevadas e vales congelados"
    climate="Subzero permanente. Vendavais e nevascas constantes que afetam a visibilidade e exigem montarias resistentes."
    overview={[
      "Pailune é a terra natal de Kliff e dos Greymanes — o ponto de partida emocional da história de Crimson Desert. A região fica no extremo norte de Pywel e é dominada por picos cobertos de neve, gargantas geladas e formações rochosas que dificultam a travessia até mesmo dos veteranos.",
      "Foi em Pailune que o Stronghold original dos Greymanes foi atacado pelos Black Bears, marcando o início da jornada de vingança e reconstrução do clã. A região concentra alguns dos confrontos visualmente mais impressionantes do jogo, incluindo o Staglord (Savage Peaks) e o White Horn (White Mountains), comparado pela crítica a Shadow of the Colossus.",
      "Apesar da brutalidade do clima, Pailune é essencial para a progressão: vários upgrades de equipamento, missões de lore e materiais raros estão escondidos nas suas montanhas — recompensando quem investe tempo na exploração vertical.",
    ]}
    locations={[
      { name: "Savage Peaks", desc: "Pico mais alto da região. Lar do Staglord, um rei caído que veste armadura de cervo." },
      { name: "White Mountains", desc: "Cordilheira sagrada onde habita o White Horn — o espírito da montanha, parte yeti, parte rena." },
      { name: "Stronghold dos Greymanes", desc: "Antigo bastião do clã antes da emboscada dos Black Bears. Hoje em ruínas, mas central para o lore." },
      { name: "Vilarejos congelados", desc: "Pequenos assentamentos espalhados pelas encostas, oferecendo descanso e missões secundárias." },
    ]}
    bosses={[
      {
        name: "Staglord (Savage Peaks)",
        desc: "Boss humanoide com armadura forjada a partir de chifres de cervo. Combate de 3 fases com investidas e ataques de área. Recompensa: armadura única do Norte.",
      },
      {
        name: "White Horn (White Mountains)",
        desc: "Espírito gigante da montanha com múltiplas fases. Inspirado em Shadow of the Colossus — exige escalada e combate em diferentes pontos do corpo.",
      },
    ]}
    tips={[
      "Equipe roupas térmicas antes de entrar em Pailune — danos por frio drenam stamina rapidamente.",
      "Use montarias adaptadas à neve (urso de carga ou raptor de neve) para travessias longas.",
      "Aproveite caçadas de criaturas peludas para conseguir pelagens raras — ingredientes premium para crafting de armaduras de inverno.",
      "O White Horn deve ser enfrentado depois de explorar pelo menos uma região fora de Pailune para ter equipamento à altura.",
    ]}
    seo={{
      title: "Pailune (Crimson Desert): Guia Completo do Norte Gelado de Pywel",
      description:
        "Tudo sobre Pailune em Crimson Desert: terra dos Greymanes e Kliff, Savage Peaks, White Mountains, bosses Staglord e White Horn, clima brutal e dicas de exploração.",
      keywords:
        "Pailune Crimson Desert, Pywel norte, Greymanes Kliff, Savage Peaks, White Mountains, White Horn boss, Staglord boss, Pailune mapa, regiao gelada Pywel, Crimson Desert tundra, Pearl Abyss Pailune, dicas Pailune",
    }}
  />
);

export default PailunePage;

import RegionPageTemplate from "./RegionPageTemplate";
const PailunePage = () => (
  <RegionPageTemplate
    slug="pailune" name="Pailune" label="Norte Gelado" iconKey="snowflake"
    accentClass="border-blue-400/30 bg-blue-400/5" badgeClass="bg-blue-400/20 text-blue-300"
    position="Extremo norte de Pywel, entre montanhas nevadas e picos inacessíveis"
    biome="Tundra árctica, montanhas geladas, vales entre picos cobertos de neve permanente e formações rochosas de difícil acesso"
    climate="Subzero permanente. Nevascas frequentes reduzem a visibilidade a poucos metros. Ventos catabáticos nas travessias de altitude causam dano gradual de frio sem equipamento adequado."
    overview={[
      "Pailune é a terra natal de Kliff e dos Greymanes — o ponto emocional de partida de Crimson Desert. Dominada por picos selvagens e clima brutal, é uma das regiões mais inóspitas de Pywel, mas também uma das mais ricas em lore e materiais de alto nível.",
      "Foi aqui que o Stronghold dos Greymanes foi atacado pelos Black Bears, desencadeando a jornada central do jogo. A região concentra confrontos visualmente espetaculares e segredos escondidos entre as fendas das montanhas — recompensando jogadores que investem tempo na exploração vertical.",
      "Mecanicamente, Pailune introduz o sistema de temperatura do jogo: sem armaduras térmicas, a stamina drena continuamente em certas altitudes. Montar criaturas adaptadas ao frio (urso de carga ou raptor de neve) é essencial para cobrir as distâncias entre os assentamentos.",
    ]}
    lore={[
      "Segundo o lore de Crimson Desert, Pailune foi colonizada pelos antepassados dos Greymanes séculos antes dos eventos do jogo. A região era considerada inexpugnável — suas montanhas naturalmente defendiam os habitantes dos conflitos que assolavam o resto de Pywel.",
      "A traição dos Black Bears mudou tudo: a emboscada ao Stronghold foi executada durante uma ventania que bloqueou qualquer possibilidade de reforço. Esse evento é constantemente referenciado nos diálogos e nas missões de resgate de sobreviventes espalhados pelas montanhas.",
    ]}
    locations={[
      { name: "Savage Peaks", desc: "Pico mais alto de Pailune e de toda Pywel. Lar do Staglord — rei caído que veste armadura forjada com chifres de cervo gigante. O caminho até o topo exige escalar múltiplos pontos com corda." },
      { name: "White Mountains", desc: "Cordilheira sagrada onde habita o White Horn, o espírito da montanha. A Pearl of Wisdom, artefato raro de crafting, só é obtida aqui." },
      { name: "Stronghold dos Greymanes", desc: "Antigo bastião do clã, hoje em ruínas após o ataque dos Black Bears. Central para o lore — várias missões de recuperação de diários e relíquias começam aqui." },
      { name: "Howling Hollow", desc: "Vale de vento constante que serve de acampamento base durante a exploração de Pailune. Comerciantes especializados em equipamento de neve ficam aqui." },
      { name: "Snowhaven Hearth", desc: "Único vilarejo habitado de Pailune. Oferece serviços de blacksmith, inn e missões secundárias envolvendo a Skoghorn Tribe." },
      { name: "Crystal Caves", desc: "Sistema de cavernas com cristais de gelo que brilham em diferentes cores. Contém minerais raros e um boss opcional de facção no interior mais profundo." },
    ]}
    bosses={[
      {
        name: "Saigord, the Staglord",
        difficulty: 4,
        desc: "Boss humanoide com armadura forjada de chifres de cervo gigante. 3 fases: corpo a corpo, investidas em área e invocação de cervos de combate. A arena é inclinada, dificultando o posicionamento.",
        reward: "Turning Slash Expertise + Staglord's Shield",
        tip: "Use Force Palm para interromper o Turning Slash no início da animação. Stagger acumulado é a chave — combo leve 3× + Force Palm.",
      },
      {
        name: "White Horn, Shepherd of Souls",
        difficulty: 4,
        desc: "Espírito da montanha — parte yeti, parte rena. 3 fases com mecânica de escalada: em determinados momentos você deve subir no corpo do boss (similar a Shadow of the Colossus) para atacar os pontos fracos nas costas.",
        reward: "Eye of the Sky + Pillar of Wind + Infinite Arrows II",
        tip: "Vulnerável a fogo. Na fase 3, um aliado retorna para ajudar — foque em distrair o boss enquanto o aliado acumula stagger.",
      },
      {
        name: "Praevus the Ancient",
        difficulty: 4,
        desc: "Ser Ancient de gelo com ataques poderosos mas lentos. Cada golpe é altamente telegrafado, mas errá-los causa dano colossal. 2 barras de vida com transição de fase dramática.",
        reward: "Blessing of the Immortal + materiais de Ancient",
        tip: "Parry perfeito (L1 no timing exato) abre janela de 3-4 ataques livres. Não tente atacar durante os ataques de área — recue primeiro.",
      },
      {
        name: "White Bearclaw",
        difficulty: 3,
        desc: "Urso branco alfa da Skoghorn Tribe. Boss de facção acessível após completar 3 missões de caçada. Luta em arena aberta com mecânica de armadilhas de neve.",
        reward: "Materiais raros de urso branco + receita de armadura",
        tip: "Use as armadilhas já presentes na arena a seu favor — posicione-se para atrair o urso até elas durante as cargas.",
      },
    ]}
    factions={[
      { name: "Clã Greymane", desc: "Família de Kliff e antagonistas do início do jogo. Fragmentados após o ataque, sobreviventes estão espalhados por Pailune e Hernand." },
      { name: "Black Bears", desc: "Clã rival que atacou o Stronghold. Controlam as passagens sul de Pailune e são facção hostil durante toda a campanha." },
      { name: "Skoghorn Tribe", desc: "Tribo nativa das White Mountains. Aliados possíveis após completar a cadeia de missões envolvendo o White Bear. Oferece missões de caçada e receitas únicas." },
    ]}
    tips={[
      "Equipe armadura com propriedade thermal resistance antes de qualquer travessia acima de média altitude — sem isso, a stamina drena 30% mais rápido.",
      "Montar o urso de carga nativo (desbloqueado na Skoghorn Tribe) economiza metade do tempo de travessia entre Howling Hollow e Savage Peaks.",
      "A Pearl of Wisdom nas White Mountains só aparece à noite — retorne ao local de dia se não a encontrou.",
      "Salve Palmer Pills para os bosses de 3+ barras. Grilled Meat (de caça local) cura 40% mais rápido por stack do que em outras regiões.",
      "Explore as Crystal Caves antes do Capítulo 7 — alguns itens de crafting exclusivos só estão disponíveis antes da progressão da história bloquear certas áreas.",
      "O boss Beloth (Overwhelming Being) em Hoenmark Ruins fica na borda de Pailune com Hernand — é o desafio mais difícil da região e exige armadura +16 ou superior.",
    ]}
    seo={{
      title: "Pailune — Guia Completo da Região | Crimson Desert",
      description: "Guia completo de Pailune em Crimson Desert: mapa, locais-chave, bosses (Staglord, White Horn, Praevus), facções Greymane e Skoghorn, dicas de clima e exploração no norte gelado de Pywel.",
      keywords: "Pailune Crimson Desert, Pailune mapa, Staglord boss, White Horn boss, Praevus Ancient, Greymane clan, Skoghorn Tribe, Stronghold Greymane, Savage Peaks, White Mountains, Crimson Desert região norte, Pywel norte",
    }}
  />
);
export default PailunePage;

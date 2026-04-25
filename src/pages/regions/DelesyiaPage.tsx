import RegionPageTemplate from "./RegionPageTemplate";
const DelesyiaPage = () => (
  <RegionPageTemplate
    slug="delesyia" name="Delesyia" label="Região Industrial" iconKey="cpu"
    accentClass="border-orange-500/30 bg-orange-500/5" badgeClass="bg-orange-500/20 text-orange-300"
    position="Sudeste de Pywel, entre o mar e as Steel Mountains"
    biome="Planícies industriais, refinarias a vapor, complexos mecânicos, costas rochosas e ilhas do arquipélago de Gorthak"
    climate="Subtropical úmido no litoral. O interior é quente e seco pela caloria das usinas. Ventos marinhos constantes. Precipitação ácida leve perto das refinarias — danifica equipamentos sem manutenção regular."
    overview={[
      "Delesyia é a região mais tecnologicamente avançada de Pywel — e a mais estranha. Enquanto o resto do continente opera com magia e aço medieval, Delesyia combina engenharia a vapor, armas de fogo primitivas e construtos mecânicos alimentados por cristais de Abyss. A estética mistura fantasia medieval com steampunk.",
      "A região abriga a Sky Fortress — estrutura flutuante ancorada por cabos de aço acima de Delesyia — que serve como palco de um dos confrontos mais espetaculares do jogo: a luta contra Golden Star, o dragão mecânico dourado. A batalha é realizada montado em Wyvern.",
      "Delesyia também é a última grande região antes do confronto final com Myurdin e Umbra. Vários upgrades de endgame, receitas de armadura máxima e os últimos Abyss Artifacts do jogo estão escondidos nas suas instalações industriais e ilhas costeiras.",
    ]}
    lore={[
      "A tecnologia de Delesyia foi desenvolvida por engenheiros que aprenderam a converter energia do Abyss em força mecânica — sem a instabilidade que afeta os usuários de magia direta. Por décadas, a região foi considerada aliada neutra nos conflitos de Pywel, vendendo suas máquinas para todas as facções.",
      "O surgimento de Myurdin como ameaça existencial mudou isso. O regime de Delesyia começou a produzir armas cada vez mais poderosas — incluindo o Thunder Tank e a própria Sky Fortress — transformando a região em potência militar de última hora nos capítulos finais.",
    ]}
    locations={[
      { name: "Sky Fortress", desc: "Estrutura flutuante ancorada por cabos de aço acima de Delesyia. Palco do boss Golden Star. Acessada por cabo-elevador após completar a cadeia de missões da engenharia militar." },
      { name: "Refinaria Central", desc: "Maior complexo industrial de Pywel. Produz os cristais de energia que alimentam todos os construtos mecânicos da região. Missões de sabotagem e infiltração passam aqui." },
      { name: "Porto de Gorthak", desc: "Porto naval controlado pela Casa Byron de Demeniss. Hub de comércio marítimo com rotas para ilhas do arquipélago. Missões de contrabando e roubo naval disponíveis." },
      { name: "Dewhaven", desc: "Cidade costeira de médio porte especializada em construção naval e manutenção de construtos. Ferreiros e engenheiros oferecem upgrades de tier máximo." },
      { name: "Steel Mountains", desc: "Cadeia montanhosa no sul de Delesyia, rica em minério de ferro e cristais de Abyss bruto. Acesso limitado — requer equipamento anti-precipitação ácida." },
      { name: "Arquipélago de Gorthak", desc: "Conjunto de ilhas costeiras com recursos exclusivos: coral de ferro e âmbar salgado para crafting de armaduras aquáticas. Boss Grave Walker habita a maior ilha." },
      { name: "Mount Renus", desc: "Vulcão inativo no sudeste de Delesyia. Calor geotérmico aquece toda a região costeira. Materiais volcânicos raros para armas de fogo avançadas." },
    ]}
    bosses={[
      {
        name: "Golden Star",
        difficulty: 5,
        desc: "Dragão mecânico dourado de 3 fases — luta na Sky Fortress montado em Wyvern. Um dos confrontos visualmente mais impressionantes do jogo. O dragão dispara feixes de energia e usa garras de titânio em mergulhos rasantes.",
        reward: "Abyss Artifact de tier máximo + arma exclusiva Golden Claw",
        tip: "Use as javelinas posicionadas nas laterais da arena para encher a barra de stagger. Após 3 javelinas, Golden Star fica imóvel por 8 segundos — foque todo o dano aqui.",
      },
      {
        name: "Myurdin (Forma Final)",
        difficulty: 5,
        desc: "Confronto final com o antagonista principal — Myurdin em sua forma mais poderosa combina todos os ataques das formas anteriores: gelo de Pailune, fogo de Lava Myurdin e trevas do Abyss. 4 barras de vida.",
        reward: "Progressão para o confronto final + equipamento exclusivo",
        tip: "Leve o máximo de comida possível — 200+ Grilled Meat é recomendado. Cada fase usa um conjunto diferente de ataques. Memorize a sequência de cada fase separadamente.",
      },
      {
        name: "Hexe Marie",
        difficulty: 4,
        desc: "Bruxa ancestral com magia natural escura. Invoca vinhas, familiares espectrais e usa projéteis de veneno em padrões de área. A floresta ao redor da arena vai mudando de forma durante a luta.",
        reward: "Abyss Artifact + Witch's Grimoire (item de lore raro)",
        tip: "Destrua os 4 totens ao redor da arena para enfraquecer o escudo dela. Sem o escudo, o dano aumenta em 60%. Use ataques de fogo — ela é vulnerável.",
      },
      {
        name: "Runewalker Vordis",
        difficulty: 4,
        desc: "Construto mecânico alimentado por runas do Abyss. Escudo de energia bloqueia todo o dano direto até ser destruído. Após quebrar o escudo, tem janela de 15 segundos antes de regenerar.",
        reward: "Runas raras para crafting + Abyss Artifact",
        tip: "Use ataques pesados em sequência para quebrar o escudo. A regeneração do escudo pode ser interrompida com Force Palm no cristal central.",
      },
      {
        name: "Thunder Tank",
        difficulty: 4,
        desc: "Máquina de guerra blindada montada sobre 6 pernas articuladas. Possui canhões laterais, metralhadoras e uma esfera de plasma dianteira. A maior invenção militar de Delesyia.",
        reward: "Componentes de tanque raros + blueprint de arma de fogo",
        tip: "Destrua os 2 canhões laterais primeiro — eles causam o maior dano da luta. Depois ataque as juntas das pernas dianteiras para imobilizar e expor o núcleo.",
      },
      {
        name: "Grave Walker",
        difficulty: 4,
        desc: "Golem de pedra nas ilhas de Gorthak — similar ao Stonewalker de Demeniss mas com mecânicas de ambiente aquático. A arena tem marés que sobem e descem, limitando o posicionamento.",
        reward: "Pedra de golem rara + materiais de ilha",
        tip: "Ataque durante a maré baixa — você tem mobilidade total. Durante a maré alta, suba nas plataformas e use ataques de salto.",
      },
    ]}
    factions={[
      { name: "Engenheiros de Delesyia", desc: "Guilda técnica que controla a produção de construtos. Aliança desbloqueia upgrades de equipamentos mecânicos e receitas de tier máximo." },
      { name: "Marinheiros de Gorthak", desc: "Facção naval independente. Missões de resgate e exploração no arquipélago. Recompensa com rotas para ilhas secretas com recursos únicos." },
      { name: "Resistência Anti-Máquina", desc: "Grupo de ex-trabalhadores que se opõe à militarização tecnológica. Missões de sabotagem oferecem Abyss Artifacts alternativos." },
    ]}
    tips={[
      "Compre equipamento anti-precipitação ácida antes de entrar nas Steel Mountains — sem ele, armas e armaduras perdem 15% de durabilidade por hora na região.",
      "O cabo-elevador para a Sky Fortress só aparece após completar a questline da engenharia militar — não tente procurar antes.",
      "Porto de Gorthak tem o maior estoque de materiais de tier máximo do jogo — visite antes dos confrontos finais.",
      "As ilhas do arquipélago têm materiais exclusivos para crafting de armaduras aquáticas. Use o barco NPC de Gorthak para chegar.",
      "Dewhaven tem os únicos engenheiros capazes de atualizar construtos capturados durante missões — recurso único no late-game.",
      "Salve pelo menos 3 Abyss Artifacts para trocar pelos upgrades finais de equipamento antes de iniciar a sequência de bosses finais.",
    ]}
    seo={{
      title: "Delesyia — Guia Completo da Região Industrial | Crimson Desert",
      description: "Guia completo de Delesyia em Crimson Desert: Sky Fortress, Golden Star boss, Myurdin forma final, Hexe Marie, Porto de Gorthak, Steel Mountains, dicas de exploração industrial.",
      keywords: "Delesyia Crimson Desert, Delesyia mapa, Sky Fortress, Golden Star boss, Myurdin final boss, Hexe Marie boss, Thunder Tank boss, Porto Gorthak, Steel Mountains, Crimson Desert industrial, Pywel sudeste",
    }}
  />
);
export default DelesyiaPage;

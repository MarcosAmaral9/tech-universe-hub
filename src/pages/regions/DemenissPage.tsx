import RegionPageTemplate from "./RegionPageTemplate";
const DemenissPage = () => (
  <RegionPageTemplate
    slug="demeniss" name="Demeniss" label="Capital Política" iconKey="building"
    accentClass="border-purple-500/30 bg-purple-500/5" badgeClass="bg-purple-500/20 text-purple-300"
    position="Centro de Pywel — epicentro político e militar do continente"
    biome="Planícies douradas férteis (Golden Plains), florestas de carvalho antigo, rios navegáveis, pântanos no extremo sul próximo ao Gorthak"
    climate="Temperado continental. Verões secos e quentes ideais para agricultura, invernos rigorosos com neve pesada. As Golden Plains têm microclima próprio — ventos constantes que alimentam os moinhos e as catapultas das muralhas da cidade."
    overview={[
      "Demeniss é a capital política de Pywel e o palco dos capítulos mais complexos da campanha principal. A região concentra a disputa de poder entre as Casas Thorel e Byron, as duas maiores famílias nobres do continente — e Kliff é forçado a navegar entre as suas rivalidades enquanto busca seus próprios objetivos.",
      "A cidade de Caliburn, capital de Demeniss, é a maior metrópole de Pywel: múltiplos distritos com NPCs únicos, mercados especializados e uma rede de esgotos habitável que é explorada em várias missões. A cidade muda visualmente ao longo da campanha — construções são destruídas, outros são reconstruídos.",
      "Mecanicamente, Demeniss introduz os sistemas mais avançados do jogo: siege warfare (defesa e ataque a castelos), crafting de nível maestro e as Spires of Ringing Truth — estruturas que desbloqueiam pontos de teleporte rápido pelo mapa.",
    ]}
    lore={[
      "Demeniss foi construída sobre os alicerces de uma civilização muito mais antiga que usava o Abyss como fonte de energia estrutural. As fundações de Caliburn, descobertas durante missões subterrâneas, revelam inscrições em idiomas pré-históricos que os scholars do Scholastone Institute ainda tentam decifrar.",
      "A Casa Thorel controla o exército regular e o suprimento de alimentos. A Casa Byron controla as rotas comerciais e o porto de Gorthak ao sul. A tensão entre elas é a força motriz da política de Demeniss — e a razão pela qual o poder central é tão instável.",
    ]}
    locations={[
      { name: "Caliburn (Cidade)", desc: "Capital de Demeniss e maior cidade de Pywel. 4 distritos: Distrito das Casas Nobres, Mercado Central, Distrito Militar e as Catacumbas Antigas. Dezenas de missões e NPCs únicos." },
      { name: "Fort Ironclad", desc: "Fortaleza militar no norte de Demeniss. Palco do boss Gregor (Capítulo 8). Possui o maior arsenal do jogo para compra e upgrade de armas de cerco." },
      { name: "Golden Plains", desc: "Planícies agrícolas douradas no coração de Demeniss. Palco de batalhas de cerco em larga escala. Recursos de crafting agrícolas em abundância." },
      { name: "Gate of Truth", desc: "Estrutura ancestral no centro-norte. Desbloqueia após completar a questline do Guardian of the Ancient Ruins. Lar de Stonewalker Antiquum." },
      { name: "Kingshield Dig Site", desc: "Escavação arqueológica que revelou uma caverna de Abyss em profundidade. Boss Kutum encontrado no fundo. Materiais de Ancient class disponíveis aqui." },
      { name: "Southern Quarry", desc: "Pedreira ao sul da Golden Plains. Trabalhadores escravizados por Cubewalker Lithus. Missão: Liberate the Southern Quarry — recompensa blueprints de construção." },
      { name: "City of Caliburn Undercity", desc: "Rede de esgotos e túneis medievais habitada por bandidos e criaturas do Abyss. Várias missões de infiltração e investigação passam por aqui." },
      { name: "Cloister of Ruination", desc: "Mosteiro em ruínas controlado pela Antumbra Order. Boss Ator, Archon of Antumbra — exige completar 12 sub-quests antes de acessar." },
    ]}
    bosses={[
      {
        name: "Lucian Bastier",
        difficulty: 4,
        desc: "Líder dos Righteous Inquisitors com 2 barras de vida. Comanda um grupo de soldados que devem ser eliminados antes de focar no boss. Fase 2: consome um Abyss Artifact e se transforma.",
        reward: "Chave da Spire of Clockwork",
        tip: "Elimine os 4 soldados ao redor com ataques de área antes de iniciar a luta principal. Conserve Palmer Pills para a forma desperta.",
      },
      {
        name: "Lucian Bastier Desperto",
        difficulty: 5,
        desc: "Transformação direta após Lucian Bastier normal. Muito mais rápido e com ataques de área que cobrem metade da arena. 1 barra de vida mas com alta resistência.",
        reward: "Abyss Artifact + progressão da história",
        tip: "Use Palmer Pills aqui — não economize. Mantenha distância máxima e espere a pausa após cada combo pesado.",
      },
      {
        name: "Gregor, the Halberd of Carnage",
        difficulty: 4,
        desc: "Guardião do Fort Ironclad. Cuidado com as flechas automáticas das paredes da arena — fique no centro para evitá-las. Usa alabarda com ataques de varredura de grande alcance.",
        reward: "Golden Vanguard (escudo único)",
        tip: "Quebre o escudo dele com ataques pesados seguidos de Force Palm. Depois de 3 quebras de guarda consecutivas, ele entra em stagger longo.",
      },
      {
        name: "Fortain, the Cursed Knight",
        difficulty: 4,
        desc: "Cavaleiro amaldiçoado que invoca um aliado fantasma. Você gerencia dois oponentes simultaneamente — o fantasma é semi-transparente mas causa dano real.",
        reward: "Armor Set Fallen Kingdom (4 peças)",
        tip: "Ignore o fantasma completamente. Foque em Fortain — quando ele morrer, o fantasma some. Role para o lado quando o fantasma atacar.",
      },
      {
        name: "T'rukan, the Ascended",
        difficulty: 5,
        desc: "Um dos bosses mais difíceis da campanha. Ataques rápidos encadeados com pouco espaço de recuperação. A arena tem pilares que são destruídos ao longo da luta.",
        reward: "Abyss Artifact tier alto + itens raros",
        tip: "Use Ground Surge para acumular stagger mais rapidamente. Após cada stagger completo, você tem 5 segundos de janela — use combo completo.",
      },
      {
        name: "Stonewalker Antiquum",
        difficulty: 4,
        desc: "Golem Ancient de pedra em 2 fases. Fase 1: imune a dano direto. Use Axiom Force para puxar o olho brilhante da testa — isso abre 10 segundos de dano. Fase 2: mais agressivo e os olhos se movem.",
        reward: "Earthsplitter (machado único) + Abyss Artifact",
        tip: "Leve pelo menos 5 Aether Stones para garantir usos do Axiom Force. Cada puxão do olho inicia o timer — não desperdice os 10 segundos.",
      },
      {
        name: "Ator, Archon of Antumbra",
        difficulty: 5,
        desc: "Overwhelming Being — um dos 3 bosses mais difíceis do jogo. Disponível apenas após derrotar Antumbra's Sword, Spear e Staff e completar todos os 12 sub-quests da Antumbra Order.",
        reward: "Abyss Artifact de tier máximo",
        tip: "Exige armadura no mínimo +18. Use todos os buffs disponíveis antes de entrar. A luta dura cerca de 10-15 minutos sem erros graves.",
      },
    ]}
    factions={[
      { name: "Casa Thorel", desc: "Família nobre que controla o exército e o suprimento de alimentos de Demeniss. Aliança com eles desbloqueia acesso ao Fort Ironclad e equipamentos militares." },
      { name: "Casa Byron", desc: "Família nobre controlando comércio e o porto de Gorthak. Aliança desbloqueia rotas comerciais e redução de preços nos mercados de Caliburn." },
      { name: "Righteous Inquisitors", desc: "Ordem militar fanática liderada por Lucian Bastier. Opõem-se a qualquer influência do Abyss — incluindo os poderes de Kliff." },
      { name: "Antumbra Order", desc: "Organização secreta que adora as trevas do Abyss. Cadeia de missões longa mas com as recompensas mais poderosas do jogo." },
    ]}
    tips={[
      "Compre a planta do mapa de Caliburn Undercity no mercado da Merchant's Quarter antes de iniciar qualquer missão de infiltração — economiza horas de exploração às cegas.",
      "As Spires of Ringing Truth (pontos de fast travel) em Demeniss devem ser ativadas imediatamente ao descobrir — a região é grande demais para percorrer sem teleporte.",
      "Complete a cadeia Antumbra antes do final do Capítulo 9 — algumas sub-quests ficam trancadas após certos eventos da história.",
      "O Fort Ironclad tem o maior estoque de munição de cerco do jogo — compre antes das batalhas de cerco obrigatórias.",
      "A missão Guardian of the Ancient Ruins pode ser iniciada a partir do Nível 15 — não deixe para mais tarde pois Stonewalker tem drop de material único.",
      "Os esgotos de Caliburn têm atalhos permanentes entre distritos — vale a pena mapear os túneis cedo.",
    ]}
    seo={{
      title: "Demeniss — Guia Completo da Capital Política | Crimson Desert",
      description: "Guia completo de Demeniss em Crimson Desert: Caliburn, Fort Ironclad, Golden Plains, bosses Lucian Bastier, T'rukan e Ator Antumbra, Casas Thorel e Byron, dicas de exploração.",
      keywords: "Demeniss Crimson Desert, Caliburn cidade, Fort Ironclad, Golden Plains, Lucian Bastier boss, Trukan boss, Ator Antumbra boss, Stonewalker Antiquum, Casa Thorel, Casa Byron, Crimson Desert capital, Pywel centro",
    }}
  />
);
export default DemenissPage;

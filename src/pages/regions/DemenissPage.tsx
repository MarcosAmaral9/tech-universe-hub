import RegionPageTemplate from "./RegionPageTemplate";

const DemenissPage = () => (
  <RegionPageTemplate
    slug="demeniss"
    name="Demeniss"
    label="Capital Política"
    iconKey="building"
    accentClass="border-yellow-500/30 bg-yellow-500/5"
    badgeClass="bg-yellow-500/20 text-yellow-400"
    position="Centro do continente de Pywel"
    biome="Cidades fortificadas, planícies militarizadas e estradas pavimentadas conectando guarnições"
    climate="Continental temperado. Verões quentes e secos, invernos curtos com geadas leves — ideal para grandes batalhas de cerco."
    overview={[
      "Demeniss é a capital de Pywel e o coração político e militar do continente. É aqui que se desenrolam algumas das storylines mais densas do jogo, com facções poderosas — em especial a Casa Thorel e a Casa Byron — disputando influência sobre o trono e a economia.",
      "A região tem um dos maiores centros urbanos de Crimson Desert, com palácios, mercados imperiais, quartéis e arenas. Diplomacia, espionagem e contratos políticos abrem caminhos paralelos importantes para a campanha principal.",
      "É também palco das maiores batalhas de cerco do jogo, citadas pelo GameSpot como momentos memoráveis — confrontos em larga escala envolvendo aríetes, catapultas e tropas comandadas pelo jogador.",
    ]}
    locations={[
      { name: "Capital fortificada", desc: "Cidade central murada com palácios, mercado imperial e a sede do governo de Pywel." },
      { name: "Casa Thorel", desc: "Sede da nobre Casa Thorel. Centro de uma das principais linhas políticas da campanha principal." },
      { name: "Casa Byron", desc: "Sede dos Byron, principal rival dos Thorel. Missões de espionagem e contratos políticos partem daqui." },
      { name: "Cidades comerciais", desc: "Núcleos urbanos menores com feiras permanentes, leilões de equipamentos raros e mercadores de artefatos." },
    ]}
    bosses={[
      {
        name: "Cassius Morten — o Traidor de Calphade",
        desc: "Membro renegado dos Black Bears. Combate em arena com guarda-costas e múltiplas fases. Recompensa: equipamento exclusivo de elite.",
      },
      {
        name: "Walter Lanford",
        desc: "Boss humano que utiliza espingarda e ataques de projéteis a longa distância. Exige cobertura, esquivas precisas e fechamento rápido de distância.",
      },
    ]}
    tips={[
      "Cumpra missões para os dois lados (Thorel e Byron) antes de tomar partido — várias recompensas só aparecem se você ouvir as duas casas.",
      "Antes das batalhas de cerco, atualize equipamentos pesados e estoque pólvora/comida — combates duram dezenas de minutos.",
      "Walter Lanford é mais fácil em ambientes fechados; provoque-o para corredores em vez de praças abertas.",
      "Rumores em tabernas levam a Abyss Cressets escondidos no perímetro da capital — não ignore conversas paralelas.",
    ]}
    seo={{
      title: "Demeniss (Crimson Desert): Guia da Capital Política de Pywel",
      description:
        "Demeniss é a capital de Pywel em Crimson Desert: Casas Thorel e Byron, batalhas de cerco, bosses Cassius Morten e Walter Lanford, dicas políticas e estratégias.",
      keywords:
        "Demeniss Crimson Desert, capital Pywel, Casa Thorel, Casa Byron, Cassius Morten, Walter Lanford, batalhas cerco Pywel, politica Crimson Desert, capital Pearl Abyss, Demeniss bosses, guia Demeniss",
    }}
  />
);

export default DemenissPage;

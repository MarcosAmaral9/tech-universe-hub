import RegionPageTemplate from "./RegionPageTemplate";

const DelesyiaPage = () => (
  <RegionPageTemplate
    slug="delesyia"
    name="Delesyia"
    label="Região Tecnológica"
    iconKey="cpu"
    accentClass="border-purple-500/30 bg-purple-500/5"
    badgeClass="bg-purple-500/20 text-purple-400"
    position="Leste do continente de Pywel"
    biome="Instalações mecânicas, ruínas avançadas, laboratórios e torres flutuantes"
    climate="Temperado-seco com noites frias. A presença de máquinas mantém algumas áreas com calor anormal — o que afeta certos eventos."
    overview={[
      "Delesyia é a região mais singular de Pywel — um polo científico que destoa completamente do medievalismo do resto do continente. Aqui o jogador encontra criaturas mecânicas, robôs autônomos, esteiras de produção, torres de comunicação e fragmentos de uma civilização tecnologicamente muito mais avançada.",
      "A região abriga a Library of Providence, biblioteca/laboratório central que funciona como um dos hubs de conhecimento mais importantes do jogo. Várias missões secundárias de Delesyia desbloqueiam habilidades únicas, melhorias de equipamentos e fragmentos de lore que conectam Pywel ao Abismo.",
      "Delesyia também é famosa pelas torres de fast travel acessíveis apenas por planeio — Kliff precisa usar a habilidade de Glide a partir de pontos elevados para alcançá-las, criando uma camada de exploração vertical exclusiva da região.",
    ]}
    locations={[
      { name: "Urdavah", desc: "Instituto de pesquisa principal. Hub de cientistas, missões científicas e laboratórios de prototipagem." },
      { name: "Varnia", desc: "Cidade no limite nordeste do mapa. Mercado de tecnologia, contrabando de peças mecânicas e contratos de caça a robôs descontrolados." },
      { name: "Library of Providence", desc: "Imensa biblioteca/laboratório central. Conexão direta com a lore do Abismo e desbloqueio de habilidades exclusivas." },
      { name: "Torres de Fast Travel", desc: "Estruturas elevadas acessíveis somente por planeio. Encurtam drasticamente o tempo de travessia do leste do continente." },
    ]}
    bosses={[
      {
        name: "Golden Star",
        desc: "Dragão mecânico voador, considerado um dos bosses mais espetaculares do jogo. O combate acontece no ar, com Kliff montado em um Wyvern. Múltiplas fases envolvendo perseguição, esquiva de mísseis e ataques diretos no núcleo.",
      },
    ]}
    tips={[
      "Suba a habilidade de Glide ao máximo antes de focar em Delesyia — várias regiões só são acessíveis planando.",
      "Roube/colete componentes mecânicos de inimigos derrotados: são moeda de troca premium em Urdavah.",
      "A batalha contra o Golden Star exige um Wyvern de combate — não tente sem montaria voadora otimizada.",
      "Visite a Library of Providence cedo: o conhecimento desbloqueado lá impacta missões em outras regiões, inclusive no Abismo.",
    ]}
    seo={{
      title: "Delesyia (Crimson Desert): Guia da Região Tecnológica de Pywel",
      description:
        "Delesyia é o polo tecnológico de Pywel em Crimson Desert: Urdavah, Varnia, Library of Providence, torres de fast travel e o boss Golden Star (dragão mecânico voador).",
      keywords:
        "Delesyia Crimson Desert, Pywel tecnologia, Urdavah, Varnia, Library of Providence, Golden Star boss, dragao mecanico Crimson Desert, fast travel Delesyia, Pearl Abyss Delesyia, Wyvern combate, robots Pywel",
    }}
  />
);

export default DelesyiaPage;

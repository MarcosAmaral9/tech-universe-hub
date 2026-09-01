import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { Clock, User, Calendar, Map, ListChecks, HelpCircle, Landmark, Globe2, Skull, Flag } from "lucide-react";
import heroImg from "@/assets/hell-let-loose-vietnam-mapas.webp";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";

const SLUG = "hell-let-loose-vietnam-mapas-contexto-historico";
const TITLE = "Hell Let Loose: Vietnam — Todos os Mapas e o Contexto Histórico Real por Trás de Cada Um";

const MAPAS = [
  {
    nome: "Thanh Hóa Bridge",
    local: "Ponte Hàm Rồng, província de Thanh Hóa, Vietnã do Norte",
    terreno: "Travessia de rio, arrozais abertos, encostas fortificadas e uma ponte de aço como eixo central.",
    historia:
      "A ponte de Hàm Rồng virou símbolo da campanha aérea Rolling Thunder (1965–1968). Foi atacada dezenas de vezes por caças-bombardeiros americanos e resistiu por anos, ao custo de aeronaves abatidas por artilharia antiaérea posicionada nas colinas vizinhas. Só caiu em 1972, quando bombas guiadas a laser entraram em cena.",
  },
  {
    nome: "Đắk Tô Airfield",
    local: "Đắk Tô, província de Kontum, Planalto Central",
    terreno: "Pista de pouso disputada, cristas altas, mato alto e selva fechada ao redor do perímetro.",
    historia:
      "O Planalto Central foi palco de alguns dos combates mais duros da guerra, com destaque para a Batalha de Đắk Tô, no fim de 1967, e para a luta pela Colina 875. Era uma região de infiltração vinda da Trilha Ho Chi Minh, o que explica o padrão de ataque a bases e campos de pouso isolados.",
  },
  {
    nome: "Ia Drang",
    local: "Vale do rio Drang, província de Gia Lai",
    terreno: "Esporões de montanha, clareiras que funcionam como zonas de pouso e floresta densa nas bordas.",
    historia:
      "Em novembro de 1965, o Vale de Ia Drang recebeu o primeiro grande confronto entre tropas regulares americanas e o Exército do Vietnã do Norte. Foi ali que a doutrina de assalto aeromóvel por helicóptero — levar infantaria direto para clareiras cercadas de mato — foi testada em escala real pela primeira vez.",
  },
  {
    nome: "Van Tuong",
    local: "Península de Vạn Tường, província de Quảng Ngãi",
    terreno: "Faixa costeira, dunas, aldeias e canais que ligam o mar ao interior.",
    historia:
      "Cenário da Operação Starlite, em agosto de 1965: a primeira grande operação exclusivamente americana da guerra, combinando desembarque anfíbio, assalto por helicóptero e avanço terrestre contra um regimento do Vietcong entrincheirado perto da costa.",
  },
  {
    nome: "Hue",
    local: "Cidade de Huế, antiga capital imperial, às margens do rio Perfume",
    terreno: "Quarteirões urbanos de alvenaria, muralhas da Cidadela, porões, becos e travessias de rio.",
    historia:
      "A Batalha de Huế, entre janeiro e março de 1968, foi o combate urbano mais longo e sangrento da guerra, dentro da Ofensiva do Tet. A luta casa a casa pela Cidadela durou cerca de um mês e destruiu boa parte do patrimônio histórico da cidade.",
  },
];

const LINHA_TEMPO = [
  { ano: "1954", fato: "Derrota francesa em Dien Bien Phu e Acordos de Genebra dividem o país no paralelo 17." },
  { ano: "1964", fato: "Incidente do Golfo de Tonkin leva o Congresso dos EUA a aprovar a resolução que autoriza a escalada militar." },
  { ano: "1965", fato: "Início da campanha aérea Rolling Thunder e desembarque dos primeiros fuzileiros em Da Nang. Ia Drang e Van Tuong acontecem neste ano." },
  { ano: "1967", fato: "Combates no Planalto Central, incluindo Đắk Tô e a Colina 875." },
  { ano: "1968", fato: "Ofensiva do Tet, cerco de Khe Sanh e a batalha urbana de Huế. Ponto de virada político nos EUA." },
  { ano: "1969–1972", fato: "Política de 'vietnamização': redução gradual das tropas americanas e transferência do combate ao Vietnã do Sul." },
  { ano: "1973", fato: "Acordos de Paz de Paris; saída das últimas tropas de combate dos EUA." },
  { ano: "1975", fato: "Queda de Saigon e reunificação do país sob o governo do Norte." },
];

const BAIXAS = [
  { lado: "Estados Unidos", mortos: "≈ 58.200 mortos", nota: "Número consolidado pelo Departamento de Defesa dos EUA, base do Memorial dos Veteranos do Vietnã." },
  { lado: "Vietnã do Sul (ARVN)", mortos: "≈ 220.000 a 250.000 mortos", nota: "Estimativas variam conforme a fonte e o período contabilizado." },
  { lado: "Vietnã do Norte e Vietcong", mortos: "≈ 1,1 milhão de mortos", nota: "Número divulgado pelo governo vietnamita em 1995, incluindo desaparecidos." },
  { lado: "Coreia do Sul", mortos: "≈ 5.000 mortos", nota: "Maior contingente aliado depois dos EUA, com mais de 300 mil militares rotacionados." },
  { lado: "Austrália e Nova Zelândia", mortos: "≈ 520 mortos (AUS) e ≈ 37 (NZ)", nota: "Participação concentrada na província de Phuoc Tuy." },
  { lado: "Civis vietnamitas", mortos: "≈ 2 milhões (estimativa mais citada)", nota: "Estimativas sérias variam de 1 a 3 milhões; não há censo confiável do período." },
];

const FINANCIADORES = [
  { pais: "Estados Unidos", papel: "Sustentaram o Vietnã do Sul com ajuda militar e econômica direta, mais de 500 mil militares no pico (1968–1969) e um gasto de guerra estimado em cerca de US$ 168 bilhões da época." },
  { pais: "União Soviética", papel: "Principal fornecedora de sistemas pesados ao Norte: mísseis antiaéreos SA-2, caças MiG, radares, artilharia, caminhões e combustível, além de assessores técnicos." },
  { pais: "China", papel: "Enviou dezenas de milhares de militares de apoio (engenharia, antiaérea e logística) ao Vietnã do Norte, além de armamento leve, munição e alimentos." },
  { pais: "Coreia do Sul, Austrália, Nova Zelândia, Tailândia e Filipinas", papel: "Integraram a coalizão 'Free World Military Forces' ao lado do Sul, com tropas de combate ou de apoio." },
  { pais: "Bloco socialista europeu", papel: "Tchecoslováquia, Polônia, Hungria e Alemanha Oriental contribuíram com equipamento, treinamento e ajuda médica ao Norte." },
];

const TEATROS = [
  {
    regiao: "Zona Desmilitarizada e I Corps (norte do Sul)",
    provincias: "Quảng Trị, Thừa Thiên-Huế, Quảng Nam, Quảng Ngãi",
    caracteristica:
      "Faixa mais próxima do paralelo 17, onde o Exército do Vietnã do Norte podia atuar com unidades regulares, artilharia pesada e reforço vindo direto do outro lado da linha. Era o teatro dos fuzileiros americanos.",
    episodios: "Khe Sanh (1968), Batalha de Huế (1968), Operação Starlite em Vạn Tường (1965), Vale do A Sầu e Colina 937 (1969).",
  },
  {
    regiao: "Planalto Central",
    provincias: "Kontum, Gia Lai, Đắk Lắk",
    caracteristica:
      "Região montanhosa e de selva fechada, colada às fronteiras do Laos e do Camboja. Ponto de entrada da Trilha Ho Chi Minh e território de bases isoladas americanas cercadas por mato.",
    episodios: "Ia Drang (1965), Đắk Tô e Colina 875 (1967), ofensivas de 1972 sobre Kontum.",
  },
  {
    regiao: "Costa central e planície litorânea",
    provincias: "Bình Định, Phú Yên, Khánh Hòa",
    caracteristica:
      "Arrozais, aldeias densas e uma estreita planície entre montanha e mar cortada pela Rota 1. Guerra de controle populacional, com operações de busca e destruição alternando com pacificação.",
    episodios: "Operações Masher/White Wing (1966), campanhas no vale de Bồng Sơn.",
  },
  {
    regiao: "Arredores de Saigon e 'Iron Triangle'",
    provincias: "Bình Dương, Tây Ninh, Hậu Nghĩa",
    caracteristica:
      "Cinturão de plantações de seringueira e florestas a noroeste da capital, sustentado por uma rede subterrânea de túneis com hospitais, depósitos e alojamentos — o complexo de Củ Chi é o exemplo mais conhecido.",
    episodios: "Operação Cedar Falls (1967), Operação Junction City (1967), ataques do Tet a Saigon (1968).",
  },
  {
    regiao: "Delta do Mekong",
    provincias: "Long An, Kiên Giang, Cà Mau e vizinhas",
    caracteristica:
      "Terreno plano, alagado e cortado por milhares de canais. A guerra ali foi essencialmente fluvial: barcos de patrulha, comboios em canal e emboscadas em margens de vegetação fechada.",
    episodios: "Mobile Riverine Force (1967–1969), combates do Tet em Mỹ Tho e Bến Tre, Operação Game Warden.",
  },
];

const BATALHAS = [
  {
    nome: "Ia Drang",
    data: "Novembro de 1965",
    forcas: "1ª Divisão de Cavalaria (Aeromóvel) dos EUA x 3 regimentos do NVA",
    resultado:
      "Primeiro grande choque entre tropas regulares dos dois lados. Validou o assalto aeromóvel por helicóptero e, do lado de Hanói, ensinou a 'agarrar pelo cinturão' — colar-se ao inimigo para anular o apoio aéreo e a artilharia.",
  },
  {
    nome: "Operação Starlite (Vạn Tường)",
    data: "18 a 24 de agosto de 1965",
    forcas: "Fuzileiros dos EUA x 1º Regimento do Vietcong",
    resultado:
      "Primeira grande operação puramente americana da guerra, combinando desembarque anfíbio, helicópteros e blindados contra posições entrincheiradas na península.",
  },
  {
    nome: "Đắk Tô e Colina 875",
    data: "Novembro de 1967",
    forcas: "173ª Brigada Aerotransportada e ARVN x 1ª Divisão do NVA",
    resultado:
      "Semanas de assalto a cristas fortificadas no Planalto Central, com bunkers escalonados encosta acima. Parte das 'batalhas de fronteira' que precederam o Tet.",
  },
  {
    nome: "Cerco de Khe Sanh",
    data: "21 de janeiro a 9 de abril de 1968",
    forcas: "26º Regimento de Fuzileiros dos EUA x duas divisões do NVA",
    resultado:
      "77 dias de cerco a uma base de combate isolada, sustentada por ponte aérea e bombardeio maciço. Concentrou a atenção do comando americano nas semanas que antecederam a Ofensiva do Tet.",
  },
  {
    nome: "Ofensiva do Tet",
    data: "30 de janeiro a setembro de 1968",
    forcas: "NVA e Vietcong x EUA e ARVN",
    resultado:
      "Ataques simultâneos a mais de cem localidades. Revés militar para o Norte e desgaste político decisivo nos EUA — o caso clássico de derrota tática com efeito estratégico inverso.",
  },
  {
    nome: "Batalha de Huế",
    data: "31 de janeiro a 2 de março de 1968",
    forcas: "Fuzileiros dos EUA e ARVN x NVA e Vietcong",
    resultado:
      "Combate urbano casa a casa pela Cidadela, o mais longo da guerra. Boa parte do patrimônio da antiga capital imperial foi destruída e a cidade registrou execuções em massa de civis pelo lado norte-vietnamita.",
  },
  {
    nome: "Colina 937 ('Hamburger Hill')",
    data: "10 a 20 de maio de 1969",
    forcas: "101ª Divisão Aerotransportada x 29º Regimento do NVA",
    resultado:
      "Dez dias de assalto frontal a uma elevação no Vale do A Sầu, abandonada logo depois. Virou símbolo doméstico do questionamento sobre o custo humano das operações.",
  },
  {
    nome: "Ofensiva da Páscoa",
    data: "Março a outubro de 1972",
    forcas: "NVA com blindados x ARVN com apoio aéreo dos EUA",
    resultado:
      "Primeira ofensiva convencional em larga escala do Norte, com colunas de tanques cruzando a DMZ. Testou a 'vietnamização' e antecipou o desfecho de 1975.",
  },
];

const HellLetLooseVietnamMapas2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-geek/20 text-geek rounded-full text-sm font-medium">
            Games · FPS · História
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Hell Let Loose: Vietnam — Todos os Mapas e o Contexto Histórico Real por Trás de Cada Um
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          <strong>Hell Let Loose: Vietnam</strong> chegou em 13 de agosto de 2026 com seis mapas de larga escala
          inspirados em batalhas reais. Este guia liga cada cenário do jogo à operação militar que o inspirou e
          reconstrói o contexto da Guerra Fria, os países que financiaram os dois lados e os números de baixas do
          conflito.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />28 de Agosto, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width={1280}
          height={720}
          src={heroImg}
          alt="Campo de batalha na Guerra do Vietnã ao amanhecer, com ponte de madeira sobre rio, arrozais e fumaça ao fundo"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-geek/10 to-background rounded-xl border border-geek/30">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <ListChecks className="h-5 w-5 text-geek" />
            Resumo rápido
          </h2>
          <div className="space-y-2">
            {[
              { k: "Lançamento", v: "13 de agosto de 2026" },
              { k: "Estúdio / publisher", v: "Expression Games / Team17" },
              { k: "Plataformas", v: "PC, PlayStation 5 e Xbox Series X|S" },
              { k: "Escala das partidas", v: "50 contra 50 jogadores" },
              { k: "Facções", v: "Forças Armadas dos EUA e Exército do Vietnã do Norte (NVA)" },
              { k: "Mapas de lançamento", v: "Seis, todos com redes fluviais" },
            ].map(({ k, v }) => (
              <div key={k} className="grid grid-cols-2 gap-2 py-2 border-b border-border/30 text-xs md:text-sm">
                <span className="text-muted-foreground break-words">{k}</span>
                <span className="text-right text-geek font-bold break-words">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <AdLeaderboard />

        <h2 id="por-que-importa" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe2 className="h-7 w-7 text-geek" />
          Por Que os Mapas Deste Jogo Pedem Contexto
        </h2>
        <p>
          A série Hell Let Loose sempre trabalhou com uma premissa incômoda para o FPS tradicional: a partida não é
          um duelo de reflexos, é uma disputa de logística. Você não vence porque atirou melhor, vence porque o seu
          time construiu guarnições nos lugares certos, manteve linhas de suprimento e entendeu o terreno. No salto
          para o Vietnã, esse desenho encontra um conflito em que o terreno era, literalmente, a arma principal de um
          dos lados.
        </p>
        <p>
          É por isso que vale conhecer a história por trás de cada cenário. Quando você percebe que o vale de Ia Drang
          foi onde o assalto aeromóvel nasceu, entende por que o mapa é construído em torno de clareiras cercadas por
          cristas — a mesma armadilha que os pilotos reais enfrentaram. Quando descobre que a ponte de Thanh Hóa
          resistiu a centenas de surtidas aéreas antes de cair, o objetivo central do mapa deixa de ser um ponto de
          captura genérico e vira um símbolo.
        </p>
        <p>
          Antes de seguir, um recado necessário: os mapas do jogo são <em>inspirados</em> em locais e operações reais,
          não são reconstruções topográficas fiéis. O estúdio comprime distâncias, funde marcos geográficos e ajusta
          rotas para que 100 jogadores tenham uma partida jogável. A história abaixo é a real; o mapa é a leitura
          artística dela.
        </p>


        <h2 id="mapas" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Map className="h-7 w-7 text-geek" />
          Os Mapas e as Batalhas que os Inspiraram
        </h2>
        <p>
          O jogo estreou com seis mapas de larga escala. Cinco deles têm correspondência histórica documentada e
          bastante direta, e é por eles que vamos passar em detalhe. Todos compartilham uma característica que muda o
          ritmo em relação ao Hell Let Loose clássico: rios. Cada mapa tem uma rede fluvial navegável, o que dá aos
          barcos de patrulha um papel permanente na rotação de tropas e no flanqueamento.
        </p>

        <div className="not-prose my-8 space-y-5">
          {MAPAS.map((m) => (
            <div key={m.nome} className="rounded-xl border border-geek/30 bg-geek/5 p-5">
              <h3 className="font-display text-lg md:text-xl font-bold text-geek mb-1">{m.nome}</h3>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">{m.local}</p>
              <p className="text-sm mb-2"><strong>Terreno no jogo:</strong> {m.terreno}</p>
              <p className="text-sm text-muted-foreground"><strong>Contexto real:</strong> {m.historia}</p>
            </div>
          ))}
        </div>

        <p>
          Repare no padrão: dois mapas costeiros ou fluviais, dois de planalto e selva, um urbano. Não é um cardápio
          aleatório — é um resumo bastante honesto de como a guerra foi travada. O combate no Vietnã não teve uma
          frente contínua como na Segunda Guerra. Teve bases isoladas cercadas por mato, aldeias disputadas em zonas
          costeiras, corredores de infiltração no planalto e, em episódios excepcionais como Huế, luta urbana de
          quarteirão em quarteirão.
        </p>
        <p>
          Essa variedade impõe estilos de jogo diferentes. No mapa urbano, as linhas de visão são curtas, as
          guarnições em porões viram fortalezas e o avanço custa caro. No planalto, a vegetação transforma cada
          deslocamento em aposta: quem enxerga primeiro decide o combate. Nas áreas costeiras e de rio, controlar a
          travessia vale mais do que controlar o ponto — sem passagem, o time inteiro fica preso.
        </p>

        <h2 id="geografia" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe2 className="h-7 w-7 text-geek" />
          A Geografia da Guerra: Onde Cada Coisa Aconteceu
        </h2>
        <p>
          Para entender por que os mapas do jogo são tão diferentes entre si, é preciso entender que a Guerra do
          Vietnã foi, na prática, cinco guerras distintas travadas ao mesmo tempo em cinco tipos de terreno. O país é
          longo e estreito: mais de 1.600 quilômetros do paralelo 17 até a ponta do Delta, com uma cordilheira
          cobrindo o oeste, uma planície costeira estreita a leste e um imenso labirinto de água ao sul. Cada uma
          dessas faixas produziu um tipo próprio de combate — e cada mapa do jogo pertence a uma delas.
        </p>

        <div className="not-prose my-8 space-y-5">
          {TEATROS.map((t) => (
            <div key={t.regiao} className="rounded-xl border border-geek/30 bg-geek/5 p-5">
              <h3 className="font-display text-lg font-bold text-geek mb-1">{t.regiao}</h3>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">{t.provincias}</p>
              <p className="text-sm mb-2">{t.caracteristica}</p>
              <p className="text-sm text-muted-foreground"><strong>Episódios principais:</strong> {t.episodios}</p>
            </div>
          ))}
        </div>

        <p>
          Três fatores atravessavam todos esses teatros. O primeiro é a monção: metade do ano com chuva pesada,
          estradas intransitáveis e apoio aéreo limitado por teto baixo de nuvem — o que empurrava as grandes
          ofensivas para janelas específicas do calendário. O segundo é a fronteira: Laos e Camboja eram formalmente
          neutros, e a Trilha Ho Chi Minh atravessava os dois, criando um santuário logístico que a linha de frente
          não conseguia alcançar. O terceiro é a população: diferentemente de uma guerra de frentes, o controle
          disputado era o das aldeias, de dia e de noite, o que fez do mapa político algo tão decisivo quanto o mapa
          topográfico.
        </p>
        <p>
          É por isso que a régua de vitória do jogo faz sentido histórico. Não se trata de empurrar uma linha até
          Hanói: trata-se de manter setores, sustentar pontos de renascimento e negar rota de reforço ao adversário.
          A guerra real foi disputada exatamente nessa moeda.
        </p>

        <h2 id="batalhas" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Skull className="h-7 w-7 text-geek" />
          As Batalhas que Definiram o Conflito
        </h2>
        <p>
          Algumas dessas batalhas dão nome direto a mapas do jogo; outras não aparecem, mas explicam o cenário em que
          os mapas existem. Todas as datas e forças abaixo seguem o registro histórico consolidado.
        </p>

        <div className="not-prose my-8 overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-3">Batalha ou operação</th>
                <th className="text-left p-3">Período</th>
                <th className="text-left p-3">Forças envolvidas</th>
                <th className="text-left p-3">Resultado e importância</th>
              </tr>
            </thead>
            <tbody>
              {BATALHAS.map((b) => (
                <tr key={b.nome} className="border-t border-border/50">
                  <td className="p-3 font-bold text-geek align-top">{b.nome}</td>
                  <td className="p-3 align-top whitespace-nowrap">{b.data}</td>
                  <td className="p-3 text-muted-foreground align-top">{b.forcas}</td>
                  <td className="p-3 text-muted-foreground align-top">{b.resultado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Repare em um fio que liga quase todas elas: a decisão do combate raramente veio da tomada definitiva de
          território. Khe Sanh foi sustentada e depois desativada; a Colina 937 foi conquistada e abandonada em
          seguida; Huế foi retomada, mas em ruínas. O objetivo militar americano era atrito — infligir perdas
          insustentáveis. O objetivo de Hanói era duração — tornar o custo político impagável para o outro lado. Duas
          teorias de vitória que nunca se encontraram no mesmo campo.
        </p>



        <AdInArticle />

        <h2 id="guerra-fria" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Landmark className="h-7 w-7 text-geek" />
          Contexto: Por Que o Vietnã Virou Palco da Guerra Fria
        </h2>
        <p>
          A guerra que o jogo retrata não começou em 1965. Ela é a continuação direta da guerra de independência
          contra a França, encerrada em 1954 com a derrota francesa em Dien Bien Phu. Os Acordos de Genebra daquele
          ano dividiram provisoriamente o país no paralelo 17 e previam eleições de reunificação que nunca
          aconteceram. O Norte ficou sob o governo comunista de Ho Chi Minh; o Sul, sob um regime apoiado pelo
          Ocidente.
        </p>
        <p>
          Do ponto de vista americano, a justificativa era a chamada teoria do dominó: se o Vietnã do Sul caísse, os
          vizinhos cairiam em sequência. Do ponto de vista de Hanói, tratava-se de terminar a reunificação nacional
          interrompida por uma potência estrangeira. Essas duas leituras são incompatíveis — e é justamente aí que
          mora a longa duração do conflito.
        </p>
        <p>
          A escalada direta veio depois do incidente do Golfo de Tonkin, em agosto de 1964, quando relatos de ataques
          a destróieres americanos levaram o Congresso a aprovar uma resolução que abriu caminho para a intervenção
          em larga escala. Em 1965 começaram a campanha aérea Rolling Thunder e o desembarque de tropas terrestres.
          Em 1968, o efetivo americano no país passava de meio milhão de militares.
        </p>

        <h3 id="financiamento" className="flex items-center gap-3 text-xl font-bold mt-8 mb-4">
          <Flag className="h-6 w-6 text-geek" />
          Quem Financiava Cada Lado
        </h3>
        <p>
          Nenhum dos dois lados lutou sozinho. O que se vê nos mapas do jogo — um fuzil americano de um lado, uma
          variante chinesa do AK do outro — é o retrato material de uma disputa entre blocos que se recusavam a se
          enfrentar diretamente.
        </p>

        <div className="not-prose my-8 overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-3">País ou bloco</th>
                <th className="text-left p-3">Papel no financiamento e apoio</th>
              </tr>
            </thead>
            <tbody>
              {FINANCIADORES.map((f) => (
                <tr key={f.pais} className="border-t border-border/50">
                  <td className="p-3 font-bold text-geek align-top">{f.pais}</td>
                  <td className="p-3 text-muted-foreground">{f.papel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          O detalhe estratégico decisivo é que União Soviética e China sustentaram o Norte sem jamais colocar exércitos
          de combate em campo aberto contra os americanos. Isso deu a Hanói uma vantagem assimétrica: recebia sistemas
          antiaéreos modernos e munição em volume industrial, mas o adversário não podia responder atacando a fonte
          sem arriscar uma guerra entre potências nucleares. A Guerra Fria funcionava assim — o conflito era terceirizado.
        </p>
        <p>
          A logística do Norte também merece nota. A Trilha Ho Chi Minh, rede de estradas, trilhas e depósitos que
          atravessava o Laos e o Camboja, alimentou o esforço de guerra durante mais de uma década, mesmo sob
          bombardeio contínuo. Essa é a razão histórica pela qual as facções do jogo não são simétricas: um lado se
          movimenta por ar, o outro por baixo do chão e pelo mato.
        </p>

        <h2 id="linha-do-tempo" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Calendar className="h-7 w-7 text-geek" />
          Linha do Tempo Essencial
        </h2>

        <div className="not-prose my-8 overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-3">Ano</th>
                <th className="text-left p-3">O que aconteceu</th>
              </tr>
            </thead>
            <tbody>
              {LINHA_TEMPO.map((l) => (
                <tr key={l.ano} className="border-t border-border/50">
                  <td className="p-3 font-bold text-geek whitespace-nowrap align-top">{l.ano}</td>
                  <td className="p-3 text-muted-foreground">{l.fato}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          A Ofensiva do Tet, em 1968, é o eixo dessa linha. Militarmente, foi um revés para o Norte: os ataques
          simultâneos a mais de cem cidades foram rechaçados e o Vietcong sofreu perdas das quais nunca se recuperou
          plenamente. Politicamente, foi o contrário. As imagens de combate dentro de Saigon e a destruição de Huế
          desmontaram, na opinião pública americana, a narrativa de que a vitória estava próxima. É o exemplo clássico
          de derrota tática que produz vitória estratégica.
        </p>

        <h2 id="baixas" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Skull className="h-7 w-7 text-geek" />
          Números de Baixas: O Que Se Sabe e o Que É Estimativa
        </h2>
        <p>
          Números de guerra exigem cuidado. Os dados americanos são precisos porque havia registro individual de cada
          militar. Os dados vietnamitas, especialmente os civis, são estimativas — o país estava dividido, sob
          bombardeio, sem censo confiável, e diferentes metodologias produzem resultados que variam em milhões. Sempre
          que você vir um número único e redondo, desconfie: o intervalo é a informação honesta.
        </p>

        <div className="not-prose my-8 overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-3">Lado</th>
                <th className="text-left p-3">Mortos (estimativa)</th>
                <th className="text-left p-3">Observação</th>
              </tr>
            </thead>
            <tbody>
              {BAIXAS.map((b) => (
                <tr key={b.lado} className="border-t border-border/50">
                  <td className="p-3 font-bold text-geek align-top">{b.lado}</td>
                  <td className="p-3 whitespace-nowrap align-top">{b.mortos}</td>
                  <td className="p-3 text-muted-foreground">{b.nota}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Há ainda os números que não cabem em tabela: mais de 150 mil feridos americanos, milhões de deslocados
          internos, extensas áreas contaminadas por herbicidas e um passivo de artefatos explosivos não detonados que
          continua matando civis no Vietnã, no Laos e no Camboja décadas depois do fim da guerra. Nenhum jogo modela
          isso, e nem deveria fingir que modela.
        </p>

        <AdInArticle />

        <h2 id="jogo-e-historia" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Landmark className="h-7 w-7 text-geek" />
          O Que o Jogo Acerta — e Onde Ele Simplifica
        </h2>
        <p>
          O acerto principal é o ritmo. Hell Let Loose: Vietnam mantém a lentidão deliberada da série, e essa lentidão
          conversa bem com o conflito retratado: longos períodos de deslocamento e tensão, interrompidos por surtos
          curtos e violentos de contato. Quem jogou o título original vai reconhecer a sensação de andar cinco minutos
          para morrer em três segundos — e, aqui, isso é quase documental.
        </p>
        <p>
          O segundo acerto é a assimetria. Dar helicópteros a um lado e rede de túneis ao outro é mais fiel do que dar
          arsenais equivalentes com skins diferentes. A guerra real foi uma disputa entre mobilidade aérea e
          mobilidade oculta, e um jogo que espelha isso ensina algo sobre o conflito sem precisar de uma linha de texto
          explicativa.
        </p>
        <p>
          As simplificações também existem, e são inevitáveis. A guerra tinha três, quatro ou cinco atores conforme o
          recorte — forças do Sul, guerrilha do Vietcong, tropas regulares do Norte, contingentes aliados —, enquanto
          o jogo trabalha com duas facções. Toda a dimensão política, a população civil e o custo humano ficam fora
          do campo de visão, porque um shooter competitivo de 50 contra 50 não tem como colocá-los dentro sem virar
          outra coisa. Encare o jogo como porta de entrada, não como aula.
        </p>
        <p>
          Se quiser continuar do outro lado da moeda — o das armas, das classes e do novo sistema de peso —, o
          companheiro deste texto é o{" "}
          <Link to="/post/hell-let-loose-vietnam-armas-classes-gameplay" className="text-geek font-semibold">
            guia de armas, classes e gameplay de Hell Let Loose: Vietnam
          </Link>
          .
        </p>

        <h2 id="faq" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <HelpCircle className="h-7 w-7 text-geek" />
          Perguntas Frequentes
        </h2>
        <p>
          <strong>Quantos mapas tem Hell Let Loose: Vietnam?</strong> O jogo estreou com seis mapas de larga escala em
          13 de agosto de 2026, todos inspirados em locais e operações reais da Guerra do Vietnã, com rede fluvial
          navegável.
        </p>
        <p>
          <strong>Os mapas são cópias fiéis dos locais reais?</strong> Não. São recriações inspiradas: mantêm o tipo de
          terreno, marcos característicos e a lógica do combate, mas comprimem distâncias e ajustam rotas para caber em
          uma partida de 50 contra 50.
        </p>
        <p>
          <strong>Quais países financiaram a Guerra do Vietnã?</strong> O Vietnã do Sul foi sustentado principalmente
          pelos Estados Unidos, com tropas de Coreia do Sul, Austrália, Nova Zelândia, Tailândia e Filipinas. O Vietnã
          do Norte foi apoiado pela União Soviética e pela China, com contribuições de países do bloco socialista
          europeu.
        </p>
        <p>
          <strong>Quantas pessoas morreram na Guerra do Vietnã?</strong> Cerca de 58,2 mil militares americanos, algo
          entre 220 mil e 250 mil soldados sul-vietnamitas e aproximadamente 1,1 milhão de combatentes do Norte e do
          Vietcong, segundo dados divulgados por Hanói em 1995. As mortes civis são estimadas entre 1 e 3 milhões, com
          2 milhões como número mais citado.
        </p>
        <p>
          <strong>Preciso conhecer história para aproveitar o jogo?</strong> Não é obrigatório, mas ajuda. Entender por
          que o Planalto Central era um corredor de infiltração ou por que Huế virou combate urbano muda a forma como
          você lê o mapa e escolhe posições.
        </p>
      </div>

      <EditorialTake category="geek">
        <p>
          Jogo de guerra ambientado no Vietnã é sempre um campo minado. É o conflito em que a fronteira entre
          entretenimento e banalização fica mais fina, e a maioria das tentativas anteriores resolveu isso apelando
          para trilha sonora sessentista e clima de filme. O que me chamou atenção aqui foi a escolha oposta: a
          seriedade vem da mecânica, não da estética.
        </p>
        <p>
          Quando o jogo dá helicópteros a um lado e túneis ao outro, ele está dizendo algo verdadeiro sobre a guerra —
          que era um confronto entre duas formas incompatíveis de se mover pelo mesmo terreno. Isso é bem mais honesto
          do que qualquer cutscene dramática. E o mapa de Huế funciona porque a lentidão dolorosa do avanço é
          exatamente a memória que os veteranos daquele combate registraram.
        </p>
        <p>
          Minha recomendação é simples: jogue, e depois leia sobre o lugar em que você acabou de jogar. Ia Drang, Đắk
          Tô e Huế têm bibliografia farta e acessível. O jogo cumpre bem o papel de despertar a curiosidade; a parte
          difícil, a de encarar o custo humano real desses nomes, continua sendo tarefa nossa, fora da partida.
        </p>
      </EditorialTake>

      <ArticleSources
        category="geek"
        sources={[
          {
            title: "Hell Let Loose: Vietnam — página oficial do jogo",
            url: "https://www.hellletloose.com/game/hll-vietnam",
            publisher: "Team17 / Expression Games",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Hell Let Loose: Vietnam — Launch Maps",
            url: "https://store.steampowered.com/news/app/3079210/view/690891687156777528",
            publisher: "Steam News",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Hell Let Loose: Vietnam Is Out Now on Digital and Physical",
            url: "https://www.gamespress.com/en-US/Hell-Let-Loose-Vietnam-Is-Out-Now-on-Digital-and-Physical",
            publisher: "GamesPress",
            accessedAt: "Agosto 2026",
          },
          {
            title: "All Maps in Hell Let Loose: Vietnam",
            url: "https://www.dexerto.com/wikis/hell-let-loose-vietnam/all-maps/",
            publisher: "Dexerto",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Vietnam War U.S. Military Fatal Casualty Statistics",
            url: "https://www.archives.gov/research/military/vietnam-war/casualty-statistics",
            publisher: "U.S. National Archives",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Battle of Ia Drang Valley — histórico oficial",
            url: "https://history.army.mil/",
            publisher: "U.S. Army Center of Military History",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Vietnam War — visão geral, cronologia e consequências",
            url: "https://www.britannica.com/event/Vietnam-War",
            publisher: "Encyclopaedia Britannica",
            accessedAt: "Agosto 2026",
          },
        ]}
      />
      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="geek" />
    </article>
  );
};

export default HellLetLooseVietnamMapas2026;

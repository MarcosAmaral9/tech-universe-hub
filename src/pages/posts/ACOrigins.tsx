import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import { Clock, User, Calendar, Pyramid, Bird, Sword, Cpu, DollarSign, Target, Laptop, Gamepad2, HelpCircle, MapPin, Shield, Users, BookOpen } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import ArticleSources from "@/components/ArticleSources";
import EditorialTake from "@/components/EditorialTake";
import acOriginsImg from "@/assets/ac-origins.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const ACOrigins = () => {

  useEffect(() => {
    trackArticleRead("ac-origins-renascimento-franquia-egito", "Assassin's Creed Origins em 2026: Review Completa — Renascimento da Franquia no Egito Antigo", "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" portalPath="/geek/assassins-creed" portalLabel="Painel Assassin's Creed" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
            Assassin's Creed
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Assassin's Creed Origins em 2026 Vale a Pena? Review Completa, Egito Antigo, Bayek, PC Ideal e Custo-Benefício
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />28 de Janeiro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />17 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="28 de Janeiro, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          loading="eager"
          decoding="async"
          src={acOriginsImg}
          alt="Assassin's Creed Origins - Review completa 2026 Egito Antigo Bayek"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Após um hiato necessário, a Ubisoft lançou em 2017 o alicerce para o futuro da saga:{" "}
          <strong>Assassin's Creed Origins</strong>. Mais do que um novo jogo, foi uma{" "}
          <strong>reinvenção completa</strong> que nos levou de volta ao início de tudo no{" "}
          <strong>Egito dos Faraós</strong>, revelando a fundação da Irmandade dos "Ocultos" e
          introduzindo um sistema de combate que redefiniria a franquia para sempre. Em 2026,{" "}
          <strong>AC Origins</strong> continua sendo uma das experiências mais completas e emocionalmente
          impactantes de toda a série.
        </p>

        <p className="text-lg">Neste guia completo de <strong>Assassin's Creed Origins</strong> você encontra:</p>
        <ul className="text-lg">
          <li>👉 <strong>O renascimento da franquia ainda vale a pena?</strong></li>
          <li>👉 Contexto histórico: O Egito Ptolemaico e seus personagens reais</li>
          <li>👉 Por que Bayek é um dos melhores protagonistas da série</li>
          <li>👉 O sistema de combate revolucionário e o Discovery Tour educativo</li>
          <li>👉 DLCs Hidden Ones e Curse of the Pharaohs</li>
          <li>👉 Requisitos de PC e custo-benefício em 2026</li>
        </ul>

        <div className="my-8 p-6 bg-gradient-to-br from-yellow-500/10 to-background rounded-xl border border-yellow-500/30">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 mt-0">
            🎮 Informações Rápidas para Decisão de Compra
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div><div className="text-sm text-muted-foreground">Desenvolvedora</div><div className="font-bold">Ubisoft Montreal</div></div>
            <div><div className="text-sm text-muted-foreground">Lançamento</div><div className="font-bold">27/10/2017</div></div>
            <div><div className="text-sm text-muted-foreground">Preço Médio 2026</div><div className="font-bold">R$ 80 a R$ 130</div></div>
            <div><div className="text-sm text-muted-foreground">Plataformas</div><div className="font-bold">PC, PS4, PS5, Xbox</div></div>
            <div><div className="text-sm text-muted-foreground">Tempo (história)</div><div className="font-bold">30–35 horas</div></div>
            <div><div className="text-sm text-muted-foreground">100% Completo</div><div className="font-bold">70–80 horas</div></div>
            <div><div className="text-sm text-muted-foreground">DLCs</div><div className="font-bold">Hidden Ones + Curse of the Pharaohs</div></div>
            <div><div className="text-sm text-muted-foreground">Modo educativo</div><div className="font-bold">Discovery Tour incluso</div></div>
          </div>
          <p className="mt-4 text-muted-foreground mb-0">
            👉 <strong>Excelente custo-benefício</strong> com Discovery Tour educativo incluso gratuitamente.
          </p>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-yellow-400" />
          Review Geral de AC Origins: O Melhor Ponto de Entrada da Franquia?
        </h2>

        <p>
          <strong>Sim</strong> — <strong>Origins</strong> funciona perfeitamente como{" "}
          <strong>primeiro AC</strong> para novos jogadores. A história é autocontida, o sistema de
          combate foi completamente reformulado, e o Egito é um dos cenários mais impressionantes
          de toda a série. Para quem já conhece a franquia, é o início de uma nova era que mudou
          tudo o que veio depois.
        </p>

        <EditorialTake category="geek" title="Análise do Marcos: Origins é onde a franquia reencontrou sua alma">
          <p>
            Quando joguei <strong>AC Origins</strong> pela primeira vez, senti que a Ubisoft havia
            reencontrado algo que estava perdido desde AC III: um protagonista que você{" "}
            <em>genuinamente</em> se importa. Bayek é um pai de luto, um marido que tenta manter um
            casamento sob o peso da tragédia, um protetor sem proteção. A cena de abertura com Khemu
            ainda me afeta depois de todas as vezes que joguei.
          </p>
          <p>
            O Discovery Tour é um presente inesperado. Usei com minha sobrinha de 12 anos para
            ensinar sobre Cleópatra e as Pirâmides de Gizé — ela depois foi pesquisar por conta própria.
            Isso é o que os melhores jogos históricos fazem: <strong>acendem a curiosidade</strong>. AC
            Origins é obrigatório para qualquer coleção de jogos sérios.
          </p>
        </EditorialTake>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-yellow-400" />
          Contexto Histórico: O Egito Ptolemaico (49–43 a.C.)
        </h2>

        <p>
          <strong>AC Origins</strong> se passa durante um dos períodos mais turbulentos da história
          egípcia: o <strong>fim da dinastia Ptolemaica</strong>. O jogo acontece entre{" "}
          <strong>49 a.C. e 43 a.C.</strong>, nos anos finais do Egito como reino independente,
          antes da conquista romana.
        </p>

        <p>
          A dinastia Ptolemaica era de origem macedônia — descendentes de Ptolomeu I, general de
          Alexandre o Grande que governou o Egito após a morte do conquistador em 323 a.C. Durante
          quase 300 anos, essa dinastia grega governou o Egito enquanto adotava a cultura e os
          deuses egípcios para manter a legitimidade perante o povo. <strong>Cleópatra VII</strong> era
          a última de sua linhagem.
        </p>

        <AdInArticle />

        <h3 className="text-xl font-bold mt-8 mb-4">👥 Figuras Históricas em AC Origins</h3>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-yellow-400">Cleópatra VII</h4>
            <p className="text-sm text-muted-foreground mb-0">
              A última faraó do Egito, retratada como aliada estratégica de Bayek. A série mostra
              sua inteligência política, fluência em nove idiomas e a habilidade de usar charme
              e astúcia para sobreviver num mundo dominado por homens.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-yellow-400">Júlio César</h4>
            <p className="text-sm text-muted-foreground mb-0">
              O ditador romano aparece em sua campanha no Egito. O jogo mostra sua relação com
              Cleópatra e os eventos que levaram ao seu assassinato nas Ides de Março de 44 a.C.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-yellow-400">Ptolomeu XIII</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Irmão e rival de Cleópatra pelo trono. Manipulado por seus conselheiros, representa
              a decadência da dinastia ptolemaica nos seus últimos dias de poder.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-yellow-400">Pompeu</h4>
            <p className="text-sm text-muted-foreground mb-0">
              General romano assassinado no Egito — evento histórico real dramatizado de forma
              impactante no início do jogo, com consequências políticas para toda a narrativa.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <MapPin className="h-7 w-7 text-yellow-400" />
          A Geografia do Egito Antigo em AC Origins
        </h2>

        <p>
          O mapa de <strong>Origins</strong> é uma recriação impressionante do Egito antigo, cobrindo
          uma área de aproximadamente <strong>80 km²</strong> com biomas radicalmente diferentes:
        </p>

        <ul>
          <li><strong>Alexandria:</strong> Capital cosmopolita, sede da famosa Biblioteca e do Farol — uma das Sete Maravilhas do Mundo Antigo. Ruas movimentadas com gregos, egípcios e romanos.</li>
          <li><strong>Mênfis:</strong> Antiga capital do Baixo Egito, com templos monumentais dedicados a Ptah e uma atmosfera mais tradicional egípcia.</li>
          <li><strong>Gizé:</strong> As Grandes Pirâmides e a Esfinge em seu estado "original", com revestimento de calcário ainda branco. Cavernas e câmaras secretas exploráveis.</li>
          <li><strong>Siwa:</strong> O oásis natal de Bayek, com o Oráculo de Amun. A área mais pacífica e pessoalmente significativa para o protagonista.</li>
          <li><strong>Tebas (DLC):</strong> A grande necrópole com o Vale dos Reis, onde faraós mortos-vivos assombram a região no DLC Curse of the Pharaohs.</li>
          <li><strong>Delta do Nilo:</strong> Pântanos e rios com hipopótamos, crocodilos e uma fauna rica que interage com o mundo de forma realista.</li>
        </ul>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-yellow-400" />
          Bayek de Siwa: O Protagonista Mais Humano da Franquia
        </h2>

        <p>
          Controlamos <strong>Bayek</strong>, um <strong>Medjay</strong> — guardião tradicional do
          faraó e protetor do povo egípcio. Após a morte trágica de seu filho Khemu, Bayek embarca
          em uma jornada de vingança que o levará a fundar a <strong>Irmandade dos Ocultos</strong>,
          precursora dos Assassinos.
        </p>

        <p>
          Acompanhado por sua esposa <strong>Aya</strong> (que depois adota o nome Amunet), Bayek é
          um dos personagens mais humanos e bem construídos da série. Ele chora seus mortos, ri com
          seus amigos, protege estranhos por princípio — não apenas por obrigação. A dor da perda de
          seu filho permeia cada escolha que ele faz ao longo de toda a jornada.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">🗡️ Bayek como Guerreiro</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Como Medjay, Bayek é treinado em combate com múltiplas armas — espadas, lanças, escudos,
              arcos e até machados. Seu treinamento reflete as tradições militares egípcias e núbias.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">❤️ Bayek como Pai e Marido</h4>
            <p className="text-sm text-muted-foreground mb-0">
              A relação de Bayek com Aya é complexa e realista. A morte de Khemu afetou o casamento de
              formas diferentes, e acompanhar como cada um lida com o luto é um dos aspectos mais maduros
              da narrativa de <strong>AC Origins</strong>.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-yellow-400" />
          O Sistema de Combate Revolucionário de AC Origins
        </h2>

        <p>
          <strong>Origins</strong> abandonou completamente o combate rítmico dos jogos anteriores e
          introduziu um sistema baseado em física que se tornaria padrão para a franquia:
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">⚔️ Combate Baseado em Hitbox</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Cada golpe precisa acertar fisicamente o inimigo. Esquivas, parries e posicionamento
              são essenciais. Inimigos com nível muito acima do seu causam dano massivo — nivelamento
              importa pela primeira vez na franquia.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">🛡️ Sistema de Equipamentos</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Armas e armaduras com níveis, raridades (comum a lendário) e atributos únicos. Cada
              tipo de arma tem moveset distinto — espadas rápidas vs. machadões lentos e devastadores.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">🦅 Senu, a Águia</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Companheira de Bayek que serve como "drone orgânico" para marcar inimigos, objetivos e
              colecionáveis antes de entrar em uma área. A mecânica que inspirou Enkidu em Mirage.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">🏹 Variedade de Builds</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Especialize-se em combate corpo a corpo, arqueiro (incluindo arco de fogo) ou furtividade
              através da árvore de habilidades dividida em 3 ramos: Guerreiro, Caçador e Seer.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Pyramid className="h-7 w-7 text-yellow-400" />
          Discovery Tour: O Museu Interativo do Egito Antigo
        </h2>

        <p>
          O <strong>Discovery Tour</strong> é um dos recursos mais únicos e valiosos da série. É um
          modo separado onde você explora o Egito sem combate ou objetivos — apenas aprendizado.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Pyramid className="h-8 w-8 text-yellow-400 mb-3" />
            <h4 className="font-bold mb-2">Modo Educativo Premiado</h4>
            <p className="text-sm text-muted-foreground mb-0">
              O <strong>Discovery Tour</strong> é usado por escolas para ensinar sobre as pirâmides de
              Gizé, a Biblioteca de Alexandria e a vida cotidiana no Egito antigo. A tecnologia foi
              reconhecida por historiadores e museus ao redor do mundo.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Bird className="h-8 w-8 text-yellow-400 mb-3" />
            <h4 className="font-bold mb-2">Ecossistema Vivo</h4>
            <p className="text-sm text-muted-foreground mb-0">
              IA avançada: hipopótamos atacam barcos, crocodilos caçam nas margens do Nilo, habitantes
              têm rotinas completas de sono, trabalho e lazer. Um dos ecossistemas mais realistas
              já criados em um videogame.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-yellow-400" />
          Facções de AC Origins: A Ordem dos Anciões
        </h2>

        <p>
          A <strong>Ordem dos Anciões</strong> (predecessores dos Templários) é o grupo que Bayek e
          Aya caçam ao longo de toda a campanha. Cada membro usa uma máscara animal e um codinome,
          e está infiltrado em diferentes setores da sociedade egípcia e romana:
        </p>

        <ul className="space-y-2 my-6">
          <li><strong>The Snake (A Serpente):</strong> Infiltrado nos círculos políticos de Alexandria, manipulando a luta pelo trono entre Cleópatra e Ptolomeu.</li>
          <li><strong>The Scarab (O Escaravelho):</strong> Controlador dos impostos e das caravanas no deserto — um dos alvos mais memoráveis do jogo.</li>
          <li><strong>The Crocodile (O Crocodilo):</strong> Domina os pântanos e as rotas fluviais do Nilo, usando a corrupção para manter poder sobre pescadores e comerciantes.</li>
          <li><strong>The Hyena (A Hiena):</strong> Mercenária brutal que comanda gangues de bandidos e gladiadores nas arenas romanas.</li>
          <li><strong>The Lizard (O Lagarto):</strong> Membro mais alto da hierarquia no Egito, protegido pelos soldados romanos de César.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-6">📦 DLCs de AC Origins: Conteúdo Adicional</h2>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="text-left py-3 px-4 font-bold">DLC</th>
                <th className="text-left py-3 px-4 font-bold">Localização</th>
                <th className="text-left py-3 px-4 font-bold">Tempo</th>
                <th className="text-left py-3 px-4 font-bold">Destaque</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">The Hidden Ones</td>
                <td className="py-3 px-4 text-muted-foreground">Sinai</td>
                <td className="py-3 px-4 text-muted-foreground">8–10 horas</td>
                <td className="py-3 px-4 text-muted-foreground">Expansão da Irmandade dos Ocultos</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Curse of the Pharaohs</td>
                <td className="py-3 px-4 text-muted-foreground">Tebas / Vale dos Reis</td>
                <td className="py-3 px-4 text-muted-foreground">15–20 horas</td>
                <td className="py-3 px-4 text-muted-foreground">Mitologia egípcia, faraós mortos-vivos</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 <strong>Curse of the Pharaohs é o DLC mais criativo da trilogia</strong>: você entra nos
            reinos da morte de diferentes faraós (Nefertiti, Ramsés, Akhenaton e outros), cada um com um
            visual e desafios completamente únicos. É quase um jogo separado. Veja como a mecânica de
            AC Origins evoluiu em nossa análise de{" "}
            <Link to="/post/ac-odyssey-odisseia-grecia" className="text-primary hover:underline">
              Assassin's Creed Odyssey
            </Link>.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Clock className="h-7 w-7 text-yellow-400" />
          Tempo de Jogo de AC Origins: Quanto Tempo para Zerar?
        </h2>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border bg-secondary/50">
                <th className="py-3 px-4 text-left font-bold">Modalidade</th>
                <th className="py-3 px-4 text-left font-bold">Tempo Estimado</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">🎯 História Principal</td>
                <td className="py-3 px-4 text-muted-foreground">30–35 horas</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">📋 História + Missões Secundárias</td>
                <td className="py-3 px-4 text-muted-foreground">50–60 horas</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">🏆 100% Completude</td>
                <td className="py-3 px-4 text-muted-foreground">70–80 horas</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">+ DLCs Hidden Ones + Curse of the Pharaohs</td>
                <td className="py-3 px-4 text-muted-foreground">+25–30 horas adicionais</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-yellow-400" />
          Requisitos de PC para AC Origins em 2026
        </h2>

        <h3 className="text-xl font-bold mt-6 mb-4">🔻 Configuração Mínima (1080p – 30 FPS)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Sistema Operacional</td>
                <td className="py-3 px-4 text-muted-foreground">Windows 10 (64 bits)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">AMD FX 6350 ou Intel Core i5 2400S</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Memória RAM</td>
                <td className="py-3 px-4 text-muted-foreground">6 GB</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">GTX 660 (2 GB) ou Radeon R9 270</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Armazenamento</td>
                <td className="py-3 px-4 text-muted-foreground">75 GB (SSD recomendado)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-4">🔺 Configuração Recomendada (1080p – 60 FPS)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">AMD FX-8350 ou Intel Core i7-3770</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Memória RAM</td>
                <td className="py-3 px-4 text-muted-foreground">8 GB</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">GTX 760 (4 GB) ou Radeon R9 280X</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground">
          👉 <strong>Requisitos moderados</strong> para um jogo visualmente impressionante — qualquer
          PC gamer intermediário roda <strong>AC Origins</strong> em 1080p/60 FPS com folga.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Laptop className="h-7 w-7 text-yellow-400" />
          Notebook Gamer Roda AC Origins?
        </h2>

        <p><strong>Sim</strong>, desde que seja um <strong>notebook gamer</strong> com:</p>
        <ul>
          <li>GTX 1650 / RTX 3050 ou superior</li>
          <li>Intel Core i5 ou Ryzen 5</li>
          <li>8 GB de RAM (16 GB ideal)</li>
          <li>SSD para tempos de carregamento aceitáveis no mapa gigante</li>
        </ul>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">💻 PC Gamer</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>✔ Melhores gráficos (4K com HDR)</li>
              <li>✔ Promoções frequentes na Steam e Epic</li>
              <li>✔ Mods disponíveis (texturas 4K, realismo)</li>
              <li>✔ FPS desbloqueado</li>
            </ul>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">🎮 Console</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>✔ PS4, PS5, Xbox One, Xbox Series</li>
              <li>✔ 60 FPS no PS5/Series X</li>
              <li>✔ Otimização garantida</li>
              <li>✔ Sem preocupação com hardware</li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-yellow-400" />
          Vale a Pena Comprar Assassin's Creed Origins em 2026?
        </h2>

        <p><strong>Vale muito a pena</strong> se você:</p>
        <ul>
          <li>Quer começar a franquia pelo seu melhor ponto de entrada moderno</li>
          <li>Se interessa pelo Egito Antigo, Cleópatra e Roma</li>
          <li>Valoriza protagonistas bem desenvolvidos emocionalmente</li>
          <li>Quer usar o Discovery Tour — seja para si mesmo ou com filhos/alunos</li>
          <li>Busca um jogo com excelente relação qualidade/preço (+100h de conteúdo total com DLCs)</li>
        </ul>

        <div className="my-8 p-6 bg-gradient-to-br from-yellow-500/20 to-background rounded-xl border border-yellow-500/30">
          <h3 className="text-xl font-bold mb-4">🎮 Onde Jogar AC Origins?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>PC:</strong> Steam, Epic Games Store, Ubisoft Connect</li>
            <li>✓ <strong>PlayStation 4 e PlayStation 5</strong></li>
            <li>✓ <strong>Xbox One e Xbox Series X|S</strong></li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Preço médio em 2026: R$ 80 a R$ 130 (frequentemente em promoção)
          </p>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">O que você achou da jornada de Bayek no Egito Antigo?</h3>
          <p className="text-muted-foreground">Conta pra gente nos comentários! 👇</p>
        </div>
      </div>

      <ArticleSources
        sources={[
          {
            title: "Assassin's Creed Origins — página oficial Ubisoft Store",
            url: "https://store.ubisoft.com/br/assassin-s-creed-origins/5879e2d5ef3aa5346c4f5e60.html",
            publisher: "Ubisoft",
            accessedAt: "Janeiro 2026",
          },
          {
            title: "Assassin's Creed Origins — Steam Store (requisitos e avaliações)",
            url: "https://store.steampowered.com/app/582160/Assassins_Creed_Origins/",
            publisher: "Valve / Ubisoft",
            accessedAt: "Janeiro 2026",
          },
          {
            title: "Assassin's Creed Origins — How Long to Beat",
            url: "https://howlongtobeat.com/game/assassins-creed-origins",
            publisher: "HowLongToBeat",
            accessedAt: "Janeiro 2026",
          },
          {
            title: "Ptolemaic Kingdom — Britannica",
            url: "https://www.britannica.com/place/Ptolemaic-Kingdom",
            publisher: "Encyclopædia Britannica",
            accessedAt: "Janeiro 2026",
          },
          {
            title: "Cleopatra VII — Britannica",
            url: "https://www.britannica.com/biography/Cleopatra-queen-of-Egypt",
            publisher: "Encyclopædia Britannica",
            accessedAt: "Janeiro 2026",
          },
          {
            title: "Assassin's Creed Origins — PC Gaming Wiki (requisitos e otimizações)",
            url: "https://www.pcgamingwiki.com/wiki/Assassin%27s_Creed:_Origins",
            publisher: "PCGamingWiki",
            accessedAt: "Janeiro 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="ac-origins-renascimento-franquia-egito" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId="ac-origins-renascimento-franquia-egito" postTitle="Assassin's Creed Origins em 2026: Review Completa — Renascimento da Franquia no Egito Antigo" />
    </article>
  );
};

export default ACOrigins;

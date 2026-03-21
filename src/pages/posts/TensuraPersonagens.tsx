import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Zap, Shield, Crown, Globe } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/tensura-personagens.webp";

const TensuraPersonagens = () => {
  useEffect(() => {
    trackArticleRead("tensura-personagens-rimuru-demon-lords", "TenSura: Personagens Principais, Demon Lords e o Sistema de Poderes", "otaku");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" portalPath="/otaku/tensura" portalLabel="Painel TenSura" />
      <header className="mb-8">
        <CategoryBadge category="otaku" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          TenSura: Personagens Principais, Demon Lords e o Sistema de Poderes
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />21 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Personagens de TenSura" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Uma das grandes forças de <strong>Tensei Shitara Slime Datta Ken</strong> é seu elenco extenso e bem desenvolvido. De um ex-salaryman reencarnado como gosma azul a dragões milenários e demônios primordiais, cada personagem tem história própria e impacto real na política de Tempest.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Crown className="h-7 w-7 text-otaku" />
          Rimuru Tempest — O Protagonista
        </h2>
        <p>
          <strong>Satoru Mikami</strong>, salaryman de 37 anos de Tóquio, é esfaqueado por um ladrão e renasce em um mundo de fantasia como uma gosma azul. O dragão aprisionado <strong>Veldora Tempest</strong> lhe dá o nome de <strong>Rimuru</strong>, que por sua vez dá a Veldora o sobrenome "Tempest". Sua habilidade inata <em>Predador</em> (evoluída depois para <em>Glutony</em>) permite absorver e replicar qualquer ser ou habilidade. Diferente de outros protagonistas de isekai, Rimuru não conquista pelo medo, mas pela confiança — construindo alianças por meio de diplomacia, negociação e demonstrações honestas de força. Ao evoluir para <strong>Demon Lord</strong> (T2), ganha forma humana permanente com cabelos prata-azulados, olhos dourados e androginia marcante. Sua voz japonesa é da atriz <strong>Miho Okasaki</strong> (que também canta as endings).
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Shield className="h-7 w-7 text-otaku" />
          Os Principais Habitantes de Tempest
        </h2>

        <div className="not-prose grid gap-4 my-4">
          {[
            {
              name:"Benimaru", role:"General de Tempest",
              color:"border-red-500/30 bg-red-500/5",
              desc:"Filho do chefe dos Ogres, evoluiu para Kijin após ser nomeado por Rimuru. É o guerreiro mais poderoso de Tempest depois do próprio Rimuru. Especializado em técnicas de fogo e espada, é calmo e estratégico — o contrapeso ideal para os aliados mais impulsivos.",
            },
            {
              name:"Shion", role:"Secretária Pessoal / Guarda-costas",
              color:"border-purple-500/30 bg-purple-500/5",
              desc:"Ogre branca evoluída para Kijin. Sua lealdade a Rimuru é absoluta — e sua culinária é lendariamente catastrófica (literalmente venenosa para qualquer um que não seja ela). Sua morte e ressurreição no T2 é um dos momentos mais marcantes da série. Possui habilidade de copiar qualquer técnica que observa.",
            },
            {
              name:"Shuna", role:"Princesa / Sacerdotisa",
              color:"border-amber-500/30 bg-amber-500/5",
              desc:"Irmã de Benimaru, especialista em análise e cópia de magias. Responsável pela gestão têxtil e administrativa de Tempest. Decifrou e copiou runas mágicas de civilizações antigas. Perspicaz e discreta — ela frequentemente sabe mais do que deixa transparecer.",
            },
            {
              name:"Ranga", role:"Dire Wolf / Companheiro fiel",
              color:"border-slate-500/30 bg-slate-500/5",
              desc:"Filho do chefe dos Dire Wolves, se torna o fiel companheiro de Rimuru desde os primeiros episódios. Pode se transformar em uma montaria colossal capaz de voar e gerar tempestades. É um dos primeiros seres a receber nome de Rimuru.",
            },
            {
              name:"Diablo", role:"Primordial Demon / Secretário",
              color:"border-gray-700/30 bg-gray-700/5",
              desc:"Um dos sete Primordial Demons, convocado por Rimuru após sua evolução para Demon Lord. Extraordinariamente leal e eficiente — e perturbadoramente obcecado com Rimuru. Atua como enviado diplomático, famoso por resolver missões de formas extremas. Um dos personagens mais poderosos da série.",
            },
            {
              name:"Veldora Tempest", role:"True Dragon / Irmão adotivo",
              color:"border-cyan-500/30 bg-cyan-500/5",
              desc:"True Dragon aprisionado por 300 anos pela heroína Chloe. Absorvido por Rimuru durante o T1, é libertado no T2. Adota forma humana em Tempest e se torna cidadão comum — com fraqueza particular por mangás. Apesar do comportamento leviano, é um dos seres mais poderosos do mundo.",
            },
            {
              name:"Milim Nava", role:"Dragon Nova / Demon Lord mais poderosa",
              color:"border-pink-500/30 bg-pink-500/5",
              desc:"Uma das Demon Lords mais antigas e poderosas. Filha de Veldanava (o True Dragon primordial, pai dos dragões) — o que a torna uma Dragon Nova. Aparentemente frívola e infantil, esconde poder devastador. Autodenomina Rimuru de 'Best Friend'. Na T2, é brevemente manipulada por Clayman mas revela sua forma real.",
            },
            {
              name:"Gobta", role:"Guerreiro / Alívio cômico",
              color:"border-green-500/30 bg-green-500/5",
              desc:"Um dos primeiros Goblin a receber nome de Rimuru, Gobta evoluiu para Hobgoblin. Aparentemente incompetente, surpreende ao aprender técnicas avançadas de cavalaria com Ranga. Lider da Cavalaria Lobo de Tempest. Amado pelos fãs por sua bravura involuntária.",
            },
          ].map((c) => (
            <div key={c.name} className={`rounded-xl border p-4 ${c.color}`}>
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <h3 className="font-display font-bold text-base">{c.name}</h3>
                <span className="text-xs bg-otaku/20 text-otaku px-2 py-0.5 rounded-full font-medium">{c.role}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Zap className="h-7 w-7 text-otaku" />
          O Sistema de Poderes: Nomes, Habilidades e Evolução
        </h2>
        <p>
          O worldbuilding de TenSura é estruturado em torno de três conceitos interligados: <strong>Habilidades Únicas</strong> (Unique Skills), <strong>Evolução por nomeação</strong> e o sistema de <strong>Magicule</strong> (energia mágica). Quando um ser poderoso atribui seu próprio nome a um subordinado, o nomeado absorve parte do poder do nomeante e evolui. É por isso que Goblins viram Hobgoblins, Ogres viram Kijin, e assim por diante. O processo custa energia vital do nomeante — Rimuru chega a dormir três dias inteiros após nomear mais de 100 goblins e lobos de uma vez.
        </p>
        <p>
          As <strong>Habilidades Únicas</strong> (Unique Skills) são habilidades rarísimas concedidas no nascimento ou adquiridas em condições especiais. Rimuru começa com <em>Predator</em> (depois evoluída para <em>Gluttony</em>) e <em>Great Sage</em> (depois evoluída para <em>Raphael, Lord of Wisdom</em>). Ao evoluir para Demon Lord, ele também adquire <em>Manas</em> e diversas outras habilidades, transformando-o em um dos seres mais poderosos do mundo.
        </p>
        <div className="not-prose bg-card border border-border rounded-xl p-4 my-4">
          <p className="font-bold mb-3 text-sm">🔮 Evolução das Habilidades de Rimuru</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4">Habilidade Original</th>
                  <th className="text-left py-2 pr-4">→ Forma Evoluída</th>
                  <th className="text-left py-2 text-muted-foreground">Quando</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Predator (Predador)","Gluttony (Glutoneria)","T1 — T2"],
                  ["Great Sage (Grande Sábio)","Raphael, Lord of Wisdom","T2 — Evolução Demon Lord"],
                  ["Merciless (Sem Piedade)","Mercy of Demon Lord","T2 — após se tornar Demon Lord"],
                  ["Multilayer Barrier","Ultimate Skill: múltiplas evoluções","T2+"],
                ].map(([o,e,w]) => (
                  <tr key={o} className="border-b border-border/50">
                    <td className="py-2 pr-4 text-otaku font-medium">{o}</td>
                    <td className="py-2 pr-4">{e}</td>
                    <td className="py-2 text-muted-foreground text-xs">{w}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Globe className="h-7 w-7 text-otaku" />
          Os Dez Grandes Demon Lords (Walpurgis Council)
        </h2>
        <p>
          O mundo de TenSura é governado informalmente pelo <strong>Conselho dos Grandes Demon Lords</strong>, que se reúne na <em>Walpurgis</em> — uma assembleia convocada quando necessário. Rimuru ingressa no conselho após a T2. Os membros confirmados incluem:
        </p>
        <div className="not-prose grid sm:grid-cols-2 gap-3 my-4">
          {[
            ["Rimuru Tempest","Mais novo membro — Rei de Tempest, ex-humano"],
            ["Milim Nava","Dragon Nova, filha de Veldanava — a mais poderosa"],
            ["Guy Crimson","O mais antigo Demon Lord, domina gelo e chamas absolutas"],
            ["Ramiris","Rainha das Fadas — a menor e mais antiga Demon Lord"],
            ["Dagruel","Gigante colossal, rege os grandes desertos"],
            ["Dino","Fallen Angel — notoriamente preguiçoso mas extremamente poderoso"],
            ["Luminous Valentine","Vampire Progenitor — controla o Continente Ocidental"],
            ["Kagali (Kazaream)","Demon Lord que manipulou Clayman nos bastidores da T2"],
          ].map(([n,d]) => (
            <div key={n} className="bg-card border border-border rounded-lg p-3 text-sm">
              <p className="font-bold text-foreground">{n}</p>
              <p className="text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Shield className="h-7 w-7 text-otaku" />
          Os True Dragons — Os Seres Mais Poderosos do Mundo
        </h2>
        <p>
          Acima de qualquer Demon Lord na hierarquia de poder estão os <strong>True Dragons</strong> (Shin Ryu) — seres primordiais que existem como forças da natureza mais do que criaturas. Os True Dragons confirmados na série são:
        </p>
        <div className="not-prose grid sm:grid-cols-2 gap-3 my-4">
          {[
            ["Veldanava","Dragão primordial da criação — pai de Milim, desaparecido"],
            ["Veldora Tempest","Storm Dragon — aprisionado por 300 anos, libertado no T2"],
            ["Velgrynd","Scarlet Dragon — irmã de Veldora, aliada ao Imperador de Farmas"],
            ["Velzard","White Dragon — irmã de Veldora, parceira de Guy Crimson"],
          ].map(([n,d]) => (
            <div key={n} className="bg-card border border-border rounded-lg p-3 text-sm">
              <p className="font-bold text-foreground">{n}</p>
              <p className="text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <p>
          A existência dos True Dragons é central para a lore de TenSura: eles são a origem da magia no mundo, e qualquer ser que absorva ou mate um True Dragon ganha poder desproporcional. Rimuru, ao absorver Veldora em seu interior, carregou por toda a T1 e T2 o poder latente de um True Dragon dentro de si.
        </p>
      </div>

      <RelatedPosts currentSlug="tensura-personagens-rimuru-demon-lords" />
      <CommentSection postSlug="tensura-personagens-rimuru-demon-lords" />
    </article>
  );
};

export default TensuraPersonagens;

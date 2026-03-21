import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Zap, Shield, Crown } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/tensura-personagens.webp";

const TensuraPersonagens = () => {
  useEffect(() => {
    trackArticleRead("tensura-personagens-rimuru-demon-lords", "TenSura: Rimuru Tempest e os Demon Lords — Personagens Principais", "otaku");
  }, []);

  const chars = [
    {
      name: "Rimuru Tempest",
      role: "Protagonista / Demon Lord",
      desc: "Antigo salarymanSatoru Mikami, reencarnado como uma gosma azul. Sua habilidade única 'Predator' (depois 'Gluttony') permite absorver e imitar qualquer ser. Após a batalha de Walpurgis, evolui para Demon Lord e ganha forma humana permanente com cabelos prateados. Sua grande força é criar alianças — ele não conquista pelo medo, mas pela confiança.",
      color: "border-blue-500/30 bg-blue-500/5",
    },
    {
      name: "Milim Nava",
      role: "Demon Lord / Dragon Nova",
      desc: "A Demon Lord mais poderosa e uma das mais antigas do mundo. Aparentemente frívola e infantil, esconde um poder devastador como Dragon Nova — herdeira do legado do True Dragon Veldanava, seu pai. Torna-se amiga próxima de Rimuru, chamando-o de 'Best Friend'. Na T2, é brevemente manipulada por Clayman.",
      color: "border-pink-500/30 bg-pink-500/5",
    },
    {
      name: "Shion",
      role: "Secretária / Ogre Kijin",
      desc: "Originalmente um Ogre branco, evolui para Kijin após receber nome de Rimuru. Atua como secretária pessoal e guarda-costas. Conhecida pela sua habilidade culinária catastrófica (literalmente venenosa) e pela lealdade absoluta. Sua morte na T2 — e subsequente ressurreição — é um dos marcos emocionais da série.",
      color: "border-purple-500/30 bg-purple-500/5",
    },
    {
      name: "Benimaru",
      role: "General / Ogre Kijin",
      desc: "Líder dos Kijin e o guerreiro mais forte de Tempest após Rimuru. Filho do líder Ogre, evolui após receber nome. Especializado em técnicas de fogo e espada. Calmo, leal e estratégico — o contrapeso perfeito para a impulsividade de alguns aliados de Rimuru.",
      color: "border-red-500/30 bg-red-500/5",
    },
    {
      name: "Shuna",
      role: "Princesa / Ogre Kijin",
      desc: "Irmã de Benimaru, especialista em magia e análise de habilidades. Usa suas capacidades para decifrar e copiar magias desconhecidas. Responsável pela gestão administrativa de Tempest e pelo desenvolvimento de seus tecidos e produtos. Carinhosa e perspicaz.",
      color: "border-amber-500/30 bg-amber-500/5",
    },
    {
      name: "Ranga",
      role: "Companheiro / Dire Wolf",
      desc: "Lobo tempestade que se torna o fiel companheiro de Rimuru desde o começo. Filho do chefe dos Dire Wolves, ele pode se transformar em uma montaria imensa. Uma das primeiras criaturas a receber nome de Rimuru. Pode voar e gerar tempestades.",
      color: "border-slate-500/30 bg-slate-500/5",
    },
    {
      name: "Veldora Tempest",
      role: "True Dragon / Irmão adotivo",
      desc: "O True Dragon aprisionado por 300 anos pelo herói Chloe antes de conhecer Rimuru. É absorvido por Rimuru, que promete libertá-lo enquanto analisa o selo. Após ser libertado na T2, se torna um habitante de Tempest, adotando uma forma humana e sendo reconhecidamente viciado em mangás.",
      color: "border-cyan-500/30 bg-cyan-500/5",
    },
    {
      name: "Diablo",
      role: "Primordial Demon / Secretário",
      desc: "Um dos Primordial Demons, convocado por Rimuru. Extremamente leal e eficiente — e perturbadoramente obcecado com Rimuru. Capaz de manipular e destruir com facilidade. Atua como enviado diplomático de Tempest, famoso por resolver missões de formas radicais.",
      color: "border-gray-800/30 bg-gray-800/5",
    },
  ];

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" portalPath="/otaku/tensura" portalLabel="Painel TenSura" />

      <header className="mb-8">
        <CategoryBadge category="otaku" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          TenSura: Rimuru Tempest e os Personagens Principais do Universo
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />21 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />10 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Personagens de TenSura" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Uma das grandes forças de <strong>Tensei Shitara Slime Datta Ken</strong> é o seu elenco diverso e bem desenvolvido. De goblins evoluídos a Demon Lords milenários, cada personagem tem uma história própria que contribui para o mundo de Tempest.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Crown className="h-7 w-7 text-otaku" />
          Os Habitantes de Tempest
        </h2>

        <div className="grid gap-4 not-prose">
          {chars.map((char) => (
            <div key={char.name} className={`rounded-xl border p-5 ${char.color}`}>
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <h3 className="font-display font-bold text-lg">{char.name}</h3>
                <span className="text-xs bg-otaku/20 text-otaku px-2 py-1 rounded-full font-medium">{char.role}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{char.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-otaku" />
          O Sistema de Poderes: Nomes e Evolução
        </h2>
        <p>
          Um dos pilares do worldbuilding de TenSura é o sistema de dar nomes. Quando um ser poderoso — como Rimuru — atribui seu próprio nome a um subordinado, este absorve parte do poder do nomeante e evolui. É por isso que os goblins se transformam em Hobgoblins, os Ogres em Kijin, e assim por diante. O processo custa energia vital do nomeante (Rimuru dorme por dias após nomear muitos seres de uma vez).
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-otaku" />
          Os Dez Grandes Demon Lords
        </h2>
        <p>
          O mundo de TenSura é governado informalmente pelos <strong>Dez Grandes Demon Lords</strong> (Jura Tempest Federation), um conselho de seres extraordinariamente poderosos. Entre eles estão:
        </p>
        <div className="grid sm:grid-cols-2 gap-3 not-prose my-4">
          {[
            ["Rimuru Tempest", "Rei de Tempest (Demon Lord mais novo)"],
            ["Milim Nava", "Dragon Nova, uma das mais poderosas"],
            ["Ramiris", "Rainha das Fadas, a menor Demon Lord"],
            ["Guy Crimson", "O mais antigo e poderoso, domina o Blizzard"],
            ["Dagruel", "Gigante colossal, governa o deserto"],
            ["Dino", "Fallen Angel, notoriamente preguiçoso"],
          ].map(([name, desc]) => (
            <div key={name} className="bg-card border border-border rounded-lg p-3 text-sm">
              <p className="font-bold text-foreground">{name}</p>
              <p className="text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <p>
          Rimuru se junta ao conselho após os eventos de Walpurgis na <strong>Temporada 2</strong>, quando derrota Clayman e é reconhecido pelos demais como um Demon Lord legítimo. Sua filosofia de coexistência o torna uma voz única entre governantes que habitualmente resolvem conflitos com extermínio.
        </p>
      </div>

      <RelatedPosts currentSlug="tensura-personagens-rimuru-demon-lords" />
      <CommentSection postSlug="tensura-personagens-rimuru-demon-lords" />
    </article>
  );
};

export default TensuraPersonagens;

import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Shield, Skull } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/overlord-personagens.webp";

const OverlordPersonagens = () => {
  useEffect(() => {
    trackArticleRead("overlord-ainz-guardians-personagens", "Overlord: Ainz Ooal Gown e os Floor Guardians de Nazarick", "otaku");
  }, []);

  const guardians = [
    {
      name: "Ainz Ooal Gown (Momonga)",
      floor: "Guildmaster / Sorcerer King",
      desc: "O protagonista. Suzuki Satoru, um trabalhador solitário de TI de 30 e poucos anos, era o único membro restante ativo da guilda Ainz Ooal Gown antes de ser transportado. Como esqueleto feiticeiro, suas emoções são suprimidas automaticamente pelo sistema sempre que chegam a um extremo — tornando-o incapaz de entrar em pânico ou demonstrar fraqueza mesmo que queira. Adota uma persona de todo-poderoso soberano onisciente mesmo quando está improvisando.",
      color: "border-gray-500/30 bg-gray-500/5",
    },
    {
      name: "Albedo",
      floor: "Overseer / 7º Andar",
      desc: "A mais bela e devota dos NPCs. Albedo é a supervisora dos Floor Guardians — tecnicamente a mais poderosa dentre eles. Sua lealdade obsessiva por Ainz foi 'editada' acidentalmente pelo próprio Momonga antes do transporte, que por brincadeira modificou sua descrição para 'apaixonada por Momonga'. Ela não sabe disso. Usa uma armadura negra e possui asas demoníacas.",
      color: "border-yellow-500/30 bg-yellow-500/5",
    },
    {
      name: "Demiurge",
      floor: "7º Andar — Estrategista",
      desc: "O mais inteligente dos Floor Guardians e arquiteto das estratégias de longo prazo de Nazarick. Tem a aparência de um demônio elegante com cauda espinhosa. Demiurge frequentemente interpreta como planos geniais o que Ainz diz aleatoriamente — e suas interpretações acabam sendo corretas. Grande parte do poder geopolítico do Sorcerer Kingdom vem de seus esquemas.",
      color: "border-red-500/30 bg-red-500/5",
    },
    {
      name: "Shalltear Bloodfallen",
      floor: "1º–3º Andar — True Vampire",
      desc: "Um dos personagens mais poderosos de Nazarick. Shalltear é uma True Vampire com aparência de jovem delicada e longos cabelos prateados — mas que escondem uma capacidade de combate aterrorizante. É famosa por um incidente central da T1 em que é controlada por um artefato inimigo, forçando Ainz a lutar contra ela pessoalmente em um dos melhores combates da série.",
      color: "border-pink-500/30 bg-pink-500/5",
    },
    {
      name: "Cocytus",
      floor: "5º Andar — Guerreiro de Gelo",
      desc: "Um inseto humanoide colossal coberto de exoesqueleto cristalino. É o mais honrado dos Guardians em termos de ética guerreira — aquele que mais respeita um inimigo forte. Sua batalha contra os Lizardmen na T2, onde hesita em destruir adversários que demonstram coragem, é um dos momentos mais humanos da série. Governa os territórios Lizardmen após a conquista.",
      color: "border-blue-500/30 bg-blue-500/5",
    },
    {
      name: "Aura e Mare Bello Fiore",
      floor: "6º Andar — Elfos Sombrios",
      desc: "Irmãos gêmeos, crianças de aparência — mas elfos antiquíssimos criados para guardar a Grande Floresta de Nazarick. Aura é a dominadora de bestas, extrovertida e agressiva. Mare é o mago, introvertido e tímido. Curiosamente, Aura veste roupas masculinas e Mare veste femininas — uma escolha de design deliberada do jogador que os criou.",
      color: "border-green-500/30 bg-green-500/5",
    },
    {
      name: "Sebas Tian",
      floor: "Mordomo de Nazarick",
      desc: "Mordomo-chefe de Nazarick, criado à imagem de um drangonlord humano. Destaca-se por sua moralidade — é o único entre os Guardians que genuinamente demonstra empatia por humanos. Seu arco na T2, onde salva uma escrava humana chamada Tsuare em risco de suas ordens, cria uma das tensões mais interessantes da série sobre o que significa ser 'leal a Ainz'.",
      color: "border-amber-500/30 bg-amber-500/5",
    },
  ];

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" portalPath="/otaku/overlord" portalLabel="Painel Overlord" />

      <header className="mb-8">
        <CategoryBadge category="otaku" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Overlord: Ainz Ooal Gown e os Floor Guardians de Nazarick
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />21 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />11 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Ainz Ooal Gown e os Floor Guardians" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          A Grande Tumba de Nazarick é habitada por seres de poder absurdo, criados como NPCs pelo time de jogadores da guilda <strong>Ainz Ooal Gown</strong>. Com a transportação para o Novo Mundo, esses seres ganharam consciência e se tornaram os mais leais — e assustadores — aliados do Sorcerer King.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Skull className="h-7 w-7 text-otaku" />
          Ainz e os Guardiões dos Andares
        </h2>

        <div className="grid gap-4 not-prose">
          {guardians.map((g) => (
            <div key={g.name} className={`rounded-xl border p-5 ${g.color}`}>
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <h3 className="font-display font-bold text-lg">{g.name}</h3>
                <span className="text-xs bg-otaku/20 text-otaku px-2 py-1 rounded-full font-medium">{g.floor}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-otaku" />
          A Dinâmica Central: O Equívoco Perpétuo
        </h2>
        <p>
          Uma das fontes de humor e tensão de Overlord é o <strong>equívoco perpétuo</strong>: os Floor Guardians acreditam que Ainz é um gênio onisciente com planos elaboradíssimos. Na realidade, Ainz frequentemente improvisa, e suas ações aleatórias são interpretadas pelos Guardians como movimentos estratégicos profundos.
        </p>
        <p>
          Demiurge, em particular, elabora teorias complexas sobre as intenções de Ainz que acabam sendo mais sofisticadas do que o que Ainz realmente pensou. Quando Ainz percebe que Demiurge entendeu algo que ele não havia planejado, geralmente finge que era isso mesmo que queria dizer. Esse ciclo é ao mesmo tempo cômico e inquietante.
        </p>

        <div className="bg-otaku/10 border border-otaku/30 rounded-xl p-4 my-6 not-prose">
          <p className="font-bold text-otaku mb-2">⚠️ A questão da humanidade de Ainz</p>
          <p className="text-sm text-muted-foreground">
            Overlord levanta uma questão filosófica perturbadora: o sistema do jogo suprime as emoções negativas extremas de Ainz automaticamente. Isso significa que, mesmo que ele queira sentir remorso ou recuar, o sistema o impede. Quanto do Suzuki Satoru original ainda existe? Ao longo das quatro temporadas, vemos essa linha ser cada vez mais tênue — especialmente após os massacres da T4.
          </p>
        </div>
      </div>

      <RelatedPosts currentSlug="overlord-ainz-guardians-personagens" />
      <CommentSection postSlug="overlord-ainz-guardians-personagens" />
    </article>
  );
};

export default OverlordPersonagens;

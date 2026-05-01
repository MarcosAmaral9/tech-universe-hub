import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Shield, Skull, Globe, Zap } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/overlord-personagens.webp";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
const OverlordPersonagens = () => {
  useEffect(() => {
    trackArticleRead("overlord-ainz-guardians-personagens", "Overlord: Ainz Ooal Gown, os Floor Guardians e os Personagens Mais Importantes", "otaku");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" portalPath="/otaku/overlord" portalLabel="Painel Overlord" />
      <header className="mb-8">
        <CategoryBadge category="otaku" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Overlord: Ainz Ooal Gown, os Floor Guardians de Nazarick e os Personagens do Novo Mundo
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />21 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Ainz Ooal Gown e os Floor Guardians de Nazarick" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          A Grande Tumba de Nazarick abriga seres de poder extraordinário — criados como NPCs por jogadores humanos e, após a transportação, dotados de consciência própria. Mas Overlord não é apenas sobre Nazarick: o Novo Mundo também tem seus próprios heróis, guerreiros e antagonistas que tornam a conquista de Ainz algo mais do que uma vitória fácil.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Skull className="h-7 w-7 text-otaku" />
          Ainz Ooal Gown — O Sorcerer King
        </h2>
        <p>
          <strong>Suzuki Satoru</strong> era um trabalhador de TI solitário de 30 e poucos anos — o único membro restante ativo da guilda YGGDRASIL <em>Ainz Ooal Gown</em> antes do transporte. Seu avatar é um feiticeiro esqueleto de nível máximo, especializado em magia de negação da morte e convocação. Como Ainz Ooal Gown no Novo Mundo, ele adota uma persona de soberano onisciente e inescrutável — mesmo quando está improvisando. O sistema do jogo suprime automaticamente emoções extremas, tornando-o incapaz de demonstrar hesitação ou medo mesmo que queira.
        </p>
        <p>
          Sua voz japonesa é do ator <strong>Satoshi Hino</strong>, e em inglês é dublado por <strong>Chris Guerrero</strong> (confirmados para a T5). Uma das fontes de humor e tensão da série é o <strong>equívoco perpétuo</strong>: os Floor Guardians interpretam as ações aleatórias de Ainz como movimentos estratégicos geniais. Demiurge, em particular, elabora teorias sofisticadas sobre intenções que Ainz nunca teve — e quando Ainz percebe isso, finge que era exatamente o que planejava.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Shield className="h-7 w-7 text-otaku" />
          Os Floor Guardians de Nazarick
        </h2>

        <div className="not-prose grid gap-4 my-4">
          {[
            {
              name:"Albedo",floor:"Overseer dos Floor Guardians",
              color:"border-yellow-500/30 bg-yellow-500/5",
              va:"Yumi Hara (JP) / Elizabeth Maxwell (EN)",
              desc:"A mais poderosa dos Guardians em termos de defesa e ataque físico. Supervisora de todos os Floor Guardians, responsável pela gestão operacional de Nazarick. Sua devoção obsessiva por Ainz foi 'editada' acidentalmente pelo próprio Momonga em um gesto de brincadeira antes do transporte — ele inseriu 'apaixonada por Momonga' em sua descrição. Ela não sabe disso. Usa armadura negra e possui asas demoníacas. Voz de Yumi Hara (JP), Elizabeth Maxwell (EN).",
            },
            {
              name:"Demiurge",floor:"7º Andar — Estrategista Supremo",
              color:"border-red-500/30 bg-red-500/5",
              va:"Masayuki Kato (JP)",
              desc:"O mais inteligente dos Floor Guardians, arquiteto das grandes estratégias de Nazarick. Tem aparência de demônio elegante com cauda espinhosa e óculos. Demiurge frequentemente interpreta como planos geniais o que Ainz diz casualmente — e suas interpretações são sempre mais sofisticadas do que o que Ainz pensou. Produz 'pergaminhos de couro humano' para o comércio externo — um detalhe que revelou ao público o quão sombria é a série.",
            },
            {
              name:"Shalltear Bloodfallen",floor:"1º, 2º e 3º Andares",
              color:"border-pink-500/30 bg-pink-500/5",
              va:"Sumire Uesaka (JP)",
              desc:"True Vampire com aparência de jovem delicada — cabelos prata, voz aguda — que esconde poder devastador. Uma das mais fortes de Nazarick. O arco central da T1 envolve ela sendo controlada por um artefato inimigo, forçando Ainz ao único duelo sério que ele enfrenta na série. Ela perde e é ressuscitada, carregando vergonha por ter necessitado ser derrotada pelo próprio senhor.",
            },
            {
              name:"Cocytus",floor:"5º Andar — Guerreiro de Gelo",
              color:"border-blue-500/30 bg-blue-500/5",
              va:"Kenta Miyake (JP)",
              desc:"Inseto humanoide colossal coberto de armadura cristalina de gelo. O mais honrado dos Guardians em termos de ética guerreira — o único que genuinamente respeita um inimigo que demonstra coragem. Seu arco na T2, hesitando em destruir os Lizardmen que lutam com bravura, é um dos momentos mais humanos da série. Governa os territórios Lizardmen após a conquista.",
            },
            {
              name:"Aura Bella Fiora",floor:"6º Andar — Domadora de Bestas",
              color:"border-green-500/30 bg-green-500/5",
              va:"Emiri Katō (JP)",
              desc:"Elfa sombria, aparência de criança de 12 anos, mas com milênios de existência. Domadora de bestas e arqueira — controla criaturas de toda Nazarick. Extrovertida, agressiva e determinada. Curiosamente, Aura usa roupas tipicamente masculinas enquanto seu irmão gêmeo Mare usa roupas femininas — escolha deliberada do jogador criador.",
            },
            {
              name:"Mare Bello Fiore",floor:"6º Andar — Mago da Terra",
              color:"border-teal-500/30 bg-teal-500/5",
              va:"Yumi Uchiyama (JP)",
              desc:"Irmão gêmeo de Aura, também com aparência de criança élfica. Especialista em magia territorial e geomancia — pode reformar terrenos, criar abismos e alterar paisagens em escala de batalha. Introvertido, tímido e quieto, contrasta fortemente com a irmã. Usa vestidos femininos por design do criador-jogador.",
            },
            {
              name:"Sebas Tian",floor:"Mordomo de Nazarick",
              color:"border-amber-500/30 bg-amber-500/5",
              va:"Shigeru Chiba (JP)",
              desc:"Mordomo-chefe, criado à imagem de um drangonlord humano — um ser mítico de poder imenso. O único Guardian que demonstra empatia genuína por humanos. Seu arco na T2, onde salva a escrava humana Tsuare dos Oito Dedos em oposição às suas ordens, cria a maior tensão moral entre os Guardians. Sua lealdade a Ainz e sua consciência moral humana entram em conflito real.",
            },
            {
              name:"Pandora's Actor",floor:"Treasury — Doppelganger",
              color:"border-orange-500/30 bg-orange-500/5",
              va:"Yuichi Nakamura (JP)",
      <AdInArticle />
              desc:"Guardião do Tesouro de Nazarick — um doppelganger que pode imitar qualquer Guardian com 80% de eficiência. Criado pelo próprio Momonga como um dos primeiros NPCs da guilda. Extremamente dramático e teatral, o que faz Ainz se envergonhar retroativamente de suas escolhas de jovem jogador. Apesar da aparência clichê, é um dos Guardians mais versáteis.",
            },
          ].map((c) => (
            <div key={c.name} className={`rounded-xl border p-4 ${c.color}`}>
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <h3 className="font-display font-bold text-base">{c.name}</h3>
                <span className="text-xs bg-otaku/20 text-otaku px-2 py-0.5 rounded-full font-medium">{c.floor}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-1">🎙️ VA: {c.va}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Globe className="h-7 w-7 text-otaku" />
          Personagens do Novo Mundo
        </h2>
        <p>
          Overlord também se destaca por criar personagens do Novo Mundo com profundidade e motivações próprias — mesmo que inevitavelmente percam para Nazarick.
        </p>
        <div className="not-prose grid sm:grid-cols-2 gap-3 my-4">
          {[
            {
              name:"Gazef Stronoff",
              desc:"O guerreiro mais forte do Reino de Re-Estize. Um homem de honra que reconhece a grandeza de Rimuru mesmo sendo inimigo. Seu destino na T3 é um dos momentos mais marcantes da série.",
            },
            {
              name:"Brain Unglaus",
              desc:"Ex-rival de Gazef e um dos melhores espadachins do mundo. Seu arco pessoal, após ser humilhado por Shalltear na T1, é sobre encontrar um propósito além do poder individual.",
            },
            {
              name:"Climb",
              desc:"Guarda-costas devotado da Princesa Renner. Medíocre em termos de poder, mas com força de vontade inabalável. Seu arco na T2 e T4 é sobre o que significa ser leal a uma pessoa que não é o que parece.",
            },
            {
              name:"Renner Theiere Chardelon Ryle Vaiself",
              desc:"Princesa do Reino de Re-Estize, aparentemente bondosa e dedicada ao povo. Revela na T4 ser uma das personagens mais perturbadoras da série — seu sorriso genuíno esconde cálculo frio.",
            },
            {
              name:"Jircniv Rune Farlord El-Nix",
              desc:"Imperador de Baharuth, apelidado de 'Imperador de Sangue' por ter ascendido ao trono eliminando rivais. Inteligente e frio — mas completamente impotente diante de Ainz. A T3 narra sua humilhação progressiva.",
            },
            {
              name:"Neia Baraja",
              desc:"Arqueira do Paladin Corps do Reino Sagrado. Protagonista do filme The Sacred Kingdom. Torna-se fanática religiosa por Ainz após testemunhar seu poder — uma reflexão irônica sobre como as religiões se formam.",
            },
          ].map((c) => (
            <div key={c.name} className="bg-card border border-border rounded-lg p-3 text-sm">
              <p className="font-bold text-foreground mb-1">{c.name}</p>
              <p className="text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Zap className="h-7 w-7 text-otaku" />
          O Sistema de Poder: Classes, Magias e Níveis
        </h2>
        <p>
          Overlord utiliza o sistema de <strong>YGGDRASIL</strong> como base do mundo: personagens têm <strong>níveis</strong> de 1 a 100, divididos em classes especializáveis. Ainz Ooal Gown está no <strong>nível máximo de 100</strong> com múltiplas classes de magia da morte, necromancia e feitiçaria. Para comparação, os guerreiros mais fortes do Novo Mundo ficam entre níveis 30 e 40. Ainz usa um bastão chamado <strong>Staff of Ainz Ooal Gown</strong> e pode lançar magias de nível 10 — o topo absoluto —como <em>Ia Shub-Niggurath</em> (invoca 70 Grim Reapers) e <em>Reality Slash</em> (corte que atravessa qualquer defesa).
        </p>
        <div className="not-prose bg-card border border-border rounded-xl p-4 my-4">
          <p className="font-bold mb-3 text-sm">🔢 Níveis de Poder em Overlord</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4">Faixa de Nível</th>
                  <th className="text-left py-2">Exemplos</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Nível 100","Ainz Ooal Gown, Floor Guardians (a maioria 80–100)"],
                  ["Nível 60–79","Gazef Stronoff (estimado ~30), Floor Guardians menores"],
                  ["Nível 30–40","Melhores guerreiros humanos do Novo Mundo"],
                  ["Nível 1–20","Soldados e aventureiros comuns"],
                  ["Sem nível","Civis, NPCs — fora do sistema"],
                ].map(([n,e]) => (
                  <tr key={n} className="border-b border-border/50">
                    <td className="py-2 pr-4 font-medium text-otaku">{n}</td>
                    <td className="py-2 text-muted-foreground">{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="not-prose bg-otaku/10 border border-otaku/30 rounded-xl p-4 my-6">
          <p className="font-bold text-otaku mb-2 text-sm">⚠️ A Questão Filosófica Central de Overlord</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Overlord levanta uma pergunta que a série nunca responde diretamente: o sistema do jogo suprime as emoções negativas extremas de Ainz automaticamente. Isso significa que, mesmo que ele queira sentir remorso pelo massacre do Reino de Re-Estize ou hesitar antes de uma atrocidade, o sistema o impede de sentir a extensão completa dessas emoções. Quanto do Suzuki Satoru original ainda existe dentro de Ainz? Nas temporadas mais recentes, a série sugere que cada vez menos.
          </p>
        </div>
      </div>

      <NewsletterSignup variant="inline" categories={["geek"]} />
      <RelatedPosts currentSlug="overlord-ainz-guardians-personagens" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId="overlord-ainz-guardians-personagens" />
    </article>
  );
};

export default OverlordPersonagens;
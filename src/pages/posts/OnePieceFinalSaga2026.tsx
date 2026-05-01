import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Anchor, Map, Star, BookOpen, Flame, Shield, Zap } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/one-piece-final-saga-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const OnePieceFinalSaga2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "one-piece-final-saga-2026",
      "One Piece Final Saga: Onde Estamos e O Que Esperar do Final",
      "otaku"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="otaku" size="lg" />
          <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm font-medium">
            Mangá · One Piece
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          One Piece Final Saga: Onde Estamos e O Que Esperar do Final
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />17 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchpriority="high"
          src={heroImg}
          alt="One Piece Final Saga 2026 — onde estamos e o que esperar"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Em julho de 2022, Eiichiro Oda anunciou que One Piece havia entrado em sua <strong>Final Saga</strong>. Mais de 1.100 capítulos e quase 28 anos depois do primeiro capítulo publicado em 1997, a jornada de Monkey D. Luffy está se aproximando do fim — mas ainda há muito pela frente. Este guia resume onde estamos, as revelações mais importantes e o que esperar do desfecho.
        </p>

        {/* Stats box */}
        <div className="not-prose my-8 p-5 bg-gradient-to-br from-pink-500/10 to-background rounded-xl border border-pink-500/30">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-pink-400" />One Piece em Números
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {[
              ["Início", "22 jul. 1997"],
              ["Capítulos", "1.110+ e contando"],
              ["Volumes", "107+ tankōbon"],
              ["Cópias vendidas", "530+ milhões"],
              ["Países publicados", "50+ países"],
              ["Duração anime", ">1.100 eps"],
              ["Recordes", "Mangá mais vendido da história"],
              ["Fase atual", "Final Saga (desde 2022)"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="text-xs text-muted-foreground mb-0.5">{k}</div>
                <div className="font-semibold text-sm">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <AdLeaderboard className="my-8" />

        {/* Arcos da Final Saga */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Map className="h-7 w-7 text-pink-400" />A Final Saga: Estrutura dos Arcos
        </h2>
        <p>
          A Final Saga de One Piece começou com o <strong>Arco de Egghead</strong> (capítulo 1058), a ilha futurista do Dr. Vegapunk. Este arco se tornou um dos mais impactantes da série em termos de revelações sobre a história do mundo, o Governo Mundial, os Gorosei e o legado do Joy Boy.
        </p>

        <div className="not-prose my-6 space-y-3">
          {[
            {
              arco: "Egghead — Ilha do Futuro",
              caps: "Caps. 1058 ao 1120+",
              status: "Concluído (2026)",
              color: "emerald",
              desc: "A maior revelação de toda a série até agora. Dr. Vegapunk transmite ao mundo a verdade sobre o Vazio de 100 Anos. Os Gorosei revelam suas formas Zoan Mítico. Luffy e os Chapéus de Palha escapam enquanto Egghead é destruída pelo Governo Mundial. Kuma sacrifica tudo para levar Bonney até Nika.",
            },
            {
              arco: "Elbaf — Terra dos Gigantes",
              caps: "Caps. 1121+ (em andamento)",
              status: "Em andamento",
              color: "yellow",
              desc: "O arco atual (março 2026). Os Chapéus de Palha chegam à terra natal dos gigantes nórdicos. Shanks e seus aliados estão presentes. Usopp pode ter seu momento definitivo aqui. A conexão com Loki (príncipe de Elbaf) e o Poneglyph que Big Mom roubou de Elbaf são centrais.",
            },
            {
              arco: "Mundo Final / Laugh Tale",
              caps: "A confirmar",
              status: "Arco Final",
              color: "pink",
              desc: "O destino final. O One Piece será revelado. O confronto com o Governo Mundial e Imu-sama. As perguntas sobre o Vazio de 100 Anos, o Antigo Reino e a Alegria de D. terão resposta. Oda prometeu que será um final que agradará a todos os fãs.",
            },
          ].map(a => (
            <div key={a.arco} className={`bg-card rounded-xl border p-4 border-${a.color}-500/30`}>
              <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                <h3 className="font-bold text-base">{a.arco}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full bg-${a.color}-500/20 text-${a.color}-400 shrink-0`}>
                  {a.status}
                </span>
              </div>
              <p className="text-xs text-pink-400 font-medium mb-1">{a.caps}</p>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      <AdInArticle />

        {/* Revelações */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Flame className="h-7 w-7 text-pink-400" />As Maiores Revelações da Final Saga
        </h2>
        <p>
          <em>Atenção: spoilers dos capítulos 1058 em diante. Se você ainda não leu, recomendamos fazer isso primeiro.</em>
        </p>

        <div className="not-prose my-6 space-y-3">
          {[
            {
              titulo: "O Gomu Gomu no Mi é o Hito Hito no Mi, Model: Nika",
              cap: "Cap. 1044",
              desc: "A Fruta do Diabo de Luffy não era uma Paramecia comum — é uma Zoan Mítico que transforma o usuário no \"Deus do Sol Nika\", um guerreiro da liberdade da lenda. O Governo Mundial esteve tentando suprimir esta fruta por 800 anos. Esta revelação recontextualizou toda a jornada de Luffy.",
            },
            {
              titulo: "Imu-sama existe e tem poder de destruição em massa",
              cap: "Cap. 1085",
              desc: "O governante real do Governo Mundial (acima dos Gorosei) foi confirmado em combate. Imu destruiu o Reino de Lulusia com uma arma desconhecida que apagou a ilha do mapa. Sua aparência real e poderes ainda são parcialmente misteriosos.",
            },
            {
              titulo: "Os Gorosei têm formas Zoan Mítico e são imortais",
              cap: "Cap. 1094+",
              desc: "Os cinco líderes do Governo Mundial, que até então pareciam burocratas, revelaram ser guerreiros de nível absurdo com Frutas do Diabo Míticas. São aparentemente imortais no sentido de que seus corpos se regeneram. Saturn, em especial, demonstrou poderes que paralisam qualquer pessoa que o veja.",
            },
            {
              titulo: "Vegapunk transmite a verdade ao mundo",
              cap: "Cap. 1109",
              desc: "O cientista mais brilhante do mundo gravou uma mensagem revelando que o mundo está afundando há 200 anos e que o Governo Mundial sabe disso. Esta transmissão foi o estopim para o ataque total a Egghead.",
            },
            {
              titulo: "Shanks versus Kid — o caráter de Shanks revelado",
              cap: "Cap. 1079",
              desc: "Shanks usou seu Haki do Rei para desativar os canhões da frota de Eustass Kid e depois afundou os navios sem dar outra chance. Uma cena que dividiu fãs mas mostrou que Shanks joga para ganhar quando sua família está em perigo.",
            },
          ].map(r => (
            <div key={r.titulo} className="bg-card rounded-xl border border-border p-4">
              <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                <h3 className="font-semibold text-sm">{r.titulo}</h3>
                <span className="text-xs text-pink-400 shrink-0">{r.cap}</span>
              </div>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>

        <AdRectangle className="my-8" />

        {/* Personagens chave */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-pink-400" />Personagens Centrais do Final
        </h2>

        <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
          {[
            {
              nome: "Monkey D. Luffy (Nika)",
              papel: "Protagonista",
              desc: "Com o Gear 5 confirmado como a forma mais ridícula e poderosa da série, Luffy se estabeleceu como a força capaz de vencer Imu. A conexão com Joy Boy — o herói que prometeu libertar os escravos 800 anos atrás — é o coração da Final Saga.",
            },
            {
              nome: "Shanks",
              papel: "Wild Card",
              desc: "Sua agenda ainda é misteriosa. Ele sabia sobre o Gomu Gomu no Mi, tem conexão com os Gorosei desde criança, mas claramente não está do lado do Governo Mundial. Provavelmente terá papel central em Elbaf e no ato final.",
            },
            {
              nome: "Imu-sama",
              papel: "Antagonista final",
              desc: "O rei das sombras do Governo Mundial. Tem a Fruta do Diabo mais poderosa do mundo? Parece ter vivido pelos 800 anos do Vazio de 100 Anos. A batalha contra Imu é o confronto que definirá o desfecho.",
            },
            {
              nome: "Monkey D. Dragon",
              papel: "Líder da Revolução",
              desc: "Pai de Luffy e líder do Exército Revolucionário. Ainda não mostrou seus poderes reais. O confronto entre Dragon e Imu pode ser a batalha definitiva pelo controle do mundo.",
            },
            {
              nome: "Nami e os Chapéus de Palha",
              papel: "Tripulação",
              desc: "Zoro precisa vencer Mihawk para ser o maior espadachim. Sanji tem o conflito com Judge pendente. Usopp deve ter seu momento de coragem em Elbaf. Robin é a única que pode ler todos os Poneglyphs.",
            },
            {
              nome: "Dr. Vegapunk (legado)",
              papel: "Informante",
              desc: "Morto em Egghead, mas sua transmissão global mudou o mundo. Seus satélites (Shaka, Lilith, Atlas etc.) continuam existindo como personagens. O conhecimento que ele deixou é crucial para entender o Vazio de 100 Anos.",
            },
          ].map(p => (
            <div key={p.nome} className="bg-card rounded-xl border border-border p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-sm">{p.nome}</h3>
                <span className="text-xs px-2 py-0.5 bg-pink-500/20 text-pink-400 rounded-full">{p.papel}</span>
              </div>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* O One Piece */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Anchor className="h-7 w-7 text-pink-400" />O One Piece: O Que É?
        </h2>
        <p>
          Oda confirmou em múltiplas entrevistas que o <strong>One Piece é real, físico e concreto</strong> — não é \"a amizade que fizemos no caminho\". O editor de Oda, Naito, revelou que ficou \"em choque\" quando soube o que é. O próprio Roger chorou ao chegar em Laugh Tale e ver o que estava lá.
        </p>
        <p>
          Com base nas pistas acumuladas ao longo de 1.100+ capítulos, a teoria mais sustentada pela comunidade é que o One Piece é o <strong>registro histórico completo do Vazio de 100 Anos</strong> — a verdade sobre o Antigo Reino que o Governo Mundial apagou da história. Esta verdade, quando revelada ao mundo, seria o gatilho para uma revolução global, o que explicaria por que o Governo Mundial suprimiu o Poneglyphs e exterminou o Antigo Reino.
        </p>
        <p>
          A conexão com Joy Boy reforça isso: Joy Boy foi o rei do Antigo Reino que deixou uma mensagem de desculpas para a Ilha dos Homens-Peixe no Poneglyph há 800 anos, prometendo que alguém viria cumprir a promessa. Luffy, como Nika, parece ser a reencarnação espiritual dessa promessa.
        </p>

        {/* Quando termina */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-pink-400" />Quando One Piece Termina?
        </h2>
        <p>
          Oda disse em 2022 que a Final Saga duraria &quot;alguns anos&quot; e que quer terminar a série antes de completar 60 anos (ele nasceu em 1975). Em 2023–2024, o ritmo de lançamento de capítulos desacelerou por hiatos de saúde frequentes de Oda.
        </p>
        <div className="not-prose my-6 grid md:grid-cols-3 gap-4">
          {[
            { cenario: "Estimativa Otimista", ano: "2027–2028", desc: "Se Oda mantiver o ritmo atual e Elbaf for resolvido rapidamente." },
            { cenario: "Estimativa Realista", ano: "2028–2030", desc: "Considerando os hiatos e o volume de história ainda pendente." },
            { cenario: "Estimativa Conservadora", ano: "2030+", desc: "Se Oda adicionar mais arcos inesperados ou os hiatos aumentarem." },
          ].map(e => (
            <div key={e.cenario} className="bg-card rounded-xl border border-border p-4 text-center">
              <div className="text-xs text-muted-foreground mb-1">{e.cenario}</div>
              <div className="text-2xl font-bold text-pink-400 mb-2">{e.ano}</div>
              <div className="text-xs text-muted-foreground">{e.desc}</div>
            </div>
          ))}
        </div>

        {/* Onde ler */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-pink-400" />Onde Ler e Assistir em 2026
        </h2>
        <p>
          O mangá de One Piece é publicado semanalmente na <strong>Weekly Shonen Jump</strong> (com hiatos frequentes de Oda). No Brasil, capítulos novos estão disponíveis <strong>gratuitamente</strong> no <a href="https://mangaplus.shueisha.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">Manga Plus</a> na mesma semana do lançamento japonês.
        </p>
        <p>
          O anime está disponível no <strong>Crunchyroll</strong> com dublagem e legendas em português. Em 2026, o anime está na adaptação do Arco de Egghead, com qualidade visual elogiada pelos fãs — especialmente as batalhas dos Gorosei.
        </p>
        <div className="not-prose my-6 grid sm:grid-cols-2 gap-4">
          <div className="bg-card rounded-xl border border-border p-4">
            <h3 className="font-bold text-sm mb-2">📖 Mangá (Gratuito)</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• <strong>Manga Plus</strong> (mangaplus.shueisha.com) — oficial, gratuito, PT-BR</li>
              <li>• Lançamento simultâneo ao Japão</li>
              <li>• Disponível: últimos 3 capítulos + especiais</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-border p-4">
            <h3 className="font-bold text-sm mb-2">📺 Anime</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• <strong>Crunchyroll</strong> — legendado e dublado em PT-BR</li>
              <li>• Em andamento: Arco de Egghead</li>
              <li>• Todos os 1.100+ episódios disponíveis</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Qual a sua teoria sobre o One Piece? 🏴‍☠️</h3>
          <p className="text-muted-foreground">O que você acha que é o tesouro de Roger? Compartilhe nos comentários! 👇</p>
        </div>
      </div>

      <NewsletterSignup variant="inline" categories={["otaku"]} />
      <RelatedPosts currentSlug="one-piece-final-saga-2026" />
      <CommentSection
        postId="one-piece-final-saga-2026"
        postTitle="One Piece Final Saga: Onde Estamos e O Que Esperar do Final"
      />
    </article>
  );
};

export default OnePieceFinalSaga2026;
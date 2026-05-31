import NewsletterSignup from "@/components/NewsletterSignup";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import { Clock, User, Calendar, BookOpen, MapPin, Shield, Swords, Target, Cpu, DollarSign, Crown, Users } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import ArticleSources from "@/components/ArticleSources";
import EditorialTake from "@/components/EditorialTake";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import acBrotherImg from "@/assets/ac-brotherhood.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const ACBrotherhood = () => {
  useEffect(() => {
    trackArticleRead("ac-brotherhood-ezio-roma-borgia", "Assassin's Creed Brotherhood em 2026: Review Completa — Ezio Reconstrói a Irmandade em Roma", "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" portalPath="/geek/assassins-creed" portalLabel="Painel Assassin's Creed" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">Assassin's Creed</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Assassin's Creed Brotherhood em 2026 Vale a Pena? Review Completa — Ezio Reconstrói a Irmandade em Roma
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />21 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />17 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="21 de Março, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          loading="eager"
          decoding="async"
          src={acBrotherImg}
          alt="Assassin's Creed Brotherhood — Ezio em Roma, Coliseu ao fundo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Lançado em novembro de 2010, <strong>Assassin's Creed Brotherhood</strong> é uma
          continuação direta de AC2 — Ezio Auditore, agora com 40 anos, precisa abandonar a
          Villa Auditore destruída pelos Bórgias e reconstruir a Irmandade dos Assassinos em
          Roma, capital do poder de Cesare Borgia. <strong>Brotherhood</strong> introduziu o
          multijogador online assimétrico e o sistema de recrutamento de Assassinos — duas
          inovações que definiram a franquia por anos.
        </p>

        <p className="text-lg">Neste guia completo de <strong>Assassin's Creed Brotherhood</strong> você encontra:</p>
        <ul className="text-lg">
          <li>👉 <strong>Brotherhood ainda vale a pena em 2026?</strong></li>
          <li>👉 Contexto histórico: Roma dos Bórgias e Cesare Borgia real</li>
          <li>👉 Sistema de recrutamento de Assassinos — a grande inovação</li>
          <li>👉 Máquinas de Leonardo da Vinci e o final controverso</li>
          <li>👉 Requisitos de PC, Ezio Collection e custo-benefício</li>
        </ul>

        <div className="not-prose my-8 p-6 bg-gradient-to-br from-amber-500/10 to-background rounded-xl border border-amber-500/30">
          <h2 className="text-xl font-bold mb-4">🎮 Informações Rápidas para Decisão de Compra</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {[
              ["Desenvolvedora","Ubisoft Montreal"],["Lançamento","16/11/2010"],
              ["Nota Metacritic","90/100 (PS3)"],["Vendas","8+ milhões de cópias"],
            ].map(([k,v]) => (
              <div key={k}><div className="text-muted-foreground">{k}</div><div className="font-bold">{v}</div></div>
            ))}
          </div>
          <p className="mt-4 text-muted-foreground text-sm mb-0">
            👉 Primeiro AC com <strong>multijogador online competitivo</strong>. Disponível via{" "}
            <strong>AC: The Ezio Collection</strong> no PS4/PS5, Xbox e PC.
          </p>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-amber-400" />
          Review Geral: AC Brotherhood é o Melhor da Trilogia Ezio?
        </h2>

        <p>
          Para muitos fãs, <strong>sim</strong>. Se AC2 é a origem e Revelations é o adeus,{" "}
          <strong>Brotherhood é o ápice</strong>: Ezio no seu melhor, Roma como playground
          perfeito para assassinatos e a inovação do recrutamento que transforma o jogador
          de Assassino solitário em líder de uma organização. O sistema de recrutamento é
          simples e viciante — salvar um civil, convidá-lo para a Irmandade e depois vê-lo
          evoluir de novato a Mestre Assassino é uma progressão incrivelmente satisfatória.
        </p>

        <EditorialTake category="geek" title="Análise do Marcos: Brotherhood é o AC mais viciante da trilogia Ezio">
          <p>
            Das três aventuras de Ezio, <strong>Brotherhood</strong> é a que me fez jogar
            mais horas sem perceber. O loop de destruir Torres de Borgia, recrutar Assassinos,
            enviá-los em missões pela Europa e chamá-los quando precisava de ajuda criou uma
            dependência que poucos jogos conseguem replicar. É gameplay de gestão disfarçado
            de ação, e funciona perfeitamente.
          </p>
          <p>
            O final com Lucy ainda me incomoda. Não pela execução em si, mas porque a Ubisoft
            nunca resolveu adequadamente o arco de Desmond depois disso. Brotherhood plantou
            uma bomba narrativa que AC3 não soube detonar direito. Mesmo assim, o jogo em si
            é excelente — e o modo multiplayer assimétrico foi genial para sua época.
          </p>
        </EditorialTake>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-amber-400" />
          Contexto Histórico: Roma dos Bórgias (1499–1507)
        </h2>

        <p>
          O jogo se passa em <strong>Roma entre 1499 e 1507</strong>, durante o pontificado
          de <strong>Alexandre VI</strong> (Rodrigo Borgia) e as campanhas militares de seu
          filho <strong>Cesare Borgia</strong> — Capitão-Geral dos exércitos papais. Roma
          estava em processo de transformação: obras monumentais no Vaticano, campanhas
          militares pela Itália e a corrupção generalizada dos Bórgias definiam a época.
        </p>

        <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
          {[
            ["👑 Cesare Borgia (Histórico)","Filho de Rodrigo (Papa Alexandre VI), Cesare foi um dos generais mais temidos da Itália. Maquiavel o usou como modelo para 'O Príncipe'. Ambicioso, carismático e sem escrúpulos — um dos melhores vilões da franquia."],
            ["🎨 Roma em Reconstrução","A Roma retratada está em ruínas. Bairros deteriorados, monumentos abandonados, Coliseu parcialmente destruído. Ezio pode reconstruir comprando propriedades — cada prédio restaurado gera renda passiva."],
            ["📜 Nicolau Maquiavel","Aparece como aliado dos Assassinos. O diplomata florentino que escreveria 'O Príncipe' anos depois está presente como personagem jogável em partes do jogo — observando Cesare com olhos analíticos."],
            ["⚙️ Leonardo da Vinci","Retorna em circunstâncias dramáticas — forçado por Cesare a criar máquinas de guerra. Ezio deve localizar e destruir cada invenção antes que os Bórgias as utilizem em batalha."],
          ].map(([title, desc]) => (
            <div key={title} className="p-4 bg-card rounded-xl border border-border">
              <h4 className="font-bold mb-2">{title}</h4>
              <p className="text-sm text-muted-foreground mb-0">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Crown className="h-7 w-7 text-amber-400" />
          Ezio aos 40 Anos — Veterano e Mentor
        </h2>

        <p>
          <strong>Brotherhood</strong> marca uma evolução crucial para Ezio: ele não é mais
          o jovem vingativo de AC2. Com 40 anos, já provou sua valentia, abriu o Cofre do
          Éden e escutou Minerva. Agora, sua missão é mais estratégica:{" "}
          <strong>libertar Roma do controle dos Bórgias, reconstruir a Irmandade e treinar
          uma nova geração de Assassinos</strong>.
        </p>

        <p>
          A narrativa começa logo após o final de AC2: Cesare Borgia ataca a Villa Auditore
          em Monteriggioni, mata o tio Mario de Ezio e rouba a Maçã do Éden. Ezio, ferido,
          foge para Roma — e lá inicia a lenta e sistemática desestruturação do poder dos Bórgias.
        </p>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-amber-400" />
          Sistema de Recrutamento — A Grande Inovação de Brotherhood
        </h2>

        <p>
          A mecânica mais icônica de <strong>Brotherhood</strong> é o{" "}
          <strong>sistema de recrutamento de Assassinos</strong>. Ao salvar civis de guardas
          dos Bórgias espalhados por Roma, Ezio pode convidá-los para a Irmandade:
        </p>

        <div className="not-prose space-y-3 my-4">
          {[
            ["📡 Enviado em Missões","Missões em toda a Europa (Florença, Veneza, Grécia, Egito, Espanha) que aumentam XP e trazem itens raros. Gerenciadas via pombo-correio em qualquer lugar do jogo — você gerencia como uma rede de agentes globais."],
            ["🦅 Convocado no Campo","Pressione um botão para convocar 1-3 Assassinos que chegam de telhados e eliminam inimigos no ato. Uma das sensações mais satisfatórias de toda a franquia — sentir-se o líder de uma organização letal."],
            ["⚔️ Promovido a Mestre","Com XP suficiente, recrutas sobem de nível até Mestre Assassino — e podem ser enviados para missões mais lucrativas e perigosas. Se morrerem em missão, são perdidos permanentemente (permadeath real)."],
          ].map(([title, desc]) => (
            <div key={title} className="flex gap-3 p-4 bg-card rounded-xl border border-border">
              <span className="text-xl shrink-0">{title.split(" ")[0]}</span>
              <div>
                <p className="font-bold mb-1">{title.replace(/^[^\s]+ /, "")}</p>
                <p className="text-sm text-muted-foreground mb-0">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <MapPin className="h-7 w-7 text-amber-400" />
          Roma: Reconstruindo a Cidade Eterna
        </h2>

        <p>
          Diferente de AC2 com múltiplas cidades, <strong>Brotherhood</strong> foca em{" "}
          <strong>uma única cidade enorme</strong>: Roma. A cidade é dividida em regiões
          controladas pelos Bórgias, identificadas por Torres de Borgia que precisam ser
          destruídas para liberar o acesso a lojas e projetos de reconstrução:
        </p>

        <div className="not-prose overflow-x-auto my-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Região</TableHead><TableHead>Características</TableHead><TableHead>Monumentos</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Campo Marzio","Bairro rico, aristocrático. Sede de poder dos Bórgias.","Pantheon, Piazza del Popolo"],
                ["Centro","Coração comercial. Mercados e oficinas medievais.","Fórum Romano, Arco de Constantino"],
                ["Antico","Ruínas antigas. Coliseu e monumentos imperiais.","Coliseu, Circo Máximo"],
                ["Vaticano","O coração do poder papal. Área mais protegida do jogo.","Castel Sant'Angelo, Basílica de São Pedro"],
              ].map(([r,c,m]) => (
                <TableRow key={r}>
                  <TableCell className="font-medium">{r}</TableCell>
                  <TableCell className="text-sm">{c}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{m}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p>
          Comprando lojas, oficinas de artesãos e monumentos, Ezio gera uma renda crescente
          que permite comprar as melhores armas e armaduras. O Coliseu — reconstruível — é
          um dos cenários mais impressionantes de toda a trilogia Ezio.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-amber-400" />
          As Máquinas de Leonardo da Vinci
        </h2>

        <p>
          Uma das missões mais criativas de <strong>Brotherhood</strong> envolve destruir as
          invenções de Leonardo da Vinci roubadas por Cesare. Cada missão deixa Ezio{" "}
          <strong>usar a própria máquina antes de destruí-la</strong>:
        </p>

        <div className="not-prose grid sm:grid-cols-2 gap-3 my-4">
          {[
            ["🔥 Canhão Naval","Ezio pilota um canhão em um barco para destruir navios dos Bórgias no Rio Tibre — uma das missões mais espetaculares do jogo."],
            ["🛡️ Máquina de Armadura","Uma máquina de guerra com canhão rotativo que Ezio usa para demolir uma fortaleza dos Bórgias com seus próprios canhões."],
            ["✈️ Asas Voadoras","Ezio plana sobre Roma com as asas de da Vinci — precursor direto dos gadgets de voo em jogos modernos."],
            ["💣 Carro de Combate","Veículo com lâminas rotativas que Ezio usa para varrer uma praça cheia de guardas em poucos segundos."],
          ].map(([t,d]) => (
            <div key={t} className="p-3 bg-card rounded-xl border border-border text-sm">
              <p className="font-bold">{t}</p>
              <p className="text-muted-foreground mb-0">{d}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-amber-400" />
          Multijogador Online — Uma Novidade Histórica para a Franquia
        </h2>

        <p>
          <strong>Brotherhood</strong> foi o <strong>primeiro AC com multijogador</strong> —
          e a implementação foi genial. Os jogadores assumem o papel de agentes Abstergo
          (os Templários modernos) treinando em Animus. Cada modo é de{" "}
          <strong>stealth assimétrico</strong>: você tem um alvo para caçar enquanto
          simultaneamente é caçado por outro jogador.
        </p>

        <p>
          O truque: misturar-se a NPCs com o mesmo visual do seu personagem, mover-se
          naturalmente e executar de perto. Correr ou usar skills obviamente denuncia sua
          localização. Foi um dos multijogadores mais originais da geração e foi continuado
          em Revelations com modos adicionais.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Swords className="h-7 w-7 text-amber-400" />
          O Final Controverso: Lucy e o Choque Narrativo
        </h2>

        <p>
          <strong>Brotherhood</strong> tem um dos finais mais controversos da franquia inteira.
          No presente, Desmond e seu grupo encontram o Templo de Juno. Dentro do Animus, Ezio
          deposita a Maçã do Éden — e <strong>Juno</strong> (Precursora Isu) toma controle de
          Desmond e o força a esfaquear <strong>Lucy Stillman</strong>, sua aliada. Lucy era,
          secretamente, uma agente dupla dos Templários.
        </p>

        <p>
          O choque narrativo foi imediato — o jogador literalmente apunhala uma das personagens
          principais sem conseguir impedir. Desmond cai em coma e a continuação veio em
          AC: Revelations.
        </p>

        <div className="my-8 p-5 bg-secondary/50 rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 Quer entender como a saga continuou? Leia nossa review de{" "}
            <Link to="/post/ac-revelations-ezio-constantinopla" className="text-primary hover:underline">
              AC Revelations
            </Link>{" "}
            e veja como Ezio e Altaïr chegam ao fim de suas jornadas.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-amber-400" />
          Tempo de Jogo e Legado de AC Brotherhood
        </h2>

        <div className="not-prose overflow-x-auto my-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Modo</TableHead><TableHead>Duração</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["História Principal","15–18 horas"],
                ["História + Secundárias","25–30 horas"],
                ["100% Completionist","40–50 horas"],
                ["DLC: The Da Vinci Disappearance","~3 horas"],
              ].map(([m,d]) => (
                <TableRow key={m}>
                  <TableCell className="font-medium">{m}</TableCell>
                  <TableCell className="font-bold text-green-400">{d}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p>
          <strong>Brotherhood</strong> recebeu <strong>90/100 no Metacritic</strong> para PS3
          e vendeu mais de 8 milhões de cópias no lançamento. É considerado por muitos o ápice
          da trilogia Ezio — a narrativa mais focada, a cidade mais densa para explorar e o
          sistema de recrutamento como sua inovação definitiva.
        </p>

        <div className="my-8 p-6 bg-gradient-to-br from-amber-500/10 to-background rounded-xl border border-amber-500/30">
          <h3 className="text-xl font-bold mb-4">🎮 Onde Jogar AC Brotherhood?</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>✓ <strong>PC:</strong> Steam e Ubisoft Connect (via AC: The Ezio Collection)</li>
            <li>✓ <strong>PlayStation 4 / PlayStation 5</strong> (AC: The Ezio Collection)</li>
            <li>✓ <strong>Xbox One / Xbox Series X|S</strong> (AC: The Ezio Collection)</li>
            <li>✓ <strong>Nintendo Switch</strong> (AC: The Ezio Collection)</li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground mb-0">
            A <strong>AC: The Ezio Collection</strong> inclui AC2, Brotherhood e Revelations
            remasterizados — a melhor forma de jogar os três em sequência.
          </p>
        </div>

        <div className="not-prose mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Roma valeu o esforço de Ezio? 🏛️</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

      <ArticleSources
        sources={[
          {
            title: "Assassin's Creed: The Ezio Collection — Steam Store",
            url: "https://store.steampowered.com/app/703550/Assassins_Creed_The_Ezio_Collection/",
            publisher: "Valve / Ubisoft",
            accessedAt: "Março 2026",
          },
          {
            title: "Assassin's Creed Brotherhood — How Long to Beat",
            url: "https://howlongtobeat.com/game/assassins-creed-brotherhood",
            publisher: "HowLongToBeat",
            accessedAt: "Março 2026",
          },
          {
            title: "Cesare Borgia — Britannica",
            url: "https://www.britannica.com/biography/Cesare-Borgia",
            publisher: "Encyclopædia Britannica",
            accessedAt: "Março 2026",
          },
          {
            title: "Borgia family — Britannica",
            url: "https://www.britannica.com/topic/Borgia-family",
            publisher: "Encyclopædia Britannica",
            accessedAt: "Março 2026",
          },
          {
            title: "Niccolò Machiavelli — Britannica",
            url: "https://www.britannica.com/biography/Niccolo-Machiavelli",
            publisher: "Encyclopædia Britannica",
            accessedAt: "Março 2026",
          },
          {
            title: "Assassin's Creed Brotherhood — PCGamingWiki (requisitos)",
            url: "https://www.pcgamingwiki.com/wiki/Assassin%27s_Creed:_Brotherhood",
            publisher: "PCGamingWiki",
            accessedAt: "Março 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="ac-brotherhood-ezio-roma-borgia" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId="ac-brotherhood-ezio-roma-borgia" postTitle="Assassin's Creed Brotherhood em 2026: Review Completa — Ezio Reconstrói a Irmandade em Roma" />
    </article>
  );
};

export default ACBrotherhood;

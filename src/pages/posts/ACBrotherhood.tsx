import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, BookOpen, MapPin, Shield, Swords, Target, Cpu, DollarSign, Crown, Users } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import acBrotherImg from "@/assets/ac-brotherhood.webp";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
const ACBrotherhood = () => {
  useEffect(() => {
    trackArticleRead("ac-brotherhood-ezio-roma-borgia", "Assassin's Creed Brotherhood: Ezio Reconstrói a Irmandade em Roma", "geek");
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
          Assassin's Creed Brotherhood: Ezio Reconstrói a Irmandade em Roma — Review e Guia Completo
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />21 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />17 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high"
          loading="eager"
          decoding="async" src={acBrotherImg} alt="Assassin's Creed Brotherhood — Ezio em Roma" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Lançado em novembro de 2010, <strong>Assassin's Creed Brotherhood</strong> é uma continuação direta de AC2 — Ezio Auditore, agora com 40 anos, precisa abandonar a Villa Auditore destruída pelos Bórgias e reconstruir a Irmandade dos Assassinos em Roma, capital do poder de Cesare Borgia. Brotherhood introduziu o multijogador online e o sistema de recrutamento de Assassinos — duas inovações duradouras.
        </p>

        <div className="not-prose my-8 p-6 bg-gradient-to-br from-amber-500/10 to-background rounded-xl border border-amber-500/30">
          <h2 className="text-xl font-bold mb-4">🎮 Informações Rápidas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {[
              ["Desenvolvedora","Ubisoft Montreal"],["Lançamento","16/11/2010"],
              ["Plataformas","PS3, Xbox 360, PC"],["Nota Metacritic","90/100 (PS3)"],
            ].map(([k,v]) => (
              <div key={k}><div className="text-muted-foreground">{k}</div><div className="font-bold">{v}</div></div>
            ))}
          </div>
          <p className="mt-4 text-muted-foreground text-sm mb-0">
            👉 Primeiro AC com <strong>multijogador online competitivo</strong>. Vendeu <strong>mais de 8 milhões de cópias</strong> no lançamento. Disponível via <strong>AC: The Ezio Collection</strong>.
          </p>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-amber-400" />
          Contexto Histórico: Roma dos Bórgias (1499–1507)
        </h2>
        <p>
          O jogo se passa em <strong>Roma entre 1499 e 1507</strong>, durante o pontificado de <strong>Alexandre VI</strong> (Rodrigo Borgia) e as campanhas militares de seu filho <strong>Cesare Borgia</strong> — Capitão-Geral dos exércitos papais. Roma estava em processo de transformação: obras do Vaticano, campanhas militares pela Itália e a corrupção generalizada dos Bórgias definiam a época.
        </p>
        <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
          {[
            ["👑 Cesare Borgia","Filho de Rodrigo (Papa Alexandre VI), Cesare foi um dos generais mais temidos da Itália. Real personagem histórico — Maquiavel o usou como modelo para 'O Príncipe'. No jogo, é o vilão principal."],
            ["🎨 Roma em Reconstrução","A Roma retratada no jogo está em ruínas — literalmente. Bairros deteriorados, monumentos abandonados, Coliseu parcialmente destruído. Ezio pode reconstruir a cidade comprando propriedades."],
            ["📜 Nicolau Maquiavel","Aparece como aliado dos Assassinos. O diplomata florentino que escreveria 'O Príncipe' anos depois está presente como personagem jogável em partes do jogo."],
            ["⚔️ Leonardo da Vinci","Retorna como aliado mas em circunstâncias mais dramáticas — forçado por Cesare a criar máquinas de guerra. Ezio deve destruí-las para impedir que os Bórgias as usem."],
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
          Brotherhood marca uma evolução crucial para Ezio: ele não é mais o jovem vingativo de AC2. Com 40 anos, já provou sua valentia, abriu o Cofre do Éden e escutou Minerva. Agora, sua missão é mais estratégica: <strong>libertar Roma do controle dos Bórgias, reconstruir a Irmandade e treinar uma nova geração de Assassinos</strong>.
        </p>
        <p>
          A narrativa começa logo após o final de AC2: Cesare Borgia ataca a Villa Auditore em Monteriggioni, mata o tio Mario de Ezio e rouba a Maçã do Éden. Ezio, ferido, foge para Roma — e lá inicia a lenta e sistemática desestruturação do poder dos Bórgias.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-amber-400" />
          Sistema de Recrutamento — A Grande Inovação
        </h2>
        <p>
          A mecânica mais icônica de Brotherhood é o <strong>sistema de recrutamento de Assassinos</strong>. Ao salvar civis de guardas dos Bórgias espalhados por Roma, Ezio pode convidá-los para a Irmandade. Cada recruta pode ser:
        </p>
        <div className="not-prose space-y-3 my-4">
          {[
            ["📡 Enviado em Missões","Missões na Europa (Florença, Veneza, Grécia, Egito) que aumentam XP e trazem itens. Gerenciadas via pombo-correio em qualquer lugar do jogo."],
            ["🦅 Convocado no Campo","Pressionar um botão para convocar 1-3 Assassinos que chegam de telhados e eliminam inimigos. Uma das sensações mais satisfatórias da série."],
            ["⚔️ Promovido a Mestre","Com XP suficiente, recrutas sobem de nível até Mestre Assassino — e podem ser enviados para missões mais lucrativas. Se morrerem em missão, são perdidos permanentemente."],
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

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <MapPin className="h-7 w-7 text-amber-400" />
          Roma: Reconstruindo a Cidade
        </h2>
        <p>
          Diferente de AC2 com múltiplas cidades, Brotherhood foca em <strong>uma única cidade enorme</strong>: Roma. A cidade é dividida em regiões controladas pelos Bórgias, identificadas por Torres de Borgia que precisam ser destruídas para liberar o acesso a lojas e projetos de reconstrução.
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
                ["Centro","Coração comercial. Mercados e oficinas.","Fórum Romano, Arco de Constantino"],
                ["Antico","Ruínas antigas. Coliseu e monumentos imperiais.","Coliseu, Circo Máximo"],
                ["Vaticano","O coração do poder papal. Área mais protegida.","Castel Sant'Angelo, Basílica de São Pedro"],
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
          Comprando lojas, oficinas de artesãos e monumentos, Ezio gera uma renda crescente que permite comprar as melhores armas e armaduras. O Coliseu — reconstruível — é um dos cenários mais impressionantes da série.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-amber-400" />
          As Máquinas de Leonardo da Vinci
        </h2>
        <p>
          Uma das missões mais criativas de Brotherhood envolve destruir as <strong>invenções de Leonardo da Vinci</strong> roubadas por Cesare. Cada missão deixa Ezio usar a própria máquina antes de destruí-la:
        </p>
        <div className="not-prose grid sm:grid-cols-2 gap-3 my-4">
          {[
            ["🔥 Canhão Naval","Ezio pilota um canhão em um barco para destruir navios dos Bórgias no Tibre."],
            ["🛡️ Máquina de Armadura","Uma máquina de guerra com canhão rotativo que Ezio usa para demolir uma fortaleza."],
            ["✈️ Asas Voadoras","Ezio plana sobre Roma com as asas de da Vinci — precursor do paraglider de games modernos."],
            ["💣 Carro de Combate","Veículo com lâminas rotativas que Ezio usa para varrer uma praça de guardas."],
          ].map(([t,d]) => (
            <div key={t} className="p-3 bg-card rounded-xl border border-border text-sm">
              <p className="font-bold">{t}</p>
              <p className="text-muted-foreground mb-0">{d}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-amber-400" />
          Multijogador Online — Uma Novidade Histórica
        </h2>
        <p>
          Brotherhood foi o <strong>primeiro AC com multijogador</strong> — e a implementação foi genial. Os jogadores assumem o papel de agentes Abstergo (os Templários modernos) treinando em Animus. Cada modo é de <strong>stealth assimétrico</strong>: você tem um alvo para caçar enquanto simultaneamente é caçado por outro jogador.
        </p>
        <p>
          O truque: misturar-se a NPCs que têm o mesmo visual do personagem, mover-se naturalmente e executar de perto. Correr ou usar skills obviamente denuncia sua localização. Foi um dos multijogadores mais originais da geração e foi continuado em Revelations.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Swords className="h-7 w-7 text-amber-400" />
          O Final: Lucy e a Revelação do Presente
        </h2>
        <p>
          Brotherhood tem um dos finais mais controversos da franquia. No presente, Desmond e seu grupo encontram o Templo de Juno. Dentro do Animus, Ezio deposita a Maçã do Éden — e <strong>Juno</strong> (outra Precursora) toma controle de Desmond e o força a esfaquear <strong>Lucy Stillman</strong>, sua aliada. Lucy era, secretamente, uma agente dupla dos Templários.
        </p>
        <p>
          O choque narrativo foi imediato — o jogador literalmente apunhala uma das personagens principais sem conseguir impedir. Desmond cai em coma e a continuação foi AC: Revelations.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-amber-400" />
          Tempo de Jogo e Legado
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
                ["História Principal","15-18 horas"],
                ["História + Secundárias","25-30 horas"],
                ["100% Completionist","40-50 horas"],
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
          Brotherhood recebeu <strong>90/100 no Metacritic</strong> para PS3 e vendeu mais de 8 milhões de cópias. É considerado por muitos o ápice da trilogia Ezio — a narrativa mais focada, a cidade mais densa e o sistema de recrutamento como sua inovação definitiva.
        </p>

        <div className="not-prose mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Roma valeu o esforço? 🏛️</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

      <NewsletterSignup variant="inline" categories={["geek"]} />
      <RelatedPosts currentSlug="ac-brotherhood-ezio-roma-borgia" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId="ac-brotherhood-ezio-roma-borgia" postTitle="Assassin's Creed Brotherhood — Ezio em Roma" />
    </article>
  );
};

export default ACBrotherhood;
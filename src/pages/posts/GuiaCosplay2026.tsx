import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Scissors, DollarSign, Users, Palette, Zap, BarChart3, Star } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/guia-cosplay-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const GuiaCosplay2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "guia-cosplay-2026-iniciantes",
      "Guia Definitivo para Começar no Cosplay em 2026: Do Zero à Convenção",
      "otaku"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="otaku" size="lg" />
          <span className="px-3 py-1 bg-otaku/20 text-otaku rounded-full text-sm font-medium">
            Cosplay · Iniciantes · Materiais · Convenção
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Guia Definitivo para Começar no Cosplay em 2026: Do Zero à Convenção com Orçamento Real
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />05 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" publishedAt="05 de Março, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          src={heroImg}
          alt="Guia definitivo de cosplay para iniciantes em 2026 — materiais, orçamento, personagens e convenções no Brasil"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O <strong>cosplay no Brasil</strong> deixou de ser hobby de nicho para se tornar fenômeno cultural com mercado próprio: a CCXP reúne mais de 280 mil visitantes por ano e o mercado de materiais para cosplay supera R$ 500 milhões anuais. Se você sempre quis entrar nesse universo mas não sabia por onde começar — materiais, orçamento, qual personagem escolher, o que esperar na primeira convenção — este guia cobre tudo, com informações adaptadas para a realidade brasileira de 2026.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Palette className="h-7 w-7 text-otaku" />
          Escolhendo seu Primeiro Personagem: A Decisão Mais Importante
        </h2>
        <p>
          A escolha do personagem é a fundação de tudo — e o erro mais comum do iniciante é deixar a pressão externa decidir por ele. Esqueça o cosplay mais difícil, mais popular ou mais aclamado nas redes. Para iniciantes, a regra de ouro é: <strong>escolha alguém que você ama de verdade</strong>, cujo visual seja tecnicamente viável para seu nível e orçamento atuais.
        </p>
        <p>
          A paixão pelo personagem vai sustentar você nas horas frustrantes de confecção quando algo não sai como planejado — e na convenção, a energia de quem está incorporando um personagem que realmente ama é visível e contagiante para quem fotografa.
        </p>

        <div className="not-prose my-6 space-y-3">
          {[
            {
              nivel: "🟢 Cosplays de Entrada Perfeitos",
              desc: "Visual icônico com complexidade técnica baixa — ideal para o primeiro projeto",
              exemplos: [
                "Naruto Uzumaki — calça laranja, bandana da Folha da Vila, cabelo espetado (peruca barata)",
                "Monkey D. Luffy — chapéu de palha + camisa vermelha simples + calça jeans",
                "Personagens com uniforme escolar (Blue Period, Oregairu, Fruits Basket)",
                "Genos de One Punch Man em versão simplificada (roupa preta + luvas amarelas)",
                "Edward Elric com capa vermelha — técnico mas alcançável com EVA básico",
              ]
            },
            {
              nivel: "🟡 Cosplays Intermediários",
              desc: "Requerem costura básica, EVA moldado ou peruca estilizada",
              exemplos: [
                "Tanjiro Kamado com haori do Hashira de Água",
                "Rem ou Ram de Re:Zero — maid outfit com tiaras e pulseiras",
                "Personagens de Jujutsu Kaisen com selos e técnicas visuais",
                "Cosplays de Fire Force com uniformes brancos e customizações",
              ]
            },
            {
              nivel: "🔴 Cosplays Avançados",
              desc: "Armaduras completas, props funcionais, LEDs, impressão 3D",
              exemplos: [
                "Alphonse Elric — armadura completa em EVA e/ou impressão 3D",
                "Personagens de Demon Slayer com armaduras de Hashira",
                "Ironman ou mechas de anime em escala real",
                "Cosplays com efeitos luminosos e eletrônicos integrados",
              ]
            }
          ].map(({ nivel, desc, exemplos }) => (
            <div key={nivel} className="bg-card rounded-xl border border-otaku/20 p-4">
              <h3 className="font-bold text-sm text-otaku mb-0.5">{nivel}</h3>
              <p className="text-xs text-muted-foreground italic mb-2">{desc}</p>
              <ul className="space-y-0.5">
                {exemplos.map((e) => <li key={e} className="text-xs text-muted-foreground">• {e}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Scissors className="h-7 w-7 text-otaku" />
          Materiais Essenciais e Onde Comprar no Brasil
        </h2>
        <p>
          O grande diferencial do cosplay brasileiro em relação a tutoriais americanos ou europeus é a adaptação de materiais. EVA de qualidade, tintas acrílicas e contact cement são amplamente disponíveis no Brasil a preços muito mais acessíveis do que produtos importados. Conhecer os equivalentes nacionais faz toda a diferença:
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4">Material</th>
                <th className="text-left py-3 px-4">Uso</th>
                <th className="text-left py-3 px-4">Preço Médio BR</th>
                <th className="text-left py-3 px-4">Onde Comprar</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["EVA 5mm (placa A4/A3)", "Armaduras, props, adereços — base do cosplay BR", "R$ 8–15 a placa", "Papelarias, lojas de artesanato, Shopee"],
                ["EVA 10mm (placa grande)", "Armaduras pesadas e estruturais", "R$ 15–30 a placa", "Lojas especializadas, Shopee, Mercado Livre"],
                ["Pistola de calor (heat gun)", "Heatforming — moldar EVA aquecido sobre o corpo", "R$ 60–120", "Leroy Merlin, Ferramentas na Shopee"],
                ["Contact cement (cola de contato)", "Unir peças de EVA com precisão — cola definitiva", "R$ 20–40 o frasco", "Sapatarias, lojas de material de construção"],
                ["Tintas acrílicas", "Colorir e texturizar peças de EVA e props", "R$ 5–15 a bisnaga", "Papelarias, Casa de Arte, Shopee"],
                ["Primer acrílico (spray)", "Preparar a superfície do EVA antes de pintar", "R$ 15–25", "Tintas e ferramentas, Leroy Merlin"],
                ["Worbla (termoplástico importado)", "Alternativa premium ao EVA — mais resistente e maleável", "R$ 80–200 a placa", "Lojas especializadas, importação"],
                ["Tecido Oxford", "Roupas mais rígidas e estruturadas", "R$ 15–30 o metro", "Tecidos Bichinho, Mundo dos Tecidos"],
                ["Tecido Suplex", "Roupas aderentes — trajes de herói, fantasia", "R$ 20–40 o metro", "Lojas de tecido especializadas"],
              ].map(([mat, uso, preco, onde]) => (
                <tr key={mat as string} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-otaku text-xs">{mat}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{uso}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{preco}</td>
                  <td className="py-3 px-4 text-xs">{onde}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4 text-otaku">Técnicas Básicas que Todo Iniciante Deve Aprender</h3>
        <div className="not-prose my-6 space-y-2">
          {[
            { tec: "🔥 Heatforming", desc: "Aquecer o EVA com a pistola de calor e moldar sobre o próprio corpo ou formas improvisadas (bolas, frascos, garrafa PET). Cria curvaturas orgânicas que parecem armadura real." },
            { tec: "🔗 Contact Cement", desc: "Cola de contato aplicada em ambas as superfícies, aguardar 5 minutos e pressionar. Criaa união permanente entre peças de EVA. Trabalhe em local ventilado — o solvente é forte." },
            { tec: "🎨 Base coat + dry brushing", desc: "Aplicar primer + tinta base escura, depois passar tinta metálica clara levemente sobre as extremidades. Cria efeito de metal envelhecido realista em armaduras de EVA." },
            { tec: "💡 Instalação de LEDs", desc: "Fitas de LED USB ou pilhas AA podem ser costuradas/coladas internamente em armaduras para efeitos luminosos. Básico de eletrônica (5V, resistores) abre possibilidades enormes." },
          ].map(({ tec, desc }) => (
            <div key={tec} className="flex gap-3 items-start bg-card rounded-xl border border-otaku/20 p-3">
              <span className="font-bold text-otaku text-xs shrink-0 w-32">{tec}</span>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-otaku" />
          Orçamentos Realistas para Cada Nível
        </h2>
        <p>
          A regra de ouro do orçamento de cosplay: o custo real é sempre <strong>20–30% maior que a estimativa inicial</strong>. Crie um fundo de reserva desde o início e evite a armadilha de comprar os materiais mais caros na primeira tentativa.
        </p>

        <AdInArticle />

        <div className="not-prose my-6 grid md:grid-cols-3 gap-4">
          {[
            {
              nivel: "🟢 Iniciante",
              valor: "R$ 100–300",
              inclui: ["Roupas simples (compradas ou adaptadas)", "Props básicos em EVA 5mm", "Peruca de entrada (Shopee R$ 40–80)", "Maquiagem básica"],
              dica: "Compre roupas base no Shopee e customize — economiza muito."
            },
            {
              nivel: "🟡 Intermediário",
              valor: "R$ 500–1.500",
              inclui: ["Tecidos de qualidade + costura própria", "Armaduras em EVA modelado e pintado", "Peruca estilizada ou customizada", "Props com detalhes pintados à mão"],
              dica: "Invista na pistola de calor (ferramenta que dura anos e muda tudo)."
            },
            {
              nivel: "🔴 Avançado / Competição",
              valor: "R$ 2.000–10.000+",
              inclui: ["Worbla e materiais premium importados", "Impressão 3D para peças complexas", "Efeitos LED e eletrônicos integrados", "Perucas profissionais estilizadas"],
              dica: "Documente o processo — juízes valorizam o making of em competições."
            }
          ].map(({ nivel, valor, inclui, dica }) => (
            <div key={nivel} className="bg-card rounded-xl border border-otaku/20 p-4">
              <h3 className="font-bold text-sm text-otaku mb-0.5">{nivel}</h3>
              <p className="text-2xl font-bold text-otaku mb-2">{valor}</p>
              <ul className="space-y-0.5 mb-2">
                {inclui.map((i) => <li key={i} className="text-xs text-muted-foreground">• {i}</li>)}
              </ul>
              <p className="text-xs bg-otaku/10 text-otaku px-2 py-1 rounded-md">💡 {dica}</p>
            </div>
          ))}
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-otaku" />
          Sua Primeira Convenção: Guia de Sobrevivência
        </h2>
        <p>
          A primeira vez em uma convenção com cosplay próprio é uma experiência única. Mas há detalhes práticos que a maioria dos guias ignora e que fazem toda a diferença:
        </p>

        <div className="not-prose my-6 space-y-3">
          {[
            { dica: "🏠 Teste em casa primeiro (obrigatório)", desc: "Vista o cosplay completo por pelo menos 2 horas em casa antes da convenção. Identifique pontos de desconforto, restrições de movimento e peças que soltam. Só assim você descobre os problemas a tempo de corrigir." },
            { dica: "🧰 Kit de emergência para cosplay", desc: "Leve: cola quente em bastão (pistola portátil ou bastões com isqueiro), agulha e linha na cor do figurino, fita dupla-face para fixar bordas, alfinetes, grampeador, Band-Aid (o EVA pode machucar nas dobras). Convenção sem esse kit é risco desnecessário." },
            { dica: "👟 Calçado e conforto", desc: "Convenções envolvem horas em pé sobre concreto ou carpete. Priorize conforto real sobre fidelidade visual nos sapatos. Um palmilha de gel pode salvar seu dia — ninguém aguenta 8h com salto alto ou sapatos novos." },
            { dica: "📸 Etiqueta de fotografia", desc: "Sempre peça permissão antes de fotografar alguém — mesmo que o cosplay seja elaborado. Respeite 'não' sem perguntas. Evite segurar ou tocar no cosplay de outra pessoa sem convite explícito. A comunidade cosplay é reconhecida pela positividade — mantenha isso." },
            { dica: "💧 Hidratação e alimentação", desc: "Convenções são quentes e exaustivas. Leve garrafa de água (mesmo que proibida, o ambiente devidrata). Coma alguma coisa substancial antes de entrar — comer com cosplay completo é complicado e as filas de praça de alimentação são longas." },
          ].map(({ dica, desc }) => (
            <div key={dica} className="bg-card rounded-xl border border-otaku/20 p-4">
              <h3 className="font-bold text-sm mb-1 text-otaku">{dica}</h3>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          Calendário de Convenções no Brasil 2026
        </h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4">Evento</th>
                <th className="text-left py-3 px-4">Período</th>
                <th className="text-left py-3 px-4">Local</th>
                <th className="text-left py-3 px-4">Público Est.</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Anime Friends", "Julho 2026", "São Paulo (Expo Center Norte)", "120.000+"],
                ["CCXP 2026", "Novembro/Dezembro 2026", "São Paulo (Expo SP)", "280.000+"],
                ["Brasil Game Show", "Outubro 2026", "São Paulo (Expo SP)", "200.000+"],
                ["AnimeON (itinerante)", "Ao longo do ano", "Múltiplas cidades", "Variado"],
                ["Anime Jungle", "Datas a confirmar", "São Paulo / Rio", "30.000+"],
              ].map(([ev, per, loc, pub]) => (
                <tr key={ev as string} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-otaku text-xs">{ev}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{per}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{loc}</td>
                  <td className="py-3 px-4 text-xs">{pub}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-otaku" />
          Recursos para Aprender: Tutoriais e Comunidades
        </h2>

        <div className="not-prose my-6 space-y-2">
          {[
            { rec: "🎥 Kamui Cosplay (YouTube/livros)", desc: "A maior criadora de conteúdo técnico de cosplay do mundo. Tutoriais de EVA, Worbla, pinturas e efeitos especiais. Os livros dela são referência — disponíveis em português.", link: "youtube.com/@KamuiCosplay" },
            { rec: "🇧🇷 Cosplay Brasil (Facebook/Instagram)", desc: "A maior comunidade online de cosplay do Brasil. Dúvidas, showcase, grupos regionais para encontrar outros cosplayers na sua cidade.", link: "instagram.com/cosplaybrasil" },
            { rec: "🛒 Shopee / Mercado Livre — cosplay BR", desc: "Busque 'EVA cosplay', 'peruca cosplay', 'tecido Oxford', 'contact cement'. Preços muito abaixo de lojas físicas e grande variedade de fornecedores brasileiros.", link: "shopee.com.br" },
            { rec: "📦 Mundo do EVA / Casa do Cosplay (SP)", desc: "Lojas físicas especializadas em São Paulo com variedade de espessuras e tipos de EVA, tintas especializadas e ferramentas. Referência para quem está na capital.", link: "lojas físicas SP" },
          ].map(({ rec, desc, link }) => (
            <div key={rec} className="flex gap-3 items-start bg-card rounded-xl border border-otaku/20 p-3">
              <div>
                <p className="font-bold text-xs text-otaku">{rec}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
                <p className="text-xs text-otaku/70 font-mono mt-0.5">{link}</p>
              </div>
            </div>
          ))}
        </div>

        <EditorialTake category="otaku" title="Análise do Marcos: cosplay brasileiro cresceu de nicho para referência internacional">
          <p>
            A CCXP reúne mais de 280 mil visitantes por ano segundo dados oficiais da Omelete Company — e boa parte deles veste cosplay. O que mais me impressiona é como o <strong>cosplayer brasileiro se adaptou à realidade local</strong>: EVA de 5mm encontrado em qualquer papelaria por R$ 8–15 a placa, tintas acrílicas de marca nacional, contact cement de sapataria. Os tutoriais europeus e americanos assumem materiais e ferramentas que custam 5x mais aqui — e os cosplayers brasileiros resolveram isso com criatividade.
          </p>
          <p>
            O erro mais comum do iniciante brasileiro é tentar copiar tutoriais americanos sem adaptar para o clima e orçamento local. <strong>Comece simples, vista o cosplay completo em casa por 2 horas antes da convenção e participe das comunidades nas redes</strong> — a curva de aprendizado é muito mais rápida quando você tem uma comunidade para tirar dúvidas. Cosplayers brasileiros ganham prêmios em campeonatos japoneses há anos — a qualidade é real e cresce a cada geração.
          </p>
        </EditorialTake>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Já fez seu primeiro cosplay? 🎭</h3>
          <p className="text-muted-foreground">Conta qual foi o personagem e o que aprendeu com o processo nos comentários! 👇</p>
        </div>
      </div>

      <ArticleSources category="otaku"
        sources={[
          {
            title: "CCXP — Dados oficiais e público do evento",
            url: "https://www.ccxp.com.br/",
            publisher: "CCXP / Omelete Company",
            accessedAt: "Março 2026"
          },
          {
            title: "Kamui Cosplay — tutoriais técnicos oficiais",
            url: "https://www.kamuicosplay.com/",
            publisher: "Kamui Cosplay",
            accessedAt: "Março 2026"
          },
          {
            title: "Worbla — tutoriais e materiais termoplásticos",
            url: "https://www.worbla.com/tutorials",
            publisher: "Worbla",
            accessedAt: "Março 2026"
          },
          {
            title: "Anime Friends — site oficial e dados do evento",
            url: "https://animefriends.com.br/",
            publisher: "Anime Friends",
            accessedAt: "Março 2026"
          },
          {
            title: "Omelete Company — cobertura CCXP e dados de audiência",
            url: "https://www.omelete.com.br/ccxp",
            publisher: "Omelete",
            accessedAt: "Março 2026"
          },
          {
            title: "Anime News Network — Cosplay World Championship",
            url: "https://www.animenewsnetwork.com/",
            publisher: "Anime News Network",
            accessedAt: "Março 2026"
          },
        ]}
      />

      <RelatedPosts currentSlug="guia-cosplay-2026-iniciantes" />
      <CommentSection postId="guia-cosplay-2026-iniciantes" postTitle="Guia Definitivo para Começar no Cosplay em 2026: Do Zero à Convenção" />
    </article>
  );
};

export default GuiaCosplay2026;

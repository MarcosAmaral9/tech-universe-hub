import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Gamepad2, Star, Zap, Shield, BarChart3, MapPin } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/gta-vi-novembro-2026-vice-city-leonida.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const GtaViNovembro2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "gta-vi-novembro-2026-vice-city-leonida",
      "GTA VI: Data Confirmada para 19 de Novembro — Tudo sobre Leonida, Lucia, Jason e o Maior Jogo da Década",
      "geek"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-geek/20 text-geek rounded-full text-sm font-medium">
            Games · GTA VI · Rockstar · Novembro 2026
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          GTA VI: Data Confirmada para 19 de Novembro — Tudo sobre Leonida, Lucia, Jason e o Maior Jogo da Década
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />20 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />17 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="GTA VI novembro 2026 Vice City Leonida Lucia Jason" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          A Take-Two Interactive confirmou oficialmente: <strong>Grand Theft Auto VI chega em 19 de novembro de 2026</strong> para PS5 e Xbox Series X|S. A campanha de marketing começa no verão — o terceiro trailer deve chegar em junho ou julho. Após dois adiamentos (de outono de 2025 para maio de 2026, depois para novembro), a data é definitiva. Com 250 milhões de visualizações no Trailer 1 e um mundo aberto ambientado em Leonida (versão fictícia da Flórida moderna), GTA VI promete ser o maior lançamento da história dos games. Este guia reúne tudo confirmado e o que esperar.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-geek" />
          Ficha Oficial: O Que Já Sabemos com Certeza
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-geek/20 p-5">
            <h3 className="font-bold text-geek mb-3">📋 Dados Confirmados pela Rockstar</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>📅 <strong className="text-foreground">Lançamento:</strong> 19 de novembro de 2026</li>
              <li>🎮 <strong className="text-foreground">Plataformas de lançamento:</strong> PS5 e Xbox Series X|S</li>
              <li>💻 <strong className="text-foreground">PC:</strong> Não confirmado para 2026 (provável 2027)</li>
              <li>👥 <strong className="text-foreground">Protagonistas:</strong> Lucia Caminos e Jason Duval</li>
              <li>🗺️ <strong className="text-foreground">Cenário:</strong> Estado de Leonida (Florida) + Vice City</li>
              <li>🎬 <strong className="text-foreground">Trailers:</strong> Trailer 1 (dez/23) e Trailer 2 (mai/25)</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-geek/20 p-5">
            <h3 className="font-bold text-geek mb-3">📊 Os Números que Contextualizam o Hype</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>📈 <strong className="text-foreground">Trailer 1:</strong> 93M views em 24h — recorde mundial de trailer de jogo</li>
              <li>📈 <strong className="text-foreground">Trailer 1 total:</strong> +250M views no YouTube</li>
              <li>💰 <strong className="text-foreground">GTA V vendas:</strong> 400M+ unidades desde 2013</li>
              <li>⏱️ <strong className="text-foreground">Desenvolvimento:</strong> Estimado em 10+ anos</li>
              <li>💵 <strong className="text-foreground">Orçamento estimado:</strong> US$ 1–2 bilhões (maior da história)</li>
              <li>🏢 <strong className="text-foreground">QA em andamento:</strong> Contratação massiva em Bangalore (abr/26)</li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          Os Protagonistas: Lucia e Jason — A Dupla Bonnie & Clyde
        </h2>
        <p>
          GTA VI retorna ao sistema de protagonista duplo de GTA V, mas com uma diferença fundamental: <strong>você alterna entre Lucia Caminos e Jason Duval em tempo real</strong>, e os dois têm um arco narrativo entrelaçado como casal — uma dinâmica tipo Bonnie & Clyde moderna no crime organizado de Leonida.
        </p>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          {[
            { personagem: "Lucia Caminos", icon: "👩", desc: "Mulher latina criada nas favelas de Leonida. Foge de um passado no tráfico, tenta uma vida legítima mas é empurrada de volta ao crime por circunstâncias. Protagonista principal — a maioria da narrativa é narrada pelo seu ponto de vista. Mais calculista e estratégica. Trailer 2 mostra ela liderando a dupla nas situações de maior tensão.", habilidade: "Precisão com armas e infiltração silenciosa" },
            { personagem: "Jason Duval", icon: "👨", desc: "Ex-segurança convertido em criminoso por amor a Lucia. Mais impulsivo e bruto. Complementa o perfil de Lucia com força e intimidação. Segundo trailers, Jason conduz a maioria das cenas de ação aberta e caos urbano. Tem conexões com gangues locais que abrem partes específicas do mapa.", habilidade: "Combate corpo a corpo e direção agressiva" },
          ].map(({ personagem, icon, desc, habilidade }) => (
            <div key={personagem} className="bg-card rounded-xl border border-geek/20 p-5">
              <div className="text-3xl mb-2">{icon}</div>
              <h3 className="font-bold text-sm text-geek mb-1">{personagem}</h3>
              <p className="text-xs text-muted-foreground mb-2">{desc}</p>
              <span className="text-xs bg-geek/10 text-geek px-2 py-0.5 rounded-full">🎯 {habilidade}</span>
            </div>
          ))}
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <MapPin className="h-7 w-7 text-geek" />
          O Mapa: Leonida — O Maior Mundo Aberto da História da Rockstar
        </h2>
        <p>
          Leonida não é apenas Vice City repaginada. É um <strong>estado inteiro</strong> — com a metrópole neon de Vice City no centro, mais pântanos ao sul, praias ao leste, pequenas cidades interioranas ao norte e zonas rurais que lembram o interior da Flórida real.
        </p>
        <div className="not-prose my-6 space-y-2">
          {[
            { zona: "🏙️ Vice City (metrópole)", desc: "O coração do mapa. Versão fictícia de Miami modernizada — arranha-céus, praias de neon, distritos artísticos, favelas e condomínios fechados de luxo. Densidade urbana nunca vista na franquia.", size: "~35% do mapa" },
            { zona: "🌿 Pântanos de Leonida", desc: "Sul do estado. Inspirado nos Everglades da Flórida — cheio de crocodilos, grupos paramilitares escondidos, laboratórios clandestinos e rotas de fuga aquáticas. Estética radicalmente diferente da cidade.", size: "~25% do mapa" },
            { zona: "🏖️ Costa Atlântica", desc: "Leste do estado. Praias turísticas, resorts, cidades litorâneas menores. Contraste entre a riqueza turística e o crime por baixo.", size: "~20% do mapa" },
            { zona: "🌾 Interior Rural", desc: "Norte e noroeste. Pequenas cidades, fazendas, rodovias, trailers parks. Ambiente totalmente diferente da metrópole — com os próprios conflitos e facções locais.", size: "~20% do mapa" },
          ].map(({ zona, desc, size }) => (
            <div key={zona} className="flex gap-3 bg-card rounded-xl border border-geek/20 p-4">
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-bold text-sm">{zona}</h3>
                  <span className="text-xs text-geek bg-geek/10 px-2 py-0.5 rounded-full shrink-0">{size}</span>
                </div>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p>
          O mapa de GTA VI é estimado pelos dataminers com base nos trailers em <strong>2–3 vezes o tamanho de GTA V</strong>. Para contexto: GTA V tinha 81 km² incluindo o oceano. Se as estimativas estiverem corretas, Leonida terá entre 160–240 km² — o maior mapa já criado pela Rockstar.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          As Inovações de Gameplay Confirmadas nos Trailers
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { feat: "🧠 NPCs com IA comportamental avançada", desc: "Transeuntes que reagem ao clima, ao horário e ao estado do jogador de forma dinâmica. Uma pessoa com guarda-chuva num dia de sol foi apontada nos trailers como exemplo da simulação de comportamentos individuais únicos." },
            { feat: "💥 Física de explosões localizada", desc: "Explosões que danificam especificamente a parte do veículo onde ocorrem — não mais um modelo genérico de 'pegando fogo'. Revelado explicitamente no Trailer 2." },
            { feat: "🌤️ Nuvens volumétricas dinâmicas", desc: "O sistema de céu mais avançado de qualquer jogo da Rockstar. Tempestades que se formam e se movem organicamente, iluminação que muda em tempo real conforme as nuvens passam." },
            { feat: "📱 Economia do jogo baseada em redes sociais fictícias", desc: "Personagens do mundo têm presença em redes sociais dentro do jogo. Suas ações afetam sua 'reputação online' no mundo de Leonida, influenciando missões e preços." },
            { feat: "🚤 Movimento aquático expandido", desc: "Judging by trailers, barcos e subaquático têm muito mais destaque que em GTA V — coerente com o cenário de pântanos e litoral extenso de Leonida." },
          ].map(({ feat, desc }) => (
            <div key={feat} className="bg-card rounded-xl border border-geek/20 p-4">
              <h3 className="font-bold text-sm mb-1 text-geek">{feat}</h3>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          Quando Comprar: Estratégia para o Lançamento de Novembro
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { momento: "Agora (pré-compra)", vantagem: "Bônus de pré-venda quando disponível. Garante acesso no dia de lançamento sem fila digital.", risco: "Possível novo adiamento (terceira vez?). Ainda não há data confirmada de pré-venda." },
            { momento: "Lançamento (19 nov)", vantagem: "Experiência completa sem spoilers. Servidor GTA Online no pico de jogadores online.", risco: "Possíveis bugs de lançamento. Servidores online instáveis nas primeiras semanas." },
            { momento: "Janeiro 2027", vantagem: "Primeiros patches aplicados, bugs corrigidos, possível desconto pós-natal.", risco: "Spoilers inevitáveis após 2 meses de jogo. Perde o momento cultural do lançamento." },
          ].map(({ momento, vantagem, risco }) => (
            <div key={momento} className="bg-card rounded-xl border border-geek/20 p-4">
              <h3 className="font-bold text-sm mb-2 text-geek">⏰ {momento}</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs font-medium text-invest mb-0.5">✅ Vantagem</p>
                  <p className="text-xs text-muted-foreground">{vantagem}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-geek mb-0.5">⚠️ Risco</p>
                  <p className="text-xs text-muted-foreground">{risco}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p>
          Para o PC: a tradição da Rockstar é lançar a versão PC 6–18 meses após os consoles. GTA V chegou ao PC 18 meses depois. Espere GTA VI no PC entre <strong>maio e novembro de 2027</strong> — com gráficos superiores e mods da comunidade.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você vai comprar GTA VI no lançamento? 🎮</h3>
          <p className="text-muted-foreground">PS5, Xbox ou aguarda o PC? Conta nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="gta-vi-novembro-2026-vice-city-leonida" />
      <CommentSection postId="gta-vi-novembro-2026-vice-city-leonida" postTitle="GTA VI: Data Confirmada para 19 de Novembro — Tudo sobre Leonida, Lucia e Jason" />
    </article>
  );
};

export default GtaViNovembro2026;

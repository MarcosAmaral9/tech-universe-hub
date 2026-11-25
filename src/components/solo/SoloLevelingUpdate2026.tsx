import { CheckCircle2, Gamepad2 } from "lucide-react";

/** Quadro de fatos confirmados (nov/2026) usado nos guias de Solo Leveling. */
export const SoloLevelingConfirmedBox = () => (
  <aside className="not-prose my-8 rounded-xl border border-otaku/40 bg-otaku/10 p-6">
    <p className="mb-3 flex items-center gap-2 font-heading text-lg font-bold text-otaku">
      <CheckCircle2 className="h-5 w-5" /> O que está confirmado em novembro de 2026
    </p>
    <ul className="space-y-2 text-sm leading-relaxed text-foreground">
      <li><strong>Anime:</strong> 1ª temporada (jan–mar 2024, 12 ep.) e 2ª, <em>Arise from the Shadow</em> (jan–mar 2025, 13 ep.), na Crunchyroll.</li>
      <li><strong>3ª temporada:</strong> a D&amp;C Media citou a produção em relatório a investidores (jun/2026), com janela de 2027–2028. Não há data oficial de estreia.</li>
      <li><strong>Filme novo:</strong> <em>Solo Leveling: Beyond the System</em>, anunciado na Anime Expo (3/jul/2026) pela Aniplex e Crunchyroll, feito pela A-1 Pictures e continuando a 2ª temporada. Sem data.</li>
      <li><strong>Ragnarok:</strong> a continuação em webtoon, com Sung Suho, segue em publicação.</li>
      <li><strong>Jogos:</strong> <em>Solo Leveling: Arise</em> (celular e PC, maio de 2024) e <em>Arise Overdrive</em> (PC e, desde 3/nov/2026, PS5 e Xbox Series X|S).</li>
    </ul>
  </aside>
);

/** Seção de gameplay dos jogos oficiais. */
export const SoloLevelingGamesSection = () => (
  <>
    <h2 className="flex items-center gap-2"><Gamepad2 className="h-6 w-6 text-otaku" />Os jogos de Solo Leveling: como é a gameplay</h2>
    <p>
      A Netmarble tem hoje dois jogos oficiais da franquia. Eles contam a mesma história de Sung Jinwoo, mas são
      pensados para públicos diferentes: um é gratuito e vive de compras dentro do jogo, o outro é pago e vendido uma vez.
    </p>
    <h3>Solo Leveling: Arise (celular e PC)</h3>
    <p>
      Lançado em <strong>8 de maio de 2024</strong> para Android, iOS e PC, é um RPG de ação gratuito. Você controla
      Jinwoo em fases curtas de combate em tempo real, com esquiva no tempo certo, contra-ataques e combos que mudam
      conforme a arma equipada. As missões seguem os arcos do webtoon e também trazem histórias inéditas.
    </p>
    <p>
      Além de Jinwoo, há <strong>caçadores</strong> como Cha Hae-in e Choi Jong-in, que entram como parceiros de equipe
      e trocam de lugar durante a luta. A evolução passa por armas, artefatos e habilidades, e o sistema de
      <strong> sombras</strong> permite usar soldados como Igris em combate. Novos caçadores e armas vêm por
      <strong> gacha</strong> (sorteio pago com moeda do jogo). Dá para avançar sem gastar, mas os personagens mais
      fortes custam tempo ou dinheiro, então defina um limite antes de comprar.
    </p>
    <h3>Solo Leveling: Arise Overdrive (PC, PS5 e Xbox)</h3>
    <p>
      É a versão completa e paga. Saiu primeiro no PC (Steam e Microsoft Store) e chegou ao <strong>PS5 e Xbox Series
      X|S em 3 de novembro de 2026</strong>, por <strong>US$ 39,99</strong> na edição padrão e <strong>US$ 44,99</strong>
      na Deluxe, que inclui um traje exclusivo de Jinwoo, emojis da Cha Hae-in e itens extras. O preço em reais
      varia conforme a loja; confira na PlayStation Store, Xbox Store ou Steam antes de comprar.
    </p>
    <p>
      A grande diferença é que o Overdrive <strong>não tem gacha</strong>: a evolução vem de jogar. O combate ganhou
      a <strong>Esquiva Extrema</strong> e o <strong>aparo perfeito</strong>, que abre um contra-ataque forte, além de
      combinações de armas e habilidades montadas pelo jogador. Há campanha solo com a história do webtoon e capítulos
      novos, e <strong>raids cooperativas para até 4 jogadores</strong> online (no console, exige PS Plus ou um plano
      elegível do Game Pass). A classificação é para adolescentes, por violência e sangue.
    </p>
    <p>
      <strong>Qual escolher?</strong> Se você quer jogar de graça no celular, o Arise basta. Se prefere pagar uma vez,
      jogar no controle e não lidar com sorteios, o Overdrive é a melhor opção.
    </p>
  </>
);

import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import {
  Clock, User, Calendar, VideoOff, Scale, ShieldAlert, ListChecks, HelpCircle,
} from "lucide-react";
import heroImg from "@/assets/discord-brasil-suspensao-lives-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const SLUG = "discord-brasil-suspensao-lives-2026";
const TITLE = "Proibições do Discord no Brasil: O Que Foi Suspenso, O Que Continua Funcionando e o Risco de Bloqueio";

const LINHA_DO_TEMPO = [
  {
    data: "22 de julho de 2026",
    fato: "Uma adolescente de 13 anos do Mato Grosso do Sul tira a própria vida durante uma transmissão ao vivo na plataforma, após ser coagida por outros usuários. A transmissão durou cerca de duas horas e não gerou alerta de risco máximo em tempo real, segundo apuração noticiada pelo Valor.",
  },
  {
    data: "6 e 7 de agosto de 2026",
    fato: "O ministro da AGU, Jorge Messias, anuncia que pedirá à Justiça a retirada do Discord do ar no Brasil e solicita ao Ministério da Justiça os dados para abrir uma ação civil pública, citando falhas na verificação de idade.",
  },
  {
    data: "7 de agosto de 2026",
    fato: "A ANPD instaura processo de fiscalização contra o Discord para apurar falhas na proteção de crianças e adolescentes.",
  },
  {
    data: "10 e 11 de agosto de 2026",
    fato: "O Discord entrega informações e uma proposta de medidas de proteção, e se reúne com representantes do governo e da agência.",
  },
  {
    data: "12 de agosto de 2026",
    fato: "A Superintendência de Fiscalização da ANPD expede medida preventiva determinando a suspensão das transmissões ao vivo no Brasil em três dias úteis, com base no ECA Digital.",
  },
  {
    data: "14 de agosto de 2026",
    fato: "O Discord pede reconsideração da decisão, questiona a competência da agência e diz que não conseguiria cumprir o prazo de três dias úteis.",
  },
  {
    data: "17 de agosto de 2026",
    fato: "A empresa anuncia o cumprimento da ordem e começa a desligar vídeo e compartilhamento de tela no Brasil. O CTO e cofundador Stanislav Vishnevskiy afirma que a plataforma trabalha \"de boa-fé\" com a ANPD para restabelecer os recursos.",
  },
];

const SUSPENSO = [
  "Transmissões ao vivo em servidores (o recurso \"Go Live\").",
  "Chamadas de vídeo, inclusive em conversas diretas.",
  "Compartilhamento de tela.",
];

const MANTIDO = [
  "Mensagens diretas e mensagens em servidores.",
  "Servidores e canais de texto.",
  "Canais e chamadas de voz.",
  "Envio de arquivos e imagens.",
];

const DiscordBrasilSuspensao2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-geek/20 text-geek rounded-full text-sm font-medium">
            Discord · Regulação · Comunidades
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Proibições do Discord no Brasil: O Que Foi Suspenso, O Que Continua Funcionando e o Risco de Bloqueio
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          Desde 17 de agosto de 2026, vídeo, live e compartilhamento de tela estão desligados no país por determinação da
          ANPD. As <strong>proibições do Discord no Brasil</strong> não são um bloqueio do aplicativo — mas existe uma
          ação da AGU pedindo exatamente isso. Veja a cronologia confirmada, a base legal, o que ainda funciona e quais
          são os próximos passos possíveis.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />18 de Agosto, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />11 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width={1280}
          height={720}
          src={heroImg}
          alt="Headset de jogo e celular exibindo ícone de vídeo desativado, com luzes verdes e amarelas e um martelo de juiz ao fundo"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-geek/10 to-background rounded-xl border border-geek/30">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <ListChecks className="h-5 w-5 text-geek" />
            Resumo do que está valendo agora
          </h2>
          <div className="space-y-2">
            {[
              { k: "Situação do aplicativo", v: "não está bloqueado no Brasil" },
              { k: "Recursos desligados desde 17/08/2026", v: "vídeo, live e compartilhamento de tela" },
              { k: "Quem determinou", v: "ANPD (medida preventiva de 12/08/2026)" },
              { k: "Base legal", v: "ECA Digital — Lei 15.211/2025, art. 6º" },
              { k: "Prazo dado à empresa", v: "3 dias úteis" },
              { k: "Multa possível por infração", v: "até R$ 50 milhões" },
              { k: "Bloqueio total", v: "depende de decisão judicial, não da agência" },
            ].map(({ k, v }) => (
              <div key={k} className="grid grid-cols-2 gap-2 py-2 border-b border-border/30 text-xs md:text-sm">
                <span className="text-muted-foreground break-words">{k}</span>
                <span className="text-right text-geek font-bold break-words">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <AdLeaderboard />

        <h2 id="o-que-mudou" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <VideoOff className="h-7 w-7 text-geek" />
          O Que Exatamente Foi Proibido
        </h2>
        <p>
          A confusão mais comum nesses dias é achar que o Discord "caiu" ou foi banido. Não foi. A medida preventiva da
          Agência Nacional de Proteção de Dados atinge um conjunto específico de funcionalidades — e a própria agência
          fez questão de registrar, no comunicado oficial de 12 de agosto, que a plataforma não está sendo bloqueada.
        </p>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          <div className="p-5 rounded-xl border border-destructive/40 bg-destructive/5">
            <h3 className="font-bold mb-3 text-destructive">Suspenso no Brasil</h3>
            <ul className="space-y-2 mb-0">
              {SUSPENSO.map((s) => (
                <li key={s} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-destructive font-bold">✕</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5 rounded-xl border border-geek/40 bg-geek/5">
            <h3 className="font-bold mb-3 text-geek">Continua funcionando</h3>
            <ul className="space-y-2 mb-0">
              {MANTIDO.map((s) => (
                <li key={s} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-geek font-bold">✓</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p>
          Na prática, o servidor da sua guilda continua de pé, o chat de voz do ranked continua funcionando e as DMs não
          foram tocadas. O que sumiu é a camada de imagem em tempo real: quem jogava com a tela compartilhada, transmitia
          gameplay para o servidor de amigos ou usava chamada de vídeo perdeu esses recursos até segunda ordem.
        </p>

        <AdInArticle />

        <h2 id="por-que" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <ShieldAlert className="h-7 w-7 text-geek" />
          Por Que a ANPD Determinou a Suspensão
        </h2>
        <p>
          O gatilho foi um caso grave. Na madrugada de 22 de julho de 2026, uma adolescente de 13 anos do Mato Grosso do
          Sul tirou a própria vida durante uma transmissão ao vivo, coagida e incentivada por outros usuários. Segundo o
          noticiário sobre a investigação da Polícia Civil estadual, a transmissão durou cerca de duas horas e não gerou
          um alerta de risco máximo em tempo real na plataforma.
        </p>
        <p>
          A ANPD abriu o processo de fiscalização em 7 de agosto e, cinco dias depois, concluiu haver "evidências
          robustas" de que a empresa não adotou medidas razoáveis para prevenir e mitigar riscos de exposição de crianças
          e adolescentes a conteúdos e práticas de indução, incitação ou auxílio à violência, à automutilação e ao
          suicídio — hipóteses previstas no artigo 6º, incisos II e III, do Estatuto Digital da Criança e do Adolescente.
        </p>

        <div className="not-prose my-8 p-5 rounded-xl border border-geek/40 bg-geek/5">
          <h3 className="font-bold mb-2 text-geek">O que é o "ECA Digital"</h3>
          <p className="text-sm text-muted-foreground mb-0">
            É o apelido da Lei 15.211/2025, em vigor desde 17 de março de 2026 e regulamentada pelo Decreto 12.880/2026.
            Ela vale para serviços de provável acesso por menores no Brasil, mesmo quando a empresa está sediada no
            exterior, e coloca a ANPD como órgão de regulamentação e fiscalização. Um dos pontos centrais é a aferição
            confiável de idade: perguntar a data de nascimento e aceitar a resposta deixou de ser suficiente nos casos em
            que a lei exige checagem confiável, e quanto maior o risco do recurso — mensagem privada, vídeo ao vivo,
            contato entre desconhecidos —, mais forte precisa ser o controle.
          </p>
        </div>

        <AdRectangle />

        <h2 id="linha-do-tempo" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Calendar className="h-7 w-7 text-geek" />
          Linha do Tempo Confirmada
        </h2>

        <div className="not-prose my-8 overflow-x-auto rounded-xl border border-geek/30">
          <table className="w-full text-xs md:text-sm">
            <thead className="bg-geek/10">
              <tr>
                <th className="p-3 text-left font-bold">Data</th>
                <th className="p-3 text-left font-bold">O que aconteceu</th>
              </tr>
            </thead>
            <tbody>
              {LINHA_DO_TEMPO.map((l) => (
                <tr key={l.data} className="border-t border-border/30 align-top">
                  <td className="p-3 font-semibold text-geek break-words whitespace-nowrap md:whitespace-normal">{l.data}</td>
                  <td className="p-3 text-muted-foreground break-words">{l.fato}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="bloqueio" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Scale className="h-7 w-7 text-geek" />
          O Discord Pode Ser Bloqueado de Vez?
        </h2>
        <p>
          Pode, mas não pela ANPD. A agência atua na esfera administrativa: pode determinar medidas preventivas, exigir
          correções e, ao fim do processo, aplicar as sanções do ECA Digital — que chegam a multa de até R$ 50 milhões
          por infração. A retirada do aplicativo do ar no país depende de decisão judicial, e é exatamente esse o
          caminho anunciado pela Advocacia-Geral da União, que pediu ao Ministério da Justiça os elementos para propor
          uma ação civil pública contra a empresa.
        </p>
        <p>
          Enquanto isso, o processo administrativo segue aberto. A suspensão de vídeo vale até que o Discord comprove a
          adoção de medidas efetivas de proteção — e, se a ANPD constatar irregularidades ao longo da apuração, ainda
          pode determinar medidas corretivas adicionais. A empresa, por sua vez, já sinalizou que quer restabelecer os
          recursos "o mais rápido possível" e mantém a discussão sobre a competência da agência para impor esse tipo de
          suspensão.
        </p>

        <AdInArticle />

        <h2 id="o-que-fazer" className="text-2xl font-bold mt-10 mb-6">O Que Muda Para Quem Usa o Discord no Dia a Dia</h2>
        <p>
          Para jogadores, a perda do compartilhamento de tela é o incômodo prático mais imediato: acabou o "deixa eu te
          mostrar" durante a partida e a live improvisada no canal do servidor. Comunidades que dependiam de vídeo — aulas,
          mentorias, sessões de RPG com câmera, watch parties — precisam de plano B enquanto a suspensão durar.
        </p>
        <p>
          Duas recomendações valem a pena aqui. A primeira: desconfie de qualquer instrução circulando em servidores
          sugerindo VPN, APK modificado ou "cliente alternativo" para recuperar o vídeo. Além de violar os termos de uso,
          instalar cliente não oficial é o vetor clássico de roubo de token e de conta. A segunda: se você administra um
          servidor com público adolescente, esse é o momento de revisar canais com conteúdo adulto, verificação de
          entrada e regras de contato por DM — o ECA Digital não fala só de plataformas gigantes, e responsabilidade por
          conteúdo em comunidade é assunto que já chegou aos tribunais brasileiros.
        </p>
        <p>
          Para quem cria conteúdo, a mudança é de rota: transmissões que aconteciam dentro do servidor precisam migrar
          para plataformas de live abertas, e vale avisar a comunidade pelo canal de texto em vez de sumir sem
          explicação. A parte boa é que voz, texto e servidores seguem intactos — a espinha dorsal do Discord continua
          funcionando normalmente no país.
        </p>

        <h2 id="faq" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <HelpCircle className="h-7 w-7 text-geek" />
          FAQ — Perguntas Frequentes Sobre as Proibições do Discord no Brasil
        </h2>
        <div className="space-y-3 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">O Discord foi banido no Brasil?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Não. O aplicativo continua disponível e funcionando. O que foi suspenso, por medida preventiva da ANPD de
              12 de agosto de 2026, são os recursos de vídeo: transmissões ao vivo, chamadas de vídeo e compartilhamento
              de tela, desligados pela empresa em 17 de agosto.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Quais recursos do Discord ainda funcionam?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Mensagens diretas, servidores, canais de texto, canais e chamadas de voz e envio de arquivos seguem
              disponíveis normalmente no Brasil, conforme comunicado da própria empresa.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Por que a ANPD suspendeu as lives do Discord?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Por falhas na proteção de crianças e adolescentes, apuradas após o suicídio de uma adolescente de 13 anos
              durante uma transmissão ao vivo em julho de 2026. A agência apontou ausência de medidas razoáveis para
              prevenir riscos previstos no artigo 6º do ECA Digital.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">O Discord pode ser bloqueado totalmente no país?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Só por decisão da Justiça. A AGU anunciou em agosto de 2026 que pediria a retirada da plataforma do ar por
              meio de ação civil pública. A ANPD, na esfera administrativa, pode aplicar medidas corretivas e multa de
              até R$ 50 milhões por infração, mas não determina o bloqueio do aplicativo.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Quando o vídeo volta a funcionar?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Não há data. A suspensão vale até que a empresa comprove à ANPD a adoção de medidas efetivas de proteção a
              crianças e adolescentes. O Discord afirmou estar em diálogo com a agência para restabelecer os recursos.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Usar VPN para liberar o vídeo é seguro?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Não recomendamos. Contornar uma restrição determinada por autoridade brasileira pode violar os termos de
              uso da plataforma, e clientes modificados divulgados como "solução" são um vetor conhecido de roubo de
              token e sequestro de conta.
            </p>
          </div>
        </div>
      </div>

      <EditorialTake category="geek" title="Análise do Marcos: o recado não é sobre o Discord, é sobre o vídeo ao vivo">
        <p>
          O detalhe mais relevante dessa história é a cirurgia. A ANPD não desligou o aplicativo: desligou o recurso onde
          o dano aconteceu. Isso é uma mudança de postura regulatória no Brasil — em vez do bloqueio total, que sempre
          soou desproporcional e punia milhões de usuários por um problema pontual, a agência mirou a funcionalidade
          específica e deixou o resto de pé. Para quem usa a plataforma, é a diferença entre perder o compartilhamento de
          tela e perder o servidor inteiro.
        </p>
        <p>
          O que me parece subestimado é o alcance disso. Vídeo ao vivo em ambiente fechado, com contato entre
          desconhecidos e sem checagem confiável de idade, é uma descrição que cabe em muito mais serviço do que só o
          Discord. Se o ECA Digital seguir sendo aplicado nesse formato — medida preventiva rápida, funcionalidade
          suspensa, prazo curto —, a próxima notificação pode chegar a plataformas de jogo, de streaming social e a apps
          de comunidade que hoje se acham fora do radar. Vale acompanhar sem alarmismo: o texto da lei existe desde 2025,
          e agora ele começou a ter dente.
        </p>
      </EditorialTake>

      <ArticleSources
        category="geek"
        sources={[
          {
            title: "Em medida preventiva, ANPD determina que Discord suspenda transmissões ao vivo no Brasil",
            url: "https://www.gov.br/anpd/pt-br/assuntos/noticias/em-medida-preventiva-anpd-determina-que-discord-suspenda-transmissoes-ao-vivo-no-brasil",
            publisher: "ANPD — Agência Nacional de Proteção de Dados",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Discord responde à ANPD e diz que suspendeu lives no Brasil",
            url: "https://g1.globo.com/politica/noticia/2026/08/17/discord-responde-a-anpd-e-diz-que-suspendeu-lives-no-brasil.ghtml",
            publisher: "g1",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Discord começa a suspender chamadas de vídeo e compartilhamento de tela",
            url: "https://www1.folha.uol.com.br/cotidiano/2026/08/discord-comeca-a-suspender-chamadas-de-video-e-compartilhamento-de-tela.shtml",
            publisher: "Folha de S.Paulo",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Suspensão de vídeos no Discord cumpre decisão da ANPD, mas plataforma segue sob investigação",
            url: "https://valor.globo.com/empresas/noticia/2026/08/17/suspensao-de-videos-no-discord-cumpre-decisao-da-anpd-mas-plataforma-segue-sob-investigacao.ghtml",
            publisher: "Valor Econômico",
            accessedAt: "Agosto 2026",
          },
          {
            title: "AGU vai pedir à Justiça bloqueio da plataforma Discord",
            url: "https://valor.globo.com/brasil/noticia/2026/08/07/agu-vai-pedir-a-justica-bloqueio-da-plataforma-discord.ghtml",
            publisher: "Valor Econômico",
            accessedAt: "Agosto 2026",
          },
          {
            title: "O que acontece com o Discord após suspensão de transmissões ao vivo no Brasil",
            url: "https://g1.globo.com/politica/noticia/2026/08/12/o-que-acontece-com-o-discord-apos-suspensao-de-transmissoes-ao-vivo-no-brasil-a-pedido-da-anpd.ghtml",
            publisher: "g1",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Decreto nº 12.880/2026 — regulamenta a Lei nº 15.211/2025 (ECA Digital)",
            url: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/decreto/d12880.htm",
            publisher: "Planalto — Presidência da República",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Mecanismos confiáveis de aferição de idade — orientações preliminares",
            url: "https://www.gov.br/anpd/pt-br/assuntos/eca-digital/mecanismos-confiaveis-de-afericao-de-idade-orientacoes-preliminares.pdf/@@download/file",
            publisher: "ANPD",
            accessedAt: "Agosto 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="geek" />
    </article>
  );
};

export default DiscordBrasilSuspensao2026;

/*
 * PAGE_META — adicionar em DynamicSEO.tsx dentro do objeto PAGE_META:
 *
 * "/post/consorcio-como-investimento-2026": {
 *   title: "Consórcio em 2026: Vale a Pena? A Conta Real com Taxas, INCC e Quando Compensa",
 *   description: "Consórcio imobiliário e de veículos em 2026: taxa de administração de 15% a 25%, correção pelo INCC, fundo de reserva, contemplação imprevisível e multa por desistência. A conta real versus financiamento e quando o consórcio realmente compensa. Regulado pelo Banco Central.",
 *   keywords: "consórcio 2026 vale a pena, consórcio imobiliário 2026, taxa administração consórcio, INCC consórcio, carta de crédito consórcio, consórcio vs financiamento, lance consórcio, FGTS consórcio, consórcio como investimento, desistência consórcio multa",
 * },
 */

import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import {
  Clock, User, Calendar, AlertTriangle,
  DollarSign, Shield, Lightbulb, CheckCircle, XCircle, BarChart3
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/consorcio-investimento-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const ConsorcioInvestimento2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "consorcio-como-investimento-2026",
      "Consórcio em 2026: A Conta Real com Taxas, INCC e Quando Compensa",
      "invest"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
            Consórcio · Planejamento · Imóvel · Veículo · 2026
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Consórcio em 2026: A Conta Real — Taxa de 15% a 25%, INCC e Quando Compensa de Verdade
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          A propaganda vende consórcio como "sem juros". A conta real tem <strong>taxa de administração de 15% a 25%</strong> sobre o valor do bem, <strong>correção anual pelo INCC</strong> (que sobe mais que o IPCA), fundo de reserva de 1% a 5% e contemplação que pode levar 10 a 15 anos. Para o imóvel certo, no perfil certo, compensa — e pode economizar R$ 300 mil frente ao financiamento. Para o perfil errado, é um contrato de 200 parcelas com saída cara.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />Julho de 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchpriority="high"
          loading="eager"
          decoding="async"
          src={heroImg}
          alt="Consórcio como investimento em 2026 — conta real com taxas e INCC"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        {/* Comparativo consórcio vs financiamento */}
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-invest/10 to-background rounded-xl border border-invest/30">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-invest" />
            Consórcio vs Financiamento — Carta de R$ 500.000 em 200 meses
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: "Consórcio — Total pago (s/ INCC)", valor: "~R$ 600.000", cor: "text-yellow-400", obs: "Taxa adm. de 20% + fundo de reserva de 2%" },
              { label: "Financiamento — Total pago (10,5% a.a.)", valor: "~R$ 900.000–R$ 1M", cor: "text-red-400", obs: "Juros compostos sobre saldo devedor por 200 meses" },
              { label: "Economia potencial", valor: "R$ 300.000–R$ 400.000", cor: "text-green-400", obs: "Mas: no financiamento você tem o imóvel desde o 1º mês" },
              { label: "Contemplação média (sem lance)", valor: "5 a 12 anos", cor: "text-yellow-400", obs: "Contemplação por sorteio — imprevisível" },
              { label: "INCC 2025 (correção da carta)", valor: "7,4% ao ano", cor: "text-yellow-400", obs: "Acima do IPCA: parcelas sobem ano a ano" },
              { label: "Multa por desistência", valor: "20%–30% das parcelas pagas", cor: "text-red-400", obs: "Recebe o saldo restante apenas ao fim do grupo" },
            ].map(({ label, valor, cor, obs }) => (
              <div key={label} className="p-3 bg-card/50 rounded-lg border border-border/40">
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className={`font-bold text-base ${cor}`}>{valor}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{obs}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">Fonte: Habitar.io, Adriano Freire Finanças, Critérios Imobiliários (jul/26). Valores são estimativas sem considerar a correção completa pelo INCC ao longo do prazo.</p>
        </div>

        <AdLeaderboard />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          Como o Consórcio Funciona de Verdade: Sem Juros, Mas Não Sem Custo
        </h2>
        <p>
          O consórcio é regulado no Brasil pela <strong>Lei 11.795/2008</strong> e pela <strong>Resolução BCB 285/2023</strong> do Banco Central, que define as regras de funcionamento, os limites de taxas e as obrigações das administradoras. O mecanismo básico é o de uma poupança coletiva: um grupo de pessoas contribui mensalmente para um fundo comum gerenciado por uma administradora autorizada pelo Banco Central. Esse fundo é usado para contemplar um ou mais participantes por mês — via sorteio aleatório ou via lance, um valor adicional ofertado voluntariamente por quem quer ser contemplado antes do sorteio. Ao ser contemplado, o participante recebe a carta de crédito — não o dinheiro em conta — para comprar o bem específico definido no contrato.
        </p>
        <p>
          A propaganda "sem juros" é tecnicamente correta no sentido de que o consórcio não aplica juros compostos sobre o saldo devedor, como faz um financiamento bancário. Mas dizer "sem custo" é enganoso: existem três encargos que compõem o custo real do consórcio e que precisam ser entendidos antes de qualquer assinatura. O primeiro é a <strong>taxa de administração</strong> — o valor cobrado pela administradora pelo serviço de gestão do grupo. Em 2026, essa taxa varia de <strong>15% a 25% do valor da carta de crédito</strong>, dependendo da administradora, do prazo e do bem. Uma carta de R$ 500.000 com taxa de 20% terá R$ 100.000 diluídos nas parcelas ao longo do plano. O segundo encargo é o <strong>fundo de reserva</strong> — uma provisão de 1% a 5% do valor da carta para cobrir inadimplências dos demais participantes e garantir a sustentabilidade do grupo. O terceiro é a <strong>correção monetária da carta e das parcelas</strong>: em consórcios imobiliários, o indexador padrão é o INCC (Índice Nacional da Construção Civil), que em 2025 acumulou alta de 7,4% — bem acima do IPCA de 5,5%. Isso significa que as parcelas do consórcio não são fixas: elas sobem todo ano pelo INCC, tornando a expressão "parcela fixa" tecnicamente incorreta.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          A Conta Real: Consórcio vs Financiamento vs Investimento Paralelo
        </h2>
        <p>
          Para tomar uma decisão bem fundamentada, é preciso comparar o consórcio com as duas alternativas mais comuns: o financiamento bancário e a estratégia de investir mensalmente enquanto poupa para a compra à vista ou como entrada.
        </p>
        <p>
          No <strong>financiamento</strong>, você tem o imóvel desde o primeiro mês — e paga por isso. Uma carta de R$ 500.000 em 200 meses (16,7 anos) a 10,5% ao ano no Sistema de Amortização Constante (SAC) resulta em um total pago próximo de R$ 900.000 a R$ 1 milhão, dependendo dos seguros e taxas adicionais. O consórcio com taxa de 20% no mesmo prazo resulta em um total de aproximadamente R$ 600.000 — antes da correção pelo INCC. Já descontando o INCC acumulado sobre as parcelas futuras, o custo real do consórcio se aproxima de R$ 700.000 a R$ 750.000 — ainda muito abaixo do financiamento. A diferença de R$ 200.000 a R$ 300.000 é real e significativa. O problema, como aponta a análise do Habitar.io de abril de 2026, é o detalhe crítico: <strong>no financiamento você tem o imóvel desde o mês 1</strong>. No consórcio, você pode esperar 10 anos para ser contemplado. E enquanto espera, continua pagando aluguel.
        </p>
        <p>
          Na estratégia de <strong>investimento paralelo</strong>, o raciocínio é: ao invés de entrar no consórcio, invista a mesma parcela mensal em Tesouro Selic ou CDB enquanto o saldo acumula para uma entrada robusta ou compra à vista. Com Selic em 14,25% e parcelas de R$ 3.000 ao mês investidas no Tesouro Selic, em 5 anos o investidor acumula aproximadamente R$ 247.000 — o suficiente para uma entrada de 30% a 50% num imóvel de R$ 500.000 a R$ 800.000 e um financiamento com parcelas muito menores. Esse caminho faz mais sentido para quem não tem pressa e quer manter controle total sobre o capital, sem a multa de desistência e sem depender do cronograma imprevisível de sorteios.
        </p>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-invest" />
          O Lance e o FGTS: As Duas Ferramentas Que Mudam o Cálculo
        </h2>
        <p>
          O consórcio tem dois mecanismos que podem transformar o produto de uma espera passiva de 10 anos em uma ferramenta eficiente de aquisição de imóvel em prazo razoável: o <strong>lance</strong> e o uso do <strong>FGTS</strong>.
        </p>
        <p>
          O <strong>lance</strong> é um valor adicional que o participante oferta voluntariamente em determinado mês para concorrer à contemplação antes do sorteio. Funciona como um leilão: quem oferta o maior percentual sobre o valor da carta de crédito é contemplado naquele mês. Há dois tipos de lance: o <strong>lance livre</strong>, em que o participante usa recursos próprios fora do consórcio, e o <strong>lance embutido</strong>, em que parte do valor da própria carta é usada como lance — o que reduz o valor disponível para compra do imóvel mas não exige desembolso extra imediato. Para quem tem dinheiro disponível e quer ser contemplado rapidamente, estratégia de lance livre em grupos com poucos participantes competindo pode resultar em contemplação nos primeiros 6 a 18 meses — transformando o consórcio numa forma de comprar imóvel com custo muito inferior ao financiamento sem precisar esperar décadas.
        </p>
        <p>
          O <strong>FGTS</strong> pode ser usado no consórcio imobiliário de três formas: como lance (para aumentar as chances de contemplação antecipada), para complementar o valor da carta de crédito na compra do imóvel, ou para amortizar o saldo devedor das parcelas após a contemplação. A condição é que o imóvel seja residencial, o participante não tenha outro financiamento ativo pelo SFH em nenhuma parte do Brasil e o bem esteja dentro dos limites do Sistema Financeiro da Habitação. Para trabalhadores CLT com saldo relevante de FGTS acumulado, essa combinação — FGTS como lance + consórcio com taxa moderada — pode ser a forma mais eficiente de usar o fundo de garantia sem as restrições de renda do MCMV.
        </p>

        <AdRectangle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <XCircle className="h-7 w-7 text-invest" />
          O Risco Que Ninguém Conta: Desistência, Inadimplência e Administradora Problemática
        </h2>
        <p>
          O consórcio é um contrato de longo prazo com saída cara. A desistência antes do encerramento do grupo resulta em multa que, na maioria dos regulamentos em vigor em 2026, fica entre 20% e 30% das parcelas já pagas pela taxa de administração — e o saldo restante (o que foi para o fundo comum, descontada a multa e eventuais encargos) só é devolvido ao desistente <strong>ao final do grupo</strong>, que pode estar décadas à frente. Isso significa que um participante que desiste no meio do prazo fica sem o dinheiro e sem o bem por anos — às vezes até que os demais membros do grupo sejam todos contemplados. Em contextos de emergência financeira, essa rigidez pode transformar o consórcio numa armadilha de liquidez, especialmente para quem não tem reserva de emergência sólida separada.
        </p>
        <p>
          Existe um mercado secundário de cotas de consórcio — é possível transferir a cota para outra pessoa, com autorização da administradora — que pode oferecer saída com deságio menor do que a multa contratual, dependendo do estágio do grupo e do valor da carta. Mas esse mercado não tem transparência nem liquidez garantida: depende de encontrar um comprador interessado no preço e nas condições específicas daquela cota.
        </p>
        <p>
          A escolha da administradora é outro fator crítico frequentemente negligenciado. O Banco Central publica uma lista de todas as administradoras de consórcio autorizadas a operar no Brasil — verificar antes de assinar qualquer contrato é obrigatório. Administradoras não autorizadas operam ilegalmente e sem as proteções regulatórias previstas na Lei 11.795/2008. Mesmo entre autorizadas, a qualidade de gestão varia significativamente: grupos mal gerenciados com alta inadimplência podem ter o fundo de reserva consumido, atrasando contemplações e gerando conflitos. Grandes administradoras com histórico longo — Embracon, Caixa Consórcios, Sicredi, Porto Seguro — tendem a ter grupos mais estáveis e processos de contemplação mais previsíveis.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <CheckCircle className="h-7 w-7 text-invest" />
          Quando o Consórcio Faz Sentido em 2026 — e Quando Não Faz
        </h2>

        <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
            <h3 className="font-bold text-sm text-green-400 mb-3 flex items-center gap-2">
              <CheckCircle className="h-4 w-4" /> Quando FAZ sentido
            </h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              {[
                "Você tem FGTS acumulado e pode usá-lo como lance para contemplação antecipada",
                "Não tem pressa para usar o bem — horizonte de 5 a 15 anos é real para você",
                "Não pagaria entrada nem financiamento de outra forma — consórcio como poupança forçada",
                "Quer comprar à vista com desconto de 10% a 15% sobre o preço pedido pelo vendedor",
                "Investidor imobiliário experiente que usa a carta como alavancagem planejada",
                "Pretende transferir a cota para outro bem diferente do original se as prioridades mudarem",
              ].map(i => <li key={i} className="flex items-start gap-1.5"><span className="text-green-400 mt-0.5">✓</span>{i}</li>)}
            </ul>
          </div>
          <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">
            <h3 className="font-bold text-sm text-red-400 mb-3 flex items-center gap-2">
              <XCircle className="h-4 w-4" /> Quando NÃO faz sentido
            </h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              {[
                "Precisa do bem em menos de 2 a 3 anos — sorteio é imprevisível",
                "Não tem reserva de emergência sólida — inadimplência no consórcio tem multas sérias",
                "Está comparando com financiamento porque 'não tem juros' — a taxa de adm. é custo real",
                "Quer 'investir' no consórcio esperando rentabilidade — consórcio não rende, só compra bem",
                "A administradora não está na lista do Banco Central — risco de golpe ou irregularidade",
                "Está endividado em crédito rotativo — priorize quitar dívidas antes de qualquer consórcio",
              ].map(i => <li key={i} className="flex items-start gap-1.5"><span className="text-red-400 mt-0.5">✗</span>{i}</li>)}
            </ul>
          </div>
        </div>

        <div className="not-prose mt-8 p-4 bg-secondary rounded-xl text-xs text-muted-foreground flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
          <span><strong>Aviso Legal:</strong> Este artigo é educacional e não constitui recomendação de investimento ou consultoria imobiliária. Consórcio é regulado pelo Banco Central — verifique sempre se a administradora está autorizada antes de contratar. Consulte um planejador financeiro certificado para análise da sua situação específica.</span>
        </div>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: consórcio é planejamento, não investimento — e a diferença importa muito">
        <p>
          Toda semana alguém me pergunta se consórcio é bom "investimento". A resposta honesta é: consórcio não é investimento — é uma ferramenta de planejamento patrimonial. Ele não rende. Ele compra um bem com custo menor do que o financiamento, mas com prazo imprevisível. Para quem tem paciência, FGTS disponível e não está pagando aluguel alto enquanto espera, é um instrumento excelente. Para os demais, é uma camisa de força cara com saída difícil.
        </p>
        <p className="mt-2">
          A pergunta certa não é "consórcio ou financiamento?" — é "qual o meu horizonte para ter o imóvel?" Se for menos de 3 anos, financiamento ou compra à vista. Se for 5 anos ou mais e você tem disciplina de não tocar no dinheiro, consórcio com lance via FGTS pode ser a opção mais inteligente financeiramente. <strong>Mas se a expectativa é ganhar dinheiro com consórcio, a resposta é simples: não vai acontecer. Procure um ETF.</strong>
        </p>
      </EditorialTake>

      <ArticleSources
        category="invest"
        sources={[
          {
            title: "Consórcio Imobiliário em 2026: 'Sem Juros' Não É Sem Custo — A Conta Real",
            url: "https://criteriosimobiliarios.com.br/blog/consorcio-imobiliario.html",
            publisher: "Critérios Imobiliários (CII)",
            accessedAt: "Julho 2026",
          },
          {
            title: "Consórcio Vale a Pena em 2026? A Conta Real",
            url: "https://www.adrianofreire.com.br/blog/consorcio-vale-a-pena-2026",
            publisher: "Adriano Freire Finanças",
            accessedAt: "Julho 2026",
          },
          {
            title: "Consórcio Imobiliário em 2026: Vale a Pena? Análise com Números Reais",
            url: "https://habitar.io/blog/2026/04/consorcio-imobiliario-2026-vale-a-pena",
            publisher: "Habitar",
            accessedAt: "Julho 2026",
          },
          {
            title: "Lei nº 11.795/2008 — Sistema de Consórcio: Base Legal",
            url: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/lei/l11795.htm",
            publisher: "Presidência da República / Planalto",
            accessedAt: "Julho 2026",
          },
          {
            title: "Banco Central do Brasil — Lista de Administradoras de Consórcio Autorizadas",
            url: "https://www.bcb.gov.br/estabilidadefinanceira/administradorasconsorcio",
            publisher: "Banco Central do Brasil",
            accessedAt: "Julho 2026",
          },
          {
            title: "Consórcio Imobiliário em 2026: Por Que a Carta de Crédito à Vista Permite Desconto de 15%",
            url: "https://larya.com.br/blog/vale-a-pena-fazer-um-consorcio-imobiliario-em-2026-confira/",
            publisher: "Larya Imóveis",
            accessedAt: "Julho 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="consorcio-como-investimento-2026" />
      <CommentSection
        postId="consorcio-como-investimento-2026"
        postTitle="Consórcio em 2026: A Conta Real com Taxas, INCC e Quando Compensa"
        category="invest"
      />
    </article>
  );
};

export default ConsorcioInvestimento2026;

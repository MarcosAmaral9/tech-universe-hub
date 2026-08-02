import { Megaphone, ShieldCheck, Cookie } from "lucide-react";
import { Link } from "react-router-dom";
import DynamicSEO from "@/components/DynamicSEO";

/**
 * /publicidade — Política de Publicidade e Transparência Comercial.
 * Exigida (na prática) pelas políticas do Google AdSense: explica como
 * anúncios, afiliados e conteúdo patrocinado funcionam no site.
 */
const AdvertisingPolicyPage = () => (
  <>
    <DynamicSEO />
    <div className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Megaphone className="h-10 w-10 text-primary" />
          <h1 className="font-display text-3xl md:text-4xl font-bold">Política de Publicidade</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Como o VICIO&lt;CODE&gt; se sustenta e como separamos conteúdo editorial de publicidade.
        </p>
        <p className="text-sm text-muted-foreground mt-2">Última atualização: 28 de julho de 2026</p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
        <section className="p-6 bg-secondary/50 rounded-xl border border-border not-prose">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-6 w-6 text-primary mt-1 shrink-0" />
            <div>
              <h2 className="text-xl font-bold mb-2 mt-0">Independência editorial</h2>
              <p className="text-muted-foreground mb-0">
                Nenhum anunciante, parceiro ou marca tem influência sobre a pauta, o texto ou a nota final
                de qualquer artigo publicado aqui. As análises assinadas por Marcos Amaral são opinião
                editorial independente. Se um conteúdo for pago, patrocinado ou produzido em parceria,
                isso é declarado de forma clara no topo do artigo.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>Anúncios exibidos no site</h2>
          <p>
            O VICIO&lt;CODE&gt; é gratuito e sustentado por publicidade. Utilizamos o
            <strong> Google AdSense</strong> como rede de anúncios. Os blocos publicitários são sempre
            identificados com a etiqueta <strong>“Publicidade”</strong> e ficam visualmente separados do
            conteúdo editorial — nunca imitamos botões, menus ou parágrafos do artigo.
          </p>
          <ul>
            <li>Não exibimos anúncios em páginas legais, de login, de perfil ou de configurações.</li>
            <li>Não usamos pop-ups que cubram o conteúdo principal na abertura da página.</li>
            <li>Não incentivamos cliques em anúncios de nenhuma forma.</li>
            <li>O bloco fixo na base do mobile pode ser fechado a qualquer momento pelo leitor.</li>
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-2">
            <Cookie className="h-6 w-6 text-primary" />
            <h2 className="mt-0">Cookies e personalização</h2>
          </div>
          <p>
            O Google e seus parceiros podem usar cookies para exibir anúncios com base em visitas
            anteriores a este e a outros sites. Utilizamos o Google Funding Choices para coletar seu
            consentimento conforme a LGPD e o GDPR — você pode aceitar, recusar ou alterar sua escolha a
            qualquer momento. Detalhes completos na{" "}
            <Link to="/privacidade">Política de Privacidade</Link>. Você também pode desativar a
            publicidade personalizada nas{" "}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
              configurações de anúncios do Google
            </a>
            .
          </p>
        </section>

        <section>
          <h2>Conteúdo financeiro</h2>
          <p>
            Artigos da categoria Finanças têm caráter exclusivamente educativo. Não somos consultores de
            valores mobiliários e não fazemos recomendação de compra ou venda de ativos. Todo artigo
            financeiro traz aviso legal explícito ao final.
          </p>
        </section>

      </div>
    </div>
  </>
);

export default AdvertisingPolicyPage;

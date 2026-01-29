import { Link } from "react-router-dom";

const PrivacyPolicyPage = () => {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Política de <span className="text-gradient">Privacidade</span>
        </h1>
        <p className="text-muted-foreground mb-8">
          Última atualização: 29 de Janeiro de 2026
        </p>

        <div className="prose prose-lg dark:prose-invert">
          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">1. Introdução</h2>
            <p className="text-muted-foreground mb-4">
              O VICIO&lt;CODE&gt; valoriza a privacidade dos seus visitantes. Esta Política de Privacidade 
              explica quais informações coletamos, como as utilizamos e quais são seus direitos 
              em relação aos seus dados pessoais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">2. Dados Coletados</h2>
            <p className="text-muted-foreground mb-4">
              Podemos coletar os seguintes tipos de informações:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                <strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, 
                tempo de permanência e dados de interação com o site.
              </li>
              <li>
                <strong>Cookies:</strong> utilizamos cookies para melhorar sua experiência, 
                personalizar conteúdo e exibir anúncios relevantes.
              </li>
              <li>
                <strong>Dados fornecidos voluntariamente:</strong> caso você entre em contato conosco 
                ou deixe comentários, podemos coletar seu nome e informações de contato.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">3. Uso dos Dados</h2>
            <p className="text-muted-foreground mb-4">
              Os dados coletados são utilizados para:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Melhorar a experiência de navegação no site</li>
              <li>Personalizar o conteúdo apresentado</li>
              <li>Exibir anúncios personalizados através de parceiros de publicidade</li>
              <li>Analisar métricas de uso para aprimorar o site</li>
              <li>Responder a solicitações ou dúvidas enviadas por você</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">4. Cookies e Tecnologias de Rastreamento</h2>
            <p className="text-muted-foreground mb-4">
              Utilizamos cookies e tecnologias similares para:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                <strong>Cookies essenciais:</strong> necessários para o funcionamento básico do site.
              </li>
              <li>
                <strong>Cookies de análise:</strong> nos ajudam a entender como os visitantes 
                interagem com o site (ex: Google Analytics).
              </li>
              <li>
                <strong>Cookies de publicidade:</strong> usados para exibir anúncios relevantes 
                aos seus interesses (ex: Google AdSense).
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">5. Compartilhamento de Dados</h2>
            <p className="text-muted-foreground mb-4">
              Podemos compartilhar seus dados com:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                <strong>Parceiros de publicidade:</strong> como Google AdSense, para exibição 
                de anúncios personalizados.
              </li>
              <li>
                <strong>Ferramentas de análise:</strong> como Google Analytics, para análise 
                de tráfego e comportamento dos usuários.
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Não vendemos suas informações pessoais a terceiros.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">6. Seus Direitos</h2>
            <p className="text-muted-foreground mb-4">
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Acessar os dados que temos sobre você</li>
              <li>Solicitar a correção de dados incorretos</li>
              <li>Solicitar a exclusão dos seus dados</li>
              <li>Revogar o consentimento para o uso de cookies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">7. Contato</h2>
            <p className="text-muted-foreground">
              Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato 
              através das nossas redes sociais.
            </p>
          </section>

          <div className="mt-12 pt-6 border-t border-border">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              ← Voltar para a página inicial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

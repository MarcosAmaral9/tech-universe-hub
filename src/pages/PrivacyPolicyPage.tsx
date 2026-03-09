import { Link } from "react-router-dom";

const PrivacyPolicyPage = () => {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Política de <span className="text-gradient">Privacidade</span>
        </h1>
        <p className="text-muted-foreground mb-8">
          Última atualização: 09 de Março de 2026
        </p>

        <div className="prose prose-lg dark:prose-invert">
          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">1. Introdução</h2>
            <p className="text-muted-foreground mb-4">
              O VICIO&lt;CODE&gt; valoriza a privacidade dos seus visitantes e usuários registrados. Esta Política de Privacidade 
              explica quais informações coletamos, como as utilizamos e quais são seus direitos 
              em relação aos seus dados pessoais — tanto no site quanto no aplicativo (PWA).
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
                tempo de permanência e dados de interação com o site e o app.
              </li>
              <li>
                <strong>Cookies e armazenamento local:</strong> utilizamos cookies e localStorage para melhorar sua experiência, 
                salvar preferências (tema, cor de destaque, tamanho de fonte), rastrear posts visualizados 
                e personalizar conteúdo.
              </li>
              <li>
                <strong>Dados de conta:</strong> ao criar uma conta, coletamos seu e-mail, nome e apelido (nickname). 
                Opcionalmente, você pode fornecer uma foto de perfil (avatar).
              </li>
              <li>
                <strong>Dados de comentários:</strong> ao comentar em artigos, armazenamos o conteúdo do comentário, 
                seu nome de exibição (apelido) e a data do comentário, vinculados à sua conta.
              </li>
              <li>
                <strong>Dados de personalização:</strong> para usuários logados, rastreamos localmente os posts visualizados 
                para oferecer recomendações personalizadas de conteúdo que você ainda não leu.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">3. Uso dos Dados</h2>
            <p className="text-muted-foreground mb-4">
              Os dados coletados são utilizados para:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Gerenciar sua conta e autenticação no site e app</li>
              <li>Exibir seu apelido e avatar nos comentários</li>
              <li>Personalizar a experiência de navegação (tema, cor, fonte)</li>
              <li>Recomendar posts relacionados que você ainda não leu</li>
              <li>Moderar comentários para manter um ambiente seguro</li>
              <li>Exibir anúncios personalizados através de parceiros de publicidade</li>
              <li>Analisar métricas de uso para aprimorar o site e o app</li>
              <li>Responder a solicitações ou dúvidas enviadas por você</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">4. Cookies, LocalStorage e Tecnologias de Rastreamento</h2>
            <p className="text-muted-foreground mb-4">
              Utilizamos cookies e tecnologias similares para:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                <strong>Cookies essenciais:</strong> necessários para o funcionamento básico do site, 
                autenticação e sessão do usuário.
              </li>
              <li>
                <strong>LocalStorage:</strong> armazenamento local usado para salvar preferências de tema, 
                cor de destaque, tamanho de fonte, consentimento de cookies, e histórico de posts visualizados 
                (vinculado ao ID do usuário para quem está logado).
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
              Dados salvos no localStorage podem ser limpos nas configurações do navegador ou na página de 
              configurações do site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">5. Armazenamento e Segurança dos Dados</h2>
            <p className="text-muted-foreground mb-4">
              Os dados da sua conta, perfil e comentários são armazenados de forma segura em nosso banco de dados 
              com políticas de segurança em nível de linha (RLS). Isso garante que:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Apenas você pode editar seu próprio perfil</li>
              <li>Apenas você pode excluir seus próprios comentários</li>
              <li>Senhas são gerenciadas de forma segura pelo sistema de autenticação</li>
              <li>Avatares são armazenados em armazenamento seguro na nuvem</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">6. Compartilhamento de Dados</h2>
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
              Não vendemos suas informações pessoais a terceiros. Seus comentários são visíveis 
              publicamente com o apelido que você escolheu.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">7. Seus Direitos</h2>
            <p className="text-muted-foreground mb-4">
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Acessar os dados que temos sobre você</li>
              <li>Solicitar a correção de dados incorretos</li>
              <li>Solicitar a exclusão dos seus dados e conta</li>
              <li>Revogar o consentimento para o uso de cookies</li>
              <li>Excluir seus comentários a qualquer momento</li>
              <li>Alterar seu apelido, nome e avatar nas configurações da conta</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">8. Aplicativo (PWA)</h2>
            <p className="text-muted-foreground mb-4">
              O VICIO&lt;CODE&gt; está disponível como Progressive Web App (PWA). O app utiliza 
              as mesmas políticas de privacidade e coleta de dados descritas acima. Funcionalidades 
              adicionais do app incluem notificações de atualização e acesso offline a conteúdo 
              previamente carregado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">9. Contato</h2>
            <p className="text-muted-foreground">
              Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato 
              através da nossa <Link to="/contato" className="text-primary hover:underline">página de contato</Link> ou 
              das nossas redes sociais.
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

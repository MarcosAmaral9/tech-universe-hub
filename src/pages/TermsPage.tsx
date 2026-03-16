import { Link } from "react-router-dom";
import DynamicSEO from "@/components/DynamicSEO";

const TermsPage = () => {
  return (
    <>
      <DynamicSEO />
      <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Termos e <span className="text-gradient">Condições</span>
        </h1>
        <p className="text-muted-foreground mb-8">
          Última atualização: 09 de Março de 2026
        </p>

        <div className="prose prose-lg dark:prose-invert">
          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground mb-4">
              Ao acessar e utilizar o site e o aplicativo (PWA) VICIO&lt;CODE&gt;, você concorda com estes Termos e Condições 
              de uso. Se você não concordar com algum destes termos, por favor, não utilize a plataforma.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">2. Uso da Plataforma</h2>
            <p className="text-muted-foreground mb-4">
              O conteúdo deste site e app é fornecido apenas para fins informativos e de entretenimento. 
              Você concorda em:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Usar a plataforma de forma legal e respeitosa</li>
              <li>Não reproduzir, duplicar ou copiar conteúdo sem autorização</li>
              <li>Não utilizar a plataforma para fins comerciais não autorizados</li>
              <li>Não tentar comprometer a segurança do site ou dos dados de outros usuários</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">3. Contas de Usuário</h2>
            <p className="text-muted-foreground mb-4">
              Ao criar uma conta no VICIO&lt;CODE&gt;, você concorda que:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>É responsável por manter a segurança das credenciais da sua conta</li>
              <li>As informações fornecidas (nome, apelido, e-mail) são verdadeiras</li>
              <li>Seu apelido (nickname) não deve conter linguagem ofensiva, links ou conteúdo impróprio</li>
              <li>Não deve compartilhar sua conta com terceiros</li>
              <li>Pode redefinir sua senha a qualquer momento através da funcionalidade de recuperação</li>
              <li>Pode alterar seu apelido, nome e avatar nas configurações da conta</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">4. Comentários</h2>
            <p className="text-muted-foreground mb-4">
              A funcionalidade de comentários está disponível exclusivamente para usuários logados. 
              Ao comentar, você concorda que:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Seu apelido (nickname) será exibido publicamente junto ao comentário</li>
              <li>Comentários são moderados automaticamente conforme nossa <Link to="/politica-conteudo" className="text-primary hover:underline">Política de Conteúdo</Link></li>
              <li>Links, imagens e linguagem ofensiva são bloqueados automaticamente</li>
              <li>Cada comentário tem limite de 1000 caracteres</li>
              <li>Você pode excluir seus próprios comentários a qualquer momento</li>
              <li>Comentários que violem as regras podem ser removidos sem aviso prévio</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">5. Conteúdo e Opiniões</h2>
            <p className="text-muted-foreground mb-4">
              O conteúdo publicado neste site representa a opinião pessoal do autor. 
              As informações são fornecidas "como estão" e não devem ser interpretadas como:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Aconselhamento financeiro ou de investimentos</li>
              <li>Recomendações profissionais de qualquer natureza</li>
              <li>Informações oficiais de empresas ou marcas mencionadas</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Sempre faça sua própria pesquisa antes de tomar decisões baseadas em qualquer 
              conteúdo encontrado nesta plataforma.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">6. Propriedade Intelectual</h2>
            <p className="text-muted-foreground mb-4">
              Todo o conteúdo original deste site, incluindo textos, imagens, design e código, 
              é protegido por direitos autorais. Imagens de jogos, filmes e outras mídias 
              pertencem aos seus respectivos proprietários e são utilizadas para fins 
              informativos e de crítica.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">7. Publicidade e Links</h2>
            <p className="text-muted-foreground mb-4">
              Este site pode conter:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                <strong>Anúncios:</strong> exibidos através de plataformas como Google AdSense. 
                Os anunciantes podem coletar dados através de cookies.
              </li>
              <li>
                <strong>Links afiliados:</strong> podemos receber comissão por compras 
                realizadas através de links para produtos ou serviços.
              </li>
              <li>
                <strong>Links externos:</strong> não nos responsabilizamos pelo conteúdo 
                de sites externos.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">8. Personalização e Preferências</h2>
            <p className="text-muted-foreground mb-4">
              O site oferece funcionalidades de personalização, incluindo:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Alternância entre tema claro e escuro</li>
              <li>Escolha de cor de destaque (accent color)</li>
              <li>Ajuste do tamanho da fonte</li>
              <li>Posts relacionados personalizados baseados no seu histórico de leitura (para usuários logados)</li>
              <li>Configuração de notificações do site e do app</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Essas preferências são salvas localmente no seu navegador e não são compartilhadas com terceiros.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">9. Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Ao continuar navegando neste site, você concorda com o uso de cookies conforme 
              descrito em nossa <Link to="/privacidade" className="text-primary hover:underline">
              Política de Privacidade</Link>. Você pode desativar cookies nas configurações 
              do seu navegador, mas isso pode afetar a funcionalidade do site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">10. Limitação de Responsabilidade</h2>
            <p className="text-muted-foreground mb-4">
              O VICIO&lt;CODE&gt; não se responsabiliza por:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Decisões tomadas com base no conteúdo do site</li>
              <li>Perdas ou danos decorrentes do uso da plataforma</li>
              <li>Interrupções ou erros no funcionamento do site ou app</li>
              <li>Conteúdo de anúncios ou sites de terceiros</li>
              <li>Comentários publicados por outros usuários</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">11. Alterações nos Termos</h2>
            <p className="text-muted-foreground">
              Reservamo-nos o direito de modificar estes Termos e Condições a qualquer momento. 
              Alterações serão publicadas nesta página com a data de atualização. 
              O uso continuado da plataforma após alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">12. Contato</h2>
            <p className="text-muted-foreground">
              Para dúvidas sobre estes Termos e Condições, entre em contato através da 
              nossa <Link to="/contato" className="text-primary hover:underline">página de contato</Link> ou 
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
  </>  
  );
};

export default TermsPage;

import { Link } from "react-router-dom";

const TermsPage = () => {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Termos e <span className="text-gradient">Condições</span>
        </h1>
        <p className="text-muted-foreground mb-8">
          Última atualização: 29 de Janeiro de 2026
        </p>

        <div className="prose prose-lg dark:prose-invert">
          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground mb-4">
              Ao acessar e utilizar o site VICIO&lt;CODE&gt;, você concorda com estes Termos e Condições 
              de uso. Se você não concordar com algum destes termos, por favor, não utilize o site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">2. Uso do Site</h2>
            <p className="text-muted-foreground mb-4">
              O conteúdo deste site é fornecido apenas para fins informativos e de entretenimento. 
              Você concorda em:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Usar o site de forma legal e respeitosa</li>
              <li>Não reproduzir, duplicar ou copiar conteúdo sem autorização</li>
              <li>Não utilizar o site para fins comerciais não autorizados</li>
              <li>Não tentar comprometer a segurança do site</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">3. Conteúdo e Opiniões</h2>
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
              conteúdo encontrado neste site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">4. Propriedade Intelectual</h2>
            <p className="text-muted-foreground mb-4">
              Todo o conteúdo original deste site, incluindo textos, imagens, design e código, 
              é protegido por direitos autorais. Imagens de jogos, filmes e outras mídias 
              pertencem aos seus respectivos proprietários e são utilizadas para fins 
              informativos e de crítica.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">5. Publicidade e Links</h2>
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
            <h2 className="font-display text-xl font-bold mb-4">6. Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Ao continuar navegando neste site, você concorda com o uso de cookies conforme 
              descrito em nossa <Link to="/privacidade" className="text-primary hover:underline">
              Política de Privacidade</Link>. Você pode desativar cookies nas configurações 
              do seu navegador, mas isso pode afetar a funcionalidade do site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">7. Limitação de Responsabilidade</h2>
            <p className="text-muted-foreground mb-4">
              O VICIO&lt;CODE&gt; não se responsabiliza por:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Decisões tomadas com base no conteúdo do site</li>
              <li>Perdas ou danos decorrentes do uso do site</li>
              <li>Interrupções ou erros no funcionamento do site</li>
              <li>Conteúdo de anúncios ou sites de terceiros</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">8. Alterações nos Termos</h2>
            <p className="text-muted-foreground">
              Reservamo-nos o direito de modificar estes Termos e Condições a qualquer momento. 
              Alterações serão publicadas nesta página com a data de atualização. 
              O uso continuado do site após alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-4">9. Contato</h2>
            <p className="text-muted-foreground">
              Para dúvidas sobre estes Termos e Condições, entre em contato através das 
              nossas redes sociais.
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

export default TermsPage;

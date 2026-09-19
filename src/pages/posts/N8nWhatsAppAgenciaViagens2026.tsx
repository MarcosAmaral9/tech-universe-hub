import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { AdInArticle, AdLeaderboard, AdRectangle } from "@/components/AdSense";
import { Bot, Calendar, CheckCircle2, Clock, Cloud, Coins, Database, HelpCircle, MessageCircle, Server, ShieldAlert, User, Workflow } from "lucide-react";
import heroImg from "@/assets/n8n-guia-atendente-whatsapp-agencia-viagens-2026.webp";

const SLUG = "n8n-guia-atendente-whatsapp-agencia-viagens-2026";
const TITLE = "n8n: Guia Completo e Atendente de WhatsApp para Agência de Viagens";

const N8N_PLANS = [
  ["Community Edition", "Grátis", "Servidor próprio", "Aprender, projetos internos e equipes técnicas"],
  ["Starter", "€ 20/mês no anual", "n8n Cloud", "Primeiros fluxos em produção"],
  ["Pro", "€ 50/mês no anual", "n8n Cloud", "Profissionais e pequenas equipes"],
  ["Business", "€ 667/mês no anual", "Self-hosted", "Governança, SSO, ambientes e Git"],
  ["Enterprise", "Sob consulta", "Cloud ou self-hosted", "Escala, auditoria, SLA e compliance"],
];

const FLOW_STEPS = [
  ["1", "WhatsApp Trigger", "Recebe a mensagem e entrega ao fluxo o telefone, o texto, o horário e o identificador do evento."],
  ["2", "Edit Fields", "Normaliza os campos e descarta o que não será usado. Também cria um identificador interno para não depender do nome do cliente."],
  ["3", "Switch", "Separa saudação, consulta de destino, pedido de orçamento, pedido de humano e mensagens que o protótipo não compreende."],
  ["4", "Base de pacotes e FAQ", "Consulta somente dados aprovados, como destinos atendidos, horário da agência e regras gerais. O exemplo usa uma tabela fictícia."],
  ["5", "AI Agent", "Redige uma resposta natural com base nos dados encontrados. O modelo não recebe autorização para reservar, cobrar ou inventar disponibilidade."],
  ["6", "IF de segurança", "Encaminha baixa confiança, reclamação, pagamento, documentos e pedido de reserva para uma pessoa."],
  ["7", "WhatsApp Business Cloud", "Envia a resposta dentro da janela permitida ou usa um modelo previamente aprovado quando o contato está fora dela."],
  ["8", "Registro mínimo", "Salva status e horário para acompanhamento, evitando copiar conversas inteiras ou dados sensíveis sem necessidade."],
];

const N8nWhatsAppAgenciaViagens2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "ia");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="ia" />

      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <CategoryBadge category="ia" size="lg" />
          <span className="px-3 py-1 bg-ia/10 text-ia border border-ia/30 rounded-full text-sm font-medium">Automação · Agentes · Tutorial</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">{TITLE}</h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          Entenda como o n8n funciona, quanto custa e quando vale usar a versão em nuvem ou em servidor próprio. No final, monte o esqueleto seguro de um atendente de WhatsApp para uma agência de viagens.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />16 de Setembro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />21 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="ia" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchPriority="high" loading="eager" decoding="async" src={heroImg} width={1536} height={864} alt="Consultora de viagens supervisiona um fluxo de automação com IA conectado a mensagens, destinos e calendário" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          O <strong>n8n</strong> é uma plataforma de automação de fluxos de trabalho. Em vez de repetir tarefas entre aplicativos, você desenha uma sequência: quando algo acontecer, busque dados, aplique uma regra e execute uma ação. Um formulário pode virar uma linha no CRM; um e-mail com nota fiscal pode alimentar uma planilha; uma mensagem pode consultar uma base de respostas e chegar a um atendente humano. A empresa define o produto como uma ferramenta <em>fair-code</em> que combina automação de processos e inteligência artificial.
        </p>
        <p>
          Ele ficou popular porque ocupa um espaço entre as ferramentas totalmente visuais e a programação tradicional. É possível construir muito arrastando blocos, mas também inserir JavaScript ou Python, chamar qualquer API por HTTP e hospedar a plataforma na própria infraestrutura. Isso dá flexibilidade, porém não elimina responsabilidade técnica: credenciais, atualizações, logs, tratamento de erros e proteção dos dados continuam sendo parte do projeto.
        </p>

        <div className="not-prose my-7 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-ia/30 bg-ia/10 p-5"><Workflow className="h-6 w-6 text-ia mb-3" /><p className="font-bold mb-1">Visual, mas extensível</p><p className="text-sm text-muted-foreground">Nós prontos, expressões, código e chamadas de API convivem no mesmo fluxo.</p></div>
          <div className="rounded-xl border border-ia/30 bg-ia/10 p-5"><Cloud className="h-6 w-6 text-ia mb-3" /><p className="font-bold mb-1">Nuvem ou servidor próprio</p><p className="text-sm text-muted-foreground">Comece rápido no Cloud ou assuma a operação da Community Edition.</p></div>
          <div className="rounded-xl border border-ia/30 bg-ia/10 p-5"><Bot className="h-6 w-6 text-ia mb-3" /><p className="font-bold mb-1">IA com limites</p><p className="text-sm text-muted-foreground">Modelos podem redigir e classificar, enquanto regras controlam ações sensíveis.</p></div>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3"><Workflow className="h-7 w-7 text-ia" />Como o n8n funciona</h2>
        <p>
          Um workflow é uma coleção de <strong>nodes</strong>, ou nós, conectados. O primeiro costuma ser um gatilho: horário programado, formulário, mensagem, webhook ou evento de outro aplicativo. Os nós seguintes recebem itens em formato estruturado, transformam campos e passam o resultado adiante. A interface mostra os dados de entrada e saída de cada etapa, facilitando descobrir onde um fluxo quebrou.
        </p>
        <p>
          Os <strong>gatilhos</strong> iniciam o trabalho. Os <strong>nós de ação</strong> enviam e-mails, gravam registros, consultam serviços ou publicam mensagens. Nós como IF, Switch, Merge e Loop criam decisões e caminhos. As <strong>expressões</strong> puxam um valor de uma etapa anterior, por exemplo o telefone recebido no WhatsApp. As <strong>credenciais</strong> guardam tokens e chaves separadamente da lógica visual. Por fim, cada tentativa gera uma <strong>execução</strong>, com status e dados úteis para auditoria e correção.
        </p>
        <p>
          Durante a criação, você executa manualmente e usa dados de teste. Em produção, publica o workflow para que o gatilho automático passe a funcionar. Webhooks têm endereços diferentes para teste e produção. No WhatsApp Trigger há um detalhe importante: a Meta aceita apenas um webhook por aplicativo; alternar entre teste e produção substitui o endereço anterior. Portanto, um fluxo pode parecer parado simplesmente porque outro endereço foi registrado por último.
        </p>

        <h2>Para que serve: exemplos que fazem sentido</h2>
        <ul>
          <li><strong>Atendimento:</strong> classificar mensagens, recuperar FAQ, criar ticket e direcionar casos urgentes.</li>
          <li><strong>Vendas:</strong> receber leads, validar campos, consultar duplicidade, atualizar CRM e avisar o vendedor.</li>
          <li><strong>Marketing:</strong> organizar briefing, revisar aprovação e distribuir conteúdo, sem publicar automaticamente algo não revisado.</li>
          <li><strong>Financeiro:</strong> extrair dados de documentos, conciliar registros e sinalizar divergências para conferência.</li>
          <li><strong>Operações:</strong> sincronizar planilhas, bancos de dados e sistemas que oferecem API.</li>
          <li><strong>IA:</strong> resumir, classificar, extrair campos e acionar ferramentas por um agente, sempre com permissões delimitadas.</li>
        </ul>
        <p>
          O n8n é especialmente útil quando o processo atravessa vários sistemas e contém regras próprias. Para uma única ação simples, a automação nativa do aplicativo pode bastar. Também não é um substituto automático para um CRM, um sistema de reservas ou uma política interna: ele conecta essas peças. Automatizar um processo mal definido apenas faz o erro circular mais rápido.
        </p>

        <AdInArticle />

        <h2 className="flex items-center gap-3"><Coins className="h-7 w-7 text-ia" />Quanto custa o n8n em setembro de 2026</h2>
        <p>
          Na consulta de 16 de setembro de 2026, a página oficial mostrava os valores abaixo para contratação anual. A cobrança do n8n é baseada em <strong>execuções completas do workflow</strong>, e não em cada etapa. Todos os planos anunciados incluem workflows, usuários e integrações sem limite, mas diferem em volume, concorrência, colaboração, histórico e governança. Preços, impostos, câmbio e franquias podem mudar; confirme a página oficial antes de contratar.
        </p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full min-w-[760px] text-sm border-collapse bg-card rounded-xl overflow-hidden">
            <thead><tr className="bg-secondary text-left"><th className="p-3">Opção</th><th className="p-3">Preço de referência</th><th className="p-3">Onde roda</th><th className="p-3">Uso indicado</th></tr></thead>
            <tbody>{N8N_PLANS.map(([plan, price, hosting, use]) => <tr key={plan} className="border-t border-border"><td className="p-3 font-bold text-ia">{plan}</td><td className="p-3">{price}</td><td className="p-3">{hosting}</td><td className="p-3 text-muted-foreground">{use}</td></tr>)}</tbody>
          </table>
        </div>
        <p>
          O Starter aparecia por € 20 mensais no anual, com cinco execuções simultâneas e 2.300 créditos de IA por mês. O Pro, por € 50 mensais no anual, ampliava concorrência, projetos compartilhados, busca e histórico de execuções e créditos de IA. O Business aparecia por € 667 mensais no anual e era oferecido para implantação self-hosted, com SSO, ambientes, Git e opções de escala. O Enterprise tinha preço negociado.
        </p>
        <p>
          A <strong>Community Edition</strong> não cobra licença para uso interno e contém quase todo o núcleo do produto. “Grátis”, entretanto, não significa custo zero: você paga servidor, domínio, cópias de segurança, monitoramento e horas de manutenção. Recursos de governança como projetos, compartilhamento, SSO, segredos externos e ambientes ficam fora da edição gratuita ou dependem de planos superiores. Para uma pessoa sem experiência com servidores, o Cloud tende a ser mais barato quando o tempo e o risco entram na conta.
        </p>

        <div className="not-prose my-7 rounded-xl border border-amber-500/30 bg-amber-500/10 p-5">
          <p className="font-bold mb-2">O n8n não é “open source” no sentido tradicional</p>
          <p className="text-sm text-muted-foreground">O código principal usa a Sustainable Use License, descrita como fair-code. Ela permite uso interno, inclusive comercial, e modificações próprias, mas restringe oferecer o n8n como serviço comercial concorrente. Consultorias podem implantar automações para clientes; quem pretende revender a plataforma hospedada precisa conferir a licença ou negociar autorização.</p>
        </div>

        <h2 className="flex items-center gap-3"><Server className="h-7 w-7 text-ia" />Cloud ou self-hosted: qual escolher?</h2>
        <p>
          Escolha o <strong>n8n Cloud</strong> se a prioridade é criar rapidamente, receber atualizações gerenciadas e não cuidar de servidor. Escolha <strong>self-hosted</strong> quando houver equipe capaz de operar containers, banco, HTTPS, atualizações, backup e observabilidade; quando o controle de infraestrutura for requisito; ou quando o volume justificar o esforço. A documentação recomenda Docker para a maioria das instalações próprias e alerta que erros de configuração podem causar indisponibilidade, perda de dados e falhas de segurança.
        </p>
        <p>
          Em servidor próprio, proteja o editor atrás de HTTPS, limite acesso administrativo, defina uma chave de criptografia persistente, mantenha banco e volumes em backup, atualize pela versão estável e teste restauração. Não exponha tokens em nós de texto nem copie payloads pessoais para logs indefinidamente. A criptografia de dados em repouso fora do n8n Cloud é responsabilidade de quem administra a infraestrutura.
        </p>

        <h2>n8n, Make ou Zapier?</h2>
        <p>
          Zapier costuma ser direto para automações simples e possui um grande catálogo. Make oferece construção visual detalhada e boa inspeção de cenários. n8n ganha quando o fluxo exige lógica, chamadas de API, código, self-hosting ou agentes de IA combinados com etapas determinísticas. A escolha correta depende das integrações realmente necessárias, do modelo de cobrança e de quem manterá o processo. Antes de migrar, construa o mesmo fluxo pequeno nas opções candidatas e compare tempo de manutenção, não apenas preço promocional.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3"><MessageCircle className="h-7 w-7 text-ia" />Projeto: atendente de WhatsApp para agência de viagens</h2>
        <p>
          O objetivo do primeiro projeto é receber uma mensagem, entender o pedido, coletar os dados mínimos e responder perguntas gerais. Quando houver intenção de reserva, preço final, pagamento, envio de documento, reclamação ou dúvida sem resposta confiável, o fluxo chama um consultor. Ele não acessa estoque real, não emite passagem e não confirma disponibilidade. Essa separação torna o tutorial reproduzível sem ensinar uma automação perigosa.
        </p>

        <div className="not-prose my-7 rounded-xl border border-ia/30 bg-ia/10 p-5 md:p-6">
          <p className="font-bold text-ia mb-4">Mapa do fluxo</p>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            {['WhatsApp Trigger', 'Normalizar dados', 'Identificar intenção', 'Consultar FAQ/pacotes', 'IA redige', 'Verificar risco', 'Responder ou transferir'].map((step, index, list) => <div key={step} className="flex items-center gap-2"><span className="rounded-md border border-ia/30 bg-background px-3 py-2 font-medium">{step}</span>{index < list.length - 1 && <span className="text-ia">→</span>}</div>)}
          </div>
        </div>

        <h3>Pré-requisitos oficiais</h3>
        <p>
          Use a <strong>WhatsApp Business Platform com Cloud API da Meta</strong>, não uma integração que imita o WhatsApp Web. Você precisará de conta de desenvolvedor Meta, portfólio empresarial, aplicativo empresarial configurado com WhatsApp e, para produção, um número habilitado. O n8n oferece credenciais e nós próprios para WhatsApp Business Cloud e WhatsApp Trigger. Comece com o número de teste fornecido pela Meta.
        </p>
        <ol>
          <li>Crie o aplicativo empresarial e ative o produto WhatsApp no ambiente da Meta.</li>
          <li>Anote Phone Number ID e WhatsApp Business Account ID; gere token temporário apenas para o teste.</li>
          <li>No n8n, crie a credencial WhatsApp Business Cloud. Não cole o token em um nó de texto.</li>
          <li>Adicione WhatsApp Trigger, selecione o evento de mensagens e registre a URL indicada.</li>
          <li>Envie uma mensagem ao número de teste e confirme se o payload aparece na execução.</li>
        </ol>

        <h3>Monte os oito nós do primeiro fluxo</h3>
        <div className="not-prose my-6 space-y-3">
          {FLOW_STEPS.map(([number, name, description]) => <div key={number} className="flex gap-4 rounded-xl border border-ia/20 bg-card p-5"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ia/15 font-bold text-ia">{number}</span><div><h4 className="font-bold text-ia mb-1">{name}</h4><p className="text-sm text-muted-foreground">{description}</p></div></div>)}
        </div>

        <h3>A base fictícia de pacotes</h3>
        <p>
          Para aprender, use uma Data Table ou planilha com campos <code>destino</code>, <code>origem</code>, <code>mes_referencia</code>, <code>duracao</code>, <code>preco_exemplo</code>, <code>inclui</code>, <code>ultima_revisao</code> e <code>url_consultor</code>. Marque cada registro como demonstração. Exemplo: “Fortaleza, saída de São Paulo, dezembro, sete noites, R$ 2.499 simulado”. Nunca apresente esse número como oferta válida. Em produção, substitua a tabela por consulta autenticada ao sistema oficial e mantenha aprovação humana antes da cotação final.
        </p>

        <h3>Prompt pronto para o AI Agent</h3>
        <div className="not-prose my-6 rounded-xl border border-ia/30 bg-secondary/40 p-5 font-mono text-sm leading-relaxed whitespace-pre-wrap">{`Você é o assistente inicial da Agência Horizonte.
Responda em português brasileiro, com clareza e no máximo 120 palavras.
Use somente informações devolvidas pelas ferramentas conectadas.
Nunca invente preço, disponibilidade, voo, hotel, política ou prazo.
Colete apenas: origem, destino, datas aproximadas, número de viajantes e faixa de orçamento.
Não solicite cartão, documento, senha ou dado de saúde.
Não confirme reserva, pagamento ou emissão.
Se faltar informação, faça uma pergunta por vez.
Se o cliente pedir um humano, reclamar, mencionar urgência, pagamento, documento, acessibilidade ou se os dados não forem suficientes, responda que um consultor continuará e defina encaminhar_humano=true.
Informe que valores de demonstração não são uma oferta e dependem de cotação humana.`}</div>
        <p>
          Conecte ao agente apenas ferramentas de leitura: busca de FAQ e consulta à tabela fictícia. Não entregue uma ferramenta de cobrança ou reserva neste primeiro projeto. Um modelo de linguagem deve produzir linguagem; regras determinísticas devem decidir permissões. O campo <code>encaminhar_humano</code> pode ser validado por um Structured Output Parser e lido pelo IF seguinte.
        </p>

        <h3>Exemplo de conversa segura</h3>
        <div className="not-prose my-6 space-y-3">
          <div className="max-w-[88%] rounded-xl border border-border bg-card p-4"><p className="text-xs text-muted-foreground mb-1">Cliente</p><p>Quero viajar para Fortaleza em dezembro com mais uma pessoa. Quanto custa?</p></div>
          <div className="ml-auto max-w-[88%] rounded-xl border border-ia/30 bg-ia/10 p-4"><p className="text-xs text-ia mb-1">Assistente</p><p>Posso reunir os dados para uma cotação. De qual cidade vocês pretendem sair? Os valores exibidos neste atendimento inicial são exemplos e a disponibilidade será confirmada por um consultor.</p></div>
          <div className="max-w-[88%] rounded-xl border border-border bg-card p-4"><p className="text-xs text-muted-foreground mb-1">Cliente</p><p>São Paulo. Quero reservar e pagar agora.</p></div>
          <div className="ml-auto max-w-[88%] rounded-xl border border-amber-500/30 bg-amber-500/10 p-4"><p className="text-xs text-amber-500 mb-1">Transferência segura</p><p>Vou encaminhar seu pedido a um consultor. Não envie cartão ou documentos por aqui. A reserva e o valor final só serão confirmados no atendimento humano.</p></div>
        </div>

        <h3>A regra das 24 horas e mensagens modelo</h3>
        <p>
          Dentro da janela de atendimento iniciada pela mensagem do cliente, a empresa pode enviar respostas livres compatíveis com o caso. Para iniciar ou retomar contato fora dessa janela, normalmente precisa usar um <strong>template previamente aprovado</strong>, na categoria adequada. Desde julho de 2025, a Meta passou a tarifar templates entregues por mensagem; valores variam por categoria e país. Mensagens de serviço e templates de utilidade dentro da janela podem ter tratamento gratuito segundo a tabela oficial vigente. Como a política muda, não grave um preço fixo no fluxo: consulte a página da Meta e acompanhe a categoria aprovada.
        </p>
        <p>
          Não use uma mensagem promocional disfarçada de utilidade. Armazene consentimento quando necessário, ofereça saída clara e evite disparos em massa. O WhatsApp Business Cloud node permite enviar texto, mídia e template. Também possui operações de espera por resposta, úteis para aprovação; a documentação do n8n ainda permite revisão humana antes de ferramentas de um agente de IA.
        </p>

        <h2 className="flex items-center gap-3"><ShieldAlert className="h-7 w-7 text-ia" />LGPD, segurança e limites</h2>
        <p>
          Telefone, nome, histórico de conversa e preferências de viagem são dados pessoais. A agência precisa definir finalidade e base legal, informar o titular, limitar coleta e manter os dados apenas pelo tempo necessário. Uma conversa pode revelar dados sensíveis, como necessidade médica ou acessibilidade; não mande esse conteúdo para um modelo sem desenho jurídico e técnico apropriado. Garanta canal humano para contestação e decisões com impacto.
        </p>
        <ul>
          <li><strong>Minimize:</strong> não salve o payload inteiro se status, data e ID bastam.</li>
          <li><strong>Proteja:</strong> mantenha tokens nas credenciais, use HTTPS, rotacione acessos e aplique menor privilégio.</li>
          <li><strong>Valide:</strong> trate toda mensagem como entrada não confiável. O cliente não pode alterar as regras do agente por texto.</li>
          <li><strong>Controle custo:</strong> limite tamanho de entrada, número de passos e tentativas do modelo.</li>
          <li><strong>Evite duplicidade:</strong> registre o ID da mensagem para não responder duas vezes após uma repetição do webhook.</li>
          <li><strong>Tenha saída humana:</strong> “falar com atendente” deve funcionar sem discussão com o bot.</li>
        </ul>

        <h2 className="flex items-center gap-3"><Database className="h-7 w-7 text-ia" />Teste antes de publicar</h2>
        <p>
          Teste saudações, áudio e imagem inesperados, campos vazios, destino inexistente, duas mensagens rápidas, repetição do mesmo evento, modelo fora do ar e pedido explícito de humano. Tente induzir o agente a revelar prompt, token ou dados de outro cliente. Confirme que nenhum desses pedidos funciona. Depois, simule preço, pagamento, cancelamento e reclamação: todos devem chegar a uma pessoa sem que a IA confirme nada.
        </p>
        <div className="not-prose my-6 grid gap-3 md:grid-cols-2">
          {["Webhook de produção registrado", "Credenciais sem aparecer nos logs", "Resposta livre somente na janela adequada", "Template aprovado para recontato", "Duplicidade de mensagem bloqueada", "Ações sensíveis exigem humano", "Retenção e exclusão definidas", "Alertas para falhas e custo configurados"].map((item) => <div key={item} className="flex items-start gap-3 rounded-lg border border-ia/20 bg-card p-4"><CheckCircle2 className="h-5 w-5 shrink-0 text-ia" /><span className="text-sm">{item}</span></div>)}
        </div>
        <p>
          Publique primeiro para um grupo interno e observe as execuções. Defina o que acontece quando o fluxo falha: avisar a equipe e enviar uma resposta neutra é melhor do que deixar o cliente sem retorno ou repetir mensagens. Só conecte inventário real depois de medir acertos, e mantenha a confirmação final com o consultor até que requisitos jurídicos, comerciais e de segurança tenham sido revisados.
        </p>

        <h2 className="flex items-center gap-3"><HelpCircle className="h-7 w-7 text-ia" />Perguntas frequentes</h2>
        <div className="not-prose my-6 space-y-3">
          {[
            ["O n8n é gratuito?", "A Community Edition pode ser usada sem licença paga em servidor próprio, mas infraestrutura e manutenção têm custo. O n8n Cloud é pago e elimina parte do trabalho operacional."],
            ["Preciso saber programar?", "Não para fluxos básicos. Conhecer APIs, JSON, autenticação e lógica ajuda quando a automação cresce ou encontra uma integração sem nó pronto."],
            ["Posso usar meu WhatsApp pessoal?", "O tutorial usa a WhatsApp Business Platform oficial. Comece com o número de teste da Meta e prepare um número empresarial para produção; não automatize conta pessoal por métodos não oficiais."],
            ["A IA pode fechar a viagem sozinha?", "Neste projeto, não. Ela coleta contexto e responde com uma base aprovada. Reserva, preço final, pagamento, documento e exceções são transferidos para uma pessoa."],
            ["Quanto custa o atendente?", "Some plano ou servidor do n8n, uso do modelo de IA, mensagens template cobradas pela Meta, banco/monitoramento e trabalho de manutenção. O total depende do volume e da arquitetura."],
            ["n8n é open source?", "A empresa usa o termo fair-code e a Sustainable Use License. O código é acessível e o uso interno é permitido, mas existem restrições para oferecer a plataforma como serviço comercial concorrente."],
          ].map(([question, answer]) => <details key={question} className="rounded-xl border border-border bg-card p-5 group"><summary className="cursor-pointer list-none font-bold flex items-center justify-between">{question}<span className="text-ia text-xl transition-transform group-open:rotate-45">+</span></summary><p className="text-sm text-muted-foreground mt-3">{answer}</p></details>)}
        </div>
      </div>

      <EditorialTake category="ia" title="Análise do Marcos: automação boa deixa os limites visíveis">
        <p>
          O n8n é poderoso justamente porque permite misturar regra, integração e IA. Isso também facilita exagerar. Para uma agência de viagens, eu não começaria pelo robô que promete fechar a venda inteira. Começaria pelo assistente que responde o básico, organiza a solicitação e entrega ao consultor um briefing limpo. Esse projeto economiza tempo sem transformar uma alucinação em prejuízo ou frustração para o viajante.
        </p>
        <p>
          A diferença entre demonstração e operação profissional está menos no desenho bonito dos nós e mais no que acontece quando algo falha. Tokens expiram, APIs mudam, clientes enviam mensagens incompletas e modelos inventam. Aprovação humana, logs mínimos, alerta de erro e uma rota simples para “falar com atendente” não são freios à inovação: são o que permite confiar nela.
        </p>
      </EditorialTake>
      <ArticleSources category="ia" sources={[
        { title: "n8n Plans and Pricing", url: "https://n8n.io/pricing/", publisher: "n8n", accessedAt: "Setembro 2026" },
        { title: "Choose your n8n", url: "https://docs.n8n.io/choose-how-to-use-n8n/", publisher: "n8n Docs", accessedAt: "Setembro 2026" },
        { title: "Community edition features", url: "https://docs.n8n.io/deploy/host-n8n/community-edition-features/", publisher: "n8n Docs", accessedAt: "Setembro 2026" },
        { title: "Sustainable Use License", url: "https://docs.n8n.io/privacy-and-security/sustainable-use-license/", publisher: "n8n Docs", accessedAt: "Setembro 2026" },
        { title: "WhatsApp Business Cloud node", url: "https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.whatsapp/", publisher: "n8n Docs", accessedAt: "Setembro 2026" },
        { title: "WhatsApp Trigger node", url: "https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.whatsapptrigger/", publisher: "n8n Docs", accessedAt: "Setembro 2026" },
        { title: "WhatsApp Business Cloud credentials", url: "https://docs.n8n.io/integrations/builtin/credentials/whatsapp/", publisher: "n8n Docs", accessedAt: "Setembro 2026" },
        { title: "Human-in-the-loop for AI tool calls", url: "https://docs.n8n.io/build/integrate-ai/ai-examples/human-in-the-loop-for-tools/", publisher: "n8n Docs", accessedAt: "Setembro 2026" },
        { title: "WhatsApp Cloud API — Get Started", url: "https://developers.facebook.com/docs/whatsapp/cloud-api/get-started/", publisher: "Meta for Developers", accessedAt: "Setembro 2026" },
        { title: "Pricing on the WhatsApp Business Platform", url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing", publisher: "Meta for Developers", accessedAt: "Setembro 2026" },
        { title: "Lei nº 13.709/2018 — Lei Geral de Proteção de Dados", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm", publisher: "Planalto", accessedAt: "Setembro 2026" },
      ]} />
      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="ia" />
    </article>
  );
};

export default N8nWhatsAppAgenciaViagens2026;

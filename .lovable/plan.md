# Carrossel de imagens para “I Will Fall With the Emperor”

## Objetivo
Transformar a imagem principal desse artigo em um carrossel com duas artes, alternando automaticamente a cada 3 segundos tanto dentro do artigo quanto nas demais áreas visuais do site onde ele for exibido.

## Implementação
1. **Criar a segunda arte**
   - Editar a imagem atual para preservar o salão imperial gótico, a paleta vermelho/preto, o figurino e a atmosfera.
   - Alterar a personagem para cabelos loiros, posição frontal e poder de fogo visível na mão direita.
   - Manter o formato horizontal 16:9 e exportar em WebP otimizado.

2. **Adicionar suporte a múltiplas imagens nos artigos**
   - Manter a imagem atual como principal para compatibilidade, SEO, compartilhamento e feeds.
   - Adicionar a nova arte como segunda imagem deste artigo.
   - Criar um componente reutilizável que exiba uma imagem normalmente ou, quando houver duas, faça a alternância com transição suave a cada 3 segundos.

3. **Aplicar o carrossel em todas as aparições visuais do artigo**
   - Imagem principal dentro da página do artigo.
   - Cartões da página inicial, categoria Otaku, arquivo, busca e páginas de tags.
   - Destaque principal da página inicial quando esse artigo estiver selecionado.
   - Blocos “Leia a seguir”, “Artigos relacionados” e lista de artigos offline.
   - Preservar dimensões, recortes, carregamento progressivo e efeitos existentes de cada local.

4. **Controles e acessibilidade**
   - Incluir indicadores discretos para as duas imagens na imagem principal do artigo.
   - Pausar a troca automática quando a aba não estiver visível.
   - Respeitar a preferência de redução de movimento, mantendo a primeira imagem estática nesses casos.
   - Usar textos alternativos específicos para cada arte.

5. **SEO e arquivos derivados**
   - Manter a imagem original como imagem principal nas tags sociais e nos feeds RSS.
   - Incluir também a segunda arte no sitemap de imagens da página.
   - Regenerar sitemap, sitemap de imagens e feeds pelos scripts existentes.

6. **Validação**
   - Conferir visualmente o artigo e os cartões em telas grandes e pequenas.
   - Confirmar a alternância exata de 3 segundos, sem mudança de tamanho ou sobreposição.
   - Executar as validações do projeto para estrutura editorial, TypeScript e arquivos de sitemap.

## Detalhes técnicos
- O campo atual `image` continuará sendo a fonte principal; um campo opcional reunirá a segunda imagem e seus textos alternativos.
- Um único componente de mídia será compartilhado pelos diferentes formatos de exibição para evitar comportamentos divergentes.
- O carrossel externo de artigos da página inicial continuará com sua navegação atual; apenas a área da imagem desse artigo alternará entre as duas artes.

# Requisitos permanentes do projeto P7 Data

## Hospedagem e publicação

- Fonte principal: `https://github.com/pauloheg33/p7data.git`.
- Fluxo planejado: GitHub → branch `main` → Cloudflare Pages → publicação automática a cada push na branch de produção.
- Cloudflare Pages: framework `None`, diretório raiz do repositório, sem comando de build, saída `.`.
- Manter `index.html` na raiz como ponto de entrada. O site deve funcionar na raiz de um domínio Cloudflare Pages e também no subcaminho `/p7data/` do GitHub Pages, quando possível.
- Não alterar configurações existentes do GitHub Pages por causa da adoção do Cloudflare Pages. Não criar ou modificar infraestrutura sem necessidade ou autorização.

## Desenvolvimento

- Preservar o site estático em HTML, CSS e JavaScript executados no navegador, com `css/`, `js/` e `assets/`.
- Não introduzir build, dependências de backend, servidores Python/Node.js/PHP ou banco de dados local sem solicitação explícita. Servidores locais opcionais de prévia não são dependências de produção.
- Usar caminhos relativos para assets e âncoras para navegação interna. Não fixar `/p7data/` em caminhos locais nem presumir domínio de produção.
- Nunca incluir chaves privadas, tokens, senhas ou outros segredos no código público.
- Antes de implementar qualquer funcionalidade que exija variáveis de ambiente, Pages Functions, Workers ou outro recurso específico da Cloudflare, informar claramente ao usuário e obter a definição do escopo necessário.
- Preservar os endereços dos sistemas e painéis externos, salvo solicitação explícita de alteração.

## Verificação e documentação

- Ao modificar arquivos, conferir CSS, JavaScript, imagens, fontes e links internos tanto na raiz quanto no subcaminho do GitHub Pages.
- Manter o README alinhado com a configuração estática e as instruções de publicação.
- Alterar `canonical` e `og:url` apenas quando o endereço principal real for confirmado. `https://p7data.pages.dev/` foi fornecido como exemplo, não como publicação verificada.
- Distinguir preparação do repositório de configuração e publicação efetivamente verificadas no Cloudflare Pages.

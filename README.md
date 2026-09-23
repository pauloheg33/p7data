# P7 Data

Site institucional e portal de soluções da **P7 Data — Dados • Sistemas • Soluções Inteligentes**. Reúne cinco painéis de análise e dois sistemas. A educação é uma das áreas de aplicação do portfólio, sem limitar a identidade da marca.

## Estrutura

```text
index.html                 Conteúdo semântico, projetos e metadados
css/style.css              Identidade visual e layout responsivo
js/script.js               Menu, indicadores e microinterações
assets/icons/favicon.svg   Marca P7 em SVG
```

Sem frameworks, bibliotecas externas, backend ou build. Os gráficos do hero são ilustrações abstratas, não indicadores reais. Todos os projetos permanecem acessíveis sem JavaScript.

## Executar localmente

Abra `index.html` no navegador ou, com Python instalado, execute na pasta do projeto:

```sh
python -m http.server 8000
```

Acesse http://localhost:8000. Para simular o caminho do GitHub Pages, execute o servidor na pasta **pai** e acesse http://localhost:8000/p7data/.

## Publicar no GitHub Pages

O Cloudflare Pages é o destino principal planejado. A compatibilidade com GitHub Pages continua sendo preservada; sua configuração existente não deve ser alterada apenas por isso.

1. Envie os arquivos para a branch `main` de `pauloheg33/p7data`.
2. No GitHub, abra **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Selecione **main** e **/ (root)**, e salve.
5. Aguarde a conclusão da publicação e acesse https://pauloheg33.github.io/p7data/.

O `index.html` está na raiz e os assets usam caminhos relativos, compatíveis com `/p7data/`. O arquivo `.nojekyll` dispensa processamento Jekyll. Não há domínio próprio configurado. Quando houver, atualize `canonical` e `og:url` no HTML e configure o domínio em Pages.

## Publicar no Cloudflare Pages via GitHub

Configuração planejada para conectar este repositório ao Cloudflare Pages gratuito:

| Campo | Valor |
| --- | --- |
| Repositório | `pauloheg33/p7data` |
| Branch de produção | `main` |
| Framework preset | `None` |
| Root directory | Raiz do repositório |
| Build command | Nenhum (deixar vazio) |
| Build output directory | `.` |

Depois de conectar o GitHub e salvar essa configuração no Cloudflare Pages, cada push na `main` deverá gerar uma publicação automática. Não há instalação de dependências, build, backend ou banco de dados para servir o site. Python, mencionado na prévia local, é opcional e não faz parte da hospedagem.

Os arquivos locais usam caminhos relativos e os links internos usam âncoras, funcionando na raiz de um domínio (por exemplo, `https://p7data.pages.dev/`) e no subcaminho do GitHub Pages. O endereço Cloudflare acima é apenas ilustrativo: confirmar a URL atribuída antes de atualizar `canonical` e `og:url`, que atualmente apontam para a publicação existente no GitHub Pages.

As regras permanentes de compatibilidade estão em `AGENTS.md`. Qualquer necessidade futura de variáveis de ambiente, Functions, Workers ou outros recursos específicos deve ser explicada antes da implementação. Nunca versionar segredos.

## Adicionar um painel

Em `index.html`, encontre o grupo da avaliação (`article.assessment-group`) na seção `#analises`. Copie um item `<li>` da lista `.assessment-versions`, atualizando a versão, a URL e o nome acessível. Mantenha `data-category="analise"` no link `.version-link`. Ordene as versões da mais recente para a mais antiga dentro de cada avaliação. Para uma nova avaliação, copie um grupo inteiro e atribua um ID único ao título, atualizando `aria-labelledby` e o nome da lista. Os acessos são diretos e não precisam de JavaScript; não há textos descritivos nos grupos.

## Adicionar um sistema

Copie um `article.system-card` da seção `#sistemas` para dentro de `.systems-grid`. Mantenha `data-category="sistema"`. Atualize nome completo, descrição, categoria visual, URL, texto acessível e numeral decorativo `.system-watermark`.

## Indicadores e links

O JavaScript calcula os totais a partir dos atributos `data-category`. Ao alterar o portfólio, atualize também os valores iniciais dos três elementos `data-count` no HTML, preservando os números corretos para navegação sem JavaScript.

Para trocar um endereço, edite o `href` da versão ou do acesso ao sistema. Preserve `target="_blank"`, `rel="noopener noreferrer"` e a identificação de nova aba. Não confunda URLs de painéis distintos. Os sete endereços iniciais seguem exatamente o briefing.

## Cores e identidade

Edite as variáveis em `:root`, no início de `css/style.css`: `--navy`, `--cyan`, `--blue`, `--ink`, `--muted`, `--paper`, `--font`, `--radius`, `--shadow` e `--space`. Os símbolos de ícones estão no início do `body` e são reutilizados com `<use>`. O favicon fica em `assets/icons/favicon.svg`.

## Checklist de manutenção

### Identidades dos sistemas

As miniapresentações preservam as marcas observadas nas páginas de acesso em 23/09/2026. PPDT usa azul-marinho `#101d35`, azul royal `#2457d6` e seu emblema; SIEDU usa verde `#176b4d`, gradiente verde e superfície branca com o brasão de Ararendá. Os estilos ficam em `.system-card--ppdt` e `.system-card--siedu`.

Os arquivos foram copiados sem alterações dos próprios sistemas, a pedido do proprietário, para evitar dependência de carregamento externo:

- `assets/images/ppdt-logo.svg`: https://pauloheg33.github.io/PPDT_ARARENDA/logo-blue.svg
- `assets/images/siedu-logo.png`: https://pauloheg33.github.io/SIEDU/logo.png

Os emblemas identificam apenas os respectivos sistemas. O endereço do SIEDU, antes indisponível, estava acessível na visita de 23/09/2026.

### Verificações

- Conferir todos os projetos, seus links, a ordem e os totais.
- Testar em 360, 390, 768, 1024 e 1440 pixels, sem cortes ou rolagem horizontal.
- Navegar com Tab, Shift+Tab, Enter e Escape; conferir menu móvel e foco visível.
- Conferir conteúdo com JavaScript desativado e movimento reduzido.
- Verificar console, CSS, JavaScript, imagens, fontes e links internos na raiz do domínio Cloudflare Pages e no subcaminho `/p7data/` do GitHub Pages.
- Revisar português, contraste e títulos; testar a URL pública após ativar Pages.

## Validação da entrega — 22/09/2026

Verificação em Microsoft Edge/Chromium nas cinco larguras acima: sete URLs exatas, totais 7/5/2, assets disponíveis sob `/p7data/`, ausência de rolagem horizontal e de erros no console. Menu móvel, Escape com retorno de foco, navegação sem JavaScript e preferência de movimento reduzido verificados. Auditoria automatizada axe-core para WCAG 2 A/AA e 2.1 AA sem violações detectadas em 390 e 1440 pixels; isso não substitui uma auditoria integral de acessibilidade.

Seis destinos responderam HTTP 200. O endereço fornecido do SIEDU (`https://pauloheg33.github.io/SIEDU/login`) respondeu HTTP 404 e foi preservado exatamente como solicitado. Essa pendência pertence ao destino externo. A publicação no GitHub Pages foi posteriormente concluída e o portal, CSS, JavaScript e favicon responderam HTTP 200.

© 2026 P7 Data. Todos os direitos reservados.

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

1. Envie os arquivos para a branch `main` de `pauloheg33/p7data`.
2. No GitHub, abra **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Selecione **main** e **/ (root)**, e salve.
5. Aguarde a conclusão da publicação e acesse https://pauloheg33.github.io/p7data/.

O `index.html` está na raiz e os assets usam caminhos relativos, compatíveis com `/p7data/`. O arquivo `.nojekyll` dispensa processamento Jekyll. Não há domínio próprio configurado. Quando houver, atualize `canonical` e `og:url` no HTML e configure o domínio em Pages.

## Adicionar um painel

Em `index.html`, copie um `article.project-card` da seção `#analises` para dentro de `.analysis-grid`, antes de `.portfolio-note`. Mantenha `data-category="analise"`. Altere nome, ciclo, badge, descrição, URL e texto acessível dentro de `.sr-only`. Organize do mais recente para o mais antigo. Use a classe `featured` apenas no painel mais recente.

## Adicionar um sistema

Copie um `article.system-card` da seção `#sistemas` para dentro de `.systems-grid`. Mantenha `data-category="sistema"`. Atualize nome completo, descrição, categoria visual, URL, texto acessível e numeral decorativo `.system-watermark`.

## Indicadores e links

O JavaScript calcula os totais a partir dos atributos `data-category`. Ao alterar o portfólio, atualize também os valores iniciais dos três elementos `data-count` no HTML, preservando os números corretos para navegação sem JavaScript.

Para trocar um endereço, edite o `href` do acesso no card. Preserve `target="_blank"`, `rel="noopener noreferrer"` e a identificação de nova aba. Não confunda URLs de painéis distintos. Os sete endereços iniciais seguem exatamente o briefing.

## Cores e identidade

Edite as variáveis em `:root`, no início de `css/style.css`: `--navy`, `--cyan`, `--blue`, `--ink`, `--muted`, `--paper`, `--font`, `--radius`, `--shadow` e `--space`. Os símbolos de ícones estão no início do `body` e são reutilizados com `<use>`. O favicon fica em `assets/icons/favicon.svg`.

## Checklist de manutenção

- Conferir todos os projetos, seus links, a ordem e os totais.
- Testar em 360, 390, 768, 1024 e 1440 pixels, sem cortes ou rolagem horizontal.
- Navegar com Tab, Shift+Tab, Enter e Escape; conferir menu móvel e foco visível.
- Conferir conteúdo com JavaScript desativado e movimento reduzido.
- Verificar console, carregamento dos assets e acesso pelo subcaminho `/p7data/`.
- Revisar português, contraste e títulos; testar a URL pública após ativar Pages.

## Validação da entrega — 22/09/2026

Verificação em Microsoft Edge/Chromium nas cinco larguras acima: sete URLs exatas, totais 7/5/2, assets disponíveis sob `/p7data/`, ausência de rolagem horizontal e de erros no console. Menu móvel, Escape com retorno de foco, navegação sem JavaScript e preferência de movimento reduzido verificados. Auditoria automatizada axe-core para WCAG 2 A/AA e 2.1 AA sem violações detectadas em 390 e 1440 pixels; isso não substitui uma auditoria integral de acessibilidade.

Seis destinos responderam HTTP 200. O endereço fornecido do SIEDU (`https://pauloheg33.github.io/SIEDU/login`) respondeu HTTP 404 e foi preservado exatamente como solicitado. Essa pendência pertence ao destino externo. Após o envio, o GitHub informou Pages habilitado, mas a URL pública do portal ainda respondeu HTTP 404. Confira a origem `main` / `/ (root)` em Settings → Pages e aguarde a implantação antes da verificação pública definitiva.

© 2026 P7 Data. Todos os direitos reservados.

# PericlesDev Portfolio

Portfólio oficial da **PericlesDev** — sistemas de gestão, plataformas de agendamento, landing pages e aplicações para negócios reais.

## Stack

- React
- TypeScript
- Vite
- Cloudflare Pages
- Cloudflare Pages Functions
- GitHub API

## Projetos públicos automáticos

A Pages Function `functions/api/github-projects.js` consulta os repositórios públicos de `Pericles-cmyk` e exibe somente os que possuem o topic:

```text
portfolio
```

Para publicar um novo projeto no portfólio, basta adicionar o topic `portfolio` ao repositório no GitHub. A resposta da Function usa cache no edge da Cloudflare.

## Cases privados

Os projetos comerciais permanecem com o código-fonte privado. No portfólio aparecem apenas como **cases visuais**, com descrição, stack e screenshots autorizados.

As imagens ficam organizadas em:

```text
public/projects/sistema-gestao/
public/projects/larissa-souza/
public/projects/studio-jazi/
```

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

A saída do Vite é gerada em:

```text
dist/
```

## Cloudflare Pages

Configuração recomendada ao conectar este repositório ao Cloudflare Pages:

```text
Production branch: main
Build command: npm run build
Build output directory: dist
Root directory: /
```

A pasta `functions/` é reconhecida automaticamente pelo Cloudflare Pages e publica o endpoint:

```text
/api/github-projects
```

O secret `GITHUB_TOKEN` é opcional. Quando configurado no Cloudflare, aumenta o limite disponível da GitHub API.

## Domínio

Produção:

```text
https://periclesdev.com.br
```

O domínio deve ser vinculado ao projeto em **Cloudflare Pages → Custom domains**.

---

**PericlesDev**  
Planejo • Desenvolvo • Transformo  
https://periclesdev.com.br

# PericlesDev Portfolio

Portfólio oficial da **PericlesDev** — sistemas de gestão, plataformas de agendamento, landing pages e aplicações para negócios reais.

## Stack

- React
- TypeScript
- Vite
- Vercel Functions
- GitHub API

## Projetos públicos automáticos

O endpoint `api/github-projects.ts` consulta os repositórios públicos de `Pericles-cmyk` e exibe somente os que possuem o topic:

```text
portfolio
```

Para publicar um novo projeto no portfólio, basta adicionar o topic `portfolio` ao repositório no GitHub. O cache do endpoint é de 1 hora.

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

## Deploy

Projeto preparado para Vercel. O token `GITHUB_TOKEN` é opcional e serve apenas para ampliar o limite da API pública do GitHub.

---

**PericlesDev**  
Planejo • Desenvolvo • Transformo  
https://periclesdev.com.br

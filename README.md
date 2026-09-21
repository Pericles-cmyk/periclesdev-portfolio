# PericlesDev Portfolio

Portfólio oficial da **PericlesDev** em **Astro**, otimizado para Cloudflare Workers.

## Arquitetura

- Astro estático
- TypeScript
- CSS sem framework
- JavaScript mínimo
- Cloudflare Worker para `/api/github-projects`
- GitHub API para projetos públicos
- Static Assets da Cloudflare para o frontend

## Projetos públicos automáticos

O Worker consulta os repositórios públicos de `Pericles-cmyk` e retorna apenas os que possuem o topic:

```text
portfolio
```

O próprio repositório `periclesdev-portfolio` é ignorado automaticamente.

## Cases privados

Os projetos comerciais aparecem como cases visuais sem expor o código-fonte:

```text
/projetos/sistema-de-gestao
/projetos/larissa-souza
/projetos/studio-jazi-lino
```

Screenshots aprovados podem ser adicionados em `public/projects/`.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

A saída estática é gerada em:

```text
dist/
```

## Cloudflare

O `wrangler.toml` publica o conteúdo de `dist/` como Static Assets e executa o Worker somente para `/api/*`.

Deploy:

```bash
npm run deploy
```

Domínio oficial:

```text
https://periclesdev.com.br
```

---

**PericlesDev**  
Planejo • Desenvolvo • Transformo

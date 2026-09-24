# AGENTS.md — PericlesDev Portfolio

Este arquivo define regras permanentes para manutenção do portfólio.

## Regra obrigatória ao adicionar um novo projeto

Antes de criar ou atualizar um card, conferir no repositório de origem:

- nome atual do projeto;
- branding/logo atual;
- documentação principal;
- tecnologias realmente utilizadas;
- status atual do projeto;
- URLs públicas autorizadas.

Não inferir stack, status ou identidade visual por versões antigas.

## Padrão visual obrigatório para logos nos cards

**Nunca usar diretamente no card uma logo com fundo transparente sem antes preparar uma versão própria para apresentação.**

Fluxo obrigatório:

```text
logo original
    ↓
versão de apresentação para o portfólio
    ↓
card
```

### Prioridade de assets

1. Se o projeto já possuir uma splash/banner oficial adequada, usar essa versão.
2. Se só existir logo transparente, criar uma versão específica para o card.
3. Manter a logo original intacta: não redesenhar, deformar ou alterar cores da marca.

### Como preparar a versão para o card

- Preferir fundo sólido escuro/preto, compatível com a identidade atual do portfólio.
- Centralizar a marca.
- Preservar a proporção original.
- Nunca esticar a imagem.
- Evitar zoom excessivo.
- Manter área de respiro ao redor da marca.
- Evitar compressão que gere borrado, serrilhado ou perda de contraste.
- Preferir PNG de boa resolução ou WebP de alta qualidade.
- Testar visualmente em desktop e mobile antes de considerar concluído.
- Salvar o asset em:
  `public/projects/<slug>/`

Uma logo transparente só pode ser usada diretamente se estiver comprovadamente legível sobre o fundo do preview sem perda de contraste ou definição.

## Padrão de status

Projetos em desenvolvimento:

- usar `status: 'development'`;
- exibir badge vermelho **Em desenvolvimento**;
- manter o projeto no início da lista;
- não exibir **Ver projeto**, **Visitar** ou link de código enquanto não houver uma versão pública aprovada.

Projetos finalizados/online devem usar apenas os links que forem públicos e autorizados.

## Privacidade

Projetos públicos e privados aparecem juntos para o visitante.

A distinção entre repositório público e privado é interna e não deve ser destacada no card.

Nunca expor código, URLs privadas, credenciais, arquivos internos ou informações de cliente de repositórios privados.

## Validação obrigatória

Para qualquer alteração no portfólio:

1. aplicar a mudança na `main`;
2. criar commit com mensagem clara;
3. aguardar o workflow **Build Portfolio**;
4. considerar a alteração concluída somente com **Build Astro = success**.

Quando houver alteração visual, o sucesso do build não substitui a validação visual do resultado publicado.

---

**PericlesDev — Planejo • Desenvolvo • Transformo**

import type { PortfolioProject } from '../types/project'

export const privateCases: PortfolioProject[] = [
  {
    id: 'sistema-de-gestao',
    title: 'Sistema de Gestão',
    subtitle: 'Operação completa para estabelecimentos',
    description:
      'Solução de gestão com comandas, pedidos, estoque, usuários, pagamentos, impressão, histórico e relatórios. Estruturada para funcionar online ou em rede local, conforme a operação do cliente.',
    stack: ['Node.js', 'SQLite', 'JavaScript', 'LAN', 'PWA'],
    kind: 'private',
    category: 'Gestão',
    image: '/projects/sistema-gestao/cover.webp',
    featured: true,
  },
  {
    id: 'larissa-souza',
    title: 'Larissa Souza | Sobrancelhas BP',
    subtitle: 'Site e fluxo de agendamento',
    description:
      'Experiência de agendamento com consulta e cancelamento seguro, área administrativa, atualização em tempo real e integração com canais de contato.',
    stack: ['React', 'Vite', 'Supabase', 'PostgreSQL', 'Realtime'],
    kind: 'private',
    category: 'Agendamento',
    image: '/projects/larissa-souza/cover.webp',
    featured: true,
  },
  {
    id: 'studio-jazi-lino',
    title: 'Jazi Lino Beauty Studio',
    subtitle: 'Landing page comercial',
    description:
      'Página comercial responsiva para apresentação do studio, serviços, identidade visual e conversão por canais diretos de contato.',
    stack: ['React', 'Vite', 'Vercel'],
    kind: 'private',
    category: 'Landing page',
    image: '/projects/studio-jazi/cover.webp',
    liveUrl: 'https://studiojazilino.periclesdev.com.br/',
    featured: true,
  },
]

export const curatedPublicFallback: PortfolioProject[] = [
  {
    id: 'periclesdev-comanda',
    title: 'PericlesDev Comanda',
    subtitle: 'Base demonstrativa pública para restaurantes',
    description:
      'Sistema web de comandas e mesas para operação em rede local, com React, Node.js, PostgreSQL, Socket.IO, Docker, estoque, pagamentos e impressão térmica.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Socket.IO', 'Docker'],
    kind: 'public',
    category: 'Sistema de gestão',
    repoUrl: 'https://github.com/Pericles-cmyk/periclesdev-comanda',
    featured: true,
  },
  {
    id: 'unicesumar-parking',
    title: 'Sistema de Estacionamento — UniCesumar',
    subtitle: 'Projeto acadêmico público',
    description:
      'Sistema de gerenciamento de estacionamento com implementação web e versão em Python.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Python'],
    kind: 'public',
    category: 'Acadêmico',
    repoUrl: 'https://github.com/Pericles-cmyk/unicesumar-parking',
    liveUrl: 'https://pericles-cmyk.github.io/unicesumar-parking/',
  },
]

export interface PortfolioProject {
  slug: string
  title: string
  subtitle: string
  description: string
  stack: string[]
  category: string
  kind: 'private' | 'public'
  liveUrl?: string
  repoUrl?: string
  featured?: boolean
}

export const privateCases: PortfolioProject[] = [
  {
    slug: 'sistema-de-gestao',
    title: 'Sistema de Gestão',
    subtitle: 'Operação completa para estabelecimentos',
    description:
      'Solução de gestão com comandas, pedidos, estoque, usuários, pagamentos, impressão, histórico e relatórios. Estruturada para funcionar online ou em rede local, conforme a operação do cliente.',
    stack: ['Node.js', 'SQLite', 'JavaScript', 'LAN', 'PWA'],
    category: 'Gestão',
    kind: 'private',
    featured: true,
  },
  {
    slug: 'larissa-souza',
    title: 'Larissa Souza | Sobrancelhas BP',
    subtitle: 'Site e fluxo de agendamento',
    description:
      'Experiência de agendamento com consulta e cancelamento seguro, área administrativa, atualização em tempo real e integração com canais de contato.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Vite', 'Supabase', 'PostgreSQL', 'Realtime'],
    category: 'Agendamento',
    kind: 'private',
    liveUrl: 'https://larissa-souza-studio.vercel.app/',
    featured: true,
  },
  {
    slug: 'studio-jazi-lino',
    title: 'Jazi Lino Beauty Studio',
    subtitle: 'Landing page comercial',
    description:
      'Landing page completa para o Beauty Studio, com serviços, Instagram, galeria, Reels, WhatsApp e painel administrativo conectado ao Supabase em tempo real.',
    stack: ['React', 'Vite', 'Supabase', 'PostgreSQL', 'Realtime'],
    category: 'Landing page',
    kind: 'private',
    liveUrl: 'https://studiojazilino.periclesdev.com.br/',
    featured: true,
  },
]

export const curatedPublicProjects: PortfolioProject[] = [
  {
    slug: 'periclesdev-comanda',
    title: 'PericlesDev Comanda',
    subtitle: 'Base demonstrativa pública para restaurantes',
    description:
      'Sistema web de comandas e mesas para operação em rede local, com controle de estoque, pagamentos e impressão térmica.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Socket.IO', 'Docker'],
    category: 'Sistema de gestão',
    kind: 'public',
    repoUrl: 'https://github.com/Pericles-cmyk/periclesdev-comanda',
    featured: true,
  },
  {
    slug: 'unicesumar-parking',
    title: 'Sistema de Estacionamento — UniCesumar',
    subtitle: 'Projeto acadêmico público',
    description:
      'Sistema de gerenciamento de estacionamento com implementação web e versão em Python.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Python'],
    category: 'Acadêmico',
    kind: 'public',
    repoUrl: 'https://github.com/Pericles-cmyk/unicesumar-parking',
    liveUrl: 'https://pericles-cmyk.github.io/unicesumar-parking/',
  },
]

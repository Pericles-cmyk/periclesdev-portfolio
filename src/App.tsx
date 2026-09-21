import { useEffect, useMemo, useState } from 'react'
import { ProjectCard } from './components/ProjectCard'
import { ProjectModal } from './components/ProjectModal'
import { curatedPublicFallback, privateCases } from './data/privateCases'
import type { GithubProject, PortfolioProject } from './types/project'
import './styles.css'

const GITHUB_PROFILE = 'https://github.com/Pericles-cmyk'
const BRAND_LOGO = 'https://raw.githubusercontent.com/Pericles-cmyk/Pericles-cmyk/main/assets/brand/periclesdev-header.png'
const WHATSAPP = 'https://wa.me/5581994094491?text=Olá%20PericlesDev!%20Quero%20conversar%20sobre%20um%20projeto.'

const solutions = [
  ['01', 'Sistemas de gestão', 'Operação, pedidos, estoque, pagamentos, usuários e relatórios.'],
  ['02', 'Agendamento', 'Plataformas adaptáveis para negócios que trabalham com horários e serviços.'],
  ['03', 'Sites & landing pages', 'Presença digital rápida, responsiva e orientada a conversão.'],
  ['04', 'Aplicações locais', 'Node.js, SQLite, rede LAN, mDNS e instaladores para Windows.'],
]

const process = [
  ['01', 'Entendimento', 'Problema, operação, usuário e objetivo comercial.'],
  ['02', 'UX & fluxo', 'Jornada simples, responsiva e sem etapas desnecessárias.'],
  ['03', 'Desenvolvimento', 'Frontend, backend, APIs e banco de dados.'],
  ['04', 'Infraestrutura', 'Deploy, domínio, rede local e segurança.'],
  ['05', 'Entrega', 'Validação, implantação e evolução da solução.'],
]

function githubToProject(repo: GithubProject): PortfolioProject {
  const title = repo.name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())

  return {
    id: `github-${repo.id}`,
    title,
    subtitle: 'Projeto público sincronizado do GitHub',
    description: repo.description || 'Projeto público desenvolvido pela PericlesDev.',
    stack: [repo.language, ...repo.topics.filter((topic) => topic !== 'portfolio').slice(0, 4)].filter(Boolean) as string[],
    kind: 'public',
    category: repo.topics.find((topic) => topic !== 'portfolio') || 'Open source',
    repoUrl: repo.html_url,
    liveUrl: repo.homepage || undefined,
  }
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [githubProjects, setGithubProjects] = useState<PortfolioProject[]>([])
  const [githubLoading, setGithubLoading] = useState(true)
  const [selected, setSelected] = useState<PortfolioProject | null>(null)

  useEffect(() => {
    let mounted = true
    fetch('/api/github-projects')
      .then((response) => {
        if (!response.ok) throw new Error('GitHub indisponível')
        return response.json()
      })
      .then((data: { projects?: GithubProject[] }) => {
        if (mounted) setGithubProjects((data.projects || []).map(githubToProject))
      })
      .catch(() => {
        if (mounted) setGithubProjects([])
      })
      .finally(() => mounted && setGithubLoading(false))
    return () => { mounted = false }
  }, [])

  const publicProjects = useMemo(() => {
    const dynamicIds = new Set(githubProjects.map((project) => project.repoUrl))
    return [...githubProjects, ...curatedPublicFallback.filter((project) => !dynamicIds.has(project.repoUrl))]
  }, [githubProjects])

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className="nav-shell">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="PericlesDev - início">
          <span className="brand-mark">P</span>
          <span>PericlesDev</span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Abrir menu">☰</button>
        <nav className={menuOpen ? 'nav-links nav-links--open' : 'nav-links'}>
          <a href="#inicio" onClick={closeMenu}>Início</a>
          <a href="#solucoes" onClick={closeMenu}>Soluções</a>
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a href="#processo" onClick={closeMenu}>Processo</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
          <a className="btn btn--primary nav-cta" href={WHATSAPP} target="_blank" rel="noreferrer">Falar comigo</a>
        </nav>
      </header>

      <section className="hero section" id="inicio">
        <div className="hero-copy">
          <span className="chip">PERICLESDEV • SOFTWARE PARA NEGÓCIOS</span>
          <h1>Planejo. Desenvolvo.<br /><span>Transformo negócios com software.</span></h1>
          <p>Sistemas de gestão, plataformas de agendamento, landing pages e aplicações sob medida — do planejamento à entrega.</p>
          <div className="hero-actions">
            <a className="btn btn--primary" href="#projetos">Ver projetos</a>
            <a className="btn btn--secondary" href="#processo">Como eu trabalho</a>
          </div>
          <div className="trust-line">
            <span>● Projetos reais</span>
            <span>● Código público + cases privados</span>
          </div>
        </div>

        <div className="hero-console" aria-label="Resumo dos projetos da PericlesDev">
          <div className="window-bar"><i /><i /><i /><span>periclesdev.com.br</span></div>
          <div className="console-head"><strong>Projetos em produção</strong><span className="live-dot">● Online</span></div>
          <div className="metrics">
            <div><span>Soluções</span><strong>06</strong></div>
            <div><span>Stack</span><strong>10+</strong></div>
            <div><span>Foco</span><strong>Negócios</strong></div>
          </div>
          <div className="console-list">
            <div><span><strong>Sistema de Gestão</strong><small>Node.js • SQLite</small></span><b>PRIVADO</b></div>
            <div><span><strong>Agenda Universal</strong><small>React • Supabase</small></span><b>CASE</b></div>
            <div><span><strong>Portfólio PericlesDev</strong><small>React • GitHub API</small></span><b>PÚBLICO</b></div>
          </div>
        </div>
      </section>

      <section className="identity-strip section-narrow" aria-label="Identidade PericlesDev">
        <img src={BRAND_LOGO} alt="PericlesDev — Planejo, Desenvolvo, Transformo" />
      </section>

      <section className="section section--alt" id="solucoes">
        <div className="section-heading">
          <span className="eyebrow">SOLUÇÕES</span>
          <h2>Tecnologia pensada para operação real.</h2>
          <p>Da presença digital ao sistema que sustenta a rotina do negócio.</p>
        </div>
        <div className="solution-grid">
          {solutions.map(([number, title, description]) => (
            <article className="solution-card" key={number}>
              <span className="number-badge">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projetos">
        <div className="section-heading section-heading--wide">
          <span className="eyebrow">PROJETOS EM DESTAQUE</span>
          <h2>Cases que mostram como necessidades viram produto.</h2>
          <p>
            Os projetos comerciais ficam como cases visuais. Repositórios públicos marcados com o topic
            <code>portfolio</code> entram automaticamente.
          </p>
        </div>
        <div className="project-grid project-grid--private">
          {privateCases.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelected} />
          ))}
        </div>

        <div className="public-heading">
          <div>
            <span className="eyebrow">OPEN SOURCE / GITHUB</span>
            <h2>Projetos públicos</h2>
          </div>
          <a className="text-link" href={GITHUB_PROFILE} target="_blank" rel="noreferrer">Abrir GitHub ↗</a>
        </div>
        <div className="automation-note">
          <span>↻</span>
          <p>Novo repositório público + topic <strong>portfolio</strong> = novo card automático nesta seção.</p>
        </div>
        {githubLoading ? (
          <div className="loading-card">Consultando projetos públicos…</div>
        ) : (
          <div className="project-grid project-grid--public">
            {publicProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        )}
      </section>

      <section className="section section--alt" id="processo">
        <div className="section-heading section-heading--wide">
          <span className="eyebrow">COMO EU TRABALHO</span>
          <h2>Do problema à entrega, sem perder o contexto do negócio.</h2>
          <p>Produto, UX, desenvolvimento, banco de dados e infraestrutura em uma única linha de execução.</p>
        </div>
        <div className="process-grid">
          {process.map(([number, title, description]) => (
            <article className="process-card" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <div className="stack-strip">
          {['React', 'Vite', 'TypeScript', 'Node.js', 'Supabase', 'PostgreSQL', 'SQLite', 'Cloudflare', 'Vercel']
            .map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="section about" id="sobre">
        <div className="about-card">
          <div>
            <span className="eyebrow">PERICLESDEV</span>
            <h2>Software com foco em resolver a operação.</h2>
          </div>
          <p>
            Desenvolvo soluções digitais para empresas e profissionais, conectando interface, regras de negócio,
            dados e infraestrutura. A proposta é criar bases reutilizáveis, mas manter cada entrega adequada ao contexto do cliente.
          </p>
        </div>
      </section>

      <section className="section contact" id="contato">
        <div className="contact-panel">
          <div>
            <span className="eyebrow">VAMOS CONSTRUIR ALGO ÚTIL?</span>
            <h2>Sua próxima solução pode começar por uma conversa.</h2>
            <p>Sistemas, automações, páginas comerciais e aplicações para negócios.</p>
          </div>
          <div className="contact-actions">
            <a className="btn btn--primary" href={WHATSAPP} target="_blank" rel="noreferrer">Falar no WhatsApp</a>
            <a className="btn btn--secondary" href={GITHUB_PROFILE} target="_blank" rel="noreferrer">Ver GitHub</a>
          </div>
        </div>
      </section>

      <footer>
        <img src={BRAND_LOGO} alt="PericlesDev" />
        <p>Desenvolvimento de sistemas, aplicações web e soluções digitais para negócios.</p>
        <div>
          <a href={GITHUB_PROFILE} target="_blank" rel="noreferrer">GitHub</a>
          <span>•</span>
          <a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a>
          <span>•</span>
          <a href="https://periclesdev.com.br">periclesdev.com.br</a>
        </div>
        <small>© {new Date().getFullYear()} PericlesDev. Todos os direitos reservados.</small>
      </footer>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </main>
  )
}

export default App

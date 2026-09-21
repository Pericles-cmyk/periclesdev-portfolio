import type { PortfolioProject } from '../types/project'

interface Props {
  project: PortfolioProject
  onOpen?: (project: PortfolioProject) => void
}

export function ProjectCard({ project, onOpen }: Props) {
  return (
    <article className={`project-card ${project.featured ? 'project-card--featured' : ''}`}>
      <button
        className="project-visual"
        onClick={() => onOpen?.(project)}
        aria-label={`Abrir detalhes de ${project.title}`}
      >
        <div className="project-visual__glow" />
        <div className="project-browser">
          <span /><span /><span />
          <strong>{project.kind === 'private' ? 'CASE PRIVADO' : 'PROJETO PÚBLICO'}</strong>
        </div>
        <div className="project-mock-lines">
          <i /><i /><i /><i />
        </div>
        <span className="project-placeholder">
          {project.image ? 'Screenshot será adicionado aqui' : 'Projeto público'}
        </span>
      </button>

      <div className="project-card__head">
        <div>
          <span className="eyebrow">{project.category}</span>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
        <span className={`status-pill ${project.kind === 'public' ? 'status-pill--public' : ''}`}>
          {project.kind === 'private' ? 'Código privado' : 'GitHub'}
        </span>
      </div>

      <p className="project-description">{project.description}</p>
      <div className="tech-list">
        {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
      </div>

      <div className="project-actions">
        {project.liveUrl && (
          <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">Ver online ↗</a>
        )}
        {project.repoUrl && (
          <a className="text-link" href={project.repoUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
        )}
        {project.kind === 'private' && (
          <button className="text-link button-link" onClick={() => onOpen?.(project)}>Ver case →</button>
        )}
      </div>
    </article>
  )
}

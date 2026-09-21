import { useEffect } from 'react'
import type { PortfolioProject } from '../types/project'

interface Props {
  project: PortfolioProject | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`Case ${project.title}`}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Fechar">×</button>
        <span className="eyebrow">
          {project.kind === 'private' ? 'Projeto comercial · código-fonte privado' : 'Projeto público'}
        </span>
        <h2>{project.title}</h2>
        <p className="modal-lead">{project.description}</p>
        <div className="case-gallery-placeholder">
          <div><strong>Desktop</strong><span>Imagem do projeto</span></div>
          <div><strong>Mobile</strong><span>Imagem do projeto</span></div>
        </div>
        <div className="modal-grid">
          <div><span>Categoria</span><strong>{project.category}</strong></div>
          <div><span>Entrega</span><strong>Solução personalizada</strong></div>
          <div><span>Código</span><strong>{project.kind === 'private' ? 'Privado' : 'Público'}</strong></div>
        </div>
        <div className="tech-list tech-list--large">
          {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
        </div>
        {project.liveUrl && (
          <a className="btn btn--primary modal-cta" href={project.liveUrl} target="_blank" rel="noreferrer">
            Abrir projeto ↗
          </a>
        )}
      </section>
    </div>
  )
}

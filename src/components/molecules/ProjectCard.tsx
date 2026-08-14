import { motion } from 'framer-motion';
import { ActionLink } from '../atoms/ActionLink';
import { Tag } from '../atoms/Tag';
import type { Project } from '../../types/portfolio';

type ProjectCardProps = {
  project: Project;
  index: number;
};

const statusLabel: Record<Project['status'], string> = {
  production: 'En produccion',
  maintenance: 'Mantenimiento',
  mvp: 'MVP'
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <div className="project-header">
        <p className="project-period">{project.period}</p>
        <span className="project-status">{statusLabel[project.status]}</span>
      </div>

      <h3>{project.title}</h3>
      <p className="project-summary">{project.summary}</p>

      <div className="metric-grid">
        {project.metrics.map((metric) => (
          <div key={`${project.title}-${metric.label}`} className="metric-item">
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </div>
        ))}
      </div>

      <ul className="project-highlights">
        {project.highlights.map((highlight) => (
          <li key={`${project.title}-${highlight}`}>{highlight}</li>
        ))}
      </ul>

      <div className="tag-list">
        {project.stack.map((tech) => (
          <Tag key={`${project.title}-${tech}`}>{tech}</Tag>
        ))}
      </div>

      <div className="project-actions">
        {project.links.demo && <ActionLink href={project.links.demo}>Ver demo</ActionLink>}
        {project.links.repository && (
          <ActionLink href={project.links.repository} variant="ghost">
            Repositorio
          </ActionLink>
        )}
        {project.links.caseStudy && (
          <ActionLink href={project.links.caseStudy} variant="ghost">
            Caso de estudio
          </ActionLink>
        )}
      </div>
    </motion.article>
  );
}

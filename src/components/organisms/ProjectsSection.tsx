import { SectionHeading } from '../atoms/SectionHeading';
import { ProjectCard } from '../molecules/ProjectCard';
import type { Project } from '../../types/portfolio';

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="proyectos" className="section-block">
      <SectionHeading
        eyebrow="Portafolio"
        title="Proyectos que reflejan impacto real"
        description="Cada proyecto muestra decisiones de arquitectura, mejora de rendimiento y resultados medibles para negocio."
      />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

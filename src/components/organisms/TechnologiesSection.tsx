import { SectionHeading } from '../atoms/SectionHeading';
import { TechnologyRail } from '../molecules/TechnologyRail';
import type { Technology } from '../../types/portfolio';

type TechnologiesSectionProps = {
  technologies: Technology[];
};

export function TechnologiesSection({ technologies }: TechnologiesSectionProps) {
  return (
    <section id="tecnologias" className="section-block">
      <SectionHeading
        eyebrow="Stack"
        title="Tecnologias con las que trabajo"
        description="Estas herramientas forman la base de mis desarrollos para backend, frontend tecnico, despliegue y pruebas." 
      />
      <TechnologyRail items={technologies} />
    </section>
  );
}

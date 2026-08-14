import { motion } from 'framer-motion';
import type { Technology } from '../../types/portfolio';

type TechnologyRailProps = {
  items: Technology[];
};

const categoryLabels: Record<Technology['category'], string> = {
  backend: 'Backend',
  frontend: 'Frontend',
  database: 'Data',
  devops: 'DevOps',
  testing: 'Testing',
  architecture: 'Arquitectura'
};

export function TechnologyRail({ items }: TechnologyRailProps) {
  return (
    <div className="tech-rail" role="list" aria-label="Tecnologias principales">
      {items.map((item, index) => (
        <motion.article
          role="listitem"
          className="tech-pill"
          key={`${item.name}-${item.category}`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.35, delay: index * 0.04 }}
        >
          <p>{item.name}</p>
          <span>{categoryLabels[item.category]}</span>
        </motion.article>
      ))}
    </div>
  );
}

import { motion } from 'framer-motion';

type HeroSectionProps = {
  name: string;
  role: string;
  location: string;
  intro: string;
  focusAreas: string[];
};

export function HeroSection({ name, role, location, intro, focusAreas }: HeroSectionProps) {
  const profileStats = [
    { value: '4+', label: 'años en Java' },
    { value: '2', label: 'empresas líderes' },
    { value: 'ASO', label: 'arquitectura' },
    { value: '99%', label: 'enfoque en calidad' }
  ];

  return (
    <section className="hero" id="inicio">
      <motion.p
        className="hero-chip"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45 }}
      >
        {role} · {location}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Hola, soy {name}. Construyo software Java preparado para crecer.
      </motion.h1>

      <motion.p
        className="hero-intro"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {intro}
      </motion.p>

      <motion.div
        className="profile-summary"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {profileStats.map((stat) => (
          <div key={stat.label} className="summary-stat">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="hero-focus"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {focusAreas.map((area) => (
          <span key={area}>{area}</span>
        ))}
      </motion.div>
    </section>
  );
}

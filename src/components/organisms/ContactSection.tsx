import { motion } from 'framer-motion';

type ContactSectionProps = {
  email: string;
  linkedin: string;
  github: string;
};

export function ContactSection({ email, linkedin, github }: ContactSectionProps) {
  return (
    <motion.section
      id="contacto"
      className="contact-section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
    >
      <p className="eyebrow">Contacto</p>
      <h2>Conversemos sobre tu siguiente producto Java</h2>
      <p>
        Estoy disponible para proyectos que necesiten una base tecnica solida y escalable.
      </p>
      <div className="contact-links">
        <a href={`mailto:${email}`}>{email}</a>
        <a href={linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </motion.section>
  );
}

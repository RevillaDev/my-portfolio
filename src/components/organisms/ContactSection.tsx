import { useState } from 'react';
import { motion } from 'framer-motion';

type ContactSectionProps = {
  email: string;
  linkedin: string;
  github: string;
};

export function ContactSection({ email, linkedin, github }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

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

      <div className="contact-email-box">
        <span>{email}</span>
      </div>

      <div className="contact-links">
        <a href={`mailto:${email}`}>Enviar email</a>
        <button type="button" className="copy-email-button" onClick={handleCopy}>
          {copied ? 'Copiado' : 'Copiar correo'}
        </button>
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

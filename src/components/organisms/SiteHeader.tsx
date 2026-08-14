import { motion } from 'framer-motion';
import type { NavItem } from '../../types/portfolio';

type SiteHeaderProps = {
  name: string;
  role: string;
  nav: NavItem[];
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

export function SiteHeader({ name, role, nav, theme, onToggleTheme }: SiteHeaderProps) {
  return (
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <p className="site-name">{name}</p>
        <p className="site-role">{role}</p>
      </div>

      <nav aria-label="Navegacion principal">
        <ul>
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
      >
        {theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
      </button>
    </motion.header>
  );
}

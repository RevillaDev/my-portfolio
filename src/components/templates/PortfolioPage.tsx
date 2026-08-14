import { useEffect, useState } from 'react';
import { SiteHeader } from '../organisms/SiteHeader';
import { HeroSection } from '../organisms/HeroSection';
import { TechnologiesSection } from '../organisms/TechnologiesSection';
import { ProjectsSection } from '../organisms/ProjectsSection';
import { ContactSection } from '../organisms/ContactSection';
import type { PortfolioData } from '../../types/portfolio';

type PortfolioPageProps = {
  data: PortfolioData;
};

export function PortfolioPage({ data }: PortfolioPageProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');

    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
      document.documentElement.dataset.theme = savedTheme;
      return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = prefersDark ? 'dark' : 'light';
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  const handleToggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem('portfolio-theme', nextTheme);
  };

  return (
    <div className="portfolio-shell">
      <div className="background-orb background-orb-a" aria-hidden="true" />
      <div className="background-orb background-orb-b" aria-hidden="true" />

      <SiteHeader
        name={data.name}
        role={data.role}
        nav={data.nav}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      <main>
        <HeroSection
          name={data.name}
          role={data.role}
          location={data.location}
          intro={data.intro}
          focusAreas={data.focusAreas}
        />

        <div className="profile-rule" aria-label="Especialidades principales">
          <span>Backend Java</span>
          <span>Spring Framework</span>
          <span>APIs robustas</span>
          <span>Calidad y escalabilidad</span>
        </div>

        <TechnologiesSection technologies={data.technologies} />
        <ProjectsSection projects={data.projects} />
        <ContactSection
          email={data.contact.email}
          linkedin={data.contact.linkedin}
          github={data.contact.github}
        />
      </main>
    </div>
  );
}

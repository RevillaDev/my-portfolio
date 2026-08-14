export type NavItem = {
  label: string;
  href: string;
};

export type Technology = {
  name: string;
  category: 'backend' | 'frontend' | 'database' | 'devops' | 'testing' | 'architecture';
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  title: string;
  summary: string;
  stack: string[];
  highlights: string[];
  period: string;
  status: 'production' | 'maintenance' | 'mvp';
  metrics: ProjectMetric[];
  links: {
    demo?: string;
    repository?: string;
    caseStudy?: string;
  };
};

export type PortfolioData = {
  name: string;
  role: string;
  location: string;
  intro: string;
  focusAreas: string[];
  nav: NavItem[];
  technologies: Technology[];
  projects: Project[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
};

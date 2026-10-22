import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  name: 'Pool Revilla',
  role: 'Java Developer',
  location: 'Lima, Peru',
  intro:
    'Diseño y construyo aplicaciones Java escalables con enfoque en calidad, rendimiento y mantenibilidad. Mi experiencia principal esta en ecosistemas Spring y arquitecturas modulares para productos de negocio.',
  focusAreas: [
    'Arquitectura limpia y orientada al dominio',
    'APIs robustas con Spring Boot',
    'Pruebas automatizadas y calidad continua',
    'Despliegues confiables con CI/CD'
  ],
  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Tecnologias', href: '#tecnologias' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Contacto', href: '#contacto' }
  ],
  technologies: [
    { name: 'Java 17', category: 'backend' },
    { name: 'Java 8', category: 'backend' },
    { name: 'Spring Framework', category: 'backend' },
    { name: 'Spring Boot', category: 'backend' },
    { name: 'Spring WebFlux', category: 'backend' },
    { name: 'Project Reactor', category: 'backend' },
    { name: 'Spring Cloud', category: 'backend' },
    { name: 'Hibernate', category: 'backend' },
    { name: 'Java EE', category: 'backend' },
    { name: 'REST APIs', category: 'architecture' },
    { name: 'Arquitectura ASO', category: 'architecture' },
    { name: 'Podman', category: 'devops' },
    { name: 'SonarQube', category: 'devops' },
    { name: 'Azure', category: 'devops' },
    { name: 'GitHub', category: 'devops' },
    { name: 'Git', category: 'devops' },
    { name: 'JUnit 5', category: 'testing' },
    { name: 'Mockito', category: 'testing' },
    { name: 'AngularJS', category: 'frontend' }
  ],
  projects: [
    {
      title: 'BBVA ASO Enterprise Services',
      summary:
        'Desarrollo y evolucion de servicios empresariales para BBVA sobre tecnologia ASO desde Entelgy, con foco en estabilidad operativa, calidad de codigo y mantenibilidad de componentes core.',
      stack: ['Java 17', 'Spring Framework', 'Java EE', 'Mockito', 'Podman', 'SonarQube', 'GitHub', 'Git'],
      highlights: [
        'Implementacion y mejora continua de servicios Java para procesos criticos del negocio bancario.',
        'Aplicacion de pruebas unitarias con Mockito para reducir regresiones en entregas funcionales.',
        'Fortalecimiento de calidad tecnica mediante controles SonarQube y estandares de versionado en GitHub/Git.'
      ],
      period: 'Sep 2022 - Actualidad',
      status: 'production',
      metrics: [
        { label: 'Entregas continuas', value: 'Sprints quincenales' },
        { label: 'Calidad de codigo', value: 'Gate SonarQube en cada release' },
        { label: 'Cobertura de pruebas', value: 'Estrategia activa con Mockito' }
      ],
      links: {}
    },
    {
      title: 'Claro Colombia Digital Flows',
      summary:
        'Participacion en el desarrollo de soluciones para Claro Colombia desde Wigilabs, integrando backend Java y frontend AngularJS para flujos digitales orientados a cliente final.',
      stack: ['Java 8', 'AngularJS', 'Git', 'Azure'],
      highlights: [
        'Construccion de modulos funcionales para flujos de atencion y autogestion digital.',
        'Coordinacion con equipos tecnicos para despliegues controlados en entornos Azure.',
        'Mantenimiento evolutivo de funcionalidades existentes con foco en continuidad operativa.'
      ],
      period: 'Antes de Sep 2022',
      status: 'maintenance',
      metrics: [
        { label: 'Stack principal', value: 'Java 8 + AngularJS' },
        { label: 'Colaboracion', value: 'Trabajo coordinado con multiples equipos' },
        { label: 'Despliegue', value: 'Flujo soportado en Azure' }
      ],
      links: {}
    }
  ],
  contact: {
    email: 'pooleduardorevilla@gmail.com',
    linkedin: 'https://www.linkedin.com/in/pool-eduardo-revilla/',
    github: 'https://github.com/RevillaDev'
  }
};

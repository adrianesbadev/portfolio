import type { Locale } from '../i18n/config';

interface LocalizedText {
  es: string;
  en: string;
}

interface LocalizedTextList {
  es: string[];
  en: string[];
}

export interface ProjectCaseStudy {
  problem: string;
  role: string;
  keyDecision: string;
  result: string;
  constraints: string[];
  tradeoffs: string[];
  impact: string[];
  nextStep?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  year?: string;
  status: 'public' | 'private';
  caseStudy: ProjectCaseStudy;
}

interface ProjectSource {
  id: string;
  title: string;
  description: LocalizedText;
  image?: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  year?: string;
  status: 'public' | 'private';
  caseStudy: {
    problem: LocalizedText;
    role: LocalizedText;
    keyDecision: LocalizedText;
    result: LocalizedText;
    constraints: LocalizedTextList;
    tradeoffs: LocalizedTextList;
    impact: LocalizedTextList;
    nextStep?: LocalizedText;
  };
}

const projectsSource: ProjectSource[] = [
  {
    id: '1',
    title: 'GarageGest',
    description: {
      es: 'Sistema de gestión para talleres mecánicos, diseñado para reducir fricción operativa y centralizar seguimiento de trabajo.',
      en: 'A management system for auto repair shops, designed to reduce operational friction and centralize workflow tracking.',
    },
    image: '/projects/garagegest.webp',
    tags: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf', 'Spring Security', 'PDFBox'],
    repoUrl: 'https://github.com/adrianesbadev/garagegest-app',
    featured: true,
    year: '2026',
    status: 'public',
    caseStudy: {
      problem: {
        es: 'La gestión diaria de clientes, vehículos, órdenes y facturas estaba fragmentada y generaba errores manuales frecuentes.',
        en: 'Daily management of customers, vehicles, work orders, and invoices was fragmented and created frequent manual errors.',
      },
      role: {
        es: 'Lideré el diseño e implementación Full-Stack: modelo de datos, backend, interfaz y flujos de operación por rol.',
        en: 'I led full-stack design and implementation: data model, backend, interface, and role-based operational flows.',
      },
      keyDecision: {
        es: 'Construir primero el flujo núcleo de orden de trabajo y facturación, antes de ampliar funcionalidades secundarias.',
        en: 'Build the core work-order and invoicing flow first, before extending secondary features.',
      },
      result: {
        es: 'Se consolidó la operación principal en un único sistema web con trazabilidad de estados y salida de factura en PDF.',
        en: 'The main operation was consolidated into a single web system with status traceability and PDF invoice output.',
      },
      constraints: {
        es: [
          'Proyecto con alcance y tiempo cerrados por calendario académico.',
          'Sin equipo dedicado de producto o QA.',
          'Necesidad de cubrir un ciclo completo de trabajo en primera versión.',
        ],
        en: [
          'Project with fixed scope and timeline due to an academic calendar.',
          'No dedicated product or QA team.',
          'Need to cover a full operational workflow in the first version.',
        ],
      },
      tradeoffs: {
        es: [
          'Thymeleaf en lugar de SPA para acelerar entrega y simplificar mantenimiento inicial.',
          'Prioridad en consistencia funcional y validaciones frente a personalización visual avanzada.',
        ],
        en: [
          'Thymeleaf instead of a SPA to speed up delivery and simplify initial maintenance.',
          'Prioritized functional consistency and validations over advanced visual customization.',
        ],
      },
      impact: {
        es: [
          'Menor fricción en tareas administrativas del día a día.',
          'Mejor visibilidad del estado de trabajo por perfil de usuario.',
          'Base técnica preparada para siguiente fase de métricas operativas.',
        ],
        en: [
          'Lower friction in day-to-day administrative tasks.',
          'Better visibility of work status by user profile.',
          'Technical base prepared for the next phase of operational metrics.',
        ],
      },
      nextStep: {
        es: 'Implementar panel de métricas de rendimiento operativo por tipo de orden y tiempos medios de resolución.',
        en: 'Implement an operational performance dashboard by order type and average resolution times.',
      },
    },
  },
  {
    id: '2',
    title: 'AUCORSA Planner',
    description: {
      es: 'Planificador de rutas de transporte urbano con datos GTFS reales y foco en experiencia de búsqueda clara y rápida.',
      en: 'Urban transport route planner with real GTFS data and a focus on clear, fast search experience.',
    },
    image: '/projects/aucorsaplanner.webp',
    tags: ['Astro', 'React', 'TypeScript', 'Node.js', 'Express', 'Leaflet', 'GTFS'],
    featured: true,
    year: '2026',
    status: 'private',
    caseStudy: {
      problem: {
        es: 'Consultar rutas urbanas suele requerir varias fuentes y genera una experiencia de decisión lenta para el usuario.',
        en: 'Checking urban routes usually requires multiple sources and creates a slow decision experience for users.',
      },
      role: {
        es: 'Responsable de implementación frontend y colaboración en decisiones de arquitectura para la capa interactiva.',
        en: 'Responsible for frontend implementation and collaboration on architecture decisions for the interactive layer.',
      },
      keyDecision: {
        es: 'Usar Astro como base de rendimiento y React en islas para buscador y mapa, equilibrando carga y dinamismo.',
        en: 'Use Astro as the performance base and React islands for search and map, balancing load and interactivity.',
      },
      result: {
        es: 'La consulta de rutas quedó concentrada en un flujo único con contexto de línea, paradas y tramo a pie.',
        en: 'Route lookup was consolidated into a single flow with line context, stops, and walking segment.',
      },
      constraints: {
        es: [
          'Proyecto colaborativo en repositorio privado.',
          'Dependencia de calidad y actualización de datos GTFS.',
          'Objetivo de mantener buena respuesta en dispositivos medios.',
        ],
        en: [
          'Collaborative project in a private repository.',
          'Dependent on GTFS data quality and update cadence.',
          'Goal to keep good responsiveness on mid-range devices.',
        ],
      },
      tradeoffs: {
        es: [
          'Se descartó SPA completa para mantener tiempos de carga inicial más contenidos.',
          'Se priorizó legibilidad del flujo de búsqueda frente a añadir funcionalidades accesorias.',
        ],
        en: [
          'A full SPA was discarded to keep initial load times more contained.',
          'Search-flow readability was prioritized over adding accessory features.',
        ],
      },
      impact: {
        es: [
          'Menos fricción para comparar alternativas de ruta en una sola pantalla.',
          'Mejor equilibrio entre interactividad y rendimiento percibido.',
          'Base preparada para apertura pública de la versión cuando finalice fase privada.',
        ],
        en: [
          'Less friction when comparing route alternatives on a single screen.',
          'Better balance between interactivity and perceived performance.',
          'Foundation ready for public release once the private phase is complete.',
        ],
      },
      nextStep: {
        es: 'TODO: Publicar métricas reales de uso una vez se abra la versión pública.',
        en: 'TODO: Publish real usage metrics once the public version is released.',
      },
    },
  },
];

function pickText(text: LocalizedText, locale: Locale): string {
  return text[locale];
}

function pickList(list: LocalizedTextList, locale: Locale): string[] {
  return list[locale];
}

function localizeProject(project: ProjectSource, locale: Locale): Project {
  return {
    id: project.id,
    title: project.title,
    description: pickText(project.description, locale),
    image: project.image,
    tags: project.tags,
    repoUrl: project.repoUrl,
    demoUrl: project.demoUrl,
    featured: project.featured,
    year: project.year,
    status: project.status,
    caseStudy: {
      problem: pickText(project.caseStudy.problem, locale),
      role: pickText(project.caseStudy.role, locale),
      keyDecision: pickText(project.caseStudy.keyDecision, locale),
      result: pickText(project.caseStudy.result, locale),
      constraints: pickList(project.caseStudy.constraints, locale),
      tradeoffs: pickList(project.caseStudy.tradeoffs, locale),
      impact: pickList(project.caseStudy.impact, locale),
      nextStep: project.caseStudy.nextStep ? pickText(project.caseStudy.nextStep, locale) : undefined,
    },
  };
}

export function getProjects(locale: Locale): Project[] {
  return projectsSource.map((project) => localizeProject(project, locale));
}

export function getFeaturedProjects(locale: Locale): Project[] {
  return getProjects(locale).filter((project) => project.featured);
}

export const allTags = Array.from(new Set(projectsSource.flatMap((project) => project.tags))).sort();

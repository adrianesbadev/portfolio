import type { Locale } from '../i18n/config';

interface LocalizedText {
  es: string;
  en: string;
}

interface LocalizedTextList {
  es: string[];
  en: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  location?: string;
  summary: string;
  highlights: string[];
  impact: string;
  technologies: string[];
  current?: boolean;
}

interface ExperienceSource {
  id: string;
  company: string;
  position: LocalizedText;
  startDate: LocalizedText;
  endDate?: LocalizedText;
  location?: LocalizedText;
  summary: LocalizedText;
  highlights: LocalizedTextList;
  impact: LocalizedText;
  technologies: string[];
  current?: boolean;
}

const experienceSource: ExperienceSource[] = [
  {
    id: '1',
    company: 'PuntoJS Estudio Creativo',
    position: {
      es: 'Desarrollador en prácticas',
      en: 'Web Developer Intern',
    },
    startDate: {
      es: 'Enero 2026',
      en: 'January 2026',
    },
    endDate: undefined,
    location: {
      es: 'Palma del Río, Córdoba, España',
      en: 'Palma del Río, Cordoba, Spain',
    },
    summary: {
      es: 'Participación en proyectos web reales con foco en consistencia visual, mantenimiento de interfaz y ejecución de entregas en plazo.',
      en: 'Contributed to real web projects focused on visual consistency, interface maintenance, and on-time delivery execution.',
    },
    highlights: {
      es: [
        'Colaboración en implementación y ajustes frontend orientados a claridad de uso.',
        'Soporte en refinado de componentes UI para mantener consistencia entre páginas y flujos.',
        'Trabajo coordinado en entregas incrementales con revisiones rápidas del equipo.',
      ],
      en: [
        'Collaborated on frontend implementation and adjustments focused on usage clarity.',
        'Supported UI component refinement to keep consistency across pages and flows.',
        'Worked on incremental deliveries with fast team review cycles.',
      ],
    },
    impact: {
      es: 'Contribución estable en entornos de producción real, mejorando la fiabilidad visual y funcional de entregas iterativas.',
      en: 'Provided stable contribution in real production environments, improving visual and functional reliability in iterative deliveries.',
    },
    technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Elementor'],
    current: true,
  },
  {
    id: '2',
    company: 'Xensify',
    position: {
      es: 'Desarrollador en prácticas (Erasmus)',
      en: 'Developer Intern (Erasmus)',
    },
    startDate: {
      es: 'Marzo 2025',
      en: 'March 2025',
    },
    endDate: {
      es: 'Junio 2025',
      en: 'June 2025',
    },
    location: {
      es: 'Busto Arsizio, Lombardía, Italia',
      en: 'Busto Arsizio, Lombardy, Italy',
    },
    summary: {
      es: 'Rol mixto técnico-producto en entorno internacional, combinando desarrollo, integraciones y optimización de experiencia móvil.',
      en: 'Mixed technical-product role in an international environment, combining development, integrations, and mobile experience optimization.',
    },
    highlights: {
      es: [
        'Integración de Stripe y PaidMembershipPro en flujos WordPress de suscripción y pago.',
        'Automatización en Python para migración de contenidos multimedia y tareas repetitivas.',
        'Mejora de coherencia UI en menús y botones, reforzando usabilidad móvil.',
      ],
      en: [
        'Integrated Stripe and PaidMembershipPro into WordPress subscription and payment flows.',
        'Built Python automation for media migration and repetitive operational tasks.',
        'Improved UI consistency in menus and buttons, reinforcing mobile usability.',
      ],
    },
    impact: {
      es: 'Se redujo fricción operativa en publicación y cobro de contenido digital, con una experiencia de usuario más consistente en dispositivos móviles.',
      en: 'Reduced operational friction in digital content publishing and payments, with a more consistent user experience on mobile devices.',
    },
    technologies: ['WordPress', 'Python', 'JavaScript', 'HTML', 'CSS', 'Stripe', 'PaidMembershipPro'],
    current: false,
  },
];

function pickText(text: LocalizedText, locale: Locale): string {
  return text[locale];
}

function pickList(textList: LocalizedTextList, locale: Locale): string[] {
  return textList[locale];
}

export function getExperiences(locale: Locale): Experience[] {
  return experienceSource.map((experience) => ({
    id: experience.id,
    company: experience.company,
    position: pickText(experience.position, locale),
    startDate: pickText(experience.startDate, locale),
    endDate: experience.endDate ? pickText(experience.endDate, locale) : undefined,
    location: experience.location ? pickText(experience.location, locale) : undefined,
    summary: pickText(experience.summary, locale),
    highlights: pickList(experience.highlights, locale),
    impact: pickText(experience.impact, locale),
    technologies: experience.technologies,
    current: experience.current,
  }));
}

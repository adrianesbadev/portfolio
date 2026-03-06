import type { Locale } from '../i18n/config';

interface LocalizedText {
  es: string;
  en: string;
}

export const personalInfo = {
  name: 'Adrián',
  fullName: 'Adrián Esquivel Barrera',
  role: {
    es: 'Desarrollador Full-Stack orientado a producto',
    en: 'Product-oriented Full-Stack Developer',
  },
  location: {
    es: 'Córdoba, España',
    en: 'Cordoba, Spain',
  },
  bio: {
    es: 'Construyo productos web con foco en claridad, rendimiento y mantenibilidad. Me interesa resolver problemas reales con decisiones técnicas justificadas y una UX limpia.',
    en: 'I build web products focused on clarity, performance, and maintainability. I care about solving real problems through justified technical decisions and clean UX.',
  },
  headline: {
    es: 'Diseño y desarrollo productos web funcionales, claros y listos para operar en contextos reales.',
    en: 'I design and build web products that are clear, functional, and ready for real-world operation.',
  },
  subheadline: {
    es: 'Perfil early-career con mentalidad de producto. Trabajo end-to-end, priorizando impacto, calidad de entrega y mantenibilidad.',
    en: 'Early-career profile with a product mindset. I work end-to-end, prioritizing impact, delivery quality, and maintainability.',
  },
  email: 'adrianesba@gmail.com',
  social: {
    github: 'https://github.com/adrianesbadev',
    linkedin: 'https://www.linkedin.com/in/adrianesbadev/',
  },
  availableForWork: true,
  responseTime: '24-48h',
} as const satisfies {
  name: string;
  fullName: string;
  role: LocalizedText;
  location: LocalizedText;
  bio: LocalizedText;
  headline: LocalizedText;
  subheadline: LocalizedText;
  email: string;
  social: {
    github: string;
    linkedin: string;
  };
  availableForWork: boolean;
  responseTime: string;
};

export interface LocalizedPersonalInfo {
  name: string;
  fullName: string;
  role: string;
  location: string;
  bio: string;
  headline: string;
  subheadline: string;
  email: string;
  social: {
    github: string;
    linkedin: string;
  };
  availableForWork: boolean;
  responseTime: string;
}

function pickLocalizedText(text: LocalizedText, locale: Locale): string {
  return text[locale];
}

export function getPersonalInfo(locale: Locale): LocalizedPersonalInfo {
  return {
    name: personalInfo.name,
    fullName: personalInfo.fullName,
    role: pickLocalizedText(personalInfo.role, locale),
    location: pickLocalizedText(personalInfo.location, locale),
    bio: pickLocalizedText(personalInfo.bio, locale),
    headline: pickLocalizedText(personalInfo.headline, locale),
    subheadline: pickLocalizedText(personalInfo.subheadline, locale),
    email: personalInfo.email,
    social: personalInfo.social,
    availableForWork: personalInfo.availableForWork,
    responseTime: personalInfo.responseTime,
  };
}

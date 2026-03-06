import type { Locale } from './config';

export interface TranslationDictionary {
  nav: {
    home: string;
    projects: string;
    about: string;
    experience: string;
    contact: string;
  };
  header: {
    brandSubtitle: string;
    cta: string;
    mobileMenuOpenLabel: string;
    mobileMenuCloseLabel: string;
  };
  controls: {
    theme: {
      label: string;
      light: string;
      dark: string;
      system: string;
      lightAria: string;
      darkAria: string;
      systemAria: string;
    };
    language: {
      label: string;
      spanish: string;
      english: string;
      spanishAria: string;
      englishAria: string;
      codeEs: string;
      codeEn: string;
    };
  };
  hero: {
    kicker: string;
    statProjects: string;
    statExperience: string;
    statResponse: string;
    primaryCta: string;
    secondaryCta: string;
    focusItems: string[];
  };
  projects: {
    kicker: string;
    title: string;
    intro: string;
  };
  projectCard: {
    caseLabel: string;
    problem: string;
    keyDecision: string;
    result: string;
    roleScope: string;
    tradeoffs: string;
    impact: string;
    nextStep: string;
    secondaryStack: string;
    code: string;
    requestAccess: string;
    discussCase: string;
    caseAria: string;
  };
  about: {
    kicker: string;
    title: string;
    principles: Array<{ title: string; description: string }>;
    contributionTitle: string;
    contributionAreas: string[];
    coreStackTitle: string;
    secondaryStackTitle: string;
  };
  experience: {
    kicker: string;
    title: string;
    intro: string;
    present: string;
    impact: string;
  };
  contact: {
    kicker: string;
    title: string;
    intro: string;
    contextLead: string;
    collaborationModes: string[];
    emailLabel: string;
    linkedinLabel: string;
    linkedinCta: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitIdle: string;
      submitLoading: string;
      success: string;
      errorDefault: string;
    };
    validation: {
      nameMin: string;
      emailInvalid: string;
      messageMin: string;
      emailJsMissing: string;
      emailJsLoadError: string;
      emailJsUnavailable: string;
      sendFallback: string;
    };
  };
  footer: {
    sectionLabel: string;
    statement: string;
    linkedinLabel: string;
  };
  notFound: {
    title: string;
    description: string;
    backHome: string;
    viewProjects: string;
  };
}

const translations: Record<Locale, TranslationDictionary> = {
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Casos',
      about: 'Enfoque',
      experience: 'Experiencia',
      contact: 'Contacto',
    },
    header: {
      brandSubtitle: 'Product-minded Full-Stack',
      cta: 'Hablemos',
      mobileMenuOpenLabel: 'Abrir menú',
      mobileMenuCloseLabel: 'Cerrar menú',
    },
    controls: {
      theme: {
        label: 'Tema',
        light: 'Claro',
        dark: 'Oscuro',
        system: 'Sistema',
        lightAria: 'Cambiar a tema claro',
        darkAria: 'Cambiar a tema oscuro',
        systemAria: 'Seguir preferencia del sistema',
      },
      language: {
        label: 'Idioma',
        spanish: 'Español',
        english: 'English',
        spanishAria: 'Cambiar idioma a español',
        englishAria: 'Change language to English',
        codeEs: 'ES',
        codeEn: 'EN',
      },
    },
    hero: {
      kicker: 'Portfolio · Product-minded Developer',
      statProjects: 'Casos seleccionados',
      statExperience: 'Experiencias profesionales',
      statResponse: 'Tiempo de respuesta',
      primaryCta: 'Ver casos',
      secondaryCta: 'Agendar conversación',
      focusItems: [
        'Frontend con foco en legibilidad y rendimiento.',
        'Backend orientado a reglas de negocio claras.',
        'Entrega iterativa con criterio de producto.',
      ],
    },
    projects: {
      kicker: 'Casos seleccionados',
      title: 'Proyectos presentados por decisiones e impacto',
      intro:
        'Esta selección prioriza criterio de producto: contexto, decisiones clave, tradeoffs y resultado. No es un listado exhaustivo de todo lo que he construido.',
    },
    projectCard: {
      caseLabel: 'Caso',
      problem: 'Problema',
      keyDecision: 'Decisión clave',
      result: 'Resultado',
      roleScope: 'Rol y alcance',
      tradeoffs: 'Tradeoffs',
      impact: 'Impacto',
      nextStep: 'Siguiente paso',
      secondaryStack: 'Stack secundario',
      code: 'Código',
      requestAccess: 'Consultar acceso',
      discussCase: 'Hablemos del caso',
      caseAria: 'Caso',
    },
    about: {
      kicker: 'Enfoque de trabajo',
      title: 'Cómo pienso y cómo ejecuto',
      principles: [
        {
          title: 'Primero defino el problema',
          description: 'No empiezo por tecnología. Empiezo por contexto, restricciones y objetivo de negocio.',
        },
        {
          title: 'Decisiones explícitas',
          description: 'Documento tradeoffs clave para que el equipo entienda por qué se eligió un camino y no otro.',
        },
        {
          title: 'Entrega útil desde el primer sprint',
          description: 'Prefiero iteraciones pequeñas y operables antes que una gran entrega difícil de validar.',
        },
      ],
      contributionTitle: 'Dónde aporto valor',
      contributionAreas: [
        'Frontend: diseño de flujos, implementación UI y optimización de legibilidad/performance.',
        'Backend: modelado de reglas de negocio, validaciones y endpoints mantenibles.',
        'Producto: priorización de alcance y foco en impacto real para usuario o equipo.',
      ],
      coreStackTitle: 'Stack principal',
      secondaryStackTitle: 'También trabajo con',
    },
    experience: {
      kicker: 'Experiencia',
      title: 'Contribución en entornos reales',
      intro: 'Resumo cada etapa por contexto, decisiones ejecutadas e impacto observable.',
      present: 'Presente',
      impact: 'Impacto',
    },
    contact: {
      kicker: 'Contacto',
      title: 'Si encaja el contexto, avanzamos',
      intro: 'Trabajo especialmente bien en equipos que valoran claridad, foco y ejecución consistente.',
      contextLead: 'Escribe con un resumen del contexto y objetivo. Suelo responder en {responseTime}.',
      collaborationModes: [
        'Incorporación a equipo de producto o desarrollo.',
        'Colaboración en proyecto web con alcance definido.',
        'Soporte en implementación y mejora de experiencia de usuario.',
      ],
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      linkedinCta: 'Perfil profesional',
      form: {
        nameLabel: 'Nombre',
        namePlaceholder: 'Tu nombre',
        emailLabel: 'Email',
        emailPlaceholder: 'tu@email.com',
        messageLabel: 'Mensaje',
        messagePlaceholder: 'Describe brevemente el contexto y objetivo',
        submitIdle: 'Enviar mensaje',
        submitLoading: 'Enviando...',
        success: 'Mensaje enviado correctamente.',
        errorDefault: 'No se pudo enviar el mensaje.',
      },
      validation: {
        nameMin: 'El nombre debe tener al menos 2 caracteres.',
        emailInvalid: 'Introduce un email válido.',
        messageMin: 'El mensaje debe tener al menos 10 caracteres.',
        emailJsMissing: 'TODO: Configura EmailJS en variables de entorno para habilitar el envío.',
        emailJsLoadError: 'No se pudo cargar EmailJS.',
        emailJsUnavailable: 'EmailJS no está disponible.',
        sendFallback: 'Hubo un error al enviar. Escríbeme a {contactEmail}.',
      },
    },
    footer: {
      sectionLabel: 'Portfolio',
      statement: 'Desarrollo y diseño de producto web con foco en ejecución clara y mantenible.',
      linkedinLabel: 'LinkedIn',
    },
    notFound: {
      title: 'Esta página no está disponible',
      description:
        'Puede que la URL haya cambiado o que el enlace esté roto. Puedes volver al inicio o revisar los casos publicados.',
      backHome: 'Volver al inicio',
      viewProjects: 'Ver casos',
    },
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Cases',
      about: 'Approach',
      experience: 'Experience',
      contact: 'Contact',
    },
    header: {
      brandSubtitle: 'Product-minded Full-Stack',
      cta: "Let's talk",
      mobileMenuOpenLabel: 'Open menu',
      mobileMenuCloseLabel: 'Close menu',
    },
    controls: {
      theme: {
        label: 'Theme',
        light: 'Light',
        dark: 'Dark',
        system: 'System',
        lightAria: 'Switch to light theme',
        darkAria: 'Switch to dark theme',
        systemAria: 'Follow system preference',
      },
      language: {
        label: 'Language',
        spanish: 'Español',
        english: 'English',
        spanishAria: 'Cambiar idioma a español',
        englishAria: 'Switch language to English',
        codeEs: 'ES',
        codeEn: 'EN',
      },
    },
    hero: {
      kicker: 'Portfolio · Product-minded Developer',
      statProjects: 'Selected cases',
      statExperience: 'Professional experiences',
      statResponse: 'Response time',
      primaryCta: 'View cases',
      secondaryCta: 'Book a conversation',
      focusItems: [
        'Frontend focused on clarity, readability, and performance.',
        'Backend built around explicit business rules.',
        'Iterative delivery guided by product criteria.',
      ],
    },
    projects: {
      kicker: 'Selected cases',
      title: 'Projects presented through decisions and impact',
      intro:
        'This selection is product-first: context, key decisions, tradeoffs, and outcomes. It is not an exhaustive list of everything I have built.',
    },
    projectCard: {
      caseLabel: 'Case',
      problem: 'Problem',
      keyDecision: 'Key decision',
      result: 'Result',
      roleScope: 'Role and scope',
      tradeoffs: 'Tradeoffs',
      impact: 'Impact',
      nextStep: 'Next step',
      secondaryStack: 'Secondary stack',
      code: 'Code',
      requestAccess: 'Request access',
      discussCase: 'Discuss this case',
      caseAria: 'Case',
    },
    about: {
      kicker: 'Working approach',
      title: 'How I think and how I execute',
      principles: [
        {
          title: 'I define the problem first',
          description: 'I do not start with tech. I start with context, constraints, and business goals.',
        },
        {
          title: 'Explicit decisions',
          description: 'I document key tradeoffs so the team understands why a path was chosen.',
        },
        {
          title: 'Useful delivery from sprint one',
          description: 'I prefer small, operable iterations over one large delivery that is hard to validate.',
        },
      ],
      contributionTitle: 'Where I add value',
      contributionAreas: [
        'Frontend: flow design, UI implementation, and readability/performance improvements.',
        'Backend: business-rule modeling, validations, and maintainable endpoints.',
        'Product: scope prioritization and focus on practical impact for users and teams.',
      ],
      coreStackTitle: 'Core stack',
      secondaryStackTitle: 'Also working with',
    },
    experience: {
      kicker: 'Experience',
      title: 'Contribution in real environments',
      intro: 'Each stage is summarized by context, executed decisions, and observable impact.',
      present: 'Present',
      impact: 'Impact',
    },
    contact: {
      kicker: 'Contact',
      title: 'If the context fits, we can move forward',
      intro: 'I work best with teams that value clarity, focus, and consistent execution.',
      contextLead: 'Share a brief summary of your context and goal. I usually respond within {responseTime}.',
      collaborationModes: [
        'Joining a product or development team.',
        'Collaboration on a scoped web project.',
        'Implementation support and user experience improvements.',
      ],
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      linkedinCta: 'Professional profile',
      form: {
        nameLabel: 'Name',
        namePlaceholder: 'Your name',
        emailLabel: 'Email',
        emailPlaceholder: 'you@email.com',
        messageLabel: 'Message',
        messagePlaceholder: 'Briefly describe the context and objective',
        submitIdle: 'Send message',
        submitLoading: 'Sending...',
        success: 'Message sent successfully.',
        errorDefault: 'Message could not be sent.',
      },
      validation: {
        nameMin: 'Name must have at least 2 characters.',
        emailInvalid: 'Please enter a valid email address.',
        messageMin: 'Message must have at least 10 characters.',
        emailJsMissing: 'TODO: Configure EmailJS environment variables to enable sending.',
        emailJsLoadError: 'EmailJS could not be loaded.',
        emailJsUnavailable: 'EmailJS is not available.',
        sendFallback: 'There was an error sending the message. Reach me at {contactEmail}.',
      },
    },
    footer: {
      sectionLabel: 'Portfolio',
      statement: 'Web product design and development focused on clear and maintainable execution.',
      linkedinLabel: 'LinkedIn',
    },
    notFound: {
      title: 'This page is not available',
      description:
        'The URL may have changed or the link may be broken. You can return home or review published cases.',
      backHome: 'Back to home',
      viewProjects: 'View cases',
    },
  },
};

export function getTranslations(locale: Locale): TranslationDictionary {
  return translations[locale];
}

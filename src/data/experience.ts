export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string; // Si no hay endDate, se muestra "Presente"
  location?: string;
  description: string;
  technologies?: string[]; // Tecnologías usadas en este trabajo
  current?: boolean; // Si es el trabajo actual
}

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'PuntoJS Estudio Creativo',
    position: 'Estudiante en prácticas',
    startDate: 'Enero 2026',
    endDate: undefined, // Presente
    location: 'Palma del Río, Córdoba, España',
    description: 'Prácticas formativas en desarrollo web y diseño, trabajando en proyectos reales con tecnologías modernas.',
    technologies: [],
    current: true,
  },
  {
    id: '2',
    company: 'Xensify',
    position: 'Estudiante en prácticas (Erasmus)',
    startDate: 'Marzo 2025',
    endDate: 'Junio 2025',
    location: 'Busto Arsizio, Lombardía, Italia',
    description: 'Durante mi experiencia Erasmus, desempeñé un papel clave en el desarrollo técnico y diseño UI/UX. Integré pasarelas de pago como Stripe y PaidMembershipPro en entornos WordPress, migré vídeos desde Jetpack a Vimeo utilizando scripts en Python, y desarrollé plugins personalizados con HTML, CSS y JavaScript que optimizaron la experiencia del usuario. Lideré la armonización de estilos de botones y menús, mejorando significativamente la experiencia móvil. Gestioné contenido creando y editando cursos con Canva y Elementor. Además, consolidé registros en Excel para actualizar bases de datos, empleé Python para automatización de procesos, e integré botones de Telegram y desarrollé formularios de feedback para facilitar la interacción con la audiencia.',
    technologies: ['WordPress', 'Python', 'JavaScript', 'HTML', 'CSS', 'Stripe', 'PaidMembershipPro', 'Elementor', 'Canva', 'Excel', 'Telegram'],
    current: false,
  },
];

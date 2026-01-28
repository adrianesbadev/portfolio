export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  year?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'GarageGest - Sistema de Gestión de Talleres',
    description: 'Sistema de gestión integral para talleres mecánicos desarrollado con Spring Boot. Incluye gestión de clientes, vehículos, órdenes de trabajo, recordatorios y generación de facturas PDF.',
    longDescription: 'Aplicación web completa desarrollada como Trabajo de Fin de Grado (TFG) del CFGS DAM. Sistema robusto con tres roles de usuario (Administrador, Recepción, Mecánico), autenticación con Spring Security, validaciones personalizadas, generación de facturas PDF profesionales, exportación a CSV, dashboard con estadísticas, modo oscuro/claro, y una interfaz moderna y responsive.',
    image: '/projects/garagegest.webp',
    tags: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf', 'JavaScript', 'Spring Security', 'Bootstrap', 'PDFBox'],
    repoUrl: 'https://github.com/adrianesbadev/garagegest-app',
    featured: true,
    year: '2026',
  },
  {
    id: '2',
    title: 'AUCORSA Planner',
    description: 'Planificador inteligente de transporte urbano para Córdoba basado en datos reales GTFS. Proyecto en colaboración (repositorio privado) — estará disponible públicamente pronto.',
    longDescription: 'Proyecto desarrollado en colaboración, actualmente con repositorio privado mientras avanzamos en el producto. AUCORSA Planner calcula rutas óptimas de transporte público usando datos GTFS reales, mostrando línea de autobús, paradas y distancias a pie. El frontend está migrado a Astro para maximizar rendimiento con arquitectura de islas, y utiliza React para la lógica del buscador y el mapa interactivo (Leaflet). El backend en Node.js/Express procesa GTFS y usa Nominatim para geocodificación. Próximamente publicaré una demo/código cuando el proyecto esté listo para salir a la luz.',
    image: '/projects/aucorsaplanner.webp',
    tags: ['Astro', 'React', 'TypeScript', 'Node.js', 'Express', 'Leaflet', 'Framer Motion', 'Tailwind CSS', 'GTFS', 'OpenStreetMap', 'Colaboración', 'Privado'],
    featured: true,
    year: '2026',
  },
];

export const featuredProjects = projects.filter(p => p.featured);

// Obtener todos los tags únicos de todos los proyectos
const tagsArray: string[] = [];
projects.forEach((p) => {
  p.tags.forEach((tag) => {
    if (!tagsArray.includes(tag)) {
      tagsArray.push(tag);
    }
  });
});
export const allTags = tagsArray.sort();

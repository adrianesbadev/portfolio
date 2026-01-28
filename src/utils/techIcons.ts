// Mapeo de tecnologías a iconos de simple-icons
// Si una tecnología no tiene icono, se usa un icono genérico

export const techIconMap: Record<string, string> = {
  // Backend
  'Java': 'java',
  'C #': 'csharp',
  'C#': 'csharp',
  'Python': 'python',
  'PHP': 'php',
  'ASP.NET': 'dotnet',
  'ASP.NET MVC': 'dotnet',
  'Spring Boot': 'spring',
  'Node.js': 'nodedotjs',
  'Node': 'nodedotjs',
  'Express.js': 'express',
  'Express': 'express',
  'Docker': 'docker',
  
  // Frontend
  'JavaScript': 'javascript',
  'TypeScript': 'typescript',
  'HTML5': 'html5',
  'HTML': 'html5',
  'CSS3': 'css3',
  'CSS': 'css3',
  'Thymeleaf': 'thymeleaf',
  'Tailwind CSS': 'tailwindcss',
  'Tailwind': 'tailwindcss',
  'Bootstrap': 'bootstrap',
  'React': 'react',
  'Astro': 'astro',
  
  // Database
  'MySQL': 'mysql',
  'SQL': 'mysql',
  'MongoDB': 'mongodb',
  'PostgreSQL': 'postgresql',
  
  // Tools
  'Git': 'git',
  'GitHub': 'github',
  'VS Code': 'visualstudiocode',
  'Visual Studio Code': 'visualstudiocode',
};

// Función para obtener el nombre del icono
export function getTechIconName(techName: string): string {
  // Normalizar el nombre (quitar espacios, convertir a formato simple-icons)
  const normalized = techName.trim();
  return techIconMap[normalized] || techIconMap[techName] || 'code';
}

// Función para obtener el SVG del icono
export async function getTechIconSVG(techName: string, size: number = 24): Promise<string> {
  const iconName = getTechIconIcon(techName);
  
  try {
    // Importar dinámicamente el icono de simple-icons
    const icons = await import('simple-icons');
    const icon = icons.simpleIcons[iconName];
    
    if (icon) {
      return `<svg role="img" viewBox="0 0 24 24" width="${size}" height="${size}" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <title>${icon.title}</title>
        <path d="${icon.path}"/>
      </svg>`;
    }
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn(`Icon not found for ${techName}, using default`);
    }
  }
  
  // Icono genérico por defecto
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>`;
}

// Función auxiliar para convertir nombres a formato simple-icons
function getTechIconIcon(techName: string): string {
  const iconName = getTechIconName(techName);
  // Convertir a formato camelCase si es necesario
  return iconName;
}

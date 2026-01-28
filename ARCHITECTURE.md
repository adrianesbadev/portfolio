# Arquitectura del Proyecto - Portfolio Astro

## Estructura de Carpetas

```
portfolio/
├── public/
│   ├── images/
│   │   └── (imágenes de proyectos, avatar, etc.)
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── Navigation.astro
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── Projects.astro
│   │   │   ├── About.astro
│   │   │   └── Contact.astro
│   │   ├── ui/
│   │   │   ├── ProjectCard.astro
│   │   │   ├── SkillBadge.astro
│   │   │   ├── Button.astro
│   │   │   └── FormInput.astro
│   │   └── animations/
│   │       └── ScrollReveal.astro (opcional, ligero)
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro (home - one page)
│   │   └── projects.astro (opcional - página dedicada)
│   ├── data/
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── personal.ts
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       └── constants.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## Rutas y Páginas

### `/` (index.astro)
- **One-page scroll** con todas las secciones:
  - Hero
  - Proyectos (grid con filtros)
  - Sobre mí (skills + timeline)
  - Contacto (formulario)
- Footer con redes sociales

### `/projects` (opcional)
- Página dedicada con más detalles de proyectos
- Filtros avanzados
- Vista expandida de cada proyecto

## Componentes Principales

### Layout Components
1. **BaseLayout.astro**
   - Meta tags SEO
   - Estructura HTML semántica
   - Incluye Header y Footer

2. **Header.astro**
   - Logo/nombre
   - Navegación sticky
   - Menú hamburguesa (mobile)

3. **Footer.astro**
   - Redes sociales (GitHub, LinkedIn)
   - Copyright
   - Links adicionales

### Section Components
1. **Hero.astro**
   - Nombre grande
   - Rol/descripción
   - CTAs (Ver proyectos, Contacto)
   - Animación fade-in

2. **Projects.astro**
   - Grid de proyectos
   - Filtros por tags
   - Usa ProjectCard.astro

3. **About.astro**
   - Descripción personal
   - Grid de skills (categorizado)
   - Mini timeline (educación/experiencia)

4. **Contact.astro**
   - Formulario (nombre, email, mensaje)
   - Validación client-side
   - Mensaje de éxito (sin backend)

### UI Components
1. **ProjectCard.astro**
   - Imagen/thumbnail
   - Título y descripción
   - Tags
   - Links (repo/demo)
   - Hover effects

2. **SkillBadge.astro**
   - Badge con nombre de tecnología
   - Categoría (opcional)
   - Hover effect

3. **Button.astro**
   - Variantes (primary, secondary, outline)
   - Tamaños
   - Accesible

## Datos (TypeScript)

### `src/data/projects.ts`
```typescript
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [...]
```

### `src/data/skills.ts`
```typescript
export interface Skill {
  name: string;
  category: 'backend' | 'frontend' | 'database' | 'tools';
  level?: 'beginner' | 'intermediate' | 'advanced';
}

export const skills: Skill[] = [...]
```

### `src/data/personal.ts`
```typescript
export const personalInfo = {
  name: 'Adrián',
  role: 'Desarrollador / Estudiante CFGS DAM',
  location: 'España',
  bio: '...',
  social: {
    github: 'https://github.com/adrianesbadev',
    linkedin: 'https://www.linkedin.com/in/adrianesbadev/',
  },
  // ...
}
```

## Estilos y Configuración

### Tailwind Config
- Colores personalizados (paleta premium)
- Tipografía (Inter/Poppins)
- Espaciado consistente
- Breakpoints estándar

### Global CSS
- Reset básico
- Variables CSS para colores
- Utilidades personalizadas
- Animaciones CSS (keyframes)

## SEO y Accesibilidad

### SEO
- Meta tags en BaseLayout
- Open Graph tags
- Structured data (JSON-LD)
- Sitemap.xml

### Accesibilidad
- Semantic HTML
- ARIA labels donde necesario
- Navegación por teclado
- Contraste WCAG AA
- Focus states visibles

## Animaciones

### Estrategia
- **CSS puro** para la mayoría (transitions, transforms)
- **Intersection Observer** ligero para scroll reveal (sin librerías pesadas)
- **Hover effects** sutiles (scale, shadow)
- **Transiciones** de 0.2s-0.3s

### Librerías (solo si necesario)
- Considerar `@studio-freight/lenis` (smooth scroll ligero) - opcional
- NO usar GSAP/Framer Motion (muy pesadas)

## Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Performance

- Imágenes optimizadas (WebP, lazy loading)
- CSS crítico inline
- Code splitting automático (Astro)
- Minificación automática

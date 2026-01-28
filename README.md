# Portfolio Personal - Adrián Esquivel Barrera

Portfolio personal moderno desarrollado con **Astro** y **Tailwind CSS**. Diseño premium, limpio, responsive, accesible y optimizado para SEO.

## 🚀 Características

- ✨ Diseño moderno y premium con modo oscuro
- 📱 Totalmente responsive
- ♿ Accesible (WCAG AA)
- 🔍 SEO optimizado
- ⚡ Rápido y ligero
- 🎨 Animaciones avanzadas con GSAP y Lenis
- 🎯 One-page scroll con navegación suave
- 📧 Formulario de contacto funcional con EmailJS
- 🖱️ Cursor personalizado interactivo
- 🎠 Carrusel de tecnologías con iconos

## 🛠️ Stack Tecnológico

- **Astro** - Framework web moderno
- **Tailwind CSS** - Framework de utilidades CSS
- **TypeScript** - Tipado estático
- **GSAP** - Animaciones avanzadas
- **Lenis** - Smooth scroll
- **EmailJS** - Formulario de contacto
- **Simple Icons** - Iconos de tecnologías
- **HTML Semántico** - Mejor accesibilidad y SEO

## 📦 Instalación

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```
   El sitio estará disponible en `http://localhost:4321`

3. **Construir para producción:**
   ```bash
   npm run build
   ```

4. **Previsualizar build de producción:**
   ```bash
   npm run preview
   ```

## 🌐 Despliegue en Vercel

1. **Sube el proyecto a GitHub** (repositorio público o privado; Vercel soporta ambos; público es habitual para portfolio):
   ```bash
   git init
   git add .
   git commit -m "Portfolio listo para desplegar"
   # Crea un repo en GitHub (ej: portfolio) y luego:
   git remote add origin https://github.com/TU_USUARIO/portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Conecta con Vercel:** [vercel.com](https://vercel.com) → Sign in with GitHub → Import Project → elige el repo → Framework Preset: **Astro** → Deploy.

3. **Variables de entorno (EmailJS):** En el proyecto de Vercel → Settings → Environment Variables, añade:
   - `PUBLIC_EMAILJS_PUBLIC_KEY`
   - `PUBLIC_EMAILJS_SERVICE_ID`
   - `PUBLIC_EMAILJS_TEMPLATE_ID`  
   Luego redeploy (Deployments → ⋮ → Redeploy).

## 📁 Estructura del Proyecto

```
portfolio/
├── public/              # Archivos estáticos (imágenes, favicon)
├── src/
│   ├── components/
│   │   ├── layout/      # Header, Footer, Navigation
│   │   ├── sections/    # Hero, Projects, About, Contact
│   │   └── ui/          # Button, ProjectCard, SkillBadge, FormInput
│   ├── data/            # Datos del portfolio (projects, skills, personal)
│   ├── layouts/         # BaseLayout con SEO
│   ├── pages/           # Páginas (index.astro)
│   └── styles/          # Estilos globales
├── astro.config.mjs     # Configuración de Astro
├── tailwind.config.mjs  # Configuración de Tailwind
└── package.json
```

## ✏️ Personalización

### Configurar Formulario de Contacto (EmailJS)

El formulario de contacto está integrado con EmailJS. Para configurarlo:

1. **Crea una cuenta en [EmailJS](https://www.emailjs.com/)** (gratis hasta 200 emails/mes)
2. **Configura tu servicio de email** y crea una plantilla
3. **Crea un archivo `.env`** en la raíz del proyecto con tus credenciales:

```env
PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
```

En **Vercel**: ve a Project → Settings → Environment Variables y añade las tres variables (mismos nombres).

### Editar Información Personal

Edita el archivo `src/data/personal.ts`:

```typescript
export const personalInfo = {
  name: 'Tu Nombre',
  role: 'Tu Rol',
  // ...
};
```

### Añadir/Editar Proyectos

Edita el archivo `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Mi Proyecto',
    description: 'Descripción del proyecto',
    tags: ['React', 'Node.js'],
    repoUrl: 'https://github.com/...',
    demoUrl: 'https://demo.com',
    // ...
  },
];
```

### Añadir/Editar Skills

Edita el archivo `src/data/skills.ts`:

```typescript
export const skills: Skill[] = [
  { name: 'React', category: 'frontend', level: 'intermediate' },
  // ...
];
```

### Cambiar Colores

Edita `tailwind.config.mjs` para personalizar la paleta de colores:

```javascript
colors: {
  primary: {
    // Tus colores personalizados
  },
}
```

## 🎨 Mejoras Implementadas

- ✅ Modo oscuro con transición suave (por defecto)
- ✅ Scroll animations avanzadas con GSAP y Lenis
- ✅ Carrusel de tecnologías con iconos
- ✅ Cursor personalizado interactivo
- ✅ Formulario de contacto funcional con EmailJS
- ✅ Animaciones de entrada escalonadas
- ✅ Efectos de parallax y reveals

## 🎯 Mejoras Futuras (Opcionales)

- [ ] Analytics básico (Plausible o GA4)
- [ ] Optimización de imágenes (lazy loading, WebP)
- [ ] Transiciones de página con fade (si se añaden más páginas)
- [ ] Blog/Artículos (opcional)
- [ ] PWA básico

## 📝 Notas

- El formulario de contacto usa EmailJS; configura las variables de entorno en local (`.env`) y en Vercel (Settings → Environment Variables).
- Las imágenes de proyectos son placeholders. Añade tus propias imágenes en `public/images/` y actualiza las rutas en `projects.ts`.

## 📄 Licencia

Este proyecto es personal y está disponible para uso educativo.

---

Desarrollado con ❤️ por Adrián Esquivel Barrera

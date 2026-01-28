# Portfolio · Adrián Esquivel Barrera

**[Ver sitio en vivo →](https://portfolio-adrianesba.vercel.app/)**

Portfolio personal desarrollado con **Astro** y **Tailwind CSS**. Diseño moderno, responsive, accesible y optimizado para SEO.

---

## Sobre el proyecto

- **Una página** con secciones: Hero, Proyectos, Sobre mí, Experiencia, Contacto
- **Formulario de contacto** con EmailJS
- **Animaciones** con GSAP y Lenis
- **Cursor personalizado**, carrusel de tecnologías, modo oscuro
- **SEO**: meta OG, sitemap, robots.txt, favicon completo

## Stack

Astro · Tailwind CSS · TypeScript · GSAP · Lenis · EmailJS · Simple Icons

## Cómo ejecutarlo en local

```bash
git clone https://github.com/adrianesbadev/portfolio.git
cd portfolio
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321).

## Estructura principal

```
src/
├── components/   # Layout, secciones (Hero, Projects, About, etc.), UI
├── data/         # personal, projects, skills, experience
├── layouts/      # BaseLayout (SEO, meta OG)
├── pages/        # index, 404
└── styles/       # global.css
```

Los datos del portfolio (nombre, rol, proyectos, experiencia) se editan en `src/data/`.

## Despliegue

Desplegado en **Vercel**. Detalles de configuración y variables de entorno en [DEPLOY_VERCEL.md](./DEPLOY_VERCEL.md).

---

**Adrián Esquivel Barrera** · [GitHub](https://github.com/adrianesbadev) · [LinkedIn](https://www.linkedin.com/in/adrianesbadev/)

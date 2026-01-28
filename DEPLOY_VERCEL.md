# Despliegue en Vercel

Guía rápida para subir el portfolio a GitHub y desplegarlo en Vercel.

---

## ¿Repositorio público o privado?

- **Público** (recomendado para portfolio): cualquiera puede ver el código; habitual para CV/portfolio.
- **Privado**: solo tú (y quien invites) ve el código; **Vercel despliega igual** desde repos privados en el plan gratuito.

Puedes usar cualquiera de los dos.

---

## 1. Subir a GitHub

Si aún no tienes el repo en GitHub:

1. **Crea un repositorio en GitHub**
   - Ve a [github.com/new](https://github.com/new)
   - Nombre: por ejemplo `portfolio`
   - Público o privado, a tu elección
   - **No** marques "Add a README" (ya tienes uno en el proyecto)

2. **En la terminal, desde la carpeta del proyecto:**

   ```bash
   cd /Users/itsadrii/Desktop/portfolio

   git init
   git add .
   git commit -m "Portfolio listo para desplegar"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/portfolio.git
   git push -u origin main
   ```

   Sustituye `TU_USUARIO` por tu usuario de GitHub (ej: `adrianesbadev`) y `portfolio` por el nombre del repo si lo cambiaste.

---

## 2. Conectar con Vercel

1. Entra en [vercel.com](https://vercel.com) e inicia sesión con **GitHub**.
2. **Add New…** → **Project**.
3. Elige el repositorio del portfolio (ej: `portfolio`).
4. **Framework Preset:** Vercel suele detectar **Astro**; si no, elígelo a mano.
5. **Root Directory:** dejar en blanco.
6. **Build Command:** `npm run build` (por defecto).
7. **Output Directory:** `dist` (por defecto para Astro).
8. Pulsa **Deploy**.

Cuando termine, tendrás una URL tipo `portfolio-xxx.vercel.app`.

---

## 3. Variables de entorno

### EmailJS (formulario de contacto)

1. En Vercel: abre tu proyecto → **Settings** → **Environment Variables**.
2. Añade estas tres variables (con los valores que usas en EmailJS):

   | Name                           | Value        |
   |--------------------------------|--------------|
   | `PUBLIC_EMAILJS_PUBLIC_KEY`    | tu public key |
   | `PUBLIC_EMAILJS_SERVICE_ID`    | tu service id |
   | `PUBLIC_EMAILJS_TEMPLATE_ID`   | tu template id |

### URL del sitio (imagen OG, canonical, sitemap)

Para que la **imagen Open Graph** (y el resto de URLs absolutas) se generen bien al compartir en LinkedIn/WhatsApp:

1. En **Environment Variables** añade también:

   | Name       | Value                                      |
   |------------|--------------------------------------------|
   | `SITE_URL` | `https://portfolio-adrianesba.vercel.app`  |

   (Sin barra final. Si usas dominio propio, pon esa URL.)

2. **Redeploy:** pestaña **Deployments** → menú ⋮ del último deploy → **Redeploy**.

---

## 4. Dominio propio (opcional)

En el proyecto de Vercel: **Settings** → **Domains** → añade tu dominio y sigue las instrucciones de DNS.

---

## Resumen de comandos (solo Git)

```bash
cd /Users/itsadrii/Desktop/portfolio
git init
git add .
git commit -m "Portfolio listo para desplegar"
git branch -M main
git remote add origin https://github.com/adrianesbadev/portfolio.git
git push -u origin main
```

(Luego conectas el repo en Vercel como en el paso 2.)

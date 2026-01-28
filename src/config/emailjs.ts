/**
 * Configuración de EmailJS
 * 
 * Para configurar EmailJS:
 * 1. Crea una cuenta en https://www.emailjs.com/
 * 2. Crea un servicio de email (Gmail, Outlook, etc.)
 * 3. Crea una plantilla de email
 * 4. Obtén tu Public Key, Service ID y Template ID
 * 5. Reemplaza los valores de abajo con tus credenciales
 */

export const emailjsConfig = {
  // Tu Public Key de EmailJS (Dashboard > Account > API Keys)
  publicKey: import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  
  // ID del servicio de email que creaste
  serviceId: import.meta.env.PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  
  // ID de la plantilla de email que creaste
  templateId: import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
};

// Sistema de animaciones avanzadas y profesionales con GSAP + Lenis
// Animaciones suaves y sofisticadas para un portfolio premium

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Lenis from 'lenis';

// Registrar los plugins de GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export class PortfolioAnimations {
  private scrollTriggerInstances: ScrollTrigger[] = [];
  private lenis: Lenis | null = null;

  init() {
    if (typeof window === 'undefined') return;

    this.setupSmoothScroll();
    this.setupHeroAnimations();
    this.setupSectionReveals();
    this.setupStaggerAnimations();
    this.setupParallaxEffects();
    this.setupTextAnimations();
    this.setupCardAnimations();
    this.setupMaskReveals();
    this.setupNumberCounters();
  }

  // Smooth scroll premium con Lenis
  private setupSmoothScroll() {
    // Inicializar Lenis
    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Integrar Lenis con GSAP ScrollTrigger
    this.lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      this.lenis?.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Smooth scroll para links de anclaje
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (target && this.lenis) {
          e.preventDefault();
          this.lenis.scrollTo(href, {
            offset: -80,
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      });
    });
  }

  // Animaciones del Hero mejoradas con typewriter effect
  private setupHeroAnimations() {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Animación del badge
    tl.from('.hero-badge', {
      opacity: 0,
      y: -30,
      scale: 0.9,
      duration: 0.8,
    });

    // Animación typewriter para el nombre
    const nameElement = document.getElementById('hero-name');
    const nameText = nameElement?.getAttribute('data-name') || '';
    const typewriterText = nameElement?.querySelector('.typewriter-text');

    if (typewriterText && nameText) {
      // Asegurar que el nombre sea visible
      gsap.set(nameElement, { opacity: 1, visibility: 'visible' });
      gsap.set(typewriterText, { opacity: 1, visibility: 'visible' });
      
      // Inicializar el texto vacío
      typewriterText.textContent = '';

      // Animación typewriter con velocidad variable (más rápido al inicio, más lento al final)
      const chars = nameText.split('');
      let currentTime = 0;
      
      chars.forEach((char, index) => {
        // Velocidad variable: más rápido al inicio, más lento en espacios
        const speed = char === ' ' ? 0.15 : index < 10 ? 0.08 : 0.12;
        currentTime += speed;
        
        tl.to({}, {
          duration: speed,
          onComplete: () => {
            if (typewriterText) {
              typewriterText.textContent += char;
            }
          },
        }, currentTime);
      });

      // Después de escribir el nombre, animar el resto
      const totalDuration = currentTime + 0.3;
      tl.to('.hero-role', {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
        }, totalDuration + 0.2)
        .to('.hero-bio', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, totalDuration + 0.4)
        .to('.hero-cta', {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          ease: 'back.out(1.4)',
        }, totalDuration + 0.5)
        .to('.hero-scroll', {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
        }, totalDuration + 0.6);
    } else {
      // Fallback si no se encuentra el elemento
      tl.from('.hero-title', {
        opacity: 0,
        y: 80,
        scale: 0.95,
        duration: 1.2,
        ease: 'power4.out',
      }, '-=0.4')
        .from('.hero-role', {
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: 'power3.out',
        }, '-=0.6')
        .from('.hero-bio', {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.5')
        .from('.hero-cta', {
          opacity: 0,
          scale: 0.85,
          y: 20,
          duration: 0.7,
          ease: 'back.out(1.4)',
        }, '-=0.4')
        .from('.hero-scroll', {
          opacity: 0,
          y: 15,
          duration: 0.6,
          ease: 'power2.out',
        }, '-=0.3');
    }
  }

  // Reveal de secciones con efectos avanzados
  private setupSectionReveals() {
    const sections = document.querySelectorAll('[data-section-reveal]');

    sections.forEach((section, index) => {
      const revealItems = section.querySelectorAll('[data-reveal-item]');
      
      if (revealItems.length === 0) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play none none reverse',
          markers: false,
        },
      });

      // Animación más sofisticada con diferentes efectos según el índice
      const animationType = index % 3;
      
      if (animationType === 0) {
        // Fade in desde abajo con blur
        tl.from(revealItems, {
          opacity: 0,
          y: 80,
          filter: 'blur(10px)',
          duration: 1,
          stagger: {
            amount: 0.6,
            from: 'start',
            ease: 'power2.out',
          },
          ease: 'power3.out',
        });
      } else if (animationType === 1) {
        // Scale + rotate sutil
        tl.from(revealItems, {
          opacity: 0,
          scale: 0.8,
          rotation: 2,
          y: 60,
          duration: 0.9,
          stagger: {
            amount: 0.5,
            from: 'start',
          },
          ease: 'back.out(1.2)',
        });
      } else {
        // Slide desde los lados alternando
        tl.from(revealItems, {
          opacity: 0,
          x: (i) => i % 2 === 0 ? -60 : 60,
          y: 40,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        });
      }
    });
  }

  // Animaciones escalonadas mejoradas para grids
  private setupStaggerAnimations() {
    const staggerContainers = document.querySelectorAll('[data-stagger-container]');

    staggerContainers.forEach((container) => {
      const items = container.querySelectorAll('[data-stagger-item]');
      
      if (items.length === 0) return;

      // Asegurar estructura pero permitir que GSAP controle opacity
      items.forEach((item) => {
        const htmlItem = item as HTMLElement;
        htmlItem.style.display = 'block';
        htmlItem.style.visibility = 'visible';
        
        // Solo establecer estado inicial si el elemento NO está en viewport
        const rect = htmlItem.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight * 1.2 && rect.bottom > -100;
        
        if (!isInViewport) {
          // Estado inicial para la animación solo si no está visible
          gsap.set(item, {
            opacity: 0,
            y: 60,
            scale: 0.85,
            rotation: -2,
          });
        } else {
          // Si ya está en viewport, mantenerlo visible
          gsap.set(item, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
          });
        }
      });

      const scrollTrigger = ScrollTrigger.create({
        trigger: container,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(items, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            stagger: {
              amount: 0.6,
              from: 'start',
              ease: 'power2.inOut',
            },
            ease: 'back.out(1.3)',
          });
        },
        // Si el usuario hace scroll hacia arriba y vuelve a entrar
        onEnterBack: () => {
          items.forEach((item) => {
            gsap.set(item, {
              opacity: 1,
              y: 0,
              scale: 1,
              rotation: 0,
            });
          });
        },
      });

      this.scrollTriggerInstances.push(scrollTrigger);

      // Timeout de seguridad para stagger animations - más agresivo
      setTimeout(() => {
        items.forEach((item) => {
          const htmlItem = item as HTMLElement;
          const computedStyle = window.getComputedStyle(htmlItem);
          const gsapOpacity = gsap.getProperty(item, 'opacity');
          if ((gsapOpacity !== null && parseFloat(gsapOpacity.toString()) < 0.1) || 
              (computedStyle.opacity === '0' || parseFloat(computedStyle.opacity) < 0.1)) {
            gsap.set(item, {
              opacity: 1,
              y: 0,
              scale: 1,
              rotation: 0,
            });
            htmlItem.style.opacity = '1';
            htmlItem.style.visibility = 'visible';
          }
        });
      }, 2000);
      
      // Verificación adicional después de que ScrollTrigger se inicialice
      setTimeout(() => {
        const rect = container.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInViewport) {
          // Si el contenedor ya está visible, animar inmediatamente
          items.forEach((item) => {
            const htmlItem = item as HTMLElement;
            const currentOpacity = gsap.getProperty(item, 'opacity');
            if (currentOpacity === null || parseFloat(currentOpacity.toString()) < 0.1) {
              gsap.to(item, {
                opacity: 1,
                y: 0,
                scale: 1,
                rotation: 0,
                duration: 0.8,
                ease: 'back.out(1.3)',
              });
            }
          });
        }
      }, 500);
    });
  }

  // Efectos de parallax mejorados con múltiples capas
  private setupParallaxEffects() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    parallaxElements.forEach((element) => {
      const speed = parseFloat((element as HTMLElement).dataset.parallax || '0.5');
      const direction = (element as HTMLElement).dataset.parallaxDirection || 'y';

      ScrollTrigger.create({
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5,
        onUpdate: (self) => {
          const progress = self.progress;
          
          if (direction === 'x') {
            const x = progress * 100 * speed;
            gsap.set(element, { x: x });
          } else {
            const y = progress * 100 * speed;
            gsap.set(element, { y: y });
          }
        },
      });
    });
  }

  // Animaciones de texto mejoradas (split text con efecto de máscara)
  private setupTextAnimations() {
    const textElements = document.querySelectorAll('[data-text-split]');

    textElements.forEach((element) => {
      const text = element.textContent || '';
      const words = text.split(' ');

      // Limpiar contenido
      element.innerHTML = '';

      // Crear contenedor para cada palabra con efecto de clip
      words.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.style.display = 'inline-block';
        wordSpan.style.overflow = 'hidden';
        wordSpan.style.marginRight = '0.25em';
        
        const innerSpan = document.createElement('span');
        innerSpan.textContent = word;
        innerSpan.style.display = 'inline-block';
        innerSpan.style.transform = 'translateY(100%)';
        innerSpan.style.opacity = '0';
        
        wordSpan.appendChild(innerSpan);
        element.appendChild(wordSpan);

        ScrollTrigger.create({
          trigger: element,
          start: 'top 75%',
          once: true,
          onEnter: () => {
            gsap.to(innerSpan, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: index * 0.08,
              ease: 'power3.out',
            });
          },
        });
      });
    });
  }

  // Animaciones de cards con efectos premium
  // NOTA: No se aplica a elementos con data-stagger-item (para evitar conflictos)
  private setupCardAnimations() {
    const cards = document.querySelectorAll('[data-card-animate]:not([data-stagger-item])');

    cards.forEach((card, index) => {
      const htmlCard = card as HTMLElement;
      
      // Asegurar estructura pero permitir que GSAP controle opacity
      htmlCard.style.display = 'block';
      htmlCard.style.visibility = 'visible';

      // Estado inicial para la animación
      gsap.set(card, { 
        opacity: 0, 
        y: 50,
        scale: 0.9,
        rotation: -1,
      });

      ScrollTrigger.create({
        trigger: card,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'back.out(1.2)',
          });
        },
        // Si el usuario hace scroll hacia arriba y vuelve a entrar
        onEnterBack: () => {
          gsap.set(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
          });
        },
      });

      // Timeout de seguridad: solo si después de 3 segundos no se ha animado
      setTimeout(() => {
        const computedStyle = window.getComputedStyle(htmlCard);
        const gsapOpacity = gsap.getProperty(card, 'opacity');
        if ((gsapOpacity !== null && parseFloat(gsapOpacity.toString()) < 0.1) || 
            (computedStyle.opacity === '0' || parseFloat(computedStyle.opacity) < 0.1)) {
          gsap.set(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
          });
        }
      }, 3000);

      // Hover effect premium
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.05,
          y: -8,
          rotation: 0.5,
          duration: 0.4,
          ease: 'power2.out',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          rotation: 0,
          duration: 0.4,
          ease: 'power2.out',
        });
      });
    });
  }

  // Efectos de máscara para reveals avanzados
  private setupMaskReveals() {
    const maskElements = document.querySelectorAll('[data-mask-reveal]');

    maskElements.forEach((element) => {
      gsap.set(element, {
        clipPath: 'inset(0 100% 0 0)',
      });

      ScrollTrigger.create({
        trigger: element,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to(element, {
            clipPath: 'inset(0 0% 0 0)',
            duration: 1.2,
            ease: 'power3.inOut',
          });
        },
      });
    });
  }

  // Contadores animados para números
  private setupNumberCounters() {
    const counters = document.querySelectorAll('[data-counter]');

    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-counter') || '0');
      const duration = parseFloat(counter.getAttribute('data-counter-duration') || '2');
      const suffix = counter.getAttribute('data-counter-suffix') || '';
      
      ScrollTrigger.create({
        trigger: counter,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          const obj = { value: 0 };
          gsap.to(obj, {
            value: target,
            duration: duration,
            ease: 'power2.out',
            onUpdate: function() {
              if (counter) {
                counter.textContent = Math.round(obj.value).toString() + suffix;
              }
            },
          });
        },
      });
    });
  }

  // Cleanup
  destroy() {
    this.scrollTriggerInstances.forEach((st) => st.kill());
    this.scrollTriggerInstances = [];
    ScrollTrigger.getAll().forEach((st) => st.kill());
    
    if (this.lenis) {
      this.lenis.destroy();
      this.lenis = null;
    }
    
    gsap.ticker.remove(() => {
      if (this.lenis) {
        this.lenis.raf(performance.now());
      }
    });
  }
}

// Inicializar animaciones
export function initPortfolioAnimations() {
  if (typeof window === 'undefined') return null;

  const animations = new PortfolioAnimations();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      animations.init();
    });
  } else {
    animations.init();
  }

  return animations;
}

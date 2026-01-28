// Sistema avanzado de animaciones de scroll
// Inspirado en portfolios modernos con efectos dinámicos

interface AnimationConfig {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

class ScrollAnimations {
  private observers: Map<string, IntersectionObserver> = new Map();

  init() {
    this.setupRevealAnimations();
    this.setupStaggerAnimations();
    this.setupParallaxEffects();
    this.setupTextReveal();
    this.setupProgressBars();
  }

  // Animaciones de reveal con diferentes efectos
  private setupRevealAnimations() {
    const config: AnimationConfig = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px',
      once: true,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const delay = parseFloat(element.dataset.delay || '0');
          const direction = element.dataset.direction || 'up';

          setTimeout(() => {
            element.classList.add('revealed');
            
            // Añadir efecto específico según dirección
            if (direction === 'left') {
              element.style.transform = 'translateX(0)';
            } else if (direction === 'right') {
              element.style.transform = 'translateX(0)';
            } else if (direction === 'scale') {
              element.style.transform = 'scale(1)';
            } else {
              element.style.transform = 'translateY(0)';
            }
            
            element.style.opacity = '1';
          }, delay * 100);
        }
      });
    }, config);

    // Observar elementos con data-animate
    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    this.observers.set('reveal', observer);
  }

  // Animaciones escalonadas para grids (stagger effect)
  private setupStaggerAnimations() {
    const config: AnimationConfig = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      once: true,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const container = entry.target as HTMLElement;
          const items = container.querySelectorAll('[data-stagger-item]');
          
          items.forEach((item, index) => {
            setTimeout(() => {
              (item as HTMLElement).classList.add('stagger-visible');
            }, index * 100); // Delay escalonado de 100ms
          });
        }
      });
    }, config);

    document.querySelectorAll('[data-stagger]').forEach((el) => {
      observer.observe(el);
    });

    this.observers.set('stagger', observer);
  }

  // Efectos de parallax sutiles
  private setupParallaxEffects() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length === 0) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.parallax || '0.5');
        const offset = scrolled * speed;
        
        element.style.transform = `translateY(${offset}px)`;
      });
    };

    // Throttle para mejor rendimiento
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // Reveal de texto con efecto de máscara
  private setupTextReveal() {
    const config: AnimationConfig = {
      threshold: 0.5,
      rootMargin: '0px',
      once: true,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.classList.add('text-revealed');
        }
      });
    }, config);

    document.querySelectorAll('[data-text-reveal]').forEach((el) => {
      observer.observe(el);
    });

    this.observers.set('text-reveal', observer);
  }

  // Animación de barras de progreso (para skills, etc.)
  private setupProgressBars() {
    const config: AnimationConfig = {
      threshold: 0.5,
      rootMargin: '0px',
      once: true,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const progress = element.dataset.progress || '0';
          
          setTimeout(() => {
            element.style.width = `${progress}%`;
            element.classList.add('progress-animated');
          }, 200);
        }
      });
    }, config);

    document.querySelectorAll('[data-progress]').forEach((el) => {
      observer.observe(el);
    });

    this.observers.set('progress', observer);
  }

  // Cleanup
  destroy() {
    this.observers.forEach((observer) => {
      observer.disconnect();
    });
    this.observers.clear();
  }
}

// Inicializar cuando el DOM esté listo
export function initScrollAnimations() {
  if (typeof window === 'undefined') return;
  
  const animations = new ScrollAnimations();
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      animations.init();
    });
  } else {
    animations.init();
  }
  
  return animations;
}

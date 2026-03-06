import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export class PortfolioAnimations {
  private lenis: Lenis | null = null;
  private tickerCallback: ((time: number) => void) | null = null;

  init() {
    if (typeof window === 'undefined') return;

    this.setupSmoothScroll();
    this.setupRevealItems();
    this.setupStaggerItems();
  }

  private setupSmoothScroll() {
    this.lenis = new Lenis({
      duration: 1,
      smoothWheel: true,
      smoothTouch: false,
    });

    this.lenis.on('scroll', ScrollTrigger.update);

    this.tickerCallback = (time: number) => {
      this.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(this.tickerCallback);
    gsap.ticker.lagSmoothing(0);

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (event) => {
        const href = anchor.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (!target || !this.lenis) return;

        event.preventDefault();
        this.lenis.scrollTo(href, { offset: -90, duration: 1 });
      });
    });
  }

  private setupRevealItems() {
    const revealItems = document.querySelectorAll('[data-reveal-item]');

    revealItems.forEach((item) => {
      gsap.set(item, { autoAlpha: 0, y: 14 });

      ScrollTrigger.create({
        trigger: item,
        start: 'top 86%',
        once: true,
        onEnter: () => {
          gsap.to(item, {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            ease: 'power2.out',
          });
        },
      });
    });
  }

  private setupStaggerItems() {
    const containers = document.querySelectorAll('[data-stagger-container]');

    containers.forEach((container) => {
      const items = container.querySelectorAll('[data-stagger-item]');
      if (!items.length) return;

      gsap.set(items, { autoAlpha: 0, y: 14 });

      ScrollTrigger.create({
        trigger: container,
        start: 'top 82%',
        once: true,
        onEnter: () => {
          gsap.to(items, {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            ease: 'power2.out',
            stagger: 0.07,
          });
        },
      });
    });
  }

  destroy() {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    if (this.tickerCallback) {
      gsap.ticker.remove(this.tickerCallback);
      this.tickerCallback = null;
    }

    if (this.lenis) {
      this.lenis.destroy();
      this.lenis = null;
    }
  }
}

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

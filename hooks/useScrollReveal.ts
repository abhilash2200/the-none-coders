'use client';

import { useEffect, useRef } from 'react';

// GSAP imports - conditional to avoid build errors if not installed
let gsap: any;
let ScrollTrigger: any;

if (typeof window !== 'undefined') {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    gsap = require('gsap');
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    ScrollTrigger = require('gsap/ScrollTrigger').ScrollTrigger;
    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }
  } catch (e) {
    // GSAP not installed - hook will be a no-op
    console.warn('GSAP not installed. useScrollReveal will not work.');
  }
}

interface UseScrollRevealOptions {
  trigger?: string | Element | null;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  once?: boolean;
  markers?: boolean;
  animation?: any; // gsap.core.Tween | gsap.core.Timeline
}

/**
 * Hook for GSAP ScrollTrigger animations
 * Use for scroll-based animations, parallax, and complex scroll scenes
 */
export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const elementRef = useRef<HTMLElement>(null);
  const animationRef = useRef<any>(null); // ScrollTrigger instance

  const {
    trigger,
    start = 'top 80%',
    end = 'bottom 20%',
    scrub = false,
    once = true,
    markers = false,
    animation,
  } = options;

  useEffect(() => {
    if (!gsap || !ScrollTrigger) {
      console.warn('GSAP not available. useScrollReveal is disabled.');
      return;
    }

    const element = trigger 
      ? (typeof trigger === 'string' ? document.querySelector(trigger) : trigger)
      : elementRef.current;

    if (!element) return;

    // Default fade-up animation if none provided
    const defaultAnimation = animation || gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      }
    );

    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start,
      end,
      scrub,
      once,
      markers,
      animation: defaultAnimation,
    });

    animationRef.current = scrollTrigger;

    return () => {
      scrollTrigger.kill();
    };
  }, [trigger, start, end, scrub, once, markers, animation]);

  return elementRef;
}

/**
 * Simple scroll reveal hook with fade-up animation
 */
export function useFadeUp(options: Omit<UseScrollRevealOptions, 'animation'> = {}) {
  return useScrollReveal({
    ...options,
    once: options.once ?? true,
  });
}

/**
 * Parallax scroll hook
 */
export function useParallax(speed: number = 0.5, options: Omit<UseScrollRevealOptions, 'animation' | 'scrub'> = {}) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const parallax = gsap.to(element, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        ...options,
      },
    });

    return () => {
      parallax.kill();
    };
  }, [speed, options]);

  return elementRef;
}


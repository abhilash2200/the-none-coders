'use client';

import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeInUp, sectionReveal, staggerContainer, staggerItem } from '@/lib/animations';

interface MotionSectionProps extends Omit<MotionProps, 'initial' | 'animate' | 'variants'> {
  children: ReactNode;
  variant?: 'fadeUp' | 'reveal' | 'stagger';
  className?: string;
  delay?: number;
  duration?: number;
}

/**
 * Reusable motion section component for consistent scroll-triggered animations
 */
export function MotionSection({
  children,
  variant = 'fadeUp',
  className = '',
  delay = 0,
  duration = 0.6,
  ...props
}: MotionSectionProps) {
  const variants = {
    fadeUp: fadeInUp,
    reveal: sectionReveal,
    stagger: staggerContainer,
  };

  const selectedVariant = variants[variant];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={selectedVariant}
      transition={{
        delay,
        duration,
        ease: 'easeOut',
      }}
      className={className}
      {...props}
    >
      {variant === 'stagger' ? (
        <motion.div variants={staggerItem}>{children}</motion.div>
      ) : (
        children
      )}
    </motion.section>
  );
}

/**
 * Motion div wrapper for any element
 */
export function MotionDiv({
  children,
  variant = 'fadeUp',
  className = '',
  delay = 0,
  ...props
}: Omit<MotionSectionProps, 'variant'> & { variant?: 'fadeUp' | 'scale' | 'slide' }) {
  const variants = {
    fadeUp: fadeInUp,
    scale: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
    slide: fadeInLeft,
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants[variant]}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}


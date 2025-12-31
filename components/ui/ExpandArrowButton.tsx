'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ExpandArrowButtonProps {
  /** Text to show on hover */
  text: string;
  /** Optional href - renders as Link when provided */
  href?: string;
  /** Optional onClick handler */
  onClick?: () => void;
  /** Custom className */
  className?: string;
  /** Custom icon (defaults to ArrowRight) */
  icon?: React.ReactNode;
  /** Aria label for accessibility */
  ariaLabel?: string;
}

/**
 * Modern expandable arrow button with smooth hover animation
 * - Default: Small circular button (48px) with arrow icon
 * - Hover: Expands horizontally (160-180px) with text sliding in
 * - Uses project's grayscale theme and design tokens
 */
export function ExpandArrowButton({
  text,
  href,
  onClick,
  className,
  icon,
  ariaLabel,
}: ExpandArrowButtonProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const defaultIcon = icon || <ArrowRight className="w-4 h-4" />;

  // Animation variants
  const containerVariants = {
    rest: {
      width: '48px',
      transition: {
        duration: 0.3,
        ease: 'easeInOut' as const,
      },
    },
    hover: {
      width: '140px',
      transition: {
        duration: 0.3,
        ease: 'easeInOut' as const,
      },
    },
  };

  const iconVariants = {
    rest: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut' as const,
      },
    },
    hover: {
      x: -8,
      transition: {
        duration: 0.3,
        ease: 'easeInOut' as const,
      },
    },
  };

  const textVariants = {
    rest: {
      opacity: 0,
      x: 10,
      transition: {
        duration: 0.2,
        ease: 'easeInOut' as const,
      },
    },
    hover: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: 0.1,
        ease: 'easeInOut' as const,
      },
    },
  };

  const baseClasses = cn(
    'relative',
    'h-12', // 48px height
    'rounded-full',
    'flex',
    'items-center',
    'justify-start',
    'overflow-hidden',
    'bg-white',
    'border',
    'border-[#e5e5e5]',
    'text-[#000000]',
    'shadow-sm',
    'hover:bg-[#fafafa]',
    'hover:border-[#d4d4d4]',
    'active:bg-[#f5f5f5]',
    'dark:bg-[#1a1a1a]',
    'dark:text-white',
    'dark:border-[#404040]',
    'dark:hover:bg-[#262626]',
    'dark:hover:border-[#525252]',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'focus:ring-[var(--color-foreground)]',
    'transition-colors',
    'duration-200',
    'cursor-pointer',
    className
  );

  const content = (
    <motion.div
      variants={containerVariants}
      initial="rest"
      animate={isHovered ? 'hover' : 'rest'}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={baseClasses}
      aria-label={ariaLabel || text}
    >
      {/* Icon container - always visible */}
      <motion.div
        variants={iconVariants}
        initial="rest"
        animate={isHovered ? 'hover' : 'rest'}
        className="flex-shrink-0 flex items-center justify-center w-12 h-12"
      >
        {defaultIcon}
      </motion.div>

      {/* Text container - appears on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            variants={textVariants}
            initial="rest"
            animate="hover"
            exit="rest"
            className="flex-shrink-0 pr-4 text-sm font-medium whitespace-nowrap"
            style={{
              color: 'var(--color-foreground)',
            }}
          >
            {text}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );

  // Render as Link if href is provided
  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  // Render as button if onClick is provided
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="inline-block"
        aria-label={ariaLabel || text}
      >
        {content}
      </button>
    );
  }

  // Default: render as div (for cases where parent handles click)
  return <div className="inline-block">{content}</div>;
}

export default ExpandArrowButton;


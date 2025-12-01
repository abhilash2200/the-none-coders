'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/theme';
import { Sun, Moon, Monitor } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
  variant?: 'button' | 'icon';
  showLabel?: boolean;
}

/**
 * Modern theme toggle button with smooth animations
 * Supports light, dark, and auto (system) modes
 */
export function ThemeToggle({ 
  className, 
  variant = 'button',
  showLabel = true 
}: ThemeToggleProps) {
  const { theme, toggleTheme, resolvedTheme } = useTheme();

  const icons = {
    light: Sun,
    dark: Moon,
    auto: Monitor,
  };

  const labels = {
    light: 'Light',
    dark: 'Dark',
    auto: 'Auto',
  };

  const Icon = icons[theme] || Sun;
  const currentLabel = labels[theme] || 'Light';

  if (variant === 'icon') {
    return (
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={cn(
          'p-2 rounded-lg',
          'bg-[var(--color-backgroundSecondary)]',
          'text-[var(--color-foreground)]',
          'border border-[var(--color-border)]',
          'hover:bg-[var(--color-backgroundTertiary)]',
          'transition-colors duration-200',
          'focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2',
          className
        )}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'auto' : 'light'} theme`}
      >
        <Icon className="w-5 h-5" />
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'px-4 py-2 rounded-lg',
        'bg-[var(--color-backgroundSecondary)]',
        'text-[var(--color-foreground)]',
        'border border-[var(--color-border)]',
        'hover:bg-[var(--color-backgroundTertiary)]',
        'transition-all duration-200',
        'flex items-center gap-2',
        'focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2',
        'shadow-sm hover:shadow-md',
        className
      )}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'auto' : 'light'} theme`}
    >
      <Icon className="w-4 h-4" />
      {showLabel && (
        <span className="text-sm font-medium">{currentLabel}</span>
      )}
    </motion.button>
  );
}


/**
 * Design Tokens - Single source of truth for all design values
 * Supports light, dark, and custom themes
 */

export type ThemeMode = 'light' | 'dark' | 'auto';

export interface ColorTokens {
  // Background colors
  background: string;
  backgroundSecondary: string;
  backgroundTertiary: string;
  
  // Foreground colors
  foreground: string;
  foregroundSecondary: string;
  foregroundMuted: string;
  
  // Primary brand colors
  primary: string;
  primaryHover: string;
  primaryForeground: string;
  
  // Secondary colors
  secondary: string;
  secondaryHover: string;
  secondaryForeground: string;
  
  // Accent colors
  accent: string;
  accentHover: string;
  accentForeground: string;
  
  // Semantic colors
  success: string;
  warning: string;
  error: string;
  info: string;
  
  // Border colors
  border: string;
  borderLight: string;
  borderDark: string;
  
  // Card colors
  card: string;
  cardForeground: string;
  cardBorder: string;
  
  // Input colors
  input: string;
  inputBorder: string;
  inputFocus: string;
  
  // Muted colors
  muted: string;
  mutedForeground: string;
  
  // Brand accent (green)
  brand: string;
  brandHover: string;
}

export interface SpacingTokens {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
}

export interface TypographyTokens {
  fontFamily: {
    sans: string;
    mono: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
  };
  fontWeight: {
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  lineHeight: {
    tight: string;
    normal: string;
    relaxed: string;
  };
}

export interface RadiusTokens {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  full: string;
}

export interface ShadowTokens {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  inner: string;
  none: string;
}

export interface ThemeTokens {
  colors: ColorTokens;
  spacing: SpacingTokens;
  typography: TypographyTokens;
  radius: RadiusTokens;
  shadows: ShadowTokens;
}

// Light theme tokens
export const lightTheme: ThemeTokens = {
  colors: {
    background: '#FFFFFF',
    backgroundSecondary: '#FAFAFA',
    backgroundTertiary: '#F5F5F5',
    
    foreground: '#3A3A3A',
    foregroundSecondary: '#414141',
    foregroundMuted: '#6B7280',
    
    primary: '#3A3A3A',
    primaryHover: '#2A2A2A',
    primaryForeground: '#FFFFFF',
    
    secondary: '#F3F4F6',
    secondaryHover: '#E5E7EB',
    secondaryForeground: '#3A3A3A',
    
    accent: '#19D442',
    accentHover: '#16B838',
    accentForeground: '#FFFFFF',
    
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    
    border: '#E5E7EB',
    borderLight: '#F3F4F6',
    borderDark: '#D1D5DB',
    
    card: '#FFFFFF',
    cardForeground: '#3A3A3A',
    cardBorder: '#E5E7EB',
    
    input: '#FFFFFF',
    inputBorder: '#D1D5DB',
    inputFocus: '#19D442',
    
    muted: '#F9FAFB',
    mutedForeground: '#6B7280',
    
    brand: '#19D442',
    brandHover: '#16B838',
  },
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '0.75rem',    // 12px
    lg: '1rem',       // 16px
    xl: '1.5rem',     // 24px
    '2xl': '2rem',    // 32px
    '3xl': '3rem',    // 48px
    '4xl': '4rem',    // 64px
  },
  typography: {
    fontFamily: {
      sans: 'var(--font-pt-sans, system-ui, sans-serif)',
      mono: 'ui-monospace, monospace',
    },
    fontSize: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '3.75rem',   // 60px
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
    },
  },
  radius: {
    none: '0',
    sm: '0.25rem',    // 4px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
    '2xl': '1.5rem',  // 24px
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: 'none',
  },
};

// Dark theme tokens
export const darkTheme: ThemeTokens = {
  colors: {
    background: '#111111',
    backgroundSecondary: '#1A1A1A',
    backgroundTertiary: '#222222',
    
    foreground: '#FFFFFF',
    foregroundSecondary: '#F3F4F6',
    foregroundMuted: '#9CA3AF',
    
    primary: '#FFFFFF',
    primaryHover: '#F3F4F6',
    primaryForeground: '#111111',
    
    secondary: '#1F1F1F',
    secondaryHover: '#2A2A2A',
    secondaryForeground: '#FFFFFF',
    
    accent: '#19D442',
    accentHover: '#16B838',
    accentForeground: '#FFFFFF',
    
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    
    border: '#2A2A2A',
    borderLight: '#1F1F1F',
    borderDark: '#3A3A3A',
    
    card: '#1A1A1A',
    cardForeground: '#FFFFFF',
    cardBorder: '#2A2A2A',
    
    input: '#1A1A1A',
    inputBorder: '#2A2A2A',
    inputFocus: '#19D442',
    
    muted: '#1F1F1F',
    mutedForeground: '#9CA3AF',
    
    brand: '#19D442',
    brandHover: '#16B838',
  },
  spacing: lightTheme.spacing,
  typography: lightTheme.typography,
  radius: lightTheme.radius,
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.3)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.5), 0 4px 6px -4px rgb(0 0 0 / 0.5)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.6), 0 8px 10px -6px rgb(0 0 0 / 0.6)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.7)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.3)',
    none: 'none',
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};


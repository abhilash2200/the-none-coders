"use client";

/**
 * Legacy ThemeContext - Bridge to new theme system
 * This file maintains backward compatibility while migrating to the new theme system.
 * Components should gradually migrate to import from "@/theme" instead.
 * 
 * NOTE: This assumes the new ThemeProvider from "@/theme" is already in the component tree (from layout.tsx).
 */

import { useTheme as useNewTheme } from "@/theme";

// Legacy type for backward compatibility
export type LegacyThemeContextType = {
  theme: string; // "light" | "dark" (legacy format)
  toggleTheme: () => void;
};

// Legacy ThemeProvider - no-op since new one is in layout
// This is exported for backward compatibility but doesn't need to wrap anything
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // The new ThemeProvider is already in layout.tsx, so we just pass through
  return <>{children}</>;
}

// Legacy useTheme hook - adapts new theme system to old interface
export const useTheme = (): LegacyThemeContextType => {
  const newTheme = useNewTheme();
  
  // Convert new theme format to old format
  // Old format only had "light" | "dark", so we use resolvedTheme
  const legacyTheme = newTheme.resolvedTheme;
  
  // Create a legacy toggle that cycles between light and dark only
  const legacyToggleTheme = () => {
    if (newTheme.resolvedTheme === "light") {
      newTheme.setTheme("dark");
    } else {
      newTheme.setTheme("light");
    }
  };

  return {
    theme: legacyTheme,
    toggleTheme: legacyToggleTheme,
  };
};

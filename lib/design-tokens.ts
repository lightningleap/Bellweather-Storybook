/**
 * Bellwether Design System - Design Tokens
 *
 * This file contains all design tokens that form the foundation of the UI system.
 * These tokens are the single source of truth for colors, typography, spacing, and more.
 */

// ============================================================================
// COLOR TOKENS
// ============================================================================

export const colors = {
  // Brand Colors
  brand: {
    primary: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#ff6321', // Main brand orange
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
      950: '#431407',
    },
  },

  // Semantic Colors
  semantic: {
    background: {
      DEFAULT: 'hsl(0 0% 100%)',
      secondary: 'hsl(220 14% 96%)',
      tertiary: 'hsl(220 13% 91%)',
      inverse: 'hsl(222 47% 11%)',
    },
    foreground: {
      DEFAULT: 'hsl(222 47% 11%)',
      secondary: 'hsl(220 9% 46%)',
      tertiary: 'hsl(220 9% 60%)',
      inverse: 'hsl(0 0% 100%)',
    },
    border: {
      DEFAULT: 'hsl(220 13% 91%)',
      secondary: 'hsl(220 13% 85%)',
      focus: 'hsl(18 96% 57%)',
    },
  },

  // Feedback Colors
  feedback: {
    success: {
      light: '#dcfce7',
      DEFAULT: '#22c55e',
      dark: '#15803d',
    },
    warning: {
      light: '#fef3c7',
      DEFAULT: '#f59e0b',
      dark: '#b45309',
    },
    error: {
      light: '#fee2e2',
      DEFAULT: '#ef4444',
      dark: '#b91c1c',
    },
    info: {
      light: '#dbeafe',
      DEFAULT: '#3b82f6',
      dark: '#1d4ed8',
    },
  },

  // Neutral Colors
  neutral: {
    0: '#ffffff',
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
    950: '#09090b',
  },
} as const;

// ============================================================================
// TYPOGRAPHY TOKENS
// ============================================================================

export const typography = {
  fonts: {
    heading: '"Playfair Display", serif',
    body: '"Lora", serif',
    sans: '"DM Sans", "Inter", "Plus Jakarta Sans", system-ui, sans-serif',
    mono: '"JetBrains Mono", "Fira Code", Consolas, monospace',
  },

  fontSizes: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
  },

  fontWeights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  lineHeights: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

// ============================================================================
// SPACING TOKENS
// ============================================================================

export const spacing = {
  0: '0',
  px: '1px',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px
  1.5: '0.375rem',  // 6px
  2: '0.5rem',      // 8px
  2.5: '0.625rem',  // 10px
  3: '0.75rem',     // 12px
  3.5: '0.875rem',  // 14px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  7: '1.75rem',     // 28px
  8: '2rem',        // 32px
  9: '2.25rem',     // 36px
  10: '2.5rem',     // 40px
  11: '2.75rem',    // 44px
  12: '3rem',       // 48px
  14: '3.5rem',     // 56px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  28: '7rem',       // 112px
  32: '8rem',       // 128px
  36: '9rem',       // 144px
  40: '10rem',      // 160px
  44: '11rem',      // 176px
  48: '12rem',      // 192px
  52: '13rem',      // 208px
  56: '14rem',      // 224px
  60: '15rem',      // 240px
  64: '16rem',      // 256px
  72: '18rem',      // 288px
  80: '20rem',      // 320px
  96: '24rem',      // 384px
} as const;

// ============================================================================
// BORDER RADIUS TOKENS
// ============================================================================

export const radii = {
  none: '0',
  sm: '0.125rem',   // 2px
  DEFAULT: '0.25rem', // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px - default radius
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
} as const;

// ============================================================================
// SHADOW TOKENS
// ============================================================================

export const shadows = {
  none: 'none',
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  DEFAULT: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  // Branded shadows with orange tint
  primary: '0 4px 14px 0 rgb(255 99 33 / 0.25)',
  'primary-lg': '0 10px 25px 0 rgb(255 99 33 / 0.3)',
} as const;

// ============================================================================
// ANIMATION TOKENS
// ============================================================================

export const animation = {
  durations: {
    instant: '0ms',
    fast: '100ms',
    normal: '200ms',
    slow: '300ms',
    slower: '500ms',
    slowest: '700ms',
  },

  easings: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },

  keyframes: {
    fadeIn: {
      from: { opacity: '0' },
      to: { opacity: '1' },
    },
    fadeOut: {
      from: { opacity: '1' },
      to: { opacity: '0' },
    },
    slideInUp: {
      from: { transform: 'translateY(10px)', opacity: '0' },
      to: { transform: 'translateY(0)', opacity: '1' },
    },
    slideInDown: {
      from: { transform: 'translateY(-10px)', opacity: '0' },
      to: { transform: 'translateY(0)', opacity: '1' },
    },
    scaleIn: {
      from: { transform: 'scale(0.95)', opacity: '0' },
      to: { transform: 'scale(1)', opacity: '1' },
    },
    spin: {
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' },
    },
    pulse: {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.5' },
    },
  },
} as const;

// ============================================================================
// BREAKPOINT TOKENS
// ============================================================================

export const breakpoints = {
  xs: '375px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ============================================================================
// Z-INDEX TOKENS
// ============================================================================

export const zIndex = {
  hide: -1,
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const;

// ============================================================================
// COMPONENT SIZE TOKENS
// ============================================================================

export const componentSizes = {
  button: {
    xs: { height: '1.75rem', padding: '0.5rem 0.75rem', fontSize: '0.75rem' },
    sm: { height: '2rem', padding: '0.5rem 1rem', fontSize: '0.875rem' },
    md: { height: '2.5rem', padding: '0.625rem 1.25rem', fontSize: '0.875rem' },
    lg: { height: '2.75rem', padding: '0.75rem 1.5rem', fontSize: '1rem' },
    xl: { height: '3rem', padding: '0.875rem 1.75rem', fontSize: '1.125rem' },
  },
  input: {
    sm: { height: '2rem', padding: '0.5rem 0.75rem', fontSize: '0.875rem' },
    md: { height: '2.5rem', padding: '0.625rem 1rem', fontSize: '0.875rem' },
    lg: { height: '3rem', padding: '0.75rem 1.25rem', fontSize: '1rem' },
  },
  avatar: {
    xs: '1.5rem',
    sm: '2rem',
    md: '2.5rem',
    lg: '3rem',
    xl: '4rem',
    '2xl': '5rem',
  },
  icon: {
    xs: '0.875rem',
    sm: '1rem',
    md: '1.25rem',
    lg: '1.5rem',
    xl: '2rem',
  },
} as const;

// ============================================================================
// DESIGN TOKEN EXPORT
// ============================================================================

export const designTokens = {
  colors,
  typography,
  spacing,
  radii,
  shadows,
  animation,
  breakpoints,
  zIndex,
  componentSizes,
} as const;

export type DesignTokens = typeof designTokens;
export type Colors = typeof colors;
export type Typography = typeof typography;
export type Spacing = typeof spacing;
export type Radii = typeof radii;
export type Shadows = typeof shadows;
export type Animation = typeof animation;
export type Breakpoints = typeof breakpoints;
export type ZIndex = typeof zIndex;
export type ComponentSizes = typeof componentSizes;

export default designTokens;

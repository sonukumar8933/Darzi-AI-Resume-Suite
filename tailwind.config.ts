import type {Config} from 'tailwindcss';
const plugin = require('tailwindcss/plugin');

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto Flex', 'sans-serif'],
        headline: ['Roboto Flex', 'sans-serif'],
        'body-bold': ['Roboto', 'sans-serif'],
        'headline-bold': ['Roboto Slab', 'serif'],
        code: ['monospace'],
      },
      fontSize: {
        'display-large': ['3.5rem', { lineHeight: '4rem', letterSpacing: '-0.015625rem', fontWeight: '400' }], // 57px
        'display-medium': ['2.8125rem', { lineHeight: '3.25rem', fontWeight: '400' }], // 45px
        'display-small': ['2.25rem', { lineHeight: '2.75rem', fontWeight: '400' }], // 36px
        'headline-large': ['2rem', { lineHeight: '2.5rem', fontWeight: '400' }], // 32px
        'headline-medium': ['1.75rem', { lineHeight: '2.25rem', fontWeight: '400' }], // 28px
        'headline-small': ['1.5rem', { lineHeight: '2rem', fontWeight: '400' }], // 24px
        'title-large': ['1.375rem', { lineHeight: '1.75rem', fontWeight: '500' }], // 22px
        'title-medium': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.009375rem', fontWeight: '500' }], // 16px
        'title-small': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.00714rem', fontWeight: '500' }], // 14px
        'label-large': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.03125rem', fontWeight: '500' }], // 14px
        'label-medium': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.0416rem', fontWeight: '500' }], // 12px
        'label-small': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.045rem', fontWeight: '500' }], // 11px
        'body-large': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.03125rem', fontWeight: '400' }], // 16px
        'body-medium': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.0178rem', fontWeight: '400' }], // 14px
        'body-small': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.025rem', fontWeight: '400' }], // 12px
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        'primary-container': 'hsl(var(--md-sys-color-primary-container))',
        'on-primary-container': 'hsl(var(--md-sys-color-on-primary-container))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        'secondary-container': 'hsl(var(--md-sys-color-secondary-container))',
        'on-secondary-container': 'hsl(var(--md-sys-color-on-secondary-container))',
        tertiary: 'hsl(var(--md-sys-color-tertiary))',
        'on-tertiary': 'hsl(var(--md-sys-color-on-tertiary))',
        'tertiary-container': 'hsl(var(--md-sys-color-tertiary-container))',
        'on-tertiary-container': 'hsl(var(--md-sys-color-on-tertiary-container))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        'surface': 'hsl(var(--md-sys-color-surface))',
        'on-surface': 'hsl(var(--md-sys-color-on-surface))',
        'surface-variant': 'hsl(var(--md-sys-color-surface-variant))',
        'on-surface-variant': 'hsl(var(--md-sys-color-on-surface-variant))',
        'surface-container-low': 'hsl(var(--md-sys-color-surface-container-low))',
        'surface-container-highest': 'hsl(var(--md-sys-color-surface-container-highest))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        none: '0px',
        'extra-small': '4px',
        small: '8px',
        medium: '12px',
        large: '1rem', // 16px
        'extra-large': '1.5rem', // 24px
        full: '9999px',
        // Legacy values for ShadCN UI
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        morph: {
          '0%': { d: "path('M60,10 C87.6,10 110,32.4 110,60 C110,87.6 87.6,110 60,110 C32.4,110 10,87.6 10,60 C10,32.4 32.4,10 60,10 Z')" }, // Flower
          '33%': { d: "path('M60,10A50,50,0,1,0,60,110A50,50,0,1,0,60,10Z')" }, // Circle
          '66%': { d: "path('M10,10 H110 V110 H10 Z')" }, // Square
          '100%': { d: "path('M60,10 C87.6,10 110,32.4 110,60 C110,87.6 87.6,110 60,110 C32.4,110 10,87.6 10,60 C10,32.4 32.4,10 60,10 Z')" }, // Flower
        },
        rotate: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'morph': 'morph 3s linear infinite',
        'rotate': 'rotate 1s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ addVariant, theme }: {addVariant: any, theme: any}) {
      addVariant('font-style-modern', '.font-style-modern &');
      addVariant('font-style-bold', '.font-style-bold &');
    }),
  ],
} satisfies Config;

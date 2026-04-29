import type { Config } from 'tailwindcss';
// eslint-disable-next-line @typescript-eslint/no-require-imports
import liloPreset from '@lilo-wms/config-tailwind';

const config: Config = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [liloPreset as Config],
  theme: {
    extend: {
      // ─── Fonts (design.md) ───────────────────────────────────────
      fontFamily: {
        sans:  ['Plus Jakarta Sans', 'system-ui', 'sans-serif'], // headlines + body
        label: ['Inter', 'system-ui', 'sans-serif'],             // labels, SKUs, timestamps
      },

      // ─── Font sizes (design.md typography scale) ─────────────────
      fontSize: {
        'headline-lg': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'headline-md': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'body-lg':     ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-md':     ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'label-md':    ['12px', { lineHeight: '16px', fontWeight: '500' }],
        'label-sm':    ['10px', { lineHeight: '14px', fontWeight: '600' }],
      },

      // ─── Colors (design.md — CSS vars for shadcn + extra tokens) ──
      colors: {
        border:      'hsl(var(--border))',
        input:       'hsl(var(--input))',
        ring:        'hsl(var(--ring))',
        background:  'hsl(var(--background))',
        foreground:  'hsl(var(--foreground))',

        primary: {
          DEFAULT:    'hsl(var(--primary))',             // #451ebb
          foreground: 'hsl(var(--primary-foreground))',  // #ffffff
          container:  '#5d3fd3',                         // primary-container
          dim:        '#cabeff',                         // primary-fixed-dim / inverse-primary
        },
        secondary: {
          DEFAULT:    'hsl(var(--secondary))',            // #e4e0ef
          foreground: 'hsl(var(--secondary-foreground))', // #5f5d69
        },
        destructive: {
          DEFAULT:    'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        /** Status badges (confirmação / divergência — design stitch recebimento) */
        success: {
          DEFAULT:    '#15803d',
          foreground: '#ffffff',
        },
        warning: {
          DEFAULT:    '#a16207',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT:    'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT:    'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT:    'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },

        // Surface elevation layers (design.md Tonal Layering)
        surface: {
          DEFAULT:  '#eeeef0', // surface-container
          lowest:   '#ffffff', // surface-container-lowest (cards)
          low:      '#f3f3f6', // surface-container-low
          high:     '#e8e8ea', // surface-container-high
          highest:  '#e2e2e5', // surface-container-highest
          dim:      '#dadadc', // surface-dim
          bright:   '#f9f9fc', // surface-bright / background
        },

        // Tertiary — Amber (warnings, priority, deadlines)
        tertiary: {
          DEFAULT:    '#693700',
          container:  '#8b4b00',
          foreground: '#ffc99e', // on-tertiary-container
        },

        // Outline (borders, dividers)
        outline: {
          DEFAULT: '#797586', // outline
          variant: '#c9c4d7', // outline-variant
        },
      },

      // ─── Border Radius (design.md) ────────────────────────────────
      borderRadius: {
        sm:      '0.25rem', // 4px  — tight elements
        DEFAULT: '0.5rem',  // 8px  — inputs
        md:      '0.75rem', // 12px
        lg:      '1rem',    // 16px — cards, buttons (design.md default)
        xl:      '1.5rem',  // 24px
        full:    '9999px',  // pills — status chips
      },

      // ─── Spacing (design.md 4px baseline) ────────────────────────
      spacing: {
        xs:   '4px',
        sm:   '8px',
        md:   '16px',
        lg:   '24px',
        xl:   '32px',
        gutter:        '12px',
        'margin-mobile': '20px', // safe horizontal edge
      },

      // ─── Minimum touch target (44px — design.md WMS glove rule) ──
      minHeight: { touch: '44px', btn: '48px' },
      minWidth:  { touch: '44px' },
    },
  },
};

export default config;

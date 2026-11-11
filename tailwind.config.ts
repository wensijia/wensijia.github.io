import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0b1c33',
          soft: '#33445a',
          muted: '#65758b',
        },
        navy: {
          DEFAULT: '#071a33',
          light: '#0d2748',
        },
        accent: {
          DEFAULT: '#1f6feb',
          strong: '#1559c4',
          soft: '#eaf2ff',
        },
        mist: '#f5f8fc',
        line: '#dfe7f1',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Noto Sans SC"',
          '"Microsoft YaHei"',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          '"Cascadia Code"',
          '"SFMono-Regular"',
          'Consolas',
          '"Liberation Mono"',
          'monospace',
        ],
      },
      boxShadow: {
        card: '0 1px 2px rgba(11, 28, 51, 0.04), 0 16px 40px -28px rgba(11, 28, 51, 0.22)',
        lift: '0 2px 4px rgba(11, 28, 51, 0.05), 0 24px 60px -28px rgba(11, 28, 51, 0.3)',
      },
      maxWidth: {
        page: '1600px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 700ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 500ms ease-out both',
      },
    },
  },
  plugins: [],
} satisfies Config

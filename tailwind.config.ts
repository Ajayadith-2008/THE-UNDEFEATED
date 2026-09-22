import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#07131f',
        panel: '#0d1b2a',
        panelAlt: '#101f2d',
        border: '#1d2f3f',
        primary: '#5ac8fa',
        primarySoft: '#7dd3fc',
        cyan: '#22d3ee',
        violet: '#8b5cf6',
        green: '#34d399',
        amber: '#fbbf24',
        red: '#f87171',
        slate: '#94a3b8',
      },
      boxShadow: {
        panel: '0 0 0 1px rgba(148,163,184,0.08), 0 20px 45px -24px rgba(15,23,42,0.95)',
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.15) 1px, transparent 0)',
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { opacity: '0.65' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        pulseSlow: 'pulseSlow 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#0b1220',
        panel: '#111827',
        panelAlt: '#0f172a',
        border: '#1f2937',
        accent: '#7dd3fc',
        success: '#34d399',
        warning: '#fbbf24',
        danger: '#f87171',
        neutral: '#cbd5e1',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.35)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

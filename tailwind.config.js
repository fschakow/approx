/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#060816',
        panel: '#0c1229',
        ink: '#d6def9',
        cyan: '#32f0ff',
        magenta: '#f86aff',
        line: 'rgba(163, 182, 255, 0.18)'
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace']
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(50, 240, 255, 0.35), 0 20px 60px rgba(20, 31, 95, 0.45)'
      }
    }
  },
  plugins: []
};

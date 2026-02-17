/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Legacy (keep for engine compat) */
        obsidian: '#0F172A',
        bone: '#FAF9F6',
        ember: '#E07A2F',
        moss: '#2D5A3D',
        slate: '#94A3B8',
        'signal-red': '#C53030',
        'glacier-blue': '#CBD5E1',
        'warm-sand': '#F5E6D0',

        /* Darwin-Era Palette */
        'darwin-navy': '#1E3A5F',
        'darwin-amber': '#D4A574',
        'darwin-gold': '#C9A961',
        'darwin-charcoal': '#2D2D2D',
        'darwin-cream': '#F5F1E8',

        /* Modern Biology Palette */
        'modern-teal': '#2A9D8F',
        'modern-cool-blue': '#457B9D',
        'modern-cyan': '#06D6A0',
        'modern-dark-slate': '#264653',
        'modern-cool-white': '#F7F9FB',

        /* Universal */
        'uni-orange': '#E76F51',
        'uni-green': '#52B788',
        'uni-red': '#E63946',
        'uni-gold': '#FFB703',

        /* CSS var-driven active palette */
        'slide-bg': 'var(--slide-bg)',
        'slide-text': 'var(--slide-text)',
        'slide-heading': 'var(--slide-heading)',
        'slide-accent': 'var(--slide-accent)',
        'slide-accent2': 'var(--slide-accent2)',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Calibri', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
        heading: ['var(--heading-font)'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

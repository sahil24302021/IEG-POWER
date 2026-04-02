/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ieg: {
          green:    '#1A6B3C',
          lime:     '#2ECC71',
          orange:   '#F4A123',
          dark:     '#080C08',
          surface:  '#0F1A0F',
          border:   'rgba(46, 204, 113, 0.15)',
          text:     '#F0FFF4',
          muted:    '#6B9E7A',
        },
        forest: {
          DEFAULT: '#1A6B3C',
          light: '#2ECC71',
          dark: '#0E4D2B',
          50: '#E8F5EE',
        },
        amber: {
          DEFAULT: '#F4A123',
          light: '#FFBB54',
          dark: '#D47A10',
        },
        cream: {
          DEFAULT: '#F8F6F0',
          dark: '#EBE8E0',
        },
        carbon: {
          DEFAULT: '#080C08',
          light: '#0F1A0F',
          200: '#1A2A1A',
          300: '#2A3A2A',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        heading: ['DM Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

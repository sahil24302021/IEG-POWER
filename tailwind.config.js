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
        'ieg-black': '#0B1526',
        'ieg-slate': '#0A1628',
        'ieg-gold': '#D4AF37',
        'ieg-blue': '#1B6FA8',
        'ieg-blue-deep': '#1B4F72',
        'ieg-green': '#1A7A4C',
        'ieg-muted': '#94A3B8',
        'ieg-dim': '#526580',
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        dm: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

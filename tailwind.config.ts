import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-mono)', 'monospace'],
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        bg: '#050505',
        surface: '#0a0a0a',
        card: '#0f0f0f',
        gold: '#c8a94a',
        'gold-dim': 'rgba(200,169,74,0.25)',
        red: '#8b1a1a',
        cyan: '#00d4ff',
        green: '#00ff88',
        muted: '#4a4a4a',
        subtle: '#2a2a2a',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin-reverse 35s linear infinite',
        'pulse-gold': 'pulse-gold 3s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'flicker': 'flicker 4s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 5s infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'pulse-gold': {
          '0%,100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        flicker: {
          '0%,95%,100%': { opacity: '1' },
          '96%': { opacity: '0.7' },
          '97%': { opacity: '1' },
          '98%': { opacity: '0.4' },
          '99%': { opacity: '1' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glitch: {
          '0%,90%,100%': { transform: 'translate(0)', filter: 'none' },
          '91%': { transform: 'translate(-2px, 1px)', filter: 'hue-rotate(90deg)' },
          '92%': { transform: 'translate(2px, -1px)', filter: 'hue-rotate(-90deg)' },
          '93%': { transform: 'translate(0)', filter: 'none' },
          '94%': { transform: 'translate(1px, 2px)', filter: 'brightness(1.5)' },
          '95%': { transform: 'translate(0)', filter: 'none' },
        },
      },
    },
  },
  plugins: [],
}

export default config

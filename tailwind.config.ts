import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: { 'max-md': { max: '768px' }, 'max-sm': { max: '480px' } },
    },
  },
  plugins: [],
}
export default config

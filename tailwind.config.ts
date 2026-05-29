import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // FGI locked brand palette (confirmed by Ricardo 2026-05-29). Do not guess.
        brand: {
          white: '#ffffff', // backgrounds
          blue: '#2a9df4',  // primary — logo, CTAs, links
          gold: '#ffd700',  // accent — highlights, CTA buttons
          teal: '#008080',  // secondary — NPO context, accents
          grey: '#7d7d7d',  // body text
          black: '#000000', // dark sections, logo background
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        pill: '30px',
      },
      boxShadow: {
        card: '0 2px 12px rgba(0, 31, 84, 0.06)',
        'card-hover': '0 8px 24px rgba(0, 31, 84, 0.12)',
      },
    },
  },
  plugins: [],
}

export default config

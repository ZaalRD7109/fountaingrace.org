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
        brand: {
          navy: '#001F54',   // primary dark — hero backgrounds, dark sections
          teal: '#00796B',   // secondary — NPO sections, accents
          gold: '#FFD600',   // CTA buttons, highlights
          light: '#f8faff',  // section backgrounds (light blue tint)
          lteal: '#f0f9f7',  // section backgrounds (light teal tint)
          grey: '#555555',   // body text
          dark: '#222222',   // headings
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(145deg, #001F54 0%, #00796B 100%)',
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

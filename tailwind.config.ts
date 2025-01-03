import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // App Router paths
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['"Proxima Nova"', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#3F3929',   // Your custom primary color
        secondary: '#A2A915', // Your custom secondary color
        accent: '#EDC363',    // Your custom accent color
        blue: '#6C92B6',      // Your custom blue color
        darkBlue: '#547131',  // Your custom dark blue color
      },
      keyframes: {
        pixelate: {
          '0%': { filter: 'blur(10px)', transform: 'scale(1.1)' },
          '100%': { filter: 'blur(0px)', transform: 'scale(1)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        pixelate: 'pixelate 2s ease-out forwards',
        bounceSlow: 'bounceSlow 2s infinite', // Bouncing arrow animation
      },
      spacing: {
        '21': '84px',  // Adding custom spacing if needed
        '24': '96px',
        // Add more custom spacing values if necessary
      },
    },
  },
  plugins: [],
} satisfies Config;

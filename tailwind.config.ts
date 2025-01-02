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
      },
      animation: {
        pixelate: 'pixelate 2s ease-out forwards',
      },

    },
  },
  plugins: [],
} satisfies Config;

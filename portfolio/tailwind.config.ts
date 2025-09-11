import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { sans: ['Orbitron', 'ui-sans-serif', 'system-ui'] },
    fontSize: {
      fluid: ['clamp(1rem, 0.6rem + 1.2vw, 1.125rem)', '1.6'],
      '2fluid': ['clamp(1.5rem, 1rem + 2.8vw, 3rem)', '1.2']
    },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;

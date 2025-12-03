import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cate-orange': '#FF6B35',
        'cate-blue': '#1E3A8A',
        'cate-light-blue': '#3B82F6',
        'cate-dark-blue': '#0F172A',
        'cate-pink': '#EC4899',
        'cate-purple': '#A855F7',
        'cate-gold': '#FBBF24',
      },
    },
  },
  plugins: [],
};
export default config;

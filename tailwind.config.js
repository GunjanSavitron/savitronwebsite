/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./amitkk/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Platinum Edge core
        page: "#FAFAFA",
        surface: "#FFFFFF",
        platinum: "#F2F2F2",
        border: { DEFAULT: "#E2E2E2", strong: "#C8C8C8" },
        ink: { DEFAULT: "#1C1C1C", muted: "#555555", faint: "#A0A0A0" },
        navbar: "#1C1C1C",
        footer: "#111111",
        gold: { DEFAULT: "#B8962E", light: "#D4AF50", tint: "#FDF8EC" },
        // Surion-port aliases (mapped to Platinum Edge so Surion JSX can be ported as-is)
        brown: "#1C1C1C",
        "brown-deep": "#111111",
        "brown-mid": "#2A2A2A",
        tan: "#B8962E",
        "tan-soft": "#D4AF50",
        cream: "#FAFAFA",
        "cream-soft": "#F2F2F2",
        dark: "#1C1C1C",
        slate: "#555555",
        // Legacy aliases — remove in Stage 10 cleanup
        primary: "#1C1C1C",
        action: "#B8962E",
        orange: "#D4AF50",
        lightgray: "#F2F2F2",
        darkgray: "#111111",
      },
      backgroundColor: {
        page: "#FAFAFA",
        surface: "#FFFFFF",
        platinum: "#F2F2F2",
        navbar: "#1C1C1C",
        footer: "#111111",
        gold: "#B8962E",
        // Legacy
        primary: "#1C1C1C",
        action: "#B8962E",
        orange: "#D4AF50",
        lightgray: "#F2F2F2",
        darkgray: "#111111",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Cormorant Garamond", "serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
      },
      height: {
        100: "100px",
      },
    },
  },
  plugins: [],
};

export default config;

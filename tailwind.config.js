/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0B",
        surface: "#131316",
        surface2: "#1A1A1E",
        border: "#232327",
        borderStrong: "#2E2E33",
        ink: "#F1F0EC",
        muted: "#8B8B93",
        faint: "#85858D",
        accent: "#4ADE9C",
        accentDim: "#3BAE7C",
        accentSoft: "rgba(74, 222, 156, 0.1)",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(0,0,0,0.6)",
        card: "0 10px 30px -12px rgba(0,0,0,0.5)",
      },
      maxWidth: {
        content: "1240px",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.35 },
        },
      },
      animation: {
        blink: "blink 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

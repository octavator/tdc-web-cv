/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cv-primary": "#2563eb",
        "cv-secondary": "#1e40af",
        "cv-accent": "#059669",
        "cv-light-grey": "#64748b",
        "cv-dark-grey": "#334155",
        "cv-text-primary": "#0f172a",
        "cv-background-light": "#f8fafc",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

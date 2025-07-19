/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cv-primary": "#cc6666",
        "cv-secondary": "hsl(201.05deg 94.14% 24.09%)",
        "cv-light-grey": "rgba(75, 74, 74, 0.9)",
        "cv-tertiary": "#a180df",
        "cv-lilac": "#C8A2C8",
      },
    },
  },
  plugins: [],
};

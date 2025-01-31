module.exports = {
  darkMode: "class", // or 'media' if you want to use media query
  content: {
    files: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  },
  theme: {
    extend: {
      fontSize: {
        vws: "20vw",
        md: "1rem",
      },
      lineHeight: {
        vws: "11vw",
      },
      zIndex: {
        "-1": "-1",
      },
      colors: {
        medwork: {
          light: "#F5F5F5",
          light2: "#e0dede",
          dark: "#1A1B26",
          dark2: "#262738",
          blue: "#2d333b",
          brown: "#444444",
        },
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
    },
    fontFamily: {
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    screens: {
      tn: "216px",
      xs: "400px",
      sm: "576px",
      md: "960px",
      eq: "1200px",
      lg: "1440px",
      xl: "1840px",
      "2xl": "2160px",
      "3xl": "2560px",
      "4xl": "2940px",
    },
    animation: {
      fadeIn: "fadeIn 2s ease-in forwards",
      enlarge: "enlarge 1s ease-in forwards",
      minify: "minify 1s ease-in forwards",
      spinSlow: "spin 2s linear infinite",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      fadeOut: {
        "100%": { opacity: 1 },
        "0%": { opacity: 0 },
      },
      enlarge: {
        "0%": { transform: "scale(0.75)" },
        "100%": { transform: "scale(1)" },
      },
      minify: {
        "0%": { transform: "scale(1)" },
        "100%": { transform: "scale(0.75)" },
      },
    },
    variants: {
      animation: ["motion-safe"],
      extend: {
        display: ["hover"],
      },
    },
  },
};

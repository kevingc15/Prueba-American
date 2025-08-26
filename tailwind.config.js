export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#121212",
          card: "#1E1E1E",
          text: "#E5E5E5",
          textSecondary: "#9CA3AF",
        },
        accent: {
          red: "#DC2626",
          redHover: "#B91C1C",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        blacklux: "#0F0F0F",
        surface: "#181818",
        warm: "#F5EFE6",
        copper: "#C97B36",
      },
      fontFamily: {
        heading: ["Playfair Display", "Cinzel", "serif"],
        body: ["Inter", "Poppins", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 35px rgba(212, 175, 55, 0.24)",
        soft: "0 20px 80px rgba(0, 0, 0, 0.45)",
      },
      backgroundImage: {
        "gold-radial":
          "radial-gradient(circle at top, rgba(212,175,55,0.35), rgba(212,175,55,0) 55%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -16px, 0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
      },
    },
  },
  plugins: [],
};

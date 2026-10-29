/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#0A0908",
        parchment: "#F1E8D6",
        muted: "#A39A86",
        gold: "#C9B48A",
        sand: "#F3E8D0",
        success: "#9FD3A0",
        danger: "#E58A8A",
      },
      boxShadow: {
        glow: "0 0 35px rgba(201,180,138,0.2)",
      },
      backgroundImage: {
        metallic: "linear-gradient(135deg,#F3E8D0 0%,#C9B48A 40%,#EFE2C4 58%,#A8916A 100%)",
      },
      borderRadius: {
        xl: "20px",
        lg: "16px",
      },
    },
  },
  plugins: [],
};

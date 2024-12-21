import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-slide-1": "url('/client/src/assets/banner/1.png)",
        "hero-slide-2": "url('/client/src/assets/banner/2.png)",
        "hero-slide-3": "url('/client/src/assets/banner/3.png)",
      },
    },
  },
  plugins: [daisyui],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "bg_image": "url('./src/assets/Soothing-nature-backgrounds-2.jpg.webp')",
      "bg_image2": "url('./src/assets/bg-book.jpg')",
      "bg_image3": "url('./src/assets/bg-book2.jpg')",
      "bg-image4": "url('./src/assets/bg-book3.jpg')",
      "bg-image5": "url('./src/assets/books-img.jpg')"
    },
  },
  plugins: [],
};


const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        flowbite.content(),
        "node_modules/swiper/swiper-bundle.min.css",
    ],
    theme: {
        extend: {
            colors: {
                darkGray: "#1a202c", // Background
                lightGray: "#e3e1e1", // Text
                accent: "#38b2ac", // Accent
                accentLight: "#81e6d9", // Hover Accent
                darkAccent: "#2d3748", // Mobile Menu Background

                darkBlue: "#100024", // dark blue color
                violet: "#280064", // violet blue color
                purple: "#a600ff", // purple color

                accentWhite: "#e8fcfa", // white colors
            },
            animation: {
                "spin-slow": "spin 60s linear infinite",
            },
        },
    },
    plugins: [flowbite.plugin()],
};

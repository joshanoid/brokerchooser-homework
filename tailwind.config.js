/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        screens: {
            sm: { max: "640px" }
        }
    },
    plugins: []
};

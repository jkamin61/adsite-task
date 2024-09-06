/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        fontFamily: {
            roboto: ['Roboto Flex', 'sans-serif'],
            bebas: ['"Bebas Neue"', 'cursive'],
            robotoCondensed: ['Roboto Condensed', 'sans-serif'],
        },
        extend: {
            colors: {
                deepBlue: '#0147FF',
                gravel: '#282828'
            }
        },
    },
    plugins: [],
}


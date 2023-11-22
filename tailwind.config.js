/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./markup/**/*.html'],
    theme: {
        extend: {
            colors: {
                event: '#3D2942',
                timer: '#8613A5',
                'white-100': '#F5FBF2',
                'violet-light': '#BDAAC1',
                primary: '#FFCE4E',
            },
            fontFamily: {
                oxanium: ['Oxanium', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

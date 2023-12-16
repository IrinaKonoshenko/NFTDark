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
                hover: '#A77E12',
                bg: '#1C121F',
                blur: '#4f464e',
                btn: '#E7B226',
                'light-violet': '#908294',
            },
            fontFamily: {
                oxanium: ['Oxanium', 'sans-serif'],
            },
            backgroundImage: {
                gradient: 'linear-gradient(93deg, #D73795 0, #E09EC0 100%);',
            },
        },
    },
    plugins: [],
};

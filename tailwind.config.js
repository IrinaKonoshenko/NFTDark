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
            },
            fontFamily: {
                oxanium: ['Oxanium', 'sans-serif'],
            },
        },
        screens: {
            mobile: { min: '300px', max: '767px' },
            desctop: { min: '768px', max: '1900px' },
        },
    },
    plugins: [],
};

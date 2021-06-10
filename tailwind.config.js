const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        container: {
            padding: '2.5rem'
        },
        fontFamily: {
            sans: [
                'Roboto',
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Helvetica',
                'Arial',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol'
            ]
        },
        extend: {
            fontSize: {
                base: '14px'
            },
            rotate: {
                135: '135deg'
            },
            transitionProperty: {
                width: 'width'
            },
            colors: {
                purple: {
                    DEFAULT: '#2A0753',
                    50: '#FBF9FE',
                    100: '#E3CEFB',
                    200: '#B27AF4',
                    300: '#8125ED',
                    400: '#550EA8',
                    500: '#2A0753',
                    600: '#230645',
                    700: '#1C0537',
                    800: '#150329',
                    900: '#0D021B'
                },
                pink: {
                    50: '#E172FD'
                },
                gray: colors.trueGray
            },
            borderWidth: {
                3: '3px'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};

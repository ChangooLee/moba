/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'padi-blue': '#0070D3',
                'padi-red': '#F23D4E',
                'padi-dark-blue': '#0056B3',
                'padi-light-blue': '#E6F2FF',
            },
            fontFamily: {
                sans: ['Noto Sans', 'system-ui', 'sans-serif'],
                heading: ['Montserrat', 'Noto Sans', 'system-ui', 'sans-serif'],
                display: ['Montserrat', 'Noto Sans', 'system-ui', 'sans-serif'],
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.3s ease-out',
                'bounce-slow': 'bounce 2s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}



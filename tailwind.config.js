/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Legacy PADI brand tokens (kept for existing pages)
                'padi-blue': '#0070D3',
                'padi-red': '#F23D4E',
                'padi-dark-blue': '#0056B3',
                'padi-light-blue': '#E6F2FF',

                // MOBA proposal design system — deep-ocean palette
                ink: '#071726',            // deepest ocean (hero base, dark sections)
                navy: {
                    DEFAULT: '#0C2A45',
                    950: '#071726',
                    900: '#0A2137',
                    800: '#0C2A45',
                    700: '#103455',
                    600: '#154268',
                    500: '#1E5486',
                },
                aqua: {
                    DEFAULT: '#12C2D6',
                    light: '#5FE0EE',
                    50: '#E7FAFC',
                    dark: '#0BA3B5',
                },
                coral: {
                    DEFAULT: '#FF6A4D',
                    dark: '#EF4E2C',
                    light: '#FF8B73',
                },
                mist: {
                    DEFAULT: '#EFF5FA',
                    deep: '#E2EDF5',
                },
            },
            fontFamily: {
                sans: ['Pretendard', 'Noto Sans', 'Noto Sans KR', 'system-ui', 'sans-serif'],
                heading: ['Montserrat', 'Pretendard', 'Noto Sans KR', 'system-ui', 'sans-serif'],
                display: ['Montserrat', 'Pretendard', 'Noto Sans KR', 'system-ui', 'sans-serif'],
                mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
            },
            letterSpacing: {
                eyebrow: '0.22em',
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            maxWidth: {
                '8xl': '88rem',
            },
            boxShadow: {
                card: '0 10px 30px -12px rgba(12, 42, 69, 0.18)',
                'card-lg': '0 24px 60px -20px rgba(12, 42, 69, 0.28)',
                glow: '0 0 40px -8px rgba(18, 194, 214, 0.45)',
            },
            backgroundImage: {
                'ocean-deep': 'linear-gradient(180deg, #0A2137 0%, #0C2A45 45%, #071726 100%)',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out both',
                'slide-up': 'slideUp 0.5s ease-out both',
                'bounce-slow': 'bounce 2s infinite',
                'reveal': 'reveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
                'ray': 'ray 9s ease-in-out infinite',
                'bubble': 'bubble 14s linear infinite',
                'float-slow': 'floatSlow 7s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(12px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                reveal: {
                    '0%': { transform: 'translateY(28px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                ray: {
                    '0%, 100%': { opacity: '0.25', transform: 'translateX(-6%) skewX(-6deg)' },
                    '50%': { opacity: '0.55', transform: 'translateX(6%) skewX(-6deg)' },
                },
                bubble: {
                    '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
                    '10%': { opacity: '0.6' },
                    '90%': { opacity: '0.4' },
                    '100%': { transform: 'translateY(-120vh) scale(1.4)', opacity: '0' },
                },
                floatSlow: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
}

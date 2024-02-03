/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            screens: {
                'Mobile': '375px',
                'Desktop': '1440px',
            },
            colors: {
                'primary': 'hsl(47, 88%, 63%)',
                'Neutral': {
                    White: 'hsl(0, 0%, 100%)',
                    Grey: 'hsl(0, 0%, 50%)',
                    Black: 'hsl(0, 0%, 7%)',
                },
            },
            fontFamily: {
                'Figtree': ['Figtree', 'sans-serif'],
            },
            boxShadow: {
                'special': '8px 8px 0 0 hsl(0, 0%, 7%)',
            },
        },
    },
    plugins: [],
}


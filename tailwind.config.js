/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                'theme-primary': '#8F58FF',
                'theme-accent': '#B2E5FF',
                'theme-body': '#F1F4FD',
                'theme-muted': '#686D76',
                'theme-light': '#F1F4FD',
                'theme-dark': '#020916',
                'theme-bg': '#121924'
            }
        }
    },
    plugins: []
};

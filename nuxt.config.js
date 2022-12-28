export default {
    head: {
        title: 'Jurnalbijak.com - Solusi Jurnal Anda',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Easy accounting App build on website #1 in Indonesia',
            },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap',
            },
        ],
    },
    buildModules: [
        '@nuxt/postcss8',
        // ...
    ],
    css: ['@/assets/css/main.css', 'aos/dist/aos.css'],
    components: true,
    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
    },
    target: 'static',
};
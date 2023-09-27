export default defineNuxtConfig({
  app: {
    head: {
      title: 'Erwan Donisa',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { name: 'description', content: 'Erwan Donisa - Designer / Directeur artistique' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'og:title', content: 'Erwan Donisa' },
        { name: 'og:description', content: 'Erwan Donisa - Designer / Directeur artistique' },
        { name: 'og:image', content: '/images/og-image.jpg' },
        { name: 'og:url', content: 'https://erwandonisa.com' },
        { name: 'og:type', content: 'website' },
        { name: 'google-site-verification', content: '' },
        { name: 'referrer', content: 'no-referrer-when-downgrade' },
      ],
      link: [
        { rel: 'canonical', href: 'https://erwandonisa.com' },
      ],
      noscript: [
        { children: 'JavaScript is required' }
      ]
    }
  },
  devtools: { enabled: true },
  vite: {
    resolve: {
      alias: {
        '~': '/public',
        '@': '/assets',
      },
    },
  },
  modules: [
    '@nuxt/image',
  ],
  css: ['@/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Erwan Donisa',
      htmlAttrs: {
        lang: 'fr',
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { name: 'description', content: 'Erwan Donisa - Designer / Directeur artistique' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:title', content: 'Erwan Donisa' },
        { property: 'og:description', content: 'Erwan Donisa - Designer / Directeur artistique' },
        { property: 'og:image', content: '/images/og-image.jpg' },
        { property: 'og:url', content: 'https://erwandonisa.com' },
        { property: 'og:type', content: 'website' },
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


export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    resolve: {
      alias: {
        '~': '/public',
        '@': '/assets',
      },
    },
  },
});

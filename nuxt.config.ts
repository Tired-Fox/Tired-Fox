// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  css: [
    "@/assets/styles/main.scss",
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: "one-dark-pro",
      preload: ["python", "rust"],
    },
  },
});

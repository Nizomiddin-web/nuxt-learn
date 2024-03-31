// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  components:[
    {path:'components/user', prefix: 'Comp'},
    {path:'components/blog', pathPrefix: false},
    {path:'components/auth', pathPrefix: false},
  ],

  modules: ["@nuxt/content"]
})
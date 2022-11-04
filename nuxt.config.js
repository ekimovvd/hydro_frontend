export default {
  head: {
    title: "hydro_frontend",
    htmlAttrs: {
      lang: "ru",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        as: "style",
        rel: "stylesheet preload prefetch",
        href: "/fonts/fonts.css",
      },
    ],
  },

  css: ["boxicons/css/boxicons.min.css"],

  styleResources: {
    scss: [
      "./assets/styles/variables.scss",
      "./assets/styles/main.scss",
      "./assets/styles/mixins.scss",
    ],
  },

  plugins: [
    "~/plugins/axios.ts",
    "~/plugins/vue-bem-cn.ts",
    "~plugins/project-services.ts",
    "~/plugins/element-ui.ts",
  ],

  components: true,

  buildModules: ["@nuxt/typescript-build", "@nuxtjs/style-resources"],

  modules: ["@nuxtjs/axios", "cookie-universal-nuxt"],

  axios: {
    baseURL: process.env.API_URL,
    proxyHeaders: false,
    credentials: false,
    progress: false,
  },

  build: {},
};

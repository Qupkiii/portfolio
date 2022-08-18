import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['assets/style.css'],
    buildModules: ["@nuxtjs/google-fonts"],
    modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge"],
    image: {
        dir: "assets/images",
    },
    googleFonts: {
        download: true,
        inject: true,
        base64: true,
        families: {
            Silkscreen: [400, 700],
        },
    },
});

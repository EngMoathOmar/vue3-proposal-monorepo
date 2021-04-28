import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import viteSSR from "vite-ssr/plugin.js"
import vueJsx from "@vitejs/plugin-vue-jsx"

export default defineConfig({
  plugins: [vue(), viteSSR(), vueJsx()],
})

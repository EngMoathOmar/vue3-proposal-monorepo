import vue from "@vitejs/plugin-vue"
import ssr from "vite-plugin-ssr/plugin"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [vue(), ssr()],
})

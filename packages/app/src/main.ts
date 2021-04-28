import { App as AppInterface } from "vue"
import viteSSR from "vite-ssr"

import Banner from "shared-components/dist/Banner/component.js"
import "shared-components/dist/Banner/styles.css"

import Header from "shared-components/dist/Header/component.js"
import "shared-components/dist/Header/styles.css"

import App from "./App.vue"
import routes from "./routes"

export default viteSSR(App, { routes }, (context) => {
  const { app }: { app: AppInterface } = context

  app.use(Banner).use(Header)
})

import { getPage } from "vite-plugin-ssr/client"
import { createApp } from "./app"
import { ContextProps } from "./types"

hydrate()

async function hydrate() {
  const { Page, contextProps } = await getPage()
  const app = createApp(Page, contextProps as ContextProps)
  app.mount("#app")
}

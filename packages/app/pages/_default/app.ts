import { createSSRApp, defineComponent, h } from "vue"

import Header from "shared-components/dist/Header/component.js"
import "shared-components/dist/Header/styles.css"

import { ContextProps } from "./types"
import PageLayout from "./PageLayout.vue"

export function createApp(Page: any, contextProps: ContextProps) {
  const PageWithLayout = defineComponent({
    render() {
      return h(
        PageLayout,
        {},
        {
          default() {
            return h(Page, contextProps.pageProps || {})
          },
        },
      )
    },
  })

  const app = createSSRApp(PageWithLayout)

  // We make `contextProps.routeParams` available in all components as
  // `this.$routeParams` (e.g. `this.$routeParams.movieId` for a Route
  // String `/movie/:movieId`).
  app.config.globalProperties.$routeParams = contextProps.routeParams

  app.use(Header)

  return app
}

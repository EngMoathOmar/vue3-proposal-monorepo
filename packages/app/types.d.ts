declare module "*.vue" {
  import { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "*.svg" {
  const imageUrl: string
  export default imageUrl
}

declare module "shared-components/dist/Banner/component.js"
declare module "shared-components/dist/Header/component.js"

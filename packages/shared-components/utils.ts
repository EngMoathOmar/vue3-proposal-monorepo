import { DefineComponent, Plugin, App } from "vue"

type Component = DefineComponent<{}, {}, any>
type InstallableComponent = Component & {
  install: Exclude<Plugin["install"], undefined>
}

export function makeInstallable(component: Component) {
  const installable = component as InstallableComponent

  installable.install = (app: App) => {
    app.component(component.name, installable)
  }

  return installable
}

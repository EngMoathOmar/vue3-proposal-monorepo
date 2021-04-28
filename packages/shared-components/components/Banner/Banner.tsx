import { defineComponent } from "vue"

import "./styles.css"

export default defineComponent({
  name: "Banner",
  render() {
    return <h2 class="banner">This is a Banner component</h2>
  },
})

import { reactive, defineComponent } from "vue"

const state = reactive({ counter: 0 })

export default defineComponent({
  name: "About",
  setup() {
    return () => (
      <div>
        <button onClick={incrementCounter}>Increment Counter</button>
        <h1>Counter is: {state.counter}</h1>
        <router-link to="/">Home</router-link>
      </div>
    )
  },
})

function incrementCounter() {
  state.counter += 1
}

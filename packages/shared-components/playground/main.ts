import { createApp } from "vue"

import App from "./App.vue"

import Banner from "../components/Banner"
import Header from "../components/Header"

createApp(App).use(Banner).use(Header).mount("#app")

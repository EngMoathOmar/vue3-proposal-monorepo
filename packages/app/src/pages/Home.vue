<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "Home",
})
</script>

<template>
  <h1>Home</h1>
  <router-link to="/about">About</router-link>
</template>

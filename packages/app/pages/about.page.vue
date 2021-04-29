<template>
  <Banner />
  <h1>About</h1>
  <p>A colored paragraph.</p>
</template>

<script setup lang="ts">
import Banner from "shared-components/dist/Banner/component.js"
import "shared-components/dist/Banner/styles.css"
</script>

<style>
p {
  color: red;
}
</style>

<template>
  <div class="container flex flex-row">
    <navs></navs>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import navs from "./components/navs/index.vue";
</script>

<style lang="scss" scoped></style>

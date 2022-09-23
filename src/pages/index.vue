<template>
  <div class="app-container">
    <global-header></global-header>
    <main class="main-container">
      <global-nav></global-nav>
      <div class="content" v-watermark="'Lzx'"></div>
    </main>
  </div>
</template>

<script setup>
// import { useRouter, useRoute } from "vue-router";
// const router = useRouter();
// const route = useRoute();

// function goList() {
//   router.push("list");
// }
</script>

<style lang="scss" scoped>
.app-container {
  @apply container mx-auto font-sans text-base text-gray-700;
}
.main-container {
  margin-top: $header-h;
  @apply container flex flex-row justify-center;
}
</style>

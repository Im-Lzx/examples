<template>
  <div class="container">
    index

    <button class="" @click="goList">点击进入list</button>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

function goList() {
  router.push("list");
}
</script>

<style></style>

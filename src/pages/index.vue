<template>
  <div class="container aa" v-watermark="'哈哈'">
    index
    <global-title title="这是一段标题头"></global-title>

    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil unde esse
      veritatis laudantium natus praesentium, animi doloremque, magnam, sed
      delectus debitis asperiores sapiente hic quaerat sunt inventore culpa.
      Dicta, quod?
    </div>

    <button v-red class="" @click="goList">点击进入list</button>
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

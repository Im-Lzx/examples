// Title 组件
<template>
  <div class="title">{{ title }}</div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scope></style>

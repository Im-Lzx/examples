// Code 组件
<template>
  <div class="code-container">
    <pre>
        <code>
            import { createApp } from 'vue'
            createApp({
                data() {
                    return {
                    count: 0
                    }
                }
            }).mount('#app')
        </code>
    </pre>
  </div>
</template>

<script setup>
defineProps({
  code: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scope></style>

<template>
  <div>
    <div class="title">角向渐变。可以用来实现饼图</div>
    <div class="conic-gradient"></div>
  </div>
</template>

<script>
export default {
  name: "conic-gradient",
};
</script>

<style lang="scss" scoped>
.conic-gradient {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 100px;
  background: conic-gradient(red 0 3%, green 30% 70%, blue 70% 100%);
}
</style>

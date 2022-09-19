<template>
  <div>
    <div class="title">绘制彩带 linear-gradient</div>
    <div class="colour-bar"></div>
  </div>
</template>

<script>
export default {
  name: "colour-bar",
};
</script>

<style lang="scss" scoped>
.colour-bar {
  width: 100%;
  height: 100px;
  background-color: red; /* 浏览器不支持的时候显示 */

  background-image: linear-gradient(
    20deg,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  ); /* 标准的语法（必须放在最后） */
}
</style>

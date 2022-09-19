<template>
  <div>
    <div class="title">padding 实现定宽高</div>
    <p>原理：padding的百分比是相对于其包含块的宽度，而不是高度</p>
    <div class="rectangle">
      <div class="inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rectangle",
};
</script>

<style lang="scss" scoped>
.rectangle {
  margin: 0 auto;
  width: 300px;
  box-sizing: border-box;
  background: red;
  .inner {
    padding-top: 100%;
  }
}
</style>

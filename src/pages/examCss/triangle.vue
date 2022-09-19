<template>
  <div>
    <div class="title">css 绘制三角形</div>
    <ol class="flex-row">
      <li class="triangle all"></li>
      <li class="triangle top"></li>
      <li class="triangle left"></li>
      <li class="triangle right"></li>
      <li class="triangle bottom"></li>

      <li class="triangle topLeft"></li>
      <li class="triangle topRight"></li>
      <li class="triangle bottomLeft"></li>
      <li class="triangle bottomRight"></li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "triangle",
};
</script>

<style lang="scss" scoped>
@top-color:red;
@left-color:green;
@right-color:blue;
@bottom-color:yellow;
ol {
  flex-wrap: wrap;
}
li {
  width: 0;
  height: 0;
  border-width: 30px;
  border-style: solid;
  background: transparent;
  border-color: transparent;
  margin-bottom: 20px;
  margin-right: 50px;
}
.all {
  border-top-color: @top-color;
  border-left-color: @left-color;
  border-right-color: @right-color;
  border-bottom-color: @bottom-color;
}
.top {
  border-top-color: @top-color;
}
.left {
  border-left-color: @left-color;
}
.right {
  border-right-color: @right-color;
}
.bottom {
  border-bottom-color: @bottom-color;
}
.topLeft {
  border-top-color: @left-color;
  border-left-color: @left-color;
}
.topRight {
  border-top-color: @right-color;
  border-right-color: @right-color;
}
.bottomLeft {
  border-bottom-color: @top-color;
  border-left-color: @top-color;
}
.bottomRight {
  border-bottom-color: @bottom-color;
  border-right-color: @bottom-color;
}
</style>

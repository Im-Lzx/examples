<template>
  <div>
    <div class="title">文字环绕</div>
    <div class="text-wrap">
      <div class="circle"></div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
      inventore facere repellendus temporibus aspernatur! Praesentium quae
      soluta veritatis tempora sunt, maxime distinctio sed exercitationem nobis
      quod, ducimus illum, in magnam. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Quidem unde veritatis quaerat aperiam sint, quibusdam
      reiciendis fuga impedit tempora dignissimos alias nisi, omnis sed?
      Repudiandae fugiat tempora est natus? Voluptatem.
    </div>
  </div>
</template>

<script>
export default {
  name: "text-wrap",
};
</script>

<style lang="scss">
.text-wrap {
  text-align: left;
  .circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: olivedrab;
    float: left;
    shape-outside: circle();
    margin-right: 10px;
  }
}
</style>

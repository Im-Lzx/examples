<template>
  <div>
    <div class="title">水动波纹</div>
    <div class="water-waves"></div>
  </div>
</template>

<script>
export default {
  name: "water-waves",
};
</script>

<style lang="scss">
.water-waves {
  margin: 30px auto;
  width: 200px;
  height: 300px;
  border-radius: 0 0 20px 20px;
  border: 3px solid black;
  border-top: none;
  position: relative;
  background-color: skyblue;
  overflow: hidden;
}
.water-waves::before,
.water-waves::after {
  content: "";
  position: absolute;
  width: 300px;
  height: 270px;
  border-radius: 55% 45%;
  bottom: 33%;
  left: 50%;
  border: 1px solid black;
  transform: translateX(-50%);
  background-color: #fff;
  animation: rotate 5s linear infinite;
}
.water-waves::after {
  left: 47%;
  bottom: 30%;
  border-radius: 45% 50%;
  opacity: 0.3;
}
@keyframes rotate {
  0% {
    transform: translate(-50%) rotateZ(0deg);
  }
  100% {
    transform: translate(-50%) rotateZ(360deg);
  }
}
</style>

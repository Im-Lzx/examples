<template>
  <div>
    <div class="title">背景虚化</div>
    <p class="filter">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim aliquam
      tempore sunt aspernatur qui nesciunt error asperiores, sequi odit,
      pariatur dolorem illo, adipisci cum totam! Incidunt placeat nobis facere?
      Pariatur.
    </p>
    <img class="filter" src="@/assets/logo.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "filter-bg",
};
</script>

<style lang="scss">
.filter {
  filter: blur(2px);
}
</style>

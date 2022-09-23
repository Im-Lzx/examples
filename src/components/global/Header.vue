<template>
  <div class="header">
    <div class="container mx-auto flex flex-row justify-between">
      <div class="font-serif flex flex-row items-center">
        <img class="logo" src="@/assets/img/logo/mini.png" alt="logo" />
        <div>Demo</div>
      </div>
      <div class="menu-group flex flex-row justify-end items-center flex-1">
        <a class="menu">文档</a>
        <a class="menu">关于</a>
        <a class="menu">赞助</a>
        <a class="menu iconfont icon-language"></a>
        <a class="menu iconfont icon-github-fill"></a>
        <a class="menu iconfont icon-tuitetwitter44"></a>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  height: $header-h;
  @apply flex items-center w-auto border-b py-1 box-border fixed inset-x-0 top-0;
}
.logo {
  width: 60px;
  height: 35px;
}
.menu {
  @apply mr-6 text-base cursor-pointer hover:text-green-700;
  &.iconfont {
    @apply text-xl text-gray-500;
  }
}
</style>

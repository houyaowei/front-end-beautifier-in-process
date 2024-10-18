<script setup>
import { RouterView } from 'vue-router';
import Navs from "@/components/Navs.vue";

</script>

<template>
  <div>
    <div class="title">
      <img src="@/assets/logo.svg" alt="" class="logo">
      <span>Rspack+Vue</span>
    </div>
    <header>
      <Navs />
    </header>
    <RouterView style="margin-top: 30px" />
    <ProviderComponent />
  </div>
  
</template>

<style scoped lang="less">
  .title {
    font-size: 26px;
    margin-top: 20px;
    margin-left: 20px;
  }
  .logo {
    height: 30px;
    width: 30px;
  }
</style>

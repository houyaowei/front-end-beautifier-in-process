<template>
  <div class="navs">
    <nav v-for="nav in navs" @click="go(nav.path)">
      <div class="nav-item">{{nav.name}}</div>
    </nav>
  </div>
</template>
<script setup>
  import { useRoute, useRouter } from 'vue-router'
  const router = useRouter()
  const route = useRoute()

  const navs = [
    {
        path: "/",
        name: "主页",
    },
    {
      path: "/about",
      name: "关于",
    },
    {
      path: "/person",
      name: "用户",
    }
  ]
  function go(url) {
    console.log("url:",url);
    router.push(url)
  }
</script>

<style lang="less" scoped>
  .navs {
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    .nav-item {
      font-size: 18px;
    }
  }

</style>
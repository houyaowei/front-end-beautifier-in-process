<script setup>
import {useRouter,useRoute } from 'vue-router'
import commonHeader from '@/components/commonHeader.vue'
import commonFooter from '@/components/commonFooter.vue'
import mainContainer from '@/components/mainContainer.vue'


const router = useRouter()
const route = useRoute()
function toLogin(){
  router.push('/main/login')
}
function toDemo(){
  router.push('/main/childDemo')
}
</script>

<template>
   <common-header v-if="route.name !== 'login'" />
   <main-container />
  <common-footer v-if="route.name !== 'login'" />
</template>

<style scoped lang="scss">

.common-header{
  .el-button{
    border:none;
    background-color:red;
  }
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

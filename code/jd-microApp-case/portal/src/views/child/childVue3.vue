<script setup>
import { reactive } from "vue";
const appName = reactive({
    from: "from vue3",
});
</script>

<template>
    <div>子应用-Vue3</div>
    <micro-app
        name="childVue3"
        url="http://localhost:3002/child/findEnterprise"
        iframe
    ></micro-app>
</template>

<style></style>

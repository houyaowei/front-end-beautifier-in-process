<script setup>
// import microApp from "@micro-zoe/micro-app";
import { reactive } from "vue";

//如果传响应式对象，第一次子应用取不到值
// const appName = reactive({
//     from: "from vue2",
// });
const appName = {
    from: "from vue2",
};
// microApp.setData("childVue2", { from: "from vue2" }, () => {
//     console.log("发送完成");
// });

//接收子应用的通知
const handleDataChange = (e) => {
    console.log("portal组件中接收到子应用的数据：", e.detail.data);
};
</script>

<template>
    <div>
        <micro-app
            name="childVue2"
            url="http://localhost:8080/"
            :data="appName"
            @datachange="handleDataChange"
        ></micro-app>
    </div>
</template>

<style></style>

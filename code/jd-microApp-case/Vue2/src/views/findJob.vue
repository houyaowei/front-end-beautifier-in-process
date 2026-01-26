<template>
  <section>
    <section class="center">
      <section>找工作哪家强，中国山东找蓝翔！</section>
      <div>来自基座的数据：{{ from }}</div>
    </section>
    <section>
      <el-button @click="toSendMsg()">点我向子应用发消息</el-button>
    </section>
  </section>
</template>

<script>
// import microApp from "@micro-zoe/micro-app";
export default {
  data() {
    return {
      from: "",
    };
  },
  mounted() {
    const data = window.microApp?.getData();
    console.log("data from portal:", data ? data.from : "");
    if (data && data.from) {
      this.from = data.from;
    } else {
      this.from = "No data";
    }
    console.log("window.microApp", window.microApp);

    setTimeout(() => {
      window.microApp.dispatch({ message: "from sub app vue2" });
    }, 1000);

    const globalData = window.microApp.getGlobalData();
    console.log("globalData in vue2:", globalData);
  },
  methods: {
    toSendMsg() {
      window.microApp.setGlobalData({ name: "global data from vue2" }, () => {
        console.log("global data have sent~~~");
      });
    },
  },
};
</script>

<style lang="less">
.center {
  margin: 0 auto;
}
</style>

<script setup lang="ts">
//@ts-ignore
  // import { SPieChart } from "@sharp/index"
  import { SPieChart } from '../../components/index';
  
  let yAxis = [
    { value: 1048, name: 'Search Engine' },
    { value: 735, name: 'Direct' },
    { value: 580, name: 'Email' }
  ]
  let xAxis2 = ['Mon', 'Tue', 'Wed', 'Thu']
  let yAxis2 = [120, 200, 150, 80]
</script>
<template>
  <div class="flx">
    <div>
      <s-pie-chart title="Sharp UI Pie Chart" width="300px" height="300px" :yAxis="yAxis" id="pie-chart-id"></s-pie-chart>
    </div>
    <!-- <div>
      <s-horizon-bar-chart title="电话呼叫统计（个）" id="tag-status" width="400px" height="400px" :xAxis="xAxis2" :yAxis="yAxis2"></s-horizon-bar-chart>
    </div> -->
  </div>
</template>
<style scoped>
  .flx {
    display: flex;
  }
</style>
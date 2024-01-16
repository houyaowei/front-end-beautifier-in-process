<script setup lang="ts">
  let yAxis = [
    { value: 1048, name: 'Search Engine' },
    { value: 735, name: 'Direct' },
    { value: 580, name: 'Email' }
  ]
  let xAxis2 = ['Mon', 'Tue', 'Wed', 'Thu']
  let yAxis2 = [120, 200, 150, 80]
</script>
<template>
  <div>
    <s-piechart title="Sharp UI Pie Chart" width="300px" height="300px" :yAxis="yAxis" id="pie-chart-id"></s-piechart>
  </div>
  <div>
    <s-horizon-bar-chart title="电话呼叫统计（个）" id="tag-status" width="400px" height="400px" :xAxis="xAxis2" :yAxis="yAxis2"></s-horizon-bar-chart>
  </div>
</template>
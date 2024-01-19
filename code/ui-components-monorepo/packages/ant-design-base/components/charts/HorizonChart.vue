<template>
  <div class="compare-bar-chart">
    <div class="top-area">
      <div class="name-area">
        <span class="label-split"></span>
        <span class="label-name">{{ dataProps.title }}</span>
      </div>
    </div>
    <div :id="generatorId()" :style="{width:dataProps.width,height:dataProps.height}"> </div>
  </div>
</template>
<script setup lang="ts">
  import { watch } from 'vue';
  import { trim } from 'javascript-common-tools';
  import * as echarts from 'echarts/core';
  import {
    TitleComponent,
    ToolboxComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
  } from 'echarts/components';
  import { BarChart, LineChart } from 'echarts/charts';
  import { CanvasRenderer } from 'echarts/renderers';

  echarts.use([
    TitleComponent,
    ToolboxComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    BarChart,
    LineChart,
    CanvasRenderer,
  ]);

  const generatorId = () => {
    return trim(`bar-chart-wrapper_${dataProps.id}`);
  };
  // interface BarChartItem {
  //   name: string;
  //   type: string;
  //   data: number[];
  // }
  interface Props {
    title: string;
    width?: string;
    height?: string;
    yAxis: number[];
    xAxis: string[];
    id: string;
  }
  const dataProps = withDefaults(defineProps<Props>(), {
    width: '220px',
    height: '205px',
    id: '',
    yAxis: () => [],
    xAxis: () => []
  });

  //echart 实例
  let myChart;
 
  const init = () => {
    const _wraper = document.getElementById(`bar-chart-wrapper_${dataProps.id}`) as HTMLElement;
    if (_wraper) {
      _wraper.innerHTML = '';
    }
    if (myChart) {
      myChart.dispose();
    }
    setTimeout(() => {
      let chartContainer = document.createElement('div');
      chartContainer.setAttribute('id', dataProps.id);
      chartContainer.style.width = dataProps.width;
      chartContainer.style.height = dataProps.height;
      let chartDom = document.getElementById(`bar-chart-wrapper_${dataProps.id}`);
      chartDom?.appendChild(chartContainer);

      myChart = echarts.init(chartContainer);

      let option = {
        tooltip: {
          trigger: 'axis',
        },
        color: ['#78CC94', '#0076FE'],
        calculable: true,
        xAxis: [
          {
            type: 'value',
            show: false
          },
        ],
        yAxis: [
          {
            type: 'category',
            axisLine: {
              show:false
            },
            axisTick: {
              show: false
            },
            data: dataProps.xAxis,
          },
        ],
        series: {
          type: 'bar',
          label: {
            show: true,
            position: 'right'
          },
          data: dataProps.yAxis
        }
      };
      option && myChart.setOption(option);
    }, 200);
  };

  watch(
    () => dataProps.yAxis,
    (newValue, old) => {
      if (newValue.length > 0) {
        init();
      }
    },
    {
      immediate: true,
      deep: true,
    },
  );
</script>
<style scoped lang="less">
  .compare-bar-chart {
    margin-top: 20px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 4px 0px rgba(218, 228, 235, 0.2);
    img {
      height: 20px;
      width: 20px;
    }
    .label-name {
      margin-left: 10px;
      font-size: 18px;
      font-weight: 700;
    }
    .top-area {
      display: flex;
      justify-content: space-between;
      padding-top: 20px;
      margin-left: 20px;
      margin-right: 20px;
      .name-area {
      }
      .label-split {
        display: inline-block;
        background: rgba(120, 147, 255, 1);
        width: 6px;
        height: 17px;
      }
    }
  }
</style>

<template>
  <div class="pie-container">
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
  import * as echarts from 'echarts/core';
  import { trim } from 'javascript-common-tools';

  import { TooltipComponent, LegendComponent } from 'echarts/components';
  import type { TooltipComponentOption, LegendComponentOption } from 'echarts/components';

  import { PieChart } from 'echarts/charts';
  import type { PieSeriesOption } from 'echarts/charts';
  import { LabelLayout } from 'echarts/features';
  import { CanvasRenderer } from 'echarts/renderers';

  echarts.use([TooltipComponent, LegendComponent, PieChart, CanvasRenderer, LabelLayout]);

  type EChartsOption = echarts.ComposeOption<
    TooltipComponentOption | LegendComponentOption | PieSeriesOption
  >;

  interface PieItem {
    name: string;
    value: number;
  }
  interface Props {
    title: string;
    width?: string;
    height?: string;
    yAxis: PieItem[];
    id: string;
  }
  const dataProps = withDefaults(defineProps<Props>(), {
    width: '200px',
    height: '155px',
    id: '',
    title: '',
    yAxis: () => [],
  });
  const generatorId = () => {
    return trim(`chart-wrapper_${dataProps.id}`);
  };

  let myChart;
  const init = () => {
    const _wraper = document.getElementById(`chart-wrapper_${dataProps.id}`) as HTMLElement;
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
      let chartDom = document.getElementById(`chart-wrapper_${dataProps.id}`) as HTMLElement;
      chartDom?.appendChild(chartContainer);
      myChart = echarts.init(chartContainer);
      let option: EChartsOption;

      option = {
        tooltip: {
          trigger: 'item',
        },
        color: ['#FF9F82', '#7CD6C6','#78CC94'],
        series: [
          {
            type: 'pie',
            radius: ['40%', '60%'],
            label: {
              show: true,
              formatter(param) {
                return param.name + ' (' + param.value+ ')';
              }
            },
            labelLine: {
              show: true
            },
            data: dataProps.yAxis,
          },
        ],
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
  .pie-container {
    margin-top: 20px;
    background-color: #fff;
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

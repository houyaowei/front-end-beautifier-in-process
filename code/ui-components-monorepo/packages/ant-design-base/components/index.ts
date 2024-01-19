import type { App } from "vue";
import SPieChart from "./charts/PieChart.vue"
import SHorizonBarChart from "./charts/HorizonChart.vue"
import SVerticalBarChart from "./charts/VerticalChart.vue"

export default {
	install: (Vue:App, options={})=> {
		Vue.component("s-piechart", SPieChart);
		Vue.component("s-horizon-bar-chart", SHorizonBarChart);
		Vue.component("s-vertical-bar-chart", SVerticalBarChart);
	}

}

export {
	SPieChart,
	SHorizonBarChart,
	SVerticalBarChart
}

import PieChart from "./charts/PieChart.vue"
import HorizonChart from "./charts/HorizonChart.vue"
import VerticalChart from "./charts/VerticalChart.vue"

export default {
	install: (Vue, options={})=> {
		Vue.component("s-piechart", PieChart);
		Vue.component("s-horizon-bar-chart", HorizonChart);
		Vue.component("s-vertical-bar-chart", VerticalChart);
	}
}

export {
	PieChart,
	HorizonChart,
	VerticalChart
}

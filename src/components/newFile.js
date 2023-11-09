import { Chart } from 'chart.js/auto';

export default (await import('vue')).defineComponent({
name: 'line-chart',
props: {
chartData: Object,
options: Object,
},
data() {
return {
chart: null,
};
},
mounted() {
new Chart(this.$refs.myChart, {
type: "line",
data: this.chartData,
options: this.options,
});
},
methods: {
updateChart: function (data) {
this.$refs.myChart.data = data;
// this.chart.options = options;
setTimeout(function (this) {
this.$refs.myChart.update();
}, 0);
}
}
// watch: {
//     chartData: {
//         deep: true,
//         flush: true,
//         handler(val, oldVal) {
//             console.log(val);
//             console.log(oldVal);
//             console.log(this.chart);
//             this.chart.update();
//         },
//     }
// }
});

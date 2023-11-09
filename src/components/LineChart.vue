<template>
    <div class="mb-6 flex w-auto min-w-0 flex-col break-words rounded bg-neutral shadow-lg">
        <div class="mb-0 rounded-t px-4 py-3">
            <div class="flex flex-wrap items-center">
                <div class="w-full max-w-full flex-1 grow">
                    <h2 class="text-xl font-semibold text-accent">
                        Evolução Mensal
                    </h2>
                </div>
            </div>
        </div>
        <div class="p-4">
            <div class="h-350-px ">
                <canvas ref="myChart" width="800" height="300"></canvas>
            </div>
        </div>
    </div>
</template>
  

<script>
import { Chart } from 'chart.js/auto';

export default {
    name: 'line-chart',
    data() {
        return {
            chart: null,
        };
    },
    mounted() {
        this.chart = new Chart(this.$refs.myChart, {
            type: "line",
        });
    },
    methods: {
        updateChart: function (data, options) {
            this.chart.data = data;
            this.chart.options = options;
            setTimeout(() => this.chart.update(), 0);
        }
    }
}
</script>
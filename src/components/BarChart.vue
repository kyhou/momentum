<template>
    <ul class="steps mt-20">
        <button @click="graph = '2021'; graph21();" class="step"
            :class="graph == '2021' || graph == '2022' || graph == '2023' ? 'step-accent' : ''"
            data-content="">2021</button>
        <button @click="graph = '2022'; graph22();" class="step"
            :class="graph == '2022' || graph == '2023' ? 'step-accent' : ''" data-content="">2022</button>
        <button @click="graph = '2023'; graph23();" class="step" :class="graph == '2023' ? 'step-accent' : ''"
            data-content="">2023</button>
    </ul>
    <Bar :data="data" :options="options" class="mb-10" />
</template>

<script>
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels)

export default {
    name: 'BarChart',
    components: {
        Bar
    },
    data() {
        const data = {
            labels: [
                'Poupança',
                'SELIC',
                'HV'
            ],
            datasets: [
                {
                    label: '',
                    backgroundColor: [
                        'gray',
                        'darkgray',
                        'rgba(252, 187, 31, 1)'
                    ],
                    data: [6.17, 13.75, 79.58]
                }
            ]
        }

        const options = {
            locale: 'br',
            responsive: true,
            color: 'white',
            plugins: {
                legend: {
                    display: false
                },
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    formatter: function (value, a) {
                        if (a.dataIndex == 0) {
                            return value + '% + TR'
                        }
                        return value + '%'

                    },
                    color: 'white',
                    font: {
                        weight: 'bold',
                        size: 16
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: 'white',
                        font: {
                            size: '14px',
                            weight: 'bold',
                        }
                    },
                },
                y: {
                    suggestedMax: 100,
                    display: false
                },
            },
        }

        return {
            data,
            options,
            graph: '2023'
        };
    },
    methods: {
        graph21() {
            this.data = {
                labels: [
                    'Poupança',
                    'SELIC',
                    'HV'
                ],
                datasets: [
                    {
                        label: '',
                        backgroundColor: [
                            'gray',
                            'darkgray',
                            'rgba(252, 187, 31, 1)'
                        ],
                        data: [2.98, 9.25, 79.58]
                    }
                ]
            };
        },
        graph22() {
            this.data = {
                labels: [
                    'Poupança',
                    'SELIC',
                    'HV'
                ],
                datasets: [
                    {
                        label: '',
                        backgroundColor: [
                            'gray',
                            'darkgray',
                            'rgba(252, 187, 31, 1)'
                        ],
                        data: [6.17, 13.75, 79.58]
                    }
                ]
            };
        },
        graph23() {
            this.data = {
                labels: [
                    'Poupança',
                    'SELIC',
                    'HV'
                ],
                datasets: [
                    {
                        label: '',
                        backgroundColor: [
                            'gray',
                            'darkgray',
                            'rgba(252, 187, 31, 1)'
                        ],
                        data: [6.17, 13.75, 79.58]
                    }
                ]
            };
        },
    }
}
</script>
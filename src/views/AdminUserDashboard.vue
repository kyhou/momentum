<template>
    <Page>
        <MessageModal />
        <div>
            <div class="bg-secondary">
                <div class="-ml-2 px-4 py-10 pb-32 lg:px-24">
                    <p class="ml-3 text-3xl text-neutral">Olá, {{ userName }}</p>
                    <br />
                    <div class="flex max-sm:flex-col md:flex-wrap">
                        <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
                            <div class="mb-6 flex min-w-0 flex-col break-words rounded bg-neutral shadow-lg xl:mb-0">
                                <div class="flex-auto p-4">
                                    <div class="flex flex-wrap">
                                        <div class="w-full max-w-full flex-1 grow pr-4">
                                            <h5 class="text-blueGray-400 text-xs font-bold uppercase">Saldo atual</h5><span
                                                class="text-blueGray-700 text-xl font-semibold">{{ new
                                                    Intl.NumberFormat('pt-BR', {
                                                        style: 'currency', currency: 'BRL'
                                                    }).format(totalBalance) }}</span>
                                        </div>
                                        <div class="w-auto flex-initial pl-4">
                                            <div
                                                class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-500 p-3 text-center text-white shadow-lg">
                                                <FontAwesomeIcon icon="fa-regular fa-chart-bar" />
                                            </div>
                                        </div>
                                    </div>
                                    <p class="text-blueGray-400 mt-4 text-sm"><span class="mr-2 text-emerald-500">
                                        <FontAwesomeIcon icon="fa-solid fa-arrow-up" /> {{ percentageBalanceFull }}
                                        </span><span class="whitespace-nowrap">Desde o início</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
                            <div class="mb-6 flex min-w-0 flex-col break-words rounded bg-white shadow-lg xl:mb-0">
                                <div class="flex-auto p-4">
                                    <div class="flex flex-wrap">
                                        <div class="w-full max-w-full flex-1 grow pr-4">
                                            <h5 class="text-blueGray-400 text-xs font-bold uppercase">Performance</h5><span
                                                class="text-blueGray-700 text-xl font-semibold">{{ new
                                                    Intl.NumberFormat('pt-BR', {
                                                        style: 'currency', currency: 'BRL'
                                                    }).format(performanceTotal) }}</span>
                                        </div>
                                        <div class="w-auto flex-initial pl-4">
                                            <div
                                                class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 p-3 text-center text-white shadow-lg">
                                                <FontAwesomeIcon icon="fa-solid fa-dollar-sign" />
                                            </div>
                                        </div>
                                    </div>
                                    <p class="text-blueGray-400 mt-4 text-sm"><span class="mr-1 text-emerald-500">
                                            <FontAwesomeIcon icon="fa-solid fa-dollar-sign" />
                                        </span><span class="whitespace-nowrap">Em relação ao capital aportado</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
                            <router-link :to="'/admin/userStatement/' + this.route.params.userId"
                                class="btn-neutral btn font-bold">Extrato</router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mx-2 -mt-24 mb-5 flex px-4 max-sm:flex-col md:mx-16 md:flex-wrap md:px-10">
                <div class="md:w-1/2 md:pr-5">
                    <LineChart ref="lineChart"></LineChart>
                </div>
                <div class="md:w-1/2 md:pl-5">
                    <DoughnutChart ref="doughnutChart"></DoughnutChart>
                </div>
            </div>
        </div>
    </Page>
</template>

<script>
import UserDashboardService from "../services/user_dashboard.service";
import UsersDetailsService from "../services/users_details.service";
import Page from '../components/Page.vue'
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { date_helpers } from '../helpers/date_helpers';
import MessageModal from '../components/MessageModal.vue';
import LineChart from "../components/LineChart.vue";
import DoughnutChart from "../components/DoughnutChart.vue";
import { useRoute } from 'vue-router'

export default {
    name: "admin-user-dashboard",
    components: {
        // eslint-disable-next-line vue/no-reserved-component-names
        Page,
        FontAwesomeIcon,
        MessageModal,
        LineChart,
        DoughnutChart
    },
    data() {
        const schema = yup.object().shape({
            value: yup
                .number()
                .required("Favor informar um valor!")
        });

        const lineChartData = {
            labels: [
                // "Abril",
                // "Maio",
                // "Junho",
                // "Julho",
                // "Agosto",
                // "Setembro",
            ],
            datasets: [
                {
                    label: 'Expert',
                    backgroundColor: "#EAA500",
                    borderColor: "#EAA500",
                    data: [],
                    // data: [34500, 35500, 33500, 37500, 36500, 40500],
                    fill: false,
                },
                {
                    label: 'Security',
                    backgroundColor: "#0D435A",
                    borderColor: "#0D435A",
                    data: [],
                    // data: [89500, 90500, 91500, 92500, 93500, 94500],
                    fill: false,
                },
            ]
        };

        const lineChartOptions = {
            cubicInterpolationMode: 'monotone',
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                tooltips: {
                    mode: "nearest",
                    axis: "x",
                    intersect: false,
                },
            },
            interaction: {
                intersect: false,
                axis: 'x'
            },
            scales: {
                x: {
                    // ticks: {
                    //     color: "rgba(255, 255, 255, 1)",
                    // },
                    display: true,
                    title: {
                        display: true,
                        text: "Mês",
                        // fontColor: "rgba(255, 255, 255, 1)",
                    },
                    // gridLines: {
                    //     display: false,
                    //     borderDash: [2],
                    //     borderDashOffset: [2],
                    //     color: "rgba(33, 37, 41, 0.3)",
                    //     zeroLineColor: "rgba(0, 0, 0, 0)",
                    //     zeroLineBorderDash: [2],
                    //     zeroLineBorderDashOffset: [2],
                    // },
                },
                y: {
                    // ticks: {
                    //     color: "rgba(255, 255, 255, 1)",
                    // },
                    display: true,
                    title: {
                        display: true,
                        text: "Valor",
                        // fontColor: "rgba(255, 255, 255, 1)",
                    },
                    // gridLines: {
                    //     borderDash: [3],
                    //     borderDashOffset: [3],
                    //     drawBorder: false,
                    //     color: "rgba(255, 255, 255, 1)",
                    //     zeroLineColor: "rgba(33, 37, 41, 0)",
                    //     zeroLineBorderDash: [2],
                    //     zeroLineBorderDashOffset: [2],
                    // },
                },
            },
        };

        const doughnutChartData = {
            labels: ['Expert', 'Security'],
            datasets: [
                {
                    backgroundColor: ['#EAA500', '#0D435A'],
                    data: []
                }
            ]
        };

        const doughnutChartOptions = {
            maintainAspectRatio: false,
            responsive: true,
        };

        return {
            lineChartData,
            lineChartOptions,
            doughnutChartData,
            doughnutChartOptions,
            schema,
            successful: false,
            message: "",
            loading: false,
            userName: "",
            totalBalance: 0,
            currencyOptions: {
                "locale": "pt-BR",
                "currency": "BRL",
                "currencyDisplay": "symbol",
                "precision": 2,
                "hideCurrencySymbolOnFocus": false,
                "hideGroupingSeparatorOnFocus": false,
                "hideNegligibleDecimalDigitsOnFocus": false,
                "autoDecimalDigits": true,
                "useGrouping": true,
                "accountingSign": false
            },
            today: new Date().getDate(),
            contractIds: [],
            percentageBalanceFull: "0,00%",
            percentagePerformanceLastMonth: "0%",
            performanceTotal: "R$ 0,00",
            expertBalancePercentage: 0,
            securityBalancePercentage: 0,
            transactionDaysLimit: 0,
            usesTransactionDaysLimit: false,
            route: useRoute(),
        }
    },
    created() {
        this.date_helpers = date_helpers;
    },
    async mounted() {
        const expertDataset = this.lineChartData.datasets.find(x => x.label.toLowerCase() == "expert");
        const securityDataset = this.lineChartData.datasets.find(x => x.label.toLowerCase() == "security");

        UsersDetailsService.getUserName(this.route.params.userId).then(
            response => {
                this.userName = `${response.data.firstName ?? "Usuário"} ${response.data.lastName ?? ''}`;
            },
            error => {
                if (error.response && error.response.status === 403) {
                    this.router.push("/dashboard");
                }
            }
        );

        UserDashboardService.getUserAportes(this.route.params.userId).then(
            response => {
                expertDataset.data = [];
                securityDataset.data = [];

                response.data.forEach((element, index) => {
                    var contractId = element.contractId;
                    this.contractIds.push({
                        index,
                        contractId
                    });

                    if (element.monthProfits) {
                        element.monthProfits.forEach((monthProfit) => {
                            var monthPosition = null;
                            var existingMonth = this.lineChartData.labels.find((x) => x.toLowerCase() == monthProfit.month.toLowerCase());

                            if (!existingMonth) {
                                this.lineChartData.labels.push(monthProfit.month);

                                if (element.type.toLowerCase() == "expert") {
                                    expertDataset.data.push(monthProfit.profit);
                                    securityDataset.data.push(0);
                                }

                                if (element.type.toLowerCase() == "security") {
                                    expertDataset.data.push(0);
                                    securityDataset.data.push(monthProfit.profit);
                                }
                            } else {
                                monthPosition = this.lineChartData.labels.indexOf(existingMonth);

                                if (element.type.toLowerCase() == "expert") {
                                    expertDataset.data[monthPosition] += monthProfit.profit;
                                }

                                if (element.type.toLowerCase() == "security") {
                                    securityDataset.data[monthPosition] += monthProfit.profit;
                                }
                            }
                        })
                    }

                    this.totalBalance += +element.availableProfit + +element.value;
                });

                this.$refs.lineChart.updateChart(this.lineChartData, this.lineChartOptions);
            },
            error => {
                if (error.response && error.response.status === 403) {
                    this.router.push("/dashboard");
                }
            }
        );

        var expertBalance = (await UserDashboardService.getBalanceOfType(this.route.params.userId, 'expert')).data.balance;
        var securityBalance = (await UserDashboardService.getBalanceOfType(this.route.params.userId, 'security')).data.balance;

        if (expertBalance != null && securityBalance != null) {
            this.doughnutChartData.datasets[0].data.push(((expertBalance / this.totalBalance) * 100).toFixed(2));
            this.doughnutChartData.datasets[0].data.push(((securityBalance / this.totalBalance) * 100).toFixed(2));
        }

        this.$refs.doughnutChart.updateChart(this.doughnutChartData, this.doughnutChartOptions);

        try {
            const globalProfits = (await UserDashboardService.getUserProfits(this.route.params.userId)).data.profits;
            this.performanceTotal = globalProfits;

            const aportesInitialSum = (await UserDashboardService.getAportesInitialSum(this.route.params.userId)).data.aportesSum;
            const aportesGlobalProfitPercentage = (((aportesInitialSum + globalProfits) / aportesInitialSum) - 1 ) * 100;
            this.percentageBalanceFull = `${(Number.isFinite(aportesGlobalProfitPercentage) ? aportesGlobalProfitPercentage : 0).toFixed(2)}%`;

        } catch (error) {
            if (error.response && error.response.status === 403) {
                this.router.push("/dashboard");
            }
        }
    },
    methods: {
        resetModal() {
            this.loading = false;
            this.successful = false;
            this.message = "";
        },
    }
}

</script>

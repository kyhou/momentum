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
                            <router-link to="/user/statement/" class="btn-neutral btn font-bold">Extrato</router-link>
                            <label @click="resetModal" for="modal-withdrawal"
                                class="btn btn-warning ml-1 font-bold text-black">Saque</label>
                        </div>
                    </div>
                    <div>
                        <input type="checkbox" id="modal-withdrawal" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box bg-secondary">
                                <label for="modal-withdrawal" class="btn btn-circle btn-sm absolute right-2 top-2">✕</label>
                                <h2 class="text-lg font-semibold capitalize text-white">Saque</h2>
                                <Form id="addForm" @submit="handleWithdrawal" :validation-schema="schema">
                                    <div v-if="!successful">
                                        <div class="form-group mt-4 gap-6">
                                            <CurrencyInput name="value" :options="currencyOptions"
                                                message="Informe o valor para resgate:" />
                                        </div>
                                        <div class="form-group mt-5">
                                            <button type="submit" class="btn btn-warning btn-block text-black"
                                                :disabled="loading">
                                                <div v-show="loading">
                                                    <svg aria-hidden="true"
                                                        class="mr-2 h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                                                        viewBox="0 0 100 101" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                            fill="currentColor" />
                                                        <path
                                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                            fill="currentFill" />
                                                    </svg>
                                                    <span class="sr-only">Loading...</span>
                                                </div>
                                                Solicitar Saque
                                            </button>
                                        </div>
                                    </div>
                                </Form>

                                <div v-if="message" class="alert mt-5"
                                    :class="successful ? 'alert-success' : 'alert-error'">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- <div v-for="(aporte, index) in aportes" :key="aporte.id">
                <div :tabindex="index" class="collapse-plus collapse border border-base-300 bg-accordion"
                    :class="index + 1 == aportes.length ? 'mb-10' : ''">
                    <input type="checkbox" />
                    <div class="collapse-title inline-flex text-xl font-medium">
                        <div>Aporte HV{{ aporte.id.padStart(5, "0") }}</div>
                        <div v-if="aporte.locked" class="badge badge-accent badge-outline ml-auto self-center">2 anos</div>
                    </div>
                    <div class="collapse-content">
                        <div class="accordion-body">
                            <p class="-mb-2 text-3xl font-bold text-accent">
                                {{
                                    new Intl.NumberFormat('pt-BR', {
                                        style: 'currency', currency: 'BRL'
                                    }).format(Math.abs(aporte.availableProfit))
                                }}
                            </p>
                            <p>Saldo disponível</p>
                            <p class="-mb-2 mt-4 text-2xl font-bold text-invested-value">
                                {{
                                    new Intl.NumberFormat('pt-BR', {
                                        style: 'currency', currency: 'BRL'
                                    }).format(aporte.value)
                                }}
                            </p>Data do aporte: {{ date_helpers.parseDate(aporte.date).format("DD/MM/YYYY") }}
                            <br />
                            <a :href="`https://drive.google.com/uc?export=download&id=${contractIds[index].contractId}`"
                                download class="btn mt-5 gap-2" target="_blank">
                                <FontAwesomeIcon icon="fa-file-signature" class="h-8 w-8" />
                                contrato
                            </a>
                            <router-link :to="`/dashboard/aporteDetails/${aporte.id}`" download class="btn ml-5 mt-5 gap-2">
                                <FontAwesomeIcon icon="fa-receipt" class="h-8 w-8" />
                                detalhes
                            </router-link>
                        </div>
                    </div>
                </div>
            </div> -->

            <div class="mx-2 -mt-24 mb-5 flex px-4 max-sm:flex-col md:mx-16 md:flex-wrap md:px-10">
                <div class="md:w-1/2 md:pr-5">
                    <!-- :chartData="data" :options="options" -->
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
import { Form } from "vee-validate";
import * as yup from "yup";
import CurrencyInput from '../components/CurrencyInput.vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { date_helpers } from '../helpers/date_helpers';
import MessageModal from '../components/MessageModal.vue';
import EventBus from "../common/EventBus";
import LineChart from "../components/LineChart.vue";
import DoughnutChart from "../components/DoughnutChart.vue";

export default {
    name: "user-dashboard",
    components: {
        // eslint-disable-next-line vue/no-reserved-component-names
        Form,
        Page,
        CurrencyInput,
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
            user: JSON.parse(localStorage.getItem('user')),
            today: new Date().getDate(),
            contractIds: [],
            percentageBalanceFull: "0,00%",
            percentagePerformanceLastMonth: "0%",
            performanceTotal: "R$ 0,00",
            expertBalancePercentage: 0,
            securityBalancePercentage: 0,
            transactionDaysLimit: 0,
            usesTransactionDaysLimit: false,
        }
    },
    created() {
        this.date_helpers = date_helpers;
    },
    async mounted() {
        const expertDataset = this.lineChartData.datasets.find(x => x.label.toLowerCase() == "expert");
        const securityDataset = this.lineChartData.datasets.find(x => x.label.toLowerCase() == "security");

        UsersDetailsService.getUserName(this.user.id).then(
            response => {
                this.userName = `${response.data.firstName ? response.data.firstName : "Usuário"} ${response.data.lastName ? response.data.lastName : ''}`;
            },
            error => {
                if (error.response && error.response.status === 403) {
                    EventBus.dispatch("logout");
                }
            }
        );

        UserDashboardService.getUserAportes(this.user.id).then(
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
                    EventBus.dispatch("logout");
                }
            }
        );

        var expertBalance = (await UserDashboardService.getBalanceOfType(this.user.id, 'expert')).data.balance;
        var securityBalance = (await UserDashboardService.getBalanceOfType(this.user.id, 'security')).data.balance;

        if (expertBalance != null && securityBalance != null) {
            this.doughnutChartData.datasets[0].data.push(((expertBalance / this.totalBalance) * 100).toFixed(2));
            this.doughnutChartData.datasets[0].data.push(((securityBalance / this.totalBalance) * 100).toFixed(2));
        }

        this.$refs.doughnutChart.updateChart(this.doughnutChartData, this.doughnutChartOptions);

        try {
            const globalProfits = (await UserDashboardService.getUserProfits(this.user.id)).data.profits;
            this.performanceTotal = globalProfits;

            const aportesInitialSum = (await UserDashboardService.getAportesInitialSum(this.user.id)).data.aportesSum;
            const aportesGlobalProfitPercentage = (((aportesInitialSum + globalProfits) / aportesInitialSum) - 1 ) * 100;
            this.percentageBalanceFull = `${(Number.isFinite(aportesGlobalProfitPercentage) ? aportesGlobalProfitPercentage : 0).toFixed(2)}%`;

        } catch (error) {
            if (error.response && error.response.status === 403) {
                EventBus.dispatch("logout");
            }
        }
    },
    methods: {
        async handleWithdrawal(value) {
            this.loading = true;

            if (this.usesTransactionDaysLimit && new Date().getDate() > this.transactionDaysLimit) {
                this.successful = false;
                this.loading = false;
                this.message = "Solicitação de saque disponível somente no periodo do dia 1 ao dia 5.";
                return;
            }

            if (value.value <= 0) {
                this.successful = false;
                this.loading = false;
                this.message = "Valor solicitado deve ser maior que 0(zero).";
                return;
            }

            if (value.value > this.totalBalance) {
                this.successful = false;
                this.loading = false;
                this.message = "Valor solicitado maior que o disponível, favor verificar.";
                return;
            }

            try {
                await UserDashboardService.newTransaction(this.user.id, value);
                this.successful = true;
                this.loading = false;
                this.message = "Solicitação de saque enviada com sucesso!";
            } catch (err) {
                this.successful = false;
                this.loading = false;
                this.message = err.response.data.message;
            }

            setTimeout(() => {
                this.successful = false;
                this.message = "";
            }, 5000);
        },
        resetModal() {
            this.loading = false;
            this.successful = false;
            this.message = "";
        },
    }
}

</script>

<template>
    <Page>
        <button class="btn mb-5" @click="exportGrid">Exportar</button>
        <v-grid id="revo-grid" :exporting="true" :filter="true" :auto-size-column="{
            mode: 'headerClickAutoSize'
        }" :resize="true" theme="material" :source="rows" :columns="columns" />
    </Page>
</template>

<style scoped>
revo-grid {
    width: 100%;
    height: 500px;
}
</style>

<script>
import VGrid from "@revolist/vue3-datagrid";
import WithdrawsAdminPageService from "../services/withdraws_admin_page.service";
import TransactionsAdminPageService from "../services/transactions_admin_page.service";
import Page from '../components/Page.vue'
import moment from 'moment';
import EventBus from "../common/EventBus";

export default {
    name: "WithdrawsAdminPage",
    components: {
        VGrid,
        Page,
    },
    data() {
        return {
            columns: [
                {
                    prop: "name",
                    name: "Nome",
                    sortable: true,
                    cellTemplate: (createElement, props) => {
                        return createElement('div', {
                            style: {
                                cssText: `margin-left: ${props.model.level > 0 ? props.model.level * 20 : 0}px`
                            }
                        }, props.model[props.prop]);
                    },
                    size: 250,
                },
                {
                    prop: "value",
                    name: "Valor",
                    sortable: true,
                    size: 150,

                },
                {
                    prop: "date",
                    name: "Data",
                    sortable: true,
                    size: 110,
                },
                {
                    prop: "executed",
                    name: "Executado",
                    sortable: true,
                    cellTemplate: (createElement, props) => {
                        return createElement('div', {},
                            createElement('button', {
                                id: `executed${props.model.level == 0 ? props.model.name.replace(" ", "") : props.model.id}`,
                                class: {
                                    'btn': true,
                                    'btn-sm': true
                                },
                                onClick() {
                                    window.toggleTransactionExecuted(props);
                                }
                            }, props.model[props.prop])
                        );
                    },
                    readonly: true,
                    size: 120,
                },
            ],
            rows: [],
            value: null,
        };
    },
    created() {
        window.toggleTransactionExecuted = this.toggleTransactionExecuted;
    },
    mounted() {
        WithdrawsAdminPageService.getWithdraws().then(
            response => {
                this.rows = response.data;
            },
            error => {
                if (error.response && error.response.status === 403) {
                    EventBus.dispatch("logout");
                }
            }
        );
    },
    methods: {
        exportGrid() {
            const grid = document.querySelector('revo-grid');
            grid.getPlugins().then(plugins => {
                plugins.forEach(p => {
                    if (p.exportFile) {
                        const exportPlugin = p;
                        exportPlugin.exportFile({ filename: 'Saques' + moment().format("DD/MM/YYYY") });
                    }
                })
            });
        },
        toggleTransactionExecuted(props) {
            if (props.model.level == 0) {
                let withdrawsIds = this.rows.filter(x => x.userId == props.model.userId && x.userId != null).map(x => x.id);
                WithdrawsAdminPageService.toggleUserTransactionsExecuted(withdrawsIds).then((result) => {
                    let executed = document.getElementById(`executed${props.model.name.replace(" ", "")}`).textContent == "Sim";
                    document.getElementById(`executed${props.model.name.replace(" ", "")}`).textContent = !executed ? "Sim" : "Não";
                    executed = document.getElementById(`executed${props.model.name.replace(" ", "")}`).textContent == "Sim";

                    result.data.forEach((id) => {
                        document.getElementById(`executed${id}`).textContent = executed ? "Sim" : "Não";
                    });
                }).catch();
            } else {
                WithdrawsAdminPageService.toggleTransactionExecuted(props.model.id).then(() => {
                    TransactionsAdminPageService.getTransaction(props.model.id).then(response => {
                        props.model.executed = response.data.transaction.executed ? "Sim" : "Não";
                        document.getElementById(`executed${props.model.id}`).textContent = response.data.transaction.executed ? "Sim" : "Não";
                    });
                }).catch(() => { });
            }
        },
    }
};

</script>
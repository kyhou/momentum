<template>
    <Page>
        <button class="btn mb-5" @click="exportGrid">Exportar</button>
        <!-- The button to open modal -->
        <label for="modal-transaction" class="btn btn-primary" @click="openAddModal">Criar Transação</label>

        <!-- Put this part before </body> tag -->
        <input type="checkbox" id="modal-transaction" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box relative">
                <label for="modal-transaction" class="btn btn-circle btn-sm absolute right-2 top-2">✕</label>
                <section class="mx-auto max-w-4xl rounded-md bg-white p-6 shadow-md dark:bg-primary">
                    <h2 class="text-lg font-semibold capitalize text-gray-700 dark:text-white">
                        {{ this.editMode ? "Alterar Transação" : "Nova Transação" }}
                    </h2>
                    <Form id="addForm" ref="addForm" @submit="handleAdd" :validation-schema="schema">
                        <div v-if="!successful">
                            <div class="form-group mt-4 gap-6">
                                <Field id="editMode" name="editMode" ref="editMode" hidden="true" type="checkbox"
                                    value="false">
                                </Field>
                                <Field id="id" name="id" hidden="true" type="text"></Field>
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="user">Usuário</label>
                                    <Field id="user" name="user" as="select"
                                        class="form-control select select-bordered select-accent mt-2 block w-full max-w-xs px-4 py-2 "
                                        @change="$event => onChange($event)">
                                        <template v-for="user_details in users_details" :key="user_details.id">
                                            <option :value="user_details.userId">{{ user_details.firstName }} {{
                                                user_details.lastName }}</option>
                                        </template>
                                    </Field>
                                    <ErrorMessage name="user" class="text-error" />
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="aporte">Aporte</label>
                                    <Field id="aporte" name="aporte" as="select"
                                        class="form-control select select-bordered select-accent mt-2 block w-full max-w-xs px-4 py-2 ">
                                        <template v-for="aporte in aportes" :key="aporte.id">
                                            <option :value="aporte.id">{{ "HV" + aporte.id.padStart(5, "0") }}</option>
                                        </template>
                                    </Field>
                                    <ErrorMessage name="aporte" class="text-error" />
                                </div>

                                <div>
                                    <div class="form-group mt-4 gap-6">
                                        <CurrencyInput id="value" name="value" :options="currencyOptions"
                                            message="Informe o valor" v-model="value" />
                                    </div>
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="type">Tipo</label>
                                    <Field id="type" name="type" as="select"
                                        class="form-control select select-bordered select-accent mt-2 block w-full max-w-xs px-4 py-2 ">
                                        <option value="saque">Saque</option>
                                        <option value="rendimento">Rendimento</option>
                                        <option value="novoAporte">Novo Aporte</option>
                                    </Field>
                                    <ErrorMessage name="type" class="text-error" />
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="pct">% Rendimento</label>
                                    <Field name="pct" id="pct" type="number" placeholder="%" lang="pt-BR" step="0.01"
                                        min="0" inputmode="decimal" class="input input-bordered w-full max-w-xs" />
                                    <ErrorMessage name="pct" class="text-error" />
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="date">Data</label>
                                    <Field id="date" name="date" type="date" ref="date"
                                        class="focus:ring-opacity/40 form-control mt-2 block w-full rounded-md 
                                                                border border-gray-200 bg-white px-4 py-2 text-gray-700 
                                                                focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                                                                dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300" />
                                    <ErrorMessage name="date" class="text-error" />
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="newAporte">Novo Aporte</label>
                                    <Field id="newAporte" name="newAporte" as="select"
                                        class="form-control select select-bordered select-accent mt-2 block w-full max-w-xs px-4 py-2 ">
                                        <template v-for="aporte in aportes" :key="aporte.id">
                                            <option :value="aporte.id">{{ "HV" + aporte.id.padStart(5, "0") }}</option>
                                        </template>
                                    </Field>
                                    <ErrorMessage name="newAporte" class="text-error" />
                                </div>

                                <div>
                                    <label class="label cursor-pointer">
                                        <span class="label-text">Executado</span>
                                        <input v-model="executed" id="executed" name="executed" type="checkbox"
                                            class="form-control toggle" checked />
                                    </label>
                                </div>
                            </div>

                            <div class="form-group mt-5">
                                <button type="submit" class="btn btn-accent btn-block" :disabled="loading">
                                    <div v-show="loading">
                                        <svg aria-hidden="true"
                                            class="mr-2 h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                                            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="currentColor" />
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="currentFill" />
                                        </svg>
                                    </div>
                                    <div v-show="!loading">{{ this.editMode ? 'Alterar' : 'Cadastrar' }}</div>
                                </button>
                            </div>
                        </div>
                    </Form>

                    <div v-if="message" class="alert" :class="successful ? 'alert-success' : 'alert-error'">
                        {{ message }}
                    </div>
                </section>
            </div>
        </div>

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
import TransactionsAdminPageService from "../services/transactions_admin_page.service";
import UsersDetailsService from "../services/users_details.service";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import Page from '../components/Page.vue';
import CurrencyInput from '../components/CurrencyInput.vue';
// import { date_helpers } from '../helpers/date_helpers';
import moment from 'moment';
import EventBus from "../common/EventBus";

export default {
    name: "TransactionsAdminPage",
    components: {
        VGrid,
        // eslint-disable-next-line vue/no-reserved-component-names
        Form,
        Field,
        ErrorMessage,
        Page,
        CurrencyInput
    },
    data() {
        const schema = yup.object().shape({
            editMode: yup.boolean(),
            user: yup.string().required("Favor selecionar um usuário"),
            value: yup.number().typeError("Favor informar um valor válido").required("Favor informar o valor do aporte"),
            date: yup.date().required("Favor selecionar uma data")
        });

        return {
            columns: [
                {
                    prop: "id",
                    name: "ID",
                    sortable: true,
                    size: 70,
                    cellCompare: this.numericSort,
                },
                {
                    prop: "date",
                    name: "Data",
                    sortable: true,
                    size: 110,
                    cellCompare: this.dateSort,
                },
                {
                    prop: "user",
                    name: "Usuário",
                    sortable: true,
                    size: 250,
                },
                {
                    prop: "aporteId",
                    name: "Aporte",
                    sortable: true,
                    autoSize: true
                },
                {
                    prop: "value",
                    name: "Valor",
                    sortable: true,
                    size: 150,
                },
                {
                    prop: "type",
                    name: "Tipo",
                    sortable: true,
                    size: 125,
                },
                {
                    prop: "pct_profit",
                    name: "%",
                    sortable: true,
                    size: 70,
                    cellCompare: this.numericSort,
                },
                {
                    prop: "newAporteId",
                    name: "Novo Aporte",
                    sortable: true,
                    autoSize: true
                },
                {
                    prop: "executed",
                    name: "Executado",
                    sortable: true,
                    cellTemplate: (createElement, props) => {
                        return createElement('div', {},
                            createElement('button', {
                                id: `executed${props.model.id}`,
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
                {
                    prop: "editButton",
                    name: "",
                    cellTemplate: (createElement, props) => {
                        return createElement('div', {},
                            createElement('label', {
                                class: {
                                    'btn': true,
                                    'btn-sm': true
                                },
                                for: "modal-transaction",
                                onClick() {
                                    window.showEditModal(props);
                                }
                            }, "Editar")
                        );
                    },
                    readonly: true,
                    size: 94,
                },
            ],
            rows: [],
            schema,
            successful: false,
            message: "",
            loading: false,
            editMode: false,
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
            users_details: [],
            value: null,
            aportes: [],
            executed: null,
        };
    },
    created() {
        window.showEditModal = this.showEditModal;
        window.toggleTransactionExecuted = this.toggleTransactionExecuted;
    },
    mounted() {
        TransactionsAdminPageService.getTransactions().then(
            response => {
                this.rows = response.data;
            },
            error => {
                if (error.response && error.response.status === 403) {
                    EventBus.dispatch("logout");
                }
            });

        UsersDetailsService.getAllUsersDetails().then(
            response => {
                this.users_details = response.data;
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
                        exportPlugin.exportFile({ filename: 'Transações-' + moment().format("DD/MM/YYYY") });
                    }
                })
            });
        },
        handleAdd(transaction) {
            this.message = "";
            this.successful = false;
            this.loading = true;

            transaction.executed = this.executed;

            if (!transaction.editMode) {
                TransactionsAdminPageService.newTransaction(transaction).then(
                    (data) => {
                        this.message = data.message;
                        this.successful = true;
                        this.loading = false;

                        TransactionsAdminPageService.getTransactions().then(response => {
                            this.rows = response.data;
                        });
                    },
                    (error) => {
                        this.message =
                            (error.response &&
                                error.response.data &&
                                error.response.data.message) ||
                            error.message ||
                            error.toString();
                        this.successful = false;
                        this.loading = false;
                    }
                );
            } else {
                TransactionsAdminPageService.updateTransaction(transaction).then(
                    (data) => {
                        this.message = data.data.message;
                        this.successful = true;
                        this.loading = false;

                        TransactionsAdminPageService.getTransactions().then(response => {
                            this.rows = response.data;
                        });
                    },
                    (error) => {
                        this.message =
                            (error.response &&
                                error.response.data &&
                                error.response.data.message) ||
                            error.message ||
                            error.toString();
                        this.successful = false;
                        this.loading = false;
                    }
                );
            }
        },
        showEditModal(data) {
            this.message = "";
            this.successful = false;
            this.loading = false;
            this.editMode = true;

            TransactionsAdminPageService.getUserAportes(data.model.userId).then(response => {
                this.aportes = response.data.aportes;
                this.executed = data.model.executed == "Sim" ? true : false;
                this.value = parseFloat(data.model.value.replace(".", "").replace("R$", "").replace(",", ".").trim());

                this.$refs.addForm.setValues({
                    id: data.model.id,
                    user: data.model.userId,
                    aporte: Number(data.model.aporteId.replace(/[^0-9]/g, '')),
                    value: parseFloat(data.model.value.replace(".", "").replace("R$", "").replace(",", ".").trim()),
                    type: data.model.type,
                    pct: data.model.pct_profit,
                    date: moment(data.model.date, "DD/MM/YYYY").format("YYYY-MM-DD"),
                    newAporte: Number(data.model.newAporteId.replace(/[^0-9]/g, '')),
                    executed: data.model.executed,
                    editMode: true
                });

            }).catch(() => { });
        },
        openAddModal() {
            this.editMode = false;
            this.message = "";
            this.successful = false;
            this.loading = false;
            this.$refs.addForm.setValues({
                editMode: false
            });
        },
        toggleTransactionExecuted(props) {
            TransactionsAdminPageService.toggleTransactionActive(props.model.id).then(() => {
                TransactionsAdminPageService.getTransaction(props.model.id).then(response => {
                    props.model.executed = response.data.transaction.executed ? "Sim" : "Não";
                    document.getElementById(`executed${props.model.id}`).textContent = response.data.transaction.executed ? "Sim" : "Não";
                });
            }).catch(() => { });
        },
        onChange(event) {
            TransactionsAdminPageService.getUserAportes(event.target.value).then(response => {
                this.aportes = response.data.aportes;
            }).catch(() => { });
        },
        numericSort(prop, a, b) {
            const av = a[prop].toString().toLowerCase();
            const bv = b[prop].toString().toLowerCase();
            return av.localeCompare(bv, undefined, { numeric: true });
        },
        dateSort(prop, a, b) {
            const av = moment(a[prop], "DD/MM/YYYY");
            const bv = moment(b[prop], "DD/MM/YYYY");
            return av.isAfter(bv) ? 1 : -1;
        },
    }
};

</script>

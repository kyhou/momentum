<template>
    <Page>
        <button class="btn mb-5" @click="exportGrid">Exportar</button>
        <!-- The button to open modal -->
        <label for="modal-aporte" class="btn btn-primary" @click="openAddModal">Criar Aporte</label>

        <!-- Put this part before </body> tag -->
        <input type="checkbox" id="modal-aporte" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box relative">
                <label for="modal-aporte" class="btn btn-circle btn-sm absolute right-2 top-2">✕</label>
                <section class="mx-auto max-w-4xl rounded-md bg-white p-6 shadow-md dark:bg-primary">
                    <h2 class="text-lg font-semibold capitalize text-gray-700 dark:text-white">
                        {{ this.editMode ? 'Alterar Aporte' : 'Novo Aporte' }}
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
                                        class="form-control select select-bordered select-accent mt-2 block w-full max-w-xs px-4 py-2 ">
                                        <template v-for="userDetails in usersDetails" :key="userDetails.id">
                                            <option :value="userDetails.userId">{{ userDetails.firstName }} {{
                                                userDetails.lastName }}</option>
                                        </template>
                                    </Field>
                                    <ErrorMessage name="user" class="text-error" />
                                </div>

                                <div>
                                    <div class="form-group mt-4 gap-6">
                                        <CurrencyInput id="value" name="value" :options="currencyOptions"
                                            message="Informe o valor" v-model="value" />
                                    </div>
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
                                    <label class="text-gray-700 dark:text-gray-200" for="type">Tipo</label>
                                    <Field id="type" name="type" as="select"
                                        class="form-control select select-bordered select-accent mt-2 block w-full max-w-xs px-4 py-2 ">
                                        <option value="expert">Expert</option>
                                        <option value="security">Security</option>
                                    </Field>
                                    <ErrorMessage name="type" class="text-error" />
                                </div>

                                <div>
                                    <label class="label cursor-pointer">
                                        <span class="label-text">Ativo</span>
                                        <input v-model="active" id="active" name="active" type="checkbox"
                                            class="form-control toggle" checked />
                                    </label>
                                    <label class="label cursor-pointer">
                                        <span class="label-text">Travado 2y</span>
                                        <input v-model="locked" id="locked" name="locked" type="checkbox"
                                            class="form-control toggle" />
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
                                        <span class="sr-only">Loading...</span>
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
import AportesAdminPageService from "../services/aportes_admin_page.service";
import UsersDetailsService from "../services/users_details.service";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import Page from '../components/Page.vue'
import CurrencyInput from '../components/CurrencyInput.vue';
// import { date_helpers } from '../helpers/date_helpers';
import moment from 'moment';
import EventBus from "../common/EventBus";

export default {
    name: "AportesAdminPage",
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
            value: yup.number().required("Favor informar o valor do aporte"),
            date: yup.date().required("Favor selecionar uma data"),
            type: yup.string().required("Favor selecionar um tipo"),
        });

        return {
            columns: [
                {
                    prop: "id",
                    name: "Código",
                    sortable: true,
                    cellCompare: this.numericSort,
                },
                {
                    prop: "date",
                    name: "Data",
                    sortable: true,
                    autoSize: true,
                    size: 110,
                    cellCompare: this.dateSort,
                },
                {
                    prop: "user",
                    name: "Usuário",
                    sortable: true,
                    autoSize: true,
                    size: 250
                },
                {
                    prop: "value",
                    name: "Valor",
                    sortable: true,
                    autoSize: true,
                    size: 150
                },
                {
                    prop: "profit",
                    name: "%",
                    sortable: true,
                    autoSize: true,
                    size: 80,
                    cellCompare: this.numericSort,
                },
                {
                    prop: "type",
                    name: "Tipo",
                    sortable: true,
                    autoSize: true,
                    size: 100,
                },
                {
                    prop: "locked",
                    name: "Travado",
                    sortable: true,
                    autoSize: true,
                    size: 110
                },
                {
                    prop: "active",
                    name: "Ativo",
                    sortable: true,
                    readonly: true
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
                                for: "modal-aporte",
                                onClick() {
                                    window.showEditModal(props);
                                }
                            }, "Editar")
                        );
                    },
                    readonly: true,
                    sortable: false,
                    filter: false,
                },
                {
                    prop: "downloadContractButton",
                    name: "",
                    cellTemplate: (createElement, props) => {
                        return createElement('div', {
                            class: {
                                'btn': true,
                                'btn-ghost': true,
                                '-mt-1': true,
                            },
                            onClick() {
                                window.downloadContract(props);
                            }
                        },
                            createElement('svg', {
                                class: {
                                    'svg-inline--fa': true,
                                    'fa-file-signature': true,
                                    'w-8': true,
                                    'h-8': true,
                                },
                                'aria-hidden': true,
                                focusable: false,
                                'data-prefix': 'fas',
                                'data-icon': 'file-signature',
                                role: 'img',
                                xmlns: 'http://www.w3.org/2000/svg',
                                viewBox: '0 0 576 512'
                            },
                                createElement('path', {
                                    id: `svgDownload${props.model.id}`,
                                    class: {
                                        'w-8': true,
                                        'h-8': true,
                                        'text-accent': props.model.contractId ? true : false,
                                    },
                                    fill: 'currentColor',
                                    d: 'M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V428.7c-2.7 1.1-5.4 2-8.2 2.7l-60.1 15c-3 .7-6 1.2-9 1.4c-.9 .1-1.8 .2-2.7 .2H240c-6.1 0-11.6-3.4-14.3-8.8l-8.8-17.7c-1.7-3.4-5.1-5.5-8.8-5.5s-7.2 2.1-8.8 5.5l-8.8 17.7c-2.9 5.9-9.2 9.4-15.7 8.8s-12.1-5.1-13.9-11.3L144 381l-9.8 32.8c-6.1 20.3-24.8 34.2-46 34.2H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h8.2c7.1 0 13.3-4.6 15.3-11.4l14.9-49.5c3.4-11.3 13.8-19.1 25.6-19.1s22.2 7.8 25.6 19.1l11.6 38.6c7.4-6.2 16.8-9.7 26.8-9.7c15.9 0 30.4 9 37.5 23.2l4.4 8.8h8.9c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7L384 203.6V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM549.8 139.7c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM311.9 321c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L512.1 262.7l-71-71L311.9 321z',
                                }, "")
                            )
                        );
                    },
                    readonly: true,
                    sortable: false,
                    filter: false,
                },
                {
                    prop: "generateContractButton",
                    name: "",
                    cellTemplate: (createElement, props) => {
                        return createElement('div', {},
                            createElement('button', {
                                id: `gcButton${props.model.id}`,
                                class: {
                                    'btn': true,
                                    'btn-sm': true
                                },
                                onClick() {
                                    window.generateContract(props);
                                }
                            }, "Gerar")
                        );
                    },
                    readonly: true,
                    sortable: false,
                    filter: false,
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
            usersDetails: [],
            value: null,
            locked: null,
            active: null,
        };
    },
    created() {
        window.showEditModal = this.showEditModal;
        window.generateContract = this.generateContract;
        window.downloadContract = this.downloadContract;
    },
    mounted() {
        AportesAdminPageService.getAportes().then(
            response => {
                this.rows = response.data;
            },
            error => {
                if (error.response && error.response.status === 403) {
                    EventBus.dispatch("logout");
                }
            }
        );

        UsersDetailsService.getAllUsersDetails().then(
            response => {
                this.usersDetails = response.data;
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
                        exportPlugin.exportFile({ filename: 'Aportes-' + moment().format("DD/MM/YYYY") });
                    }
                })
            });
        },
        handleAdd(aporte) {
            this.message = "";
            this.successful = false;
            this.loading = true;

            aporte.active = this.active;
            aporte.locked = this.locked;

            if (!aporte.editMode) {
                AportesAdminPageService.newAporte(aporte).then(
                    (data) => {
                        this.message = data.message;
                        this.successful = true;
                        this.loading = false;

                        AportesAdminPageService.getAportes().then(response => {
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
                AportesAdminPageService.updateAporte(aporte).then(
                    (data) => {
                        this.message = data.data.message;
                        this.successful = true;
                        this.loading = false;

                        AportesAdminPageService.getAportes().then(response => {
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
        showEditModal(props) {
            this.message = "";
            this.successful = false;
            this.loading = false;
            this.editMode = true;

            var aporteValue = parseFloat(props.model.value.replace(".", "").replace("R$", "").replace(",", ".").trim());
            this.value = aporteValue;

            this.$refs.addForm.setValues({
                id: props.model.id,
                user: props.model.userId,
                value: aporteValue,
                date: moment(props.model.date, "DD/MM/YYYY").format("YYYY-MM-DD"),
                locked: props.model.locked,
                active: props.model.active,
                type: props.model.type,
                editMode: true
            });

            this.locked = props.model.locked;
            this.active = props.model.active;
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
        generateContract(props) {
            if (confirm(`Confirma a geração do contrato do aporte ${props.model.id}?`)) {
                document.getElementById(`gcButton${props.model.id}`).disabled = true;
                document.getElementById(`gcButton${props.model.id}`).textContent = "...";

                AportesAdminPageService.generateContract(props.model.id).then(result => {
                    props.model.contractId = result.data.contractId;
                    document.getElementById(`gcButton${props.model.id}`).textContent = "Gerar";
                    document.getElementById(`gcButton${props.model.id}`).disabled = false;
                    document.getElementById(`svgDownload${props.model.id}`).classList.add("text-accent");
                });
            }
        },
        downloadContract(props) {
            if (props.model.contractId) {
                let url = `https://drive.google.com/uc?export=download&id=${props.model.contractId}`;
                this.download(url, `Contrato_${props.model.id}`);
            }
        },
        download(url, filename) {
            var link = document.createElement("a");
            link.download = filename;
            link.href = url;
            link.target = "_blank";
            link.click();
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
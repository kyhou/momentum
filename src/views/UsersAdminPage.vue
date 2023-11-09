<template>
    <Page>
        <button class="btn mb-5" @click="exportGrid">Exportar</button>
        <!-- The button to open modal -->
        <label for="modal-user" class="btn btn-primary" @click="openAddModal">Criar Usuário</label>

        <!-- Put this part before </body> tag -->
        <input type="checkbox" id="modal-user" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box relative">
                <label for="modal-user" class="btn btn-circle btn-sm absolute right-2 top-2">✕</label>
                <section class="mx-auto max-w-4xl rounded-md bg-white p-6 shadow-md dark:bg-primary">
                    <h2 class="text-lg font-semibold capitalize text-gray-700 dark:text-white">
                        {{ this.editMode ? "Alterar Usuário" : "Novo Usuário" }}
                    </h2>
                    <Form id="addForm" ref="addForm" @submit="handleRegister" :validation-schema="schema">
                        <div v-if="!successful">
                            <!-- <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2"> -->
                            <div class="form-group mt-4 gap-6">
                                <Field id="editMode" name="editMode" ref="editMode" hidden="true" type="checkbox"
                                    value="false">
                                </Field>
                                <Field id="id" name="id" hidden="true" type="text"></Field>
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="email">Email</label>
                                    <Field id="email" name="email" type="email"
                                        class="focus:ring-opacity/40 form-control mt-2 block w-full rounded-md 
                                                border border-gray-200 bg-white px-4 py-2 text-gray-700 
                                                focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                                                dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300" />
                                    <ErrorMessage name="email" class="text-error" />
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="password">Senha</label>
                                    <Field id="password" name="password" type="password" ref="password"
                                        class="focus:ring-opacity/40 form-control mt-2 block w-full rounded-md 
                                                border border-gray-200 bg-white px-4 py-2 text-gray-700 
                                                focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                                                dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300" />
                                    <ErrorMessage name="password" class="text-error" />
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Confirme
                                        a
                                        Senha</label>
                                    <Field id="passwordConfirmation" name="passwordConfirmation" type="password"
                                        class="focus:ring-opacity/40 form-control mt-2 block w-full rounded-md 
                                                border border-gray-200 bg-white px-4 py-2 text-gray-700 
                                                focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                                                dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300" />
                                    <ErrorMessage name="passwordConfirmation" class="text-error" />
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="name">Nome</label>
                                    <Field id="firstName" name="firstName" type="text"
                                        class="focus:ring-opacity/40 form-control mt-2 block w-full rounded-md 
                                                border border-gray-200 bg-white px-4 py-2 text-gray-700 
                                                focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                                                dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300" />
                                    <ErrorMessage name="firstName" class="text-error" />
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="surname">Sobrenome</label>
                                    <Field id="lastName" name="lastName" type="text"
                                        class="focus:ring-opacity/40 form-control mt-2 block w-full rounded-md 
                                                border border-gray-200 bg-white px-4 py-2 text-gray-700 
                                                focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
                                                dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300" />
                                    <ErrorMessage name="lastName" class="text-error" />
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="type">Tipo</label>
                                    <Field id="type" name="type" as="select"
                                        class="form-control select select-bordered select-accent mt-2 block w-full max-w-xs px-4 py-2 ">
                                        <option value="select">Select</option>
                                        <option value="invest">Invest</option>
                                    </Field>
                                    <ErrorMessage name="type" class="text-error" />
                                </div>

                                <div>
                                    <label class="label cursor-pointer">
                                        <span class="label-text">Usuário</span>
                                        <input v-model="userRole" id="userRole" name="userRole" type="checkbox"
                                            class="form-control toggle" checked />
                                    </label>
                                    <label class="label cursor-pointer">
                                        <span class="label-text">Administrador</span>
                                        <input v-model="adminRole" id="adminRole" name="adminRole" type="checkbox"
                                            class="form-control toggle" />
                                    </label>
                                    <label class="label cursor-pointer">
                                        <span class="label-text">Colaborador</span>
                                        <input v-model="colabRole" id="colabRole" name="colabRole" type="checkbox"
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
                                    </div>
                                    <div v-show="!loading">{{ this.editMode ? "Alterar" : "Sign Up" }}</div>
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
        }" :resize="true" theme="darkMaterial" :source="rows" :columns="columns" />
    </Page>
</template>

<script>
import VGrid from "@revolist/vue3-datagrid";
import UsersAdminPageService from "../services/users_admin_page.service";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import Page from '../components/Page.vue'
import moment from 'moment';
import EventBus from "../common/EventBus";

export default {
    name: "UsersAdminPage",
    components: {
        VGrid,
        // eslint-disable-next-line vue/no-reserved-component-names
        Form,
        Field,
        ErrorMessage,
        Page
    },
    data() {
        const schema = yup.object().shape({
            editMode: yup.boolean(),
            email: yup
                .string()
                .required("Email is required!")
                .email("Email is invalid!")
                .max(50, "Must be maximum 50 characters!"),
            password: yup
                .string()
                .when("editMode", {
                    is: false,
                    then: yup.string().required("Password is required!"),
                    otherwise: yup.string()
                })
                .min(8, "Must be at least 8 characters!"),
            passwordConfirmation: yup
                .string()
                .when("editMode", {
                    is: false,
                    then: yup.string().required("Password confirmation is required!"),
                    otherwise: yup.string()
                })
                .oneOf([yup.ref('password'), null], 'Passwords must match'),
            firstName: yup.string().required("Nome é obrigatório."),
            lastName: yup.string().required("Sobrenome é obrigatório."),
        });

        return {
            columns: [
                {
                    prop: "id",
                    name: "ID",
                    sortable: true,
                    filter: 'number',
                    size: 70,
                    cellCompare: this.numericSort,
                },
                {
                    prop: "fullName",
                    name: "Nome Completo",
                    sortable: true,
                    size: 250,
                },
                {
                    prop: "email",
                    name: "Email",
                    sortable: true,
                    size: 300,
                },
                {
                    prop: "type",
                    name: "Tipo",
                    sortable: true,
                    autoSize: true
                },
                {
                    prop: "roles",
                    name: "Cargos",
                    size: 160,
                },
                {
                    prop: "active",
                    name: "",
                    cellTemplate: (createElement, props) => {
                        return createElement('div', {},
                            createElement('button', {
                                id: `active${props.model.id}`,
                                class: {
                                    'btn': true,
                                    'btn-sm': true
                                },
                                onClick() {
                                    window.toggleUserActive(props);
                                }
                            }, props.model[props.prop])
                        );
                    },
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
                                for: "modal-user",
                                onClick() {
                                    window.showEditModal(props);
                                }
                            }, "Editar")
                        );
                    },
                    readonly: true
                },
            ],
            rows: [],
            schema,
            successful: false,
            message: "",
            loading: false,
            editMode: false,
            userRole: null,
            adminRole: null,
            colabRole: null,
        };
    },
    created() {
        window.showEditModal = this.showEditModal;
        window.toggleUserActive = this.toggleUserActive;
    },
    mounted() {
        UsersAdminPageService.getUsersDetails().then(
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
                        exportPlugin.exportFile({ filename: 'Usuários-' + moment().format("DD/MM/YYYY") });
                    }
                })
            });
        },
        handleRegister(user) {
            this.message = "";
            this.successful = false;
            this.loading = true;

            user.roles = [];
            if (this.userRole) {
                user.roles.push("user");
            }
            if (this.adminRole) {
                user.roles.push("admin");
            }
            if (this.colabRole) {
                user.roles.push("colab");
            }

            if (!user.editMode) {
                this.$store.dispatch("auth/register", user).then(
                    (data) => {
                        this.message = data.message;
                        this.successful = true;
                        this.loading = false;

                        UsersAdminPageService.getUsersDetails().then(response => {
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
                UsersAdminPageService.updateUser(user).then(
                    (data) => {
                        this.message = data.data.message;
                        this.successful = true;
                        this.loading = false;

                        UsersAdminPageService.getUsersDetails().then(response => {
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

            this.$refs.addForm.setValues({
                id: data.model.id,
                email: data.model.email,
                userRole: data.model.roles.includes('user'),
                adminRole: data.model.roles.includes('admin'),
                colabRole: data.model.roles.includes('colab'),
                firstName: data.model.fullName.split(" ")[0].trim(),
                lastName: data.model.fullName.replace(data.model.fullName.split(" ")[0], "").trim(),
                type: data.model.type,
                editMode: true
            });

            this.userRole = data.model.roles.includes('user');
            this.adminRole = data.model.roles.includes('admin');
            this.colabRole = data.model.roles.includes('colab');
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
        toggleUserActive(props) {
            UsersAdminPageService.toggleUserActive(props.model.id).then(() => {
                UsersAdminPageService.getUser(props.model.id).then(response => {
                    props.model.active = response.data.user.active ? "Ativo" : "Inativo";
                    document.getElementById(`active${props.model.id}`).textContent = response.data.user.active ? "Ativo" : "Inativo";
                });
            }).catch(() => { });
        },
        numericSort(prop, a, b) {
            const av = a[prop].toString().toLowerCase();
            const bv = b[prop].toString().toLowerCase();
            return av.localeCompare(bv, undefined, { numeric: true });
        },
    }
};

</script>

<style scoped>
revo-grid {
    width: 100%;
    height: 500px;
}
</style>
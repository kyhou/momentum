<template>
    <Page>
        <div class="mx-4 mb-14 mt-10">
            <p class="text-3xl">Olá {{ userName }}</p>
            <br />
            <router-link to="/dashboard/" class="btn btn-outline btn-accent mb-5">Voltar</router-link>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Data</th>
                            <th>Valor</th>
                            <th>Rendimento (%)</th>
                            <th>Executado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="row in transactions" :key="row.id">
                            <th
                                v-html="row.type == 'novoAporte' && row.newAporteId != '-' ? `novo aporte ${this.window.width < 1024 ? '<br />' : ''} (HV${row.newAporteId.padStart(5, '0')})` : row.type">
                            </th>
                            <td>{{ date_helpers.parseDate(row.date).format("DD/MM/YYYY") }}</td>
                            <td>{{ (row.type == "rendimento" ? '(+)' : '(-)') + ' ' + new Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                            }).format(row.value) }}</td>
                            <td>{{ row.pct_profit ? row.pct_profit + '%' : '-' }}</td>
                            <td>{{ row.executed ? "Sim" : "Não" }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </Page>
</template>

<script>
import UserStatementService from "../services/user_statement.service";
import UsersDetailsService from "../services/users_details.service";
import Page from '../components/Page.vue'
import { date_helpers } from '../helpers/date_helpers';
import EventBus from "../common/EventBus";

export default {
    name: "UserStatement",
    components: {
        Page
    },
    data() {
        return {
            userName: "",
            transactions: [],
            window: {
                width: 0,
                height: 0
            }
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
        this.date_helpers = date_helpers;
    },
    mounted() {
        const user = JSON.parse(localStorage.getItem('user'));
        UsersDetailsService.getUserName(user.id).then(
            response => {
                this.userName = `${response.data.firstName ? response.data.firstName : "Usuário"} ${response.data.lastName ? response.data.lastName : ''}`;
            },
            error => {
                if (error.response && error.response.status === 403) {
                    EventBus.dispatch("logout");
                }
            }
        );

        UserStatementService.getTransactions(user.id).then(
            response => {
                this.transactions = response.data;
            },
            error => {
                if (error.response && error.response.status === 403) {
                    EventBus.dispatch("logout");
                }
            }
        );
    },
    unmounted() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        }
    }
}

</script>
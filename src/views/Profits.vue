<template>
  <Page>
    <section>
      <div class="py-10">
        <h1 class="title-font text-4xl font-bold text-white">Histórico operacional</h1>
        <p class="text-base font-bold uppercase leading-relaxed text-accent">Índice de resultados obtidos no ano</p>
      </div>
      <div class="container mx-auto flex flex-col items-center py-5 md:flex-row">
        <div
          class="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:mr-52 lg:grow lg:pr-24">
          <div class="w-full overflow-x-auto">
            <table class="table table-compact w-full">
              <!-- head -->
              <thead>
                <tr>
                  <th>período</th>
                  <th class="max-sm:text-right">rentabilidade</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="month in months" :key="month.id">
                  <td>{{ getMonthName(month.value.getMonth()) }}</td>
                  <td>
                    <div class="max-sm:float-right">
                      <button class="badge-accent btn-sm w-20 font-bold text-base-100">{{
                        getMonthProfit(month.value.getMonth())
                      }}</button>
                    </div>
                  </td>
                </tr>
              </tbody>
              <!-- foot -->
              <tfoot>
                <tr>
                  <th></th>
                  <th>Total: {{ getSumProfits() }}%</th>
                </tr>
              </tfoot>

            </table>
          </div>
        </div>
        <div class="hidden w-5/6 md:w-1/2 lg:mr-28 lg:block lg:max-w-sm">
          <img class="fa-flip-horizontal rounded object-cover object-center" src="../assets/imgs/dubai.jpg">
        </div>
      </div>
    </section>
  </Page>
</template>

<script>
import Page from '../components/Page.vue';
import ProfitsService from '../services/profits.service';
import { date_helpers } from '../helpers/date_helpers';
import EventBus from "./common/EventBus";

export default {
  name: "profits-page",
  components: {
    Page
  },
  data() {
    const months = [
      { id: 1, value: new Date(new Date().getFullYear(), 0, 1) },
      { id: 2, value: new Date(new Date().getFullYear(), 1, 1) },
      { id: 3, value: new Date(new Date().getFullYear(), 2, 1) },
      { id: 4, value: new Date(new Date().getFullYear(), 3, 1) },
      { id: 5, value: new Date(new Date().getFullYear(), 4, 1) },
      { id: 6, value: new Date(new Date().getFullYear(), 5, 1) },
      { id: 7, value: new Date(new Date().getFullYear(), 6, 1) },
      { id: 8, value: new Date(new Date().getFullYear(), 7, 1) },
      { id: 9, value: new Date(new Date().getFullYear(), 8, 1) },
      { id: 10, value: new Date(new Date().getFullYear(), 9, 1) },
      { id: 11, value: new Date(new Date().getFullYear(), 10, 1) },
      { id: 12, value: new Date(new Date().getFullYear(), 11, 1) }
    ];
    return {
      months,
      profitsList: [],
      sumProfits: 0,
    };
  },
  created() {
    this.date_helpers = date_helpers;
  },
  mounted() {
    ProfitsService.getProfits().then(
      result => {
        this.profitsList = result.data;
      },
      error => {
        if (error.response && error.response.status === 403) {
          EventBus.dispatch("logout");
        }
      }
    ).catch(() => { });
  },
  methods: {
    getMonthName(monthNumber, locale = 'pt-BR') {
      const date = new Date();
      date.setMonth(monthNumber);

      return date.toLocaleString(locale, { month: 'long' });
    },
    getMonthProfit(month) {
      const monthProfit = this.profitsList.find(reg => date_helpers.parseDate(reg.startDate).month() == month && reg.aporteId === null);

      if (monthProfit) {
        return monthProfit.value.toString() + '%';
      }

      return '--';
    },
    getSumProfits() {
      var total = 0;
      for (var i in this.profitsList) {
        total += Number(this.profitsList[i].value);
      }

      return Number(total).toFixed(2);
    }
  }
};
</script>
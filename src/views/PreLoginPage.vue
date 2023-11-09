<template>
  <Page>
    <div class="mb-5 mt-10 flex flex-col items-center justify-center">
      <div>
        <div class="flex flex-col flex-wrap items-center text-center">
          <h1 class="title-font text-4xl font-bold text-white">Bem-vindos clientes Select e Invest!</h1>
        </div>
      </div>
      <FontAwesomeIcon icon="fa-chart-line" class="my-20 h-40 w-40 text-accent opacity-75" />
      <div>
        <div class="mb-10 flex flex-col flex-wrap items-center text-center">
          <h1 class="title-font text-2xl text-white">Escolha sua plataforma para seguir com o login clicando em um dos
            botões abaixo:</h1>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center lg:flex-row">
        <div class="">
            <span class="sr-only">HVselect</span>
            <a href="/login" class="normal-case">
              <img src="../assets/imgs/botao_select.png" alt="HVselect" class="w-60">
            </a>
        </div>
        <!-- <div class="divider divider-vertical text-white opacity-100 m-0"></div> -->
        <div class="mt-3 lg:ml-10">
            <span class="sr-only">HVinvestimentos</span>
            <a href="https://invest.hvinvestimentos.com/login/login.php" class="normal-case">
              <img src="../assets/imgs/botao_invest.png" alt="HVinvestimentos" class="w-72">
            </a>
        </div>
      </div>
    </div>
  </Page>
</template>

<script>
import Page from '../components/Page.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: "PreLogin",
  components: {
    FontAwesomeIcon,
    Page
  }
};
</script>
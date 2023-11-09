<template>
    <Tradingview :class="loading ? 'opacity-0' : ''" />
    <div v-if="!loading">
        <Page>
            <section id="hero" class="body-font bg-primary">
                <div class="hero-bg-image sm:sm-hero-bg-image md:max-lg:bg-pos-75-20 hero bg-secondary">
                    <!-- bg-[url('/src/assets/imgs/hero.jpg')] -->
                    <div class="hero-content flex w-full flex-wrap gap-0 pb-0">
                        <div class="basis-[95%] lg:basis-1/2" data-aos="slide-right">
                            <hr class="hr-title w-[70px]" />
                            <h1 class="py-6 text-[42px] font-bold uppercase leading-[55px] text-white">Eleve seu portfólio
                                com ativos que rendem</h1>
                            <h1 class="pb-6 text-4xl font-bold uppercase text-white"><span class="bg-[#fabd05]">acima de 18%
                                    ao ano.</span></h1>
                            <span class="text-white">Nossa prioridade é preservar, adaptar ao perfil e às necessidades de
                                cada cliente, buscando as melhores oportunidades de investimento local e
                                internacional.</span>
                            <div class="div mt-10 flex flex-wrap">
                                <a href="#about" class="btn border-0 bg-[#fabd05] font-bold text-white lg:ml-60">Comece
                                    agora</a>
                                <a href="#about" class="btn btn-ghost ml-5 border-0 font-bold text-white">Saiba Mais</a>
                            </div>
                        </div>
                        <div class="mt-10 h-80 basis-80 bg-[url('/src/assets/imgs/Imagem_TOPO_01.png')] bg-contain bg-no-repeat lg:h-[635px] lg:basis-1/2"
                            data-aos="slide-right">
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="lg:flex lg:flex-wrap">
                    <div class="p-4 lg:w-1/3" data-aos="zoom-in">
                        <div class="flex flex-wrap items-center justify-center p-8">
                            <FontAwesomeIcon icon="fa-handshake" class="h-20 text-warning" />
                            <h2 class="title-font ml-3 text-lg uppercase text-white">Renda <span class="font-bold">Fixa</span></h2>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/3" data-aos="zoom-in">
                        <div class="flex flex-wrap items-center justify-center p-8">
                            <FontAwesomeIcon icon="fa-handshake" class="h-20 text-warning" />
                            <h2 class="title-font ml-3 text-lg uppercase text-white">Renda <span class="font-bold">Variável</span></h2>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/3" data-aos="zoom-in">
                        <div class="flex flex-wrap items-center justify-center p-8">
                            <FontAwesomeIcon icon="fa-handshake" class="h-20 text-warning" />
                            <h2 class="title-font ml-3 text-lg uppercase text-white">Outras <span class="font-bold">Soluções</span></h2>
                        </div>
                    </div>
                </div>
            </section>

            <div class="vl-divider" />

            <section id="about" class="body-font bg-secondary text-white">

                <!-- Put this part before </body> tag -->
                <input type="checkbox" id="modal-partnership" class="modal-toggle" @click="toggleModal()" />
                <label for="modal-partnership" class="modal">
                    <div class="modal-box p-0">
                        <label for="modal-partnership" class="btn btn-circle btn-sm absolute right-2 top-2">✕</label>
                        <div class="h-auto">
                            <img src="../assets/imgs/parcerias2.png" alt="Parcerias">
                            <div class="p-6">
                                <hr class="hr-title" />
                                <h1 class="title-font mb-3 text-xl font-bold text-white">Parcerias</h1>
                                <p class="mb-3 leading-relaxed">Construindo parcerias há 4 anos. A história do Grupo HV
                                    começou com a colaboração de nossos clientes e outros parceiros de negócios. Com a
                                    expansão do grupo, contamos com a parceria de grandes construtoras e imobiliárias do
                                    Norte e Litoral de Santa Catarina.</p>
                            </div>
                        </div>
                    </div>
                </label>

                <!-- Put this part before </body> tag -->
                <input type="checkbox" id="modal-family" class="modal-toggle" @click="toggleModal()" />
                <label for="modal-family" class="modal">
                    <div class="modal-box p-0">
                        <label for="modal-family" class="btn btn-circle btn-sm absolute right-2 top-2">✕</label>
                        <div class="h-auto">
                            <img src="../assets/imgs/familia2.jpg" alt="Uma empresa de família">
                            <div class="p-6">
                                <hr class="hr-title" />
                                <h1 class="title-font mb-3 text-xl font-bold text-white">Uma empresa de família </h1>
                                <p class="mb-3 leading-relaxed">Da nossa família para a sua! Queremos levar prosperidade
                                    e educação financeira para todos. Somos uma empresa familiar e temos como foco a
                                    entrega de resultados, por isso, todos são capacitados e comprometidos com o
                                    crescimento.</p>
                            </div>
                        </div>
                    </div>
                </label>

                <!-- Put this part before </body> tag -->
                <input type="checkbox" id="modal-god" class="modal-toggle" @click="toggleModal()" />
                <label for="modal-god" class="modal">
                    <div class="modal-box p-0">
                        <label for="modal-god" class="btn btn-circle btn-sm absolute right-2 top-2">✕</label>
                        <div class="h-auto">
                            <img src="../assets/imgs/Deus2.png" alt="Deus é tudo">
                            <div class="p-6">
                                <hr class="hr-title" />
                                <h1 class="title-font mb-3 text-xl font-bold text-white">Deus primeiro</h1>
                                <p class="mb-3 leading-relaxed">Nossa preocupação não é somente a geração de riqueza.
                                    Acreditamos que podemos fazer a diferença na sociedade como um todo. Por isso,
                                    também investimos no âmbito
                                    social, como o nosso projeto de
                                    doação de cestas básicas em igrejas locais.</p>
                            </div>
                        </div>
                    </div>
                </label>

                <!-- Put this part before </body> tag -->
                <input type="checkbox" id="modal-real-estate" class="modal-toggle" @click="toggleModal()" />
                <label for="modal-real-estate" class="modal">
                    <div class="modal-box p-0">
                        <label for="modal-real-estate" class="btn btn-circle btn-sm absolute right-2 top-2">✕</label>
                        <div class="h-auto">
                            <img src="../assets/imgs/imobiliario2.png" alt="Mercado imobiliário">
                            <div class="p-6">
                                <hr class="hr-title" />
                                <h1 class="title-font mb-3 text-xl font-bold text-white">Mercado imobiliário</h1>
                                <p class="mb-3 leading-relaxed">Em nossa gestão de patrimônio, adquirimos apenas imóveis
                                    de alto padrão. Garantindo um lastro imobiliário aos nossos clientes. Em nosso
                                    portfólio, possuímos (até o momento) unidades do mais alto padrão de empreiteiras
                                    como DAXO, Santer e Rôgga.</p>
                            </div>
                        </div>
                    </div>
                </label>

                <!-- Put this part before </body> tag -->
                <input type="checkbox" id="modal-futures" class="modal-toggle" @click="toggleModal()" />
                <label for="modal-futures" class="modal">
                    <div class="modal-box p-0">
                        <label for="modal-futures" class="btn btn-circle btn-sm absolute right-2 top-2">✕</label>
                        <div class="h-auto">
                            <img src="../assets/imgs/futuros2.png" alt="Mercado nacional">
                            <div class="p-6">
                                <hr class="hr-title" />
                                <h1 class="title-font mb-3 text-xl font-bold text-white">Mercado nacional</h1>
                                <p class="mb-3 leading-relaxed">Um dos mercados em que operamos é o Mercado
                                    Futuro na Bolsa de Valores (B3). O mercado de contratos futuros
                                    serve como instrumento de proteção financeira, bem como possibilita a rentabilização
                                    do capital de forma alavancada. Resumidamente, trata-se de um ativo de renda
                                    variável, onde são feitas negociações em uma data futura.</p>
                            </div>
                        </div>
                    </div>
                </label>

                <!-- Put this part before </body> tag -->
                <input type="checkbox" id="modal-forex" class="modal-toggle" @click="toggleModal()" />
                <label for="modal-forex" class="modal">
                    <div class="modal-box p-0">
                        <label for="modal-forex" class="btn btn-circle btn-sm absolute right-2 top-2">✕</label>
                        <div class="h-auto">
                            <img src="../assets/imgs/forex2.png" alt="Mercado internacional">
                            <div class="p-6">
                                <hr class="hr-title" />
                                <h1 class="title-font mb-3 text-xl font-bold text-white">Mercado internacional</h1>
                                <p class="mb-3 leading-relaxed">Além do Mercado Futuro na B3, operamos também no mercado
                                    de câmbio, através do FOREX. O FOREX é um mercado financeiro descentralizado, e é o
                                    maior mercado de câmbio do mundo. No quesito volume de dinheiro, o FOREX movimenta o
                                    equivalente a mais de 5 trilhões de dólares americanos, todos os dias.</p>
                            </div>
                        </div>
                    </div>
                </label>

                <div class="w-full px-5 py-24 lg:px-10">
                    <div class="items-left mb-20  flex flex-col flex-wrap text-left" data-aos="slide-right">
                        <hr class="hr-title mb-5" style="width: 70px;" />
                        <h1 class="title-font text-4xl font-bold text-white">Sobre nós</h1>
                        <p class="w-full font-bold uppercase leading-relaxed text-accent lg:w-1/2">Clique e conheça mais
                            sobre o grupo hv</p>
                    </div>
                    <div class="-m-4 flex flex-wrap">
                        <label for="modal-partnership" class="p-4 md:w-1/2 xl:w-1/3" data-aos="slide-up">
                            <div
                                class="before:bg-about-1 cursor-pointer p-6 before:bg-[url('/src/assets/imgs/parcerias.jpg')] before:grayscale before:transition before:duration-300 before:ease-out before:hover:opacity-100 before:hover:grayscale-0">
                                <hr class="hr-title" />
                                <h2 class="title-font mb-2 text-lg font-medium text-white">Parcerias</h2>
                                <p class="text-base leading-relaxed">Construindo parcerias há 4 anos. A história do
                                    Grupo HV começou com a colaboração [...]</p>
                            </div>
                        </label>
                        <label for="modal-family" class="p-4 md:w-1/2 xl:w-1/3" data-aos="slide-up">
                            <div
                                class="before:bg-about-1 before:bg-about-2 cursor-pointer p-6 before:bg-[url('/src/assets/imgs/familia3.jpg')] before:grayscale  before:transition before:duration-300 before:ease-out before:hover:opacity-100 before:hover:grayscale-0">
                                <hr class="hr-title" />
                                <h2 class="title-font mb-2 text-lg font-medium text-white">Uma empresa de família </h2>
                                <p class="text-base leading-relaxed">Da nossa família para a sua! Queremos levar
                                    prosperidade
                                    e educação financeira [...]</p>
                            </div>
                        </label>
                        <label for="modal-god" class="p-4 md:w-1/2 xl:w-1/3" data-aos="slide-up">
                            <div
                                class="before:bg-about-1 before:bg-about-3 cursor-pointer p-6 before:bg-[url('/src/assets/imgs/Deus.jpg')] before:grayscale before:transition before:duration-300 before:ease-out before:hover:opacity-100 before:hover:grayscale-0">
                                <hr class="hr-title" />
                                <h2 class="title-font mb-2 text-lg font-medium text-white">Deus primeiro</h2>
                                <p class="text-base leading-relaxed">Nossa preocupação não é somente a geração de
                                    riqueza. [...]
                                </p>
                            </div>
                        </label>
                        <label for="modal-real-estate" class="p-4 md:w-1/2 xl:w-1/3" data-aos="slide-up">
                            <div
                                class="before:bg-about-1 before:bg-about-6 cursor-pointer p-6 before:bg-[url('/src/assets/imgs/imobiliario.jpg')] before:grayscale before:transition before:duration-300 before:ease-out before:hover:opacity-100 before:hover:grayscale-0">
                                <hr class="hr-title" />
                                <h2 class="title-font mb-2 text-lg font-medium text-white">Mercado imobiliário
                                </h2>
                                <p class="text-base leading-relaxed">Em nossa gestão de patrimônio, adquirimos apenas
                                    imóveis
                                    de alto padrão [...]</p>
                            </div>
                        </label>
                        <label for="modal-futures" class="p-4 md:w-1/2 xl:w-1/3" data-aos="slide-up">
                            <div
                                class="before:bg-about-1 before:bg-about-4 cursor-pointer p-6 before:bg-[url('/src/assets/imgs/futuros.jpg')] before:grayscale before:transition before:duration-300 before:ease-out before:hover:opacity-100 before:hover:grayscale-0">
                                <hr class="hr-title" />
                                <h2 class="title-font mb-2 text-lg font-medium text-white">Mercado nacional</h2>
                                <p class="text-base leading-relaxed">Um dos mercados em que operamos é o
                                    Mercado
                                    Futuro na Bolsa de Valores [...]</p>
                            </div>
                        </label>
                        <label for="modal-forex" class="p-4 md:w-1/2 xl:w-1/3" data-aos="slide-up">
                            <div
                                class="50 before:bg-about-1 before:bg-about-5 cursor-pointer p-6 before:bg-[url('/src/assets/imgs/forex.jpg')] before:grayscale before:transition before:duration-300 before:ease-out before:hover:opacity-100 before:hover:grayscale-0">
                                <hr class="hr-title" />
                                <h2 class="title-font mb-2 text-lg font-medium text-white">Mercado internacional</h2>
                                <p class="text-base leading-relaxed">Além do Mercado Futuro na B3, operamos também no
                                    mercado
                                    de câmbio [...]</p>
                            </div>
                        </label>
                    </div>
                </div>
            </section>

            <div class="vl-divider" />

            <section id="values" class="body-font bg-secondary text-white">
                <div class="mx-auto flex flex-col px-5 py-24 lg:px-10">
                    <div class="mx-auto">
                        <div class="mb-20 text-left" data-aos="slide-right">
                            <hr class="hr-title mb-5" style="width: 70px;" />
                            <h1 class="title-font text-4xl font-bold text-white">Nossos valores</h1>
                            <p class="mx-auto text-base font-bold leading-relaxed text-accent"> O QUE REGE NOSSO DIA A
                                DIA</p>
                        </div>
                        <div class="mb-20 h-64 overflow-hidden" data-aos="flip-right">
                            <img alt="content" class="h-full w-full object-cover object-center grayscale"
                                src="../assets/imgs/valores.jpg">
                        </div>
                        <div class="-mx-4 -mb-10 -mt-4 flex flex-wrap space-y-6 sm:-m-4 md:space-y-0">
                            <div class="flex flex-col items-center p-4 text-center md:w-1/3" data-aos="slide-up">
                                <div class="grow">
                                    <h2 class="title-font mb-3 text-lg font-bold text-white">Missão</h2>
                                    <p class="text-base leading-relaxed">Nossa missão é transbordar financeiramente na
                                        vida das pessoas, através da educação financeira apoiada por uma gestão
                                        eficaz e adaptável.</p>
                                </div>
                            </div>
                            <div class="flex flex-col items-center p-4 text-center md:w-1/3" data-aos="slide-up">
                                <div class="grow">
                                    <h2 class="title-font mb-3 text-lg font-bold text-white">Visão</h2>
                                    <p class="text-base leading-relaxed">Nossa visão é ser reconhecidos pela geração de
                                        riqueza dos que nos cercam, sejam clientes, familiares ou amigos, através da
                                        educação financeira.</p>
                                </div>
                            </div>
                            <div class="flex flex-col items-center p-4 text-center md:w-1/3" data-aos="slide-up">
                                <div class="grow">
                                    <h2 class="title-font mb-3 text-lg font-bold text-white">Valores</h2>
                                    <p class="text-base leading-relaxed">Nossos valores estão firmados em honestidade,
                                        transparência, parceria, segurança e resultados.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="vl-divider" />

            <section id="properties" class="body-font bg-secondary">
                <div class="px-5 py-24 lg:px-10">
                    <div data-aos="slide-right">
                        <div class="mb-20 text-left">
                            <hr class="hr-title mb-5" style="width: 70px;" />
                            <h1 class="title-font text-4xl font-bold text-white">Imóveis adquiridos</h1>
                            <p class="mx-auto text-base font-bold uppercase leading-relaxed text-accent">Conheça os
                                imóveis que o Grupo HV adquiriu para fortaceler nosso lastro patrimonial</p>
                        </div>
                        <div class="mb-10 text-left">
                            <h1 class="title-font text-2xl font-semibold text-white">Parceria Grupo HV e Águia
                                Consultoria
                                Imobiliária</h1>
                        </div>
                    </div>
                    <div class="-m-4 flex flex-wrap">
                        <div class="p-4 md:w-1/3" data-aos="slide-up">
                            <div class="border-opacity/60 h-full border-2 border-gray-200">
                                <img src="../assets/imgs/barra_view.png" alt="Barra View Residences">
                                <div class="p-6">
                                    <hr class="hr-title" />
                                    <h1 class="title-font mb-3 text-xl font-bold text-white">Barra View
                                        Residences
                                    </h1>
                                    <p class="mb-3 leading-relaxed">Muito mais que um empreendimento completo e de
                                        frente para o mar. O Barra View Residences é a expressão do conforto e
                                        bem-estar. Localizado em Barra Velha - Santa Catarina.</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3" data-aos="slide-up">
                            <div class="border-opacity/60 h-full border-2 border-gray-200">
                                <img src="../assets/imgs/belvedere.png" alt="Belvedere Beach House">
                                <div class="p-6">
                                    <hr class="hr-title" />
                                    <h1 class="title-font mb-3 text-xl font-bold text-white">Belvedere Beach House</h1>
                                    <p class="mb-3 leading-relaxed">Pé na areia e a brisa do mar virando rotina. O
                                        primeiro da linha Beach House da construtora Rôgga. Localizado em Balneário
                                        Piçarras - Santa Catarina.</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3" data-aos="slide-up">
                            <div class="border-opacity/60 h-full border-2 border-gray-200">
                                <img src="../assets/imgs/ibiza.png" alt="Ibiza Beach Club">
                                <div class="p-6">
                                    <hr class="hr-title" />
                                    <h1 class="title-font mb-3 text-xl font-bold text-white">Ibiza Beach Club</h1>
                                    <p class="mb-3 leading-relaxed">Possui uma localização privilegiada em Balneário
                                        Piçarras a poucos metros do mar, e é ideal para quem busca viver com o melhor
                                        lazer e qualidade de vida. Localizado em Balneário Piçarras - Santa Catarina.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-10 mt-20 text-left" data-aos="slide-right">
                        <!-- <hr class="hr-title mb-5" style="width: 70px;" /> -->
                        <h1 class="title-font text-2xl font-semibold text-white">Parceria Grupo HV e Daxo Incorporadora
                        </h1>
                    </div>
                    <div class="-m-4 flex flex-wrap">
                        <div class="p-4 md:w-1/3" data-aos="slide-up">
                            <div class="border-opacity/60 h-full border-2 border-gray-200">
                                <img src="../assets/imgs/kaa.png" alt="Kaá">
                                <div class="p-6">
                                    <hr class="hr-title" />
                                    <h1 class="title-font mb-3 text-xl font-bold text-white">Kaá
                                    </h1>
                                    <p class="mb-3 leading-relaxed">O paisagismo do Kaá propõe espaços onde você e sua
                                        família sentem a presença do verde com plantas, flores e árvores frutíferas. Seu
                                        jardim para cultivar bons momentos. Localizado em Joinville - Santa Catarina.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="vl-divider" />

            <section id="group" class="body-font bg-secondary">
                <div class="px-5 py-24 lg:px-10">
                    <div class="mb-10 flex w-full flex-col text-left" data-aos="slide-right">
                        <hr class="hr-title mb-5" style="width: 70px;" />
                        <h1 class="title-font text-4xl font-bold text-white">Empresas do grupo</h1>
                        <p class="text-base font-bold leading-relaxed text-accent">FAZEMOS PARTE DE UM GRUPO
                            INCRÍVEL</p>
                    </div>
                    <div class="divider divider-vertical mb-10"></div>
                    <div class="-m-4 mx-12 flex flex-col items-center justify-center sm:mx-1 sm:flex-row sm:flex-wrap">
                        <div class="w-72 p-4 md:w-1/2 lg:w-1/3" data-aos="slide-up">
                            <div class="flex h-full flex-col items-center text-center">
                                <img alt="team" class="mb-4 w-full shrink-0 object-cover object-center"
                                    src="../assets/imgs/grupo_hv_branco.png">
                            </div>
                        </div>
                        <div class="p-4 md:w-1/2 lg:w-1/4" data-aos="slide-up">
                            <div class="flex h-full flex-col items-center text-center">
                                <img alt="team" class="mb-4 w-full shrink-0 object-cover object-center"
                                    src="../assets/imgs/hv_select_branco.png">
                            </div>
                        </div>
                        <div class="w-72 p-4 md:w-1/2 lg:w-1/3" data-aos="slide-up">
                            <div class="flex h-full flex-col items-center text-center">
                                <img alt="team" class="mb-4 w-full shrink-0 object-cover object-center"
                                    src="../assets/imgs/hv_invest_branco.png">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="vl-divider" />

            <Contact></Contact>
        </Page>
    </div>
    <div v-if="loading">
        <div class="spinner">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>
    </div>
</template>

<script>
import Page from '../components/Page.vue';
import Contact from '../components/Contact.vue';
import Tradingview from '../components/Tradingview.vue';
// import BarChart from '../components/BarChart.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import AOS from "aos";
// import { Swiper, SwiperSlide } from "swiper/vue";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import { Autoplay, Pagination, Navigation } from "swiper";

export default {
    name: "home-page",
    components: {
        Page,
        Contact,
        FontAwesomeIcon,
        Tradingview,
        // BarChart,
        // Swiper,
        // SwiperSlide,
    },
    // setup() {
    //     return {
    //         pagination: {
    //             clickable: true,
    //             el: '.swiper-pagination',
    //             bulletClass: 'swiper-pagination-bullet',
    //             bulletActiveClass: 'swiper-pagination-bullet-active'
    //         },
    //         breakpoints: {
    //             322: {
    //                 slidesPerView: 1,
    //             },
    //             640: {
    //                 slidesPerView: 1.5,
    //             },
    //             1024: {
    //                 slidesPerView: 3,
    //             },
    //         },
    //         autoplay: {
    //             delay: 80000,
    //             disableOnInteraction: false
    //         },
    //         modules: [Autoplay, Pagination, Navigation],
    //     };
    // },
    data() {
        return {
            loading: true,
            window: {
                width: 0,
                height: 0
            }
        };
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
        document.documentElement.setAttribute('data-theme', 'select');
    },
    beforeMount() {
        setTimeout(() => {
            this.loading = false;
        }, 2000);
    },
    mounted() {
        AOS.init();
        setTimeout(() => {
            AOS.refresh();
        }, 2000);
    },
    unmounted() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },
        toggleModal() {
            if (document.body.classList.contains("modal-open")) {
                document.body.classList.remove("modal-open");
            } else {
                document.body.classList.add("modal-open");
            }
        }
    }
};

</script>

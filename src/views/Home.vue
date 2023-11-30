<template>
    <div v-if="!loading">
        <Page>
            <section id="hero" class="body-font bg-primary" style="font-family:'Dubai Regular'">
                <div class="hero-bg-image sm:sm-hero-bg-image md:max-lg:bg-pos-75-20 hero bg-secondary">
                    <!-- bg-[url('/src/assets/imgs/hero.jpg')] -->
                    <div class="hero-content flex w-full flex-wrap gap-0 pb-0">
                        <div class="basis-[95%] lg:basis-5/12" data-aos="slide-right">
                            <!-- <hr class="hr-title w-[70px]" /> -->
                            <h1 class="px-3 pt-6 text-4xl font-extrabold uppercase leading-[55px] text-white"
                                style="font-family:'Dubai Bold'">Eleve seu portfólio
                                com ativos que rendem</h1>
                            <h1 class="pb-6 text-4xl font-bold uppercase text-white" style="font-family:'Dubai Bold'"><span
                                    class="bg-[#fabd05] px-3">acima de 18%
                                    ao ano.</span></h1>
                            <span class="text-xl font-semibold text-white">Nossa prioridade é preservar, adaptar ao perfil e
                                às necessidades de
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

            <section class="bg-[#181818] tracking-widest" style="font-family:'Dubai Regular'">
                <div class="lg:flex lg:flex-wrap">
                    <div class="p-4 lg:w-1/3" data-aos="zoom-in">
                        <div class="flex flex-wrap items-center justify-center p-8">
                            <!-- <FontAwesomeIcon icon="fa-handshake" class="h-20 text-warning" /> -->
                            <img class="h-20" src="/src/assets/imgs/porquin.svg" />
                            <h2 class="title-font ml-3 text-lg uppercase text-white">Renda<br /><span
                                    class="font-bold">Fixa</span></h2>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/3" data-aos="zoom-in">
                        <div class="flex flex-wrap items-center justify-center p-8">
                            <img class="h-20" src="/src/assets/imgs/graf.svg" />
                            <h2 class="title-font ml-3 text-lg uppercase text-white">Renda<br /><span
                                    class="font-bold">Variável</span></h2>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/3" data-aos="zoom-in">
                        <div class="flex flex-wrap items-center justify-center p-8">
                            <img class="h-20" src="/src/assets/imgs/lamp.svg" />
                            <h2 class="title-font ml-3 text-lg uppercase text-white">Outras<br /><span
                                    class="font-bold">Soluções</span></h2>
                        </div>
                    </div>
                </div>
            </section>

            <section class="flex justify-center bg-secondary">
                <div
                    class="flex h-[30rem] w-full justify-center bg-[url('/src/assets/imgs/circulo.png')] bg-center bg-no-repeat max-sm:bg-[length:400px_200px] lg:mt-32 lg:h-[30rem] lg:max-w-[80rem]">
                    <div
                        class="mt-44 w-full text-center text-[3rem] uppercase leading-none text-white lg:mt-28 lg:text-[6rem]">
                        Este é o seu<br /><span class="text-[4rem] font-bold lg:text-[9rem]"
                            style="font-family:'Dubai Bold'">momento</span></div>
                </div>
            </section>

            <div class="vl-divider pt-5">
                <i class="gg-arrow-down"></i>
            </div>

            <section id="about" class="body-font bg-secondary px-36 pt-36 text-white" style="font-family:'Dubai Regular'">
                <div class="w-full px-5 py-24 lg:px-10">
                    <div class="items-left mb-20  flex flex-col flex-wrap text-left" data-aos="slide-right">
                        <h1 class="title-font text-4xl font-bold text-white">Como funciona a</h1>
                        <br />
                        <h1 class="title-font text-[8rem] font-bold uppercase leading-none text-white"
                            style="font-family:'Dubai Bold'">Momentum</h1>
                    </div>
                    <div class="-m-4 flex flex-wrap text-center">
                        <div class="p-4 md:w-1/2 xl:w-1/4" data-aos="slide-up">
                            <div class="h-96 border-[3px] border-white px-12">
                                <p class="-mt-6A -ml-12 mb-4 w-min bg-white p-2 text-left text-2xl font-bold text-black">.01
                                </p>
                                <h2 class="title-font mb-2 text-4xl font-bold uppercase text-white"
                                    style="font-family:'Dubai Bold'">Entender o Cliente</h2>
                                <hr class="hr-title m-auto my-5 w-full !border-[#fabd05]" />
                                <p class="text-base leading-relaxed">Quais as necessidades do cliente, objectivos, perfil de
                                    investimentos e o seu momento de vida</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/2 xl:w-1/4" data-aos="slide-up">
                            <div class="h-96 border-[3px] border-white px-12">
                                <p class="-mt-6A -ml-12 mb-4 w-min bg-white p-2 text-left text-2xl font-bold text-black">.01
                                </p>
                                <h2 class="title-font mb-2 text-4xl font-bold uppercase text-white"
                                    style="font-family:'Dubai Bold'">Planejamento</h2>
                                <hr class="hr-title m-auto my-5 w-full !border-[#fabd05]" />
                                <p class="text-base leading-relaxed">Contrução de uma estratégia customizada, diversificada
                                    e considerando as melhores alterantivas de acodo com o seu perfil de investimentos</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/2 xl:w-1/4" data-aos="slide-up">
                            <div class="h-96 border-[3px] border-white px-12">
                                <p class="-mt-6A -ml-12 mb-4 w-min bg-white p-2 text-left text-2xl font-bold text-black">.01
                                </p>
                                <h2 class="title-font mb-2 text-4xl font-bold uppercase text-white"
                                    style="font-family:'Dubai Bold'">Implementação</h2>
                                <hr class="hr-title m-auto my-5 w-full !border-[#fabd05]" />
                                <p class="text-base leading-relaxed">Sekeção de produtos do mercado global da nossa
                                    plataforma aberta de investimentos</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/2 xl:w-1/4" data-aos="slide-up">
                            <div class="h-96 border-[3px] border-white px-12">
                                <p class="-mt-6A -ml-12 mb-4 w-min bg-white p-2 text-left text-2xl font-bold text-black">.01
                                </p>
                                <h2 class="title-font mb-2 text-4xl font-bold uppercase text-white"
                                    style="font-family:'Dubai Bold'">Cenários Externos</h2>
                                <hr class="hr-title m-auto my-5 w-full !border-[#fabd05]" />
                                <p class="text-base leading-relaxed">Nossos especialistas analisam os cenários locais e
                                    globais a cronstrução de um protifólio conforme seus objetivos</p>
                            </div>
                        </div>
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
import AOS from "aos";

export default {
    name: "home-page",
    components: {
        Page,
        Contact,
    },
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
        AOS.refresh();
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

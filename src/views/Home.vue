<template>
    <div v-if="!loading">
        <Page>
            <section id="hero" class="body-font bg-secondary" style="font-family:'Dubai Regular'">
                <div class="hero">
                    <div class="hero-content flex w-full flex-wrap gap-0 pb-0">
                        <div class="basis-[95%] md:basis-5/12" data-aos=""> <!-- slide-right -->
                            <h1 class="px-3 pt-6 text-3xl font-extrabold uppercase text-white max-sm:mb-1 lg:text-4xl lg:leading-[55px]"
                                style="font-family:'Dubai Bold'">Eleve seu portfólio
                                com ativos que rendem</h1>
                            <h1 class="pb-6 text-3xl font-bold uppercase text-white lg:text-4xl"
                                style="font-family:'Dubai Bold'"><span class="bg-[#fabd05] px-3">acima de 18%
                                    ao ano.</span></h1>
                            <span class="text-lg font-semibold text-white lg:text-xl">Nossa prioridade é preservar, adaptar
                                ao perfil e
                                às necessidades de
                                cada cliente, buscando as melhores oportunidades de investimento local e
                                internacional.</span>
                            <div class="div mt-10 flex flex-wrap md:max-lg:mb-16">
                                <a href="#about" class="btn border-0 bg-[#fabd05] font-bold text-white lg:ml-36 xl:ml-60">Comece
                                    agora</a>
                                <a href="#about" class="btn btn-ghost ml-5 border-0 font-bold text-white">Saiba Mais</a>
                            </div>
                        </div>
                        <div class="mt-10 h-80 basis-80 bg-[url('/src/assets/imgs/Imagem_TOPO_01.png')] bg-contain bg-no-repeat lg:h-[635px] lg:basis-1/2"
                            data-aos=""> <!-- slide-right -->
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-[#181818] tracking-widest" style="font-family:'Dubai Regular'">
                <div class="md:flex md:flex-wrap">
                    <div class="p-4 md:w-1/3" data-aos=""> <!-- zoom-in -->
                        <div class="flex flex-wrap items-center justify-center p-8">
                            <!-- <FontAwesomeIcon icon="fa-handshake" class="h-20 text-warning" /> -->
                            <img class="h-20" src="/src/assets/imgs/porquin.svg" />
                            <h2 class="title-font ml-3 text-lg uppercase text-white">Renda<br /><span
                                    class="font-bold">Fixa</span></h2>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3" data-aos=""> <!-- zoom-in -->
                        <div class="flex flex-wrap items-center justify-center p-8">
                            <img class="h-20" src="/src/assets/imgs/graf.svg" />
                            <h2 class="title-font ml-3 text-lg uppercase text-white">Renda<br /><span
                                    class="font-bold">Variável</span></h2>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3" data-aos=""> <!-- zoom-in -->
                        <div class="flex flex-wrap items-center justify-center p-8">
                            <img class="h-20" src="/src/assets/imgs/lamp.svg" />
                            <h2 class="title-font ml-3 text-lg uppercase text-white">Outras<br /><span
                                    class="font-bold">Soluções</span></h2>
                        </div>
                    </div>
                </div>
            </section>

            <section class="flex justify-center bg-secondary">
                <div class="flex h-[30rem] w-full justify-center bg-[url('/src/assets/imgs/circulo.png')] bg-center bg-no-repeat max-md:bg-[length:500px_250px] max-sm:bg-[length:400px_200px] max-xs:bg-[length:300px_150px] lg:mt-32 lg:max-w-[80rem]"
                    data-aos=""> <!-- zoom-in -->
                    <div
                        class="mt-44 w-full text-center text-[2rem] uppercase leading-none text-white sm:text-[4rem] md:text-[5rem] lg:mt-28 lg:text-[6rem]">
                        Este é o seu<br /><span class="text-[3.5rem] font-bold xs:text-[3.8rem] sm:text-[7rem] md:text-[8rem] lg:text-[9rem]"
                            style="font-family:'Dubai Bold'">momento</span></div>
                </div>
            </section>

            <div class="vl-divider pt-5">
                <i class="gg-arrow-down"></i>
            </div>

            <section id="how" class="body-font bg-secondary pt-36 text-white lg:px-36" style="font-family:'Dubai Regular'">
                <div class="w-full px-5 py-24 lg:px-10">
                    <div class="items-left mb-20 flex flex-col flex-wrap text-left" data-aos=""> <!-- slide-right -->
                        <h1 class="title-font text-xl font-bold text-white lg:text-4xl">Como funciona a</h1>
                        <br />
                        <h1 class="title-font text-[3rem] font-bold uppercase leading-none text-white sm:text-[4rem] md:text-[6rem] lg:text-[8rem]"
                            style="font-family:'Dubai Bold'">Momentum</h1>
                    </div>
                    <div class="-m-4 flex flex-wrap text-center">
                        <div class="w-full p-4 sm:w-1/2 2xl:w-1/4" data-aos=""> <!-- slide-up -->
                            <div class="h-96 border-[3px] border-white px-12">
                                <p class="-mt-6A -ml-12 mb-4 w-min bg-white p-2 text-left text-2xl font-bold text-black">.01
                                </p>
                                <div class="max-md:-mx-11">
                                    <h2 class="title-font mb-2 text-2xl font-bold uppercase text-white"
                                        style="font-family:'Dubai Bold'">Entender o Cliente</h2>
                                    <hr class="hr-title m-auto my-5 w-full !border-[#fabd05]" />
                                    <p class="text-lg leading-relaxed">Analisamos as necessidades, objetivos, perfil do
                                        investidor e o seu momento de vida.</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full p-4 sm:w-1/2 2xl:w-1/4" data-aos=""> <!-- slide-up -->
                            <div class="h-96 border-[3px] border-white px-12">
                                <p class="-mt-6A -ml-12 mb-4 w-min bg-white p-2 text-left text-2xl font-bold text-black">.02
                                </p>
                                <div class="max-md:-mx-11">
                                    <h2 class="title-font mb-2 text-2xl font-bold uppercase text-white"
                                        style="font-family:'Dubai Bold'">Planejamento</h2>
                                    <hr class="hr-title m-auto my-5 w-full !border-[#fabd05]" />
                                    <p class="text-lg leading-relaxed">Nossos especialista criam uma estratégia
                                        personalizada e diversificada, considerando as melhores opções, de acordo com o
                                        perfil do investidor.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full p-4 sm:w-1/2 2xl:w-1/4" data-aos=""> <!-- slide-up -->
                            <div class="h-96 border-[3px] border-white px-12">
                                <p class="-mt-6A -ml-12 mb-4 w-min bg-white p-2 text-left text-2xl font-bold text-black">.03
                                </p>
                                <div class="max-md:-mx-11">
                                    <h2 class="title-font mb-2 text-2xl font-bold uppercase text-white"
                                        style="font-family:'Dubai Bold'">Implementação</h2>
                                    <hr class="hr-title m-auto my-5 w-full !border-[#fabd05]" />
                                    <p class="text-lg leading-relaxed">Seleção de produtos do mercado local e global,
                                        através da nossa equipe de especialistas.</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full p-4 sm:w-1/2 2xl:w-1/4" data-aos=""> <!-- slide-up -->
                            <div class="h-96 border-[3px] border-white px-12">
                                <p class="-mt-6A -ml-12 mb-4 w-min bg-white p-2 text-left text-2xl font-bold text-black">.04
                                </p>
                                <div class="max-[1800px]:-mx-12">
                                    <h2 class="title-font -ml-5 mb-2 text-2xl font-bold uppercase text-white"
                                        style="font-family:'Dubai Bold'">Acompanhamento</h2>
                                    <hr class="hr-title m-auto my-5 w-full !border-[#fabd05]" />
                                    <p class="text-lg leading-relaxed">Monitoramento dos resultados e adaptação das
                                        estratégias, caso necessário.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="vl-divider" />

            <section id="about" class="body-font bg-secondary text-white lg:-mb-24" style="font-family:'Dubai Regular'">
                <div v-if="window.width <= 1024">
                    <div class="flex w-full justify-center bg-[url('/src/assets/imgs/circulo.png')] bg-[length:400px_200px] bg-center bg-no-repeat"
                        data-aos=""> <!-- zoom-in -->
                        <div class=" mx-5 text-left text-[3rem] leading-none text-white">
                            <h1 class="mb-10 text-4xl uppercase">Quem<br /><span class="text-6xl font-extrabold"
                                    style="font-family:'Dubai Bold'">somos</span></h1>
                            <span class="text-justify text-xl">
                                <p>A Momentum Invest é uma gestora de recursos privados atuante no mercado local e
                                    internacional, comprometida com a ética, rentabilidade e preservação do capital.</p>
                                <br />
                                <p>Com uma abordagem única na avaliação de empresas, especialmente Small Caps, a empresa
                                    atua
                                    como sócia, defendendo os interesses dos investidores. Seus resultados consistentes e
                                    progressivos, superando índices de referência e o mercado, são atribuídos à pesquisa
                                    independente e à recusa em ser influenciada por opiniões externas.</p>
                                <br />
                                <p>Além disso, a Momentum Invest promove a educação financeira contínua, capacitando
                                    investidores na tomada de decisão em relação aos seus investimentos.</p>
                            </span>

                        </div>
                    </div>
                </div>
                <div v-if="window.width >= 1024" class="flex">
                    <div
                        class="-mt-96 ml-[-30rem] w-1/2 -rotate-45 bg-[url('/src/assets/imgs/circulo.png')] bg-[length:800px_400px] bg-[center_right] bg-no-repeat lg:pl-36">
                    </div>
                    <div class="w-full px-5 py-24 lg:mt-32 lg:pr-60">
                        <div class="items-left flex flex-col flex-wrap text-left" data-aos=""> <!-- slide-right -->
                            <h1 class="mb-10 text-4xl uppercase">Quem<br /><span class="text-6xl font-extrabold"
                                    style="font-family:'Dubai Bold'">somos</span></h1>
                            <span class="text-justify text-xl">
                                <p>A Momentum Invest é uma gestora de recursos privados atuante no mercado local e
                                    internacional, comprometida com a ética, rentabilidade e preservação do capital.</p>
                                <p>Com uma abordagem única na avaliação de empresas, especialmente Small Caps, a empresa
                                    atua
                                    como sócia, defendendo os interesses dos investidores. Seus resultados consistentes e
                                    progressivos, superando índices de referência e o mercado, são atribuídos à pesquisa
                                    independente e à recusa em ser influenciada por opiniões externas.</p>
                                <p>Além disso, a Momentum Invest promove a educação financeira contínua, capacitando
                                    investidores na tomada de decisão em relação aos seus investimentos.</p>
                            </span>
                        </div>
                    </div>
                    <div class="relative -mt-52 h-screen w-1/5">
                        <div class="absolute inset-0 bg-[url('/src/assets/imgs/circles.png')] bg-right bg-no-repeat"></div>
                    </div>
                </div>
            </section>

            <section id="platform" class="body-font bg-secondary text-white lg:pb-20" style="font-family:'Dubai Regular'">
                <img v-if="window.width <= 1024" class="pt-20 lg:w-3/4" src="/src/assets/imgs/plataforma2.png">
                <div class="flex">
                    <img v-if="window.width >= 1024" class="mt-20 w-3/4 object-contain" src="/src/assets/imgs/plataforma.png">
                    <div class="ml-5 flex w-2/3 flex-col justify-center lg:ml-20 lg:mt-20 lg:w-1/4">
                        <h1 class="mb-10 text-4xl">NOSSA<br /><span class="text-[2.7rem] font-extrabold sm:text-6xl"
                                style="font-family:'Dubai Bold'">PLATAFORMA</span></h1>
                        <p class="text-xl">
                            Bem-vindo à nossa plataforma, a sua parceira confiável para otimizar seus investimentos. Nossa
                            plataforma de gerenciamento de investimento foi projetada para atender às suas necessidades
                            financeiras, independentemente do seu nível de experiência.</p>
                    </div>
                    <div class="relative -mt-72 h-screen w-1/3 lg:-mt-32 lg:w-1/5">
                        <div
                            class="absolute inset-0 bg-[url('/src/assets/imgs/explore.svg')] bg-[right_2.5rem] bg-no-repeat max-sm:bg-[right_21rem]">
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
            loading: false, //TODO: voltar para true
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
    },
    mounted() {
        AOS.init();
        AOS.refresh();
        document.onreadystatechange = () => {
            if (document.readyState == "complete") {
                this.loading = false;
            }
        }
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

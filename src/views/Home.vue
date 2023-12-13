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
                <div class="flex h-[30rem] w-full justify-center bg-[url('/src/assets/imgs/circulo.png')] bg-center bg-no-repeat max-sm:bg-[length:400px_200px] lg:mt-32 lg:h-[30rem] lg:max-w-[80rem]"
                    data-aos="zoom-in">
                    <div
                        class="mt-44 w-full text-center text-[3rem] uppercase leading-none text-white lg:mt-28 lg:text-[6rem]">
                        Este é o seu<br /><span class="text-[4rem] font-bold lg:text-[9rem]"
                            style="font-family:'Dubai Bold'">momento</span></div>
                </div>
            </section>

            <div class="vl-divider pt-5">
                <i class="gg-arrow-down"></i>
            </div>

            <section id="about" class="body-font bg-secondary pt-36 text-white lg:px-36"
                style="font-family:'Dubai Regular'">
                <div class="w-full px-5 py-24 lg:px-10">
                    <div class="items-left mb-20 flex flex-col flex-wrap text-left" data-aos="slide-right">
                        <h1 class="title-font text-xl font-bold text-white lg:text-4xl">Como funciona a</h1>
                        <br />
                        <h1 class="title-font text-[4rem] font-bold uppercase leading-none text-white lg:text-[8rem]"
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
                                <p class="-mt-6A -ml-12 mb-4 w-min bg-white p-2 text-left text-2xl font-bold text-black">.02
                                </p>
                                <h2 class="title-font -ml-3 mb-2 text-4xl font-bold uppercase text-white"
                                    style="font-family:'Dubai Bold'">Planejamento</h2>
                                <hr class="hr-title m-auto my-5 w-full !border-[#fabd05]" />
                                <p class="text-base leading-relaxed">Contrução de uma estratégia customizada, diversificada
                                    e considerando as melhores alterantivas de acodo com o seu perfil de investimentos</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/2 xl:w-1/4" data-aos="slide-up">
                            <div class="h-96 border-[3px] border-white px-12">
                                <p class="-mt-6A -ml-12 mb-4 w-min bg-white p-2 text-left text-2xl font-bold text-black">.03
                                </p>
                                <h2 class="title-font -ml-5 mb-2 text-4xl font-bold uppercase text-white"
                                    style="font-family:'Dubai Bold'">Implementação</h2>
                                <hr class="hr-title m-auto my-5 w-full !border-[#fabd05]" />
                                <p class="text-base leading-relaxed">Sekeção de produtos do mercado global da nossa
                                    plataforma aberta de investimentos</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/2 xl:w-1/4" data-aos="slide-up">
                            <div class="h-96 border-[3px] border-white px-12">
                                <p class="-mt-6A -ml-12 mb-4 w-min bg-white p-2 text-left text-2xl font-bold text-black">.04
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

            <section id="about2" class="body-font flex bg-secondary text-white" style="font-family:'Dubai Regular'">
                <div
                    class="-mt-96 ml-[-30rem] flex w-1/2 -rotate-45 bg-[url('/src/assets/imgs/circulo.png')] bg-[length:800px_400px] bg-[center_right] bg-no-repeat lg:pl-36">
                </div>
                <!-- <div class="flex h-[30rem] bg-cover w-full bg-left-bottom bg-[url('/src/assets/imgs/circulo.png')] bg-no-repeat max-sm:bg-[length:400px_200px] lg:mt-32 lg:h-[30rem] lg:max-w-[80rem]"></div> -->
                <div class="w-full px-5 py-24 lg:mt-32 lg:pr-60">
                    <div class="items-left mb-20 flex flex-col flex-wrap text-left" data-aos="slide-right">
                        <h1 class="title-font mb-12 text-xl font-bold text-white lg:text-[4rem]"
                            style="font-family:'Dubai Bold'">
                            Quem somos</h1>
                        <span class="text-justify text-lg">
                            <p>A Momentum Invest é uma gestora de recursos privados que atua no mercado local e
                                internacional.</p>
                            <p>Nossa missão é gerir os recursos dos clientes de forma ética e diligente, com foco em
                                rentabilidade, controle de risco e preservação do capital.</p>
                            <p>Com uma metodologia proprietária e diferenciada, nossos produtos vão muito além dos padrões
                                do mercado. Desenvolvemos um processo único de avaliação de empresas com foco em Small Caps,
                                nem por isso deixando de identificar e avaliar as melhores oportunidades do mercado,
                                independente do tamanho das empresas. Temos mentalidade de donos e, quando investimos em um
                                negócio, nos sentimos como sócios: defendendo os interesses de nossos investidores, buscando
                                sempre as melhores práticas de governança.</p>
                            <p>Desta forma, acreditamos que estamos aptos a gerar resultados consistentes e progressivos no
                                longo prazo, como já atestado pelos retornos proporcionados pelos nossos fundos, muito acima
                                dos índices de referência e muito acima do mercado. Isto porque utilizamos nossa pesquisa
                                independente de fato, sem nos deixar influenciar pela opinião de terceiros ou consensuais.
                                Essa é uma das razões dos nossos resultados diferenciados. Mas não paramos aí. Nosso
                                processo de aprendizado é incessante, sempre com mentalidade e disposição para a aprender e
                                entender. Acreditamos na educação financeira continuada e dessa forma compartilhamos nosso
                                conhecimento com nossos investidores através de resenhas mensais e lives semanais, além das
                                diversas mídias digitais. Dessa forma, nosso público e investidores estarão aptos a tomarem
                                as decisões de investimentos que melhor atendam às próprias necessidades e aspirações
                                embasadas em seu próprio conhecimento.</p>
                        </span>
                    </div>
                </div>
                <div class="relative -mt-52 h-screen w-1/5">
                    <div class="absolute inset-0 bg-[url('/src/assets/imgs/circles.png')] bg-right bg-no-repeat"></div>
                </div>

                <!-- <div class="flex w-1/5 bg-[url('/src/assets/imgs/circles.png')] bg-right bg-no-repeat"></div> -->
            </section>

            <section id="platform" class="body-font bg-secondary pb-20 text-white" style="font-family:'Dubai Regular'">
                <!-- <img class="ml-[50rem] -mt-[15rem] mb-[15rem]" src="/src/assets/imgs/yellow-circle.svg"> -->
                <div class="flex">
                    <img class="mt-20 w-3/4" src="/src/assets/imgs/plataforma.png">
                    <div class="ml-20 mt-20 w-1/4">
                        <h1 class="mb-10 text-4xl">NOSSA<br /><span class="text-6xl font-extrabold"
                                style="font-family:'Dubai Bold'">PLATAFORMA</span></h1>
                        <p class="text-lg">
                            Bem-vindo à nossa plataforma, a sua parceira confiável para otimizar seus investimentos. Nossa
                            plataforma de gerenciamento de investimento foi projetada para atender às suas necessidades
                            financeiras, independentemente do seu nível de experiência.</p>
                        <br />
                        <p class="text-lg">
                            Com ferramentas avançadas, análises precisas e uma equipe de especialistas prontos para ajudar,
                            você
                            terá o controle total de seus investimentos. Ajudamos você a tomar decisões informadas e a
                            maximizar
                            seu potencial de crescimento financeiro.</p>
                        <br />
                        <p class="text-lg">
                            Descubra uma maneira mais inteligente de investir com [Nome da Plataforma]. Explore nossos
                            recursos,
                            comece a criar sua carteira e comece a trilhar o caminho para o sucesso financeiro. Seu futuro
                            está
                            a apenas alguns cliques de distância.</p>
                        <br />
                        <p class="text-lg">
                            Pronto para embarcar na jornada rumo ao sucesso financeiro?
                            Junte-se a nós hoje e descubra como podemos ajudá-lo a alcançar seus objetivos de investimento.
                        </p>
                    </div>
                    <div class="relative -mt-32 h-screen w-1/5">
                        <div class="absolute inset-0 bg-[url('/src/assets/imgs/explore.svg')] bg-right bg-no-repeat"></div>
                    </div>
                </div>
            </section>

            <div class="vl-divider" />

            <!-- <section id="properties" class="body-font bg-secondary">
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

            <div class="vl-divider" />-->

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

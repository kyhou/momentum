<template>
    <section id="contact" class="body-font bg-primary text-white" style="font-family:'Dubai Regular'">
        <!-- data-aos="zoom-in"> -->
        <div class="mx-auto flex flex-col items-center justify-between px-10 py-24 text-center font-bold lg:flex-row"> 
            <div class="mb-5 flex flex-row justify-center">
                <a href="https://www.instagram.com/" target="_blank" class="btn btn-circle mr-2">
                    <FontAwesomeIcon icon="fa-brands fa-instagram" class="h-8 w-8" />
                </a>
                <a target="_blank" class="btn btn-circle">
                    <FontAwesomeIcon icon="fa-brands fa-whatsapp" class="h-8 w-8" />
                </a>
            </div>
            <div class="max-sm:mb-10">
                <span class="text-5xl uppercase">Vamos conversar?</span>
            </div>
            <div>
                <a>
                    <button class="btn">Entre em contato</button>
                </a>
            </div>
        </div>
    </section>

    <!-- <section id="map" style="font-family:'Dubai Regular'">
        <div v-if="window.width <= 1024" class="relative flex flex-wrap bg-secondary py-6 shadow-md">
            <div class="mt-4 px-6 lg:mt-0 lg:w-1/2">
                <h2 class="title-font text-xs font-bold tracking-widest text-white md:text-lg">Email</h2>
                <a class="leading-relaxed text-neutral">consultoria@momentuminvest.com</a>
                <h2 class="title-font mt-4 text-xs font-bold tracking-widest text-white md:text-lg">Telefone</h2>
                <p class="leading-relaxed text-neutral">(47) 9 9999-9999</p>
            </div>
        </div>
        <div class="body-font relative bg-secondary text-white">
            <div class="container mx-auto flex flex-wrap justify-start py-24 sm:flex-nowrap">
                <div class="mt-5 flex items-end justify-end overflow-hidden p-10 sm:mr-10 lg:bg-neutral">
                    <iframe title="map" class="absolute inset-0" style="filter: opacity(0.5);"
                        marginheight="0" marginwidth="0" scrolling="no" referrerpolicy="no-referrer-when-downgrade"
                        :src="'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.1582430589074!2d-48.835552624807335!3d-26.321374968755805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb1044776605d%3A0x79bc9326caa57798!2sR.%20Graciosa%2C%20697%20-%20104%20-%20Guanabara%2C%20Joinville%20-%20SC%2C%2089207-100!5e0!3m2!1spt-BR!2sbr!4v1691688044509!5m2!1spt-BR!2sbr' + (window.width > 640 ? '&center=-26.320321959223207,-48.82469504282277' : '')"
                        width="100%" height="100%" frameborder="0" loading="lazy">
                    </iframe>
                    <div v-if="window.width > 1024" class="relative flex flex-wrap bg-black py-6 shadow-md">
                        <div class="px-6 lg:w-1/2">
                            <h2 class="title-font font-bold tracking-widest text-white">Endereço</h2>
                            <p class="mt-1">Rua [ENDEREÇO], [NUMERO], [COMPLEMENTO] - [BAIRRO], Joinville - SC</p>
                        </div>
                        <div class="mt-4 px-6 lg:mt-0 lg:w-1/2">
                            <h2 class="title-font font-bold tracking-widest text-white">Email</h2>
                            <a class="leading-relaxed text-neutral">consultoria@momentuminvest.com</a>
                            <h2 class="title-font mt-4 font-bold tracking-widest text-white">Telefone</h2>
                            <p class="leading-relaxed text-neutral">(47) 9 9999-9999</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import AOS from "aos";

export default {
    name: "contact-component",
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            content: "",
            window: {
                width: 0,
                height: 0
            }
        };
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    mounted() {
        AOS.init();
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
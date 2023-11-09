<template>
    <section id="contact" class="body-font bg-neutral text-white">
        <div class="mx-auto flex flex-col justify-between px-10 py-24 text-center font-bold lg:flex-row" data-aos="zoom-in">
            <div class="mb-5 flex flex-row justify-center">
                <a href="https://www.instagram.com/grupohvselect/" target="_blank" class="btn btn-circle mr-2">
                    <FontAwesomeIcon icon="fa-brands fa-instagram" class="h-8 w-8" />
                </a>
                <a href="https://api.whatsapp.com/send/?phone=%2B554792307554&text=Ol%C3%A1,+visitei+o+site+e+gostaria+de+maiores+informa%C3%A7%C3%B5es.&app_absent=0"
                    target="_blank" class="btn btn-circle">
                    <FontAwesomeIcon icon="fa-brands fa-whatsapp" class="h-8 w-8" />
                </a>
            </div>
            <div class="mb-10">
                <span class="text-5xl lowercase">Vamos conversar?</span>
            </div>
            <div>
                <a
                    href="https://api.whatsapp.com/send/?phone=%2B554792307554&amp;text=Ol%C3%A1,+visitei+o+site+e+gostaria+de+maiores+informa%C3%A7%C3%B5es.&amp;app_absent=0">
                    <button class="btn btn-outline btn-accent text-black">Entre em contato</button>
                </a>
            </div>
        </div>
    </section>

    <section id="map">
        <div v-if="window.width <= 1024" class="relative flex flex-wrap bg-black py-6 shadow-md">
            <div class="mt-4 px-6 lg:mt-0 lg:w-1/2">
                <h2 class="title-font text-xs font-bold tracking-widest text-white md:text-lg">email</h2>
                <a class="leading-relaxed text-accent">consultoria@hvinvestimentos.com</a>
                <h2 class="title-font mt-4 text-xs font-bold tracking-widest text-white md:text-lg">telefone</h2>
                <p class="leading-relaxed">(47) 9 9230-7554</p>
            </div>
        </div>
        <div class="body-font relative bg-base-200 text-white">
            <div v-if="window.width > 1024" class="container flex grow justify-evenly px-5 py-24 sm:flex-nowrap">
                <div class="flex items-end justify-end overflow-hidden p-10 sm:mr-10 lg:bg-neutral">
                    <div class="relative flex flex-wrap bg-black py-6 shadow-md">
                        <div class="mt-4 px-6 lg:mt-0 lg:w-1/2">
                            <h2 class="title-font text-xs font-bold tracking-widest text-white">email</h2>
                            <a class="leading-relaxed text-accent">consultoria@hvinvestimentos.com</a>
                            <h2 class="title-font mt-4 text-xs font-bold tracking-widest text-white">telefone</h2>
                            <p class="leading-relaxed">(47) 9 9230-7554</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
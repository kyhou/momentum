<template>
    <header aria-label="Site Header" class="header sticky top-0 z-50 bg-header lg:px-24">
        <div class="navbar bg-navbar">
            <div class="navbar-start my-2 w-full">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="white">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabindex="0"
                        class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-secondary p-2 font-bold shadow">
                        <nav v-if="(this.$route.name == 'home') || (this.$route.fullPath == '/policies') || (this.$route.fullPath == '/institutional')"
                            aria-label="Site Nav" class="block">
                            <li>
                                <a class="link link-hover uppercase text-white transition" href="#about">
                                    Quem somos
                                </a>
                            </li>
                            <li>
                                <a class="link link-hover uppercase text-white transition" href="#platform">
                                    Plataforma
                                </a>
                            </li>
                            <li>
                                <a class="link link-hover uppercase text-white transition" href="#contact">
                                    Contato
                                </a>
                            </li>
                            <!-- <div class="divider m-0"></div>
                            <li class="menu-title text-neutral">
                                <span>Corporativo</span>
                            </li>
                            <li><router-link to="/policies" class="link link-hover text-white">Políticas</router-link>
                            </li>
                            <li><router-link to="/institutional"
                                    class="link link-hover text-white">Institucional</router-link></li> -->
                        </nav>
                        <MenuItems />
                    </ul>
                </div>
                <a class="w-45">
                    <span class="sr-only">Momentum Invest</span>
                    <a href="/" class="btn btn-ghost normal-case">
                        <img src="../assets/imgs/logotipo-invertida.svg" style="height: 2.5rem;" alt="Momentum Invest">
                    </a>
                </a>
            </div>
            <div class="navbar-center hidden w-1/2 lg:flex">
                <nav v-if="(this.$route.name == 'home') ||
                    (this.$route.fullPath == '/policies') ||
                    (this.$route.fullPath == '/institutional')" aria-label="Site Nav" class="ml-5 hidden lg:block">
                    <ul class="flex items-start gap-6 font-semibold">
                        <template
                            v-if="!((this.$route.fullPath == '/policies') || (this.$route.fullPath == '/institutional'))">
                            <li>
                                <a class="link link-hover uppercase text-white transition" href="#about">
                                    Quem somos
                                </a>
                            </li>
                            <li>
                                <a class="link link-hover uppercase text-white transition" href="#platform">
                                    Plataforma
                                </a>
                            </li>
                            <li>
                                <a class="link link-hover uppercase text-white transition" href="#contact">
                                    Contato
                                </a>
                            </li>
                            <!-- <div class="dropdown dropdown-bottom">
                                <a tabindex="0" class="link link-hover text-white">Corporativo</a>
                                <ul tabindex="0" class="dropdown-content menu rounded-box w-52 bg-primary p-2 shadow">
                                    <li><router-link to="/policies"
                                            class="link link-hover text-white">Políticas</router-link></li>
                                    <li><router-link to="/institutional"
                                            class="link link-hover text-white">Institucional</router-link></li>
                                </ul>
                            </div> -->
                        </template>
                        <template v-else>
                            <li><router-link to="/policies"
                                    class="link link-hover text-white transition">Políticas</router-link>
                            </li>
                            <li><router-link to="/institutional"
                                    class="link link-hover text-white transition">Institucional</router-link></li>
                        </template>
                    </ul>
                </nav>
            </div>
            <div class="navbar-end max-sm:mr-3">
                <ul class="menu menu-horizontal hidden px-1 font-semibold lg:mr-3 lg:flex">
                    <MenuItems />
                </ul>
                <a v-if="!currentUser" class="btn-neutral btn font-bold" @click.prevent="logIn">Entrar</a>
                <a v-else class="btn-neutral btn font-bold" @click.prevent="logOut">Sair</a>
            </div>
        </div>
    </header>
    <!-- px-4 lg:px-24 -->
    <main class="wrapper" :class="$attrs.class">
        <slot></slot>
    </main>
    <footer class="footer footer-center bg-footer p-4 text-neutral lg:px-24">
        <div>
            <p>Copyright © Momentum - {{ new Date().getFullYear() }}. Todos os direitos reservados.</p>
        </div>
    </footer>
</template>

<script>
import MenuItems from "./MenuItems.vue";
import UsersDetailsService from "../services/users_details.service.js";

export default {
    name: "page-component",
    components: {
        MenuItems
    },
    data() {
        return {
            initials: "",
            window: {
                width: 0,
                height: 0
            },
            user: JSON.parse(localStorage.getItem('user')),
        }
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();

        document.documentElement.setAttribute('data-theme', 'select');
    },
    mounted() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            UsersDetailsService.getUserName(user.id).then(response => {
                this.initials = `${response.data.firstName ? response.data.firstName.slice(0, 1) : ''}${response.data.lastName ? response.data.lastName.slice(0, 1) : ''}`;
            });
        }
    },
    unmounted() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        logOut() {
            this.$store.dispatch('auth/logout');
            this.logIn();
        },
        logIn() {
            this.$router.push('/login');
        },
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },
    }
};
</script>
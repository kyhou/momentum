<template>
    <template v-if="showUserContent">
        <div class="divider m-0 opacity-100 sm:divider-horizontal"></div>
        <li class="menu-title lg:hidden">
            <span>usuário</span>
        </li>
        <li>
            <router-link to="/dashboard" class="link link-hover uppercase text-menu-text">meus investimentos</router-link>
        </li>
    </template>
    <template v-if="showColaboratorContent">
        <div class="divider m-0 text-menu-text opacity-100 sm:divider-horizontal"></div>
        <li class="menu-title lg:hidden">
            <span>colaborador</span>
        </li>
    </template>
    <template v-if="showAdminContent">
        <div class="divider m-0 text-menu-text opacity-100 sm:divider-horizontal"></div>
        <li class="menu-title lg:hidden">
            <span>admin</span>
        </li>
        <li class="lg:hidden">
            <router-link to="/admin/users" class="link link-hover text-menu-text">usuários</router-link>
            <router-link to="/admin/aportes" class="link link-hover text-menu-text">aportes</router-link>
            <router-link to="/admin/transactions" class="link link-hover text-menu-text">transações</router-link>
            <router-link to="/admin/withdraws" class="link link-hover text-menu-text">saques</router-link>
            <router-link to="/admin/profits" class="link link-hover text-menu-text">vigências</router-link>
        </li>
        <li class="max-lg:hidden" tabindex="0">
            <a class="uppercase text-menu-text">
                Admin
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
            </a>
            <ul class="bg-primary p-2">
                <li>
                    <router-link to="/admin/users" class="link link-hover text-menu-text">usuários</router-link>
                </li>
                <li>
                    <router-link to="/admin/aportes" class="link link-hover text-menu-text">aportes</router-link>
                </li>
                <li>
                    <router-link to="/admin/transactions" class="link link-hover text-menu-text">transações</router-link>
                </li>
                <li>
                    <router-link to="/admin/withdraws" class="link link-hover text-menu-text">saques</router-link>
                </li>
                <li>
                    <router-link to="/admin/profits" class="link link-hover text-menu-text">vigências</router-link>
                </li>
            </ul>
        </li>
    </template>
</template>

<script>
export default {
    name: "MenuItems",
    data() {
        return {
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
    unmounted() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        }
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
        showUserContent() {
            if (this.currentUser && this.currentUser['roles']) {
                return this.currentUser['roles'].includes('ROLE_USER');
            }

            return false;
        },
        showAdminContent() {
            if (this.currentUser && this.currentUser['roles']) {
                return this.currentUser['roles'].includes('ROLE_ADMIN');
            }

            return false;
        },
        showColaboratorContent() {
            if (this.currentUser && this.currentUser['roles']) {
                return this.currentUser['roles'].includes('ROLE_COLABORATOR');
            }

            return false;
        }
    }
}
</script>
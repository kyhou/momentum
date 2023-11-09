<template>
    <input type="checkbox" id="my-modal" class="modal-toggle" />
    <div ref="messageModal" class="modal" :class="message ? 'modal-open' : ''">
        <div class="modal-box">
            <h3 class="text-lg font-bold uppercase">Atenção!</h3>
            <p class="py-4" v-html="message"></p>
            <div class="modal-action">
                <label for="my-modal" class="btn uppercase" @click="closeModal">Ok!</label>
            </div>
        </div>
    </div>
</template>

<script>
import UserService from "../services/user.service";

export default {
    name: "MessageModal",
    data() {
        return {
            user: JSON.parse(localStorage.getItem('user')),
            message: "",
        };
    },
    mounted() {
        UserService.getMessage(this.user.id).then((message) => {
            this.message = message.data;
        });
    },
    methods: {
        closeModal() {
            this.$refs.messageModal.classList.remove("modal-open");
            UserService.clearUserMessage(this.user.id).then(() => {}).catch(() => {});
        }
    }
}
</script>
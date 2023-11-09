<template>
    <Page>
        <div class="col-md-12 mt-32 flex items-center justify-center">
            <div class="card-container card">
                <Form class="flex flex-col items-center" @submit="handleForgotPassword" :validation-schema="schema">
                    <div class="form-group w-100">
                        <Field id="password" name="password" type="password" placeholder="Senha"
                            class="form-control input input-bordered input-primary mt-4 w-full" />
                        <ErrorMessage name="password" class="error-feedback text-error" />
                    </div>
                    <div class="form-group w-100">
                        <Field id="passwordConfirmation" name="passwordConfirmation" type="password"
                            placeholder="Confirme a Senha"
                            class="form-control input input-bordered input-primary mt-4 w-full" />
                        <ErrorMessage name="passwordConfirmation" class="error-feedback text-error" />
                    </div>

                    <div class="form-group w-40 self-center">
                        <button class="btn btn-accent btn-block mt-4" :disabled="loading">
                            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                            <span class="text-base font-bold text-primary">Alterar Senha</span>
                        </button>
                    </div>
                </Form>
                <div v-if="message" class="alert mt-5" :class="successful ? 'alert-success' : 'alert-error'">
                    {{ message }}
                </div>
            </div>
        </div>
    </Page>
</template>

<script>
import Page from '../components/Page.vue'
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import AuthService from '../services/auth.service';
import NewPassordsService from '../services/new_passwords.service';

export default {
    name: "NewPassword",
    components: {
        // eslint-disable-next-line vue/no-reserved-component-names
        Form,
        Field,
        ErrorMessage,
        Page,
    },
    data() {
        const schema = yup.object().shape({
            password: yup
                .string()
                .required("Informe uma senha!")
                .min(8, "Minimo 8 caracteres!"),
            passwordConfirmation: yup
                .string()
                .required("Informe novamente a senha!")
                .oneOf([yup.ref('password'), null], 'Senhas devem ser iguais.')
        });

        return {
            schema,
            successful: false,
            message: "",
            loading: false
        };
    },
    created() {
        const urlParams = new URLSearchParams(window.location.search);
        const key = urlParams.get("key");

        if (key) {
            NewPassordsService.findOne(key).then((result) => {
                if (!result.data.found) {
                    this.$router.push('/login');
                }
            }).catch(() => {
                this.$router.push('/login');
            });
        }
    },
    methods: {
        handleForgotPassword(passwords) {
            const urlParams = new URLSearchParams(window.location.search);

            AuthService.newPassord({
                key: urlParams.get("key"),
                passwords: passwords
            }).then((result) => {
                this.successful = true;
                this.message = result.data.message;
                this.loading = false;

                setTimeout(() => {
                    this.$router.push('/login');
                }, 5000);
            }).catch((err) => {
                this.successful = false;
                this.message = err;
                this.loading = false;
            });
        }
    }
};

</script>

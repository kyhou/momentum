<template>
  <Page class="bg-white">
    <div class="col-md-12 mt-32 flex items-center justify-center">
      <div class="card-container card">
        <Form class="flex flex-col items-center" @submit="handleLogin" :validation-schema="schema">
          <div class="form-group w-100">
            <Field name="email" type="text" placeholder="Email"
              class="form-control input input-bordered input-primary w-full" />
            <ErrorMessage name="email" class="error-feedback text-error" />
          </div>
          <div class="form-group w-100">
            <Field name="password" type="password" placeholder="Senha"
              class="form-control input input-bordered input-primary mt-4 w-full" />
            <ErrorMessage name="password" class="error-feedback text-error" />
          </div>

          <div class="form-group w-40 self-center">
            <button class="btn btn-accent btn-block mt-4" :disabled="loading">
              <span v-show="loading" class="spinner-border spinner-border-sm"></span>
              <span class="text-base font-bold text-primary">Login</span>
            </button>
          </div>

          <div v-if="message" class="alert outline mt-5 shadow-lg outline-error">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current text-error" fill="none"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-error">{{ message }}</span>
            </div>
          </div>
        </Form>
        <router-link to="/forgot-password" class="mt-5 text-center text-secondary">Esqueci minha senha/Primeiro
          acesso</router-link>
      </div>
    </div>
  </Page>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import Page from '../components/Page.vue'

export default {
  name: "login-page",
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Form,
    Field,
    ErrorMessage,
    Page
  },
  data() {
    const schema = yup.object().shape({
      email: yup.string().email("O email informado não é válido!").required("Favor informar um email!"),
      password: yup.string().required("Informe uma senha!"),
    });

    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/dashboard");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;

      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/dashboard");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>
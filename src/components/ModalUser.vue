
    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="modal-new-user" class="modal-toggle" />
    <div class="modal">
        <div class="modal-box relative">
            <label for="modal-new-user" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Novo Usuário</h2>
                <Form id="addForm" @submit="handleRegister" :validation-schema="schema">
                    <div v-if="!successful">
                        <!-- <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2"> -->
                        <div class="gap-6 mt-4 form-group">
                            <div>
                                <label class="text-gray-700 dark:text-gray-200" for="email">Email</label>
                                <Field id="email" name="email" type="email"
                                    class="form-control block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                <ErrorMessage name="email" class="error-feedback" />
                            </div>

                            <div>
                                <label class="text-gray-700 dark:text-gray-200" for="password">Senha</label>
                                <Field id="password" name="password" type="password" ref="password"
                                    class="form-control block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                <ErrorMessage name="password" class="error-feedback" />
                            </div>

                            <div>
                                <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Confirme a
                                    Senha</label>
                                <Field id="passwordConfirmation" name="passwordConfirmation" type="password"
                                    class="form-control block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                <ErrorMessage name="passwordConfirmation" class="error-feedback" />
                            </div>

                            <div>
                                <label class="label cursor-pointer">
                                    <span class="label-text">Usuário</span>
                                    <input ref="userRole" id="userRole" name="userRole" type="checkbox"
                                        class="toggle form-control" checked />
                                </label>
                                <label class="label cursor-pointer">
                                    <span class="label-text">Administrador</span>
                                    <input ref="adminRole" id="adminRole" name="adminRole" type="checkbox"
                                        class="toggle form-control" />
                                </label>
                                <label class="label cursor-pointer">
                                    <span class="label-text">Colaborador</span>
                                    <input ref="colabRole" id="colabRole" name="colabRole" type="checkbox"
                                        class="toggle form-control" />
                                </label>
                            </div>
                        </div>


                        <div class="form-group mt-5">
                            <button type="submit" class="btn btn-primary btn-block" :disabled="loading">
                                <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                                Sign Up
                            </button>
                        </div>
                        <!-- <div class="flex justify-end mt-6">
                        <button
                            class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Salvar</button>
                    </div> -->
                    </div>
                </Form>

                <div v-if="message" class="alert" :class="successful ? 'alert-success' : 'alert-danger'">
                    {{ message }}
                </div>
            </section>
            <!-- <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
            <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free! -->
            <!-- </p> -->
        </div>
    </div>
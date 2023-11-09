<template>
    <Page>
        <section class="body-font bg-primary">
            <div class="min-h-96 hero flex justify-start bg-base-100">
                <div class="hero-content flex flex-wrap">
                    <div class="mt-10 basis-full">
                        <hr class="hr-title" style="width: 70px;" />
                        <h1 class="py-6 text-5xl font-bold text-white">Institucional</h1>
                        <p class="mb-10 text-lg">O Grupo HV é movido por transbordar na vida das pessoas, através de uma
                            gestão eficiente, com transparência, honestidade e parceria de nossos clientes. Conheça um
                            pouco mais sobre nós, em nossos vídeos abaixo:</p>
                    </div>
                </div>
            </div>
        </section>

        <div class="mb-32 flex flex-col">
            <iframe class="place-self-center" src="https://www.youtube.com/embed/ngMoPLbUUJ8?feature=share"
                rameborder="0" height="640" width="360"></iframe>
        </div>

        <Contact />
    </Page>
</template>

<script>
import Page from '../components/Page.vue'
import Contact from '../components/Contact.vue'

export default {
    name: "institutional-page",
    components: {
        Page,
        Contact,
    }
};
</script>
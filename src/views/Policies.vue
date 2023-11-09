<template>
    <Page>
        <section class="body-font bg-primary">
            <div class="min-h-96 institutional-bg-image hero flex justify-start bg-base-100">
                <div class="hero-content flex flex-wrap">
                    <div class="mt-10 basis-full">
                        <hr class="hr-title" style="width: 70px;" />
                        <h1 class="py-6 text-5xl font-bold text-white">Nossas políticas</h1>
                    </div>
                </div>
            </div>
        </section>

        <section class="mb-10 bg-secondary">
            <div class="border-base/300 collapse collapse-plus border bg-primary">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium ">
                    Política de Compliance e Anticorrupção
                </div>
                <div class="collapse-content">
                    <div class="accordion-body">
                        <p class="mt-4 text-white">
                            <iframe src="https://drive.google.com/file/d/1uNRrHlQAgtyJA7BJCnPKwQYWC9qhKs5U/preview"
                                allow="autoplay" class="h-screen w-full"></iframe>
                        </p>
                    </div>
                </div>
            </div>
            <div class="collapse-plus collapse border border-base-300 bg-primary">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium ">
                    Política de Prevenção à Lavagem de Dinheiro e do Financiamento ao Terrorismo
                </div>
                <div class="collapse-content">
                    <div class="accordion-body">
                        <p class="mt-4 text-white">
                            <iframe src="https://drive.google.com/file/d/1nrS5OLxNDMc-O1JFha0EbqqL5dlOIPLh/preview"
                                allow="autoplay" class="h-screen w-full"></iframe>
                        </p>
                    </div>
                </div>
            </div>
            <div class="collapse-plus collapse border border-base-300 bg-primary">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium ">
                    Política de Privacidade
                </div>
                <div class="collapse-content">
                    <div class="accordion-body">
                        <p class="mt-4 text-white">
                            <iframe src="https://drive.google.com/file/d/146oUbtXMhTaAN3ncSGCzNRvu_I5rU0Jt/preview"
                                allow="autoplay" class="h-screen w-full"></iframe>
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <Contact></Contact>
    </Page>
</template>

<script>
import Page from '../components/Page.vue'
import Contact from '../components/Contact.vue'

export default {
    name: "policies-page",
    components: {
        Page,
        Contact
    }
};
</script>
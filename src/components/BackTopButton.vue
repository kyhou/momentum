<template>
    <div ref="scrollTopButton" class="invisible sticky w-full flex justify-end bottom-0 pb-3 pr-5 transition">
        <div class="text-gray-400 hover:text-blue-400 transition">
            <button>
                Scroll to top
            </button>
            {{ scrollY }}
        </div>
    </div>
</template>

<script>
import { toRef } from 'vue';

export default {
    name: "BackTopButton",
    props: ['scrollY'],
    setup(props) {
        const scrollY = toRef(props, 'scrollY');
        console.log(scrollY);
        return { scrollY }
    },
    mounted() {
        console.log("BackTopButton - mounted");
        scrollY.value.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
        scrollY.value.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            console.log("handleScroll");
            const scrollBtn = this.$refs.scrollTopButton;

            if (window.scrollY > 0) {
                scrollBtn.classList.remove("invisible");
            } else {
                scrollBtn.classList.add("invisible");
            }
        }
    }
};
</script>
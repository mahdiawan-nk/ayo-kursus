<template>
    <footer id="footer" class="footer-top fixed-bottom">

        <!-- <div class="container "> -->
        <div class="d-flex flex-row-reverse align-items-center py-2">
            <div class="pe-4 d-flex  justify-content-center align-items-center" @click="openNewTab('https://wa.me/6285333399210')">
                <img src="/img/wa-logo.png" alt="" class="wa-logo">
                <span class="ms-2 fw-semibold text-white d-none">Ruang Konsultasi</span>
            </div>

        </div>
        <!-- </div> -->

    </footer>

    <!-- Scroll Top -->
    <!-- <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i
            class="bi bi-arrow-up-short"></i></a> -->
    <ToastNotif />
    <!-- Preloader -->
    <!-- <div id="preloader"></div> -->
</template>

<script>
import ToastNotif from '@/components/ToastNotif.vue';
export default {
    name: 'FooterView',
    components: {
        ToastNotif
    },
    methods: {
        openNewTab(url) {
            // window.open(url, '_blank');
            window.location.href = url
        }
    }
}
</script>

<style scoped>
footer .wa-logo {
    width: 75px;
    height: 75px;
}
</style>
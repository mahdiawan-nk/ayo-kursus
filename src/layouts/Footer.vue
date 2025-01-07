<template>
    <footer id="footer" class="footer position-relative mt-2">

        <div class="container-fluid footer-top fixed-bottom">
            <div class="row  features" style="background-color: rgb(37, 150, 190)">
                <div class="col-lg-4"></div>
                <div class="col-lg-4 mt-1" @click="openNewTab('https://wa.me/6281298600000')">
                    <div class="features-item border-0 justify-content-center bg-transparent" >
                        <i class="bi bi-whatsapp" style="color: #0dff0d;font-size: 40px;"></i>
                        <h3 class="">
                            <a href="javascript:void(0)" class="stretched-link text-white">Ruang Konsultasi</a>
                        </h3>
                    </div>
                </div>
                
            </div>
        </div>

    </footer>

    <!-- Scroll Top -->
    <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i
            class="bi bi-arrow-up-short"></i></a>
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
            window.open(url, '_blank');
        }
    }
}
</script>

<style scoped>

</style>
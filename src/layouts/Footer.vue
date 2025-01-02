<template>
    <footer id="footer" class="footer position-relative">

        <div class="container-fluid footer-top fixed-bottom">
            <div class="row row-cols-4 row-cols-md-4 g-4 features" style="background-color: #d546d9">
                <div class="col mt-1" @click="openNewTab('https://wa.me/6281298600000')">
                    <div class="features-item">
                        <i class="bi bi-whatsapp" style="color: #12a617;"></i>
                        <h3 class="d-none d-lg-block">
                            <a href="javascript:void(0)" class="stretched-link">Ruang Konsultasi</a>
                        </h3>
                    </div>
                </div>
                <div class="col mt-1" @click="openNewTab('https://www.instagram.com/kursusbahasadankomputer_sci/profilecard/?igsh=MjNlNXR5Mnd3aHRw')">
                    <div class="features-item">
                        <i class="bi bi-instagram"
                            style="background: linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4); -webkit-background-clip: text; color: transparent;"></i>
                        <h3 class="d-none d-lg-block">
                            <a href="javascript:void(0)"
                                class="stretched-link">Instagaram</a>
                        </h3>
                    </div>
                </div>
                <div class="col mt-1" @click="openNewTab('https://www.tiktok.com/@ayokursus?_t=8sTfZBCKRyU&_r=1')">
                    <div class="features-item">
                        <i class="bi bi-tiktok" style="color: #000000;"></i>
                        <h3 class="d-none d-lg-block"><a href="javascript:void(0)"
                                class="stretched-link">Tiktok</a></h3>
                    </div>
                </div>
                <div class="col mt-1" @click="openNewTab('https://www.facebook.com/profile.php?id=61567685371018&mibextid=ZbWKwL')">
                    <div class="features-item">
                        <i class="bi bi-facebook"
                            style="background: linear-gradient(45deg, #1877F2, #3b5998); -webkit-background-clip: text; color: transparent;"></i>
                        <h3 class="d-none d-lg-block"><a href="javascript:void(0)"
                                class="stretched-link">Facebook</a></h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="container copyright text-center mt-4">
            <p>© <span class="text-white">Copyright</span> <strong class="px-1 sitename text-white">Ayo Kursus</strong>
                <span class="text-white">All Rights Reserved</span>
            </p>
            <div class="credits text-white">
                Designed by <a href="https://bootstrapmade.com/">Mahdi-NK</a> Distributed by <a
                    href=“https://themewagon.com>ThemeWagon</a>
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
footer {
    background-color: #d546d9;
}
</style>
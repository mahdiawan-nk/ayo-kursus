<template>
    <footer id="footer" class="footer position-relative">

        <div class="container footer-top">
            <div class="row row-cols-1 row-cols-md-4 g-4 features">
                <div class="col" data-aos="fade-up" data-aos-delay="100">
                    <div class="features-item">
                        <i class="bi bi-whatsapp" style="color: #12a617;"></i>
                        <h3><a href="" class="stretched-link">Ruang Konsultasi</a></h3>
                    </div>
                </div>
                <div class="col" data-aos="fade-up" data-aos-delay="100">
                    <div class="features-item">
                        <i class="bi bi-instagram"
                            style="background: linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4); -webkit-background-clip: text; color: transparent;"></i>
                        <h3><a href="https://www.instagram.com/kursusbahasadankomputer_sci/profilecard/?igsh=MjNlNXR5Mnd3aHRw"
                                class="stretched-link">Instagaram</a></h3>
                    </div>
                </div>
                <div class="col" data-aos="fade-up" data-aos-delay="100">
                    <div class="features-item">
                        <i class="bi bi-tiktok" style="color: #000000;"></i>
                        <h3><a href="https://www.tiktok.com/@ayokursus?_t=8sTfZBCKRyU&_r=1"
                                class="stretched-link">Tiktok</a></h3>
                    </div>
                </div>
                <div class="col" data-aos="fade-up" data-aos-delay="100">
                    <div class="features-item">
                        <i class="bi bi-facebook"
                            style="background: linear-gradient(45deg, #1877F2, #3b5998); -webkit-background-clip: text; color: transparent;"></i>
                        <h3><a href="https://www.facebook.com/profile.php?id=61567685371018&mibextid=ZbWKwL"
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
    }
}
</script>

<style scoped>
footer {
    background-color: #d546d9;
}
</style>
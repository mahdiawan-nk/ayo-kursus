<template>
    <main class="main">

        <!-- Hero Section -->
        <section id="hero" class="hero section dark-background">
            <div class="swiper init-swiper ">
                <div class="swiper-wrapper">
                    <div class="swiper-slide d-flex align-items-center">
                        <img src="img/slider/ayokursus1.png" alt="" data-aos="fade-in">
                    </div>
                    <div class="swiper-slide d-flex align-items-center">
                        <img src="img/slider/ayokursus2.png" alt="" data-aos="fade-in" class="">
                    </div>
                    <div class="swiper-slide d-flex align-items-center">
                        <img src="img/slider/ayokursus3.png" alt="" data-aos="fade-in" class="">
                    </div>
                </div>
            </div>
            

        </section><!-- /Hero Section -->
        <section id="about" class="about section">
            <div class="container section-title text-center" data-aos="fade-up">
                <!-- <h2>Courses</h2> -->
                <p>Ayo Kursus</p>
            </div>
            <div class="container text-center">
                <!-- <h2 data-aos="fade-up" data-aos-delay="100" style="color: #d546d9">AYO KURSUS</h2> -->
                <p data-aos="fade-up" data-aos-delay="200" class="fst-italic fs-3" style="text-align: justify">
                    Ayo Kursus merupakan program kursus bagi pelajar hingga umum yang bertujuan untuk
                    meningkatkan potensi diri atau sosfkill dibidang kompetensi teretntu sesuai minat dan
                    bakat.
                    Program ayo kursus ini nantinya bisa menjadi solusi bagi siswa yang merasa kesusahan
                    dalam
                    berbagai masalah tertentu, bahkan nantinya bisa untuk bekal ketika ingin memasuki dunia
                    kerja.
                    Adapun program kursus yang dimaksud disini adalah kursus komputer dengan kemampuan
                    kompetensi sebagai berikut : komputer dasar (Microsoft office), Desain Grafis ,
                    Programmer. Dan
                    Kursus Bahasa asing seperti kursus Bahasa inggris, Bahasa mandarin, Bahasa jepang,
                    Bahasa arab,
                    Bahasa korea.

                </p>
            </div>
        </section>
        <!-- About Section -->
        <section id="about" class="about section">
            <div class="container section-title text-center" data-aos="fade-up">
                <!-- <h2>Courses</h2> -->
                <p>Ayo Pilih Kursus Kesukaan Mu</p>
            </div><!-- End Section Title -->

            <div class="container">

                <div v-for="list in courses" :key="list" class="row my-5 p-4 rounded-start-2"
                    style="background-color: rgb(37, 150, 190)">
                    <div class="col-lg-6 order-1 order-lg-1" data-aos="fade-up" data-aos-delay="100">
                        <img :src="list.image" class="img-fluid w-75 d-block mx-auto" alt="">
                    </div>
                    <div class="col-lg-6 order-2 order-lg-2 content" data-aos="fade-up" data-aos-delay="200">
                        <h3 style="color:#080807;">{{ list.title }}</h3>
                        <p class="fst-italic">
                            {{ list.description }}
                        </p>
                        <ul>
                            <li v-for="item in list.types" :key="item"><i class="bi bi-check-circle"></i> <span>{{
                                item.title }}</span></li>
                        </ul>
                        <router-link :to="{ name: 'Course', params: { type: list.name } }" class="read-more shadow" style="background-color: #2b960b;"><span>Selengkapnya</span><i class="bi bi-arrow-right"></i></router-link>
                    </div>

                </div>
            </div>

        </section>
        <!-- /About Section -->

        <!-- Features Section -->
        <section id="features" class="features section">
            <!-- Section Title -->
            <div class="container section-title text-center" data-aos="fade-up">
                <!-- <h2>Courses</h2> -->
                <p>Keunggulan Program</p>
            </div><!-- End Section Title -->
            <div class="container">

                <div class="row gy-4">
                    <!-- <div class="col-lg-2"></div> -->
                    <div class="col-lg-12">
                        <div class="row">
                            <card-keunggulan-program v-for="keunggulan in keunggulanProgram" :key="keunggulan.title"
                                :title="keunggulan.title" :icon="keunggulan.icon"></card-keunggulan-program>
                        </div>
                    </div>
                </div>

            </div>

        </section><!-- /Features Section -->

        <!-- Courses Section -->
        <section id="courses" class="events section" style="background-color: rgb(37, 150, 190)">

            <!-- Section Title -->
            <div class="container section-title text-center" data-aos="fade-up">
                <p class="text-white">Portofolio Kursus</p>
            </div><!-- End Section Title -->

            <div class="container">

                <div class="row">
                    <card-portofolio-kursus v-for="portofolio in portofolioKursus" :key="portofolio.title"
                        :title="portofolio.title" :subtitle="'Kursus Secara ' + portofolio.description"
                        :image="portofolio.image"></card-portofolio-kursus>

                </div>

            </div>

        </section><!-- /Courses Section -->

        <pages-testimoni></pages-testimoni>
        <section id="contact" class="contact section mb-5">
            <!-- Section Title -->
            <div class="container section-title text-center" data-aos="fade-up">
                <p>Alamat Lengkap Lembaga</p>
            </div><!-- End Section Title -->

            <!-- End Google Maps -->

            <div class="container" data-aos="fade-up" data-aos-delay="100">

                <div class="row gy-4">

                    <div class="col-lg-4">
                        <h3 data-aos="fade-up" data-aos-delay="200" class="mb-4">Get In Touch</h3>
                        <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                            <i class="bi bi-geo-alt flex-shrink-0"></i>
                            <div>
                                <h3>Kantor Pusat</h3>
                                <p>Jl.HR Soebrantas Komplek Bumi Rizki Permai Blok L, No.5 (Samping Awal Bros
                                    Panam). Kota Pekanbaru – Riau 28292</p>
                            </div>
                        </div>
                        <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                            <i class="bi bi-telephone flex-shrink-0"></i>
                            <div>
                                <h3>Nomor Telepon/Whatsapp</h3>
                                <p>0823-8856-8452 dan 0822-8680-5678</p>
                            </div>
                        </div>
                        <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                            <i class="bi bi-geo-alt flex-shrink-0"></i>
                            <div>
                                <h3>Kantor Cabang</h3>
                                <p>Jl.Paus Ujung No.3 ( Simpang 3 Arifin Ahmad ) Kota Pekanbaru – Riau 28293</p>
                            </div>
                        </div>
                        <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                            <i class="bi bi-telephone flex-shrink-0"></i>
                            <div>
                                <h3>Nomor Telepon/Whatsapp</h3>
                                <p> 0853-3339-9210 dan 0853-5524-6998</p>
                            </div>
                        </div>
                        <!-- <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                            <i class="bi bi-telephone flex-shrink-0"></i>
                            <div>
                                <h3>sosial Media Lembaga</h3>
                                <p> 0853-3339-9210 dan 0853-5524-6998</p>
                            </div>
                        </div> -->
                        <!-- End Info Item -->

                        <!-- End Info Item -->

                        <!-- End Info Item -->

                    </div>

                    <div class="col-lg-8">
                        <div class="mb-5" data-aos="fade-up" data-aos-delay="200">
                            <iframe style="border:0; width: 100%; height: 400px;"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6883608303033!2d101.3906544!3d0.46245159999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5a9a1adf272f1%3A0xb7ae731a91a4a402!2sKURSUS%20KOMPUTER%20DAN%20BAHASA%20PEKANBARU!5e0!3m2!1sid!2sid!4v1735193244355!5m2!1sid!2sid"
                                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div><!-- End Contact Form -->
                    <div class="col-lg-12">
                        <h3 data-aos="fade-up" data-aos-delay="200" class="mb-4" style="text-align: center;">Sosial Media Lembaga</h3>
                        <div class="row row-cols-3 row-cols-md-3 g-4 features">
                            
                            <div class="col mt-1" @click="openNewTab('https://www.instagram.com/kursusbahasadankomputer_sci/profilecard/?igsh=MjNlNXR5Mnd3aHRw')">
                                <div class="features-item justify-content-center">
                                    <i class="bi bi-instagram"
                                        style="font-size: 40px;background: linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4); -webkit-background-clip: text; color: transparent;"></i>
                                    <h3 class="d-none d-lg-block">
                                        <a href="javascript:void(0)"
                                            class="stretched-link">Instagaram</a>
                                    </h3>
                                </div>
                            </div>
                            <div class="col mt-1 " @click="openNewTab('https://www.tiktok.com/@ayokursus?_t=8sTfZBCKRyU&_r=1')">
                                <div class="features-item justify-content-center">
                                    <i class="bi bi-tiktok" style="font-size: 40px;color: #000000;"></i>
                                    <h3 class="d-none d-lg-block"><a href="javascript:void(0)"
                                            class="stretched-link">Tiktok</a></h3>
                                </div>
                            </div>
                            <div class="col mt-1 " @click="openNewTab('https://www.facebook.com/profile.php?id=61567685371018&mibextid=ZbWKwL')">
                                <div class="features-item justify-content-center">
                                    <i class="bi bi-facebook"
                                        style="font-size: 40px;background: linear-gradient(45deg, #1877F2, #3b5998); -webkit-background-clip: text; color: transparent;"></i>
                                    <h3 class="d-none d-lg-block"><a href="javascript:void(0)"
                                            class="stretched-link">Facebook</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    </main>

</template>

<script>
import CardKeunggulanProgram from '../components/CardKeunggulanProgram.vue'
import CardPortofolioKursus from '../components/CardPortofolioKursus.vue'
import PagesTestimoni from '../components/PagesTestimoni.vue'
import coursesData from '@/assets/course.json';
import portofolioData from '@/assets/portofolio.json';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
// const coursesData = require('src\assets\course,json');
export default {
    name: 'HomeView',
    components: {
        CardKeunggulanProgram,
        CardPortofolioKursus,
        PagesTestimoni
    },
    data() {
        return {
            courses: coursesData.courses,
            keunggulanProgram: [
                { title: 'Bersertifikat Resmi', icon: 'bi-award-fill' },
                { title: 'Mempunyai Legalitas Izin Dinas Resmi', icon: 'bi-file-earmark-check-fill' },
                { title: 'Program Kursus Full Praktek 100%', icon: 'bi-clipboard-check-fill' },
                { title: 'Waktu Belajar Menyesuaikan', icon: 'bi-clock-fill' },
                { title: 'Kelas Maksimal 12 Orang', icon: 'bi-people-fill' },
                { title: 'Fasilitas Kursus Komputer yang Lengkap', icon: 'bi-pc-display' },
                { title: 'Program Belajar Kelas dan Privat (1 Siswa 1 Guru)', icon: 'bi-person-fill' },
                { title: 'Belajar Bisa Offline dan Online', icon: 'bi-globe' },
                { title: 'Belajar Bisa Dikantor Atau Guru Datang Kerumah', icon: 'bi-globe' },
                { title: 'Bisa belajar dimanapun dan kapanpun', icon: 'bi-globe' },
            ],
            portofolioKursus: portofolioData.portofolio,
            swiperConfig: {
                direction: 'horizontal',
                loop: true,
                speed: 600,
                autoplay: {
                    delay: 2000,
                },
                slidesPerView: 'auto',
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        // spaceBetween: 40,
                    },
                    1200: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                },
            },
        }
    },
    mounted() {
        const swiperElement = this.$el.querySelector('.swiper');
        new Swiper(swiperElement, this.swiperConfig);
    },
}
</script>

<style scoped>
.content h3,
.content p,
.content ul li span {
    color: white;
}

.hero {
    width: 100%;
    min-height: 95vh;
    position: relative;
    padding: 81px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--default-color);
}

.hero img {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: fill;
    z-index: 1;
    background: rgb(37, 150, 190);
}

.swiper {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    overflow: hidden;
}

.overlay-text {
    position: relative;
    z-index: 2;
    /* Place text above image */
    padding: 20px;
    color: white;
}
@media screen and (max-width: 768px) {
    .hero img {
        position: absolute;
        inset: 0;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: fill;
        z-index: 1;
        background: rgb(37, 150, 190);
    }
}
.about .content ul i {
    font-size: 1.25rem;
    margin-right: 4px;
    color: white;
}
</style>
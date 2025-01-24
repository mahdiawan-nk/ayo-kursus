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
        <section id="about" class="about section pt-4 pb-1">
            <div class="container section-title text-center" data-aos="fade-up">
                <!-- <h2>Courses</h2> -->
                <p style="color: rgb(37, 150, 190)"><u>Ayo Kursus</u></p>
            </div>
            <div class="container text-center">
                <!-- <h2 data-aos="fade-up" data-aos-delay="100" style="color: #d546d9">AYO KURSUS</h2> -->
                <p data-aos="fade-up" data-aos-delay="200" class="fst-italic"
                    style="text-align: justify;font-size: 1.2rem !important">
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
        <section class="about section pt-4 pb-1">
            <div class="container section-title text-center" data-aos="fade-up">
                <!-- <h2>Courses</h2> -->
                <p>Ayo Pilih Kursus Kesukaan Mu</p>
            </div><!-- End Section Title -->

            <div class="container">
                <div class="d-flex rounded-2 my-2 mt-1 container-card" v-for="list in courses" :key="list">
                    <div class="img-card">
                        <img :src="list.image" alt="..." class="">
                    </div>
                    <div class="content ms-3" style="width: 100%!important">
                        <router-link :to="{ name: 'Course', params: { type: list.name } }">
                        <h4 style="color:#080807;">{{ list.title }}</h4>

                        </router-link>
                        <p>
                            {{ list.description }}
                        </p>
                        <ul>
                            <li v-for="item in list.types" :key="item"><i class="bi bi-check"></i> <span>{{
                                item.title }}</span></li>
                        </ul>
                        <router-link :to="{ name: 'Course', params: { type: list.name } }"
                            class="read-more shadow"><span>Selengkapnya</span><i
                                class="bi bi-arrow-right"></i></router-link>
                    </div>
                </div>
            </div>


        </section>
        <!-- /About Section -->

        <!-- Features Section -->
        <section id="features" class="features section pt-4 pb-1">
            <!-- Section Title -->
            <div class="container section-title text-center pb-2" data-aos="fade-up">
                <!-- <h2>Courses</h2> -->
                <p style="color: rgb(37, 150, 190);text-decoration: underline;font-size:1.25rem">Keunggulan Program</p>
            </div><!-- End Section Title -->
            <div class="container">

                <div class="row">
                    <div class="col-lg-3"></div>
                    <div class="col-lg-6">
                        <div class="row">
                            <card-keunggulan-program v-for="keunggulan in keunggulanProgram" :key="keunggulan.title"
                                :title="keunggulan.title" :icon="'bi-check-circle-fill'"></card-keunggulan-program>
                        </div>
                    </div>
                </div>

            </div>

        </section><!-- /Features Section -->

        <!-- Courses Section -->

        <card-portofolio-kursus :list="portofolioKursus"></card-portofolio-kursus>



        <pages-testimoni></pages-testimoni>
        <contact-view></contact-view>
    </main>

</template>

<script>
import CardKeunggulanProgram from '../components/CardKeunggulanProgram.vue'
import CardPortofolioKursus from '../components/CardPortofolioKursus.vue'
import PagesTestimoni from '../components/PagesTestimoni.vue'
import ContactView from '@/components/ContactView.vue';
import coursesData from '@/assets/course.json';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
// const coursesData = require('src\assets\course,json');
export default {
    name: 'HomeView',
    components: {
        CardKeunggulanProgram,
        CardPortofolioKursus,
        PagesTestimoni,
        ContactView
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
.about .section-title {
    padding-bottom: 1rem;
}

.about .section-title p {
    color: rgb(37, 150, 190) !important;
    text-decoration: underline;
    font-size: 1.25rem;
}

.about .container-card {
    background: rgb(37, 150, 190);
    padding: 3rem;
}

.about .img-card img {
    width: 100% !important;
    margin: 0 auto;
}

.about .content h4 {
    font-weight: 700;
    font-size: 2.25rem;
    border: black solid 1px;
    text-align: center;
    background-color: white;
    padding: 1px 0px;
}

.about .content p {
    font-size: 2rem;
    margin-left: 5px;
    color: white;
    margin-bottom: 10px;
}

.about .content ul {
    margin-left: 5px;
}

.about .content ul li {
    color: white;
    padding-bottom: 10px;
}

.about .content ul li i,
.about .content ul li span {
    color: white;
    font-size: 1.8rem;
}

.about .content .read-more {
    background: rgb(43, 150, 11);
    color: var(--contrast-color);
    font-family: var(--heading-font);
    font-weight: 500;
    font-size: 1.25rem;
    letter-spacing: 1px;
    padding: 5px 15px 5px 15px;
    border-radius: 5px;
    transition: 0.3s;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.about .content .read-more:hover {
    background: rgb(43, 150, 11);
    color: var(--contrast-color);
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
    .hero{
        min-height: 30vh;
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

    .section-title p {
        color: rgb(37, 150, 190) !important;
        text-decoration: underline;
        font-size: 1.25rem;
        padding-bottom:1rem;
    }

    .about .container-card {
        background: rgb(37, 150, 190);
        padding: 0.5rem;
    }

    .about .img-card img {
        width: 100% !important;
        margin: 0 auto;
        height: 50vw;
    }

    .about .content h4 {
        font-weight: 700;
        font-size: 22px;
        border: black solid 1px;
        text-align: center;
        background-color: white;
        padding: 1px 0px;
    }

    .about .content p {
        font-size: 15px;
        margin-left: 5px;
        color: white;
        margin-bottom: 3px;
    }

    .about .content ul {
        margin-left: 5px;
    }

    .about .content ul li {
        color: white;
        font-size: 15px;
        padding-bottom: 0px;
    }

    .about .content ul li i,
    .about .content ul li span {
        color: white;
        font-size: 15px;
    }

    .about .content .read-more {
        background: rgb(43, 150, 11);
        color: var(--contrast-color);
        font-family: var(--heading-font);
        font-weight: 500;
        font-size: 15px;
        letter-spacing: 1px;
        padding: 5px 15px 5px 15px;
        border-radius: 5px;
        transition: 0.3s;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
<template>
    <main class="main">

        <!-- Hero Section -->
        <section id="hero" class="hero section dark-background" :style="{ 'min-height': '100vh' }">

            <img src="img/bg-2.png" alt="" data-aos="fade-in">

            <div class="container text-center">
                <h2 data-aos="fade-up" data-aos-delay="100" style="color: #d546d9">AYO KURSUS</h2>
                <p data-aos="fade-up" data-aos-delay="200">
                    Ayo Kursus merupakan program kursus bagi pelajar hingga umum yang bertujuan untuk
                    meningkatkan potensi diri atau sosfkill dibidang kompetensi teretntu sesuai minat dan bakat.
                    Program ayo kursus ini nantinya bisa menjadi solusi bagi siswa yang merasa kesusahan dalam
                    berbagai masalah tertentu, bahkan nantinya bisa untuk bekal ketika ingin memasuki dunia kerja.
                    Adapun program kursus yang dimaksud disini adalah kursus komputer dengan kemampuan
                    kompetensi sebagai berikut : komputer dasar (Microsoft office), Desain Grafis , Programmer. Dan
                    Kursus Bahasa asing seperti kursus Bahasa inggris, Bahasa mandarin, Bahasa jepang, Bahasa arab,
                    Bahasa korea.

                </p>
                <!-- <div class=" mt-4" data-aos="fade-up" data-aos-delay="300">
                    <a href="courses.html" class="btn-get-started">Get Started</a>
                </div> -->
            </div>

        </section><!-- /Hero Section -->

        <!-- About Section -->
        <section id="about" class="about section">
            <div class="container section-title text-center" data-aos="fade-up">
                <!-- <h2>Courses</h2> -->
                <p>Ayo Pilih Kursus Kesukaan Mu</p>
            </div><!-- End Section Title -->

            <div class="container">

                <div v-for="list in courses" :key="list" class="row my-5 p-4 rounded-start-2"
                    style="background-color: #d546d9">
                    <div class="col-lg-6 order-1 order-lg-1" data-aos="fade-up" data-aos-delay="100">
                        <img :src="list.image" class="img-fluid w-50 d-block mx-auto" alt="">
                    </div>
                    <div class="col-lg-6 order-2 order-lg-2 content" data-aos="fade-up" data-aos-delay="200">
                        <h3>{{ list.title }}</h3>
                        <p class="fst-italic">
                            {{ list.description }}
                        </p>
                        <ul>
                            <li v-for="item in list.types" :key="item"><i class="bi bi-check-circle"></i> <span>{{
                                    item.title }}</span></li>
                        </ul>
                        <router-link :to="{ name: 'Course', params: { type: list.name } }" class="read-more"><span>Read
                                More</span><i class="bi bi-arrow-right"></i></router-link>
                    </div>

                </div>
                <!-- <div class="row gy-4 p-2 rounded-start-2" style="background-color: #d546d9">

                    <div class="col-lg-6 order-1 order-lg-1" data-aos="fade-up" data-aos-delay="100">
                        <img src="img/course-lang.png" class="img-fluid w-75 d-block mx-auto" alt="">
                    </div>

                    <div class="col-lg-6 order-2 order-lg-2 content" data-aos="fade-up" data-aos-delay="200">
                        <h3>Kursus Bahasa</h3>
                        <p class="fst-italic">
                            Program pembelajaran kursus Bahasa yaitu
                        </p>
                        <ul>
                            <li><i class="bi bi-check-circle"></i> <span>Bahasa Inggris</span></li>
                            <li><i class="bi bi-check-circle"></i> <span>Bahasa Mandarin</span></li>
                            <li><i class="bi bi-check-circle"></i> <span>Bahasa Jepang</span></li>
                            <li><i class="bi bi-check-circle"></i> <span>Bahasa Arab</span></li>
                            <li><i class="bi bi-check-circle"></i> <span>Bahasa Korea</span></li>
                        </ul>
                        <router-link :to="{ name: 'Course', params: { type: 'kursus-bahasa' } }" class="read-more"><span>Read More</span><i
                                class="bi bi-arrow-right"></i></router-link>
                    </div>


                </div> -->
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
                    <div class="col-lg-2"></div>
                    <div class="col-lg-8">
                        <div class="row">
                            <card-keunggulan-program v-for="keunggulan in keunggulanProgram" :key="keunggulan.title"
                                :title="keunggulan.title" :icon="keunggulan.icon"></card-keunggulan-program>
                        </div>
                    </div>
                </div>

            </div>

        </section><!-- /Features Section -->

        <!-- Courses Section -->
        <section id="courses" class="events section" style="background-color: #d546d9">

            <!-- Section Title -->
            <div class="container section-title text-center" data-aos="fade-up">
                <p class="text-white">Portofolio Kursus</p>
            </div><!-- End Section Title -->

            <div class="container">

                <div class="row">
                    <card-portofolio-kursus v-for="portofolio in portofolioKursus" :key="portofolio.title"
                        :title="portofolio.title" :subtitle="'Kursus Secara '+portofolio.description"
                        :image="portofolio.image"></card-portofolio-kursus>

                </div>

            </div>

        </section><!-- /Courses Section -->

        <pages-testimoni></pages-testimoni>
        <section id="contact" class="contact section">
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
            ],
            portofolioKursus: portofolioData.portofolio
        }
    }
}
</script>

<style scoped>
.content h3,
.content p,
.content ul li span {
    color: white;
}
</style>
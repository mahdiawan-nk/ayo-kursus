<template>
    <main class="main">

        <!-- Hero Section -->
        <section id="hero" class="hero section dark-background" :style="{ 'min-height': '100vh' }">

            <img src="img/hero-bg.jpg" alt="" data-aos="fade-in">

            <div class="container text-center" :style="{ 'margin-top': '200px' }">
                <h2 data-aos="fade-up" data-aos-delay="100">Learning Today,<br>Leading Tomorrow</h2>
                <p data-aos="fade-up" data-aos-delay="200">We are team of talented designers making websites with
                    Bootstrap</p>
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

                <div class="row my-5 flex-reverse">

                    <div class="col-lg-6 order-1 order-lg-1" data-aos="fade-up" data-aos-delay="100">
                        <img src="img/about.jpg" class="img-fluid" alt="">
                    </div>

                    <div class="col-lg-6 order-2 order-lg-2 content" data-aos="fade-up" data-aos-delay="200">
                        <h3>Voluptatem dignissimos provident quasi corporis</h3>
                        <p class="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore
                            magna aliqua.
                        </p>
                        <ul>
                            <li><i class="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat.</span></li>
                            <li><i class="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in
                                    voluptate velit.</span></li>
                            <li><i class="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate trideta
                                    storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                        </ul>
                        <router-link to="/about" class="read-more"><span>Read More</span><i
                            class="bi bi-arrow-right"></i></router-link>
                    </div>


                </div>
                <div class="row gy-4">

                    <div class="col-lg-6 order-1 order-lg-1" data-aos="fade-up" data-aos-delay="100">
                        <img src="img/about.jpg" class="img-fluid" alt="">
                    </div>

                    <div class="col-lg-6 order-2 order-lg-2 content" data-aos="fade-up" data-aos-delay="200">
                        <h3>Voluptatem dignissimos provident quasi corporis</h3>
                        <p class="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore
                            magna aliqua.
                        </p>
                        <ul>
                            <li><i class="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat.</span></li>
                            <li><i class="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in
                                    voluptate velit.</span></li>
                            <li><i class="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate trideta
                                    storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                        </ul>
                        <router-link to="/about" class="read-more"><span>Read More</span><i
                                class="bi bi-arrow-right"></i></router-link>
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
        <section id="courses" class="events section">

            <!-- Section Title -->
            <div class="container section-title text-center" data-aos="fade-up">
                <p>Portofolio Kursus</p>
            </div><!-- End Section Title -->

            <div class="container">

                <div class="row">
                    <card-portofolio-kursus v-for="portofolio in portofolioKursus" :key="portofolio.title"
                        :title="portofolio.title" :subtitle="portofolio.subtitle"
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
                                <p>A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </div>
                        <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                            <i class="bi bi-geo-alt flex-shrink-0"></i>
                            <div>
                                <h3>Kantor Cabang</h3>
                                <p>A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </div>
                        <!-- End Info Item -->

                        <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                            <i class="bi bi-telephone flex-shrink-0"></i>
                            <div>
                                <h3>Call Us</h3>
                                <p>+1 5589 55488 55</p>
                            </div>
                        </div><!-- End Info Item -->

                        <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
                            <i class="bi bi-envelope flex-shrink-0"></i>
                            <div>
                                <h3>Email Us</h3>
                                <p>info@example.com</p>
                            </div>
                        </div><!-- End Info Item -->

                    </div>

                    <div class="col-lg-8">
                        <div class="mb-5" data-aos="fade-up" data-aos-delay="200">
                            <iframe style="border:0; width: 100%; height: 400px;"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                                frameborder="0" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default {
    name: 'HomeView',
    components: {
        CardKeunggulanProgram,
        CardPortofolioKursus,
        PagesTestimoni
    },
    data() {
        return {
            keunggulanProgram: [
                { title: 'Bersertifikat Resmi', icon: 'bi-award-fill' },
                { title: 'Mempunyai Legalitas Izin Dinas Resmi', icon: 'bi-file-earmark-check-fill' },
                { title: 'Program Kursus Full Praktek 100%', icon: 'bi-clipboard-check-fill' },
                { title: 'Waktu Belajar Menyesuaikan', icon: 'bi-clock-fill' },
                { title: 'Kelas Maksimal 12 Orang', icon: 'bi-people-fill' },
                { title: 'Fasilitas Kursus Komputer yang Lengkap', icon: 'bi-pc-display' },
                { title: 'Program Belajar Kelas dan Privat (1 Siswa 1 Guru)', icon: 'bi-person-fill' },
                { title: 'Belajar Bisa Offline dan Online', icon: 'bi-globe' },
            ],
            portofolioKursus: [
                { title: 'Program Komputer', subtitle: 'Program Komputer', image: 'img/course-3.jpg' },
                { title: 'Program Komputer', subtitle: 'Program Komputer', image: 'img/course-3.jpg' },
                { title: 'Program Komputer', subtitle: 'Program Komputer', image: 'img/course-3.jpg' },
                { title: 'Program Komputer', subtitle: 'Program Komputer', image: 'img/course-3.jpg' },
                { title: 'Program Komputer', subtitle: 'Program Komputer', image: 'img/course-3.jpg' },
                { title: 'Program Komputer', subtitle: 'Program Komputer', image: 'img/course-3.jpg' },
                { title: 'Program Komputer', subtitle: 'Program Komputer', image: 'img/course-3.jpg' },
                { title: 'Program Komputer', subtitle: 'Program Komputer', image: 'img/course-3.jpg' },
            ]
        }
    }
}
</script>
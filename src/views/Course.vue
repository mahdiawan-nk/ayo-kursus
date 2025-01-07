<template>
    <div>
        <main class="main">

            <!-- Page Title -->
            <section id="hero" class="hero section dark-background" :style="{ 'min-height': '30vh' }">

                <img :src="routeType == 'kursus-komputer' ? '/img/slider/ayokursus3.png' : '/img/slider/ayokursus2.png'"
                    alt="" data-aos="fade-in" style="object-fit: fill">

                <div class="container text-center" :style="{ 'margin-top': '200px' }">
                </div>

            </section><!-- /Hero Section -->

            <section id="features" class="features section mt-4">

                <div class="container">

                    <div class="row row-cols-1  g-4 features" :class="rowColsClass">
                        <div v-for="list in course[0].types" :key="list.id" class="col" data-aos="fade-up"
                            data-aos-delay="100">
                            <div class="features-item justify-content-center "
                                :class="{ 'bg-ungu': typeCourse == list.name }">
                                <h3><a href="javascript:void(0)" class="stretched-link"
                                        :class="{ 'text-white': typeCourse == list.name }" @click="showDetail(list)">{{
                                            list.title }}</a></h3>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section id="about" class="about section">

                <div class="container" v-show="selectedType.name == typeCourse">
                    <div class="row my-5 flex-reverse">
                        <div class="col-lg-6 order-1 order-lg-1" data-aos="fade-up" data-aos-delay="100">
                            <img :src="'/' + selectedType.image" class="img-fluid" alt="">
                        </div>
                        <div class="col-lg-6 order-2 order-lg-2 content" data-aos="fade-up" data-aos-delay="200">
                            <h3 style="font-size: 1.8rem;color:rgb(37, 150, 190)">{{ selectedType.title }}</h3>
                            <p class="" style="text-align: justify;">
                                {{ selectedType.description }}
                            </p>
                            <ul>
                                <li v-for="item in selectedType.points" :key="item" class="d-flex">
                                    <i class="bi bi-check-circle"></i>
                                    <span>{{ item }}</span>
                                </li>
                            </ul>
                            <p class="">
                                {{ selectedType.description_other }}
                            </p>
                            <!-- <div v-if="timeLeft > 0" class="countdown fw-bold my-3 fs-1 p-3 text-white rounded"
                                style="background-color:#2b960b;">
                                Ambil Promo Sekarang > <span class="text-dark">{{ countdownText }}</span>
                            </div> -->
                            <router-link to="/daftar" class="countdown fw-bold my-3 fs-4 p-3 text-white rounded" style="background-color:#2b960b;"><span> Ambil Promo Sekarang > <span class="text-dark fs-2">{{ countdownText }}</span></span></router-link>
                        </div>
                    </div>

                </div>


            </section>
            <section id="features" class="features section mb-5" v-show="selectedType.name == typeCourse">
                <!-- Section Title -->
                <div class="container section-title text-center" data-aos="fade-up">
                    <!-- <h2>Courses</h2> -->
                    <p>Keunggulan Kursus</p>
                </div><!-- End Section Title -->
                <div class="container">

                    <div class="row gy-4">
                        <!-- <div class="col-lg-2"></div> -->
                        <div class="col-lg-12">
                            <div class="row">
                                <card-keunggulan-program v-for="keunggulan in selectedType.keunggulan" :key="keunggulan"
                                    :title="keunggulan" :icon="''"></card-keunggulan-program>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
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
                            <h3 data-aos="fade-up" data-aos-delay="200" class="mb-4" style="text-align: center;">Sosial
                                Media Lembaga</h3>
                            <div class="row row-cols-3 row-cols-md-3 g-4 features">

                                <div class="col mt-1"
                                    @click="openNewTab('https://www.instagram.com/kursusbahasadankomputer_sci/profilecard/?igsh=MjNlNXR5Mnd3aHRw')">
                                    <div class="features-item justify-content-center">
                                        <i class="bi bi-instagram"
                                            style="font-size: 40px;background: linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4); -webkit-background-clip: text; color: transparent;"></i>
                                        <h3 class="d-none d-lg-block">
                                            <a href="javascript:void(0)" class="stretched-link">Instagaram</a>
                                        </h3>
                                    </div>
                                </div>
                                <div class="col mt-1 "
                                    @click="openNewTab('https://www.tiktok.com/@ayokursus?_t=8sTfZBCKRyU&_r=1')">
                                    <div class="features-item justify-content-center">
                                        <i class="bi bi-tiktok" style="font-size: 40px;color: #000000;"></i>
                                        <h3 class="d-none d-lg-block"><a href="javascript:void(0)"
                                                class="stretched-link">Tiktok</a></h3>
                                    </div>
                                </div>
                                <div class="col mt-1 "
                                    @click="openNewTab('https://www.facebook.com/profile.php?id=61567685371018&mibextid=ZbWKwL')">
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

    </div>
</template>

<script>
import CardKeunggulanProgram from '../components/CardKeunggulanProgram.vue'

import coursesData from '@/assets/course.json';
export default {
    name: 'CourseView',
    components: {
        CardKeunggulanProgram,
    },
    data() {
        return {
            timeLeft: 15 * 60 * 1000, // Waktu awal 3 hari dalam milidetik
            endTime: null, // Waktu akhir promo
            typeCourse: 'komputer-dasar',
            courses: coursesData.courses,
            routeType: this.$route.params.type,
            selectedType: [],
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
        };
    },
    computed: {
        countdownText() {
            const minutes = Math.floor(this.timeLeft / (1000 * 60)); // Total menit tersisa
            const seconds = Math.floor((this.timeLeft % (1000 * 60)) / 1000); // Total detik tersisa

            return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        },
        course() {
            const courseName = this.$route.params.type;
            // this.selectedType = this.courses.find(course => course.name == courseName)
            return this.courses.filter(course => course.name == courseName);
        },
        rowColsClass() {
            // Mengatur jumlah kolom sesuai dengan panjang array types
            if (this.course[0].types.length > 3) {
                return 'row-cols-md-5';  // Lebih dari 3 elemen, gunakan 5 kolom
            } else {
                return 'row-cols-md-3';  // 3 atau lebih sedikit elemen, gunakan 3 kolom
            }
        }
    },

    mounted() {
        console.log(this.routeType)
        this.initializeTimer();
        this.startCountdown();
        this.typeCourse = this.course[0].types[0].name
        this.selectedType = this.course[0].types[0]
        console.log(this.selectedType.image)
    },
    methods: {
        showDetail(type) {
            this.selectedType = type;
            this.typeCourse = type.name
        },
        initializeTimer() {
            // Tetapkan waktu akhir ke 15 menit dari waktu akses saat ini
            const now = new Date();
            this.endTime = new Date(now.getTime() + 15 * 60 * 1000); // Tambah 15 menit
            this.updateTimeLeft();
        },
        updateTimeLeft() {
            const now = new Date();
            this.timeLeft = this.endTime - now > 0 ? this.endTime - now : 0; // Hitung waktu tersisa
        },
        startCountdown() {
            setInterval(() => {
                this.updateTimeLeft();
            }, 1000); // Perbarui hitungan mundur setiap detik
        },
    },

}
</script>

<style scoped>
.bg-ungu {
    background-color: rgb(37, 150, 190);
}

.bounce-enter-active,
.bounce-leave-active {
    animation: bounce-in-out 0.6s ease-in-out both;
}

@keyframes bounce-in-out {
    0% {
        transform: scale(0.8);
        opacity: 0;
    }

    50% {
        transform: scale(1.2);
        opacity: 1;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}
</style>
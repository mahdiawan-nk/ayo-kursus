<template>
    <div>
        <main class="main">

            <!-- Page Title -->
            <section id="hero" class="hero section dark-background" :style="{ 'min-height': '30vh' }">

                <img :src="routeType == 'kursus-komputer' ? '/img/hero/ayokursus3.png' : '/img/hero/ayokursus2.png'"
                    alt="" data-aos="fade-in" style="">

                <div class="container text-center" :style="{ 'margin-top': '200px' }">
                </div>

            </section><!-- /Hero Section -->

            <section id="features" class="features section mt-4" >

                <div class="container" v-show="this.routeType != 'kursus-akuntansi-perpajakan'">

                    <div class="row row-cols-1 g-4 features" :class="rowColsClass">
                        <div v-for="list in course[0].types" :key="list.id" class="col my-1" data-aos="fade-up"
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
                    <div class="row mt-2 mb-5 flex-reverse">
                        <div class="col-lg-6 order-1 order-lg-1" data-aos="fade-up" data-aos-delay="100">
                            <img :src="'/' + selectedType.image" class="img-fluid" alt="">
                        </div>
                        <div class="col-lg-6 order-2 order-lg-2 content" data-aos="fade-up" data-aos-delay="200">
                            <h3 style="font-size: 1.8rem;color:rgb(37, 150, 190);text-decoration: underline">{{ selectedType.title }}</h3>
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
            <section id="features" class="features section" v-show="selectedType.name == typeCourse">
                <!-- Section Title -->
                <div class="container section-title text-center pb-0" data-aos="fade-up">
                    <!-- <h2>Courses</h2> -->
                    <p style="color: rgb(37, 150, 190);text-decoration: underline;font-size:1.25rem">Keunggulan Kursus</p>
                </div><!-- End Section Title -->
                <div class="container">

                    <div class="row gy-4">
                        <div class="col-lg-3"></div>
                        <div class="col-lg-6">
                            <div class="row">
                                <card-keunggulan-program v-for="keunggulan in selectedType.keunggulan" :key="keunggulan"
                                    :title="keunggulan" :icon="'bi-check-circle-fill'"></card-keunggulan-program>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <ContactView></ContactView>
        </main>

    </div>
</template>

<script>
import CardKeunggulanProgram from '../components/CardKeunggulanProgram.vue'
import ContactView from '../components/ContactView.vue'
import coursesData from '@/assets/course.json';
export default {
    name: 'CourseView',
    components: {
        CardKeunggulanProgram,
        ContactView
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
section, .section {
    color: var(--default-color);
    background-color: var(--background-color);
    padding: 1px 0;
    scroll-margin-top: 900px;
    overflow: clip;
}
.bounce-enter-active,
.bounce-leave-active {
    animation: bounce-in-out 0.6s ease-in-out both;
}

@media screen and (max-width: 768px) {
    .hero img{
        width: 100%;
        object-fit: fill;
    }
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
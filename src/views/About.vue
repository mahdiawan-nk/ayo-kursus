<template>
    <div>
        <main class="main">

            <!-- Page Title -->
            <section id="hero" class="hero section dark-background" :style="{ 'min-height': '30vh' }">

                <img src="img/hero-bg.jpg" alt="" data-aos="fade-in">

                <div class="container text-center" :style="{ 'margin-top': '200px' }">
                    <h2 data-aos="fade-up" data-aos-delay="100">Learning Today,<br>Leading Tomorrow</h2>
                    <!-- <p data-aos="fade-up" data-aos-delay="200">We are team of talented designers making websites with
                        Bootstrap</p> -->
                    <!-- <div class=" mt-4" data-aos="fade-up" data-aos-delay="300">
                        <a href="courses.html" class="btn-get-started">Get Started</a>
                    </div> -->
                </div>

            </section><!-- /Hero Section -->
            <section id="features" class="features section mt-4">

                <div class="container">

                    <div class="row row-cols-1 row-cols-md-3 g-4 features">
                        <div class="col" data-aos="fade-up" data-aos-delay="100">
                            <div class="features-item justify-content-center ">
                                <h3><a href="" class="stretched-link">Komputer Dasar</a></h3>
                            </div>
                        </div>
                        <div class="col" data-aos="fade-up" data-aos-delay="100">
                            <div class="features-item justify-content-center">
                                <h3><a href="" class="stretched-link">Desain Grafis</a></h3>
                            </div>
                        </div>
                        <div class="col" data-aos="fade-up" data-aos-delay="100">
                            <div class="features-item justify-content-center">
                                <h3><a href="" class="stretched-link">Programmer</a></h3>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            <section id="about" class="about section">

                <div class="container">
                    <div class="row my-5 flex-reverse">
                        <div class="col-lg-6 order-1 order-lg-1" data-aos="fade-up" data-aos-delay="100">
                            <img src="img/about.jpg" class="img-fluid" alt="">
                        </div>
                        <div class="col-lg-6 order-2 order-lg-2 content" data-aos="fade-up" data-aos-delay="200">
                            <h3>Voluptatem dignissimos provident quasi corporis</h3>
                            <p class="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore
                                magna aliqua.
                            </p>
                            <ul>
                                <li><i class="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea
                                        commodo
                                        consequat.</span></li>
                                <li><i class="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in
                                        voluptate velit.</span></li>
                                <li><i class="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea
                                        commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate trideta
                                        storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                            </ul>
                            <div v-if="timeLeft > 0" class="alert alert-info fs-3 font-weight-bold" role="alert">
                                Promo Berlaku {{ countdownText }} Lagi
                            </div>
                            <router-link to="/daftar" class="read-more"><span>Daftar Sekarang</span><i
                                    class="bi bi-arrow-right"></i></router-link>
                        </div>
                    </div>

                </div>

            </section>
        </main>

    </div>
</template>

<script>
export default {
    name: 'AboutView',
    data() {
        return {
            timeLeft: 3 * 24 * 60 * 60 * 1000, // Waktu awal 3 hari dalam milidetik
            endTime: null, // Waktu akhir promo
        };
    },
    computed: {
        countdownText() {
            const days = Math.floor(this.timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((this.timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((this.timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((this.timeLeft % (1000 * 60)) / 1000);

            return `${days}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        },
    },
    mounted() {
        this.initializeTimer();
        this.startCountdown();
    },
    methods: {
        initializeTimer() {
            // Tetapkan waktu akhir ke 3 hari dari waktu akses saat ini
            const now = new Date();
            this.endTime = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000); // Tambah 3 hari
            this.updateTimeLeft();
        },
        updateTimeLeft() {
            const now = new Date();
            this.timeLeft = this.endTime - now > 0 ? this.endTime - now : 0;
        },
        startCountdown() {
            setInterval(() => {
                this.updateTimeLeft();
            }, 1000);
        },
    },

}
</script>
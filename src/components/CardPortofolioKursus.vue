<template>
    <section id="courses" class="events section" style="background-color: rgb(37, 150, 190)">

        <!-- Section Title -->
        <div class="container section-title text-center" data-aos="fade-up">
            <p class="text-white">Portofolio Kursus</p>
        </div><!-- End Section Title -->

        <div ref="swiperContainer" :class="{
            'container swiper init-swiper': isMobile,
            'container': !isMobile
        }">

            <div :class="swiperWrapper">
                <div :class="swiperSlide"
                    v-for="({ title, subtitle, image }, index) in portofolioKursus" :key="index">
                    <div class="card">
                        <div class="card-img">
                            <img :src="image" alt="..." class="img-fluid">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"><a href="">{{ title }}</a></h5>
                            <p class="fst-italic text-center">{{ subtitle }}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </section><!-- /Courses Section -->
</template>

<script>
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import portofolioData from '@/assets/portofolio.json';
export default {
    name: 'CardPortofolioKursus',
    data() {
        return {
            isMobile: false,
            portofolioKursus: portofolioData.portofolio,
            swiperWrapper: 'swiper-wrapper',
            swiperSlide: 'swiper-slide d-flex align-items-stretch',
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
                        spaceBetween: 40,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                },
            },
        };
    },
    mounted() {
        this.isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
        if (this.isMobile) {

            this.initSwiper();
        }
        if (!this.isMobile) {
            this.swiperWrapper = 'row';
            this.swiperSlide = 'col-lg-3 d-flex align-items-stretch';
        }
        console.log('Is mobile:', this.isMobile);
    },
    methods: {
        initSwiper() {
            const swiperElement = this.$refs.swiperContainer; // Akses elemen dengan ref
            new Swiper(swiperElement, this.swiperConfig);
        },
    },
};
</script>

<style>
.events .card-body {
    z-index: 10;
    background: var(--surface-color);
    border-top: 4px solid var(--surface-color);
    padding: 5px;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    margin-top: -60px;
    transition: 0.3s;
}
</style>
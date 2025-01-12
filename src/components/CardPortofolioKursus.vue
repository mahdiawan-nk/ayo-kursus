<template>
    <section id="courses" class="events section pt-5 pb-1">

        <!-- Section Title -->
        <div class="container section-title text-center" data-aos="fade-up" style="padding-bottom:1rem">
            <p class="" style="color: rgb(37, 150, 190);text-decoration: underline;font-size:1.25rem">Portofolio Kursus
            </p>
        </div><!-- End Section Title -->

        <div ref="swiperContainer" :class="{
            'container swiper init-swiper': isMobile,
            'container mt-3': !isMobile
        }" style="padding:10px">

            <div :class="swiperWrapper">
                <div :class="swiperSlide" v-for="({ title, image }, index) in portofolioKursus" :key="index">
                    <div class="card mb-0">
                        <div class="card-img rounded" style="padding:10px;background-color: rgb(37, 150, 190);">
                            <img :src="image" alt="..." class="img-fluid">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title " style="font-size:0.9rem"><a href="">{{ title }}</a></h5>
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
                    delay: 200000,
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
        this.isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent) || window.innerWidth <= 768;
        if (this.isMobile || window.innerWidth <= 768) {

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
    padding: 10px 15px;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    margin-top: -100px;
    transition: 0.3s;
    margin-bottom: 65px;
}

.events .card-img {
    width: calc(100% + 60px);
    margin-left: -30px;
    overflow: hidden;
    z-index: 9;
    border-radius: 0;
}

.events .card-title {
    font-weight: 700;
    text-align: center;
    margin-bottom: 0px;
}

@media screen and (max-width: 768px) {
    .events .card-body {
        z-index: 10;
        background: var(--surface-color);
        border-top: 4px solid var(--surface-color);
        padding: 10px 15px;
        box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
        margin-top: -55px;
        transition: 0.3s;
        margin-bottom: 25px;
    }

    .events .card-img {
        width: calc(100% + 60px);
        margin-left: -30px;
        overflow: hidden;
        z-index: 9;
        border-radius: 0;
    }

    .events .card-title {
        font-weight: 700;
        text-align: center;
        margin-bottom: 0px;
    }
}
</style>
<template>
    <section id="testimonials" class="testimonials section">

        <!-- Section Title -->
        <div class="container section-title text-center" data-aos="fade-up">
            <p style="color: rgb(37, 150, 190);text-decoration: underline;font-size:1.25rem">Testimoni Program Kursus</p>
        </div><!-- End Section Title -->

        <div class="container-fluid" data-aos="fade-up" data-aos-delay="100" style="background-color: rgb(37, 150, 190)">

            <div class="swiper init-swiper">

                <div class="swiper-wrapper">

                    <div class="swiper-slide" v-for="list in testimoni" :key="list">
                        <div class="testimonial-wrap">
                            <div class="testimonial-item">
                                <img :src="'/'+list.img" class="testimonial-img" alt="">
                                <h3>{{ list.nama }}</h3>
                                <h4>{{ list.profesi }}</h4>
                                <div class="stars">
                                    <i class="bi bi-star-fill" v-for="n in Math.floor(list.review_star)"
                                        :key="'filled-' + n"></i>
                                    <i class="bi bi-star" v-if="list.review_star % 1 !== 0" :key="'half'"></i>
                                </div>
                                <p>
                                    <i class="bi bi-quote quote-icon-left"></i>
                                    <span>{{ list.ulasan }}</span>
                                    <i class="bi bi-quote quote-icon-right"></i>
                                </p>
                            </div>
                        </div>
                    </div><!-- End testimonial item -->



                </div>
                <div class="swiper-pagination"></div>
            </div>

        </div>

    </section>
</template>

<script>
import testimoniData from '@/assets/testimoni.json';
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
export default {
    name: 'PagesTestimoni',
    data() {
        return {
            testimoni: testimoniData.testimoni,
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
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                },
            },
        }
    },
    mounted() {
        this.initSwiper()
    },
    methods: {
        initSwiper() {
            const swiperElement = this.$el.querySelector('.swiper');
            new Swiper(swiperElement, this.swiperConfig);

        }
    }
}
</script>
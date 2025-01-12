<template>
    <section id="contact" class="contact section pt-5 pb-1" style="margin-bottom: 150px;">
        <!-- Section Title -->
        <div class="container section-title text-center" data-aos="fade-up" style="padding-bottom:3rem">
            <p style="color: rgb(37, 150, 190);text-decoration: underline;font-size:1.25rem">Alamat Lembaga</p>
        </div><!-- End Section Title -->

        <!-- End Google Maps -->

        <div class="container" data-aos="fade-up" data-aos-delay="100">

            <div class="row gy-4">

                <div class="col-lg-4">
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
                            <p>0823-8856-8452</p>
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
                            <p> 0853-3339-9210</p>
                        </div>
                    </div>

                </div>

                <div class="col-lg-8">
                    <div class="mb-4" data-aos="fade-up" data-aos-delay="200">
                        <iframe style="border:0; width: 100%; height: 400px;"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6883608303033!2d101.3906544!3d0.46245159999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5a9a1adf272f1%3A0xb7ae731a91a4a402!2sKURSUS%20KOMPUTER%20DAN%20BAHASA%20PEKANBARU!5e0!3m2!1sid!2sid!4v1735193244355!5m2!1sid!2sid"
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div><!-- End Contact Form -->
                <div class="col-lg-12 mt-0">
                    <h3 data-aos="fade-up" data-aos-delay="200" class="mb-4" style="text-align: center;">Sosial
                        Media Lembaga</h3>
                    <div class="row row-cols-3 row-cols-md-3 g-4 features pt-4">

                        <div class="col mt-1"
                            @click="openNewTab('https://www.instagram.com/kursusbahasadankomputer_sci/profilecard/?igsh=MjNlNXR5Mnd3aHRw')">
                            <div class="features-item justify-content-center">
                                <i class="bi bi-instagram"
                                    style="font-size: 40px;background: linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4); -webkit-background-clip: text; color: transparent;"></i>
                                <h3 class="d-none d-lg-block">
                                    <a href="https://www.instagram.com/kursusbahasadankomputer_sci/profilecard/?igsh=MjNlNXR5Mnd3aHRw" class="stretched-link">Instagaram</a>
                                </h3>
                            </div>
                        </div>
                        <div class="col mt-1 "
                            @click="openNewTab('https://www.tiktok.com/@ayokursus?_t=8sTfZBCKRyU&_r=1')">
                            <div class="features-item justify-content-center">
                                <i class="bi bi-tiktok" style="font-size: 40px;color: #000000;"></i>
                                <h3 class="d-none d-lg-block"><a href="https://www.tiktok.com/@ayokursus?_t=8sTfZBCKRyU&_r=1"
                                        class="stretched-link">Tiktok</a></h3>
                            </div>
                        </div>
                        <div class="col mt-1 "
                            @click="openNewTab('https://www.facebook.com/profile.php?id=61567685371018&mibextid=ZbWKwL')">
                            <div class="features-item justify-content-center">
                                <i class="bi bi-facebook"
                                    style="font-size: 40px;background: linear-gradient(45deg, #1877F2, #3b5998); -webkit-background-clip: text; color: transparent;"></i>
                                <h3 class="d-none d-lg-block"><a href="https://www.facebook.com/profile.php?id=61567685371018&mibextid=ZbWKwL"
                                        class="stretched-link">Facebook</a></h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </section>
</template>

<script>
export default {
    name: 'ContactView',
    methods: {
        openNewTab(url) {
            // window.open(url, '_blank', 'noopener,noreferrer');
            window.location.href = url
        }
    }
}
</script>
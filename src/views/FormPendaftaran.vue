<template>
    <section id="contact" class="contact section">
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
        <div class="container section-title text-center" data-aos="fade-up">
            <!-- <h2>Courses</h2> -->
            <p>Formulir Pendaftaran Program Kursus</p>
        </div><!-- End Section Title -->
        <div class="container" data-aos="fade-up" data-aos-delay="100">

            <div class="row gy-4">
                <div class="col-lg-12">
                    <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up"
                        data-aos-delay="200">
                        <div class="row gy-4">

                            <div class="col-md-6">
                                <input type="text" name="name" class="form-control" placeholder="Nama Lengkap"
                                    required="">
                            </div>

                            <div class="col-md-6 ">
                                <input type="text" class="form-control" name="email"
                                    placeholder="Tempat & Tanggal Lahir" required="">
                            </div>

                            <div class="col-md-6">
                                <input type="text" class="form-control" name="subject" placeholder="No Handphone/WA"
                                    required="">
                            </div>
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="subject" placeholder="Email Aktif"
                                    required="">
                            </div>
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="subject" placeholder="Nama Orang Tua"
                                    required="">
                            </div>
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="subject"
                                    placeholder="No Handphone Orang Tua" required="">
                            </div>
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="subject" placeholder="Alamat" required="">
                            </div>
                            <div class="col-md-6">
                                <input type="file" class="form-control" name="subject" placeholder="No Handphone/WA"
                                    required="">
                            </div>
                            <div class="col-md-6">
                                <label for="" class="form-label">Program yang Diminati</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault1">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Default radio
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault2" checked>
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Default checked radio
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="" class="form-label">Program Pembelajaran</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault1">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Default radio
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault2" checked>
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Default checked radio
                                    </label>
                                </div>
                                <br>
                                <label for="" class="form-label">Sistem Pertemuan</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault1">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Default radio
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault2" checked>
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Default checked radio
                                    </label>
                                </div>
                            </div>

                            <div class="col-md-12 text-center">
                                <div class="loading">Loading</div>
                                <div class="error-message"></div>
                                <div class="sent-message">Your message has been sent. Thank you!</div>

                                <button type="submit">Submit</button>
                            </div>

                        </div>
                    </form>
                </div><!-- End Contact Form -->

            </div>

        </div>

    </section><!-- /Contact Section -->
</template>

<script>
export default {
    name: 'FormPendaftaran'
}
</script>
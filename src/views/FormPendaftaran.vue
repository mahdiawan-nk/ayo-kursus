<template>
    <section id="contact" class="contact section pt-0 mb-5">
        <!-- Page Title -->
        <section id="hero" class="hero section dark-background" :style="{ 'min-height': '30vh' }">

            <img src="/img/slider/utama.jpg" alt="" data-aos="fade-in" style="object-fit: contain">

            <div class="container text-center" :style="{ 'margin-top': '200px' }">
            </div>

        </section><!-- /Hero Section -->
        <div class="container section-title text-center" data-aos="fade-up">
            <!-- <h2>Courses</h2> -->
            <p>Formulir Pendaftaran Program Kursus</p>
        </div><!-- End Section Title -->
        <div class="container p-5 rounded-2" data-aos="fade-up" data-aos-delay="100"
            style="background-color: rgb(37, 150, 190)">

            <div class="row gy-4">
                <div class="col-lg-12">
                    <form @submit.prevent="submitForm" class="php-email-form" data-aos="fade-up" data-aos-delay="200">
                        <div class="row gy-4">

                            <div class="col-md-6">
                                <label for="name">Nama Lengkap</label>
                                <input type="text" class="form-control" placeholder="Nama Lengkap" required=""
                                    v-model="formData.to_name">
                            </div>

                            <div class="col-md-6 ">
                                <label for="name">Tempat & Tanggal Lahir</label>
                                <input type="text" class="form-control" placeholder="Tempat & Tanggal Lahir" required=""
                                    v-model="formData.birth_place">
                            </div>

                            <div class="col-md-6">
                                <label for="name">No. Handphone/WA</label>
                                <input type="text" class="form-control" v-model="formData.wa_number"
                                    placeholder="No Handphone/WA" required="">
                            </div>
                            <div class="col-md-6">
                                <label for="name">Email Aktif</label>
                                <input type="text" class="form-control" v-model="formData.to_email"
                                    placeholder="Email Aktif" required="">
                            </div>
                            <div class="col-md-6">
                                <label for="name">Nama Orang Tua</label>
                                <input type="text" class="form-control" v-model="formData.parent_name"
                                    placeholder="Nama Orang Tua" required="">
                            </div>
                            <div class="col-md-6">
                                <label for="name">No Handphone Orang Tua</label>
                                <input type="text" class="form-control" v-model="formData.parent_number"
                                    placeholder="No Handphone Orang Tua" required="">
                            </div>
                            <div class="col-md-6">
                                <label for="name">Alamat</label>
                                <input type="text" class="form-control" v-model="formData.address" placeholder="Alamat"
                                    required="">
                            </div>
                            <div class="col-md-6">
                                <label for="name">Upload Foto</label>
                                <input type="file" class="form-control" placeholder="No Handphone/WA"
                                    @change="handleFileChange" accept="image/png, image/jpeg">
                            </div>
                            <div class="col-md-6">
                                <label for="" class="form-label">Program yang Diminati</label>
                                <div class="form-check ms-2" v-for="(list, index) in programDiminati" :key="list">
                                    <input class="form-check-input" type="radio" name="program_interest" :value="list"
                                        v-model="formData.program_interest" :id="'flexRadioDefault' + index">
                                    <label class="form-check-label" :for="'flexRadioDefault' + index">
                                        {{ list }}
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="" class="form-label">Program Pembelajaran</label>
                                <div class="form-check" v-for="(list, index) in programPembelajaran" :key="list">
                                    <input class="form-check-input" type="radio" name="program_pembelajaran"
                                        :value="list" v-model="formData.learnig_program"
                                        :id="'flexRadioDefault2' + index">
                                    <label class="form-check-label" :for="'flexRadioDefault2' + index">
                                        {{ list }}
                                    </label>
                                </div>

                                <br>
                                <label for="" class="form-label">Sistem Pertemuan</label>
                                <div class="form-check" v-for="(list, index) in sistemPertemuan" :key="list">
                                    <input class="form-check-input" type="radio" name="sistem_pertemuan" :value="list"
                                        v-model="formData.learning_system" :id="'flexRadioDefault3' + index">
                                    <label class="form-check-label" :for="'flexRadioDefault3' + index">
                                        {{ list }}
                                    </label>
                                </div>
                            </div>

                            <div class="col-md-12 text-center">
                                <div class="loading">Loading</div>
                                <div class="error-message"></div>
                                <div class="sent-message">Your message has been sent. Thank you!</div>

                                <button type="submit" style="background-color: #2b960b">Submit</button>
                            </div>

                        </div>
                    </form>
                </div><!-- End Contact Form -->

            </div>

        </div>

    </section><!-- /Contact Section -->
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
                    <h3 data-aos="fade-up" data-aos-delay="200" class="mb-4" style="text-align: center;">Sosial Media
                        Lembaga</h3>
                    <div class="row row-cols-2 row-cols-md-3 g-4 features">
                        <div class="col mt-1 d-lg-none d-md-block">
                            <div class="features-item">
                                <i class="bi bi-instagram"
                                    style="font-size: 40px;background: linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4); -webkit-background-clip: text; color: transparent;"></i>
                                <i class="bi bi-tiktok" style="font-size: 40px;color: #000000;"></i>
                                <i class="bi bi-facebook"
                                    style="font-size: 40px;background: linear-gradient(45deg, #1877F2, #3b5998); -webkit-background-clip: text; color: transparent;"></i>
                            </div>
                        </div>
                        <div class="col mt-1 d-none d-lg-block"
                            @click="openNewTab('https://www.instagram.com/kursusbahasadankomputer_sci/profilecard/?igsh=MjNlNXR5Mnd3aHRw')">
                            <div class="features-item">
                                <i class="bi bi-instagram"
                                    style="font-size: 40px;background: linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4); -webkit-background-clip: text; color: transparent;"></i>
                                <h3 class="d-none d-lg-block">
                                    <a href="javascript:void(0)" class="stretched-link">Instagaram</a>
                                </h3>
                            </div>
                        </div>
                        <div class="col mt-1 d-none d-lg-block"
                            @click="openNewTab('https://www.tiktok.com/@ayokursus?_t=8sTfZBCKRyU&_r=1')">
                            <div class="features-item">
                                <i class="bi bi-tiktok" style="font-size: 40px;color: #000000;"></i>
                                <h3 class="d-none d-lg-block"><a href="javascript:void(0)"
                                        class="stretched-link">Tiktok</a></h3>
                            </div>
                        </div>
                        <div class="col mt-1 d-none d-lg-block"
                            @click="openNewTab('https://www.facebook.com/profile.php?id=61567685371018&mibextid=ZbWKwL')">
                            <div class="features-item">
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
</template>

<script>
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import axios from 'axios';
export default {
    name: 'FormPendaftaran',
    data() {
        return {
            formData: {
                to_name: '',
                birth_place: '',
                wa_number: '',
                to_email: '',
                parent_name: '',
                parent_number: '',
                address: '',
                program_interest: '',
                learnig_program: '',
                learning_system: ''
            },
            paramSendEmail: {
                service_id: 'service_yg9vnzo',
                template_id: 'template_p1cxva2',
                user_id: 'y0zw9pMUlcdSox9cF',
                from_name: 'AYO KURSUS',
            },
            programDiminati: ['Kursus Komputer Dasar', 'Kursus Desain Grafis', 'Kursus Programmer', 'Kursus Bahasa Arab', 'Kursus Bahasa Jepang', 'Kursus Bahasa Inggris', 'Kursus Bahasa Korea', 'Kursus Bahasa Mandarin'],
            programPembelajaran: ['Kelas', 'Privat'],
            sistemPertemuan: ['Offline', 'Online']
        }
    },
    methods: {
        handleFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                const fileType = file.type;
                if (fileType !== 'image/png' && fileType !== 'image/jpeg') {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Format file harus PNG/JPEG!",
                    });
                    this.selectedFile = null;
                } else {
                    this.error = '';
                    this.selectedFile = file;
                }
            }
        },
        async submitForm() {
            const paramSendEmail = {
                service_id: 'service_yg9vnzo',
                template_id: 'template_p1cxva2',
                user_id: 'y0zw9pMUlcdSox9cF',
                template_params: {
                    'from_name': 'AYO KURSUS',
                    'to_name': this.formData.to_name,
                    'birth_place': this.formData.birth_place,
                    'wa_number': this.formData.wa_number,
                    'to_email': this.formData.to_email,
                    'parent_name': this.formData.parent_name,
                    'parent_phone': this.formData.parent_number,
                    'address': this.formData.address,
                    'program_interest': this.formData.program_interest,
                    'learning_program': this.formData.learnig_program,
                    'meeting_system': this.formData.learning_system
                }  // Assign formData values to template_params
            };

            console.log(paramSendEmail)

            // Show loading SweetAlert
            const loadingSwal = Swal.fire({
                title: 'Sending...',
                text: 'Please wait while we process your request.',
                icon: 'info',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading(); // Show the loading spinner
                }
            });

            try {
                console.log(paramSendEmail);
                const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', paramSendEmail, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log(response);

                // Reset the form data
                this.formData = {
                    from_name: 'AYO KURSUS',
                    to_name: '',
                    birth_place: '',
                    wa_number: '',
                    to_email: '',
                    parent_name: '',
                    parent_number: '',
                    address: '',
                    program_interest: '',
                    learnig_program: '',
                    learning_system: ''
                };

                // Close the loading spinner and show success alert
                loadingSwal.close();
                Swal.fire({
                    title: "SUCCESS!",
                    text: "Pendaftaran Berhasil! Check Email Anda Untuk Informasi Pendaftaran",
                    icon: "success"
                }).then(() => {
                    // Redirect to the 'Daftar' page after successful submission
                    this.$router.push({
                        name: 'Daftar'
                    });
                });
            } catch (error) {
                console.error('Error:', error);
                loadingSwal.close(); // Close loading if there is an error
                Swal.fire({
                    title: 'Error!',
                    text: 'An error occurred while sending the email.',
                    icon: 'error'
                });
            }
        }

    }
}
</script>

<style>
.contact .php-email-form input[type=text],
.contact .php-email-form input[type=email],
.contact .php-email-form textarea {
    font-size: 14px;
    padding: 10px 15px;
    box-shadow: none;
    border-radius: 0;
    color: var(--default-color);
    background-color: white;
    border-color: color-mix(in srgb, var(--default-color), transparent 80%);
}

form label {
    color: white;
}
</style>
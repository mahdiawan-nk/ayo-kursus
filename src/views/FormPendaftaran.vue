<template>
    <section id="contact" class="contact section pt-0">
        <!-- Page Title -->
        <section id="hero" class="hero section dark-background" :style="{ 'min-height': '30vh' }">

            <img src="img/bg-2.png" alt="" data-aos="fade-in">

            <div class="container text-center" :style="{ 'margin-top': '200px' }">
                <h2 data-aos="fade-up" data-aos-delay="100">Learning Today,<br>Leading Tomorrow</h2>
            </div>

        </section><!-- /Hero Section -->
        <div class="container section-title text-center" data-aos="fade-up">
            <!-- <h2>Courses</h2> -->
            <p>Formulir Pendaftaran Program Kursus</p>
        </div><!-- End Section Title -->
        <div class="container p-5 rounded-2" data-aos="fade-up" data-aos-delay="100" style="background-color: #d546d9">

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
</style>
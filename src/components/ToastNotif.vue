<template>
    <div></div>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    name: 'ToastNotif',
    data() {
        return {
            registrants: [
                { name: 'Ahmad Fauzan', course: 'Komputer Dasar', time: '2 jam lalu' },
                { name: 'Siti Nurhaliza', course: 'Desain Grafis', time: '3 jam lalu' },
                { name: 'Dewi Anggraini', course: 'Programmer', time: '1 jam lalu' },
                { name: 'Budi Santoso', course: 'Bahasa Arab', time: '4 jam lalu' },
                { name: 'Rina Kartika', course: 'Bahasa Jepang', time: '30 menit lalu' },
                { name: 'Fajar Pratama', course: 'Bahasa Inggris', time: '5 menit lalu' },
                { name: 'Nina Amelia', course: 'Bahasa Korea', time: '2 jam lalu' },
                { name: 'Hendra Wijaya', course: 'Bahasa Mandarin', time: '1 jam lalu' },
                { name: 'Rahmat Hidayat', course: 'Komputer Dasar', time: '2 jam lalu' },
                { name: 'Lina Mawar', course: 'Desain Grafis', time: '10 menit lalu' },
                { name: 'Taufik Ismail', course: 'Programmer', time: '20 menit lalu' },
                { name: 'Rizka Febriani', course: 'Bahasa Arab', time: '25 menit lalu' },
                { name: 'Zahra Putri', course: 'Bahasa Jepang', time: '15 menit lalu' },
                { name: 'Arif Ramadhan', course: 'Bahasa Inggris', time: '9 menit lalu' },
                { name: 'Yuni Safitri', course: 'Bahasa Korea', time: '12 menit lalu' },
                { name: 'Deni Kusuma', course: 'Bahasa Mandarin', time: '3 jam lalu' },
                { name: 'Rizky Fauzi', course: 'Komputer Dasar', time: '45 menit lalu' },
                { name: 'Wulan Sari', course: 'Desain Grafis', time: '2 jam lalu' },
                { name: 'Irfan Hakim', course: 'Programmer', time: '3 jam lalu' },
                { name: 'Aulia Anjani', course: 'Bahasa Arab', time: '5 menit lalu' },
                { name: 'Kevin Pratama', course: 'Bahasa Jepang', time: '1 jam lalu' },
                { name: 'Vina Melati', course: 'Bahasa Inggris', time: '2 jam lalu' },
                { name: 'Gilang Saputra', course: 'Bahasa Korea', time: '11 menit lalu' },
                { name: 'Sari Anggraini', course: 'Bahasa Mandarin', time: '20 menit lalu' },
                { name: 'Andi Firmansyah', course: 'Komputer Dasar', time: '25 menit lalu' },
            ],
        };
    },
    mounted() {
        setInterval(() => {
            // Ambil data acak dari daftar registrants
            const randomRegistrant = this.registrants[Math.floor(Math.random() * this.registrants.length)];

            const content = `
        <div class="d-flex align-items-center">
          <div class="me-1">
            <img src="/img/ayo-kursus.png" alt="Logo" class="rounded-circle mx-auto d-block" style="width: 50px; height: 50px; object-fit: cover;" />
          </div>
          <div class="d-flex flex-column mx-3">
            <h3 class=" fw-bold mb-1 text-white" style="font-size: 14px;">${randomRegistrant.name}</h3>
            <span class="mb-1 text-white" style="font-size: 12px;">Telah mendaftar program kursus ${randomRegistrant.course} ${randomRegistrant.time}</span>
          </div>
        </div>
      `;

            toast(content, {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 2000, // Durasi tampilan toast
                closeOnClick: false, // Toast bisa ditutup secara manual
                dangerouslyHTMLString: true, // Mendukung HTML di dalam konten
                closeButton: false,
                hideProgressBar: true,
            });
        }, 5000); // Interval waktu 5 detik
    },
};
</script>


<style>
.Toastify__toast {
    background: rgb(37, 150, 190);
    height: 120px;
    border-radius: 4px;
    box-shadow: 0 1px 10px 0 #0000001a, 0 2px 15px 0 #0000000d;
    box-sizing: border-box;
    cursor: pointer;
    direction: ltr;
    display: flex;
    font-family: var(--toastify-font-family);
    justify-content: space-between;
    margin-bottom: 1rem;
    max-height: var(--toastify-toast-max-height);
    min-height: var(--toastify-toast-min-height);
    overflow: hidden;
    padding: 8px;
    position: relative;
    z-index: 0;
}

.Toastify__toast-body {
    height: 50px;
    align-items: center;
    display: flex;
    flex: 1 1 auto;
    margin: auto 0;
    padding: 10px;
    white-space: pre-wrap;
}

.Toastify__toast-container {
    left: 10px;
    margin-top: 75px;
    padding: 0;
}

@media only screen and (max-width: 480px) {
    .Toastify__toast-container {
        left: 10px;
        margin-top: 75px;
        padding: 0;
        width: 70vw;
    }
}
</style>
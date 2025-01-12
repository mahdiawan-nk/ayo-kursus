<template>
    <Transition name="slide-fade">
        <div class="popup-wrapper" v-show="showed">
            <div class="popup rounded-2" :class="{ 'popup-slide-in': showed, 'popup-slide-out': !showed }">
                <div class="popup-content">
                    <img class="popup-icon" src="/img/ayo-kursus.png" alt="Icon" />
                    <div class="popup-info">
                        <h2>{{ selectRegistrant.name }}</h2>
                        <p class="m-0">Telah Mendaftar Program {{ selectRegistrant.course }}</p>
                        <p class="m-0">{{ selectRegistrant.time }}</p>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
export default {
    name: 'ToastNotif',

    data() {
        return {
            showed: false,
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
            selectRegistrant: {},
        };
    },
    mounted() {
        setInterval(() => {
            this.showed = true; // Tampilkan notifikasi
            const randomRegistrant = this.registrants[Math.floor(Math.random() * this.registrants.length)];
            this.selectRegistrant = randomRegistrant;

            setTimeout(() => {
                this.showed = false; // Sembunyikan notifikasi setelah 1.5 detik
                this.selectRegistrant = {};
            }, 3500); // Waktu untuk menyembunyikan
        }, 6500);
    },
};
</script>




<style scoped>
.hidden {
    display: none;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

.popup-wrapper {
    position: fixed;
    top: 5%;
    left: 10px;
    height: 35vw;
    width: 35%;
    /* Overlay */
    display: flex;
    align-items: flex-start;
    z-index: 10000;
}

.popup {
    position: relative;
    background-color: rgb(255,191,0);
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
    padding: 5px;
    box-sizing: border-box;
    transform: translateX(-100%);
    /* Default state (hidden) */
    transition: transform 0.5s ease;
}

.popup h2 {
    color: black;
    font-size: 14px;
    margin-bottom: 5px;
}

.popup p {
    color: black;
    font-size: 10px;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
}

.popup-content {
    display: flex;
    align-items: center;
    width: 15vw;
}

.popup-icon {
    width: 50px;
    height: 50px;
    margin-right: 15px;
    border-radius: 50%;
    object-fit: cover;
}

.popup-info {
    flex: 1;
}

.popup-slide-in {
    transform: translateX(0);
    /* Visible state */
}

.popup-slide-out {
    transform: translateX(-100%);
    /* Hidden state */
}

@media screen and (max-width: 768px) {
    .popup-wrapper {
        top: 10%;
    }
    .popup-content {
        display: flex;
        align-items: center;
        width: 50vw;
    }
}
</style>
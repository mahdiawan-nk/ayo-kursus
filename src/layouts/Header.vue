<template>
    <header id="header" class="header d-flex align-items-center justify-content-center sticky-top">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-center">
            <router-link to="/" class="logo d-flex align-items-center">
                <img src="/img/logo-2.png" alt="">
                <div class="overlay"></div>
                <!-- <h1 class="sitename ms-2">ayokursus.com</h1> -->
            </router-link>

        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderView',
    data() {
        return {
            isMobileNavActive: false, // for toggling the mobile menu
        };
    },
    methods: {
        toggleMobileNav() {
            this.isMobileNavActive = !this.isMobileNavActive;
        },
    },
    watch: {
        isMobileNavActive(newVal) {
            if (newVal) {
                // Add 'mobile-nav-active' class to body when the menu is open
                document.body.classList.add('mobile-nav-active');
            } else {
                // Remove 'mobile-nav-active' class from body when the menu is closed
                document.body.classList.remove('mobile-nav-active');
            }
        },
    },
}
</script>

<style scoped>
.header {
    background-color: rgb(37, 150, 190);

}

.header h1 {
    color: #fff;
}

</style>
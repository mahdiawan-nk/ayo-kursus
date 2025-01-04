<template>
    <div class="col-lg-12 col-md-4 my-2" data-aos="fade-up" data-aos-delay="100">
        <div class="features-item">
            <i :class="'bi '+icon" style="color: rgb(37, 150, 190);"></i>
            <h3><a href="#" class="stretched-link">{{ title }}</a></h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardKeunggulanProgram',
        props: {
            title: {
                type: String,
                required: true
            },
            icon:{
                type: String,
                required: false,
            },
        }
    }
</script>

<style scoped>  

</style>
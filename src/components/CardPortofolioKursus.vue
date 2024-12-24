<template>
    <div class="col-md-3 d-flex align-items-stretch">
        <div class="card">
            <div class="card-img">
                <img :src="image" alt="...">
            </div>
            <div class="card-body">
                <h5 class="card-title"><a href="">{{ title }}</a></h5>
                <p class="fst-italic text-center">{{ subtitle }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardPortofolioKursus',
        props: {
            title: {
                type: String,
                required: true
            },
            subtitle: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            },

        }
    }
</script>
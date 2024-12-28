<template>
    <div class="col-md-3 d-flex align-items-stretch">
        <div class="card">
            <div class="card-img">
                <img :src="image" alt="..." class="img-fluid">
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

<style>
.events .card-body {
    z-index: 10;
    background: var(--surface-color);
    border-top: 4px solid var(--surface-color);
    padding: 5px;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    margin-top: -60px;
    transition: 0.3s;
}
</style>
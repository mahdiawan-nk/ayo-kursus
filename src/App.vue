<template>
	<HeaderView />
	<router-view />
	<FooterView />
</template>

<script>
import HeaderView from './layouts/Header'
import FooterView from './layouts/Footer'

export default {
	name: 'App',
	components: {
		HeaderView,
		FooterView
	},
	mounted() {
	},
	watch: {
		// AOS.init({
		// 	duration: 600,
		// 	easing: 'ease-in-out',
		// 	once: true,
		// 	mirror: false
		// });
	}
}
</script>

<!-- <style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style> -->

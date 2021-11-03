<template>
	<div id="app" class="lg:flex">
		<Navbar />
		<Menu />
		<router-view />
	</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Menu from "@/components/Menu.vue";

export default {
	name: "Home",
	components: {
		Navbar,
		Menu,
	},
};
</script>

<style lang="scss">
#app {
	// font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s ease;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>

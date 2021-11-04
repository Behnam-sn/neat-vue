<template>
	<div id="app" class="lg:flex">
		<Navbar />
		<Menu />
		<transition name="component-fade" mode="out-in">
			<router-view />
		</transition>
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

.component-fade-enter-active,
.component-fade-leave-active {
	transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
	opacity: 0;
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

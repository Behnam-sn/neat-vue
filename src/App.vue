<template>
	<div id="app" class="lg:flex">
		<Navbar />
		<Menu />
		<div class="w-full pt-24 lg:pt-0">
			<router-view v-slot="{ Component }">
				<transition name="route" mode="out-in">
					<component :is="Component" />
				</transition>
			</router-view>
		</div>
	</div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Menu from "./components/Menu.vue";

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

.route-enter-active,
.route-leave-active {
	transition-property: opacity;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 300ms;
}

.route-enter-from,
.route-leave-to {
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

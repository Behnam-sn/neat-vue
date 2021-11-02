<template>
	<div id="app" class="bg-gray-50">
		<Navbar />
		<router-view />
	</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
	name: "Home",
	components: {
		Navbar,
	},
};
</script>

<style lang="scss">
#app {
	// font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>

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
		<FooterBar />
	</div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

import Navbar from "./components/Navbar.vue";
import Menu from "./components/Menu.vue";
import FooterBar from "./components/FooterBar.vue";

export default {
	name: "Home",
	created: function () {
		this.initTheme();
		this.testToken();
	},
	methods: {
		...mapMutations(["initTheme"]),
		...mapActions(["testToken"]),
	},
	components: {
		Navbar,
		Menu,
		FooterBar,
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
	transition-property: opacity;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 200ms;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}

.send-enter-active,
.send-leave-active {
	transition-property: opacity;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 300ms;
}
.send-enter-from,
.send-leave-to {
	opacity: 0;
}
</style>

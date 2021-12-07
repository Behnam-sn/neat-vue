<template>
	<div id="app">
		<Navbar />
		<SideMenu />
		<div
			class="w-full pt-24 lg:pt-0 lg:pl-20 lg:mb-0"
			:class="{ 'mb-56': isNotNote }"
		>
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
import { mapActions } from "vuex";

import Navbar from "./components/Navbar.vue";
import SideMenu from "./components/SideMenu.vue";
import FooterBar from "./components/FooterBar.vue";

export default {
	name: "Home",
	created: function () {
		this.initTheme();
		this.testToken();
	},
	computed: {
		isNotNote() {
			let path = this.$route.path;
			if (path.includes("/addnote") || path.includes("/note")) {
				return false;
			} else {
				return true;
			}
		},
	},
	methods: {
		...mapActions(["initTheme", "testToken"]),
	},
	components: {
		Navbar,
		SideMenu,
		FooterBar,
	},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&family=Roboto:wght@400;500;700&family=Rubik:wght@300;400;500&display=swap");

#app {
	// font-family: Avenir, Helvetica, Arial, sans-serif;
	font-smooth: always;
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

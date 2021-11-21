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
		<FooterBar v-if="isNotNote">
			<router-link
				to="/addnote"
				class="
					footer-bar-btn
					flex
					justify-center
					items-center
					absolute
					w-16
					h-16
					ring-8
					rounded-full
					bg-secondary
					dark:bg-primary
					ring-gray-300
					dark:ring-gray-800
					transition
					duration-500
				"
			>
				<PlusIcon
					class="
						h-12
						text-primary
						dark:text-secondary
						transition
						duration-500
					"
				/>
			</router-link>
		</FooterBar>
	</div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

import Navbar from "./components/Navbar.vue";
import Menu from "./components/Menu.vue";
import FooterBar from "./components/FooterBar.vue";

import PlusIcon from "./assets/svg/PlusIcon.vue";

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
		...mapMutations(["initTheme"]),
		...mapActions(["testToken"]),
	},
	components: {
		Navbar,
		Menu,
		FooterBar,
		PlusIcon,
	},
};
</script>

<style lang="scss">
#app {
	// font-family: Avenir, Helvetica, Arial, sans-serif;
	font-smooth: always;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.footer-bar-btn {
	top: -65%;
	left: 50%;
	transform: translate(-50%, 0);
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

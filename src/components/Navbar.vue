<template>
	<div id="nav" class="px-6 pt-7 lg:hidden">
		<div class="flex flex-row justify-between items-center pb-3">
			<div>Neat</div>
			<div class="flex flex-row">
				<button
					class="bg-black text-customWhite dark:bg-customWhite dark:text-black p-1 mr-5 rounded-md"
					@click="changeTheme"
				>
					<transition name="fade" mode="out-in">
						<SunIcon v-if="darkMode == 'dark'" />
						<MoonIcon v-else />
					</transition>
				</button>
				<button @click="collapse">
					<BarsIcon />
				</button>
			</div>
			<!-- <div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div> -->
		</div>
		<Collapsible />
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import Collapsible from "@/components/Navbar/Collapsible.vue";

import BarsIcon from "@/assets/svg/BarsIcon.vue";
import MoonIcon from "@/assets/svg/MoonIcon.vue";
import SunIcon from "@/assets/svg/SunIcon.vue";

export default {
	name: "Navbar",
	created: function() {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	},
	methods: {
		...mapMutations(["changeTheme", "collapse"]),
	},
	computed: {
		...mapGetters({ darkMode: "getTheme" }),
	},
	components: {
		Collapsible,
		BarsIcon,
		MoonIcon,
		SunIcon,
	},
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.15s ease;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}

// #nav {
// 	padding: 30px;

// 	a {
// 		font-weight: bold;
// 		color: #2c3e50;

// 		&.router-link-exact-active {
// 			color: #42b983;
// 		}
// 	}
// }
</style>

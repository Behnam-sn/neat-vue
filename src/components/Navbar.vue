<template>
	<div id="nav" class="px-6 pt-7 lg:hidden">
		<div class="flex flex-row justify-between items-center pb-3">
			<router-link to="/">
				<h1 class="font-Poppins-Medium text-2xl">Neat</h1>
			</router-link>
			<div class="flex flex-row">
				<button
					class="transition duration-500 bg-black text-customWhite dark:bg-customWhite dark:text-black p-1 mr-5 rounded-md"
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

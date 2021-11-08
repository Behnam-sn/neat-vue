<template>
	<div
		class="lg:hidden w-full fixed py-6 px-7 bg-secondary dark:bg-primary transition duration-500"
	>
		<div class="flex flex-row justify-between items-center">
			<router-link to="/">
				<h1 class="font-Poppins-Medium text-2xl">Neat</h1>
			</router-link>
			<div class="flex flex-row">
				<button
					class="bg-primary text-secondary dark:bg-secondary dark:text-primary p-1 mr-5 rounded-md transition duration-500"
					@click="changeTheme"
				>
					<transition name="fade" mode="out-in">
						<SunIcon class="h-7" v-if="darkMode == 'dark'" />
						<MoonIcon class="h-7" v-else />
					</transition>
				</button>
				<button @click="collapse">
					<BarsIcon class="h-7" />
				</button>
			</div>
		</div>
		<Collapsible />
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import Collapsible from "@/components/NavbarCollapsible.vue";

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

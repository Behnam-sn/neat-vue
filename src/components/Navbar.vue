<template>
	<div id="nav">
		<div
			class="flex flex-row justify-between items-center px-6 py-7 lg:hidden"
		>
			<div>Neat</div>
			<div class="flex flex-row">
				<button
					class="bg-black text-customWhite dark:bg-customWhite dark:text-black p-1 mr-5 rounded"
					@click="changeTheme"
				>
					<transition name="fade" mode="out-in">
						<SunIcon v-if="darkMode == 'dark'" />
						<MoonIcon v-else />
					</transition>
				</button>
				<BarsIcon />
			</div>
			<!-- <div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div> -->
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import BarsIcon from "@/components/svg/BarsIcon.vue";
import MoonIcon from "@/components/svg/MoonIcon.vue";
import SunIcon from "@/components/svg/SunIcon.vue";

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
		...mapMutations(["changeTheme"]),
	},
	computed: {
		...mapGetters({ darkMode: "getTheme" }),
	},
	components: {
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

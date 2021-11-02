<template>
	<div
		id="nav"
		class="flex flex-row justify-between items-center px-6 py-7 lg:hidden"
	>
		<div>Neat</div>
		<div class="flex flex-row">
			<div @click="changeTheme">
				<MoonIcon class="mr-5" />
			</div>
			<BarsIcon />
		</div>
		<!-- <div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div> -->
	</div>
</template>

<script>
import BarsIcon from "@/components/svg/BarsIcon.vue";
import MoonIcon from "@/components/svg/MoonIcon.vue";

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
		changeTheme() {
			if (localStorage.theme == "light") {
				localStorage.theme = "dark";
				document.documentElement.classList.add("dark");
			} else {
				localStorage.theme = "light";
				document.documentElement.classList.remove("dark");
			}
		},
	},
	components: {
		BarsIcon,
		MoonIcon,
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

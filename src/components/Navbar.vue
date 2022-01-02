<template>
	<div
		class="
			z-10
			lg:hidden
			w-full
			fixed
			py-6
			px-7
			bg-secondary
			dark:bg-primary
			text-primary
			dark:text-secondary
			transition
			duration-500
		"
	>
		<div class="flex flex-row justify-between items-center">
			<router-link to="/">
				<h1 class="font-Poppins font-medium text-2xl">Neat</h1>
			</router-link>
			<div class="flex flex-row">
				<button
					class="
						bg-primary
						text-secondary
						dark:bg-secondary dark:text-primary
						p-1
						mr-5
						rounded-md
						transition
						duration-500
					"
					@click="changeTheme"
				>
					<transition name="fade" mode="out-in">
						<SunIcon class="h-7" v-if="theme == 'dark'" />
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
import { mapGetters, mapActions } from "vuex";

import Collapsible from "./Navbar/Collapsible.vue";

import BarsIcon from "../assets/svg/BarsIcon.vue";
import MoonIcon from "../assets/svg/MoonIcon.vue";
import SunIcon from "../assets/svg/SunIcon.vue";

export default {
	name: "TheNavbar",
	computed: {
		...mapGetters({
			theme: "getTheme",
			collapseStatus: "getCollapseStatus",
		}),
	},
	watch: {
		$route() {
			if (this.collapseStatus) {
				this.collapse();
			}
		},
	},
	methods: {
		...mapActions(["changeTheme", "collapse"]),
	},
	components: {
		Collapsible,
		BarsIcon,
		MoonIcon,
		SunIcon,
	},
};
</script>

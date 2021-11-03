<template>
	<div
		class="h-screen hidden lg:flex flex-col justify-between border-r-2 border-gray-300 dark:border-gray-500 py-10 px-5"
	>
		<div class="flex flex-col items-center">
			<div class="my-4">Neat</div>
			<PlusIcon class="h-10 my-4" />
		</div>
		<div class="flex flex-col items-center">
			<HomeIcon class="h-10 my-4" />
			<UserIcon class="h-10 my-4" />
			<InfoIcon class="h-10 my-4" />
		</div>
		<div class="flex flex-col items-center">
			<button
				class="bg-black text-customWhite dark:bg-customWhite dark:text-black my-4 rounded-md"
				@click="changeTheme"
			>
				<transition name="fade" mode="out-in">
					<SunIcon class="h-10 p-2" v-if="darkMode == 'dark'" />
					<MoonIcon class="h-10 p-2" v-else />
				</transition>
			</button>
			<LoginIcon class="h-10 my-4" />
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import PlusIcon from "@/assets/svg/PlusIcon.vue";
import HomeIcon from "@/assets/svg/HomeIcon.vue";
import UserIcon from "@/assets/svg/UserIcon.vue";
import InfoIcon from "@/assets/svg/InfoIcon.vue";
import MoonIcon from "@/assets/svg/MoonIcon.vue";
import SunIcon from "@/assets/svg/SunIcon.vue";
import LoginIcon from "@/assets/svg/LoginIcon.vue";

export default {
	name: "Menu",
	methods: {
		...mapMutations(["changeTheme"]),
	},
	computed: {
		...mapGetters({ darkMode: "getTheme" }),
	},
	components: {
		PlusIcon,
		HomeIcon,
		UserIcon,
		InfoIcon,
		MoonIcon,
		SunIcon,
		LoginIcon,
	},
};
</script>

<template>
	<div
		id="menu"
		class="
			h-screen
			hidden
			lg:flex
			flex-col
			items-center
			justify-between
			border-r-2 border-gray-300
			dark:border-gray-500
			py-10
			px-5
		"
	>
		<div class="flex flex-col items-center">
			<router-link to="/">
				<h1 class="font-Poppins-Medium text-xl my-4">Neat</h1>
			</router-link>
			<router-link :to="username ? '/addnote' : '/login'">
				<PlusIcon class="h-11 my-4" />
			</router-link>
		</div>
		<div class="flex flex-col items-center">
			<router-link to="/public">
				<HomeIcon class="h-9 my-4" />
			</router-link>
			<router-link :to="username ? `/user/${username}` : '/login'">
				<UserIcon class="h-9 my-4" />
			</router-link>
			<router-link to="/settings" v-if="username">
				<CogIcon class="h-9 my-4" />
			</router-link>
			<router-link to="/about">
				<InfoIcon class="h-9 my-4" />
			</router-link>
		</div>
		<div class="flex flex-col items-center">
			<button
				class="
					transition
					duration-500
					bg-primary
					text-secondary
					dark:bg-secondary dark:text-primary
					my-4
					rounded-md
				"
				@click="changeTheme"
			>
				<transition name="fade" mode="out-in">
					<SunIcon class="h-11 p-2" v-if="theme == 'dark'" />
					<MoonIcon class="h-11 p-2" v-else />
				</transition>
			</button>
			<button v-if="username" @click="logout">
				<LogoutIcon class="h-9 my-4" />
			</button>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import PlusIcon from "../assets/svg/PlusIcon.vue";
import HomeIcon from "../assets/svg/HomeIcon.vue";
import UserIcon from "../assets/svg/UserIcon.vue";
import CogIcon from "../assets/svg/CogIcon.vue";
import InfoIcon from "../assets/svg/InfoIcon.vue";
import MoonIcon from "../assets/svg/MoonIcon.vue";
import SunIcon from "../assets/svg/SunIcon.vue";
import LogoutIcon from "../assets/svg/LogoutIcon.vue";

export default {
	name: "Menu",
	computed: {
		...mapGetters({ theme: "getTheme", username: "getUsername" }),
	},
	methods: {
		...mapMutations(["changeTheme", "logout"]),
	},
	components: {
		PlusIcon,
		HomeIcon,
		UserIcon,
		CogIcon,
		InfoIcon,
		MoonIcon,
		SunIcon,
		LogoutIcon,
	},
};
</script>

<style lang="scss" scoped>
#menu {
	transition-property: border-color;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 500ms;
}
</style>

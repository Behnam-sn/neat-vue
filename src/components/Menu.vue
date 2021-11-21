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

			<MenuButton address="/addnote" tooltipText="Add Note">
				<PlusIcon class="h-11 my-4" />
			</MenuButton>
		</div>
		<div class="flex flex-col items-center">
			<MenuButton address="/public" tooltipText="Public">
				<HomeIcon class="h-9 my-4" />
			</MenuButton>

			<MenuButton
				:address="username ? `/user/${username}` : '/login'"
				:tooltipText="username ? 'Your Page' : 'Login'"
			>
				<UserIcon class="h-9 my-4" />
			</MenuButton>

			<MenuButton
				v-if="username"
				address="/settings"
				tooltipText="Settings"
			>
				<CogIcon class="h-9 my-4" />
			</MenuButton>

			<MenuButton address="/about" tooltipText="About">
				<InfoIcon class="h-9 my-4" />
			</MenuButton>
		</div>
		<div class="flex flex-col items-center">
			<MenuChangeThemeButton />

			<MenuButton
				v-if="username"
				@click="logout"
				address="/"
				tooltipText="Log Out"
			>
				<LogoutIcon class="h-9 my-4" />
			</MenuButton>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import MenuButton from "./MenuButton.vue";
import MenuChangeThemeButton from "./MenuChangeThemeButton.vue";

import PlusIcon from "../assets/svg/PlusIcon.vue";
import HomeIcon from "../assets/svg/HomeIcon.vue";
import UserIcon from "../assets/svg/UserIcon.vue";
import CogIcon from "../assets/svg/CogIcon.vue";
import InfoIcon from "../assets/svg/InfoIcon.vue";
import LogoutIcon from "../assets/svg/LogoutIcon.vue";

export default {
	name: "Menu",
	computed: {
		...mapGetters({ username: "getUsername" }),
	},
	methods: {
		...mapMutations(["logout"]),
	},
	components: {
		MenuButton,
		MenuChangeThemeButton,
		PlusIcon,
		HomeIcon,
		UserIcon,
		CogIcon,
		InfoIcon,
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

<template>
	<div
		id="menu"
		class="
			fixed
			inset-y-0
			left-0
			h-screen
			w-20
			hidden
			lg:flex
			flex-col
			items-center
			justify-between
			border-r-2 border-gray-300
			dark:border-gray-500
			py-10
			z-10
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
			<MenuButton address="/public" tooltipText="Public Notes">
				<HomeIcon class="h-9 my-4" />
			</MenuButton>

			<MenuButton
				:address="username ? `/user/${username}` : '/login'"
				:tooltipText="username ? 'Your Notes' : 'Login'"
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
			<MenuLogoutButton v-if="username" />
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

import MenuButton from "./Menu/MenuButton.vue";
import MenuChangeThemeButton from "./Menu/MenuChangeThemeButton.vue";
import MenuLogoutButton from "./Menu/MenuLogoutButton.vue";

import PlusIcon from "../assets/svg/PlusIcon.vue";
import HomeIcon from "../assets/svg/HomeIcon.vue";
import UserIcon from "../assets/svg/UserIcon.vue";
import CogIcon from "../assets/svg/CogIcon.vue";
import InfoIcon from "../assets/svg/InfoIcon.vue";

export default {
	name: "SideMenu",
	computed: {
		...mapGetters({ username: "getUsername" }),
	},
	components: {
		MenuButton,
		MenuChangeThemeButton,
		MenuLogoutButton,
		PlusIcon,
		HomeIcon,
		UserIcon,
		CogIcon,
		InfoIcon,
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

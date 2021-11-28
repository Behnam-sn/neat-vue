<template>
	<div
		id="collapsible"
		class="flex items-end justify-evenly mt-2 transition duration-500"
		:class="[collapseStatus ? 'h-14 opacity-100' : 'h-0 opacity-0']"
	>
		<router-link to="/public">
			<HomeIcon class="h-8" />
		</router-link>
		<router-link :to="username ? `/user/${username}` : '/login'">
			<UserIcon class="h-8" />
		</router-link>
		<router-link to="/settings" v-if="username">
			<CogIcon class="h-8" />
		</router-link>
		<router-link to="/about">
			<InfoIcon class="h-8" />
		</router-link>
		<button v-if="username" @click="logout">
			<LogoutIcon class="h-8" />
		</button>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import HomeIcon from "../assets/svg/HomeIcon.vue";
import UserIcon from "../assets/svg/UserIcon.vue";
import InfoIcon from "../assets/svg/InfoIcon.vue";
import CogIcon from "../assets/svg/CogIcon.vue";
import LogoutIcon from "../assets/svg/LogoutIcon.vue";

export default {
	name: "Collapsible",
	computed: {
		...mapGetters({
			collapseStatus: "getCollapseStatus",
			username: "getUsername",
		}),
	},
	methods: {
		...mapActions(["logout"]),
	},
	components: {
		HomeIcon,
		UserIcon,
		InfoIcon,
		CogIcon,
		LogoutIcon,
	},
};
</script>

<style lang="scss" scoped>
#collapsible {
	transition-property: opacity, height;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	overflow: hidden;
}
</style>

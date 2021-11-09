<template>
	<div
		id="collapsible"
		class="flex items-end justify-evenly mt-2 transition duration-500"
		:class="[isCollapse ? 'h-14 opacity-100' : 'h-0 opacity-0']"
	>
		<router-link to="/public">
			<HomeIcon class="h-8" />
		</router-link>
		<router-link :to="user ? `/u/${user}` : '/login'">
			<UserIcon class="h-8" />
		</router-link>
		<router-link to="/settings" v-if="user">
			<CogIcon class="h-8" />
		</router-link>
		<router-link to="/about">
			<InfoIcon class="h-8" />
		</router-link>
		<button v-if="user" @click="logout">
			<LogoutIcon class="h-8" />
		</button>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import HomeIcon from "../assets/svg/HomeIcon.vue";
import UserIcon from "../assets/svg/UserIcon.vue";
import InfoIcon from "../assets/svg/InfoIcon.vue";
import CogIcon from "../assets/svg/CogIcon.vue";
import LogoutIcon from "../assets/svg/LogoutIcon.vue";

export default {
	name: "Collapsible",
	computed: {
		...mapGetters({ isCollapse: "getCollapseStatus", user: "getUser" }),
	},
	methods: {
		...mapMutations(["logout"]),
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

<template>
	<div
		id="collapsible"
		class="flex items-center justify-evenly duration-500"
		:class="[isCollapse ? 'h-16 opacity-100' : 'h-0 opacity-0']"
	>
		<router-link to="/public">
			<HomeIcon class="h-8" />
		</router-link>
		<UserIcon class="h-8" />
		<InfoIcon class="h-8" />
		<CogIcon class="h-8" />
	</div>
</template>

<script>
import { mapGetters } from "vuex";

import HomeIcon from "@/assets/svg/HomeIcon.vue";
import UserIcon from "@/assets/svg/UserIcon.vue";
import InfoIcon from "@/assets/svg/InfoIcon.vue";
import CogIcon from "@/assets/svg/CogIcon.vue";

export default {
	name: "Collapsible",
	computed: {
		...mapGetters({ isCollapse: "getCollapseStatus" }),
	},
	components: {
		HomeIcon,
		UserIcon,
		InfoIcon,
		CogIcon,
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

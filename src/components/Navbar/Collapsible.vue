<template>
	<div
		id="collapsible"
		class="flex items-center justify-evenly duration-500"
		:class="[isCollapse ? 'h-20' : 'h-0']"
	>
		<HomeIcon class="w-8" />
		<UserIcon class="w-8" />
		<InfoIcon class="w-8" />
		<CogIcon class="w-8" />
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import HomeIcon from "@/components/svg/HomeIcon.vue";
import UserIcon from "@/components/svg/UserIcon.vue";
import InfoIcon from "@/components/svg/InfoIcon.vue";
import CogIcon from "@/components/svg/CogIcon.vue";
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
	transition-property: height;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	overflow: hidden;
}
</style>

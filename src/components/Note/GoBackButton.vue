<template>
	<button
		@click="goBack"
		class="
			w-14
			h-14
			flex
			justify-center
			items-center
			rounded-full
			hover:bg-gray-300
			dark:hover:bg-gray-500
			text-primary
			dark:text-secondary
			transition
			duration-500
		"
	>
		<BackArrowIcon class="h-8" />
	</button>
</template>

<script>
import { mapActions } from "vuex";

import BackArrowIcon from "../../assets/svg/BackArrowIcon.vue";

export default {
	name: "GoBackButton",
	methods: {
		...mapActions(["goBack"]),
	},
	components: {
		BackArrowIcon,
	},
};
</script>

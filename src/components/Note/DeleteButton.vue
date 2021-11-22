<template>
	<div>
		<button
			@click="deleteNote"
			class="
				w-14
				h-14
				flex
				justify-center
				items-center
				text-red-400
				dark:text-red-500
				hover:text-red-500
				dark:hover:text-red-400
				hover:bg-gray-300
				dark:hover:bg-gray-500
				rounded-full
				transition
				duration-500
			"
		>
			<TrashIcon class="h-8" />
		</button>
	</div>
</template>

<script>
import { mapActions } from "vuex";

import TrashIcon from "../../assets/svg/TrashIcon.vue";

export default {
	name: "DeleteButton",
	methods: {
		...mapActions(["deleteNote"]),
	},
	components: {
		TrashIcon,
	},
};
</script>

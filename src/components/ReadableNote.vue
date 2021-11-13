<script>
import { mapGetters, mapActions } from "vuex";

import BackArrowIcon from "../assets/svg/BackArrowIcon.vue";

export default {
	name: "ReadableNote",
	computed: {
		...mapGetters({ note: "getNote" }),
	},
	methods: {
		...mapActions(["goBack"]),
	},
	components: {
		BackArrowIcon,
	},
};
</script>

<template>
	<div>
		<div
			class="flex justify-between items-center mx-4 lg:mx-7 py-3 lg:my-5"
		>
			<button
				@click="goBack"
				class="
					p-3
					rounded-full
					hover:bg-gray-300
					dark:hover:bg-gray-500
					transition
					duration-500
				"
			>
				<BackArrowIcon class="h-8" />
			</button>
		</div>
		<div
			class="font-Rubik-Medium text-2xl w-full px-8 py-3 lg:px-20 lg:py-5"
		>
			{{ note.title }}
		</div>
		<div
			class="
				font-Poppins-Light
				text-xl
				w-full
				px-8
				py-3
				lg:px-20 lg:py-5
				overflow-hidden
				leading-9
			"
		>
			{{ note.content }}
		</div>
		<div class="lg:px-20">modified_at: {{ note.modified_at }}</div>
		<div class="lg:px-20">created_at: {{ note.created_at }}</div>
	</div>
</template>

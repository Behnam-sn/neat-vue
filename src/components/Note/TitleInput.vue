<template>
	<input
		v-model="note.title"
		class="
			font-Rubik font-medium
			text-xl
			lg:text-2xl
			text-primary
			dark:text-secondary
			w-full
			px-8
			py-3
			lg:px-20 lg:py-5
			bg-transparent
			focus:outline-none
			transition
			duration-500
		"
		dir="auto"
		type="text"
		placeholder="Title"
	/>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name: "TitleInput",
	computed: {
		...mapGetters({ note: "getNote" }),
	},
};
</script>

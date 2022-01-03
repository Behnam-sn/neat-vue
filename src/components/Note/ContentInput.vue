<template>
	<textarea
		@input="txtResize"
		v-model="note.content"
		id="txt"
		class="
			font-Poppins font-light
			text-lg
			lg:text-xl
			text-primary
			dark:text-secondary
			leading-9
			w-full
			px-7
			my-3
			lg:px-12 lg:my-4
			xl:px-20 xl:my-5
			bg-transparent
			resize-none
			overflow-hidden
			focus:outline-none
			transition
			duration-500
		"
		dir="auto"
		placeholder="Contect"
	></textarea>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name: "ContentInput",
	computed: {
		...mapGetters({ note: "getNote" }),
	},
	methods: {
		txtResize() {
			const textarea = document.getElementById("txt");
			textarea.style.height = "auto";
			textarea.style.height = textarea.scrollHeight + "px";
		},
	},
};
</script>

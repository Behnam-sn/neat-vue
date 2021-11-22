<template>
	<div>
		<div
			class="flex justify-between items-center mx-4 lg:mx-7 py-3 lg:my-5"
		>
			<GoBackButton />
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

<script>
import { mapGetters } from "vuex";

import GoBackButton from "./Note/GoBackButton.vue";

export default {
	name: "ReadableNote",
	computed: {
		...mapGetters({ note: "getNote" }),
	},
	components: {
		GoBackButton,
	},
};
</script>

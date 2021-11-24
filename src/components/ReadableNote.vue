<template>
	<div>
		<div
			class="flex justify-between items-center mx-4 lg:mx-7 my-4 lg:my-6"
		>
			<GoBackButton />
		</div>
		<div
			class="
				mx-8
				lg:mx-12
				flex flex-col
				lg:flex-row
				items-end
				justify-end
			"
		>
			<DateAndTime
				title="Created"
				:value="note.created_at"
				class="lg:mr-6"
			/>
			<DateAndTime title="Modified" :value="note.modified_at" />
		</div>
		<div
			class="font-Rubik-Medium text-2xl w-full px-8 my-3 lg:px-20 lg:y-5"
			dir="auto"
		>
			{{ note.title }}
		</div>
		<pre
			class="
				w-full
				px-8
				my-3
				lg:px-20 lg:y-5
				font-Poppins-Light
				text-xl
				whitespace-pre-wrap
				leading-9
				overflow-hidden
			"
			dir="auto"
			>{{ note.content }}</pre
		>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

import DateAndTime from "./DateAndTime.vue";

import GoBackButton from "./Note/GoBackButton.vue";

export default {
	name: "ReadableNote",
	computed: {
		...mapGetters({ note: "getNote" }),
	},
	components: {
		DateAndTime,
		GoBackButton,
	},
};
</script>

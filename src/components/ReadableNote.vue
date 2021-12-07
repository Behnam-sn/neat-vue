<template>
	<div>
		<div
			class="flex justify-between items-center mx-4 lg:mx-7 my-4 lg:my-6"
		>
			<GoBackButton />
			<div
				class="
					mr-4
					lg:mr-7
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
		</div>
		<div
			class="
				flex
				justify-end
				font-Rubik font-medium
				text-2xl
				w-full
				px-8
				my-3
				lg:px-20 lg:my-5
			"
		>
			<div class="pr-3">Author:</div>
			<router-link :to="`/user/${note.author}`">
				{{ note.author }}
			</router-link>
		</div>
		<div
			class="
				font-Rubik font-medium
				text-2xl
				w-full
				px-8
				lg:px-20
				my-3
				lg:my-5
			"
			dir="auto"
		>
			{{ note.title }}
		</div>
		<pre
			class="
				w-full
				px-8
				lg:px-20
				my-3
				lg:my-5
				font-Poppins font-light
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

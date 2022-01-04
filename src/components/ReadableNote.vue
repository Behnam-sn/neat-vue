<template>
	<div>
		<div
			class="flex justify-between items-center px-4 xl:px-7 my-4 xl:my-6"
		>
			<GoBackButton />
			<div
				class="mr-3 lg:mr-5 flex flex-col lg:flex-row items-end justify-end"
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
			class="text-right font-Rubik font-medium text-lg lg:text-xl xl:text-2xl text-primary dark:text-secondary break-words w-full px-7 my-3 lg:px-12 lg:my-4 xl:px-20 xl:my-5 transition duration-500"
		>
			<router-link :to="`/user/${note.author}`">
				Author: {{ note.author }}
			</router-link>
		</div>
		<div
			class="font-Rubik font-medium text-xl lg:text-2xl text-primary dark:text-secondary break-words w-full px-7 my-3 lg:px-12 lg:my-4 xl:px-20 xl:my-5 transition duration-500"
			dir="auto"
		>
			{{ note.title }}
		</div>
		<pre
			class="font-Poppins font-light text-lg lg:text-xl text-primary dark:text-secondary whitespace-pre-wrap break-words leading-9 w-full overflow-hidden px-7 my-3 lg:px-12 lg:my-4 xl:px-20 xl:my-5 transition duration-500"
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

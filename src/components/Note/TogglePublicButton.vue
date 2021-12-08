<template>
	<div class="flex items-center mr-3">
		<div
			class="font-Poppins font-bold transition duration-500"
			:class="[
				note.public
					? 'text-gray-400'
					: 'text-primary dark:text-secondary',
			]"
		>
			Private
		</div>
		<button
			class="
				w-14
				h-8
				flex
				items-center
				bg-gray-300
				p-1
				mx-4
				rounded-full
				cursor-pointer
				duration-500
			"
			:class="{ 'bg-green-500': note.public }"
			@click="togglePublic"
		>
			<div
				class="
					w-6
					h-6
					bg-white
					rounded-full
					shadow-md
					transform
					duration-500
				"
				:class="{ 'translate-x-6': note.public }"
			></div>
		</button>
		<div
			class="font-Poppins font-bold transition duration-500"
			:class="[
				!note.public
					? 'text-gray-400'
					: 'text-primary dark:text-secondary',
			]"
		>
			Public
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name: "TogglePublicButton",
	computed: {
		...mapGetters({ note: "getNote" }),
	},
	methods: {
		togglePublic() {
			this.note.public = !this.note.public;
		},
	},
};
</script>

<template>
	<div class="flex items-center relative my-7">
		<SeachIcon class="absolute left-4 h-6 text-gray-300" />
		<input
			v-model="search"
			class="
				w-full
				bg-gray-100
				hover:bg-gray-200
				focus:bg-gray-200
				dark:bg-gray-500 dark:hover:bg-gray-400 dark:focus:bg-gray-400
				rounded-lg
				font-Rubik-Light
				text-lg
				px-12
				py-3
				focus:outline-none
				transition
				duration-500
			"
			type="text"
			name="search"
			placeholder="Search"
		/>
		<button v-show="search" @click="clearSerach" class="absolute right-4">
			<CloseIcon
				class="
					h-6
					text-gray-500
					dark:text-gray-600
					transition
					duration-500
				"
			/>
		</button>
	</div>
</template>

<script>
import SeachIcon from "../assets/svg/SeachIcon.vue";
import CloseIcon from "../assets/svg/CloseIcon.vue";

export default {
	name: "SearchBar",
	data: () => ({
		search: undefined,
	}),
	methods: {
		clearSerach() {
			this.search = undefined;
		},
	},
	components: {
		SeachIcon,
		CloseIcon,
	},
};
</script>

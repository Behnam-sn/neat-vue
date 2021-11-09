<template>
	<div
		class="
			flex
			items-center
			bg-gray-100
			hover:bg-gray-200
			dark:bg-gray-500 dark:hover:bg-gray-600
			rounded-lg
			px-6
			mb-8
			lg:mt-8 lg:mb-12
			transition
			duration-500
		"
	>
		<SeachIcon class="text-gray-300" />
		<input
			v-model="search"
			class="
				w-full
				bg-transparent
				font-Rubik-Light
				text-lg
				px-3
				py-3
				focus:outline-none
			"
			type="text"
			name="search"
			placeholder="Search"
		/>
		<button v-show="search" @click="clearSerach">
			<CloseIcon
				class="text-gray-500 dark:text-gray-800 transition duration-500"
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
	components: {
		SeachIcon,
		CloseIcon,
	},
	methods: {
		clearSerach() {
			this.search = undefined;
		},
	},
};
</script>

<template>
	<div class="lg:h-vh-85 lg:overflow-y-scroll px-7 lg:px-16">
		<SearchBar />
		<div
			class="
				grid grid-cols-1
				sm:grid-cols-2
				lg:grid-cols-3
				xl:grid-cols-4
				gap-8
				pb-64
			"
		>
			<div
				v-for="note in notesList"
				:key="note.id"
				class="
					h-64
					bg-gray-200
					dark:bg-gray-700
					rounded-2xl
					overflow-hidden
					transition
					duration-500
				"
			>
				<div class="overflow-hidden m-8">
					<div class="font-Rubik-Medium text-2xl">
						{{ note.title }}
					</div>
					<p class="font-Poppins-Light text-lg break-words">
						{{ note.content }}
						<!-- {{ search }} -->
						<!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum. -->
					</p>
					<div>{{ note.author }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SearchBar from "./SearchBar.vue";

export default {
	name: "Notes",
	props: ["notesList"],
	components: {
		SearchBar,
	},
};
</script>

<template>
	<div class="w-full">
		<TitleBar title="Public Notes" />

		<div class="lg:h-vh-85 lg:overflow-y-scroll px-7 lg:px-16">
			<SearchBar />
			<div
				class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-64"
			>
				<div
					v-for="note in notes"
					:key="note.id"
					class="h-60 bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden transition duration-500"
				>
					<div class="overflow-hidden m-8">
						<div class="font-Rubik-Medium text-2xl">
							{{ note.author }}
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
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import TitleBar from "@/components/TitleBar.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
	name: "Public",
	mounted: function() {
		this.fetchPublicNotes();
	},
	computed: {
		...mapGetters({ notes: "getPublicNotes" }),
	},
	methods: {
		...mapActions(["fetchPublicNotes"]),
	},
	components: {
		TitleBar,
		SearchBar,
	},
};
</script>

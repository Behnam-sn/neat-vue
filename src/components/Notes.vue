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
			"
		>
			<template v-for="note in notesList" :key="note.id">
				<router-link :to="'/note/' + note.id">
					<div
						class="
							h-56
							p-7
							bg-gray-200
							dark:bg-gray-700
							rounded-2xl
							transition
							duration-500
						"
					>
						<div class="font-Rubik-Medium text-xl mb-1" dir="auto">
							{{ note.title }}
						</div>
						<pre
							class="
								font-Poppins-Light
								whitespace-pre-wrap
								h-36
								overflow-hidden
							"
							dir="auto"
							>{{ note.content }}</pre
						>
					</div>
				</router-link>
			</template>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

import SearchBar from "./SearchBar.vue";

export default {
	name: "Notes",
	computed: {
		...mapGetters({ notes: "getNotes", searchNotes: "getSearchNotes" }),
		notesList() {
			if (this.searchNotes === null) {
				return this.notes;
			} else {
				return this.searchNotes;
			}
		},
	},
	components: {
		SearchBar,
	},
};
</script>

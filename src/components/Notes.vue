<template>
	<div class="px-7 xl:px-16 pb-56">
		<SearchBar />
		<YinYangIcon v-if="loading" class="h-12 mx-auto" />
		<div
			v-else
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
		>
			<template v-for="note in notesList" :key="note.id">
				<router-link :to="'/note/' + note.id">
					<div
						class="h-56 p-7 bg-gray-200 dark:bg-gray-700 text-primary dark:text-secondary rounded-2xl transition duration-500"
					>
						<div
							class="font-Rubik font-medium text-lg 2xl:text-xl mb-1 overflow-hidden"
							dir="auto"
						>
							{{ note.title }}
						</div>
						<pre
							class="font-Poppins font-light whitespace-pre-wrap break-words h-36 overflow-hidden"
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

import YinYangIcon from "../assets/svg/YinYangIcon.vue";

export default {
	name: "TheNotes",
	computed: {
		...mapGetters({
			notes: "getNotes",
			searchNotes: "getSearchNotes",
			loading: "getLoading",
		}),
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
		YinYangIcon,
	},
};
</script>

<template>
	<div class="relative flex items-center mb-7">
		<SeachIcon class="absolute left-4 h-6 text-gray-300" />
		<input
			v-model="searchText"
			class="
				w-full
				px-12
				py-3
				font-Rubik font-light
				text-lg
				placeholder-gray-500
				dark:placeholder-gray-200
				bg-gray-100
				hover:bg-gray-200
				focus:bg-gray-200
				dark:bg-gray-500 dark:hover:bg-gray-400 dark:focus:bg-gray-400
				rounded-lg
				outline-none
				transition
				duration-500
			"
			type="text"
			placeholder="Search"
		/>
		<button
			v-show="searchText"
			@click="clearSerach"
			class="absolute right-4"
		>
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
import { mapGetters, mapMutations, mapActions } from "vuex";

import SeachIcon from "../assets/svg/SeachIcon.vue";
import CloseIcon from "../assets/svg/CloseIcon.vue";

export default {
	name: "SearchBar",
	data: () => ({
		searchText: "",
		awaitingSearch: false,
	}),
	computed: {
		...mapGetters({ currnetUser: "getUsername" }),
	},
	watch: {
		searchText() {
			if (this.searchText == "") {
				this.clearSearchNotes();
			} else {
				this.setLoading(true);
				if (!this.awaitingSearch) {
					setTimeout(() => {
						if (this.$route.path == "/public") {
							this.searchAllPublicNotes(this.searchText);
						} else {
							let author = this.$route.params.username;

							if (author == this.currnetUser) {
								this.searchCurrentUserNotes(this.searchText);
							} else {
								this.searchPublicNotesByAuthor({
									author: author,
									text: this.searchText,
								});
							}
						}
						this.awaitingSearch = false;
					}, 1000);
				}
				this.awaitingSearch = true;
			}
		},
	},
	methods: {
		...mapMutations(["setLoading"]),
		...mapActions([
			"searchAllPublicNotes",
			"searchPublicNotesByAuthor",
			"searchCurrentUserNotes",
			"clearSearchNotes",
		]),
		clearSerach() {
			this.searchText = "";
			this.clearSearchNotes();
		},
	},
	components: {
		SeachIcon,
		CloseIcon,
	},
};
</script>

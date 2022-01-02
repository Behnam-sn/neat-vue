<template>
	<div>
		<div
			v-if="notes == 'notFound'"
			class="
				flex
				justify-center
				font-Poppins font-bold
				text-2xl
				mt-40
				lg:mt-72
			"
		>
			User Not Found
		</div>
		<div v-else>
			<TitleBar :title="routeUsername + ' Notes'" />
			<Notes />
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import TitleBar from "../components/TitleBar.vue";
import Notes from "../components/Notes.vue";

export default {
	name: "UserPage",
	mounted: function () {
		if (this.routeUsername === this.currnetUser) {
			this.fetchCurrentUserNotes();
		} else {
			this.fetchPublicNotesByAuthor(this.routeUsername);
		}
	},
	computed: {
		...mapGetters({
			currnetUser: "getUsername",
			notes: "getNotes",
		}),
		routeUsername() {
			return this.$route.params.username;
		},
	},
	watch: {
		routeUsername() {
			if (this.$route.path.includes("/user")) {
				if (this.routeUsername === this.currnetUser) {
					this.fetchCurrentUserNotes();
				} else {
					this.fetchPublicNotesByAuthor(this.routeUsername);
				}
			}
		},
	},
	methods: {
		...mapActions(["fetchCurrentUserNotes", "fetchPublicNotesByAuthor"]),
	},
	components: {
		TitleBar,
		Notes,
	},
};
</script>

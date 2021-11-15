<template>
	<div>
		<TitleBar :title="routeUsername + ' Notes'" />
		<Notes :notesList="userNotes" />
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import TitleBar from "../components/TitleBar.vue";
import Notes from "../components/Notes.vue";

export default {
	name: "User",
	mounted: function () {
		if (this.routeUsername == this.currnetUser) {
			this.fetchCurrentUserNotes();
		} else {
			this.fetchPublicNotesByAuthor(this.routeUsername);
		}
	},
	computed: {
		...mapGetters({
			currnetUser: "getUsername",
			userNotes: "getUserNotes",
		}),
		routeUsername() {
			return this.$route.params.username;
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

<template>
	<div class="h-full">
		<div
			v-if="notes === 'notFound'"
			class="
				w-full
				h-full
				flex
				justify-center
				items-center
				font-Poppins font-bold
				text-2xl
				mt-56
				lg:mt-0
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
	name: "User",
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
	methods: {
		...mapActions(["fetchCurrentUserNotes", "fetchPublicNotesByAuthor"]),
	},
	components: {
		TitleBar,
		Notes,
	},
};
</script>

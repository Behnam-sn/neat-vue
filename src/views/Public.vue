<template>
	<div>
		<TitleBar title="Public Notes" />
		<Notes :notesList="publicNotes" />
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import TitleBar from "../components/TitleBar.vue";
import Notes from "../components/Notes.vue";

export default {
	name: "Public",
	mounted: function () {
		this.fetchPublicNotes();
	},
	computed: {
		...mapGetters({ publicNotes: "getPublicNotes" }),
	},
	methods: {
		...mapActions(["fetchPublicNotes"]),
	},
	components: {
		TitleBar,
		Notes,
	},
};
</script>

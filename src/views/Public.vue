<template>
	<div>
		<TitleBar title="Public Notes" />
		<Notes />
	</div>
</template>

<script>
import { mapActions } from "vuex";

import TitleBar from "../components/TitleBar.vue";
import Notes from "../components/Notes.vue";

export default {
	name: "Public",
	mounted: function () {
		this.fetchPublicNotes();
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

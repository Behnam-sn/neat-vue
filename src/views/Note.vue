<template>
	<div
		class="
			h-screen
			bg-gray-200
			dark:bg-gray-700
			transition
			duration-500
			overflow-y-scroll
		"
	>
		<template v-if="note">
			<template v-if="note.author == username"><EditableNote /></template>
			<template v-else><ReadableNote /></template>
		</template>
		<template v-else>not public</template>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import ReadableNote from "../components/ReadableNote.vue";
import EditableNote from "../components/EditableNote.vue";

export default {
	name: "Note",
	created: function () {
		this.fetchNote(this.routeId);
	},
	computed: {
		...mapGetters({ note: "getNote", username: "getUsername" }),
		routeId() {
			return this.$route.params.id;
		},
	},
	methods: {
		...mapActions(["fetchNote"]),
	},
	components: {
		ReadableNote,
		EditableNote,
	},
};
</script>

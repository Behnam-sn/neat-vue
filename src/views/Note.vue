<template>
	<div>
		<div
			v-if="note === 'notFound'"
			class="
				flex
				justify-center
				font-Poppins font-bold
				text-2xl
				mt-40
				lg:mt-72
			"
		>
			Note Not Found
		</div>
		<div
			v-else-if="note === 'notPublic'"
			class="
				flex
				justify-center
				font-Poppins font-bold
				text-2xl
				mt-40
				lg:mt-72
			"
		>
			Note Not Public
		</div>
		<div
			v-else-if="note !== undefined"
			class="
				h-screen
				bg-gray-200
				dark:bg-gray-700
				transition
				duration-500
				overflow-y-scroll
			"
		>
			<EditableNote v-if="note.author === username" />
			<ReadableNote v-else />
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import ReadableNote from "../components/ReadableNote.vue";
import EditableNote from "../components/EditableNote.vue";

export default {
	name: "NotePage",
	mounted: function () {
		this.clearNote();
		this.fetchNote(this.routeId);
	},
	computed: {
		...mapGetters({ note: "getNote", username: "getUsername" }),
		routeId() {
			return this.$route.params.id;
		},
	},
	methods: {
		...mapActions(["clearNote", "fetchNote"]),
	},
	components: {
		ReadableNote,
		EditableNote,
	},
};
</script>

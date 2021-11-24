<template>
	<div class="h-full">
		<div
			v-if="note === 'notFound'"
			class="
				w-full
				h-full
				flex
				justify-center
				items-center
				font-Poppins-Bold
				text-2xl
				mt-56
				lg:mt-0
				bg-gray-200
				dark:bg-gray-700
				transition
				duration-500
			"
		>
			Note Not Found
		</div>
		<div
			v-else-if="note === 'notPublic'"
			class="
				w-full
				h-full
				flex
				justify-center
				items-center
				font-Poppins-Bold
				text-2xl
				mt-56
				lg:mt-0
				bg-gray-200
				dark:bg-gray-700
				transition
				duration-500
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

<template>
	<div
		class="
			h-screen
			bg-gray-200
			dark:bg-gray-700
			overflow-y-scroll
			transition
			duration-500
		"
	>
		<div
			class="flex justify-between items-center px-4 xl:px-7 my-4 xl:my-6"
		>
			<GoBackButton />
			<TogglePublicButton />
		</div>
		<TitleInput />
		<ContentInput />
		<SendButton @click="createNote" />
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import TitleInput from "../components/Note/TitleInput.vue";
import ContentInput from "../components/Note/ContentInput.vue";
import SendButton from "../components/Note/SendButton.vue";
import GoBackButton from "../components/Note/GoBackButton.vue";
import TogglePublicButton from "../components/Note/TogglePublicButton.vue";

export default {
	name: "AddNote",
	mounted: function () {
		if (!this.username) {
			this.$router.push("/login");
		}
		this.clearNote();
	},
	computed: {
		...mapGetters({
			username: "getUsername",
		}),
	},
	methods: {
		...mapActions(["createNote", "clearNote"]),
	},
	components: {
		TitleInput,
		ContentInput,
		SendButton,
		GoBackButton,
		TogglePublicButton,
	},
};
</script>

<template>
	<div>
		<div
			class="flex justify-between items-center px-4 lg:px-7 my-4 lg:my-6"
		>
			<GoBackButton />
			<div class="flex">
				<TogglePublicButton />
				<DeleteButton />
			</div>
		</div>
		<div class="flex flex-col lg:flex-row items-end justify-end px-7">
			<DateAndTime
				title="Created"
				:value="note.created_at"
				class="lg:mr-6"
			/>
			<DateAndTime title="Modified" :value="note.modified_at" />
		</div>
		<TitleInput />
		<ContentInput />
		<SendButton @click="updateNote" />
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import DateAndTime from "./DateAndTime.vue";
import TitleInput from "./Note/TitleInput.vue";
import ContentInput from "./Note/ContentInput.vue";
import SendButton from "./Note/SendButton.vue";
import GoBackButton from "./Note/GoBackButton.vue";
import DeleteButton from "./Note/DeleteButton.vue";
import TogglePublicButton from "./Note/TogglePublicButton.vue";

export default {
	name: "EditableNote",
	mounted: function () {
		this.txtResize();
	},
	updated: function () {
		this.txtResize();
	},
	computed: {
		...mapGetters({ note: "getNote" }),
	},
	methods: {
		...mapActions(["updateNote"]),
		txtResize() {
			const textarea = document.getElementById("txt");
			textarea.style.height = "auto";
			textarea.style.height = textarea.scrollHeight + "px";
		},
	},
	components: {
		DateAndTime,
		TitleInput,
		ContentInput,
		SendButton,
		GoBackButton,
		DeleteButton,
		TogglePublicButton,
	},
};
</script>

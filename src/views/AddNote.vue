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
		<button
			@click="goBack"
			class="
				p-3
				m-7
				mb-2
				rounded-full
				hover:bg-gray-300
				dark:hover:bg-gray-500
				transition
				duration-500
			"
		>
			<BackArrowIcon class="h-8" />
		</button>
		<input
			v-model="title"
			class="
				font-Rubik-Medium
				text-2xl
				w-full
				px-16
				py-5
				bg-transparent
				focus:outline-none
			"
			type="text"
			name="title"
			placeholder="Title"
		/>
		<textarea
			id="txt"
			@input="txtResize"
			v-model="content"
			class="
				font-Poppins-Light
				text-xl
				w-full
				lg:h-4/5
				px-16
				py-5
				bg-transparent
				resize-none
				overflow-hidden
				leading-9
				focus:outline-none
			"
			name="contect"
			placeholder="Contect"
		></textarea>
		<button
			class="
				hidden
				lg:block
				p-7
				absolute
				bottom-16
				right-16
				bg-secondary
				dark:bg-primary
				rounded-full
				transition
				duration-500
			"
		>
			<SendIcon class="h-9" />
		</button>
	</div>
</template>

<script>
import { mapActions } from "vuex";

import BackArrowIcon from "../assets/svg/BackArrowIcon.vue";
import SendIcon from "../assets/svg/SendIcon.vue";

export default {
	name: "AddNote",
	data: () => ({
		title: undefined,
		content: undefined,
	}),
	components: {
		BackArrowIcon,
		SendIcon,
	},
	methods: {
		...mapActions(["goBack"]),
		txtResize() {
			const textarea = document.getElementById("txt");

			textarea.style.height = "auto";
			textarea.style.height = textarea.scrollHeight + "px";
		},
	},
};
</script>

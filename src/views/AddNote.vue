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
		<div
			class="flex justify-between items-center mx-4 lg:mx-7 py-3 lg:my-5"
		>
			<button
				@click="goBack"
				class="
					p-3
					rounded-full
					hover:bg-gray-300
					dark:hover:bg-gray-500
					transition
					duration-500
				"
			>
				<BackArrowIcon class="h-8" />
			</button>
			<div class="flex items-center mr-3">
				<div
					class="font-Poppins-Bold duration-300"
					:class="{ 'text-gray-400': note.public }"
				>
					Private
				</div>
				<button
					class="
						w-14
						h-8
						flex
						items-center
						bg-gray-300
						rounded-full
						p-1
						mx-4
						duration-300
						cursor-pointer
					"
					:class="{ 'bg-green-500': note.public }"
					@click="togglePublic"
				>
					<div
						class="
							bg-white
							w-6
							h-6
							rounded-full
							shadow-md
							transform
							duration-300
						"
						:class="{ 'translate-x-6': note.public }"
					></div>
				</button>
				<div
					class="font-Poppins-Bold duration-300"
					:class="{ 'text-gray-400': !note.public }"
				>
					Public
				</div>
			</div>
		</div>
		<input
			v-model="note.title"
			class="
				font-Rubik-Medium
				text-2xl
				w-full
				px-8
				py-3
				lg:px-20 lg:py-5
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
			v-model="note.content"
			class="
				font-Poppins-Light
				text-xl
				w-full
				px-8
				py-3
				lg:px-20 lg:py-5
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
			@click="sendNote"
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
			<transition name="send" mode="out-in">
				<CheckIcon class="h-9" v-if="sent" />
				<SendIcon class="h-9" v-else />
			</transition>
		</button>
	</div>
</template>

<script>
import { mapActions } from "vuex";

import BackArrowIcon from "../assets/svg/BackArrowIcon.vue";
import SendIcon from "../assets/svg/SendIcon.vue";
import CheckIcon from "../assets/svg/CheckIcon.vue";

export default {
	name: "AddNote",
	data: () => ({
		note: {
			title: undefined,
			content: undefined,
			public: false,
		},
		sent: false,
	}),
	components: {
		BackArrowIcon,
		SendIcon,
		CheckIcon,
	},
	methods: {
		...mapActions(["goBack", "createNote"]),
		sendNote() {
			if (this.note.content) {
				this.sent = true;
				this.createNote(this.note);
			}
		},
		txtResize() {
			const textarea = document.getElementById("txt");

			textarea.style.height = "auto";
			textarea.style.height = textarea.scrollHeight + "px";
		},
		togglePublic() {
			this.note.public = !this.note.public;
		},
	},
};
</script>

<style scoped>
.send-enter-active,
.send-leave-active {
	transition-property: opacity;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 300ms;
}
.send-enter-from,
.send-leave-to {
	opacity: 0;
}
</style>

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
			<GoBackButton />
			<div class="flex items-center mr-3">
				<div
					class="font-Poppins font-bold transition duration-500"
					:class="[
						note.public
							? 'text-gray-400'
							: 'text-primary dark:text-secondary',
					]"
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
						duration-500
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
					class="font-Poppins font-bold transition duration-500"
					:class="[
						!note.public
							? 'text-gray-400'
							: 'text-primary dark:text-secondary',
					]"
				>
					Public
				</div>
			</div>
		</div>
		<input
			v-model="note.title"
			class="
				font-Rubik font-medium
				text-primary
				dark:text-secondary
				text-2xl
				w-full
				px-8
				py-3
				lg:px-20 lg:py-5
				bg-transparent
				focus:outline-none
				transition
				duration-500
			"
			dir="auto"
			type="text"
			placeholder="Title"
		/>
		<textarea
			id="txt"
			@input="txtResize"
			v-model="note.content"
			class="
				font-Poppins font-light
				text-primary
				dark:text-secondary
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
				transition
				duration-500
			"
			dir="auto"
			placeholder="Contect"
		></textarea>
		<button
			@click="createNote"
			class="
				hidden
				lg:block
				p-7
				absolute
				bottom-16
				right-16
				bg-secondary
				dark:bg-primary
				text-primary
				dark:text-secondary
				rounded-full
				transition
				duration-500
			"
		>
			<transition name="send" mode="out-in">
				<YinYangIcon class="h-9" v-if="loading" />
				<SendIcon class="h-9" v-else />
			</transition>
		</button>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import GoBackButton from "../components/Note/GoBackButton.vue";

import SendIcon from "../assets/svg/SendIcon.vue";
import YinYangIcon from "../assets/svg/YinYangIcon.vue";

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
			note: "getNote",
			loading: "getLoading",
		}),
	},
	methods: {
		...mapActions(["createNote", "clearNote"]),
		txtResize() {
			const textarea = document.getElementById("txt");
			textarea.style.height = "auto";
			textarea.style.height = textarea.scrollHeight + "px";
		},
		togglePublic() {
			this.note.public = !this.note.public;
		},
	},
	components: {
		GoBackButton,
		SendIcon,
		YinYangIcon,
	},
};
</script>

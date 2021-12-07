<template>
	<div>
		<div
			class="flex justify-between items-center mx-4 lg:mx-7 my-4 lg:my-6"
		>
			<GoBackButton />
			<div class="flex">
				<div class="flex items-center mr-9 lg:mr-14">
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
				<DeleteButton />
			</div>
		</div>
		<div
			class="
				mx-8
				lg:mx-12
				flex flex-col
				lg:flex-row
				items-end
				justify-end
			"
		>
			<DateAndTime
				title="Created"
				:value="note.created_at"
				class="lg:mr-6"
			/>
			<DateAndTime title="Modified" :value="note.modified_at" />
		</div>
		<input
			v-model="note.title"
			class="
				font-Rubik-Medium
				text-2xl
				w-full
				px-8
				my-3
				lg:px-20 lg:my-4
				bg-transparent
				focus:outline-none
			"
			dir="auto"
			type="text"
			placeholder="Title"
		/>
		<textarea
			id="txt"
			v-model="note.content"
			class="
				font-Poppins-Light
				text-xl
				w-full
				px-8
				my-3
				lg:px-20 lg:my-4
				bg-transparent
				resize-none
				overflow-hidden
				leading-9
				focus:outline-none
			"
			dir="auto"
			placeholder="Contect"
		></textarea>

		<button
			@click="updateNote"
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
				<YinYangIcon class="h-9" v-if="loading" />
				<SendIcon class="h-9" v-else />
			</transition>
		</button>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import DateAndTime from "./DateAndTime.vue";
import GoBackButton from "./Note/GoBackButton.vue";
import DeleteButton from "./Note/DeleteButton.vue";

import SendIcon from "../assets/svg/SendIcon.vue";
import YinYangIcon from "../assets/svg/YinYangIcon.vue";

export default {
	name: "EditableNote",
	mounted: function () {
		this.txtResize();
	},
	updated: function () {
		this.txtResize();
	},
	computed: {
		...mapGetters({ note: "getNote", loading: "getLoading" }),
	},
	methods: {
		...mapActions(["updateNote"]),
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
		DateAndTime,
		GoBackButton,
		DeleteButton,
		SendIcon,
		YinYangIcon,
	},
};
</script>

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
				h-auto
				px-8
				my-3
				lg:px-20 lg:my-4
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
		<FooterBar>
			<button
				@click="sendNote"
				class="
					footer-bar-btn
					flex
					justify-center
					items-center
					absolute
					w-16
					h-16
					ring-8
					rounded-full
					bg-secondary
					dark:bg-primary
					ring-gray-300
					dark:ring-gray-800
					transition
					duration-500
				"
			>
				<transition name="send" mode="out-in">
					<CheckIcon
						v-if="sent"
						class="
							h-8
							text-primary
							dark:text-secondary
							transition
							duration-500
						"
					/>
					<SendIcon
						v-else
						class="
							h-8
							text-primary
							dark:text-secondary
							transition
							duration-500
						"
					/>
				</transition>
			</button>
		</FooterBar>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import FooterBar from "./FooterBar.vue";
import DateAndTime from "./DateAndTime.vue";
import GoBackButton from "./Note/GoBackButton.vue";
import DeleteButton from "./Note/DeleteButton.vue";

import SendIcon from "../assets/svg/SendIcon.vue";
import CheckIcon from "../assets/svg/CheckIcon.vue";

export default {
	name: "EditableNote",
	// mounted: function () {
	// 	this.txtResize();
	// 	console.log("mounted");
	// },
	updated: function () {
		this.txtResize();
	},
	data: () => ({
		sent: false,
	}),
	computed: {
		...mapGetters({ note: "getNote" }),
	},
	methods: {
		...mapActions(["updateNote"]),
		sendNote() {
			this.sent = true;
			this.updateNote(this.note);
		},
		txtResize() {
			const textarea = document.getElementById("txt");
			textarea.style.height = textarea.scrollHeight + "px";
		},
		togglePublic() {
			this.note.public = !this.note.public;
		},
	},
	components: {
		FooterBar,
		DateAndTime,
		GoBackButton,
		DeleteButton,
		SendIcon,
		CheckIcon,
	},
};
</script>

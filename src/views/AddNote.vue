<template>
	<div
		class="h-full relative bg-gray-200 dark:bg-gray-700 transition duration-500"
	>
		<BackArrowIcon />
		<input
			v-model="title"
			class="w-full font-Rubik-Medium text-2xl px-16 py-5 focus:outline-none bg-transparent"
			type="text"
			name="title"
			placeholder="Title"
		/>
		<textarea
			v-model="content"
			class="w-full h-5/6 font-Poppins-Light text-xl px-16 py-5 focus:outline-none resize-none leading-9 bg-transparent"
			name="contect"
			placeholder="Contect"
		></textarea>
		<button
			class="absolute bottom-16 right-16 bg-secondary dark:bg-primary rounded-full p-7 transition duration-500"
		>
			<SendIcon class="h-9" />
		</button>
	</div>
</template>

<script>
import BackArrowIcon from "@/assets/svg/BackArrowIcon.vue";
import SendIcon from "@/assets/svg/SendIcon.vue";

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
};
</script>

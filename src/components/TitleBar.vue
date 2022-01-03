<template>
	<div
		class="
			xl:sticky xl:top-0
			z-10
			flex
			justify-between
			items-center
			bg-secondary
			dark:bg-primary
			py-7
			px-7
			xl:px-16
			transition
			duration-500
		"
	>
		<h1
			class="
				font-Poppins font-bold
				text-4xl
				xl:text-5xl
				text-primary
				dark:text-secondary
				capitalize
				transition
				duration-500
			"
		>
			{{ title }}
		</h1>
		<LoginButton class="hidden xl:block" v-if="!username" />
	</div>
</template>

<script>
import { mapGetters } from "vuex";

import LoginButton from "./LoginButton.vue";

export default {
	name: "TitleBar",
	props: ["title"],
	computed: {
		...mapGetters({ username: "getUsername" }),
	},
	components: {
		LoginButton,
	},
};
</script>

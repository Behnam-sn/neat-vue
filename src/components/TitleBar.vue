<template>
	<div class="lg:h-vh-15 flex justify-between items-center px-7 lg:px-16">
		<h1 class="font-Poppins-Bold text-5xl capitalize">
			{{ title }}
		</h1>
		<LoginButton class="hidden lg:block" v-if="!username" />
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

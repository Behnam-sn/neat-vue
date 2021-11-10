<template>
	<div class="h-vh-15 flex justify-between items-center px-7 lg:px-16">
		<h1 class="font-Poppins-Bold text-5xl lg:text-6xl capitalize">
			{{ title }}
		</h1>
		<LoginButton class="hidden lg:block" v-if="!user" />
	</div>
</template>

<script>
import { mapGetters } from "vuex";

import LoginButton from "./LoginButton.vue";

export default {
	name: "TitleBar",
	props: ["title"],
	computed: {
		...mapGetters({ user: "getUser" }),
	},
	components: {
		LoginButton,
	},
};
</script>

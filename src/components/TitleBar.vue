<template>
	<div class="flex justify-between items-center">
		<h1 class="font-Poppins-Bold text-5xl lg:text-6xl">{{ title }}</h1>
		<LoginButton class="hidden lg:block" v-if="!user" />
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import LoginButton from "@/components/LoginButton.vue";

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

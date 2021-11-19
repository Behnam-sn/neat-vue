<template>
	<div>
		<TitleBar title="Neat" class="hidden lg:flex" />
		<div class="flex justify-center px-7 lg:px-16">
			<div class="mt-36 lg:mt-60">
				<h2
					class="
						transition
						duration-500
						font-Rubik-Light
						text-3xl text-gray-500
						2xl:text-4xl
						dark:text-gray-400
						lg:ml-2
					"
				>
					A Place That You Can Keep Your Notes
				</h2>
				<h3
					class="
						transition
						duration-500
						font-Rubik-Medium
						text-5xl text-gray-700
						2xl:text-6xl
						dark:text-gray-300
						mt-6
					"
				>
					All of your notes! public and private.
				</h3>
			</div>
		</div>
		<div class="flex lg:hidden justify-center mt-20" v-if="!username">
			<LoginButton />
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

import TitleBar from "../components/TitleBar.vue";
import LoginButton from "../components/LoginButton.vue";

export default {
	name: "Home",
	computed: {
		...mapGetters({ username: "getUsername" }),
	},
	components: {
		TitleBar,
		LoginButton,
	},
};
</script>

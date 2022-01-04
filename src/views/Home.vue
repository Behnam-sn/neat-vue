<template>
	<div>
		<TitleBar title="Neat" class="hidden xl:flex" />
		<div class="flex justify-center px-7 xl:px-16">
			<div class="mt-20 xl:mt-40 2xl:mt-60">
				<h2
					class="font-Rubik font-light text-2xl xl:text-3xl 2xl:text-4xl text-gray-500 dark:text-gray-400 transition duration-500"
				>
					A Place That You Can Keep Your Notes
				</h2>
				<h3
					class="font-Rubik font-medium text-4xl xl:text-5xl 2xl:text-6xl text-gray-700 dark:text-gray-300 mt-6 transition duration-500"
				>
					All of Your Notes! Public and Private.
				</h3>
			</div>
		</div>
		<div class="xl:hidden flex justify-center mt-20" v-if="!username">
			<LoginButton />
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

import TitleBar from "../components/TitleBar.vue";
import LoginButton from "../components/LoginButton.vue";

export default {
	name: "HomePage",
	computed: {
		...mapGetters({ username: "getUsername" }),
	},
	components: {
		TitleBar,
		LoginButton,
	},
};
</script>

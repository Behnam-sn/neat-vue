<template>
	<div class="w-full">
		<TitleBar title="Neat" class="hidden lg:flex" />
		<div class="flex justify-center px-7 lg:px-16">
			<div class="mt-36 lg:mt-60">
				<h2
					class="transition duration-500 font-Rubik-Light text-3xl lg:text-4xl text-gray-500 dark:text-gray-400 lg:ml-2"
				>
					A Place That You Can Keep Your Notes
				</h2>
				<h3
					class="transition duration-500 font-Rubik-Medium text-5xl lg:text-6xl text-gray-700 dark:text-gray-300 mt-6"
				>
					All of your notes! public and private.
				</h3>
			</div>
		</div>
		<div class="flex lg:hidden justify-center mt-20">
			<LoginButton />
		</div>
	</div>
</template>

<script>
import TitleBar from "@/components/TitleBar.vue";
import LoginButton from "@/components/LoginButton.vue";

export default {
	name: "Home",
	components: {
		TitleBar,
		LoginButton,
	},
};
</script>

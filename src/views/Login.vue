<template>
	<div class="flex flex-col items-center mt-32 mb-16">
		<h1 class="hidden lg:block font-Poppins-Bold text-6xl mb-32">Neat</h1>
		<div class="flex flex-col items-center">
			<button
				@click="changeMode"
				class="
					self-end
					font-Poppins-Light
					border-2 border-gray-400
					dark:border-gray-500
					rounded-full
					px-6
					py-2
					focus:outline-none focus:ring-2 focus:ring-gray-400
					dark:focus:ring-gray-600
					transition
					duration-500
				"
			>
				{{ isSignup ? "Login" : "Sign Up" }}
			</button>
			<input
				v-model="username"
				class="
					font-Poppins-Light
					bg-gray-200
					dark:bg-gray-800
					text-lg
					w-80
					px-4
					py-2
					mt-8
					rounded-lg
					focus:outline-none focus:ring-2 focus:ring-gray-400
					dark:focus:ring-gray-600
					transition
					duration-500
				"
				type="text"
				name="username"
				placeholder="Username"
			/>
			<input
				v-model="fullname"
				class="
					font-Poppins-Light
					bg-gray-200
					dark:bg-gray-800
					text-lg
					w-80
					px-4
					py-2
					mt-5
					rounded-lg
					focus:outline-none focus:ring-2 focus:ring-gray-400
					dark:focus:ring-gray-600
					transition
					duration-500
				"
				type="text"
				name="fullname"
				placeholder="Fullname"
				v-if="isSignup"
			/>
			<input
				v-model="password"
				class="
					font-Poppins-Light
					bg-gray-200
					dark:bg-gray-800
					text-lg
					w-80
					px-4
					py-2
					mt-5
					rounded-lg
					focus:outline-none focus:ring-2 focus:ring-gray-400
					dark:focus:ring-gray-600
					transition
					duration-500
				"
				type="password"
				name="password"
				placeholder="Password"
			/>
			<button
				@click="submit"
				class="
					font-Poppins-Medium
					text-xl
					bg-primary
					text-secondary
					dark:bg-secondary dark:text-primary
					rounded-full
					px-16
					py-3
					mt-12
					focus:outline-none focus:ring-2 focus:ring-gray-400
					dark:focus:ring-gray-600
					transition
					duration-500
				"
			>
				{{ isSignup ? "Sign Up" : "Login" }}
			</button>
		</div>
	</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
	name: "Login",
	data: () => ({
		isSignup: false,
		username: undefined,
		fullname: undefined,
		password: undefined,
	}),
	methods: {
		...mapActions(["login", "signup"]),
		changeMode() {
			this.isSignup = !this.isSignup;
		},
		submit() {
			if (this.isSignup) {
				this.signup({
					username: this.username,
					fullname: this.fullname,
					password: this.password,
				});
			} else {
				this.login({
					username: this.username,
					password: this.password,
				});
			}
		},
	},
};
</script>

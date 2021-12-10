<template>
	<div class="flex flex-col items-center mt-20 lg:mt-32 mb-16">
		<h1 class="hidden lg:block font-Poppins font-bold text-6xl mb-32">
			Neat
		</h1>
		<div class="flex flex-col items-center">
			<button
				@click="changeMode"
				class="
					self-end
					font-Poppins font-light
					text-primary
					dark:text-secondary
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
				v-model="loginData.username"
				class="
					font-Poppins font-light
					text-lg text-primary
					dark:text-secondary
					bg-gray-200
					dark:bg-gray-800
					w-80
					px-4
					py-2
					mt-8
					rounded-lg
					ring-2 ring-transparent
					focus:outline-none focus:ring-gray-400
					dark:focus:ring-gray-600
					transition
					duration-500
				"
				:class="{
					'ring-red-600':
						errors.empty_username ||
						errors.invalid_username ||
						errors.not_authorised ||
						errors.already_exists,
				}"
				type="text"
				placeholder="Username"
			/>
			<input
				v-model="loginData.full_name"
				class="
					font-Poppins font-light
					text-lg text-primary
					dark:text-secondary
					bg-gray-200
					dark:bg-gray-800
					w-80
					px-4
					py-2
					mt-5
					rounded-lg
					ring-2 ring-transparent
					focus:outline-none focus:ring-gray-400
					dark:focus:ring-gray-600
					transition
					duration-500
				"
				type="text"
				placeholder="Fullname"
				v-if="isSignup"
			/>
			<input
				v-model="loginData.password"
				class="
					font-Poppins font-light
					text-lg text-primary
					dark:text-secondary
					bg-gray-200
					dark:bg-gray-800
					w-80
					px-4
					py-2
					mt-5
					rounded-lg
					ring-2 ring-transparent
					focus:outline-none focus:ring-gray-400
					dark:focus:ring-gray-600
					transition
					duration-500
				"
				:class="{
					'ring-red-600':
						errors.empty_password || errors.not_authorised,
				}"
				type="password"
				placeholder="Password"
			/>
			<button
				@click="submit"
				class="
					font-Poppins font-medium
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
			<div class="font-Poppins font-light text-lg text-red-600 mt-14">
				<ul class="list-disc list-outside">
					<li v-if="errors.empty_username">Username required</li>
					<li v-if="errors.invalid_username">
						Please enter valid Username
					</li>
					<li v-if="errors.empty_password">Password required</li>
					<li v-if="errors.not_authorised">
						Username / Password is wrong
					</li>
					<li v-if="errors.already_exists">User already exists</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
	name: "Login",
	mounted: function () {
		this.resetLoginData();
		this.resetErrors();
	},
	data: () => ({
		isSignup: false,
	}),
	computed: {
		...mapGetters({
			submitIsSafe: "getSubmitIsSafe",
			loginData: "getLoginData",
			errors: "getErrors",
		}),
	},
	methods: {
		...mapMutations(["resetLoginData", "resetErrors"]),
		...mapActions(["checkLoginData", "login", "signup"]),
		changeMode() {
			this.isSignup = !this.isSignup;
			this.resetErrors();
		},
		submit() {
			this.checkLoginData();
			if (this.submitIsSafe) {
				this.isSignup ? this.signup() : this.login();
			}
		},
	},
};
</script>

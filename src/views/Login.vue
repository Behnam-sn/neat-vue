<template>
	<div
		@keyup.enter="submit"
		class="flex flex-col items-center mt-20 lg:mt-20 2xl:mt-32 mb-16"
	>
		<h1
			class="
				hidden
				lg:block
				font-Poppins font-bold
				text-6xl
				mb-20
				2xl:mb-32
			"
		>
			Neat
		</h1>
		<div class="flex flex-col items-center">
			<button
				@click="changeMode"
				class="
					self-end
					font-Poppins font-light
					text-sm text-primary
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
					2xl:text-lg
					text-primary
					dark:text-secondary
					bg-gray-200
					dark:bg-gray-800
					w-72
					2xl:w-80
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
					2xl:text-lg
					text-primary
					dark:text-secondary
					bg-gray-200
					dark:bg-gray-800
					w-72
					2xl:w-80
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
					2xl:text-lg
					text-primary
					dark:text-secondary
					bg-gray-200
					dark:bg-gray-800
					w-72
					2xl:w-80
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
					text-lg
					2xl:text-xl
					bg-primary
					text-secondary
					dark:bg-secondary dark:text-primary
					rounded-full
					px-14
					py-3
					2xl:px-16 2xl:py-3
					mt-12
					focus:outline-none focus:ring-2 focus:ring-gray-400
					dark:focus:ring-gray-600
					transition
					duration-500
				"
			>
				{{ isSignup ? "Sign Up" : "Login" }}
			</button>
			<div class="font-Poppins font-light 2xl:text-lg text-red-600 mt-14">
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
	name: "LoginPage",
	mounted: function () {
		this.resetLoginData();
		this.resetErrors();
	},
	data: () => ({
		isSignup: false,
	}),
	computed: {
		...mapGetters({
			submitIsValid: "getSubmitIsValid",
			loginData: "getLoginData",
			errors: "getErrors",
		}),
	},
	methods: {
		...mapMutations(["resetLoginData", "resetErrors"]),
		...mapActions(["validateLoginData", "login", "signup"]),
		changeMode() {
			this.isSignup = !this.isSignup;
			this.resetErrors();
		},
		submit() {
			this.validateLoginData();
			if (this.submitIsValid) {
				this.isSignup ? this.signup() : this.login();
			}
		},
	},
};
</script>

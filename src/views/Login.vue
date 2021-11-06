<template>
	<div class="w-full flex flex-col items-center mt-32 mb-16">
		<h1 class="hidden lg:block font-Poppins-Bold text-6xl mb-32">Neat</h1>
		<div class="flex flex-col items-center">
			<button
				@click="changeMode"
				class="font-Poppins-Light border-2 border-gray-400 rounded-full px-6 py-2 self-end"
			>
				{{ signup ? "Login" : "Sign Up" }}
			</button>
			<input
				v-model="username"
				class="font-Poppins-Light bg-gray-200 dark:bg-gray-800 text-lg w-80 px-4 py-2 mt-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-opacity-50 transition duration-500"
				type="text"
				name="username"
				placeholder="Username"
			/>
			<input
				v-model="fullname"
				class="font-Poppins-Light bg-gray-200 dark:bg-gray-800 text-lg w-80 px-4 py-2 mt-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition duration-500"
				type="text"
				name="fullname"
				placeholder="Fullname"
				v-if="signup"
			/>
			<input
				v-model="password"
				class="font-Poppins-Light bg-gray-200 dark:bg-gray-800 text-lg w-80 px-4 py-2 mt-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition duration-500"
				type="password"
				name="password"
				placeholder="Password"
			/>
			<button
				@click="submit"
				class="font-Poppins-Medium text-xl bg-black text-customWhite dark:bg-customWhite dark:text-black rounded-full px-16 py-3 mt-12 transition duration-500"
			>
				{{ signup ? "Sign Up" : "Login" }}
			</button>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
	name: "Login",
	data: () => ({
		signup: false,
		username: undefined,
		fullname: undefined,
		password: undefined,
	}),
	methods: {
		...mapMutations(["setUser", "setToken"]),
		changeMode() {
			this.signup = !this.signup;
		},
		submit() {
			const User = new FormData();
			User.append("username", this.username);
			User.append("password", this.password);

			axios
				.post("auth/login", User)
				.then((response) => {
					this.setToken(response.data.access_token);
					this.setUser(this.username);
				})
				.catch(function(error) {
					console.log(error);
				});
		},
	},
};
</script>

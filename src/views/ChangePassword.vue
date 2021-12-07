<template>
	<div>
		<TitleBar title="Change Password" />
		<div class="flex flex-col items-center justify-center mt-24 mb-16">
			<div class="flex flex-col pb-6">
				<label class="font-Poppins font-medium text-lg">Password</label>
				<input
					v-model="password_update.password"
					class="
						font-Poppins font-light
						text-lg
						bg-gray-200
						dark:bg-gray-800
						w-80
						px-4
						py-2
						mt-2
						rounded-lg
						focus:outline-none focus:ring-2 focus:ring-gray-400
						dark:focus:ring-gray-600
						transition
						duration-500
					"
					type="password"
				/>
			</div>
			<div class="flex flex-col pb-6">
				<label class="font-Poppins font-medium text-lg"
					>New Password</label
				>
				<input
					v-model="password_update.newPassword"
					class="
						font-Poppins font-light
						text-lg
						bg-gray-200
						dark:bg-gray-800
						w-80
						px-4
						py-2
						mt-2
						rounded-lg
						focus:outline-none focus:ring-2 focus:ring-gray-400
						dark:focus:ring-gray-600
						transition
						duration-500
					"
					type="password"
				/>
			</div>
			<button
				@click="updatePassword"
				class="
					font-Poppins font-medium
					bg-blue-500
					rounded-full
					px-7
					py-2
					mt-8
					hover:bg-blue-400
					dark:hover:bg-blue-600
					transition
					duration-500
				"
			>
				Change Password
			</button>
		</div>
	</div>
</template>

<script>
import { mapActions } from "vuex";

import TitleBar from "../components/TitleBar.vue";

export default {
	name: "ChangePassword",
	data: () => ({
		password_update: {
			password: "",
			newPassword: "",
		},
	}),
	methods: {
		...mapActions(["changePassword"]),
		updatePassword() {
			this.changePassword(this.password_update);
		},
	},
	components: {
		TitleBar,
	},
};
</script>

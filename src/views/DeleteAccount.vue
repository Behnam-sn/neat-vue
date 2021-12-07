<template>
	<div>
		<TitleBar title="Delete Account" />
		<div class="flex flex-col items-center justify-center mt-24 mb-16">
			<div class="flex flex-col pb-6">
				<label class="font-Poppins font-medium text-lg">Password</label>
				<input
					v-model="password"
					class="
						font-Poppins font-light
						text-lg text-primary
						dark:text-secondary
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
				@click="deleteUser"
				class="
					font-Poppins font-medium
					text-primary
					dark:text-secondary
					bg-red-500
					rounded-full
					px-7
					py-2
					mt-8
					hover:bg-red-400
					dark:hover:bg-red-600
					transition
					duration-500
				"
			>
				Delete Account
			</button>
		</div>
	</div>
</template>

<script>
import { mapActions } from "vuex";

import TitleBar from "../components/TitleBar.vue";

export default {
	name: "DeleteAccount",
	data: () => ({
		password: "",
	}),
	methods: {
		...mapActions(["deleteAccount"]),
		deleteUser() {
			this.deleteAccount(this.password);
		},
	},
	components: {
		TitleBar,
	},
};
</script>

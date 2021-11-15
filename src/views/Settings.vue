<template>
	<div>
		<TitleBar title="Settings" />
		<div class="flex flex-col items-center justify-center mt-24 mb-16">
			<div class="flex flex-col pb-6">
				<label class="font-Poppins-Medium text-lg">Username</label>
				<input
					v-model="user.username"
					class="
						font-Poppins-Light
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
					type="text"
				/>
			</div>
			<div class="flex flex-col pb-6">
				<label class="font-Poppins-Medium text-lg">Full Name</label>
				<input
					v-model="user.full_name"
					class="
						font-Poppins-Light
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
					type="text"
				/>
			</div>
			<!-- <div class="flex flex-col pb-6">
				<label class="font-Poppins-Medium text-lg">Password</label>
				<input
					class="
						font-Poppins-Light
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
			</div> -->
			<div class="flex justify-between w-80 mt-8">
				<button
					class="
						font-Poppins-Medium
						text-sm
						bg-red-500
						rounded-full
						px-7
						py-2
					"
				>
					Delete Account
				</button>
				<button
					@click="changeUserDetails"
					class="
						font-Poppins-Medium
						bg-green-500
						rounded-full
						px-7
						py-2
					"
				>
					Done
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TitleBar from "../components/TitleBar.vue";

export default {
	name: "Settings",
	created: function () {
		this.fetchUser(this.username);
	},
	computed: {
		...mapGetters({ username: "getUsername", user: "getUser" }),
	},
	methods: {
		...mapActions(["fetchUser", "updateUserDetails"]),
		changeUserDetails() {
			this.updateUserDetails();
		},
	},
	components: {
		TitleBar,
	},
};
</script>

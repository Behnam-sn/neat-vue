<template>
	<div>
		<TitleBar title="Settings" />
		<div
			class="
				flex flex-col
				items-center
				justify-center
				mt-12
				2xl:mt-24
				xl:mb-16
			"
		>
			<div class="flex flex-col pb-6">
				<label class="font-Poppins font-medium 2xl:text-lg"
					>Username</label
				>
				<input
					v-model="user.username"
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
						mt-2
						rounded-lg
						ring-2 ring-transparent
						focus:outline-none focus:ring-gray-400
						dark:focus:ring-gray-600
						transition
						duration-500
					"
					type="text"
				/>
			</div>
			<div class="flex flex-col pb-6">
				<label class="font-Poppins font-medium 2xl:text-lg"
					>Full Name</label
				>
				<input
					v-model="user.full_name"
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
						mt-2
						rounded-lg
						ring-2 ring-transparent
						focus:outline-none focus:ring-gray-400
						dark:focus:ring-gray-600
						transition
						duration-500
					"
					type="text"
				/>
			</div>
			<div class="w-72 2xl:w-80">
				<DateAndTime title="Created" :value="user.created_at" />
				<DateAndTime title="Modified" :value="user.modified_at" />
			</div>

			<button
				@click="changeUser"
				class="
					font-Poppins font-medium
					text-sm
					2xl:text-base
					text-primary
					dark:text-secondary
					bg-green-500
					hover:bg-green-400
					dark:hover:bg-green-600
					rounded-full
					px-7
					py-2
					mt-8
					transition
					duration-500
				"
			>
				Update Account
			</button>
			<div
				class="
					border-b-4 border-gray-400
					dark:border-gray-600
					rounded-full
					w-80
					mt-8
					transition
					duration-500
				"
			></div>
			<router-link to="/DeleteAccount">
				<button
					class="
						font-Poppins font-medium
						text-sm
						2xl:text-base
						text-primary
						dark:text-secondary
						bg-red-500
						hover:bg-red-400
						dark:hover:bg-red-600
						rounded-full
						px-7
						py-2
						mt-8
						transition
						duration-500
					"
				>
					Delete Account
				</button>
			</router-link>
			<router-link to="/ChangePassword">
				<button
					class="
						font-Poppins font-medium
						text-sm
						2xl:text-base
						text-primary
						dark:text-secondary
						bg-blue-500
						hover:bg-blue-400
						dark:hover:bg-blue-600
						rounded-full
						px-7
						py-2
						mt-8
						transition
						duration-500
					"
				>
					Change Password
				</button>
			</router-link>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import TitleBar from "../components/TitleBar.vue";
import DateAndTime from "../components/DateAndTime.vue";

export default {
	name: "SettingsPage",
	created: function () {
		this.fetchUser(this.username);
	},
	computed: {
		...mapGetters({ username: "getUsername", user: "getUser" }),
	},
	methods: {
		...mapActions(["fetchUser", "updateUser"]),
		changeUser() {
			this.updateUser();
		},
	},
	components: {
		TitleBar,
		DateAndTime,
	},
};
</script>

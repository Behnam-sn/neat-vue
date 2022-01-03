<template>
	<div>
		<TitleBar title="Delete Account" />
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
					>Password</label
				>
				<input
					v-model="deleteAccountData.password"
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
					:class="{
						'ring-red-600':
							errors.empty_password || errors.not_authorised,
					}"
					type="password"
				/>
			</div>
			<button
				@click="submit"
				class="
					font-Poppins font-medium
					text-sm
					2xl:text-base
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
			<div class="font-Poppins font-light text-lg text-red-600 mt-14">
				<ul class="list-disc list-outside">
					<li v-if="errors.empty_password">Password required</li>
					<li v-if="errors.not_authorised">Password is wrong</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

import TitleBar from "../components/TitleBar.vue";

export default {
	name: "DeleteAccount",
	mounted: function () {
		this.resetDeleteAccountData();
		this.resetErrors();
	},
	computed: {
		...mapGetters({
			submitIsValid: "getSubmitIsValid",
			deleteAccountData: "getDeleteAccountData",
			errors: "getErrors",
		}),
	},
	methods: {
		...mapMutations(["resetDeleteAccountData", "resetErrors"]),
		...mapActions(["validateDeleteAccountData", "deleteAccount"]),
		submit() {
			this.validateDeleteAccountData();
			if (this.submitIsValid) {
				this.deleteAccount();
			}
		},
	},
	components: {
		TitleBar,
	},
};
</script>

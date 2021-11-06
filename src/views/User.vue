<template>
	<div class="px-7 lg:w-full lg:mt-16 lg:px-16">
		<TitleBar :title="username + ' Notes'" class="mt-8 lg:mt-0" />
		<div>current user: {{ user }}</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import TitleBar from "@/components/TitleBar.vue";

export default {
	name: "User",
	computed: {
		...mapGetters({ user: "getUser" }),
		username() {
			return this.$route.params.username;
		},
	},
	// mounted: function() {
	// 	if (this.username == this.user) {
	// 		console.log("yes");
	// 	} else {
	// 		console.log("no");
	// 	}
	// },
	updated: function() {
		if (this.username == this.user) {
			console.log("yes");
		} else {
			console.log("no");
		}
	},
	components: {
		TitleBar,
	},
};
</script>

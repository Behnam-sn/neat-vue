<template>
	<div>
		<div>{{ user }}</div>
		<div>{{ username }}</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

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
};
</script>

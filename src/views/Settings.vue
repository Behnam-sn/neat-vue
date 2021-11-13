<script>
import TitleBar from "../components/TitleBar.vue";

export default {
	name: "Settings",
	components: {
		TitleBar,
	},
};
</script>

<template>
	<div>
		<TitleBar title="Settings" />
		<div>username</div>
		<div>password</div>
		<div>full name</div>
		<button>delete</button>
		<button>done</button>
	</div>
</template>

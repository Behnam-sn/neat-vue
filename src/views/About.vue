<template>
	<div>
		<TitleBar title="About" />
		<div class="px-7 lg:px-16">
			<h1>This is an about page</h1>
		</div>
	</div>
</template>

<script>
import TitleBar from "../components/TitleBar.vue";

export default {
	name: "About",
	components: {
		TitleBar,
	},
};
</script>

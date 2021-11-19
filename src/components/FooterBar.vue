<template>
	<div
		class="
			lg:hidden
			fixed
			bottom-0
			w-full
			h-12
			shadow-xl
			bg-gray-300
			dark:bg-gray-800
			transition
			duration-500
		"
	>
		<div class="w-full h-full relative">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "FooterBar",
};
</script>

<template>
	<div
		class="
			font-Roboto font-bold
			text-sm
			lg:text-base
			text-primary
			dark:text-secondary
			transition
			duration-500
			my-2
			lg:my-3
		"
	>
		{{ title }} : <span class="font-medium">{{ value }}</span>
	</div>
</template>

<script>
export default {
	name: "DateAndTime",
	props: ["title", "value"],
};
</script>

<template>
	<div
		class="
			font-Roboto font-bold
			text-xs
			xl:text-sm
			2xl:text-base
			text-primary
			dark:text-secondary
			transition
			duration-500
			my-2
			xl:my-3
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

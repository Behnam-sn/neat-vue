<template>
	<div class="font-Roboto font-bold text-sm lg:text-base my-2 lg:my-3">
		{{ title }} : <span class="font-Roboto font-medium">{{ value }}</span>
	</div>
</template>

<script>
export default {
	name: "DateAndTime",
	props: ["title", "value"],
};
</script>

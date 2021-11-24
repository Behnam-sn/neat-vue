<template>
	<div class="font-Roboto-Bold my-3">
		{{ title }} : <span class="font-Roboto-Medium">{{ value }}</span>
	</div>
</template>

<script>
export default {
	name: "DateAndTime",
	props: ["title", "value"],
};
</script>

<template>
	<router-link
		to="/login"
		class="
			font-Rubik font-normal
			text-base
			bg-primary
			dark:bg-secondary
			text-secondary
			dark:text-primary
			rounded-full
			py-3
			px-6
			transition
			duration-500
		"
		>Login / Sign Up
	</router-link>
</template>

<script>
export default {
	name: "LoginButton",
};
</script>

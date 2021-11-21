<template>
	<router-link
		:to="address"
		class="flex items-center justify-center relative group"
	>
		<slot></slot>
		<div
			class="
				absolute
				left-20
				w-auto
				min-w-max
				p-2
				m-2
				rounded-md
				shadow-md
				bg-primary
				dark:bg-secondary
				text-secondary
				dark:text-primary
				font-Poppins-Bold
				text-xs
				z-10
				scale-0
				transform
				origin-center
				transition
				duration-500
				delay-150
				group-hover:scale-100
			"
		>
			{{ tooltipText }}
		</div>
	</router-link>
</template>

<script>
export default {
	name: "MenuButton",
	props: ["address", "tooltipText"],
};
</script>

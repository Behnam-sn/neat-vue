<template>
	<div
		class="
			lg:hidden
			fixed
			bottom-0
			w-full
			h-12
			shadow-2xl
			bg-secondary
			dark:bg-primary
			transition
			duration-500
		"
	>
		<div class="w-full h-full relative">
			<div
				id="btn"
				class="
					absolute
					w-16
					h-16
					rounded-full
					bg-primary
					ring-8 ring-secondary
					dark:ring-primary
					flex
					justify-center
					items-center
					cursor-pointer
					transition
					duration-500
				"
			>
				<PlusIcon class="h-12 text-secondary transition duration-500" />
			</div>
		</div>
	</div>
</template>

<script>
import PlusIcon from "../assets/svg/PlusIcon.vue";

export default {
	name: "FooterBar",
	components: {
		PlusIcon,
	},
};
</script>

<style lang="scss" scoped>
#btn {
	// left: 50%;
	// right: 50%;
	top: -65%;
	left: 50%;
	transform: translate(-50%, 0);
}
</style>

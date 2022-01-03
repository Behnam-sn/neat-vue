<template>
	<button
		@click="logout"
		class="flex items-center justify-center relative group"
	>
		<LogoutIcon class="h-8 2xl:h-9 my-4" />
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
				font-Poppins font-bold
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
			Logout
		</div>
	</button>
</template>

<script>
import { mapActions } from "vuex";

import LogoutIcon from "../../assets/svg/LogoutIcon.vue";

export default {
	name: "MenuLogoutButton",
	methods: {
		...mapActions(["logout"]),
	},
	components: {
		LogoutIcon,
	},
};
</script>

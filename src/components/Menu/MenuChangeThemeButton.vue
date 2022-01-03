<template>
	<button
		class="
			flex
			items-center
			justify-center
			relative
			group
			bg-primary
			text-secondary
			dark:bg-secondary dark:text-primary
			my-4
			rounded-md
			transition
			duration-500
		"
		@click="changeTheme"
	>
		<transition name="fade" mode="out-in">
			<SunIcon class="h-10 2xl:h-11 p-2" v-if="theme == 'dark'" />
			<MoonIcon class="h-10 2xl:h-11 p-2" v-else />
		</transition>

		<div
			class="
				aa
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
				group-hover:scale-100
			"
		>
			Theme
		</div>
	</button>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import MoonIcon from "../../assets/svg/MoonIcon.vue";
import SunIcon from "../../assets/svg/SunIcon.vue";

export default {
	name: "MenuChangeThemeButton",
	computed: {
		...mapGetters({ theme: "getTheme" }),
	},
	methods: {
		...mapActions(["changeTheme"]),
	},
	components: {
		MoonIcon,
		SunIcon,
	},
};
</script>

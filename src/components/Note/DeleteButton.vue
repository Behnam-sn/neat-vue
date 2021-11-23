<template>
	<div class="relative">
		<button
			@click="toggleBox"
			class="
				w-14
				h-14
				flex
				justify-center
				items-center
				text-red-400
				dark:text-red-500
				hover:text-red-500
				dark:hover:text-red-400
				hover:bg-gray-300
				dark:hover:bg-gray-500
				rounded-full
				transition
				duration-500
			"
		>
			<TrashIcon class="h-8" />
		</button>
		<transition name="bounce">
			<div
				v-if="confirmBox"
				class="
					absolute
					right-2
					bg-secondary
					w-auto
					min-w-max
					py-6
					px-8
					m-2
					rounded-md
					shadow-md
					z-10
				"
			>
				<div class="font-Poppins-Medium text-primary mb-2">
					Delete This Note?
				</div>
				<button
					@click="deleteNote"
					class="
						font-Poppins-Bold
						text-sm
						bg-red-100
						hover:bg-red-200
						text-red-500
						hover:text-red-600
						p-3
						m-1
						rounded-md
						transition
						duration-500
					"
				>
					Delete
				</button>
				<button
					@click="toggleBox"
					class="
						font-Poppins-Bold
						text-sm
						hover:bg-gray-200
						text-primary
						p-3
						m-1
						rounded-md
						transition
						duration-500
					"
				>
					Cancel
				</button>
			</div>
		</transition>
	</div>
</template>

<script>
import { mapActions } from "vuex";

import TrashIcon from "../../assets/svg/TrashIcon.vue";

export default {
	name: "DeleteButton",
	data: () => ({
		confirmBox: false,
	}),
	methods: {
		...mapActions(["deleteNote"]),
		toggleBox() {
			this.confirmBox = !this.confirmBox;
		},
	},
	components: {
		TrashIcon,
	},
};
</script>

<style lang="scss">
.bounce-enter-active {
	animation: bounce-in 0.5s cubic-bezier(0.4, 0, 0.2, 1);
	transform-origin: top right;
}
.bounce-leave-active {
	animation: bounce-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) reverse;
	transform-origin: top right;
}
@keyframes bounce-in {
	0% {
		transform: scale(0);
	}
	100% {
		transform: scale(1);
	}
}
</style>

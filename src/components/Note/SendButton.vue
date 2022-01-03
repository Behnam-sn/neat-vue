<template>
	<button
		class="
			absolute
			bottom-16
			right-16
			hidden
			xl:block
			bg-secondary
			dark:bg-primary
			text-primary
			dark:text-secondary
			p-7
			rounded-full
			transition
			duration-500
		"
	>
		<transition name="send" mode="out-in">
			<YinYangIcon class="h-8 2xl:h-9" v-if="sending" />
			<SendIcon class="h-8 2xl:h-9" v-else />
		</transition>
	</button>
</template>

<script>
import { mapGetters } from "vuex";

import SendIcon from "../../assets/svg/SendIcon.vue";
import YinYangIcon from "../../assets/svg/YinYangIcon.vue";

export default {
	name: "SendButton",
	computed: {
		...mapGetters({
			sending: "getSending",
		}),
	},
	components: {
		SendIcon,
		YinYangIcon,
	},
};
</script>

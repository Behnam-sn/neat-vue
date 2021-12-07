<template>
	<div
		class="
			lg:hidden
			fixed
			bottom-0
			w-full
			h-12
			shadow-xl
			bg-gray-300
			dark:bg-gray-800
			transition
			duration-500
		"
	>
		<div class="relative w-full h-full">
			<div
				class="
					footer-bar-btn
					flex
					justify-center
					items-center
					absolute
					w-16
					h-16
					ring-8
					rounded-full
					bg-secondary
					dark:bg-primary
					ring-gray-300
					dark:ring-gray-800
					transition
					duration-500
				"
			>
				<button v-if="isNote" @click="sendNote">
					<transition name="send" mode="out-in">
						<YinYangIcon
							v-if="loading"
							class="
								h-9
								text-primary
								dark:text-secondary
								transition
								duration-500
							"
						/>
						<SendIcon
							v-else
							class="
								h-8
								text-primary
								dark:text-secondary
								transition
								duration-500
							"
						/>
					</transition>
				</button>
				<router-link v-else to="/addnote">
					<PlusIcon
						class="
							h-12
							text-primary
							dark:text-secondary
							transition
							duration-500
						"
					/>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import PlusIcon from "../assets/svg/PlusIcon.vue";
import SendIcon from "../assets/svg/SendIcon.vue";
import YinYangIcon from "../assets/svg/YinYangIcon.vue";

export default {
	name: "FooterBar",
	computed: {
		...mapGetters({
			username: "getUsername",
			note: "getNote",
			loading: "getLoading",
		}),
		path() {
			return this.$route.path.toLowerCase();
		},
		isNote() {
			if (
				this.path == "/addnote" ||
				(this.path.includes("/note") &&
					this.note.author == this.username)
			) {
				return true;
			} else {
				return false;
			}
		},
	},
	methods: {
		...mapActions(["createNote", "updateNote"]),
		sendNote() {
			if (this.path == "/addnote") {
				this.createNote();
			} else {
				this.updateNote();
			}
		},
	},
	components: {
		PlusIcon,
		SendIcon,
		YinYangIcon,
	},
};
</script>

<style lang="scss">
.footer-bar-btn {
	top: -65%;
	left: 50%;
	transform: translate(-50%, 0);
}
</style>

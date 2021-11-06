<template>
	<div class="lg:w-full">
		<div class="h-vh-15  flex">
			<TitleBar title="Public Notes" class="lg:w-full px-7 lg:px-16" />
		</div>
		<div class="lg:h-vh-85 lg:overflow-y-scroll">
			<div
				class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-8 pb-64 lg:px-14 xl:px-28 lg:pt-16"
			>
				<div
					v-for="note in notes"
					:key="note.id"
					class="h-60 bg-gray-200 rounded-2xl overflow-hidden"
				>
					<div class="overflow-hidden m-8">
						<div class="font-Rubik-Medium text-2xl">
							{{ note.author }}
						</div>
						<p class="font-Rubik-Light text-lg break-words">
							{{ note.content }}
						</p>
						<!-- <p class="font-Rubik-Medium text-2xl break-words">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TitleBar from "@/components/TitleBar.vue";

export default {
	name: "Public",
	methods: {
		...mapActions(["fetchPublicNotes"]),
	},
	computed: {
		...mapGetters({ notes: "getPublicNotes" }),
	},
	mounted: function() {
		this.fetchPublicNotes();
	},
	components: {
		TitleBar,
	},
};
</script>

<style lang="scss" scoped>
.kfpldek {
	height: 15vh;
}
.avgsdds {
	height: 85vh;
}
</style>

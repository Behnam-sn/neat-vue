<template>
	<div>
		<TitleBar title="About" />
		<div class="px-7 lg:px-16 font-Roboto-Regular text-xl">
			<div class="lg:flex lg:flex-row lg:items-center mt-7">
				<div class="font-Roboto-Medium mb-2 lg:mb-0 lg:mr-2">
					Developer & designer :
				</div>
				<div class="py-2 px-3">Behnam Salehi</div>
			</div>
			<div class="lg:flex lg:flex-row lg:items-center mt-7">
				<div class="font-Roboto-Medium mb-2 lg:mb-0 lg:mr-2">
					My GitHub :
				</div>
				<a
					class="
						text-gray-700
						dark:text-gray-400
						hover:bg-gray-200
						dark:hover:bg-gray-800
						py-2
						px-3
						rounded-md
						transition
						duration-500
					"
					href="https://github.com/Behnam-sn"
					target="_blank"
				>
					behnam-sn
				</a>
			</div>
			<div class="lg:flex lg:flex-row lg:items-center mt-7">
				<div class="font-Roboto-Medium mb-2 lg:mb-0 lg:mr-2">
					Frontend Repository :
				</div>
				<a
					class="
						text-gray-700
						dark:text-gray-400
						hover:bg-gray-200
						dark:hover:bg-gray-800
						py-2
						px-3
						rounded-md
						transition
						duration-500
					"
					href="https://github.com/Behnam-sn/neat-frontend"
					target="_blank"
				>
					neat-frontend
				</a>
			</div>
			<div class="lg:flex lg:flex-row lg:items-center mt-7">
				<div class="font-Roboto-Medium mb-2 lg:mb-0 lg:mr-2">
					Backend Repository :
				</div>
				<a
					class="
						text-gray-700
						dark:text-gray-400
						hover:bg-gray-200
						dark:hover:bg-gray-800
						py-2
						px-3
						rounded-md
						transition
						duration-500
					"
					href="https://github.com/Behnam-sn/neat-backend"
					target="_blank"
				>
					neat-backend
				</a>
			</div>
			<div class="font-Roboto-Medium mt-7">Tech Stack :</div>
			<div class="flex flex-col lg:flex-row">
				<a
					class="
						lg:w-1/4
						flex flex-col
						justify-center
						items-center
						p-5
						m-5
						mb-16
						bg-gray-200
						dark:bg-gray-800
						hover:bg-gray-100
						dark:hover:bg-gray-700
						rounded-xl
						transition
						duration-500
					"
					href="https://fastapi.tiangolo.com/"
					target="_blank"
				>
					<img src="../assets/img/fastapi.png" />
					<div>FastAPI</div>
				</a>
				<a
					class="
						lg:w-1/4
						flex flex-col
						justify-center
						items-center
						p-5
						m-5
						mb-16
						bg-gray-200
						dark:bg-gray-800
						hover:bg-gray-100
						dark:hover:bg-gray-700
						rounded-xl
						transition
						duration-500
					"
					href="https://vuejs.org/"
					target="_blank"
				>
					<img class="lg:h-36" src="../assets/img/vue.png" />
					<div>Vue.js</div>
				</a>
				<a
					class="
						lg:w-1/4
						flex flex-col
						justify-center
						items-center
						p-5
						m-5
						mb-16
						bg-gray-200
						dark:bg-gray-800
						hover:bg-gray-100
						dark:hover:bg-gray-700
						rounded-xl
						transition
						duration-500
					"
					href="https://tailwindcss.com/"
					target="_blank"
				>
					<img class="lg:h-36" src="../assets/img/tailwind.png" />
					<div>Tailwind CSS</div>
				</a>
				<a
					class="
						lg:w-1/4
						flex flex-col
						justify-center
						items-center
						p-5
						m-5
						mb-16
						bg-gray-200
						dark:bg-gray-800
						hover:bg-gray-100
						dark:hover:bg-gray-700
						rounded-xl
						transition
						duration-500
					"
					href="https://fontawesome.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img class="lg:h-36" src="../assets/img/fontawesome.png" />
					<div>Font Awesome</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import TitleBar from "../components/TitleBar.vue";

export default {
	name: "About",
	components: {
		TitleBar,
	},
};
</script>

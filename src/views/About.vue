<template>
  <div>
    <TitleBar title="About" />
    <div class="px-7 xl:px-16 font-Roboto font-normal text-xl">
      <div class="lg:flex lg:flex-row lg:items-center">
        <div class="font-Roboto font-medium mb-2 lg:mb-0 lg:mr-2">
          Developer & Designer :
        </div>
        <div class="py-2 px-3">Behnam Salehi</div>
      </div>
      <div class="lg:flex lg:flex-row lg:items-center mt-7">
        <div class="font-Roboto font-medium mb-2 lg:mb-0 lg:mr-2">
          My GitHub :
        </div>
        <a
          class="text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 py-2 px-3 rounded-md transition duration-500"
          href="https://github.com/Behnam-sn"
          target="_blank"
        >
          behnam-sn
        </a>
      </div>
      <div class="lg:flex lg:flex-row lg:items-center mt-7">
        <div class="font-Roboto font-medium mb-2 lg:mb-0 lg:mr-2">
          Frontend Repository :
        </div>
        <a
          class="text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 py-2 px-3 rounded-md transition duration-500"
          href="https://github.com/Behnam-sn/neat-vue"
          target="_blank"
        >
          neat-vue
        </a>
      </div>
      <div class="lg:flex lg:flex-row lg:items-center mt-7">
        <div class="font-Roboto font-medium mb-2 lg:mb-0 lg:mr-2">
          Backend Repository :
        </div>
        <a
          class="text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 py-2 px-3 rounded-md transition duration-500"
          href="https://github.com/Behnam-sn/neat-fastapi"
          target="_blank"
        >
          neat-fastapi
        </a>
      </div>
      <div class="font-Roboto font-medium mt-7">Tech Stack :</div>
      <div class="flex flex-col xl:flex-row lg:px-48 xl:px-0">
        <a
          class="xl:w-1/4 flex flex-col justify-center items-center p-5 m-5 mb-16 bg-gray-200 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition duration-500"
          href="https://fastapi.tiangolo.com/"
          target="_blank"
        >
          <img
            src="../assets/img/fastapi.png"
            lazy="load"
            decode="async"
            alt="FastAPI"
          />
          <div class="text-primary dark:text-secondary transition duration-500">
            FastAPI
          </div>
        </a>
        <a
          class="xl:w-1/4 flex flex-col justify-center items-center p-5 m-5 mb-16 bg-gray-200 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition duration-500"
          href="https://vuejs.org/"
          target="_blank"
        >
          <img
            class="xl:h-36"
            src="../assets/img/vue.png"
            lazy="load"
            decode="async"
            alt="Vue.js"
          />
          <div class="text-primary dark:text-secondary transition duration-500">
            Vue.js
          </div>
        </a>
        <a
          class="xl:w-1/4 flex flex-col justify-center items-center p-5 m-5 mb-16 bg-gray-200 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition duration-500"
          href="https://tailwindcss.com/"
          target="_blank"
        >
          <img
            class="xl:h-36"
            src="../assets/img/tailwind.png"
            lazy="load"
            decode="async"
            alt="Tailwind CSS"
          />
          <div class="text-primary dark:text-secondary transition duration-500">
            Tailwind CSS
          </div>
        </a>
        <a
          class="xl:w-1/4 flex flex-col justify-center items-center p-5 m-5 mb-16 bg-gray-200 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition duration-500"
          href="https://fontawesome.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="xl:h-36"
            src="../assets/img/fontawesome.png"
            lazy="load"
            decode="async"
            alt="Font Awesome"
          />
          <div class="text-primary dark:text-secondary transition duration-500">
            Font Awesome
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import TitleBar from "../components/TitleBar.vue";

export default {
  name: "TheAbout",
  components: {
    TitleBar,
  },
};
</script>

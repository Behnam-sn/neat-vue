import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		darkMode: false,
	},
	getters: {
		getTheme: (state) => state.darkMode,
	},
	mutations: {
		changeTheme(state) {
			if (localStorage.theme == "light") {
				localStorage.theme = "dark";
				state.darkMode = true;
				document.documentElement.classList.add("dark");
			} else {
				localStorage.theme = "light";
				state.darkMode = false;
				document.documentElement.classList.remove("dark");
			}
		},
	},
	actions: {},
	modules: {},
});

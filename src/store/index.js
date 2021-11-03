import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		darkMode: localStorage.theme,
		isCollapse: false,
	},
	getters: {
		getTheme: (state) => state.darkMode,
		getCollapseStatus: (state) => state.isCollapse,
	},
	mutations: {
		changeTheme(state) {
			if (localStorage.theme == "light") {
				localStorage.theme = "dark";
				state.darkMode = "dark";
				document.documentElement.classList.add("dark");
			} else {
				localStorage.theme = "light";
				state.darkMode = "light";
				document.documentElement.classList.remove("dark");
			}
		},
		collapse(state) {
			state.isCollapse = !state.isCollapse;
		},
	},
	actions: {},
	modules: {},
});

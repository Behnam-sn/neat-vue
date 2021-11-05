import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		darkMode: localStorage.getItem("theme"),
		isCollapse: false,
		user: localStorage.getItem("user"),
		token: localStorage.getItem("token"),
	},
	getters: {
		getTheme: (state) => state.darkMode,
		getCollapseStatus: (state) => state.isCollapse,
		getUser: (state) => state.user,
		getToken: (state) => state.token,
	},
	mutations: {
		changeTheme(state) {
			if (localStorage.theme == "light") {
				localStorage.setItem("theme", "dark");
				state.darkMode = "dark";
				document.documentElement.classList.add("dark");
			} else {
				localStorage.setItem("theme", "light");
				state.darkMode = "light";
				document.documentElement.classList.remove("dark");
			}
		},
		collapse(state) {
			state.isCollapse = !state.isCollapse;
		},
		setUser(state, user) {
			state.user = user;
			localStorage.setItem("user", user);
		},
		setToken(state, token) {
			state.token = token;
			localStorage.setItem("token", token);
		},
	},
	actions: {},
	modules: {},
});

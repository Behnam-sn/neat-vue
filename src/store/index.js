import { createStore } from "vuex";

import Note from "./modules/note";
import Notes from "./modules/notes";
import User from "./modules/user";

import router from "../router";

export default createStore({
	state: {
		collapseStatus: false,
		theme: localStorage.theme,
		username: localStorage.username,
		token: localStorage.token,
	},
	getters: {
		getCollapseStatus: (state) => state.collapseStatus,
		getTheme: (state) => state.theme,
		getUsername: (state) => state.username,
		getToken: (state) => state.token,
	},
	mutations: {
		setCollapseStatus(state, payload) {
			state.collapseStatus = payload;
		},
		setTheme(state, payload) {
			state.theme = payload;
			localStorage.theme = payload;
		},
		setUsername(state, payload) {
			state.username = payload;
			localStorage.username = payload;
		},
		setToken(state, payload) {
			state.token = payload;
			localStorage.token = payload;
		},
	},
	actions: {
		goBack() {
			window.history.length > 1 ? router.go(-1) : router.push("/");
		},
		collapse({ state, commit }) {
			commit("setCollapseStatus", !state.collapseStatus);
		},
		initTheme({ state, commit }) {
			if (state.theme === "dark") {
				document.documentElement.classList.add("dark");
			} else {
				commit("setTheme", "light");
			}
		},
		changeTheme({ state, commit }) {
			if (state.theme === "light") {
				commit("setTheme", "dark");
				document.documentElement.classList.add("dark");
			} else {
				commit("setTheme", "light");
				document.documentElement.classList.remove("dark");
			}
		},
	},
	modules: {
		Note,
		Notes,
		User,
	},
});

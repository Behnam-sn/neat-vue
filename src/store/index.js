import { createStore } from "vuex";
import axios from "axios";

import router from "../router";

export default createStore({
	state: {
		isCollapse: false,
		darkMode: localStorage.getItem("theme"),
		user: localStorage.getItem("user"),
		token: localStorage.getItem("token"),
		publicNotes: undefined,
		userNotes: undefined,
	},
	getters: {
		getTheme: (state) => state.darkMode,
		getCollapseStatus: (state) => state.isCollapse,
		getUser: (state) => state.user,
		getToken: (state) => state.token,
		getPublicNotes: (state) => state.publicNotes,
		getUserNotes: (state) => state.userNotes,
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
		logout(state) {
			localStorage.removeItem("user");
			localStorage.removeItem("token");
			state.user = undefined;
			state.token = undefined;
		},
		setPublicNotes(state, payload) {
			state.publicNotes = payload;
		},
		setUserNotes(state, payload) {
			state.userNotes = payload;
		},
	},
	actions: {
		goBack() {
			window.history.length > 1 ? router.go(-1) : router.push("/");
		},
		login({ commit, dispatch }, payload) {
			const User = new FormData();
			User.append("username", payload.username);
			User.append("password", payload.password);

			axios
				.post("auth/login", User)
				.then((response) => {
					if (response.status == 200) {
						commit("setUser", payload.username);
						commit("setToken", response.data.access_token);
						dispatch("goBack");
						// router.push(`/u/${payload.username}`);
					}
				})
				.catch((error) => {
					console.log(error);
				});
		},
		signup({ dispatch }, payload) {
			const User = {
				username: payload.username,
				full_name: payload.fullname,
				password: payload.password,
			};

			axios
				.post("auth/signup", User)
				.then((response) => {
					if (response.status == 200) {
						dispatch("login", {
							username: payload.username,
							password: payload.password,
						});
					}
				})
				.catch((error) => {
					console.log(error);
				});
		},
		fetchPublicNotes({ commit }) {
			axios
				.get("notes/public-all")
				.then((response) => {
					commit("setPublicNotes", response.data);
				})
				.catch((error) => {
					console.log(error);
				});
		},
		fetchCurrentUserNotes({ state, commit }) {
			axios
				.get("notes/", {
					headers: {
						Authorization: "Bearer " + state.token,
					},
				})
				.then((response) => {
					commit("setUserNotes", response.data);
				})
				.catch((error) => {
					console.log(error);
				});
		},
		fetchPublicNotesByAuthor({ commit }, payload) {
			axios
				.get(`notes/public-author?author=${payload}`)
				.then((response) => {
					commit("setUserNotes", response.data);
				})
				.catch((error) => {
					console.log(error);
				});
		},
		createNote({ state }, payload) {
			const Note = {
				title: payload.title,
				content: payload.content,
				public: payload.public,
			};

			axios
				.post("notes/", Note, {
					headers: {
						Authorization: "Bearer " + state.token,
					},
				})
				.then((response) => {
					if (response.status == 200) {
						router.push(`/u/${state.user}`);
					}
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
	modules: {},
});

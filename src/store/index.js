import { createStore } from "vuex";
import axios from "axios";

import router from "../router";

export default createStore({
	state: {
		isCollapse: false,
		theme: localStorage.theme,
		username: localStorage.username,
		token: localStorage.token,
		publicNotes: undefined,
		userNotes: undefined,
		note: undefined,
		user: {
			username: undefined,
			full_name: undefined,
			created_at: undefined,
			modified_at: undefined,
		},
	},
	getters: {
		getTheme: (state) => state.theme,
		getCollapseStatus: (state) => state.isCollapse,
		getUsername: (state) => state.username,
		getToken: (state) => state.token,
		getPublicNotes: (state) => state.publicNotes,
		getUserNotes: (state) => state.userNotes,
		getNote: (state) => state.note,
		getUser: (state) => state.user,
	},
	mutations: {
		initTheme(state) {
			if (localStorage.theme == undefined) {
				localStorage.theme = "light";
				state.theme = "light";
			}
			if (localStorage.theme == "dark") {
				document.documentElement.classList.add("dark");
			}
		},
		changeTheme(state) {
			if (state.theme == "light") {
				localStorage.theme = "dark";
				state.theme = "dark";
				document.documentElement.classList.add("dark");
			} else {
				localStorage.theme = "light";
				state.theme = "light";
				document.documentElement.classList.remove("dark");
			}
		},
		collapse(state) {
			state.isCollapse = !state.isCollapse;
		},
		setUsername(state, payload) {
			state.username = payload;
			localStorage.username = payload;
		},
		setToken(state, payload) {
			state.token = payload;
			localStorage.token = payload;
		},
		logout(state) {
			localStorage.removeItem("username");
			localStorage.removeItem("token");
			state.username = undefined;
			state.token = undefined;

			router.push("/");
		},
		setPublicNotes(state, payload) {
			state.publicNotes = payload;
		},
		setUserNotes(state, payload) {
			state.userNotes = payload;
		},
		setNote(state, payload) {
			state.note = payload;
		},
		setUser(state, payload) {
			state.user = payload;
		},
	},
	actions: {
		goBack() {
			window.history.length > 1 ? router.go(-1) : router.push("/");
		},
		testToken({ state, commit }) {
			if (state.token) {
				axios
					.post("auth/test-token", null, {
						headers: {
							Authorization: "Bearer " + state.token,
						},
					})
					.then((response) => {
						response.status;
					})
					.catch(() => {
						commit("logout");
					});
			}
		},
		login({ commit, dispatch }, payload) {
			const User = new FormData();
			User.append("username", payload.username);
			User.append("password", payload.password);

			axios
				.post("auth/login", User)
				.then((response) => {
					if (response.status == 200) {
						commit("setUsername", payload.username);
						commit("setToken", response.data.access_token);
						dispatch("goBack");
						// router.push(`/user/${payload.username}`);
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
						router.push(`/user/${state.username}`);
					}
				})
				.catch((error) => {
					console.log(error);
				});
		},
		fetchNote({ state, commit }, payload) {
			if (state.username) {
				axios
					.get(`notes/id?id=${payload}`, {
						headers: {
							Authorization: "Bearer " + state.token,
						},
					})
					.then((response) => {
						if (response.status == 200) {
							commit("setNote", response.data);
						}
						if (response.status == 204) {
							commit("setNote", undefined);
						}
					})
					.catch((error) => {
						console.log(error);
					});
			} else {
				axios
					.get(`notes/public-id?id=${payload}`)
					.then((response) => {
						if (response.status == 200) {
							commit("setNote", response.data);
						}
						if (response.status == 204) {
							commit("setNote", undefined);
						}
					})
					.catch((error) => {
						console.log(error);
					});
			}
		},
		updateNote({ state }, payload) {
			const Note = {
				title: payload.title,
				content: payload.content,
				public: payload.public,
			};

			axios
				.put(`notes/?id=${payload.id}`, Note, {
					headers: {
						Authorization: "Bearer " + state.token,
					},
				})
				.then((response) => {
					if (response.status == 200) {
						router.push(`/user/${state.username}`);
					}
				})
				.catch((error) => {
					console.log(error);
				});
		},
		deleteNote({ state }, payload) {
			axios
				.delete(`notes/?id=${payload}`, {
					headers: {
						Authorization: "Bearer " + state.token,
					},
				})
				.then((response) => {
					if (response.status == 200) {
						router.push(`/user/${state.username}`);
					}
				})
				.catch((error) => {
					console.log(error);
				});
		},
		fetchUser({ commit }, payload) {
			axios
				.get(`users/?username=${payload}`)
				.then((response) => {
					if (response.status == 200) {
						commit("setUser", response.data);
					}
				})
				.catch((error) => {
					console.log(error);
				});
		},
		updateUserDetails({ state, commit }) {
			const User = {
				username: state.user.username,
				full_name: state.user.full_name,
			};

			axios
				.put("users/", User, {
					headers: {
						Authorization: "Bearer " + state.token,
					},
				})
				.then((response) => {
					if (response.status == 200) {
						commit("logout");
					}
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
	modules: {},
});

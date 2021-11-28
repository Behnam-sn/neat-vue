import { createStore } from "vuex";

import axios from "axios";
import router from "../router";

// import Note from "./modules/note";
// import Notes from "./modules/notes";
// import User from "./modules/user";

export default createStore({
	state: {
		collapseStatus: false,
		theme: localStorage.theme,
		username: localStorage.username,
		token: localStorage.token,
		publicNotes: null,
		userNotes: null,
		user: {
			username: null,
			full_name: null,
			created_at: null,
			modified_at: null,
		},
		note: {
			title: null,
			content: null,
			push: null,
			author: null,
			created_at: null,
			modified_at: null,
		},
	},
	getters: {
		getCollapseStatus: (state) => state.collapseStatus,
		getTheme: (state) => state.theme,
		getUsername: (state) => state.username,
		getToken: (state) => state.token,
		getPublicNotes: (state) => state.publicNotes,
		getUserNotes: (state) => state.userNotes,
		getUser: (state) => state.user,
		getNote: (state) => state.note,
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
		setPublicNotes(state, payload) {
			state.publicNotes = payload;
		},
		setUserNotes(state, payload) {
			state.userNotes = payload;
		},
		setUser(state, payload) {
			state.user = payload;
		},
		setNote(state, payload) {
			state.note = payload;
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
		testToken({ state, dispatch }) {
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
						dispatch("logout");
					});
			}
		},
		logout({ commit }) {
			localStorage.removeItem("username");
			localStorage.removeItem("token");
			commit("setUsername", undefined);
			commit("setToken", undefined);

			router.push("/");
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
		fetchPublicNotesByAuthor({ commit }, payload) {
			axios
				.get(`notes/public-author?author=${payload}`)
				.then((response) => {
					commit("setUserNotes", response.data);
				})
				.catch((error) => {
					commit("setUserNotes", "notFound");
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
					commit("setUserNotes", "notFound");
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
		updateUserDetails({ state, dispatch }) {
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
						dispatch("logout");
					}
				})
				.catch((error) => {
					console.log(error);
				});
		},
		changePassword({ state, dispatch }, payload) {
			const password_update = {
				password: payload.password,
				new_password: payload.newPassword,
			};

			axios
				.put("users/password", password_update, {
					headers: {
						Authorization: "Bearer " + state.token,
					},
				})
				.then((response) => {
					if (response.status == 200) {
						dispatch("logout");
					}
				})
				.catch((error) => {
					console.log(error);
				});
		},
		deleteAccount({ state, dispatch }, payload) {
			axios
				.delete(`users/?password=${payload}`, {
					headers: {
						Authorization: "Bearer " + state.token,
					},
				})
				.then((response) => {
					if (response.status == 200) {
						dispatch("logout");
					}
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
							commit("setNote", "notPublic");
						}
					})
					.catch((error) => {
						commit("setNote", "notFound");
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
							commit("setNote", "notPublic");
						}
					})
					.catch((error) => {
						commit("setNote", "notFound");
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
		deleteNote({ state }) {
			axios
				.delete(`notes/?id=${state.note.id}`, {
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
	},
	// modules: {
	// 	Note,
	// 	Notes,
	// 	User,
	// },
});

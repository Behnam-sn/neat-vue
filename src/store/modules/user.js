import axios from "axios";

import router from "../../router";

const User = {
	state: () => ({
		username: localStorage.username,
		token: localStorage.token,
		user: {
			username: null,
			full_name: null,
			created_at: null,
			modified_at: null,
		},
	}),
	getters: {
		getUsername: (state) => state.username,
		getToken: (state) => state.token,
		getUser: (state) => state.user,
	},
	mutations: {
		setUsername(state, payload) {
			state.username = payload;
			localStorage.username = payload;
		},
		setToken(state, payload) {
			state.token = payload;
			localStorage.token = payload;
		},
		setUser(state, payload) {
			state.user = payload;
		},
	},
	actions: {
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
	},
};

export default User;

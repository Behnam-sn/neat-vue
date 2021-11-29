import axios from "axios";

import router from "../../router";

const User = {
	state: () => ({
		user: {
			username: null,
			full_name: null,
			created_at: null,
			modified_at: null,
		},
		loginIsSafe: true,
		loginData: {
			username: null,
			full_name: null,
			password: null,
		},
		errors: {
			empty_username: false,
			empty_password: false,
			invalid_username: false,
			not_authorised: false,
			already_exists: false,
		},
	}),
	getters: {
		getUser: (state) => state.user,
		getLoginIsSafe: (state) => state.loginIsSafe,
		getLoginData: (state) => state.loginData,
		getErrors: (state) => state.errors,
	},
	mutations: {
		setUser(state, payload) {
			state.user = payload;
		},
		setLoginIsSafe(state, payload) {
			state.loginIsSafe = payload;
		},
		resetLoginData(state) {
			state.loginData = {
				username: null,
				full_name: null,
				password: null,
			};
		},
		resetErrors(state) {
			state.errors = {
				empty_username: false,
				empty_password: false,
				invalid_username: false,
				not_authorised: false,
				already_exists: false,
			};
		},
		setErrors(state, payload) {
			state.errors[payload] = true;
		},
	},
	actions: {
		checkLoginData({ state, commit }) {
			let allowedChars = /^[0-9a-zA-Z_.-]+$/;

			commit("resetErrors");
			commit("setLoginIsSafe", true);

			if (!state.loginData.username) {
				commit("setErrors", "empty_username");
			} else if (!allowedChars.test(state.loginData.username)) {
				commit("setErrors", "invalid_username");
			}
			if (!state.loginData.password) {
				commit("setErrors", "empty_password");
			}

			for (const key in state.errors) {
				if (state.errors[key] == true) {
					commit("setLoginIsSafe", false);
					break;
				}
			}
		},
		testToken({ rootState, dispatch }) {
			if (rootState.token) {
				axios
					.post("auth/test-token", null, {
						headers: {
							Authorization: "Bearer " + rootState.token,
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
		signup({ state, commit, dispatch }) {
			axios
				.post("auth/signup", state.loginData)
				.then((response) => {
					if (response.status == 200) {
						dispatch("login");
					}
				})
				.catch(() => {
					commit("setErrors", "already_exists");
				});
		},
		login({ state, commit, dispatch }) {
			const User = new FormData();
			User.append("username", state.loginData.username);
			User.append("password", state.loginData.password);

			axios
				.post("auth/login", User)
				.then((response) => {
					if (response.status == 200) {
						commit("setUsername", state.loginData.username);
						commit("setToken", response.data.access_token);
						commit("resetLoginData");
						dispatch("goBack");
					}
				})
				.catch(() => {
					commit("setErrors", "not_authorised");
				});
		},
		logout({ commit }) {
			commit("setUsername", undefined);
			commit("setToken", undefined);
			localStorage.removeItem("username");
			localStorage.removeItem("token");

			router.push("/");
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
		updateUser({ state, rootState, dispatch }) {
			const User = {
				username: state.user.username,
				full_name: state.user.full_name,
			};

			axios
				.put("users/", User, {
					headers: {
						Authorization: "Bearer " + rootState.token,
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
		changePassword({ rootState, dispatch }, payload) {
			const password_update = {
				password: payload.password,
				new_password: payload.newPassword,
			};

			axios
				.put("users/password", password_update, {
					headers: {
						Authorization: "Bearer " + rootState.token,
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
		deleteAccount({ rootState, dispatch }, payload) {
			axios
				.delete(`users/?password=${payload}`, {
					headers: {
						Authorization: "Bearer " + rootState.token,
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

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
		submitIsValid: true,
		loginData: {
			username: "",
			full_name: "",
			password: "",
		},
		changePasswordData: {
			password: "",
			new_password: "",
		},
		deleteAccountData: {
			password: "",
		},
		errors: {
			empty_username: false,
			empty_password: false,
			empty_new_password: false,
			invalid_username: false,
			not_authorised: false,
			already_exists: false,
			same_password: false,
		},
	}),
	getters: {
		getUser: (state) => state.user,
		getSubmitIsValid: (state) => state.submitIsValid,
		getLoginData: (state) => state.loginData,
		getChangePasswordData: (state) => state.changePasswordData,
		getDeleteAccountData: (state) => state.deleteAccountData,
		getErrors: (state) => state.errors,
	},
	mutations: {
		setUser(state, payload) {
			state.user = payload;
		},
		setSubmitIsValid(state, payload) {
			state.submitIsValid = payload;
		},
		resetLoginData(state) {
			state.loginData = {
				username: "",
				full_name: "",
				password: "",
			};
		},
		resetChangePasswordData(state) {
			state.changePasswordData = {
				password: "",
				new_password: "",
			};
		},
		resetDeleteAccountData(state) {
			state.deleteAccountData = {
				password: "",
			};
		},
		resetErrors(state) {
			state.errors = {
				empty_username: false,
				empty_password: false,
				empty_new_password: false,
				invalid_username: false,
				not_authorised: false,
				already_exists: false,
				same_password: false,
			};
		},
		setErrors(state, payload) {
			state.errors[payload] = true;
		},
	},
	actions: {
		validateLoginData({ state, commit }) {
			let allowedChars = /^[0-9a-zA-Z_.-]+$/;

			commit("resetErrors");
			commit("setSubmitIsValid", true);

			if (!state.loginData.username) {
				commit("setErrors", "empty_username");
				commit("setSubmitIsValid", false);
			} else if (!allowedChars.test(state.loginData.username)) {
				commit("setErrors", "invalid_username");
				commit("setSubmitIsValid", false);
			}
			if (!state.loginData.password) {
				commit("setErrors", "empty_password");
				commit("setSubmitIsValid", false);
			}
		},
		validateChangePasswordData({ state, commit }) {
			commit("resetErrors");
			commit("setSubmitIsValid", true);

			if (!state.changePasswordData.password) {
				commit("setErrors", "empty_password");
				commit("setSubmitIsValid", false);
			}
			if (!state.changePasswordData.new_password) {
				commit("setErrors", "empty_new_password");
				commit("setSubmitIsValid", false);
			} else if (
				state.changePasswordData.password ==
				state.changePasswordData.new_password
			) {
				commit("setErrors", "same_password");
				commit("setSubmitIsValid", false);
			}
		},
		validateDeleteAccountData({ state, commit }) {
			commit("resetErrors");
			commit("setSubmitIsValid", true);

			if (!state.deleteAccountData.password) {
				commit("setErrors", "empty_password");
				commit("setSubmitIsValid", false);
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
						dispatch("goBack");
						commit("resetLoginData");
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
		changePassword({ rootState, state, commit, dispatch }) {
			axios
				.put("users/password", state.changePasswordData, {
					headers: {
						Authorization: "Bearer " + rootState.token,
					},
				})
				.then((response) => {
					if (response.status == 200) {
						dispatch("logout");
						commit("resetLoginData");
					}
				})
				.catch((error) => {
					commit("setErrors", "not_authorised");
					console.log(error);
				});
		},
		deleteAccount({ rootState, state, commit, dispatch }) {
			axios
				.delete(`users/?password=${state.deleteAccountData.password}`, {
					headers: {
						Authorization: "Bearer " + rootState.token,
					},
				})
				.then((response) => {
					if (response.status == 200) {
						dispatch("logout");
						commit("resetLoginData");
					}
				})
				.catch((error) => {
					commit("setErrors", "not_authorised");
					console.log(error);
				});
		},
	},
};

export default User;

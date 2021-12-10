import axios from "axios";

const Notes = {
	state: () => ({
		notes: null,
		searchNotes: null,
		loading: false,
	}),
	getters: {
		getNotes: (state) => state.notes,
		getSearchNotes: (state) => state.searchNotes,
		getLoading: (state) => state.loading,
	},
	mutations: {
		setNotes(state, payload) {
			state.notes = payload;
		},
		setSearchNotes(state, payload) {
			state.searchNotes = payload;
		},
		setLoading(state, payload) {
			state.loading = payload;
		},
	},
	actions: {
		fetchPublicNotes({ commit, dispatch }) {
			commit("setloading", true);
			dispatch("clearSearchNotes");
			axios
				.get("notes/public-all")
				.then((response) => {
					commit("setNotes", response.data);
					commit("setLoading", false);
				})
				.catch((error) => {
					console.log(error);
				});
		},
		fetchPublicNotesByAuthor({ commit, dispatch }, payload) {
			commit("setloading", true);
			dispatch("clearSearchNotes");
			axios
				.get(`notes/public-author?author=${payload}`)
				.then((response) => {
					commit("setNotes", response.data);
					commit("setLoading", false);
				})
				.catch((error) => {
					commit("setNotes", "notFound");
					commit("setLoading", false);
					console.log(error);
				});
		},
		fetchCurrentUserNotes({ rootState, commit, dispatch }) {
			commit("setloading", true);
			dispatch("clearSearchNotes");
			axios
				.get("notes/", {
					headers: {
						Authorization: "Bearer " + rootState.token,
					},
				})
				.then((response) => {
					commit("setNotes", response.data);
					commit("setLoading", false);
				})
				.catch((error) => {
					commit("setNotes", "notFound");
					commit("setLoading", false);
					console.log(error);
				});
		},
		searchAllPublicNotes({ commit }, payload) {
			axios
				.get(`notes/public-search-all/?text=${payload}`)
				.then((response) => {
					commit("setSearchNotes", response.data);
					commit("setLoading", false);
				})
				.catch((error) => {
					console.log(error);
				});
		},
		searchPublicNotesByAuthor({ commit }, payload) {
			axios
				.get(
					`notes/public-search-author?text=${payload.text}&author=${payload.author}`
				)
				.then((response) => {
					commit("setSearchNotes", response.data);
					commit("setLoading", false);
				})
				.catch((error) => {
					console.log(error);
				});
		},
		searchCurrentUserNotes({ rootState, commit }, payload) {
			axios
				.get(`notes/search?text=${payload}`, {
					headers: {
						Authorization: "Bearer " + rootState.token,
					},
				})
				.then((response) => {
					commit("setSearchNotes", response.data);
					commit("setLoading", false);
				})
				.catch((error) => {
					console.log(error);
				});
		},
		clearSearchNotes({ commit }) {
			commit("setSearchNotes", null);
		},
	},
};

export default Notes;

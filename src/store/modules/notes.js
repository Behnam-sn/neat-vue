import axios from "axios";

const Notes = {
	state: () => ({
		notes: null,
		searchNotes: null,
		searching: false,
	}),
	getters: {
		getNotes: (state) => state.notes,
		getSearchNotes: (state) => state.searchNotes,
		getSearching: (state) => state.searching,
	},
	mutations: {
		setNotes(state, payload) {
			state.notes = payload;
		},
		setSearchNotes(state, payload) {
			state.searchNotes = payload;
		},
		setSearching(state, payload) {
			state.searching = payload;
		},
	},
	actions: {
		fetchPublicNotes({ commit, dispatch }) {
			dispatch("clearSearchNotes");
			axios
				.get("notes/public-all")
				.then((response) => {
					commit("setNotes", response.data);
				})
				.catch((error) => {
					console.log(error);
				});
		},
		fetchPublicNotesByAuthor({ commit, dispatch }, payload) {
			dispatch("clearSearchNotes");
			axios
				.get(`notes/public-author?author=${payload}`)
				.then((response) => {
					commit("setNotes", response.data);
				})
				.catch((error) => {
					commit("setNotes", "notFound");
					console.log(error);
				});
		},
		fetchCurrentUserNotes({ rootState, commit, dispatch }) {
			dispatch("clearSearchNotes");
			axios
				.get("notes/", {
					headers: {
						Authorization: "Bearer " + rootState.token,
					},
				})
				.then((response) => {
					commit("setNotes", response.data);
				})
				.catch((error) => {
					commit("setNotes", "notFound");
					console.log(error);
				});
		},
		searchAllPublicNotes({ commit }, payload) {
			axios
				.get(`notes/public-search-all/?text=${payload}`)
				.then((response) => {
					commit("setSearchNotes", response.data);
					commit("setSearching", false);
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
					commit("setSearching", false);
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
					commit("setSearching", false);
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

import axios from "axios";

const Notes = {
	state: () => ({
		notes: null,
		searchNotes: null,
	}),
	getters: {
		getNotes: (state) => state.notes,
	},
	mutations: {
		setNotes(state, payload) {
			state.notes = payload;
		},
	},
	actions: {
		fetchPublicNotes({ commit }) {
			axios
				.get("notes/public-all")
				.then((response) => {
					commit("setNotes", response.data);
				})
				.catch((error) => {
					console.log(error);
				});
		},
		fetchPublicNotesByAuthor({ commit }, payload) {
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
		fetchCurrentUserNotes({ rootState, commit }) {
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
	},
};

export default Notes;

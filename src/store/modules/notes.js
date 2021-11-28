import axios from "axios";

const Notes = {
	state: () => ({
		publicNotes: null,
		userNotes: null,
	}),
	getters: {
		getPublicNotes: (state) => state.publicNotes,
		getUserNotes: (state) => state.userNotes,
	},
	mutations: {
		setPublicNotes(state, payload) {
			state.publicNotes = payload;
		},
		setUserNotes(state, payload) {
			state.userNotes = payload;
		},
	},
	actions: {
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
		fetchCurrentUserNotes({ rootState, commit }) {
			axios
				.get("notes/", {
					headers: {
						Authorization: "Bearer " + rootState.token,
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
	},
};

export default Notes;

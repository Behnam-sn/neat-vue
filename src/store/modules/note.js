import axios from "axios";

import router from "../../router";

const Note = {
	state: () => ({
		note: {
			title: "",
			content: "",
			public: false,
			id: null,
			author: null,
			created_at: null,
			modified_at: null,
		},
	}),
	getters: {
		getNote: (state) => state.note,
	},
	mutations: {
		setNote(state, payload) {
			state.note = payload;
		},
	},
	actions: {
		createNote({ rootState, state }) {
			const Note = {
				title: state.note.title,
				content: state.note.content,
				public: state.note.public,
			};

			axios
				.post("notes/", Note, {
					headers: {
						Authorization: "Bearer " + rootState.token,
					},
				})
				.then((response) => {
					if (response.status == 200) {
						router.push(`/user/${rootState.username}`);
					}
				})
				.catch((error) => {
					console.log(error);
				});
		},
		fetchNote({ rootState, commit }, payload) {
			if (rootState.username) {
				axios
					.get(`notes/id?id=${payload}`, {
						headers: {
							Authorization: "Bearer " + rootState.token,
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
		updateNote({ rootState, state }) {
			const Note = {
				title: state.note.title,
				content: state.note.content,
				public: state.note.public,
			};

			axios
				.put(`notes/?id=${state.note.id}`, Note, {
					headers: {
						Authorization: "Bearer " + rootState.token,
					},
				})
				.then((response) => {
					if (response.status == 200) {
						router.push(`/user/${rootState.username}`);
					}
				})
				.catch((error) => {
					console.log(error);
				});
		},
		deleteNote({ rootState, state }) {
			axios
				.delete(`notes/?id=${state.note.id}`, {
					headers: {
						Authorization: "Bearer " + rootState.token,
					},
				})
				.then((response) => {
					if (response.status == 200) {
						router.push(`/user/${rootState.username}`);
					}
				})
				.catch((error) => {
					console.log(error);
				});
		},
		clearNote({ commit }) {
			commit("setNote", {
				title: "",
				content: "",
				public: false,
				id: null,
				author: null,
				created_at: null,
				modified_at: null,
			});
		},
	},
};

export default Note;

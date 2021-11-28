import axios from "axios";

import router from "../../router";

const Note = {
	state: () => ({
		note: {
			title: null,
			content: null,
			push: null,
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
		createNote({ rootState }, payload) {
			const Note = {
				title: payload.title,
				content: payload.content,
				public: payload.public,
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
		updateNote({ rootState }, payload) {
			const Note = {
				title: payload.title,
				content: payload.content,
				public: payload.public,
			};

			axios
				.put(`notes/?id=${payload.id}`, Note, {
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
		deleteNote({ state, rootState }) {
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
	},
};

export default Note;

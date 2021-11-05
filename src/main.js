import Vue from "vue";
import axios from "axios";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

Vue.config.productionTip = false;

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/"; // the FastAPI backend

axios.interceptors.response.use(undefined, function(error) {
	if (error) {
		const originalRequest = error.config;
		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
		}
	}
});

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");

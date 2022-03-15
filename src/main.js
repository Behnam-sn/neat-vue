import { createApp } from "vue";
import axios from "axios";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/index.css";

// axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/"; // loacl backend
axios.defaults.baseURL = "https://evening-plateau-38171.herokuapp.com/api/v1/"; // heroku backend

axios.interceptors.response.use(undefined, function (error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
    }
  }
});

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");

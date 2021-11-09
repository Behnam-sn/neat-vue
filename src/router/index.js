import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/addnote",
		name: "addnote",
		component: () => import("../views/AddNote.vue"),
	},
	{
		path: "/public",
		name: "public",
		component: () => import("../views/Public.vue"),
	},
	{
		path: "/login",
		name: "login",
		component: () => import("../views/Login.vue"),
	},
	{
		path: "/u/:username",
		name: "User",
		component: () => import("../views/User.vue"),
	},
	{
		path: "/about",
		name: "About",
		component: () => import("../views/About.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;

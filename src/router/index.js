import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

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
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;

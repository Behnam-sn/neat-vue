/* eslint-disable no-undef */
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["eslint:recommended", "plugin:vue/vue3-essential"],
	parserOptions: {
		ecmaVersion: 13,
		sourceType: "module",
	},
	plugins: ["vue"],
	rules: {},
};
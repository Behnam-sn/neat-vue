module.exports = {
	purge: {
		content: ["./public/**/*.html", "./src/**/*.vue"],
	},
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				black: "#000000",
				customWhite: "#eeeeee",
			},
		},
	},
	variants: {},
	plugins: [],
};

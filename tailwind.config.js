const colors = require("tailwindcss/colors");

module.exports = {
	purge: {
		content: ["./public/**/*.html", "./src/**/*.vue"],
	},
	darkMode: "class",
	theme: {
		colors: {
			blueGray: colors.blueGray,
			trueGray: colors.trueGray,
			black: "#000000",
			customWhite: "#eeeeee",
		},
	},
	variants: {},
	plugins: [],
};

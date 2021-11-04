module.exports = {
	purge: {
		content: ["./public/**/*.html", "./src/**/*.vue"],
	},
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				"Rubik-bold": ["Rubik-bold", "sans-serif"],
				"Rubik-Light": ["Rubik-Light", "sans-serif"],
				"Rubik-Medium": ["Rubik-Medium", "sans-serif"],
				"Rubik-Regular": ["Rubik-Regular", "sans-serif"],
				"Poppins-Light": ["Poppins-Light", "sans-serif"],
				"Poppins-Medium": ["Poppins-Medium", "sans-serif"],
				"Poppins-Bold": ["Poppins-Bold", "sans-serif"],
			},
			colors: {
				black: "#000000",
				customWhite: "#ffffff",
				// customWhite: "#eeeeee",
			},
		},
	},
	variants: {},
	plugins: [],
};

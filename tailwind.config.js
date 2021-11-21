module.exports = {
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#000000",
				secondary: "#ffffff",
				// secondary: "#eeeeee",
			},
			fontFamily: {
				"Rubik-bold": ["Rubik-bold", "sans-serif"],
				"Rubik-Light": ["Rubik-Light", "sans-serif"],
				"Rubik-Medium": ["Rubik-Medium", "sans-serif"],
				"Rubik-Regular": ["Rubik-Regular", "sans-serif"],
				"Poppins-Light": ["Poppins-Light", "sans-serif"],
				"Poppins-Medium": ["Poppins-Medium", "sans-serif"],
				"Poppins-Bold": ["Poppins-Bold", "sans-serif"],
				"Roboto-Medium": ["Roboto-Medium", "sans-serif"],
				"Roboto-Regular": ["Roboto-Regular", "sans-serif"],
			},
			height: {
				"vh-85": "85vh",
				"vh-15": "15vh",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

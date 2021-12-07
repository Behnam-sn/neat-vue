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
				Poppins: ["'Poppins'", "sans-serif"],
				Roboto: ["'Roboto'", "sans-serif"],
				Rubik: ["'Rubik'", "sans-serif"],
			},
			height: {
				"vh-85": "85vh",
				"vh-15": "15vh",
			},
		},
	},
	variants: {
		extend: {
			scale: ["group-hover"],
		},
	},
	plugins: [],
};

module.exports = {
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#000000",
				secondary: "#ffffff",
			},
			fontFamily: {
				Poppins: ["'Poppins'", "sans-serif"],
				Roboto: ["'Roboto'", "sans-serif"],
				Rubik: ["'Rubik'", "sans-serif"],
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

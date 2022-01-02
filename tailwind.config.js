module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
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
	plugins: [],
};

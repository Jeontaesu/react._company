/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				raleway: ["Raleway", "sans-serif"],
				orbitron: ["Orbitron", "sans-serif"]
			},
			screens: {
				max_2xl: { max: "1535px" },
				max_xl: { max: "1279px" },
				max_lg: { max: "1023px" },
				max_md: { max: "767px" },
				max_sm: { max: "639px" }
			}
		}
	},
	plugins: []
};

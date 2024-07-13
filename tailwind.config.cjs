/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	// theme: {
	// 	colors: {
	// 		"primary": "#004872",
	// 		"secondary":"#96B9D9",
	// 		"accent1": "#F2B6A0",
	// 		"neutral": "#7F707B",
	// 		"base-100": "#CEE4F2",
	// 		"accent2": "#FFF5D1",
	// 		"accent3": "#1E5356",
	// 	},
	// 	extend: {},
	// },
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: [
			{
			  mytheme: {
			"primary": "#004872",
			"secondary": "#96B9D9",
			"accent": "#F2B6A0",
			"accent-content": "#1E5356",
			"neutral": "#7F707B",
			"neutral-content": "#FFFFFF",
			"base-100": "#CEE4F2",
			"info": "#FFF5D1",
			  },
			},
			 "dark", // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
			],
		// styled: false,
		darkTheme: "dark", // name of one of the included themes for dark mode
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	  }
}

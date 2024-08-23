/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/flowbite/**/*.js"
	],
	theme: {
		fontFamily: { sans: '"Inter variable", sans-serif', },
		extend: {
			colors: {
				'blue': {
					50: '#E7F1F3', // Titles
					100: '#E6EDF3', // Navbar links
					300: '#B0C7CB', // Base text
					600: '#33A0B3', // Secondary text
					950: '#142733', // Blue background
				},
				'gray': {
					500: '#868F91', // Secondary text
					600: '#868F91', // Subtitles
				},
				'slate': {
					900: '#121718', // Slate background
				},
			},
			animation: {
				blob: "blob 6s infinite",
			},
			keyframes: {
				blob: {
					"0%": {
						transform: "translate(0px, 0px)",
					},
					"33%": {
						transform: "translate(30px, -50px)",
					},
					"66%": {
						transform: "translate(-20px, 20px)",
					},
					"100%": {
						transform: "tranlate(0px, 0px)",
					},
				},
			},
		}
	},
	plugins: [
		require('flowbite/plugin')
	],
}

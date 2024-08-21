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
					500: '#868F91', // Secondary text
					950: '#142733', // Blue background
				},
				'gray': {
					600: '#868F91', // Subtitles
				},
				'slate': {
					900: '#121718', // Slate background
				},
			},
		}
	},
	plugins: [
		require('flowbite/plugin')
	],
}

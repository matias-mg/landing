const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: { sans: '"Inter variable", sans-serif', },
		colors: {
			...colors,
			'blue': {
				...colors.blue,
				50: '#E7F1F3', // Titles
				100: '#E6EDF3', // Navbar links
				300: '#B0C7CB', // Base text
				500: '#868F91', // Secondary text
				950: '#142733', // Blue background
			},
			'gray': {
				...colors.gray,
				600: '#868F91', // Subtitles
			},
			'slate': {
				...colors.slate,
				900: '#121718', // Slate background
			},
		},
	},
	plugins: [],
}

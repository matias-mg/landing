/** @type {import('tailwindcss').Config} */
export default {
	content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  },
	theme: {
		fontFamily: { sans: '"Inter variable", sans-serif', },
		extend: {
			colors: {
				'blue': {
					50: '#E7F1F3', // Titles
					100: '#E6EDF3', // Navbar links
					300: '#B0C7CB', // Base text
					600: '#33A0B3', // Primary color
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
				'background-scroll': 'background-scroll 3s linear infinite',
			},
			keyframes: {
				blob: {
					"0%": {
						transform: "translate(0px, 0px)",
					},
					"33%": {
						transform: "translate(90px, -50px)",
					},
					"66%": {
						transform: "translate(-20px, 20px)",
					},
					"100%": {
						transform: "tranlate(0px, 0px)",
					},
				},
				'background-scroll': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
			},
		}
	},
	plugins: [require('taos/plugin')],
	safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
}

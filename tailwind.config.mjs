/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					charcoal: '#000000',
					slate: '#3A3D45',
					gold: '#C9A56A',
					deepGold: '#A9864D',
					light: '#D9D9D9',
					white: '#FFFFFF',
				},
			},
			fontFamily: {
				sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
			},
			maxWidth: {
				container: '1280px',
			},
			spacing: {
				section: '120px',
			},
		},
	},
	plugins: [],
};

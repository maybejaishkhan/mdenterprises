/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					bg: '#0B0D12',
					elevated: '#12151C',
					surface: '#171A22',
					gold: '#D4A85F',
					'gold-light': '#F3D19C',
					text: '#F5F7FA',
					muted: '#B7BDC9',
					border: '#2B313D',
				},
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				heading: ['Satoshi', 'Inter', 'system-ui', 'sans-serif'],
				accent: ['"Saol Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
			},
			maxWidth: {
				container: '1440px',
			},
			spacing: {
				section: '7.5rem',
				'section-lg': '9rem',
			},
			letterSpacing: {
				cinematic: '-0.03em',
			},
			transitionDuration: {
				luxury: '500ms',
				cinematic: '900ms',
			},
		},
	},
	plugins: [],
};

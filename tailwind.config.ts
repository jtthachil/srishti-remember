import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				serif: ['Playfair Display', 'Georgia', 'serif'],
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
		}
	},
	plugins: [],
} satisfies Config;

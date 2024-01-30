import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				typing: {
					'0%': {
						width: '0%',
						visibility: 'hidden'
					},
					'100%': {
						width: '100%'
					}
				},
				blink: {
					'50%': {
						borderColor: 'transparent'
					},
					'100%': {
						borderColor: 'black'
					}
				}
			},
			animation: {
				typing: 'typing 7s steps(100) alternate, blink 0.01s'
			}
		},
		screens: {
			xs: '475px',
			...defaultTheme.screens
		}
	},
	plugins: [require('@tailwindcss/typography')]
};

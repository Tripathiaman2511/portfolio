/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				
				'Pop':['Poppins', 'sans-serif'],
				
				
				'Right':['Righteous', 'cursive'],
				'Inter':['Inter', 'sans-serif']
			}
		},
	},
	plugins: [],
}

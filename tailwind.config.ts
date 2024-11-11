/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: ["class"],
    content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		colors: {
				garage: {
					red: '#D92332',
					'red-hover': '#AA202B'
				},
			}
    	}
    },
	plugins: [],
};

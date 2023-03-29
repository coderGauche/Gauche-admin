/*
 * @Author: Gauche楽
 * @Date: 2023-03-26 01:39:31
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-28 13:56:38
 * @FilePath: /vite-project/tailwind.config.js
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: [],
	corePlugins: {
		preflight: false
	}
};

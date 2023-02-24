module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#00C39C',
				secondary: '#11D99B',
				muted: '#759CBB',
				success: '#3CB371',
				danger: '#DC143C',
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};

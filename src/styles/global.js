import { injectGlobal } from 'styled-components'
import { colors } from './colors'

export const applyGlobalStyles = () => {
	injectGlobal`
		@font-face {
				font-family: 'Avenir';
				src: url('./dist/fonts/Avenir-Roman.woff2') format('woff2'),
						url('./dist/fonts/Avenir-Roman.woff') format('woff'),
						url('./dist/fonts/Avenir-Roman.ttf') format('truetype'),
						url('./dist/fonts/Avenir-Roman.svg#Avenir-Roman') format('svg');
				font-weight: normal;
				font-style: normal;
		}

		@font-face {
				font-family: 'Avenir';
				src: url('./dist/fonts/Avenir-LightOblique.woff2') format('woff2'),
						url('./dist/fonts/Avenir-LightOblique.woff') format('woff'),
						url('./dist/fonts/Avenir-LightOblique.ttf') format('truetype'),
						url('./dist/fonts/Avenir-LightOblique.svg#Avenir-LightOblique') format('svg');
				font-weight: 300;
				font-style: italic;
		}

		@font-face {
				font-family: 'Avenir Black Oblique';
				src: url('./dist/fonts/Avenir-BlackOblique.woff2') format('woff2'),
						url('./dist/fonts/Avenir-BlackOblique.woff') format('woff'),
						url('./dist/fonts/Avenir-BlackOblique.ttf') format('truetype'),
						url('./dist/fonts/Avenir-BlackOblique.svg#Avenir-BlackOblique') format('svg');
				font-weight: 900;
				font-style: italic;
		}

		@font-face {
				font-family: 'Avenir';
				src: url('./dist/fonts/Avenir-Black.woff2') format('woff2'),
						url('./dist/fonts/Avenir-Black.woff') format('woff'),
						url('./dist/fonts/Avenir-Black.ttf') format('truetype'),
						url('./dist/fonts/Avenir-Black.svg#Avenir-Black') format('svg');
				font-weight: 900;
				font-style: normal;
		}

		@font-face {
			font-family: 'Avenir';
			src: url('./dist/fonts/Avenir-Medium.woff2') format('woff2'),
					url('./dist/fonts/Avenir-Medium.woff') format('woff'),
					url('./dist/fonts/Avenir-Medium.ttf') format('truetype'),
					url('./dist/fonts/Avenir-Medium.svg#Avenir-Medium') format('svg');
			font-weight: 500;
			font-style: normal;
		}

		@font-face {
			font-family: 'Avenir Book';
			src: url('./dist/fonts/Avenir-BookOblique.woff2') format('woff2'),
					url('./dist/fonts/Avenir-BookOblique.woff') format('woff'),
					url('./dist/fonts/Avenir-BookOblique.ttf') format('truetype'),
					url('./dist/fonts/Avenir-BookOblique.svg#Avenir-BookOblique') format('svg');
			font-weight: normal;
			font-style: italic;
		}

		@font-face {
			font-family: 'Avenir';
			src: url('./dist/fonts/Avenir-Oblique.woff2') format('woff2'),
					url('./dist/fonts/Avenir-Oblique.woff') format('woff'),
					url('./dist/fonts/Avenir-Oblique.ttf') format('truetype'),
					url('./dist/fonts/Avenir-Oblique.svg#Avenir-Oblique') format('svg');
			font-weight: normal;
			font-style: italic;
		}

		@font-face {
			font-family: 'Avenir';
			src: url('./dist/fonts/Avenir-HeavyOblique.woff2') format('woff2'),
					url('./dist/fonts/Avenir-HeavyOblique.woff') format('woff'),
					url('./dist/fonts/Avenir-HeavyOblique.ttf') format('truetype'),
					url('./dist/fonts/Avenir-HeavyOblique.svg#Avenir-HeavyOblique') format('svg');
			font-weight: 900;
			font-style: italic;
		}

		@font-face {
			font-family: 'Avenir Book';
			src: url('./dist/fonts/Avenir-Book.woff2') format('woff2'),
					url('./dist/fonts/Avenir-Book.woff') format('woff'),
					url('./dist/fonts/Avenir-Book.ttf') format('truetype'),
					url('./dist/fonts/Avenir-Book.svg#Avenir-Book') format('svg');
			font-weight: normal;
			font-style: normal;
		}

		@font-face {
			font-family: 'Avenir';
			src: url('./dist/fonts/Avenir-Light.woff2') format('woff2'),
					url('./dist/fonts/Avenir-Light.woff') format('woff'),
					url('./dist/fonts/Avenir-Light.ttf') format('truetype'),
					url('./dist/fonts/Avenir-Light.svg#Avenir-Light') format('svg');
			font-weight: 300;
			font-style: normal;
		}

		@font-face {
			font-family: 'Avenir';
			src: url('./dist/fonts/Avenir-MediumOblique.woff2') format('woff2'),
					url('./dist/fonts/Avenir-MediumOblique.woff') format('woff'),
					url('./dist/fonts/Avenir-MediumOblique.ttf') format('truetype'),
					url('./dist/fonts/Avenir-MediumOblique.svg#Avenir-MediumOblique') format('svg');
			font-weight: 500;
			font-style: italic;
		}

		@font-face {
			font-family: 'Avenir';
			src: url('./dist/fonts/Avenir-Heavy.woff2') format('woff2'),
					url('./dist/fonts/Avenir-Heavy.woff') format('woff'),
					url('./dist/fonts/Avenir-Heavy.ttf') format('truetype'),
					url('./dist/fonts/Avenir-Heavy.svg#Avenir-Heavy') format('svg');
			font-weight: 900;
			font-style: normal;
		}

		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			outline: none;
			border: none;
		}

		html {
			font-size: 62.5%;
			letter-spacing: 1px;
			font-weight: 200;
			background: ${colors.dark};
			color: ${colors.light};
		}

		body {
			font-family: 'Gotham HTF', sans-serif;
			font-size: 1.6rem;
			height: 100vh;
			width: 100vw;
		}

		h1,
		h2,
		h3 {
			font-weight: 300;
		}

		h1 {
			font-size: 3.2rem;
		}

		h2 {
			font-size: 2.8rem;
		}

		h3 {
			font-size: 2.4rem;
			font-weight: 700;
		}

		button {
			border: none;
			outline: none;
			border-radius: 50px;
			padding: 8px 24px;
			text-transform: uppercase;
			width: auto;
			display: inline-flex;
		}
	`
}

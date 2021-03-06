import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:root {
		--primary: #9c27b0;

		--background: #eeeeee;
		--text-color: #3c4858;

		--white: #ffffff;
		--yellow: #ff9800;
		--red: #f44336;
		--blue: #00bcd4;
		--green: #4caf50;
	}

	@media (max-width: 1080px) {
		html {
			font-size: 93.75%;
		}
	}

	@media (max-width: 720px) {
		html {
			font-size: 87.5%;
		}
	}

	@media (max-width: 1080px) {
		html {
			font-size: 93.75%;
		}
	}

	body {
		background-color: white;
		color: black;
	}

	body,
	input,
	textarea,
	select,
	button {
		font: 400 1rem 'Lato', sans-serif;
	}

	button {
		cursor: pointer;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
`;

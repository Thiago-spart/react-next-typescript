import type { AppProps } from "next/app";

import { GlobalStyles } from "../../../../styles/globals";

export const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Component {...pageProps} />
			<GlobalStyles />
		</>
	);
};

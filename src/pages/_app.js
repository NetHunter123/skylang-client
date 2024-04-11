import "@/styles/globals.css";
// import {MantineProvider} from "@mantine/core";
import NextNProgress from 'nextjs-progressbar';

export default function App({Component, pageProps}) {
	const getLayout = Component.getLayout || ((page) => page);
	return getLayout(
		// <MantineProvider
		// 	withGlobalStyles
		// 	withNormalizeCSS
		// 	defaultColorScheme="dark"
		// >
		<>
			<Component {...pageProps} />
			<NextNProgress/>
		</>
		// </MantineProvider>
	);
}

// export default function App({ Component, pageProps }) {
// 	return <MantineProvider
// 		withGlobalStyles
// 		withNormalizeCSS
// 		defaultColorScheme="dark"
// 	>
// 		<Component {...pageProps} />
// 		<NextNProgress />
// 	</MantineProvider>;
// }

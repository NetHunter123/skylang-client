import Header from "@/components/modules/Header/Header";
import Footer from "@/components/modules/Footer.jsx/Footer";
import styles from './main-layout.module.css'
import {MantineProvider} from "@mantine/core";

const MainLayout = ({children}) => (
	<MantineProvider
		withGlobalStyles
		withNormalizeCSS
		// defaultColorScheme="dark"
	>
		<Header/>
		<div className="" style={{
			height: "80px"
		}}/>
		<div className={styles.layout_container}>
			{children}
		</div>
		<Footer/>
	</MantineProvider>
)

export default MainLayout

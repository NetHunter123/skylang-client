import React from 'react';
import Logo from "@/components/modules/Logo/Logo";
import styles from "./header.module.css"
import Nav from "@/components/modules/Nav/Nav";
import {Button} from "@mantine/core";
import MobileMenu from "@/components/elements/MobileMenu/MobileMenu";
import {BsTelephoneFill} from "react-icons/bs";

const Header = () => {
	return (
		<header className={styles.header__root}>
			<div className={styles.header__logo}>
				<Logo/>
			</div>
			<nav className={styles.header__nav}>
				<Nav/>
			</nav>
			<div className={styles.header__contact_us}>
				{/*<Button variant="filled">Зв'язатись з нами</Button>*/}
				{/*<MobileMenu/>*/}
				<div className={styles.tel}>
					<BsTelephoneFill />
					<a href="tel:+380914817441">380914817441</a>
				</div>
			</div>
		
		</header>
	);
};

export default Header;

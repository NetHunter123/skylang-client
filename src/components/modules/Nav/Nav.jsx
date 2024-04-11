import React from 'react';
import styles from "./nav.module.css"
import Link from "next/link";
import {useRouter} from "next/router";

const Nav = () => {
	const router = useRouter()
	
	const isActive = (href) => router.pathname === href
	
	const menu = [
		{title: "Головна", href: "/"},
		{title: "Про нас", href: "/about-us"},
		{title: "Навчальний процес", href: "/learning-process"},
		{title: "Курси", href: "/courses"},
		{title: "Онлайн тест", href: "https://www.cambridgeenglish.org/test-your-english/general-english/"},
	]
	
	return (
		<nav className={styles.nav__root}>
			<ul className={styles.nav__list}>
				{menu.map(item => (<React.Fragment key={item.title}>
					<li className={styles.nav__item}>
						<Link href={item.href} className={`${styles.nav__link} ${isActive(item.href) ? `${styles.active}` : ""}`}>
							{item.title}
						</Link>
					</li>
				</React.Fragment>))}
			</ul>
		</nav>
	);
};

export default Nav;

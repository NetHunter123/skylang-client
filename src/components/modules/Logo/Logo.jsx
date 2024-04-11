import React from 'react';
import Link from "next/link";
import {SiFacebookgaming, SiStudyverse} from "react-icons/si";
import styles from "./logo.module.css"

const Logo = () => {
	return (
		<Link href="/">
			<div className={styles.logo__root}>
				<div className={styles.logo__icon}>
					<SiFacebookgaming />
				</div>
				<div className={styles.logo__text}>
					<span className={styles.logo__name}>
						<span className={styles.logo__name_accent}>Sky</span>
						Lang</span>
					<p className={styles.logo__motto}>Erase the barriers</p>
				</div>
			</div>
		</Link>
	);
};

export default Logo;

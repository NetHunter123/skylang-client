import React from 'react';
import style from './btn-border-hover.module.css';
import {Button} from "@mantine/core";
import styles from "./btn-border-hover.module.css";
import Link from "next/link";

const BtnBorderHover = ({type = "button"||"link", href = "", title, onClick, variant = "light" || "dark", className}) => {
	return (
		<Button
			component={type === "link" ? Link : "button"}
			href={href}
			className={`${styles.btn} ${variant === "light" ? styles.btn__light : styles.btn__dark} ${className}`}
			onClick={onClick}>
			{title}
		</Button>
	);
};

export default BtnBorderHover;

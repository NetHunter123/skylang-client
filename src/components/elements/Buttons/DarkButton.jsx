import React from 'react';
import {Button} from "@mantine/core"
import Link from "next/link";

const DarkButton = ({title, href}) => {
	return (
		<Button component={Link}  href={`${href}`} variant="filled" style={{
			backgroundColor: "var(--primary-50-c)",
			width:"100%",
			maxWidth: "250px",
			padding: "15px 20px",
			height:"auto",
			fontSize:"18px",
			fontWeight: 400
		}}>
			{title}
		</Button>
	);
};

export default DarkButton;

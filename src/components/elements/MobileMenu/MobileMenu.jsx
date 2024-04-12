import React from 'react';
import {Drawer, Button, Burger} from "@mantine/core";
import {IoCloseSharp} from "react-icons/io5";
import {useDisclosure} from "@mantine/hooks";

const MobileMenu = () => {
	const [opened, {toggle}] = useDisclosure(false);
	
	return (
		<>
			<Drawer
				opened={opened}
				onClose={toggle}
				title="Navigation"
				closeButtonProps={{icon: <IoCloseSharp size={30} color={"var(--primary-50-c)"}/>}}
			>
				{/* Drawer content */}
			</Drawer>
			
			<Burger size="md" opened={opened} color={"white"}  onClick={toggle} aria-label="Toggle navigation"/>
		</>
	);
};

export default MobileMenu;

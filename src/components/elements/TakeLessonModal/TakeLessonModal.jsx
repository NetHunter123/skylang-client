import React from 'react';
import {useDisclosure} from "@mantine/hooks";
import {Button, Modal} from "@mantine/core";
import styles from "./take-lesson-modal.module.css";
import BtnBorderHover from "@/components/elements/Buttons/BtnBorderHover/BtnBorderHover";
import TakeLessonForm from "@/components/elements/Forms/TakeLessonForm/TakeLessonForm";

const TakeLessonModal = ({title, variant = "light"}) => {
	const [opened, {open, close}] = useDisclosure(false);
	
	return (
		<>
			<Modal opened={opened} title={"Залиште заявку і ми з вами зв'яжемось"} onClose={close} centered>
				<TakeLessonForm/>
			</Modal>
			<BtnBorderHover className={styles.modal__btn} variant={variant} title={title} onClick={open}/>
		</>
	);
};

export default TakeLessonModal;

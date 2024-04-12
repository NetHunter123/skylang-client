import React from 'react';
import {BsSuitcaseLg} from "react-icons/bs";
import {BiBookReader} from "react-icons/bi";
import styles from "./about-section.module.css"
import {GoGoal} from "react-icons/go";


const AboutSection = () => {
	// <GiWhiteBook />
	
	
	const aboutInfo = [
		{
			icon: <BsSuitcaseLg/>,
			value: "professionals",
			title: "Професійний підхід",
			desc: "Наша школа прагне забезпечити вас якісною освітою у всіх сферах життя. Наш професійний підхід базується на роботі з кваліфікованими викладачами та носіями мови. Наші курси розробляються разом з цими експертами, щоб надати вам найбільш актуальні та корисні знання. Ми прагнемо підготувати вас до успішної кар'єри та особистого розвитку, допомагаючи засвоїти широкий спектр мовних навичок."
		}, {
			icon: <BiBookReader/>,
			value: "knowledge",
			title: "Широкий спектр знань",
			desc: "Наші курси допоможуть вам вивчити англійську мову, вдосконалити навички спілкування та готуватися до співбесід. Ми пропонуємо різноманітні програми, що допоможуть вам у підвищенні кваліфікації та розвитку."
		}, {
			icon: <GoGoal />,
			value: "goal",
			title: "Чітка мета",
			desc: "Наша школа створена з метою надати підтримку та допомогу всім, хто прагне покращити свої навички та розвиватися як особистість. Ми віримо, що кожна людина заслуговує на можливість вивчати нові мови та отримати доступ до якісної освіти. Наша мета - надати вам не лише знання, але й впевненість у власних силах та можливостях."
		}
	]
	
	
	return (
		<section className={`${styles.about} container-c`}>
			<h2 className={"section_title"}>Про школу</h2>
			<ul className={styles.about__wrap}>
				{aboutInfo.map((item) => (
					<li className={styles.about__item} key={item.value}>
						<div className={styles.about__item_top}>
							<div className={styles.about__item_icon}>
								{item.icon}
							</div>
							<h3>{item.title}</h3>
						</div>
						<p className={styles.about__item_desc}>{item.desc}</p>
					</li>
				))}
			</ul>
		</section>
	);
};

export default AboutSection;

import React from 'react';
import styles from './small-guide.module.css';
import BtnBorderHover from "@/components/elements/Buttons/BtnBorderHover/BtnBorderHover";
import TakeLessonModal from "@/components/elements/TakeLessonModal/TakeLessonModal";

const SmallGuide = () => {
	
	const guideInfo = [
		{
			value: "guide-choice",
			title: "Вибір мови та формату",
			desc: "У нас доступно більше 7 іноземних мов для вивчення індивідуально або в групах.",
			img: "./guide-choice.svg",
			button: <BtnBorderHover type={"link"} href={""} title={"Обрати"} variant={"dark"}/>
		},
		{
			value: "guide-teacher",
			title: "Вибір викладача",
			desc: "Всі наші викладачі - кваліфіковані спеціалісти з багаторічним досвідом навчання.",
			img: "./guide-teacher.svg",
			button: <BtnBorderHover type={"link"} href={""} title={"Обрати"} variant={"dark"}/>
		},
		{
			value: "guide-lesson",
			title: "Пробне заняття",
			desc: "Отримайте якісну персональну консультацію від викладача який відповість на всі ваші питання",
			img: "./guide-lesson.svg",
			button: <TakeLessonModal title={"Записатись"} variant={"dark"}/>
		},
	]
	return (
		<section className={`${styles.guide__root} section-c container-c`}>
			<h2 className={`${styles.guide__title} section_title`}>Почати вчити іноземну мову просто!</h2>
			<p className={styles.guide__subtitle}>З чого почати навчання?</p>
			<ul className={styles.guide__list}>
				{guideInfo.map((item) => (
					<li className={styles.guide__item} key={item.value}>
						<div className={styles.guide__image}>
							<img src={item.img} alt={item.title}/>
						</div>
						<div className={styles.guide__info}>
							<div className={styles.guide__info_title}>{item.title}</div>
							<div className={styles.guide__info_desc}>{item.desc}</div>
							<div className={styles.guide__info_btn}>{item.button}</div>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};

export default SmallGuide;

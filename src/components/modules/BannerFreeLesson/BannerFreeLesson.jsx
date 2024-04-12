import React from 'react';
import styles from "./banner-free-lesson.module.css"
import TakeLessonModal from "@/components/elements/TakeLessonModal/TakeLessonModal";

const BannerFreeLesson = () => {
	return (
		<section className={`${styles.lesson__root} section-c`}>
			<div className={`${styles.lesson} container-c`}>
				<h2 className={`${styles.lesson__title} section_title`}>Пробне заняття - Безкоштовно!</h2>
				<p className={`${styles.lesson__subtitle}`}>Записуйтесь прямо зараз так спробуйте наші новітні методи навчання і
					зробіть висновки</p>
				<div className={`${styles.lesson__btn}`}>
					<TakeLessonModal title={"Записатись на пробне заняття"}/>
				</div>
			</div>
		</section>
	);
};

export default BannerFreeLesson;

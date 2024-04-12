import React from 'react';
import {Divider} from "@mantine/core";
import AnimatedCounter from "@/components/elements/AnimatedCounter/AnimatedCounter";
import styles from "./stats-section.module.css"

const StatsSection = () => {
	
	const statsinfo = [
		{
			value: "teachers",
			count: "12",
			desc: "Викладачів, які знають, як допомогти вам заговорити на будь-якій мові"
		},
		{
			value: "students",
			count: "1014",
			desc: "Студентів зі всього світу приєднались до нашої програми"
		},
		{
			value: "marks",
			count: "9",
			desc: "Середній показник IELTS у нащих студентів"
		},
	]
	
	return (
		<section className={styles.stats__root }>
			<div className={`${styles.stats} section-c`}>
				<h2 className={`${styles.stats__title} section_title`}>Наші досягнення в цифрах і фактах</h2>
				<ul className={`${styles.stats__list} container-c`}>
					{statsinfo.map((item) => (
						<li className={`${styles.stats__item} `} key={item.value}>
							<div className={styles.stats__counter}>
								<AnimatedCounter to={+item.count}/>
							</div>
							<div className={styles.stats__divider}>
								<Divider my="md"/>
							</div>
							<p className={styles.stats__desc}>{item.desc}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default StatsSection;

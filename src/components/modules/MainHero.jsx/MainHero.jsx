import React from 'react';
import Anchor from "@/components/elements/Anchor";
import EmblaCarousel from "@/components/elements/embla/EmblaCarousel";
import styles from "./main-hero.module.css"
import BtnBorderHover from "@/components/elements/Buttons/BtnBorderHover/BtnBorderHover";
import TakeLessonModal from "@/components/elements/TakeLessonModal/TakeLessonModal";

const MainHero = () => {
	const options = {loop: true}
	const autoplayOptions = {delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true}
	
	const slides = [
		{
			background: {backgroundColor: "#0093E9", backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"},
			title: "Стань частиною цікавого та веселого ком’юніті",
			desc: "Покращуй свої знання разом з нами “'Поспікаємо club”  Долучайся до крутого ком’юніті та щотижневих зустрічей, влаштовуй easy days та розвивай свої speaking skills..",
			img: "/community-2.svg",
			button: <TakeLessonModal title={"Пробний урок"} variant={"dark"}/>
		},
		{
			background: {backgroundImage: "radial-gradient( circle 1975px at 2.6% 98.3%,  rgba(0,8,120,1) 0%, rgba(95,184,224,1) 69.7% )"},
			title: "Не знаєш, який курс вибрати?",
			desc: "Ми вчимо лише тому, що стане в пригоді. Пройди короткий тест, щоб підібрати відповідну програму навчання",
			img: "/choice.svg",
			button: <BtnBorderHover type={"link"} href={"https://www.cambridgeenglish.org/test-your-english/general-english/"}
			                        title={"Пройти Тест"} variant={"dark"}/>
		},
		{
			background: {backgroundColor: "#74EBD5", backgroundImage: "linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)"},
			title: "Запишись на пробне заняття",
			desc: "Ми навчаємо спілкуватися з носіями мови, чатитися і проходити співбесіди",
			img: "/book-a-lesson.svg",
			button: <TakeLessonModal title={"Пробний урок"} variant={"dark"}/>
		},
		{
			background: {backgroundImage: " radial-gradient( circle farthest-corner at 0.2% 0.5%,  rgba(68,36,164,1) 3.7%, rgba(84,212,228,1) 92.7% )"},
			title: "Зроби нову мову твоїм Solid skill",
			desc: "Працювати закордоном в міжнародній компанії = щодня використовувати англійську, мати стабільність і допомагати ЗСУ",
			img: "/solid-skill.svg",
			button: <BtnBorderHover type={"link"} href={"/courses"} title={"Обрати курс"} variant={"dark"}/>
		}
	]
	
	
	return (
		<section>
			<Anchor id={"#hero"}/>
			<div className={"mainHero__root"}>
				<EmblaCarousel options={options} autoplayOptions={autoplayOptions}>
					
					{/*<div className="embla__slide">*/}
					{/*	<div className="embla__slide__number">2</div>*/}
					{/*</div>*/}
					{slides.map((slide) => {
						return (
							<div className="embla__slide" key={slide.title}>
								<div className={styles.mainHero__slide} style={slide.background}>
									<div className={styles.mainHero__wrap}>
										<div className={styles.mainHero__title}>
											{slide.title}
										</div>
										<div className={styles.mainHero__img}>
											<img src={slide.img} alt={slide.title}/>
										</div>
										<div className={styles.mainHero__desc}>
											<p> {slide.desc}</p>
											<div className={styles.mainHero__desc_btn}>
												{slide.button}
											</div>
										</div>
									</div>
								</div>
							</div>
						
						)
					})}
				</EmblaCarousel>
			</div>
		</section>
	);
};

export default MainHero;

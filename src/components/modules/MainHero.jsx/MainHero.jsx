import React from 'react';
import Anchor from "@/components/elements/Anchor";
import EmblaCarousel from "@/components/elements/embla/EmblaCarousel";
import styles from "./main-hero.module.css"
import community from "@/../public/community.svg"
import DarkButton from "@/components/elements/Buttons/DarkButton";

const MainHero = () => {
	const OPTIONS = {loop: true}
	const slides = [
		{
			background: {backgroundColor: "#0093E9", backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"},
			title: "Приєднуйся до цікавого та веселого ком’юніті",
			desc: "Покращуй свої знання разом з нами “'Поспікаємо club”  Долучайся до крутого ком’юніті та щотижневих зустрічей, влаштовуй easy days та розвивай свої speaking skills..",
			img: "/community.svg",
			button: <DarkButton title={"Пробний урок"} href={""}/>
		},
		{
			background: {backgroundImage: "radial-gradient( circle 1975px at 2.6% 98.3%,  rgba(0,8,120,1) 0%, rgba(95,184,224,1) 69.7% )"},
			title: "Не знаєш, який курс вибрати?",
			desc: "Ми вчимо лише тому, що стане в пригоді. Пройди короткий тест, щоб підібрати відповідну програму навчання",
			img: "/community.svg",
			button: <DarkButton title={"Пройти Тест"} href={"https://www.cambridgeenglish.org/test-your-english/general-english/"}/>
		},
		{
			background: {backgroundColor: "#74EBD5", backgroundImage: "linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)"},
			title: "Запишись на пробне заняття",
			desc: "Ми навчаємо спілкуватися з носіями мови, чатитися і проходити співбесіди",
			img: "/community.svg",
			button: <DarkButton title={"Пробний урок"} href={""}/>
		},
		{
			background: {backgroundImage: " radial-gradient( circle farthest-corner at 0.2% 0.5%,  rgba(68,36,164,1) 3.7%, rgba(84,212,228,1) 92.7% )"},
			title: "Зроби нову мову твоїм Solid skill",
			desc: "Працювати закордоном в міжнародній компанії = щодня використовувати англійську, мати стабільність і допомагати ЗСУ",
			img: "/community.svg",
			button: <DarkButton title={"Обрат курс"} href={"/courses"}/>
		}
	]
	
	
	return (
		<section>
			<Anchor id={"#hero"}/>
			<EmblaCarousel options={OPTIONS}>
				
				{/*<div className="embla__slide">*/}
				{/*	<div className="embla__slide__number">2</div>*/}
				{/*</div>*/}
				{slides.map((slide) => {
					return (
						<div className="embla__slide">
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
										{slide.button}
									</div>
								</div>
							</div>
						</div>
					)
				})}
			</EmblaCarousel>
		
		</section>
	);
};

export default MainHero;

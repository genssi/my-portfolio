import React, {useEffect} from "react";
import { motion } from "framer-motion";
import htmlIcon from "../../icons/html-5-svgrepo-com.svg";
import cssIcon from "../../icons/css-3-svgrepo-com.svg";
import jsIcon from "../../icons/javascript-svgrepo-com.svg";
import reactIcon from "../../icons/react-1-logo-svgrepo-com.svg";
import tsIcon from "../../icons/typescript-logo-svgrepo-com.svg";
import nodeIcon from "../../icons/node-js-svgrepo-com.svg";
import "../styles/about-styles/about.scss";

//skills
interface Skills {
    name: string;
    icon: string;
}

const skills: Skills[] = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "React", icon: reactIcon },
    { name: "TypeScript", icon: tsIcon },
    { name: "Node.js", icon: nodeIcon },
];

//Experience
interface Experience {
    year: string;
    title: string;
    company: string;
    description: string;
    course?: string;
    institution?: string;
    question?: string;
    answer?: string;
}

const experienceData: Experience[] = [
    {
        year: "2019 - 2023",
        title: "Учеба",
        company: "КГТУ",
        description:
            "Отучился на факультете информационных технологий. Получил диплом бакалавра.",
    },
    {
        year: "2020 - 2022",
        title: "Техподдержка",
        company: "Инфоком",
        description:
            "Подрабатывал в техподдержке Инфоком. Подготавливал и настраивал оборудование к выборам 2021 года. Помогал сотрудникам с проблемами.",
    },
    {
        year: "2023 - 2024",
        title: "Сисадмин",
        company: "ФККС",
        description:
            "Работал не официально сисадмином или же, можно сказать помощником сисадмина, в частной компании ФККС. Занимался обслуживанием серверов и компьютеров. Имел базовые знания по языку Python.",
    },
];

//Education
type PartialExperience = Partial<Experience>;

const education: PartialExperience[] = [
    {
        year: "2024",
        course: " > React / TypeScript / JavaScript / HTML / CSS / Node.js <",
    },
    {
        course: "Самостоятельное изучение",
        institution: "Документация, YouTube, курсы",
        description:
            "Обучился фронтенд-разработке сидя дома, черпая знания из различных источников. Так же я поверхностно знаком с такими языками как C++, C#, C, Python. Умею работать с Unix/Linux системами.",
    },
];

//funfact
const funFacts: PartialExperience[] = [
    {
        question: "💻 Что я люблю?",
        answer: "Шахматы, Музыку, Тишину",
    },
    {
        question: "🎬 Любимый фильм?",
        answer: "Звездные войны",
    },
    {
        question: "📚 Любимая книга?",
        answer: "Три товарища — Эрих Мария Ремарк",
    },
    {
        question: "🎮 Чем занимаюсь в свободное время?",
        answer: "Играю в игры, изучаю новые технологии, смотрю сериалы",
    },
];

const About: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); //что бы страница начиналась с самого верха.

    return (
        <motion.section
            className="about-container"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="about-img">
                <img src="/assets/IMG_2532-removebg-preview.jpeg" alt="Bayel" />
            </div>
            <div className="about-content">
                <h1>Привет, я Байэль</h1>
                <p>
                    Я фронтенд-разработчик, увлеченный созданием красивых и
                    функциональных интерфейсов. Люблю работать с React,
                    TypeScript и экспериментировать с новыми технологиями.
                </p>
                <div className="about-buttons">
                    <a href="/resume.pdf" download className="btn">
                        Скачать резюме
                    </a>
                    <a href="https://github.com/genssi" className="btn">
                        GitHub
                    </a>
                </div>
            </div>

            <motion.div
                className="skills-section"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h2>Навыки</h2>
                <div className="skills-list">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skill-card"
                            whileHover={{ scale: 1.1 }}
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="skill-icon"
                            />
                            <p>{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                className="experience-section"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h2>Опыт работы</h2>
                <div className="timeline">
                    {experienceData.map((item, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-year">{item.year}</div>
                            <div className="timeline-content">
                                <h3>{item.title}</h3>
                                <h4>{item.company}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                className="education-section"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
            >
                <h2>Образование / Курсы</h2>
                <div className="education-list">
                    {education.map((edu, index) => (
                        <div key={index} className="education-card">
                            <h3>{edu.course}</h3>
                            <p>
                                <strong>{edu.institution}</strong>
                            </p>
                            <p>{edu.description}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                className="fun-facts-section"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h2>Интересные факты обо мне</h2>
                <div className="fun-facts-list">
                    {funFacts.map((fact, index) => (
                        <div key={index} className="fact-card">
                            <h3>{fact.question}</h3>
                            <p>{fact.answer}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    );
};

export default About;

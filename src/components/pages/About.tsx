import React, { JSX } from "react";
import { motion } from "framer-motion";
import "../styles/about-styles/about.scss";

interface Skills {
    name: string;
    icon: string;
}

const skills: Skills[] = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Node.js", icon: "🌿" },
];

const About: React.FC = () => {
    return (
        <motion.section
            className="about-container"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="about-img">
                <img src="/assets/_2.jpg" alt="Bayel" />
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
                            <span className="skill-icon">{skill.icon}</span>
                            <p>{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    );
};

export default About;

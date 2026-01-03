import React, {useEffect} from "react";
import { motion } from "framer-motion";
import "../styles/projects-styles/projects.scss";

interface IProject {
    title: string;
    description: string;
    technologies: string[];
    github: string;
    demo: string;
}

const projects: IProject[] = [
    {
        title: "MyBaskets",
        description: "Интернет-магазин корзинок, сделанный на React и TypeScript.",
        technologies: ["React", "Node.js", "TypeScript", "SCSS", "Telegram API", "Nginx"],
        github: "https://github.com/genssi/Soul-House.git",
        demo: "https://www.mybaskets.store/",
      },
      {
        title: "Internet-shop",
        description: "Интернет-магазин корзинок, сделанный на чистом JavaScript.",
        technologies: ["JavaScript", "Telegram API", "HTML", "SCSS"],
        github: "https://github.com/genssi/NurayBaskets",
        demo: "https://genssi.github.io/NurayBaskets/",
      },
      {
        title: "ToDo",
        description: "Умный ToDo для добавления, удаления и фильтрации задач на TypeScript",
        technologies: ["TypeScript", "React", "Motion", "Vercel"],
        github: "https://github.com/genssi/ToDo.git",
        demo: "https://to-do-beta-green.vercel.app/",
      },
      {
        title: "Portfolio",
        description: "Мое портфолио",
        technologies: ["TypeScript", "React", "Motion", "Vercel", "Sass"],
        github: "https://github.com/genssi/my-portfolio.git",
        demo: "https://bayel.vercel.app",
      },
      {
        title: "Avia-Tickets",
        description: "Заказ авиабилетов, сделанный на JavaScript.",
        technologies: ["JavaScript", "HTML", "CSS"],
        github: "https://github.com/genssi/project-Avia-Tickets",
        demo: "https://genssi.github.io/project-Avia-Tickets/dist/",
      },
      {
        title: "Marvel",
        description: "Мини приложение про вселенную Marvel",
        technologies: ["React", "Marvel API", "CSS"],
        github: "https://github.com/genssi/marvel_test",
        demo: "",
      },
      {
        title: "Art",
        description: "веб-сайт для заказа картин",
        technologies: ["JavaScript", "Gulp"],
        github: "https://github.com/genssi/-.art",
        demo: "https://genssi.github.io/-.art/dist/",
      },
      {
        title: "Registration Form",
        description: "Форма регистрации",
        technologies: ["JavaScript", "HTML", "CSS"],
        github: "https://github.com/genssi/Registration",
        demo: "https://genssi.github.io/Registration/",
      },
      {
        title: "Loan",
        description: "веб-сайтик",
        technologies: ["JavaScript", "HTML", "CSS"],
        github: "https://github.com/genssi/Loan",
        demo: "https://genssi.github.io/Loan/dist/",
      },
      {
        title: "Hero admin panel",
        description: "админ панель",
        technologies: ["React", "Redux"],
        github: "https://github.com/genssi/Hero-admin-panel",
        demo: "",
      },
      {
        title: "Food dist",
        description: "веб-сайт",
        technologies: ["JavaScript", "php", "webpack"],
        github: "https://github.com/genssi/food-dist/tree/master?tab=readme-ov-file",
        demo: "https://genssi.github.io/food-dist/",
      },
];

const Projects: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); //что бы страница начиналась с самого верха.

    return (
        <motion.section
            className="projects"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
            <h2>Мои проекты</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="technologies">
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="tech">{tech}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            <a href={project.github} target="_blank" className="btn" rel="noreferrer">GitHub</a>
                            {project.demo && <a href={project.demo} target="_blank" className="btn" rel="noreferrer">Live Demo</a>}
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default Projects;

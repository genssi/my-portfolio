import React from "react";

const About: React.FC = () => {
    return (
        <section className="about-container">
            <div className="about-img">
                <img src="/avatar.png" alt="Bayel" />
            </div>
            <div className="about-content">
                <h1>Привет, я Байэль</h1>
                <p>
                    Я фронтенд-разработчик, увлеченный созданием красивых и
                    функциональных интерфейсов. Люблю работать с React,
                    TypeScript и экспериментировать с новыми технологиями.
                </p>
                <div className="about-buttons">
                    <a href="/resume.pdf" download className="btn">Скачать резюме</a>
                    <a href="https://github.com/your-profile" className="btn">GitHub</a>
                </div>
            </div>
        </section>
    );
};

export default About;

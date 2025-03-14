import React, {useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import helloIcon from "../../icons/waving-hand-svgrepo-com.svg";
import devIcon from "../../icons/dev-svgrepo-com.svg";
import webIcon from "../../icons/web-select-svgrepo-com.svg";
import callIcon from "../../icons/call-contact-multimedia-svgrepo-com.svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/home-styles/home.scss";

const Home: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); //что бы страница начиналась с самого верха.

    return (
        <section className="home-container">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation
                speed={1300}
                modules={[Autoplay, Pagination, Navigation]}
                className="swiper-container"
            >
                <SwiperSlide>
                    <div className="slide-content hero">
                        <img className="home-icons" src={helloIcon} alt="smile" />
                        <h1>Привет, я Байэль</h1>
                        <p>
                            Frontend-разработчик, создающий креативные
                            веб-приложения.
                        </p>
                        <Link to="/projects" className="btn">
                            Посмотреть проекты
                        </Link>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide-content skills">
                        <img className="home-icons" src={devIcon} alt="devil" />
                        <h2>Навыки</h2>
                        <p>
                            Я увлекаюсь React, <br /> TypeScript и созданием
                            крутых UI.
                        </p>
                        <div className="skills-grid">
                            <div className="skill">React</div>
                            <div className="skill">TypeScript</div>
                            <div className="skill">JavaScript</div>
                            <div className="skill">SCSS</div>
                            <div className="skill">Node.js</div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide-content rojects-preview">
                        <img className="home-icons" src={webIcon} alt="cry" />
                        <h2>Мои проекты</h2>
                        <p>Вот некоторые из моих работ...</p>
                        <div className="project-list">
                            <div className="project-card">
                                <h3>Магазин корзинок</h3>
                                <p>Интернет-магазин на React</p>
                                <a
                                    href="https://www.mybaskets.online/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Подробнее
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide-content contact">
                        <img className="home-icons" src={callIcon} alt="smirking" />
                        <h2>Контакты</h2>
                        <p>Свяжитесь со мной!</p>
                        <p>Мой GitHub: <a href="https://github.com/genssi" target="_blank" rel="noreferrer">GitHub</a></p>
                        <p>Мой Telegram: <a href="https://t.me/genss_gitignore" target="_blank" rel="noreferrer">Telegram</a></p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Home;
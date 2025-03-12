import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import callIcon from "../../icons/call-contact-multimedia-svgrepo-com.svg";
import "../styles/contacts-styles/contacts.scss";

const Contacts: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); //что бы страница начиналась с самого верха.

    const [isSent, setIsSent] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSent(true);
        setTimeout(() => {
            setFormData({ name: "", email: "", message: "" });
            setIsSent(false);
        }, 2000);
    };

    return (
        <div className="contacts-container">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="content-box"
            >
                <div className="contact-icon">
                    <img
                        className="contacts-icons"
                        src={callIcon}
                        alt="smile"
                    />
                </div>
                
                <h1>Свяжись со мной</h1>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Имя"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSent}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSent}
                    />
                    <textarea
                        name="message"
                        placeholder="Сообщение"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={isSent}
                    />
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={isSent}
                    >
                        {isSent ? "Отправлено!" : "Отправить"}
                    </motion.button>
                </form>

                <div className="social-links">
                    <a
                        href="https://t.me/genssi_gitignore"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Telegram
                    </a>
                    <a
                        href="https://github.com/genssi"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    <a href="mailto:2001shermurzaev@gmail.com">Email</a>
                </div>
            </motion.div>
        </div>
    );
};

export default Contacts;

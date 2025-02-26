import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
    return (
        <motion.section
            className="about"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
            <h2>About Me</h2>
            <p>
                Hi, I'm a passionate frontend developer with experience in
                React, TypeScript, and UI design. I love building interactive
                and stylish web applications!
            </p>
        </motion.section>
    );
};

export default About;

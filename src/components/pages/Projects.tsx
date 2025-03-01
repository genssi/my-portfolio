import React from "react";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
    return (
        <motion.section
            className="projects-page"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
            <h2>Мои проекты</h2>
            <p>
                Тут будут мои проекты, но пока что я их не добавил.
            </p>
        </motion.section>
    );
};

export default Projects;

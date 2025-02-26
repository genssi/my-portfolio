import React from "react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}>
      <h1>Welcome to My Portfolio</h1>
      <p>This is the home page. Let's build something amazing!</p>
    </motion.div>
  );
};

export default Home;
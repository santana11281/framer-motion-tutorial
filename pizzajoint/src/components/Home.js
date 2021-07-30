import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { buttonVariant } from "./Framer-motion/SlideAnimation";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
    exit:{
      x:'-100vh',
      transition:{
        ease:'easeInOut'
      }
    }
  },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
      <h2> Welcome to Pizza Joint</h2>

      <Link to="/base">
        <motion.button
          variants={buttonVariant}
          animate="visible"
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;

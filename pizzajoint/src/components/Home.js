import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";
import { buttonVariant, containerVariants } from "./Framer-motion/SlideAnimation";


export const containerVariants2 = {
  hidden: {
    opacity: 0,
    x: "100vw",
    transition: {
      staggerChildren: 0.5,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.5,
      when: "beforeChildren",
    },
  },
  exit: { x: "-100vh", transition: { ease: "easeInOut" } },
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
      <Loader></Loader>
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

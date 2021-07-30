import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {containerVariants , buttonVariant} from './Framer-motion/SlideAnimation'

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];


  const nextVariants = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      transition="transition"
      initial="hidden"
      animate="visible"
      exit="exit"

    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{
                scale: 1.2,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                color: "#f8e112",
                originX: 0,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          variants={nextVariants}
      
        >
          <Link to="/toppings">
            <motion.button
      variants={buttonVariant}
      animate='visible'
      whileHover="hover"
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;

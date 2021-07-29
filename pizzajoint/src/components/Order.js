import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "./Framer-motion/SlideAnimation";

const childVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza }) => {
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      transition="transition"
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariant}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      {pizza.toppings.map((topping) => (
        <motion.div variants={childVariant} key={topping}>
          {topping}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Order;

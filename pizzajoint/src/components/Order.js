import React from 'react';
import { motion } from 'framer-motion';
import {containerVariants , childVariants } from './Framer-motion/SlideAnimation'

const aaa = ["mmg",'mmg',"mmg",'mmg']

const Order = ({ pizza }) => {
  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <div>
        {pizza.toppings.map(topping => <motion.div variants={childVariants} key={topping} >{topping}</motion.div>)}
      </div>
      
    </motion.div>
  )
}

export default Order;
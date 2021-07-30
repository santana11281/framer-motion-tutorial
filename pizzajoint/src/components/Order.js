import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {containerVariants,childVariants } from './Framer-motion/SlideAnimation'




const Order = ({ pizza }) => {
  const [showTitle, setShowTitle] = useState(true);
  
  setTimeout(() => {
    setShowTitle(false);
  }, 4000);

  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
   
    
          <h2>Thank you for your order :)</h2>




      <motion.p  >You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div
      
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      
      >
        {pizza.toppings.map(topping => <div key={topping} >{topping}</div>)}
      </motion.div>
      
    </motion.div>
  )
}

export default Order;
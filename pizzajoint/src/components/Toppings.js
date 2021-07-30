import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {containerVariants , buttonVariant} from './Framer-motion/SlideAnimation'


const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];




  return (
    <motion.div className="toppings container"
    
 
    variants={containerVariants}
    transition='transition'
    initial='hidden'
    animate='visible'
    exit="exit"
    
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
            
            whileHover={{
              scale:1.2,
              textShadow:"0px 0px 8px rgb(255,255,255)",
              color:'#f8e112',
              originX:0
            
            }}

            transition={{type:"spring",stiffness:300}}
            
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
       variants={buttonVariant}
       animate='visible'
       whileHover="hover"
        >
          Order
        </motion.button>
      </Link>

    </    motion.div>
  )
}

export default Toppings;
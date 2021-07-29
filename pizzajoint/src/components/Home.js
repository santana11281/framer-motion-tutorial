import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {containerVariants , buttonVariant} from './Framer-motion/SlideAnimation'



const Home = () => {
  return (
    <motion.div
    className="home container"
    initial={{opacity:0}}
    animate={{ opacity:1 }}
    transition={{delay:0.2,duration:0.6}}
    
    >
  
  
     <h2> Welcome to Pizza Joint</h2>  

      <Link to="/base">
        <motion.button 

      variants={buttonVariant}
      animate='visible'
      whileHover="hover"
        
        
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;

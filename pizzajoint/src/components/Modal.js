import React from "react";
import { Link } from "react-router-dom";
import { motion,AnimatePresence } from "framer-motion";
import { buttonVariant, containerVariants } from "./Framer-motion/SlideAnimation";


const backdrop ={

visible:{opacity:1},
hidden:{opacity:0}

}


function Modal({ showModal,setModal }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && <motion.div className="backdrop"
      variants={backdrop}
      animate="visible"
      initial="hidden"
      >
          
          </motion.div>}
    </AnimatePresence>
  );
}

export default Modal;

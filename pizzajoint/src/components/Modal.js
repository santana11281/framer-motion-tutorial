import React from "react";
import { Link } from "react-router-dom";
import { motion,AnimatePresence } from "framer-motion";



const backdrop ={
    hidden:{opacity:0},
visible:{opacity:1}


}


function Modal({ showModal,setShowModal }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && <motion.div className="backdrop"

      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      >
          <motion.div className="modal"> 

          <p>want to make another order</p>
          <Link to="/">
            <button>start again</button>
          </Link>

          </motion.div>
          </motion.div>}
    </AnimatePresence>
  );
}

export default Modal;

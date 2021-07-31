import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};



const modal = {
  
  hidden: {
    y:"400px",
    zIndex:-100,
    opacity: 0,
    scale:0.2,

  },
  visible: {
    zIndex:2,
    scale:1.1,
opacity:1,
transition:{delay:0.5}


  },
};

function Modal({ showModal, setShowModal }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div

          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div  className="modal"
          variants={modal}
    

          >
            <p>want to make another order</p>
            <Link to="/">
              <button
              onClick={()=>{

                  setShowModal(false)

              }}
              >start again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;

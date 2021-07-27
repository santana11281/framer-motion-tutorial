import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div animate={{ marginTop: 200, rotateZ: 180, opacity: 200 }}>
      <div className="home container">
        <motion.h2
          animate={{ color: "#a20fc1", fontSize: 50, x: 100, y: -100 }}
        >
          <h2>Welcome to Pizza Joint</h2>
        </motion.h2>
        <Link to="/base">
          <motion.button animate={{ scale: 1.3 }}>
            <button>Create Your Pizza</button>
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;

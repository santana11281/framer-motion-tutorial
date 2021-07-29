 export const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass:0.4,
      damping:90,
      when:'beforeChildren',
      staggerChildren:0.4
      
    },
  },
};

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


export const buttonVariant = {

  hover:{
    scale:1.1,
    textShadow:"0px 0px 8px rgb(255,255,255)",
    boxShadow:"0px 0px 8px rgb(255,255,255)",
    transition:{
      duration:0.4,
      yoyo:Infinity
    }
  
  }
  
  }
  

export const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? "-10%" : direction === "right" ? "10%" : 0,
      y: direction === "up" ? "10%" : direction === "down" ? "-10%" : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: "easeInOut"
      }
    }
  };
};

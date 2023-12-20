export const slidein = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? "100%" : direction === 'down' ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      }
    }
  }
}

export const grow = () => {
  return {
    transition: {
      ease: "easeOut",
      repeat: "infinite"
    }
  }
}
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticLink = ({ children, className, href }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width/2);
    const middleY = clientY - (top + height/2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.a
      ref={ref}
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 5,
        mass: 0.5,
      }}
    >
      {children}
    </motion.a>
  );
};

export default MagneticLink;

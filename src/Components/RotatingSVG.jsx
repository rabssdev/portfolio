import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const RotatingSVG = () => {
 const [isHovered, setIsHovered] = useState(false);
 const { ref, inView } = useInView({
    triggerOnce: false, // Déclenche l'animation à chaque fois que l'élément est visible
 });

 const animation = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        loop: Infinity,
        ease: "linear",
      },
    },
 };

 const handleMouseEnter = () => {
    setIsHovered(true);
 };

 const handleMouseLeave = () => {
    setIsHovered(false);
 };

 return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="ml-[50px]"
    >
      <motion.img
        src="../assets/engrenage.svg"
        alt="engrenage"
        srcSet=""
        initial="initial"
        animate={isHovered || inView ? "animate" : "initial"}
        variants={animation}
      />
    </div>
 );
};

export default RotatingSVG;

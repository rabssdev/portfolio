import React from "react";
import Engrenage from "../assets/engrenage.svg";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import RotatingSVG from "./RotatingSVG";

export default function RightMenu() {
 const rotateVariants = {
    initial: {
      rotate: 0, // Définit l'état initial de la rotation
    },
    animate: {
      rotate: 360, // Définit la rotation finale
      transition: {
        duration: 2, // Durée de la rotation en secondes
        loop: Infinity, // Rotation en boucle
        ease: "linear", // Type d'interpolation (linéaire pour une vitesse constante)
      },
    },
 };
 return (
    <div className="ml-[50px]">
      <RotatingSVG />
      <motion.img src={Engrenage} alt="engrenage" srcSet="" initial="initial" animate="animate" variants={rotateVariants} />
    </div>
 );
}

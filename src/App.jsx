import React, { useState } from "react";
import Socials from "./Components/Socials";
import { Canvas } from "@react-three/fiber";
import { Mesh } from "three";
import RightMenu from "./Components/RightMenu";
import ProfileCircle from "./Components/ProfileCircle";

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

function App() {
  return (
    <div className="relative">
      <div className="flex flex-col justify-center items-center absolute top-[0px] left-0 w-full h-full bg-cover">
        {/* <ProfileCircle /> */}
        
        <div className="relative flex justify-center items-center">
          <h1 className="font-bold text-[30px] text-[#F23838] mr-10">RABSS</h1>
          
          <h1 className="ml-10 font-bold text-[30px] text-[#4ACAD9]">DEV</h1>
        </div>

        <div className="bg-white rounded-lg shadow-xl m-5">
          <h1 className="m-5 text-xl font-bold justify-center items-center font-mono">
            Formations
          </h1>
          <div className="bg-[#4ACAD9] m-5">
            <h2 className="font-bold m-2 text-lg text-white">
               Licence dans la mention électronique parcours signaux et
              systèmes
            </h2>
            <p className="m-5">A l'Ecole supérieure polytechnique d’Antananarivo (ESPA) 2023</p>
          </div>
          <div className= "bg-[#4ACAD9] m-8">
            <h2 className="font-bold m-2 text-lg text-white">
               Formations à l'Orange Digital Center de Madagascar
            </h2>
            <div className="m-5">
            <p>- FORMATION EN CYBERSECURITE DEBUTANT SUR CISCO</p>
            <p>- FORMATION A L’INITIATION AU LINUX</p>
            <p>- FORMATION UXUI DESIGN SUR FIGMA</p>
            <p>- FORMATION A LA CREATION DE CONTENUS</p>
            </div>
          </div>
          
        </div>
        <Socials />
      </div>

      <div className="flex flex-row min-h-screen">
        {/* LEFT COLUMN */}
        <div className="w-1/2 bg-[#4ACAD9]"></div>

        {/* RIGHT COLUMN */}
        <div className="w-1/2 bg-[#F23838] h-[100]"></div>
      </div>
    </div>
  );
}

export default App;

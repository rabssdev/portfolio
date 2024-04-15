import React from "react";
import { Canvas } from "@react-three/fiber";
import Dance from "./Dance";
import { OrbitControls } from "@react-three/drei";



function App() {
  return (
    <>
    
    <h1>Hello every one</h1>
    <Canvas>
      <OrbitControls />
      <directionalLight intensity={1} />
      <ambientLight intensity={0.2} /> 
      <Dance />
    </Canvas>
    </>
  );
}

export default App;

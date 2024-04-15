import React from "react";
import { Canvas } from "@react-three/fiber";
import Dance from "./Dance";
import { OrbitControls } from "@react-three/drei";



function App() {
  return (
    

    <Canvas>
      <OrbitControls />
      <directionalLight intensity={1} />
      <ambientLight intensity={0.2} /> 
      <Dance />
    </Canvas>
  );
}

export default App;

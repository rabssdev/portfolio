import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";

const Scene = () => {
  const boxRef = useRef();
  useFrame((state, delta) => {
    boxRef.current.rotation.y += 0.02;
  });

  return (
    <>
      <Box ref={boxRef} args={[1, 1, 1]} rotation={[0.5, 0, 0]}>
        <meshNormalMaterial />
      </Box>
      <ambientLight />
    </>
  );
};

const App = () => {
  return (
    <Canvas camera={{ fov: 70, position: [0, 0, 3] }}>
      <OrbitControls />
      <Scene />
    </Canvas>
  );
};

export default App;



















// import React from "react";
// import { Canvas } from "@react-three/fiber";
// import Dance from "./Dance";
// import { OrbitControls } from "@react-three/drei";



// function App() {
//   return (
//     <>
    
//     <h1>Hello every one</h1>
//     <Canvas>
//       <OrbitControls />
//       <directionalLight intensity={1} />
//       <ambientLight intensity={0.2} /> 
//       <Dance />
//     </Canvas>
//     </>
//   );
// }

// export default App;

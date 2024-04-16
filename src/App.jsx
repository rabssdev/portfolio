import React, { useState } from "react";
import Socials from "./Components/Socials";
import DiscordFrame from "./pages/DiscordFrame";
import Spline from "@splinetool/react-spline";
import { useSpring } from "react-spring";

function App() {
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

  // Initialize animation using React Spring
  const spring = useSpring({
    from: { x: 0, y: 0, z: 0 }, // Initial rotation values
    to: async (next) => {
      return { x: next.x + 0.01, y: next.y, z: next.z };
    },
    config: { duration: 1000 }, // Adjust animation duration as needed
  });
  return (
    <div className="relative">
      <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full bg-cover">
        <h1 className="text-4xl font-bold text-white">
          RASOLOFOMANANA RABSS
        </h1>
        <h2 className="text-red">Hello everyone</h2>
        <h2 className="">PORTFOLIO DEV</h2>
        <div>
          {/* Render the Spline cube with animated transform */}
          <Spline scene="https://prod.spline.design/N8BraBofswl8DbPu/scene.splinecode" />
          
        </div>

        <Socials />
       
      </div>
      <div className="flex flex-row min-h-screen">
        <div className="w-1/2 bg-[#4ACAD9]"></div>
        <div className="w-1/2 bg-[#F23838]"></div>
      </div>
    </div>
  );
}

export default App;

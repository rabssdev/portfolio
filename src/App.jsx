import React from "react";
import Socials from "./Components/Socials";
import DiscordFrame from "./pages/DiscordFrame";

function App() {
  return (
    <div className="relative">
      
      <div className=" absolute top-0 left-0 ">
      
      </div>
      <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full  bg-cover">
        <h1 className="text-4xl font-bold text-white">
          RASOLOFOMANANA RABE ANDRIANINA
        </h1>
        <h2 className="">PORTFOLIO DEV</h2>

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

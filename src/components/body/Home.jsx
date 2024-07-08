import React, { useState } from "react";
import Register from "../auth/Register";
import Signin from "../auth/Signin";
import Homecomponent from "./Homecomponent";

function Home() {
  return (
    <div className="bg-[#F7F5F9] w-full flex flex-col sm:flex-row justify-between h-auto sm:h-[678px] p-4 sm:p-0">
      <div className="mt-[2rem] sm:mt-[6.25rem] ml-0 sm:ml-[6.25rem]">
        <Homecomponent />
      </div>
      <div className="mt-[2rem] sm:mt-[6.43rem] h-auto sm:h-[27.12rem] w-full sm:w-[27.62rem] flex justify-end sm:mr-[6.25rem]">
        <Signin />
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import Page2 from "../page2/Page2";

function Addnew() {
  return (
    <div className="w-[55.5rem] h-[35.875rem] ml-[18.75rem] px-[3rem] bg-[#FFFFFF] my-[10rem]">
      <div className="flex ml-[18.31rem] mb-[2rem] pt-[2.5rem] flex-row items-center">
        <img className="h-[33px] w-[33px]" src="addnew.png" />
        <h1 className="ml-4 font-Poppins_Medium text-[24px] "> Add your own</h1>
      </div>
      <div className="w-full h-full ">
        <Page2 />
      </div>
    </div>
  );
}

export default Addnew;

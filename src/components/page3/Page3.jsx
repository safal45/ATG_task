import React, { useState } from "react";
import Page2 from "../page2/Page2";

function Page3() {
  const [addNewOpen, setAddNewOpen] = useState(false);
  return addNewOpen ? (
    <div className="w-full sm:w-[55.5rem] h-auto sm:h-[35.875rem] mx-auto px-4 sm:px-[3rem] bg-[#FFFFFF] my-[2rem] sm:my-[10rem]">
      <div className="flex justify-center sm:ml-[18.31rem] mb-[2rem] pt-[2.5rem] flex-row items-center">
        <img className="h-[33px] w-[33px]" src="addnew.png" alt="Add New" />
        <h1 className="ml-4 font-Poppins_Medium text-[24px]"> Add your own</h1>
      </div>
      <div className="w-full h-full">
        <Page2 />
      </div>
    </div>
  ) : (
    <div className="h-auto sm:h-[33.125rem] flex items-center justify-center w-full bg-[#F7FDFF]">
      <div className="w-full sm:w-[77.5rem] flex items-center justify-center h-auto sm:h-[17.75rem]">
        <div className="w-full sm:w-[76.5rem] h-auto sm:h-[14.75rem] border border-[1px] rounded-[8px] border-[#CED4DA] p-4 sm:p-0">
          <div className="flex ml-0 sm:ml-[2rem] mt-0 sm:mt-[1.65rem] flex-row items-center">
            <img className="h-[33px] w-[33px]" src="addnew.png" alt="Add New" />
            <h1 className="ml-4 font-Poppins_Medium text-[24px]">
              {" "}
              Add your own
            </h1>
          </div>
          <p className="mx-0 sm:mx-[2rem] mt-[1rem] sm:mt-[1.65rem] text-[18px] font-Poppins text-[#08090A]">
            Are you a teacher or expert? Do you sell or rent out equipment,
            venue or event tickets? Or, you know someone who should be on
            hobbycue? Go ahead and Add your Own page
          </p>
          <button
            onClick={() => setAddNewOpen(true)}
            className="h-[2.5rem] ml-0 sm:ml-[2rem] text-[#8064A2] font-Poppins_Medium font-semibold text-[14px] mt-[1rem] sm:mt-[1.65rem] w-[7.56rem] border border-[1px] border-[#8064A2] rounded-[8px]"
          >
            Add new
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page3;

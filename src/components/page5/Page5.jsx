import React from "react";

function Page5() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col h-auto w-full bg-[#F7FDFF]">
      <div className="flex w-full flex-col sm:flex-row items-end justify-between h-auto sm:h-[8.12rem] italic mt-[6.25rem] p-4 sm:pl-[6.25rem]">
        <div className="w-full sm:w-[38.31rem]">
          <h1 className="text-[24px] sm:text-[36px] font-Poppins_Medium font-medium">
            Your <span className="text-[#8064A2]">Hobby</span>, Your{" "}
            <span className="text-[#0096C8]"> Community...</span>
          </h1>
          <button className="w-[9rem] sm:w-[9.18rem] h-[2.87rem] mt-[10px] border border-[1px] rounded-[8px] bg-[#8064A2] text-white">
            Get Started
          </button>
        </div>
        <div className="flex flex-col items-center sm:items-end mt-4 sm:mt-0">
          <div
            className="flex justify-center w-full sm:w-[8.12rem]"
            onClick={scrollToTop}
          >
            <div className="h-[2.5rem] w-[2.5rem] bg-white rounded-3xl flex items-center justify-center cursor-pointer">
              <img src="arrowup.png" alt="Scroll to top" />
            </div>
          </div>
          <div className="w-full sm:w-[8.12rem] mt-[7px] h-[1.125rem] flex items-center justify-center sm:mr-[5rem] bg-white">
            <h1 className="font-Poppins_Medium px-[3px] py-[4px] font-normal text-[10px] text-[#8064A2]">
              Go to top (Ctrl+Home)
            </h1>
          </div>
        </div>
      </div>
      <div className="m-4 sm:m-[6.25rem]">
        <img src="page5.png" alt="Page content" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default Page5;

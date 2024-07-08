import React from "react";

function Page4() {
  return (
    <div className="w-full h-auto sm:h-[42rem] bg-[#FFFFFF] flex justify-center items-center p-4 sm:p-0">
      <div className="w-full sm:w-[77.5rem] h-auto sm:h-[29.5rem] bg-[#F7F5F9] p-4 sm:p-0">
        <div className="flex flex-col sm:flex-row ml-0 sm:ml-[2rem] mt-[3rem] items-start sm:items-center">
          <img className="h-[33px] w-[33px]" src="page4.png" alt="page4" />
          <h1 className="ml-0 sm:ml-4 mt-2 sm:mt-0 font-Poppins_Medium text-[24px]">
            Testimonials
          </h1>
        </div>
        <p className="mx-0 sm:mx-[2rem] mt-[2rem] text-[18px] font-Poppins text-[#6D747A]">
          In a fast growing and ever changing city like Bangalore, it sometimes
          becomes very difficult to find or connect with like minded people.
          Websites like hobbycue.com is a great service which helps me get in
          touch with, communicate, connect, and exchange ideas with other
          dancers. It also provides the extra benefit of finding products and
          services that I can avail, which I can be assured is going to be of
          great quality as it comes recommended by people of the hobbycue
          community. To have discussions, to get visibility, and to be able to
          safely explore various hobbies and activities in my city, all under
          one roof, is an excellent idea and I highly recommend it.
        </p>
        <div className="flex flex-col ml-[2rem] sm:flex-row items-start sm:items-center mt-[2.45rem]">
          <div className="flex flex-row items-center w-full sm:w-[48.5rem] h-auto sm:h-[6.25rem] bg-[#CCC1DA] border border-[1px] rounded-[8px] p-4 sm:p-0">
            <span className="h-[24px] w-[24px] bg-white ml-[1rem] mr-[1rem] flex items-center justify-center rounded-xl">
              <img className="pl-[3px]" src="push.png" alt="push" />
            </span>
            <div className="flex flex-row justify-between items-center ml-4 sm:ml-0">
              <span className="h-[12px] w-[12px] ml-[1rem] bg-[#8064A2] rounded-lg"></span>
              <div className="h-[2px] w-full sm:w-[29.25rem] bg-[#FFFFFF] mr-4"></div>
              <a className="text-[#8064A2] font-Poppins_Medium text-[12px]">
                0:00
              </a>
            </div>
            <div className="flex flex-row relative ml-4 sm:ml-[3rem]">
              <img
                className="h-[1.56rem] relative -top-1 left-4 z-10 mt-10 ml-4"
                src="mike.png"
                alt="mike"
              />
              <img
                className="h-[3.75rem] w-[3.75rem]"
                src="Vector26.png"
                alt="vector26"
              />
            </div>
          </div>
          <div className="flex flex-row items-center w-full sm:w-[21rem] h-auto sm:h-[6.25rem] mt-4 sm:mt-0 sm:ml-[4.25rem]">
            <img
              className="h-[6.25rem] w-[6.25rem]"
              src="Ellipse 12.png"
              alt="Ellipse 12"
            />
            <span className="flex flex-col items-center ml-[1.5rem]">
              <h1 className="font-Poppins_Medium text-[18px] text-[#8064A2]">
                Shubha Nagarajan
              </h1>
              <h1 className="font-Poppins text-[14px] text-[#0096C8]">
                Classical Dancer
              </h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page4;

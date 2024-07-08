import React from "react";

const Card1 = ({ values }) => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2  gap-4">
      {values.map((value, index) => (
        <div
          className="md:w-[38rem] flex flex-col border border-[1px]  rounded-[8px] justify-between"
          key={index}
        >
          <span className="flex h-[40px] flex-row mt-[2.5rem] items-center ml-[1.5rem] sm:ml-[3rem]">
            <img
              src={value.logo}
              alt={value.name}
              style={{ width: value.logoW, height: value.logoH }}
              className="justify-start"
            />
            <h2 className="text-black font-Poppins_Medium font-semibold text-[18px] sm:text-[24px] ml-4">
              {value.name}
            </h2>
          </span>
          <p className="ml-[1.5rem] sm:ml-[3rem] w-[calc(100%-3rem)] sm:w-[34.5rem] font-Poppins text-[16px] sm:text-[18px]">
            {value.about}
          </p>
          <button className="w-[7.62rem] h-[2.5rem] font-Poppins_Medium font-semibold text-[14px] border border-[1px] border-[#8064A2] rounded-[8px] ml-[1.5rem] sm:ml-[3rem] mb-[2.5rem]">
            {value.value}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card1;

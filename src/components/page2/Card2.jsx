import React, { useState } from "react";

const Card2 = ({ values }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-9">
      {values.map((value, index) => (
        <div
          className="flex flex-col border border-[2px] h-auto sm:h-[10.93rem] rounded-[8px] p-4 transition-colors duration-300 group"
          key={index}
          style={{
            backgroundColor: hoveredIndex === index ? value.value : "",
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="flex flex-row items-center mb-2 group-hover:text-white">
            <img
              src={value.logo}
              alt={value.name}
              style={{
                width: value.logoW,
                height: value.logoH,
              }}
              className="mr-2 group-hover:brightness-0 group-hover:invert"
            />
            <h2 className="text-black font-Poppins_Medium font-semibold text-[20px] group-hover:text-white">
              {value.name}
            </h2>
          </div>
          <p className="font-Poppins text-[14px] mb-2 group-hover:text-white">
            {value.about}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Card2;

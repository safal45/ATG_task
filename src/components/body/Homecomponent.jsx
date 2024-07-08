import React from "react";

function Homecomponent() {
  return (
    <div className="w-full sm:w-[44.18rem] h-auto sm:h-[36.12rem] p-4 sm:p-0">
      <h1 className="leading-[54px]">
        <span className="italic font-Poppins_Medium font-semibold text-[24px] sm:text-[36px]">
          Explore your <span className="text-[#0096C8]">hobby</span> or{" "}
          <span className="text-[#8064A2]">passion</span>
        </span>
      </h1>
      <p className="leading-[30px] mt-[16px] font-light text-[14px] font-Poppins">
        Sign-in to interact with a community of fellow hobbyists and an
        eco-system of experts, teachers, suppliers, classes, workshops, and
        places to practice, participate or perform. Your hobby may be about
        visual or performing arts, sports, games, gardening, model making,
        cooking, indoor or outdoor activities…
      </p>
      <p className="mt-[16px] font-light font-Poppins text-[14px]">
        If you are an expert or a seller, you can Add your Listing and promote
        yourself, your students, products, services or events. Hop on your
        hobbyhorse and enjoy the ride.
      </p>
      <img className="mt-[40px] sm:mt-[80px]" src="Group.png" alt="Group" />
    </div>
  );
}

export default Homecomponent;

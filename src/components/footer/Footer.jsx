import React from "react";

function Footer() {
  return (
    <div className="w-full flex flex-col bg-[#FFFFFF]">
      <div className="w-full max-w-[76.06rem] h-auto flex flex-col sm:flex-row mt-[3.75rem] mx-auto p-4 sm:p-0">
        <div className="flex-1 mb-6 md:w-[6.875rem] font-Poppins sm:mb-0">
          <h1 className="font-bold font-Poppins_Medium text-[14px]">
            Hobbycue
          </h1>
          <p className="text-[14px] my-1">About Us</p>
          <p className="text-[14px] my-1">Our Services</p>
          <p className="text-[14px] my-1">Work with Us</p>
          <p className="text-[14px] my-1">FAQ</p>
          <p className="text-[14px] my-1">Contact Us</p>
        </div>
        <div className="flex-1 mb-6 font-Poppins md:w-[6.875rem] sm:mb-0 sm:ml-[10.875rem]">
          <h1 className="font-bold font-Poppins_Medium text-[14px]">
            How Do I
          </h1>
          <p className="text-[14px] my-1">Sign Up</p>
          <p className="text-[14px] my-1">Add a Listing</p>
          <p className="text-[14px] my-1">Claim Listing</p>
          <p className="text-[14px] my-1">Post a Query</p>
          <p className="text-[14px] my-1">Add a Blog Post</p>
          <p className="text-[14px] my-1">Other Queries</p>
        </div>
        <div className="flex-1 mb-6 font-Poppins md:w-[6.875rem] sm:mb-0 sm:ml-[9.875rem]">
          <h1 className="font-bold font-Poppins_Medium text-[14px]">
            Quick Links
          </h1>
          <p className="text-[14px] my-1">Listings</p>
          <p className="text-[14px] my-1">Blog Posts</p>
          <p className="text-[14px] my-1">Shop / Store</p>
          <p className="text-[14px] my-1">Community</p>
        </div>
        <div className="flex-1 sm:ml-[11.875rem]">
          <div>
            <h1 className="font-bold font-Poppins text-[14px]">Social Media</h1>
            <div className="flex flex-wrap md:w-[23.5rem] items-center mt-[1.02rem]">
              {[
                "Group 60.png",
                "Group 61.png",
                "Group 62.png",
                "Group 63.png",
                "Group 59.png",
                "Group 58.png",
                "Group 57.png",
                "Group 56.png",
              ].map((img, index) => (
                <img
                  key={index}
                  className="h-[24px] w-[24px] ml-[1.5rem] first:ml-0"
                  src={img}
                  alt={`Social Media ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="mt-[3.125rem]">
            <h1 className="font-bold text-[14px] font-Poppins_Medium">
              Invite Friends
            </h1>
            <div className="w-full mt-[1rem] border border-[1px] border-[#8064A2] flex flex-row justify-end rounded-[8px] h-[2.5rem] overflow-hidden">
              <input
                type="text"
                placeholder="Email ID"
                className="flex-1 pl-3 text-[12px] font-Poppins_Medium rounded-l-[8px] focus:outline-none"
              />
              <div className="w-[3.68rem] flex items-center justify-center border border-24 border-[#8064A2] bg-[#8064A2] rounded-r-[8px]">
                <button className="font-normal text-[12px] text-white font-Poppins_Medium">
                  Invite
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[4.875rem] w-full bg-[#F7F5F9] flex justify-center items-center font-Poppins_Medium font-medium text-[14px] text-[#08090A]">
        <h1>© Purple Cues Private Limited</h1>
      </div>
    </div>
  );
}

export default Footer;

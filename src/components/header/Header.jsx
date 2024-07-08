import React, { useState } from "react";

function Header() {
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  return (
    <div className="h-[80px] w-full flex items-center justify-between bg-white px-4 md:px-16">
      <div className="flex items-center">
        <img className="h-[60px] w-auto" src="/HobbyCue.png" alt="HobbyCue" />
      </div>
      <div className="hidden md:flex h-[40px] justify-between rounded-[8px] items-center w-[28rem] ml-4 bg-[#EBEDF0]">
        <h1 className="text-[#939CA3] pl-3 font-Poppins text-[12px]">
          Search here
        </h1>
        <div className="bg-[#8064A2] justify-center rounded-r-[8px] flex items-center h-[40px] w-[40px]">
          <img src="search_icon.png" alt="Search" />
        </div>
      </div>
      <div className="flex items-center space-x-4 md:space-x-8">
        <div className="md:hidden flex items-center">
          <img
            className="w-[1.245rem] h-[1.245rem] invert"
            src="search_icon.png"
            alt="Search"
          />
        </div>
        <div className="md:hidden flex items-center">
          <img
            className="w-[1.245rem] h-[1.245rem]"
            src="notification.png"
            alt="Notification"
          />
        </div>
        <div
          className="relative hidden md:flex items-center cursor-pointer"
          onClick={() => setIsExploreOpen(!isExploreOpen)}
        >
          <img
            className="w-[1.245rem] h-[1.245rem]"
            src="explore_icon.png"
            alt="Explore"
          />
          <h1 className="pt-[1px] pl-[6px] font-medium font-Poppins_Medium hidden md:block">
            Explore
          </h1>
          <img src="dropdown.png" alt="Dropdown" />
          {isExploreOpen && (
            <div className="absolute top-full mt-2 h-[13.68rem] w-[13.75rem]">
              <div className="w-full h-[2.625rem] bg-[#FFFFFF] mb-[2px] py-[12px] pl-[12px]">
                <h1 className="font-Poppins_Medium font-light text-[14px] text-[#6D747A]">
                  People - Community
                </h1>
              </div>
              <div className="w-full h-[2.625rem] bg-[#FFFFFF] mb-[2px] py-[12px] pl-[12px]">
                <h1 className="font-Poppins_Medium font-light text-[14px] text-[#6D747A]">
                  Places - Venues
                </h1>
              </div>
              <div className="w-full h-[2.625rem] bg-[#FFFFFF] mb-[2px] py-[12px] pl-[12px]">
                <h1 className="font-Poppins_Medium font-light text-[14px] text-[#6D747A]">
                  Programs - Events
                </h1>
              </div>
              <div className="w-full h-[2.625rem] bg-[#FFFFFF] mb-[2px] py-[12px] pl-[12px]">
                <h1 className="font-Poppins_Medium font-light text-[14px] text-[#6D747A]">
                  Products - Store
                </h1>
              </div>
              <div className="w-full h-[2.625rem] bg-[#FFFFFF] mb-[2px] py-[12px] pl-[12px]">
                <h1 className="font-Poppins_Medium font-light text-[14px] text-[#6D747A]">
                  Blogs
                </h1>
              </div>
            </div>
          )}
        </div>
        <div className="hidden md:flex items-center">
          <img
            className="w-[1.245rem] h-[1.245rem]"
            src="Hobbies.png"
            alt="Hobbies"
          />
          <h1 className="pt-[1px] pl-[6px] font-medium font-Poppins_Medium">
            Hobbies
          </h1>
          <img src="dropdown.png" alt="Dropdown" />
        </div>
        <div className="hidden md:flex space-x-4">
          <div className="w-[24px] h-[24px]">
            <img className="w-full h-full" src="bookmark.png" alt="Bookmark" />
          </div>
          <div className="w-[24px] h-[24px]">
            <img
              className="w-full h-full"
              src="notification.png"
              alt="Notification"
            />
          </div>
          <div className="w-[24px] h-[24px]">
            <img className="w-full h-full" src="Product.png" alt="Product" />
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center h-[40px] w-[6rem] border-[1px] rounded-[8px] border-black cursor-pointer">
          <h1>Sign In</h1>
        </div>
        <div className="md:hidden flex items-center cursor-pointer">
          <img className="w-[24px] h-[24px]" src="Menu_icon.png" alt="Menu" />
        </div>
      </div>
    </div>
  );
}

export default Header;

import React, { useState } from "react";

function Signin() {
  const [register, setRegisterd] = useState(true);

  function toggle() {
    setRegisterd((register) => !register);
  }

  return (
    <div className="w-full h-full">
      <div className="flex justify-between w-[10.56rem] h-[34px]">
        <button
          className={`w-[4.37rem]  font-Poppins_Medium font-semibold ${
            register
              ? "underline decoration-[2px] underline-offset-8 text-[#8064A2]"
              : "text-[#939CA3]"
          }`}
          onClick={toggle}
        >
          Sign In
        </button>
        <button
          className={`w-[4.37rem] font-Poppins_Medium font-semibold  ${
            !register
              ? "underline decoration-[2px] underline-offset-8 text-[#8064A2]"
              : "text-[#939CA3]"
          }`}
          onClick={toggle}
        >
          Join In
        </button>
      </div>
      {register ? (
        <div>
          <div className="space-y-6 mt-[32px]">
            <div className="w-full h-[40px]  flex items-center  rounded-[8px] space-x-[88px] bg-[#F7F5F9] border border-[1px] border-[#8064A2]">
              <img className="ml-3" src="Google.png" />
              <h1 className="font-Poppins_Medium  font-semibold text-[14px]  font-[#08090A]">
                Continue with Google
              </h1>
            </div>
            <div className="w-full h-[40px]  flex items-center  rounded-[8px] space-x-[79px] bg-[#F7F5F9] border border-[1px] border-[#8064A2]">
              <img className="ml-3" src="Vector.png" />
              <h1 className="font-Poppins_Medium  font-semibold text-[14px]  font-[#08090A]">
                Continue with Facebook
              </h1>
            </div>
          </div>
          <div className="my-[28px] flex flex-row items-center w-full h-[16px]">
            <div className="h-[2px] bg-[#CED4DA] w-[9.2rem]"></div>
            <span className="font-Poppins_Medium font-semibold mx-[4px] text-[12px]">
              Or connect with
            </span>
            <div className="h-[2px] bg-[#CED4DA] w-[9.2rem]"></div>
          </div>
          <div className="flex flex-col space-y-4 w-full">
            <div className="w-full h-10 bg-white flex items-center font-[#939CA3] border border-[1px] text-[12px] rounded-[8px]">
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-[12px]  font-Poppins_Medium focus:outline-none "
              />
            </div>
            <div className="w-full h-10 bg-white flex items-center font-[#939CA3] border border-[1px] text-[12px] rounded-[8px]">
              <input
                type="password"
                placeholder="Password"
                className="w-full w-full pl-[12px]  font-Poppins_Medium focus:outline-none"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center font-Poppins_Medium font-light text-[12px] font-[#000000]">
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <div className="flex flex-row">
                <img className="w-[10px] h-[14px]" src="Vector2.png" />
                <a
                  href="#"
                  className="font-Poppins_Medium pl-[10px] text-[12px] text-[#000000]"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <button className="w-full h-[40px] font-Poppins_Medium font-semibold text-[14px] font-[#000000] border border-[1px] border-[#000000] rounded-[8px]">
              Continue
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="space-y-6 mt-[32px]">
            <div className="w-full h-[40px]  flex items-center  rounded-[8px] space-x-[88px] bg-[#F7F5F9] border border-[1px] border-[#8064A2]">
              <img className="ml-3" src="Google.png" />
              <h1 className="font-Poppins_Medium  font-semibold text-[14px]  font-[#08090A]">
                Continue with Google
              </h1>
            </div>
            <div className="w-full h-[40px]  flex items-center  rounded-[8px] space-x-[79px] bg-[#F7F5F9] border border-[1px] border-[#8064A2]">
              <img className="ml-3" src="Vector.png" />
              <h1 className="font-Poppins_Medium  font-semibold text-[14px]  font-[#08090A]">
                Continue with Facebook
              </h1>
            </div>
          </div>
          <div className="my-[28px] flex flex-row items-center w-full h-[16px]">
            <div className="h-[2px] bg-[#CED4DA] w-[9.2rem]"></div>
            <span className="font-Poppins_Medium font-semibold mx-[4px] text-[12px]">
              Or connect with
            </span>
            <div className="h-[2px] bg-[#CED4DA] w-[9.2rem]"></div>
          </div>
          <div className="flex flex-col  w-full">
            <div className="flex flex-col space-y-4">
              <div className="w-full h-10 bg-white flex items-center font-[#939CA3] border border-[1px] text-[12px] rounded-[8px]">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-[12px]  font-Poppins_Medium focus:outline-none "
                />
              </div>
              <div className="w-full flex justify-between h-10 bg-white flex items-center font-[#939CA3] border border-[1px] text-[12px] rounded-[8px]">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full w-full pl-[12px]  font-Poppins_Medium focus:outline-none"
                />
                <img
                  className="w-[16px] h-[16px] mr-[12px]"
                  src="Password.png"
                />
              </div>
            </div>
            <div className="flex justify-between items-center mt-[4px] ">
              <div className="flex flex-row items-center font-Poppins_Medium w-1/2 h-[4px] font-light text-[12px] font-[#000000]">
                <div className="h-full w-1/3 bg-[#FFFFFF] rounded-[8px]"></div>
                <div className="h-full w-1/3 bg-[#FFFFFF] mx-[2px] rounded-[8px]"></div>
                <div className="h-full w-1/3 bg-[#FFFFFF] rounded-[8px]"></div>
              </div>
              <div className="flex flex-row">
                <a
                  href="#"
                  className="font-Poppins_Medium pl-[10px] font-semibold text-[12px] text-[#939CA3]"
                >
                  Password Strength
                </a>
              </div>
            </div>
            <div className="mt-[12px]">
              <a className=" font-Poppins font-semibold w-full  text-[#6D747A] text-[12px]">
                By continuing, you agree to our{" "}
                <span className="text-[#000000]">Terms of Service</span> and
                <span className="text-[#000000]"> Privacy Policy</span> .
              </a>
              <button className="w-full -mt-3 h-[40px] text-[#FFFFFF] font-Poppins_Medium font-semibold text-[14px] font-[#000000]  rounded-[8px] bg-[#8064A2]">
                Agree and Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signin;

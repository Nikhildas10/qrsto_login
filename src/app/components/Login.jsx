"use client";
import React, { useState } from "react";

const Login = () => {
  const [isActive, setIsActive] = useState(false);
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="sm:w-[70%] w-[100%] overflow-hidden xl:h-screen p-10 pb-14 ">
      <div className="h-full flex  flex-col items-center">
        <div className="flex pb-0 flex-col gap-5">
        <div className="">
          <h1 className="text-2xl font-bold text-blue-600 mb-10">QRFY</h1>
          <h2 className="font-[700] text-[23px] mb-2">Welcome back!</h2>
          <p className="text-[#717171] w-72 mb-5">
            Enter with your networks or complete your data
          </p>
        </div>
          <div className="flex  gap-4">
            <button
              className="px-8 py-3 rounded-3xl border-solid border-2 border-gray-200 hover:border-blue-600 hover:bg-slate-50"
              title="google"
            >
              <img
                className="w-[20px]"
                src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1706522124/Qrsto/login/google.d4096036739850926880299a7f8b66c8_fzsouu.svg"
                alt=""
              />
            </button>
            <button
              className="px-8 py-3 rounded-3xl border-solid border-2 border-gray-200 hover:border-blue-600 hover:bg-slate-50"
              title="linkedin"
            >
              <img
                className="w-[20px]"
                src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1706522122/Qrsto/login/linkedin.fd9e42980a314c0ab7ddcc9967529150_ckngdi.svg"
                alt=""
              />
            </button>
            <button
              className="px-8 py-3 rounded-3xl border-solid border-2 border-gray-200 hover:border-blue-600 hover:bg-slate-50"
              title="facebook"
            >
              <img
                className="w-[20px]"
                src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1706522120/Qrsto/login/facebook.482c38825c0411d266b89dbca4ad0460_oq3f7j.svg"
                alt=""
              />
            </button>
          </div>
          <div className="flex justify-center items-center">
            <div className="horizontalLine"></div>
            <div className="px-6 bg-white text-gray-500">or</div>
            <div className="horizontalLine"></div>
          </div>
          <div
            onMouseLeave={() => setIsActive(false)}
            className={`flex w-[300px] border-2 border-solid ${
              isActive ? "hover:border-blue-600" : "hover:border-gray-400"
            } border-gray-200   pl-3 py-3 rounded-3xl`}
          >
            <input
              type="text"
              onClick={() => setIsActive(true)}
              className="outline-none text-sm"
              placeholder="name@email.com"
            />
          </div>{" "}
          <div
            onMouseLeave={() => setIsActive(false)}
            className={`flex w-[300px] border-2 ${
              isActive ? "hover:border-blue-600" : "hover:border-gray-400"
            } border-solid border-gray-200  pl-3 rounded-3xl`}
          >
            <input
              type={isShow ? "text" : "password"}
              onClick={() => setIsActive(true)}
              className="outline-none text-sm"
              placeholder="Enter your password here"
            />
            <div
              onClick={() => setIsShow(!isShow)}
              className="hover:bg-gray-100 cursor-pointer  rounded-3xl p-[10px] ml-14"
            >
              <img
                className="w-[25px] opacity-55"
                title={isShow ? "hide" : "show"}
                src={
                  isShow
                    ? "https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1706595165/Qrsto/login/closed-eyes_snmfxk.png"
                    : "https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1706594395/Qrsto/login/eye-close-up_kul29f.png"
                }
                alt=""
              />
            </div>
          </div>{" "}
          <p className="text-gray-500 text-[11px] text-center font-semibold">
            Have you forgotten your password?{" "}
            <span className="text-blue-600 cursor-pointer">Click here</span>
          </p>
          <button className="bg-blue-600 font-bold text-white px-4 py-3 rounded-3xl">
            Log in
          </button>
          <p className="text-gray-500 text-[11px] text-center font-semibold">
            Dont have an account?{" "}
            <span className="text-blue-600 cursor-pointer">
              Create an account
            </span>
          </p>
        </div>
      </div>
        <p className="text-[10px]  text-center text-gray-400">
          2022 © QRfy, Spain - QR Code is a trademark of DENSO WAVE INCORPORATED
        </p>
    
    </div>
  );
};

export default Login;

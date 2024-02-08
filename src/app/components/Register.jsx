"use client";
import Link from "next/link";
import React, { useState } from "react";
import zxcvbn from "zxcvbn";
const Register = () => {
  const [isActive, setIsActive] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [password, setPassword] = useState("");
  console.log(password);
  const testPasswrd = zxcvbn(password);
  // console.log(testPasswrd.score);
  return (
    <div className="sm:w-[64%] w-[100%] overflow-hidden bg-white   p-8 pb-14 ">
      <div className="h-full flex 2xl:justify-center  flex-col items-center">
        <div className="flex pb-0 flex-col gap-5">
          <div className="">
            <img
              className="w-[105px] h-[20px] mb-14"
              src="https://placehold.co/105x20"
              alt=""
            />
            <h2 className="font-[700] text-[23px] mb-2 max-w-[295px]">
              Create account
            </h2>
            <p className="text-[#717171] w-72 mb-5 max-w-[295px]">
              It's free and only takes a few seconds.
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
            className={`flex w-[300px] border-2 border-solid overflow-hidden ${
              isActive ? "hover:border-blue-600" : "hover:border-gray-400"
            } border-gray-200   pl-3 py-3 rounded-3xl`}
          >
            <input
              type="text"
              autoFocus
              onClick={() => setIsActive(true)}
              className="outline-none text-sm w-full"
              placeholder="name@email.com"
            />
          </div>{" "}
          <div
            onMouseLeave={() => setIsActive(false)}
            className={`flex w-[300px] border-2 pr-1 overflow-hidden ${
              isActive ? "hover:border-blue-600" : "hover:border-gray-400"
            } border-solid border-gray-200  pl-3 rounded-3xl`}
          >
            <input
              type={isShow ? "text" : "password"}
              onClick={() => setIsActive(true)}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none text-sm w-full max-w-[595px]"
              placeholder="Enter your password here"
            />
            <div
              onClick={() => setIsShow(!isShow)}
              className="hover:bg-gray-100 cursor-pointer  rounded-3xl p-[10px] "
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
          <div className="flex justify-between gap-1 w-full px-5">
            <div
              className={`${
                testPasswrd.score >= 4
                  ? "bg-green-500"
                  : testPasswrd.score >= 2
                  ? "bg-orange-500"
                  : "bg-red-500"
              } h-1 w-[100%]`}
            ></div>
            <div
              className={`${
                testPasswrd.score >= 4
                  ? "bg-green-500"
                  : testPasswrd.score >= 2
                  ? "bg-orange-500"
                  : "bg-slate-100"
              } h-1 w-[100%]`}
            ></div>
            <div
              className={`${
                testPasswrd.score >= 4 ? "bg-green-500" : "bg-slate-100"
              } h-1 w-[100%]`}
            ></div>
            <div
              className={`${
                testPasswrd.score >= 4 ? "bg-green-500" : "bg-slate-100"
              } h-1 w-[100%]`}
            ></div>
          </div>
          <button className="bg-blue-600 font-bold text-white px-4 py-3 rounded-3xl">
            Continue
          </button>
          <p className="text-gray-500 text-[11px] text-center font-semibold">
            Already have an account?{" "}
            <Link href={"/"}>
              <span className="text-blue-600 cursor-pointer">Log in</span>
            </Link>
          </p>
        </div>
        <p className="text-gray-400 max-w-[360px] text-[12px] text-start font-semibold mt-5 mb-10">
          By creating an account, you consent that you have read and agree to
          our{" "}
          <span className="text-blue-600 cursor-pointer">
            terms of use and contracting
          </span>{" "}
          and the{" "}
          <span className="text-blue-600 cursor-pointer">privacy policy.</span>
        </p>
      </div>
      <p className="text-[10px] mt-6  text-center text-gray-400">
        copyright text here
      </p>
    </div>
  );
};

export default Register;

"use client";
import Link from "next/link";
import React, { useState } from "react";
const ForgotPswrd = () => {
  const [isActive, setIsActive] = useState(false);
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="sm:w-[64%] w-[100%] overflow-hidden xl:h-screen  p-8 pb-14 ">
      <div className="h-full flex xl:justify-center  flex-col items-center">
        <div className="flex pb-0 mb-[137px] flex-col gap-5 h-full">
          <img
            className="w-[105px] mb-20"
            src="https://qrfy.com/static/media/QRFY_logo.354ed49c1007fadf579081da3f778f06.svg"
            alt=""
          />
          <div className="">
            <h2 className="font-[700] text-[23px] mb-2 max-w-[295px]">
              Recover Password
            </h2>
            <p className="text-[#717171] w-72 mb-5 max-w-[295px]">
              Enter the email with which you created your account and we will
              send you a code so you can recover your password
            </p>
          </div>
          <div
            onMouseLeave={() => setIsActive(false)}
            className={`flex w-[300px] border-2 border-solid overflow-hidden ${
              isActive ? "hover:border-blue-600" : "hover:border-gray-400"
            } border-gray-200   pl-3 py-3 mb-12 rounded-3xl`}
          >
            <input
              type="text"
              onClick={() => setIsActive(true)}
              className="outline-none text-sm w-full"
              placeholder="name@email.com"
            />
          </div>{" "}
          <button className="bg-blue-600 font-bold text-white px-4 py-3 rounded-3xl">
            Send Email
          </button>
          <Link href={"/"}>
            <button className="border-blue-600 border-solid border-2  w-full font-bold text-blue-600 px-4 py-3 rounded-3xl">
              Cancel
            </button>
          </Link>
        </div>
      </div>
      <p className="text-[10px]  text-center text-gray-400">
        2022 © QRfy, Spain - QR Code is a trademark of DENSO WAVE INCORPORATED
      </p>
    </div>
  );
};

export default ForgotPswrd;

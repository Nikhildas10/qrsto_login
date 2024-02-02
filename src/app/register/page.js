"use client";
import React, { useEffect, useState } from "react";
import Register from "../components/Register";
import BgRegister from "../components/BgRegister";

const page = () => {
  const [isSwiperVisible, setSwiperVisibility] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setSwiperVisibility(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex justify-center mainRegister xl:h-screen">
      <Register />
      {isSwiperVisible && <BgRegister />}
    </div>
  );
};

export default page;

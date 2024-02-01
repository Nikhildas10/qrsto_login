"use client"
import React, { useEffect, useState } from 'react'
import ForgotPswrd from '../components/ForgotPswrd'
import BgLogin from '../components/BgLogin'
import BgRegister from '../components/BgRegister'

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
    <div className="flex justify-center">
      <ForgotPswrd />
      {isSwiperVisible && <BgRegister />}
    </div>
  );
}

export default page
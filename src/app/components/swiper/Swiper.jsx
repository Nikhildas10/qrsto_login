"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/swiper-bundle.css";

// Import additional Swiper modules

// Rest of your application code

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
  EffectFade,
} from "swiper/modules";

const SwiperCarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        speed={500}
        effect={"fade"}
        fadeEffect={{ crossfade: true }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, EffectFade, Navigation]}
      >
        <SwiperSlide>
          <div className="flex justify-center flex-col items-center h-screen">
            <video
              className="rounded-3xl "
              autoPlay
              loop
              muted
              width="100%"
              height="auto"
              preload="auto"
            >
              <source
                src="https://qrfy.com/static/media/slide_4.165bca08190baa8f6432.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <h1 className="text-2xl mt-3 font-bold text-white">
              Generate unlimited QR Codes
            </h1>
            <h1 className="text-xs text-white">
              Create various types of QR in just a few clicks
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center flex-col items-center h-screen">
            <video
              autoPlay
              loop
              muted
              width="100%"
              height="auto"
              preload="auto"
            >
              <source
                src="https://qrfy.com/static/media/slide_2.68a87bbb93fe62d634a9.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>{" "}
            <h1 className="text-2xl mt-3 font-bold text-white">
              Design and give it your style
            </h1>
            <h1 className="text-xs text-white">
              You can create unique QR's with the shape,color and personalized
              logo
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center flex-col items-center h-screen">
            <video
              autoPlay
              loop
              muted
              width="100%"
              height="auto"
              preload="auto"
            >
              <source
                src="https://qrfy.com/static/media/slide_3.0e51139059bb9f62e448.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>{" "}
            <h1 className="text-2xl mt-3 font-bold text-white">Full stats</h1>
            <h1 className="text-xs text-white">
              Analyse the number of times it has been scanned,device and place
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center flex-col items-center h-screen">
            <video
              autoPlay
              loop
              muted
              width="100%"
              height="auto"
              preload="auto"
            >
              <source
                src="https://qrfy.com/static/media/slide_1.ee885e177c4232ed3449.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>{" "}
            <h1 className="text-2xl mt-3 font-bold text-white">
              User Management
            </h1>
            <h1 className="text-xs text-white">
              invite users with various permissions such as folders or sections
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperCarousel;

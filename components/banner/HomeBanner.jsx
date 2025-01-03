"use client";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import "./css/banner.css"

function HomeBanner({ banners }) {
   const parentRef = useRef(null);
   const [parentWidth, setParentWidth] = useState(0);
   const [transformValue, setTransformValue] = useState(0);

   useEffect(() => {
      if (parentRef.current) {
         const updateWidth = () => {
            setParentWidth(parentRef.current.offsetWidth);
         };

         updateWidth();

         const resizeObserver = new ResizeObserver(updateWidth);
         resizeObserver.observe(parentRef.current);

         return () => resizeObserver.disconnect();
      }
   }, []);

   useEffect(() => {
      if (parentWidth) {
         const interval = setInterval(() => {
            setTransformValue((prev) => {
               if (prev >= parentWidth * banners.length - parentWidth) {
                  return 0;
               } else {
                  return prev + parentWidth;
               }
            });
         }, 5000);

         return () => clearInterval(interval);
      }
   }, [parentWidth]);

   return (
      <div className="w-full overflow-hidden relative slider">
         {/* Slider */}
         <div
            className="flex w-auto h-full flex-nowrap transition-all duration-500 ease-linear"
            ref={parentRef}
            style={{ transform: `translateX(-${transformValue}px)` }}
         >
            {banners.length > 0 && banners.map((banner, index) => (
               <div
                  key={index}
                  className="flex items-center justify-center flex-shrink-0 gap-4"
                  style={{ width: `${parentWidth}px` }} // Chia 2 item trên mỗi hàng
               >
                  <a href="" className="w-full h-full">
                     <img
                        src={banner[0].link}
                        alt={banner[0].title}
                        className="w-full h-full object-cover rounded-lg"
                     />
                  </a>
                  <a href="" className="w-full h-full">
                     <img
                        src={banner[1].link}
                        alt={banner[1].title}
                        className="w-full h-full object-cover rounded-lg"
                     />
                  </a>
               </div>
            ))}
         </div>
         {/* Slide dot */}
         <div>
            <ul className="flex items-center justify-center gap-2 mt-3">
               {banners.length > 0 && banners.map((_, index) => (
                  <li
                     onClick={() => setTransformValue(parentWidth * index)}
                     key={index}
                     className={`w-4 h-[2.5px] rounded-lg bg-gray-400 cursor-pointer transition-all duration-300 ease-linear ${transformValue / parentWidth === index ? 'bg-blue-800 w-6' : ''}`}
                  ></li>
               ))}
            </ul>
         </div>
         {/* Slide prev, next button */}

         <button
            onClick={() => setTransformValue((prev) => prev - parentWidth < 0 ? parentWidth * (banners.length - 1) : prev - parentWidth)}
            className="slide_btn w-10 h-10 flex items-center justify-center bg-white bg-opacity-50 rounded-full shadow-lg absolute top-1/2 left-2 transform -translate-y-1/2 hover:bg-opacity-100 transition-all duration-300 ease-linear"
         >
            <FontAwesomeIcon icon={faChevronLeft} />
         </button>
         <button
            onClick={() => setTransformValue((prev) => prev + parentWidth > parentWidth * banners.length - parentWidth ? 0 : prev + parentWidth)}
            className="slide_btn w-10 h-10 flex items-center justify-center bg-white bg-opacity-50 rounded-full shadow-lg absolute top-1/2 right-2 transform -translate-y-1/2 hover:bg-opacity-100 transition-all duration-300 ease-linear"
         >
            <FontAwesomeIcon icon={faChevronRight} />
         </button>

      </div>
   );
}

export default HomeBanner;

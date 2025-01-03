"use client"
import React, { useEffect, useState } from 'react'

function SubBanner({ subBanner }) {
   const [currentBanner, setCurrentBanner] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentBanner((prev) => (prev + 1) % subBanner.length)
      }, 5000)

      return () => clearInterval(interval)
   }, [])

   return (
      <div className="w-full p-2 bg-green-100">
         <div className="container mx-auto flex items-center justify-center text-center">
            <div className="text-lg text-green-800">
               <a href={'/category/' + subBanner[currentBanner].title} className="text-green-500 text-[12px] hover:text-green-600 font-semibold select-none cursor-pointer">{subBanner[currentBanner].content}</a>
            </div>
         </div>
      </div>
   )
}

export default SubBanner

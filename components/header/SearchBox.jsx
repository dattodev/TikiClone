"use client";

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Button from '../customs/Button'

export default function SearchBox({ commitment }) {

   const [currentPlace, setCurrentPlace] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentPlace((prev) => (prev + 1) % commitment.length)
      }, 5000)

      return () => clearInterval(interval)
   }, [])


   return (
      <div className="w-full">
         <label htmlFor="#search" className='relative flex items-center overflow-hidden justify-start gap-2 py-2 px-6 border w-full rounded-lg'>
            <FontAwesomeIcon icon={faSearch} className="w-4 h-4 text-gray-500" />
            <input type="text" id="search" placeholder={commitment[currentPlace].content} className='w-full h-full outline-none border-r-2 border-gray-300 me-[50px] text-sm' />
            <Button title={"Tìm kiếm"} className={"absolute top-0 right-0 bottom-0 px-2 text-sm"} />
         </label>
      </div>
   )
}

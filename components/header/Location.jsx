"use client";

import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function Location({ location }) {

   return (
      <div className="flex items-center justify-center">
         <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 text-red-500" />
         <div className="flex items-start justify-center gap-1">
            <p className="text-sm text-gray-500 ">Giao đến: </p>
            <button onClick={() => alert('Chức năng này đang được phát triển')} className="flex items-center justify-center gap-1">
               <p className="underline text-sm text-gray-800 cursor-pointer">
                  {location}
               </p>
            </button>
         </div>
      </div>
   )
}

export default Location

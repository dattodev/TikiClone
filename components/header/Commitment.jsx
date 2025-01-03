import React from 'react'

function Commitment({ commitment }) {
   return (
      <div className="flex items-center justify-start w-full border px-[80px] py-3 gap-4">
         <h3 className="text-blue-600 font-semibold text-sm">Cam kết</h3>
         {commitment.map((item, index) => (
            <div key={index} className="flex items-center justify-center">
               <img src={item.icon} alt={item.title} className="w-5 h-5" />
               <h1 className="text-[13px] ms-1">{item.title}</h1>
            </div>
         ))}
      </div>
   )
}

export default Commitment

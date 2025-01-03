import Link from 'next/link'
import React from 'react'

function BenefitBarItem({ benefit }) {
   return (
      <Link href={`/category/${benefit.id}`} className='w-full'>
         <div className="flex items-center justify-start gap-3 p-2 hover:bg-gray-300 w-full rounded-lg transition-all duration-300 ease-linear">
            <img src={benefit.icon} alt={benefit.title} className='w-8 h-8' />
            <p className="text-sm">{benefit.title}</p>
         </div>
      </Link>
   )
}

export default BenefitBarItem

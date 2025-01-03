import Link from 'next/link'
import React from 'react'

function SubCategoryBar({ title, categories }) {
   return (
      <div className='flex items-start justify-start flex-col bg-white rounded-lg'>
         {/* <h1 className='font-semibold'>{title}</h1> */}
         <div className='flex items-start justify-start gap-2 flex-wrap flex-col mt-2 w-full'>
            {categories.length > 0 &&
               categories.map((category, index) => (
                  <Link href={''} key={category.id} className={`flex items-center pb-2 w-full py-2 px-4 hover:underline transition-all duration-300 ease-linear ${index !== categories.length - 1 && 'border-b border-gray-300'}`}>
                     <h1 className='text-[12px]'>{category.title}</h1>
                  </Link>
               ))
            }
         </div>
      </div>
   )
}

export default SubCategoryBar

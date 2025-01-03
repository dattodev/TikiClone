import Link from 'next/link'
import React from 'react'

function CategoryBarItem({ category }) {
   return (
      <Link href={`/category/${category.id}`} className='w-full'>
         <div className="flex items-center justify-start gap-3 p-2 hover:bg-gray-300 w-full rounded-lg transition-all duration-300 ease-linear">
            <img src={category.icon} alt={category.name} className='w-8 h-8' />
            <p className="text-sm">{category.name}</p>
         </div>
      </Link>
   )
}

export default CategoryBarItem

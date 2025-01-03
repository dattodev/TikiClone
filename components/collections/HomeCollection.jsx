import React from 'react'

function HomeCollection({ collections }) {
   return (
      <div className='p-4'>
         <div className='flex items-start justify-between gap-4'>
            {collections.length > 0 &&
               collections.map((collection) => (
                  <a
                     key={collection.id}
                     href={collection.link}
                     className='flex flex-col items-center justify-center gap-2'
                  >
                     <img
                        src={collection.icon}
                        alt={collection.title}
                        className='object-cover rounded-full w-[44px] h-[44px]'
                     />
                     <span className='text-sm text-center font-medium text-gray-800'>{collection.title}</span>
                  </a>
               ))}
         </div>
      </div>
   )
}

export default HomeCollection

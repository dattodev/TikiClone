import Link from 'next/link'
import React from 'react'
import CollectionSlider from './CollectionSlider'

function Collection({ collectionName, collectionImage, collectionProducts, index, collectionId }) {
   return (
      <div className='w-full p-4 bg-white rounded-lg'>
         <div className='flex items-center justify-between'>
            {collectionImage && <img src={collectionImage} alt={collectionName} />}
            <h1 className='font-semibold'>{collectionName}</h1>
            <Link href={"/collections/" + collectionId} className='text-blue-600 text-sm'>Xem tất cả</Link>
         </div>
         <div className='mt-4'>
            <CollectionSlider collectionProducts={collectionProducts} />
         </div>
      </div>
   )
}

export default Collection

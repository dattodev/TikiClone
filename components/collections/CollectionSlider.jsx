import { formatVNDCurrency } from '@/utils'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

function CollectionSlider({ collectionProducts, amountItemInRow }) {
   return (
      <div className='flex items-start gap-2'>
         {collectionProducts.length > 0 &&
            collectionProducts.map((product) => (
               <Link href={"/product/"} key={product.id} className='w-[200px] border border-gray-200 rounded-lg overflow-hidden flex-1-1-0'>
                  <img src={product.image} alt={product.title} className='object-cover w-full h-[200px] ' />
                  <div className='p-2 h-full'>
                     <div className='flex items-start flex-col py-2 gap-1'>
                        <h1 className=' text-[12px]'>{product.description}</h1>
                        <p className=' text-[12px] mt-0  bg-yellow-400 p-2 rounded-lg mb-0'>{product.brand}</p>
                     </div>
                     {/* Star */}
                     <div className='flex items-center justify-start '>
                        <div className='flex items-center justify-start gap-1'>
                           <FontAwesomeIcon icon={faStar} className='w-3 h-3 text-yellow-400 rounded-full'></FontAwesomeIcon>
                           <FontAwesomeIcon icon={faStar} className='w-3 h-3 text-yellow-400 rounded-full'></FontAwesomeIcon>
                           <FontAwesomeIcon icon={faStar} className='w-3 h-3 text-yellow-400 rounded-full'></FontAwesomeIcon>
                           <FontAwesomeIcon icon={faStar} className='w-3 h-3 text-yellow-400 rounded-full'></FontAwesomeIcon>
                           <FontAwesomeIcon icon={faStar} className='w-3 h-3 text-gray-200 rounded-full'></FontAwesomeIcon>
                        </div>
                     </div>
                     {/* Description */}
                     <div className='flex items-start justify-start gap-2 mt-2 flex-col'>
                        <p className={`text-gray-500 font-semibold  ${product.discount > 0 && 'text-red-500'} `}>{formatVNDCurrency(product.price - product.price * product.discount / 100)}</p>
                        {product.discount > 0 && <div className='flex gap-2 items-center'>
                           {product.discount > 0 && <p className='text-[12px] p-2 rounded-lg bg-gray-200'>-{product.discount}%</p>}
                           <p className='text-gray-500 font-semibold text-[12px] line-through'>{formatVNDCurrency(product.price)}</p>
                        </div>}
                     </div>
                  </div>
               </Link>
            ))
         }
      </div >
   )
}

export default CollectionSlider

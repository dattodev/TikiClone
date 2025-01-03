"use client"
import Filter from '@/components/category/Filter'
import SubCategoryBar from '@/components/category/SubCategoryBar'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

function CategoryPage() {
   const { id } = useParams()

   // Generate a subcategory data about phones
   const categories = [
      {
         id: 1,
         title: 'Điện thoại',
         image: 'https://salt.tikicdn.com/ts/upload/2f/52/8e/00ab5fbea9d35fcc3cadbc28d7c6b14e.png'
      },
      {
         id: 2,
         title: 'Tablet',
         image: 'https://salt.tikicdn.com/ts/upload/72/8d/23/a810d76829d245ddd87459150cb6bc77.png'
      },
      {
         id: 3,
         title: 'Phụ kiện',
         image: 'https://salt.tikicdn.com/ts/upload/8b/a4/9f/84d844f70e365515b6e4e3e745dac1d5.png'
      },
      {
         id: 4,
         title: 'Laptop',
         image: 'https://salt.tikicdn.com/ts/upload/8b/a4/9f/84d844f70e365515b6e4e3e745dac1d5.png'
      },
      {
         id: 5,
         title: 'PC',
         image: 'https://salt.tikicdn.com/ts/upload/8b/a4/9f/84d844f70e365515b6e4e3e745dac1d5.png'
      },
   ]

   // Generate a filter data for phones about ROM, brands, camera, price, etc.
   const filters = [
      {
         id: 1,
         title: 'RAM',
         options: [
            {
               id: 1,
               title: '2GB'
            },
            {
               id: 2,
               title: '4GB'
            },
            {
               id: 3,
               title: '8GB'
            },
            {
               id: 4,
               title: '16GB'
            },
         ]
      },
      {
         id: 2,
         title: 'ROM',
         options: [
            {
               id: 5,
               title: '16GB'
            },
            {
               id: 6,
               title: '32GB'
            },
            {
               id: 7,
               title: '64GB'
            },
            {
               id: 8,
               title: '128GB'
            },
         ]
      },
      {
         id: 3,
         title: 'Camera',
         options: [
            {
               id: 9,
               title: '2MP'
            },
            {
               id: 10,
               title: '4MP'
            },
            {
               id: 11,
               title: '8MP'
            },
            {
               id: 12,
               title: '16MP'
            },
         ]
      },
      {
         id: 4,
         title: 'Price',
         options: [
            {
               id: 13,
               title: '1.000.000đ - 5.000.000đ'
            },
            {
               id: 14,
               title: '5.000.000đ - 10.000.000đ'
            },
            {
               id: 15,
               title: '10.000.000đ - 20.000.000đ'
            },
            {
               id: 16,
               title: '20.000.000đ - 30.000.000đ'
            },
         ]
      },
      {
         id: 5,
         title: 'Brand',
         options: [
            {
               id: 17,
               title: 'Apple'
            },
            {
               id: 18,
               title: 'Samsung'
            },
            {
               id: 19,
               title: 'Xiaomi'
            },
            {
               id: 20,
               title: 'Oppo'
            },
         ]
      }
   ]

   const sorts = [
      {
         id: 1,
         title: 'Mới nhất'
      },
      {
         id: 2,
         title: 'Giá thấp đến cao'
      },
      {
         id: 3,
         title: 'Giá cao đến thấp'
      },
      {
         id: 4,
         title: 'Bán chạy nhất'
      }
   ]

   return (
      <div className='px-[80px] py-4 bg-[var(--background)]'>
         {/* Slug: Trang chu > Dien thoai > ... */}
         <div className='text-sm text-gray-400 flex items-center justify-start gap-2'>
            <Link href={''}>Trang chủ</Link>
            <FontAwesomeIcon icon={faChevronRight} className='w-2 h-2'></FontAwesomeIcon>
            <Link href={''} className='text-blue-500'>Điện thoại</Link>
         </div>
         {/* Subcategory bar */}
         <div className="w-full h-full gap-4 bg-[var(--background)] py-4 flex items-start justify-start">
            {/* Category bar */}
            <div className="w-[240px] min-h-[100vh] rounded-lg flex flex-col gap-4">
               <SubCategoryBar categories={categories} title={"Khám phá theo danh mục"} />
            </div>
            {/* Product sections */}
            <div className="flex-1 overflow-hidden min-h-[100vh] rounded-lg">
               <div className='p-4 rounded-lg bg-white'>
                  <Filter filters={filters} sorts={sorts} />
               </div>
            </div>
         </div>
      </div>
   )
}

export default CategoryPage

"use client"
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

function Filter({ filters, sorts }) {
   const [showBoard, setShowBoard] = useState(null)
   const [filterChosen, setFilterChosen] = useState([]);



   const checkInclude = (filterId, optionId) => {
      console.log(filterId)
      console.log(optionId)
      // Tìm filter có id trùng với filterId
      const matchedFilter = filterChosen.find((item) => item.id === filterId);

      if (matchedFilter) {
         // Kiểm tra xem option có trong filter không
         const matchedOption = matchedFilter.options.filter((option) => option.id === optionId);
         console.log(matchedOption)
         return matchedOption.length > 0 ? matchedOption[0].id : false;
      }
      return false; // Trả về false nếu không tìm thấy
   };


   useEffect(() => {
      console.log(filterChosen)
   }, [filterChosen])


   return (
      <div className='flex flex-col relative'>
         <div className='flex items-start justify-start gap-2 border-b border-gray-200 w-full'>
            {filters.length > 0 && filters.map((filter) => {
               if (filter.title !== 'Price') {
                  return <div key={filter.id} className='p-4'>
                     <h1 className='text-[12px] text-gray-500 mb-1'>{filter.title}</h1>
                     <div className='flex items-start justify-start gap-2 flex-wrap border-e border-gray-200 pe-4'>
                        {filter.options.slice(0, 2).map((option) => (
                           <button key={option.id} className={`py-2 px-3 border border-gray-200 flex items-center justify-center rounded-full text-sm hover:bg-gray-100 transition-all duration-300 ease-linear ${filterChosen.length > 0 && checkInclude(filter.id, option.id) === option.id && 'bg-blue-500 text-white border-blue-500'}`}

                              onClick={() => {
                                 setFilterChosen([...filterChosen, filter])
                              }}
                           >{option.title}</button>
                        ))}
                        <button className='p-3 relative flex items-center justify-center border border-gray-200 rounded-full text-sm hover:bg-gray-100 transition-all duration-300 ease-linear'
                           onClick={() => setShowBoard(showBoard === filter.id ? null : filter.id)}
                        >
                           <FontAwesomeIcon icon={faChevronDown} className='w-2 h-2'></FontAwesomeIcon>

                           {/* */}
                           {showBoard && showBoard === filter.id && <div className='absolute top-0 mt-12 bg-white p-4 border border-gray-200 rounded-lg z-10 shadow-lg'>
                              <div className='flex items-start justify-start gap-2'>
                                 {filter.options.map((option) => (
                                    <button key={option.id} className='py-2 px-3 border border-gray-200 flex items-center justify-center rounded-full text-sm hover:bg-gray-100 transition-all duration-300 ease-linear'
                                       onClick={(e) => {
                                          e.stopPropagation();
                                          setFilterChosen([...filterChosen, filter])
                                       }}
                                    >{option.title}</button>
                                 ))}
                              </div>
                              <div className='mt-4 flex items-center justify-center gap-2'>
                                 <button className='p-2 border border-blue-500 text-blue-500 flex items-center justify-center rounded-lg text-sm hover:bg-blue-100 transition-all duration-300 ease-linear'
                                    onClick={() => setShowBoard(null)}
                                 >
                                    Xóa lọc
                                 </button>
                                 <button className='p-2 border border-blue-500 text-white flex items-center justify-center rounded-lg text-sm hover:bg-blue-400 bg-blue-500 transition-all duration-300 ease-linear'>
                                    Xem kết quả
                                 </button>
                              </div>
                           </div>}
                        </button>
                     </div>
                  </div>
               }
            })}
            <div className='p-4'>
               <h1 className='text-[12px] text-gray-500 mb-1'>{"Bộ lọc"}</h1>
               <div className='flex items-start justify-start gap-2 flex-wrap'>
                  <button className='p-2 border border-gray-200 flex text-sm gap-1 items-center justify-center rounded-lg hover:bg-gray-100 transition-all duration-300 ease-linear'>
                     <h1 className='text-gray-500'>Tất cả</h1>
                  </button>
               </div>
            </div>
         </div >
         <div className='flex items-center justify-end'>
            {/* sorts */}
            <div className='flex items-center justify-start gap-2 mt-4'>
               <h1 className='text-[12px] text-gray-500'>Sắp xếp theo</h1>
               <div className='flex items-center justify-start gap-2'>
                  {sorts.map((sort) => (
                     <button key={sort.id} className='p-2 border border-gray-200 flex items-center justify-center rounded-lg text-sm hover:bg-gray-100 transition-all duration-300 ease-linear'>
                        <h1 className='text-gray-500'>{sort.title}</h1>
                     </button>
                  ))}d
               </div>
            </div>
         </div>
      </div >
   )
}

export default Filter

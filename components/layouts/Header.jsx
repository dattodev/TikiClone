"use client";

import React from 'react'
import SubBanner from '../header/SubBanner'
import Logo from '../header/Logo'
import SearchBox from '../header/SearchBox'
import Category from '../header/Category'
import AccountAction from '../header/AccountAction'
import Location from '../header/Location';
import Commitment from '../header/Commitment';
import { icon } from '@fortawesome/fontawesome-svg-core';






const headerCategory = [
   {
      id: 1,
      name: 'điện gia dụng',
   },
   {
      id: 2,
      name: 'xe cộ',
   },
   {
      id: 3,
      name: 'mẹ & bé',
   },
   {
      id: 4,
      name: 'khỏe đẹp',
   },
   {
      id: 5,
      name: 'nhà cửa',
   },
   {
      id: 6,
      name: 'sách'
   },
   {
      id: 7,
      name: 'thời trang'
   },
   {
      id: 8,
      name: 'thể thao'
   },
   {
      id: 9,
      name: 'điện tử'
   },
]

const subBanner = [
   {
      id: 1,
      title: 'Freeship đơn từ 45K',
      content: 'Đơn hàng từ   45K, giảm nhiều hơn cùng FREESHIP XTRA',
   },
   {
      id: 2,
      title: 'Ưu đãi thêm',
      content: 'Ưu đãi thêm 5% cho đơn từ 500K',
   },
   {
      id: 3,
      title: 'Ưu đãi thêm',
      content: 'Ưu đãi thêm 10% cho đơn từ 1 triệu',
   },
]

const commitment = [
   {
      id: 1,
      title: '100% hàng thật',
      content: '100% hàng thật',
      icon: 'https://salt.tikicdn.com/ts/upload/96/76/a3/16324a16c76ee4f507d5777608dab831.png'
   },
   {
      id: 2,
      title: 'Freeship mọi đơn',
      content: 'Freeship mọi đơn',
      icon: 'https://salt.tikicdn.com/ts/upload/11/09/ec/456a2a8c308c2de089a34bbfef1c757b.png'
   },
   {
      id: 3,
      title: 'Hoàn 200% nếu hàng giả',
      content: 'Hoàn 200% nếu hàng giả',
      icon: 'https://salt.tikicdn.com/ts/upload/0b/f2/19/c03ae8f46956eca66845fb9aaadeca1e.png'
   },
   {
      id: 4,
      title: '30 ngày đổi trả',
      content: '30 ngày đổi trả',
      icon: 'https://salt.tikicdn.com/ts/upload/3a/f4/7d/86ca29927e9b360dcec43dccb85d2061.png'
   },
   {
      id: 5,
      title: 'Giao nhanh 2h',
      content: 'Giao nhanh 2h',
      icon: 'https://salt.tikicdn.com/ts/upload/87/98/77/fc33e3d472fc4ce4bae8c835784b707a.png'
   },
   {
      id: 6,
      title: 'Giá siêu rẻ',
      content: 'Giá siêu rẻ',
      icon: 'https://salt.tikicdn.com/ts/upload/6a/81/06/0675ef5512c275a594d5ec1d58c37861.png'
   }
]






function Header() {
   return (
      <div className='w-full bg-white'>
         <SubBanner subBanner={subBanner} />
         <div className="w-full flex items-center justify-center px-[80px]">
            <Logo />
            <div className="flex flex-1 items-center justify-center flex-col py-3">
               <div className='w-full px-6 flex items-center justify-between gap-4'>
                  {/* Search box */}
                  <SearchBox commitment={commitment} />
                  {/* Account actions */}
                  <AccountAction />
               </div>
               <div className='w-full px-6 flex items-center justify-between mt-3'>
                  {/* Header category */}
                  <Category categories={headerCategory} />
                  {/* Location */}
                  <Location location={'Q.1, P.Bến Nghé, Hồ Chí Minh'} />
               </div>
            </div>
         </div>
         { /* Commitment */}
         <div className='w-full'>
            <Commitment commitment={commitment} />
         </div>
      </div>
   )
}

export default Header

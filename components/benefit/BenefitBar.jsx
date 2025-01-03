import React from 'react'
import BenefitBarItem from './BenefitBarItem';

function BenefitBar() {
   // Tiện ích
   const benefits = [
      {
         id: 1,
         title: 'Ưu đãi thẻ, ví',
         description: 'Ưu đãi thẻ, ví',
         icon: 'https://salt.tikicdn.com/cache/100x100/ts/upload/1e/27/a7/e2c0e40b6dc45a3b5b0a8e59e2536f23.png.webp',
      },
      {
         id: 2,
         title: 'Đóng tiền, nạp thẻ',
         description: 'Đóng tiền, nạp thẻ',
         icon: 'https://salt.tikicdn.com/cache/100x100/ts/upload/4d/a3/cb/c86b6e4f17138195c026437458029d67.png.webp',
      },
      {
         id: 3,
         title: 'Mua trước trả sau',
         description: 'Mua trước trả sau',
         icon: 'https://salt.tikicdn.com/cache/100x100/ts/tmp/6f/4e/41/93f72f323d5b42207ab851dfa39d44fb.png.webp',
      },
   ];

   return (
      <div className='flex items-start justify-start flex-col bg-white p-4 rounded-lg'>
         {/* Category */}
         <h3 className='text-sm font-semibold'>Tiện ích</h3>
         {benefits.map((benefit) => (
            <BenefitBarItem key={benefit.id} benefit={benefit} />
         ))}
      </div>
   )
}

export default BenefitBar

"use client";

import React from 'react'
import logo from '../../app/assets/logos/logo.png'
import Image from 'next/image'
function Logo() {
   return (
      <div className='flex items-center justify-center flex-col'>
         <Image src={logo} alt='logo' className='w-[90px]' />
         <h1 className='font-semibold text-blue-800 text-sm'>Tốt & Nhanh</h1>
      </div>
   )
}

export default Logo

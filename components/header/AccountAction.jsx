"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from '../customs/Button'
import { faHome, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import CartButton from '../customs/CartButton'

function AccountAction() {
   const IconHome = () => <FontAwesomeIcon icon={faHome} className="w-4 h-4 text-blue-500" />
   const IconCart = () => <FontAwesomeIcon icon={faShoppingCart} className="w-4 h-4 text-blue-500" />
   const IconUser = () => <FontAwesomeIcon icon={faUser} className="w-4 h-4 text-blue-500" />

   return (
      <div className="flex items-center justify-center gap-2">
         <Button title={"Trang chủ"} className={"text-sm p-2 rounded-lg"} icons={<IconHome />} />
         <Button title={"Tài khoản"} className={"text-sm p-2 rounded-lg"} icons={<IconUser />} />
         <CartButton title={"Giỏ hàng"} className={"text-sm p-2 rounded-lg"} icons={<IconCart />} />
      </div>
   )
}

export default AccountAction

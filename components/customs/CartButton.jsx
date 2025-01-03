"use client";

import React from 'react'
import "./css/button.css"
function CartButton({ icons, title, onClick, className, amount = 0 }) {
   return (
      <button
         className={`btn btn-primary hover:bg-blue-50 transition-all duration-300 ease-linear ${className}`}
         onClick={onClick}
      >
         {icons && <span className="me-2">{icons}</span>}
         {title} ({amount})</button>

   )
}

export default CartButton

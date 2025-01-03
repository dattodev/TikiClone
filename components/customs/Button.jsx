"use client";
import React from 'react'
import "./css/button.css"
function Button({ icons, title, onClick, className }) {
   return (
      <button
         className={`btn btn-primary hover:bg-blue-50 transition-all duration-300 ease-linear ${className}`}
         onClick={onClick}
      >
         {icons && <span className="me-2">{icons}</span>}
         {title}</button>
   )
}

export default Button

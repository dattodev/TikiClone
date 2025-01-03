"use client";

import React from 'react'
import Link from '../customs/Link'

function Category({ categories }) {
   return (
      <div className="flex flex-wrap justify-start gap-3 items-center">
         {categories.map((category,) => (
            <Link key={category.id} title={category.name} path={"/category/" + category.id} />
         ))}
      </div>
   )
}

export default Category

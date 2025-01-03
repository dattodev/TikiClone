"use client";

import React from 'react'
import NextLink from 'next/link';
function Link({ title, path }) {
   return (
      <NextLink href={path} className="transition-all duration-300 ease-linear text-sm text-gray-500 capitalize">{title}</NextLink>
   )
}

export default Link

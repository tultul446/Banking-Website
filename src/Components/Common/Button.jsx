import React from 'react'
import { cn } from './../lib/utils/index';




const Button = ({children , className }) => {
  return (
    <>
      <button className={cn( "max-w-[200px] md::h-[42px]   bg-[#c3f00e] py-3 px-6 md:px-10 gap-3 rounded-3xl text-[#0a0a10] text-md font-bold" , className
     )} >
        {children}
      </button>
    </>
  )
}

export default Button

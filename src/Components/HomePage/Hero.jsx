import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import Button from '../Common/Button';


const Hero = () => {
  return (
  <section className='grid md:grid-cols-2 container gap-3 p-5 -mt-46 xl:-mt-76'>
    {/* left side */}
    <section className='mx-auto xl:px-9 md:px-5 px-3'>
      <div className='flex bg-[#262626] w-auto md:w-[353px] md:h-[44px] h-auto text-center items-center justify-center md:gap-[6px] right-[20px] left-[12px] top-[10px] bottom-[10px] rounded-[61px] md:p-2 mx-5'>
        <span className='w-[24px] h-[24px] text-[#CAFF33]  mt-2'><FaCheckCircle /></span>
        <span className='text-[#FFFFFF] xl:text-[18px] 
        text-[12px] font-[300]'>No LLC Required, No Credit Check.</span>
      </div>
       <div>
        <h1 className='w-auto text-[#FFFFFF] text-[24px] md:text-start text-center sm:text-[24px] md:text-[38px] xl:text-[40px] size-[500] font-medium '>Welcome to YourBank
Empowering Your <span className='text-[#CAFF33]'>Financial Journey</span></h1>
        <p className='text-[#E4E4E7] text-sm md:text-start text-center'>At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.</p>
       </div>

      <div className='mt-6 md:ml-0 ml-16'>
     <Button>Open Account</Button>
      </div>
    </section>


    {/* right side */}
    <section className='text-white'>Right</section>
  </section>
  )
}

export default Hero

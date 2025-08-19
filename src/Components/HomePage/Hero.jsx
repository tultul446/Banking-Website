import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import Button from '../Common/Button';
import { AiOutlinePlus } from "react-icons/ai";
import { VscArrowSwap } from "react-icons/vsc";







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
        <h1 className='w-auto text-[#FFFFFF] text-[24px] md:text-start text-center sm:text-[24px] md:text-[38px] xl:text-[40px] size-[500] font-medium '>Welcome to YourBank</h1>
        <h3 className='w-auto text-[#FFFFFF] text-[24px] md:text-start text-center sm:text-[20px] md:text-[28px] xl:text-[32px] size-[500] font-medium '>
Empowering Your <span className='text-[#CAFF33]'>Financial<br/> Journey</span></h3>
        <p className='text-[#E4E4E7] text-sm md:text-start text-center'>At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.</p>
       </div>

      <div className='mt-6 md:ml-0 ml-16'>
     <Button>Open Account</Button>
      </div>
    </section>


    {/* right side */}
    <section className='text-white'>
     <div className='flex items-center bg-[#22251B] w-[188px] h-76px] text-center px-2 py-1 rounded-[11px] gap-2 z-50'>
      <div><AiOutlinePlus className='bg-[#CAFF33] w-[20px] md:w-[30px] h-[20px] md:h-[30px] rounded-full  text-gray-900'/></div>

      <div>
        <p className='text-[14px] md:text-[17px] font-semibold'>+ $5,00,000 </p>
        <p className='text-[#E4E4E7] text-[9px]  md:text-[12px]'>Monthly Income </p>
      </div>

     </div>
    
{/* card area */}
<div className='w-full relative '>
  <img src="../abstractright.png" alt="" className='md:ml-24 top-0 -z-50 w-[417px] h-[382px]'/>
<div className=' bg-gray-950 absolute  top-1 -z-0
  md:right-[14rem] md:left-[6%] mx-auto w-auto h-auto  p-4 bg-Background rounded-[11px] shadow shadow-[#3f5306] '>


<div >
  <h3 className='font-medium text-[#FFFFFF] text-[17px]'>Your Transactions</h3>

  <div className='border border-[#262424] px-4 py-2 rounded-[10px] flex justify-between items-center  mt-2 z-50' >
<div className='flex items-center gap-2 top-2'>
<VscArrowSwap className='bg-[#CAFF33] w-[30px] h-[30px] rounded-full p-[8px] text-black '/>
<span>
  <p className='text-[13px]'>Transaction</p>
  <p className='text-[15px] font-semibold'>Joel Kenley</p>
</span>
</div>
<div className='font-semibold'>-$68.00</div>
  </div>

 <div className='border-b border-[#2b2828] mx-3 px-3 py-2 rounded-[10px] flex justify-between items-center  opacity-[50%] -mt-2 -z-10' >
<div className='flex items-center gap-2 top-2'>
<VscArrowSwap className='bg-[#CAFF33] w-[27px] h-[27px] rounded-full p-[8px] text-black '/>
<span>
  <p className='text-[12px]'>Transaction</p>
  <p className='text-[14px] font-semibold'>Joel Kenley</p>
</span>
</div>
<div className='font-semibold'>-$68.00</div>
  </div>
 <div className='border-b border-[#4b4545] mx-2 px-4 py-1 rounded-[10px] flex justify-between items-center  opacity-[20%] -mt-2 -z-10' >
<div className='flex items-center gap-2 top-2'>
<VscArrowSwap className='bg-[#CAFF33] w-[24px] h-[24px] rounded-full p-[8px] text-black '/>
<span>
  <p className='text-[10px]'>Transaction</p>
  <p className='text-[13px] font-semibold'>Joel Kenley</p>
</span>
</div>
<div className='font-semibold'>-$68.00</div>
  </div>



<div>
  <h3 className='mt-3 font-semibold '>Money Exchange</h3>
  <table className='border-zinc-600 border rounded-xl'>


  </table>
</div>

</div>


</div>

</div>




    </section>
  </section>
  )
}

export default Hero

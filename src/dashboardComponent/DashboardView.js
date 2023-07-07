import React from 'react'
import { FaSearch , FaRegBell , FaEnvelope  } from 'react-icons/fa'

function DashboardView(prop) {
  return (
    <div className='flex itmes-center justify-between h-[50px] shadow-lg px-[25px] '>
        <div className='flex items-center rounded-[5px] text-bold font-bold '>
           Dashboard , Hello {prop.message}
        </div>    
        <div className='flex items-center gap-[15px] relative'> 
            <input type='text ' className='bg-[#F8F9FC] h-[20px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20]' placeholder='Search '></input>
            <div className=' h-[20px] px-[14px] flex items-center justify-center'>
                <FaSearch></FaSearch>
            </div>
            <FaRegBell></FaRegBell>
            <div className='h-[30px] w-[30px] rounded-full bg-[gray] flex items-center justify-center relative '><img src='' alt=''></img></div>
        </div>
        
    </div>
  )
}

export default DashboardView
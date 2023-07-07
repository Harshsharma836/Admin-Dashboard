import React from 'react'
import {FaTachometerAlt} from "react-icons/fa";
import { FaMoneyBill } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';




const Sidebar = () => {
  return (
    <div className='bg-[#000000] h-screen px-[25px] flex flex-col justify-between'>
  <div>
    <div className='px-[15px] py-[30px] flex-center justify-center'>
      <h1 className='text-white text-[30px] leading-[24px] font-extrabold cursor-pointer'>Board</h1>
    </div>

    <div className="text-white flex items-center gap-[15px] py-[20px] ">
      <FaTachometerAlt />
      <p className='text-[14px] leading-[20px] font-bold'>Dashboard</p>
    </div>

    <div className="text-white flex items-center gap-[15px] py-[20px] ">
      <FaMoneyBill />
      <p className='text-[14px] leading-[20px] font-bold'>Transactions</p>
    </div>

    <div className="text-white flex items-center gap-[15px] py-[20px] ">
      <FaCalendarAlt />
      <p className='text-[14px] leading-[20px] font-bold'>Schedules</p>
    </div>

    <div className="text-white flex items-center gap-[15px] py-[20px] ">
      <FaUser />
      <p className='text-[14px] leading-[20px] font-bold'>Users</p>
    </div>
    <div className="text-white flex items-center gap-[15px] py-[20px] ">
      <FaStar />
      <p className='text-[14px] leading-[20px] font-bold'>Settings</p>
    </div>
  </div>

  <div>
    <div className="text-white flex items-center gap-[15px] py-[20px] ">
      <p className='text-[14px] leading-[20px] font-bold'>Help</p>
    </div>
    <div className="text-white flex items-center gap-[15px] py-[20px] ">
      <p className='text-[14px] leading-[20px] font-bold'>Contact Us</p>
    </div>
  </div>
</div>

  )
}

export default Sidebar
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaDollarSign } from 'react-icons/fa';
import { FaMoneyBill } from 'react-icons/fa';
import { FaThumbsUp, FaHeart } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import PieComponent from './PieComponent';
import TotalSchedule from './TotalSchedule';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];



function Main() {
  return (
    <div className='pt-[25px] px-[25px] bg-[#F8F9FC] p'>
        <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
            <div className='bg-green-300  h-[90px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform  hover:scale=[103%] transition duration-300'>
                <div>
                    <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold '>Total Revenue</h2>
                    <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$40,000</h1>
                </div>
                <div className='h-16'><FaDollarSign></FaDollarSign></div>
            </div>
            <div className='bg-green-300  h-[90px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform  hover:scale=[103%] transition duration-300'>
                <div>
                    <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold '>Total transition</h2>
                    <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$40,000</h1>
                </div>
                <div className='h-16'><FaMoneyBill /></div>
            </div>
            <div className='bg-green-300  h-[90px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform  hover:scale=[103%] transition duration-300'>
                <div>
                    <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold '>Total Likes</h2>
                    <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$40,000</h1>
                </div>
                <div className='h-16'><FaThumbsUp></FaThumbsUp></div>
            </div>
            <div className='bg-green-300  h-[90px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform  hover:scale=[103%] transition duration-300'>
                <div>
                    <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold '>Total Users</h2>
                    <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$40,000</h1>
                </div>
                <div className='h-16'><FaUserCircle></FaUserCircle></div>
            </div>
        </div>

        <div className=' flex mt-[22px] w-full gap-[30px] flex justify-between'>
            <div className='basis-[100%] border bg-white shadow-md cursor-pointer rounded-[4px]' >
            
            <div className='bg-[#F8F9FC] flex items-center justify-between  py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
                    <h2 className='font-bold'>Activities</h2>
            </div>        
            <div>
            <LineChart
                width={1200}
                height={150}
                data={data}
                margin={{    
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
            </div>

            </div>
        </div>
        <br></br>
        <div className="flex h-[235px]">
         <div className="w-[40%] mr-20 border bg-white shadow-md cursor-pointer rounded-[4px]">
        <div className="bg-[#F8F9FC] flex items-center justify-content py-[15px] px-[20px] border-b-[1px] border-[#EDEEDE]">
          <h2>Top Products</h2>
        </div>
        <div className="pl-0 h-[200px]">
          <PieComponent></PieComponent>
        </div>
      </div>
      <div className="w-[60%] ml-20 border bg-white shadow-md cursor-pointer rounded-[4px]">
        {/* Content for the right div */}
        <TotalSchedule></TotalSchedule>
      </div>
</div>





  </div>  



  )
}

export default Main
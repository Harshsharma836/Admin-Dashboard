import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const response = await axios.get("https://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=4");

  const data = [
      { name: 'Group A', value: response.data[0] },
      { name: 'Group B', value: response.data[1] },
      { name: 'Group C', value: response.data[2] },
      { name: 'Group D', value: response.data[3] },
    ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };


function PieComponent() {
  return (
    <div className='flex items-center justify-content'>
          <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="30%"
            cy="30%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        {/* <div className='grid grid-rows-4'>
              {
                data.map((items)=>(
                  <p>{items.name}</p>
                ))
              }
          </div> */}
    </div>
    
  )
}

export default PieComponent

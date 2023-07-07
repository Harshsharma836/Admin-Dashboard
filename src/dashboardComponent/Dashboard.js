import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar.js';
import DashboardView from './DashboardView.js';
import { Outlet } from 'react-router-dom';
import Main from './Main.js';

const Dashboard = () => {
  const location = useLocation();
  const decodedData = location.state?.decodedData; // Access the decodedData prop
  return (
    <div className='flex'>
        <div className='basis-[12%] h-[100vh] border'>
            <Sidebar></Sidebar>
        </div>
        <div className='basis-[88%] border'>
            <DashboardView message={decodedData.given_name}></DashboardView>
            <div>
              <Outlet></Outlet>
            </div>
            <Main></Main>
        </div>
    </div>

  );
};

export default Dashboard;

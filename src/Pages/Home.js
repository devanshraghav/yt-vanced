import React from 'react'
import Sidebar from '../components/Body/Sidebar';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Home;

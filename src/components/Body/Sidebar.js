import React from 'react'
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const showMenu = useSelector((store)=>store.MenuToogler.isMenuOpen);
  // Early return
  if (!showMenu){
    return null;
  }
  return (
    <div className='px-4 left-0 sticky'>
      <ul className='flex flex-col gap-1 px-4'>
        <li>Home</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
        <h1 className='font-bold mx-2 px-2 pt-4'>Subscription</h1>
        <ul className='flex flex-col gap-1 p-4'>
            <li>Library</li>
            <li>History</li>
            <li>Shorts</li>
        </ul>

        <h1 className='font-bold mx-2 px-2'>Explore</h1>
        <ul className='flex flex-col gap-1 p-4'>
            <li>Library</li>
            <li>History</li>
            <li>Shorts</li>
        </ul>

        <h1 className='font-bold mx-2 px-2'>More</h1>
        <ul className='flex flex-col gap-1 p-4'>
            <li>Library</li>
            <li>History</li>
            <li>Shorts</li>
        </ul>
    </div>
  )
}

export default Sidebar;
import React from 'react';
import { FaHome, FaSearch, FaBook, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar-mobile font-sans p-4 fixed bottom-0 left-0 right-0 h-[14vh] bg-black shadow-lg rounded-tr-lg rounded-tl-lg flex justify-around items-center text-gray-700 2xl:hidden">
      <div className='flex flex-col items-center hover:text-white'>
        <FaHome className='text-2xl text-gray-500 hover:text-white transition duration-200 ease-in-out'/>
        <p className='mt-1 text-sm'>Home</p>
      </div>

      <div className='flex flex-col items-center hover:text-white'>
        <FaSearch className='text-2xl text-gray-500 hover:text-white transition duration-200 ease-in-out'/>
        <p className='mt-1 text-sm'>Search</p>
      </div>

      <div className="relative flex flex-col items-center hover:text-white ">
        <FaBook className="text-2xl text-gray-500 hover:text-white transition duration-200 ease-in-out" />
        <p className="mt-1 text-sm">Your Library</p>
      </div>

      <div className='flex flex-col items-center hover:text-white'>
        <FaUser className='text-2xl text-gray-500 hover:text-white transition duration-200 ease-in-out'/>
        <p className='mt-1 text-sm'>Your Bio</p>
      </div>
    </div>
  );
}

export default Navbar;

import React from 'react';
import { FaHome, FaSearch, FaBook, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar-mobile font-sans p-4 fixed bottom-0 left-0 right-0 h-[64px] bg-[#0E0E12] shadow-lg rounded-tr-lg rounded-tl-lg flex justify-around items-center text-gray-700 2xl:hidden">
      <div className='flex flex-col items-center hover:text-[#ECEDF0]'>
        <FaHome className=' text-[#6A7185] h-[24px] w-[24px] hover:text-[#ECEDF0] transition duration-200 ease-in-out'/>
        <p className='mt-1 text-[10px] '>Home</p>
      </div>

      <div className='flex flex-col items-center hover:text-[#ECEDF0]'>
        <FaSearch className=' text-[#6A7185]  h-[24px] w-[24px] hover:text-[#ECEDF0] transition duration-200 ease-in-out'/>
        <p className='mt-1 text-[10px] '>Search</p>
      </div>

      <div className="relative flex flex-col items-center hover:text-[#ECEDF0] ">
        <FaBook className="=  h-[24px] w-[24px] text-[#6A7185] hover:text-[#ECEDF0] transition duration-200 ease-in-out" />
        <p className="mt-1 text-[10px] ">Your Library</p>
      </div>

      <div className='flex flex-col items-center hover:text-[#ECEDF0]'>
        <FaUser className='  h-[24px] w-[24px] text-[#6A7185] hover:text-[#ECEDF0] transition duration-200 ease-in-out'/>
        <p className='mt-1 text-[10px] '>Your Bio</p>
      </div>
    </div>
  );
}

export default Navbar;

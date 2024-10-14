import React from 'react';
import { FaHome, FaSearch, FaUser } from 'react-icons/fa';
import { IoIosCart } from 'react-icons/io';
import { useCartContext } from './Context/CartContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const { cartLength } = useCartContext();

  const NavigateToHome = () => {
    navigate("/");
  };

  const NavigateToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="navbar-mobile fixed bottom-0 left-0 right-0 h-[12vh] bg-[#0E0E12] shadow-lg flex justify-around items-center text-gray-700 i 2xl:hidden z-10">

      <div className='flex flex-col justify-around items-center hover:text-[#ECEDF0] mt-2' onClick={NavigateToHome} aria-label="Home">
        <FaHome className='text-[#6A7185] h-[24px] w-[24px] hover:text-[#ECEDF0] transition duration-200 ease-in-out' />
        <p className='mt-1 text-[10px]'>Home</p>
      </div>

      <div className='flex flex-col items-center hover:text-[#ECEDF0] mt-2' aria-label="Search">
        <FaSearch className='text-[#6A7185] h-[24px] w-[24px] hover:text-[#ECEDF0] transition duration-200 ease-in-out' />
        <p className='mt-1 text-[10px]'>Search</p>
      </div>

      <div onClick={NavigateToCart} className="relative flex flex-col items-center hover:text-[#ECEDF0] mt-2" aria-label="Cart">
        {cartLength > 0 && (
          <span className="absolute top-0 right-0 w-4 h-4 text-xs flex items-center justify-center bg-main text-spotify-accent font-bold p-1 rounded-full">
            {cartLength}
          </span>
        )}
        <IoIosCart className="h-[24px] w-[24px] text-[#6A7185] hover:text-[#ECEDF0] transition duration-200 ease-in-out" />
        <p className="mt-1 text-[10px]">Cart</p>
      </div>

      <div className='flex flex-col items-center hover:text-[#ECEDF0] mt-2' aria-label="Your Bio">
        <FaUser className='h-[24px] w-[24px] text-[#6A7185] hover:text-[#ECEDF0] transition duration-200 ease-in-out' />
        <p className='mt-1 text-[10px]'>Your Bio</p>
      </div>
    </div>
  );
}

export default Navbar;

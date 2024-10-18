import React from 'react';
import { FaBars, FaHome, FaInfo, FaSearch } from 'react-icons/fa';
import { IoIosCart } from 'react-icons/io';
import { useCartContext } from './Context/CartContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartLength } = useCartContext();

  const NavigateToHome = () => {
    navigate("/");
  };

  const NavigateToCart = () => {
    navigate("/cart");
  };

  // Determine active state based on the current route
  const isActive = (path) => location.pathname === path;

  return (
    <div className="navbar-mobile fixed bottom-0 left-0 right-0 h-[12vh] bg-[#0E0E12] shadow-lg flex justify-around items-center text-[#ECEDF0] z-10">

      <div className={`flex flex-col justify-around items-center mt-2 ${isActive("/") ? "text-[#1ED760]" : ""}`} onClick={NavigateToHome} aria-label="Home">
        <FaHome className={`text-[#ECEDF0] h-[24px] w-[24px] transition duration-200 ease-in-out ${isActive("/") ? "text-[#1ED760]" : ""}`} />
        <p className='mt-1 text-[10px]'>Home</p>
      </div>

      <div className={`flex flex-col items-center mt-2 ${isActive("/search") ? "text-[#1ED760]" : ""}`} aria-label="Search">
        <FaSearch className={`text-[#ECEDF0] h-[24px] w-[24px] transition duration-200 ease-in-out ${isActive("/search") ? "text-[#1ED760]" : ""}`} />
        <p className='mt-1 text-[10px]'>Search</p>
      </div>

      <div onClick={NavigateToCart} className={`relative flex flex-col items-center mt-2 ${isActive("/cart") ? "text-[#1ED760]" : ""}`} aria-label="Cart">
        {cartLength > 0 && (
          <span className="absolute top-0 right-0 w-4 h-4 text-xs flex items-center justify-center bg-main text-spotify-accent font-bold p-1 rounded-full">
            {cartLength}
          </span>
        )}
        <IoIosCart className={`h-[24px] w-[24px] text-[#ECEDF0] transition duration-200 ease-in-out ${isActive("/cart") ? "text-[#1ED760]" : ""}`} />
        <p className="mt-1 text-[10px]">Cart</p>
      </div>

      <div onClick={() => navigate("/about")} className={`flex flex-col items-center mt-2 ${isActive("/about") ? "text-[#1ED760]" : ""}`} aria-label="Your Bio">
        <FaInfo className={`h-[24px] w-[24px] text-[#ECEDF0] transition duration-200 ease-in-out ${isActive("/about") ? "text-[#1ED760]" : ""}`} />
        <p className='mt-1 text-[10px]'>Info</p>
      </div>
    </div>
  );
}

export default Navbar;

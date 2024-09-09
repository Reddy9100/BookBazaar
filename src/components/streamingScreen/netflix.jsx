import React from 'react';
import backicon from '../../assets/back-icon.svg';
import netflixLogo from '../../assets/netflix-logo.svg';
import fronticon from '../../assets/front-icon.svg';
import view from '../../assets/view.svg';
import {useNavigate, Link } from 'react-router-dom';

const NetflixComponent = () => {

  const navigate = useNavigate()

  const NavigateToPlatformsGrid = () =>{
    navigate("/OttHome")
  }
  return (
    <div className='h-[89vh] overflow-y-auto pb-12 relative bg-[#0E0E12]'>
        {/* Header Section */}
        <div className='h-[240px] bg-gradient-to-b from-red-600 to-transparent relative'>
          
              <img src={backicon} onClick={NavigateToPlatformsGrid} alt="backicon" className='h-[24px] w-[24px] absolute top-4 left-4'/>
           
            <div className='flex justify-center items-center h-full'>
            <Link to="/ottNetflix"><img src={netflixLogo} alt="netflixLogo" className='h-[46px] w-auto' /> </Link>
            </div>
    
        </div>

        <div className=" -mt-16">
          <h1 className='text-[#ECEDF0] text-lg font-semibold mb-4 ml-5'>New On Netflix</h1>
          <div className="flex overflow-x-scroll px-[20px] scrollbar-hide gap-[10px]">
              {[
                "https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg",
                "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/bholaa-shankar-001.jpg",
                "https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg",
                "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/bholaa-shankar-001.jpg"
              ].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`pic${index + 1}`}
                  className="w-[154px] h-[216px] flex-shrink-0"
                />
              ))}
          </div>
        </div>
        
        {/* Streaming Shortly Section */}
        <div className=" mt-6">
          <h1 className='text-[#ECEDF0] text-lg ml-5 font-semibold mb-4'>Streaming Shortly</h1>
          <div className="flex overflow-x-scroll px-[20px] scrollbar-hide gap-[10px]">
              {[
                "https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg",
                "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/bholaa-shankar-001.jpg",
                "https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg",
                "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/bholaa-shankar-001.jpg"
              ].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`pic${index + 1}`}
                  className="w-[154px] h-[216px] flex-shrink-0"
                />
              ))}
          </div>
        </div>
        
        {/* Hotstar Section */}
        <div className=' mt-10'>
          <div className='flex justify-between items-center'>
              <h1 className='text-[#ECEDF0] ml-5 text-lg font-semibold'>Hotstar For You</h1>
              <img src={fronticon} alt='fronticon' className='w-[18px] mr-2 h-[18px] p-1 bg-[#0067B3] text-[#FFFFFF] rounded-full'/>
          </div>
          <div className="flex overflow-x-scroll  px-[20px] scrollbar-hide gap-[10px] mt-4">
              {[
                "https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg",
                "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/bholaa-shankar-001.jpg",
                "https://iansportalimages.s3.amazonaws.com/images/202310143069407.jpeg",
                "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/bholaa-shankar-001.jpg"
              ].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`pic${index + 1}`}
                  className="w-[154px] h-[216px] flex-shrink-0"
                />
              ))}
              <button className='w-[106px] h-[216px] flex-shrink-0 bg-[#222227] flex flex-col justify-center items-center'>
                  <img src={view} alt="view" className='text-white bg-[#0067B3] p-3 rounded-full w-10 h-10'/>
                  <p className='text-[#A9ADB9] text-xs font-semibold mt-2'>View More</p>
              </button>
          </div>
        </div>
    </div>
  );
};

export default NetflixComponent;

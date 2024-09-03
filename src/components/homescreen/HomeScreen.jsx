import React from 'react';
import { Carousel } from 'antd';
import NowOnScreen from './NowOnScreen';
import TopRated from './TopRated';
import ScreeningSoon from './ScreeningSoon';
import Advertisements from './Advertisements';
import DigitalPlatform from './DigitalPlatfoem'; // Fixed typo in the import
import GenreSection from './GenreSection';
import pic from '../../assets/gk1.jpg';
import logo from '../../assets/title.png';
import { IoMdNotifications } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";


const HomeScreen = () => {
  return (
    <>
    <div style={{background:"#0E0E12"}}>
      <Carousel
        autoplay
        dots
        dotPosition="bottom"
        className="rounded-lg shadow-lg"
      >
        <div className="relative h-[360px] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(14, 14, 18, 0) 0%, rgba(14, 14, 18, 0.91) 79%, #0E0E12 94%), url(${pic})`,
            }}
            
          />
          <div className="flex flex-col justify-end items-center h-full relative z-10 pb-4">
            <img src={logo} alt="logo" className="w-auto h-auto max-w-xs" />
            <ul className="flex justify-center pb-3 space-x-4 text-xs font-medium text-[#C5C8D0]">
              <li className="relative ">
                <span className="before:content-['•'] before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2 before:text-green-500 before:font-bold before:shadow-md before:text-lg">
                  Soon Up
                </span>
              </li>
              <li className="relative">
                <span className="before:content-['•'] before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2">
                  Romance
                </span>
              </li>
              <li className="relative">
                <span className="before:content-['•'] before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2">
                  Scifi
                </span>
              </li>
              <li className="relative">
                <span className="before:content-['•'] before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2">
                  Musical
                </span>
              </li>
              <li className="relative bg-gray-900 px-1 rounded-sm">
                <span className="before:content-['•'] before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2">
                  U/A
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative h-[360px] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(14, 14, 18, 0) 0%, rgba(14, 14, 18, 0.91) 79%, #0E0E12 94%), url(${pic})`,
            }}
          />
          <div className="flex flex-col justify-end items-center h-full relative z-10 pb-4">
            <img src={logo} alt="logo" className="w-auto h-auto max-w-xs" />
            <ul className="flex justify-center pb-3 space-x-4 text-xs font-medium text-[#C5C8D0]">
              <li className="relative ">
                <span className="before:content-['•'] before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2 before:text-green-500 before:font-bold before:shadow-md before:text-lg">
                  Soon Up
                </span>
              </li>
              <li className="relative">
                <span className="before:content-['•'] before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2">
                  Romance
                </span>
              </li>
              <li className="relative">
                <span className="before:content-['•'] before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2">
                  Scifi
                </span>
              </li>
              <li className="relative">
                <span className="before:content-['•'] before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2">
                  Musical
                </span>
              </li>
              <li className="relative bg-gray-900 px-1 rounded-sm">
                <span className="before:content-['•'] before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2">
                  U/A
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative h-[360px] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(14, 14, 18, 0) 0%, rgba(14, 14, 18, 0.91) 79%, #0E0E12 94%), url(${pic})`,
            }}
          />
          <div className="flex flex-col justify-end items-center h-full relative z-10 pb-4">
            <img src={logo} alt="logo" className="w-auto h-auto max-w-xs" />
            <ul className="flex justify-center pb-3 space-x-4 text-xs font-medium text-[#C5C8D0]">
              <li className="relative ">
                <span className="before:content-['•'] before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2 before:text-green-500 before:font-bold before:shadow-md before:text-lg">
                  Soon Up
                </span>
              </li>
              <li className="relative">
                <span className="before:content-['•'] before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2">
                  Romance
                </span>
              </li>
              <li className="relative">
                <span className="before:content-['•'] before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2">
                  Scifi
                </span>
              </li>
              <li className="relative">
                <span className="before:content-['•'] before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2">
                  Musical
                </span>
              </li>
              <li className="relative bg-gray-900 px-1 rounded-sm">
                <span className="before:content-['•'] before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2">
                  U/A
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Carousel>
      
        <div className="flex gap-2 mx-4 mt-4">
            <div className="flex justify-center items-center w-[80vw] p-2 bg-[#222227] rounded-md">
                <IoMdNotifications className='text-[#C5C8D0] text-md font-bold'/>
                <p className='text-[#C5C8D0] font-semibold ml-1'>Notify Me</p>
            </div>
            <div className="p-2 bg-[#222227] w-[15vw] flex justify-center items-center text-[#C5C8D0] rounded-md font-bold"><button><FaPlus /></button></div>
        </div>
    </div>
      
      <NowOnScreen />
      <TopRated />
      <ScreeningSoon />
      <Advertisements />
      <DigitalPlatform />
      <GenreSection />
    </>
  );
}

export default HomeScreen;

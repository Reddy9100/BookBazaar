import React from 'react';
import { Carousel } from "@material-tailwind/react";
import NowOnScreen from './NowOnScreen';
import TopRated from './TopRated';
import ScreeningSoon from './ScreeningSoon';
import Advertisements from './Advertisements';
import DigitalPlatform from './DigitalPlatfoem'; // Fixed typo in the import
import GenreSection from './GenreSection';
import pic from '../../assets/gk1.jpg';
import logo from '../../assets/title.png';
import notify from "../../assets/notify.svg";
import wish from "../../assets/wish.svg";
import unwish from "../../assets/unwish.svg";

const HomeScreen = () => {
  return (
    <>
      <div style={{ background: "#0E0E12" }} className=''>
        <Carousel
          autoplay
         
          loop
          className=" shadow-lg overflow-x-hidden"
          navigation={({ setActiveIndex, activeIndex }) => (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              {/* Custom navigation dots */}
              {Array.from({ length: 3 }).map((_, i) => (
                <span
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-[6px] h-[6px] mx-[2px] inline-block rounded-full ${
                    activeIndex === i ? 'bg-[#C5C8D0]' : 'bg-[#3F465D]'
                  }`}
                ></span>
              ))}
            </div>
          )}
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
              <ul className="flex text-xs justify-around items-center pb-5 space-x-4 font-bold text-[#C5C8D0]">
                <li className="relative ">
                  <span className="before:content-['•'] before:absolute font-bold before:-left-2 before:top-1/2 before:-translate-y-1/2 before:text-green-500">
                    Soon Up
                  </span>
                </li>
                <li className="relative">
                  <span className="before:content-['•'] before:absolute font-bold before:-left-2 before:top-1/2 before:-translate-y-1/2">
                    Romance
                  </span>
                </li>
                <li className="relative">
                  <span className="before:content-['•'] before:absolute font-bold before:-left-2 before:top-1/2 before:-translate-y-1/2">
                    Scifi
                  </span>
                </li>
                <li className="relative">
                  <span className="before:content-['•'] before:absolute font-bold before:-left-2 before:top-1/2 before:-translate-y-1/2">
                    Musical
                  </span>
                </li>
                <li className="relative bg-[#2B2D34] font-semibold h-[18px] w-[30px] flex justify-center items-center rounded-sm">
                  <span className="before:content-['•'] before:absolute font-bold before:-left-2 before:top-1/2 before:-translate-y-1/2">
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
              <ul className="flex text-xs justify-around items-center pb-5 space-x-4 font-bold text-[#C5C8D0]">
              <li className="relative ">
                  <span className="before:content-['•'] before:absolute font-bold before:-left-2 before:top-1/2 before:-translate-y-1/2 before:text-green-500">
                    Soon Up
                  </span>
                </li>
                <li className="relative">
                  <span className="before:content-['•'] before:absolute font-bold before:-left-2 before:top-1/2 before:-translate-y-1/2">
                    Romance
                  </span>
                </li>
                <li className="relative">
                  <span className="before:content-['•'] before:absolute font-bold before:-left-2 before:top-1/2 before:-translate-y-1/2">
                    Scifi
                  </span>
                </li>
                <li className="relative">
                  <span className="before:content-['•'] before:absolute font-bold before:-left-2 before:top-1/2 before:-translate-y-1/2">
                    Musical
                  </span>
                </li>
                <li className="relative bg-[#2B2D34] font-semibold h-[18px] w-[30px] flex justify-center items-center rounded-sm">
                  <span className="before:content-['•'] before:absolute font-bold before:-left-2 before:top-1/2 before:-translate-y-1/2">
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
              <ul className="flex text-xs justify-around items-center pb-5 space-x-4 font-bold text-[#C5C8D0]">
              <li className="relative ">
                  <span className="before:content-['•'] before:absolute font-bold before:-left-2 before:top-1/2 before:-translate-y-1/2 before:text-green-500">
                    Soon Up
                  </span>
                </li>
                <li className="relative">
                  <span className="before:content-['•'] before:absolute font-bold before:-left-2 before:top-1/2 before:-translate-y-1/2">
                    Romance
                  </span>
                </li>
                <li className="relative">
                  <span className="before:content-['•'] before:absolute font-bold before:-left-2 before:top-1/2 before:-translate-y-1/2">
                    Scifi
                  </span>
                </li>
                <li className="relative">
                  <span className="before:content-['•'] before:absolute font-bold before:-left-2 before:top-1/2 before:-translate-y-1/2">
                    Musical
                  </span>
                </li>
                <li className="relative bg-[#2B2D34] font-semibold h-[18px] w-[30px] flex justify-center items-center rounded-sm">
                  <span className="before:content-['•'] before:absolute font-bold before:-left-2 before:top-1/2 before:-translate-y-1/2">
                    U/A
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Carousel>

        <div className="flex mx-auto w-[320px] text-[14px] h-[48px] gap-2 p-3 mt-1">
          <div className="flex justify-center items-center w-[260px] h-[48px] bg-[#222227] rounded-md">
            <img src={notify} className="text-[#C5C8D0] text-md font-bold" />
            <p className="text-[#C5C8D0] font-semibold ml-2">Notify Me</p>
          </div>
          <div className="p-3 bg-[#222227] w-[15vw] h-[48px] flex justify-center items-center text-[#C5C8D0] rounded-md font-bold">
            <button>
              <img src={wish} />
            </button>
          </div>
        </div>
        <br />
      </div>

      <NowOnScreen />
      <TopRated />
      <ScreeningSoon />
      <Advertisements />
      <DigitalPlatform />
      <GenreSection />
    </>
  );
};

export default HomeScreen;

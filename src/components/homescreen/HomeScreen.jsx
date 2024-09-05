import React, { useState } from 'react';
import { Carousel } from 'antd';
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Update this to the actual number of slides

  const handleChange = (current) => {
    setCurrentSlide(current);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    carouselRef.current.goTo(index); // Navigate to the selected slide
  };

  const carouselRef = React.useRef();

  return (
    <>
      <div style={{ background: "#0E0E12" }}>
        <Carousel
          autoplay
          dots={false}
          ref={carouselRef}
          afterChange={handleChange}
          className="rounded-full shadow-lg"
        >
          {/* Carousel slides */}
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div className="relative h-[360px] w-full" key={index}>
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
                    <span className="before:content-['•'] before:absolute font-bold before:-left-2 before:top-1/2 before:-translate-y-1/2 before:text-green-500 before:font-bold before:shadow-md before:text-lg">
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
                    <span className="before:content-['•'] before:absolute font-bold before:-left-2 before:top-1/2 before:-translate-y-1/2" style={{ fontWeight: "500" }}>
                      U/A
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            
          ))}
          
        </Carousel>

        {/* Custom Dots */}
        <div className="flex relative justify-center space-x-1 -mt-5">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-[6px] h-[6px] rounded-full cursor-pointer ${currentSlide === index ? 'bg-[#C5C8D0]' : 'bg-[#3F465D]'}`}
            />
          ))}
        </div>

        <div className="flex mx-auto w-[320px] text-[14px] h-[48px] gap-2 p-3 mt-1">
          <div className="flex justify-center items-center w-[260px] h-[48px] bg-[#222227] rounded-md">
            <img src={notify} className='text-[#C5C8D0] text-md font-bold' />
            <p className='text-[#C5C8D0] font-bold ml-2'>Notify Me</p>
          </div>
          <div className="p-3 bg-[#222227] w-[15vw] h-[48px] flex justify-center items-center text-[#C5C8D0] rounded-md font-bold">
            <button><img src={wish} /></button>
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
